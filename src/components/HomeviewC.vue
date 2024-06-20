<template>
  <div class="top-menu">TopMenu<button>Exit</button></div>
  <aside class="sidebar">
    <ul>
      <li><RouterLink to="/ProductManage">Product Management</RouterLink></li>
      <li><RouterLink to="AddingGoods">Adding goods</RouterLink></li>
    </ul>
  </aside>
  <main class="container">
    <RouterView></RouterView>
  </main>
</template>

<script setup></script>

<style scoped></style>
