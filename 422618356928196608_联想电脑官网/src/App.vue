<template>
  <div id="app-root">
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">
          <span>联想电脑</span>
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/products">产品线</router-link></li>
          <li><router-link to="/features">产品特点</router-link></li>
          <li><router-link to="/news">最新资讯</router-link></li>
          <li><router-link to="/market-share">市场份额</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="container">
        <p>© 2024 联想（Lenovo）电脑 版权所有 | 创新科技 智慧未来</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>
