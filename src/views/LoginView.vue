<template>
  <div class="login">
    <h2>登陆页面</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">用户名:</label>
        <input
          id="username"
          type="text"
          v-model="username"
          autocomplete="username"
        />
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input
          id="password"
          type="password"
          v-model="password"
          autocomplete="current-password"
        />
      </div>
      <button type="submit" class="login-button">登录</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  if (username.value === 'admin' && password.value === '123') {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // 模拟耗时操作
    alert('成功登录')
    localStorage.setItem('isLogin', 'true')
    router.push('/')
  } else {
    alert('登录失败')
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 50px auto;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 10px;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
