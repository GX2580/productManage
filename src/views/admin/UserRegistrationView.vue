<template>
  <div class="form-container">
    <label>
      Username:
      <input type="text" v-model="username" />
    </label>
    <br />
    <label>
      Password:
      <input type="password" v-model="password" />
    </label>
    <br />
    <button @click="registerUser">Register</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createPasswordApi } from '@/api/passwords'

const username = ref('')
const password = ref('')
const router = useRouter()

const registerUser = async () => {
  try {
    const data = {
      name: username.value,
      password: password.value,
    }
    await createPasswordApi(data)
    alert('Registration successful!')
    router.push('/login') // 假设注册成功后跳转到登录页面
  } catch (error) {
    alert('Registration failed. Please try again.')
  }
}
</script>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}
</style>
