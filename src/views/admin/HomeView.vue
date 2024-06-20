<template>
  <div class="top-menu">
    <span>Top Menu</span><button @click="logout">Exit</button>
  </div>
  <div class="bottom">
    <aside class="sidebar">
      <ul>
        <li><RouterLink to="/ProductManage">Product Management</RouterLink></li>
        <li><RouterLink to="AddingGoods">Adding Goods</RouterLink></li>
      </ul>
    </aside>
    <main class="container">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()
const logout = () => {
  localStorage.removeItem('isLogin')
  router.push('/login')
}
</script>

<style scoped>
.top-menu {
  border: 1px solid black;
  text-align: right;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
.top-menu span {
  margin-right: 41%;
}
.top-menu button {
  border-radius: 35%;
  padding: 0 20px;
  margin-right: 10px;
}
.bottom {
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  top: 45px;
}
.sidebar {
  border: 1px solid black;
  width: 15%;
  display: flex;
  justify-content: center;
}
.sidebar ul {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.sidebar ul li {
  border: 1px solid black;
  width: 85%;
  text-align: center;
  margin-top: 10px;
  list-style-type: none;
}
.container {
  border: 1px solid black;
  width: 85%;
  height: 400px;
  display: flex;
  justify-content: center;
}
</style>
