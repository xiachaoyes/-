<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <span>🐔</span> 夏超 无敌 <span>🎤</span>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">🏠 首页</router-link></li>
          <li><router-link to="/memes">😂 经典梗</router-link></li>
          <li><router-link to="/talents">💃 才艺展示</router-link></li>
          <li><router-link to="/about">📖 关于</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>
