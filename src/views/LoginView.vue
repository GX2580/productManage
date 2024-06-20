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
          :class="{ 'input-error': errorMessage }"
        />
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input
          id="password"
          type="password"
          v-model="password"
          autocomplete="current-password"
          :class="{ 'input-error': errorMessage }"
        />
      </div>
      <button type="submit" class="login-button">登录</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getPasswordApi } from '../api/passwords'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const login = async () => {
  errorMessage.value = ''
  try {
    const response = await getPasswordApi()
    const passwords = response // 假设返回的数据中包含密码数组

    const user = passwords.find(
      (p) =>
        p.name === username.value && p.password === parseInt(password.value, 10)
    )

    if (user) {
      alert('成功登录')
      localStorage.setItem('isLogin', 'true')
      router.push('/')
    } else {
      errorMessage.value = '用户名或密码错误'
    }
  } catch (error) {
    console.error('获取密码失败:', error)
    errorMessage.value = '获取密码失败，请稍后再试'
  }
}
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-error {
  border-color: red;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
