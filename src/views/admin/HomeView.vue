<template>
  <div class="top-menu">
    <span>Top Menu</span>
    <button @click="logout">Exit</button>
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
/* 顶部菜单样式 */
.top-menu {
  border-bottom: 1px solid #ccc; /* 使用更轻的颜色以减少视觉干扰 */
  padding: 10px 20px; /* 增加左右内边距 */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: #f8f9fa; /* 添加背景色 */
  display: flex; /* 使用 flexbox 布局 */
  justify-content: right; /* 使内容分布在两端 */
  align-items: center; /* 垂直居中 */
}

.top-menu span {
  font-weight: bold; /* 增加字体粗细 */
  margin-right: 43%;
}

.top-menu button {
  border-radius: 35%;
  padding: 5px 15px; /* 调整内边距以更好地匹配按钮尺寸 */
  border: 1px solid #ccc; /* 添加边框 */
  background-color: #fff; /* 添加背景色 */
  cursor: pointer; /* 添加鼠标指针样式 */
}

/* 底部布局样式 */
.bottom {
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  top: 45px; /* 确保内容不会被顶部菜单遮挡 */
  height: calc(100% - 45px); /* 确保内容占满剩余高度 */
}

/* 侧边栏样式 */
.sidebar {
  border-right: 1px solid #ccc; /* 使用更轻的颜色以减少视觉干扰 */
  width: 15%;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa; /* 添加背景色 */
}

.sidebar ul {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.sidebar ul li {
  border: 1px solid #ccc; /* 使用更轻的颜色以减少视觉干扰 */
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 10px; /* 增加内边距 */
  background-color: #fff; /* 添加背景色 */
  cursor: pointer; /* 添加鼠标指针样式 */
  transition: background-color 0.3s; /* 添加过渡效果 */
}

.sidebar ul li:hover {
  background-color: #e9ecef; /* 添加悬停效果 */
}

/* 主容器样式 */
.container {
  border-left: 1px solid #ccc; /* 使用更轻的颜色以减少视觉干扰 */
  flex: 1; /* 使容器占满剩余空间 */
  padding: 20px; /* 增加内边距 */
  background-color: #ffffff; /* 添加背景色 */
  overflow-y: auto; /* 添加垂直滚动条 */
}
</style>
