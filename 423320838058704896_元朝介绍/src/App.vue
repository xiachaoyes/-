<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-inner">
        <router-link to="/" class="nav-logo">
          <span class="logo-icon">元</span>
          <span class="logo-text">大元王朝</span>
        </router-link>
        <button class="nav-toggle" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" :class="{ active: menuOpen }">
          <li><router-link to="/" @click="menuOpen = false">首页</router-link></li>
          <li><router-link to="/events" @click="menuOpen = false">历史事件</router-link></li>
          <li><router-link to="/figures" @click="menuOpen = false">著名人物</router-link></li>
          <li><router-link to="/culture" @click="menuOpen = false">文化成就</router-link></li>
          <li><router-link to="/politics" @click="menuOpen = false">政治制度</router-link></li>
          <li><router-link to="/economy" @click="menuOpen = false">经济与社会</router-link></li>
        </ul>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-divider"></div>
        <p class="footer-text">大元王朝 · 1271 — 1368</p>
        <p class="footer-sub">以史为鉴，可以知兴替</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
/* ===== 导航栏 ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(180deg, rgba(26,15,10,0.98) 0%, rgba(26,15,10,0.92) 100%);
  border-bottom: 1px solid var(--border-gold);
  backdrop-filter: blur(10px);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: var(--bg-dark);
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.logo-text {
  font-size: 1.2rem;
  color: var(--gold);
  letter-spacing: 4px;
}

.nav-links {
  display: flex;
  gap: 4px;
}

.nav-links li a {
  display: block;
  padding: 8px 16px;
  color: var(--text-muted);
  font-size: 0.95rem;
  border-radius: 4px;
  transition: all 0.3s;
  letter-spacing: 1px;
}

.nav-links li a:hover,
.nav-links li a.router-link-active {
  color: var(--gold);
  background: rgba(201, 168, 76, 0.1);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
  transition: 0.3s;
}

/* ===== 主内容 ===== */
.main-content {
  padding-top: 64px;
  min-height: calc(100vh - 120px);
}

/* ===== 页脚 ===== */
.footer {
  background: linear-gradient(0deg, rgba(26,15,10,0.98), rgba(26,15,10,0.9));
  border-top: 1px solid var(--border-gold);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  text-align: center;
}

.footer-divider {
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 0 auto 20px;
}

.footer-text {
  color: var(--gold);
  font-size: 1.1rem;
  letter-spacing: 6px;
  margin-bottom: 6px;
}

.footer-sub {
  color: var(--text-muted);
  font-size: 0.85rem;
  letter-spacing: 2px;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(26,15,10,0.98);
    flex-direction: column;
    padding: 12px;
    gap: 2px;
    border-bottom: 1px solid var(--border-gold);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-links li a {
    padding: 12px 16px;
    text-align: center;
  }
}
</style>
