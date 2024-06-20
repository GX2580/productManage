<template>
  <div class="login">
    登陆页面
    <form @submit.prevent="login">
      <div>
        用户名: <input type="text" v-model="username" autocomplete="username" />
      </div>
      <div>
        密码:
        <input
          type="password"
          v-model="password"
          autocomplete="current-password"
        />
      </div>
      <button type="submit">登录</button>
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
  text-align: center;
}
</style>
