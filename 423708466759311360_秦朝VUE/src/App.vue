<template>
  <div id="app-root">
    <nav class="navbar">
      <div class="nav-inner">
        <router-link to="/" class="nav-logo">
          <span class="logo-icon">🏯</span>
          <span class="logo-text">大秦帝国</span>
        </router-link>
        <button class="nav-toggle" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" :class="{ show: menuOpen }">
          <li><router-link to="/" @click="menuOpen=false">首页</router-link></li>
          <li><router-link to="/emperor" @click="menuOpen=false">秦始皇</router-link></li>
          <li><router-link to="/unification" @click="menuOpen=false">统一六国</router-link></li>
          <li><router-link to="/system" @click="menuOpen=false">制度创新</router-link></li>
          <li><router-link to="/culture" @click="menuOpen=false">文化成就</router-link></li>
          <li><router-link to="/engineering" @click="menuOpen=false">重大工程</router-link></li>
          <li><router-link to="/fall" @click="menuOpen=false">秦末风云</router-link></li>
          <li><router-link to="/legacy" @click="menuOpen=false">历史影响</router-link></li>
        </ul>
      </div>
    </nav>
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>大秦帝国</h3>
            <p>公元前221年 — 公元前207年</p>
            <p class="footer-motto">中国历史上第一个大一统王朝</p>
          </div>
          <div class="footer-links">
            <h4>探索更多</h4>
            <router-link to="/emperor">秦始皇</router-link>
            <router-link to="/unification">统一六国</router-link>
            <router-link to="/engineering">万里长城</router-link>
          </div>
          <div class="footer-info">
            <h4>关于本站</h4>
            <p>以史为鉴，可以知兴替。本站旨在传播秦朝历史文化知识。</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 大秦帝国 · 历史知识网站</p>
        </div>
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
  z-index: 1000;
  background: linear-gradient(180deg, rgba(26,26,26,0.98) 0%, rgba(45,45,45,0.95) 100%);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid var(--qin-gold);
  box-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--qin-gold);
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 3px;
}

.logo-icon {
  font-size: 1.6rem;
}

.nav-links {
  display: flex;
  gap: 4px;
}

.nav-links li a {
  color: var(--qin-cream);
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: var(--transition);
  letter-spacing: 1px;
  position: relative;
}

.nav-links li a:hover,
.nav-links li a.router-link-active {
  color: var(--qin-gold);
  background: rgba(212,160,23,0.1);
}

.nav-links li a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--qin-gold);
  border-radius: 1px;
}

/* ===== 汉堡菜单 ===== */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav-toggle span {
  display: block;
  width: 26px;
  height: 2px;
  background: var(--qin-gold);
  transition: var(--transition);
  border-radius: 2px;
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ===== 主内容 ===== */
.main-content {
  padding-top: 64px;
  min-height: calc(100vh - 64px);
}

/* ===== 页脚 ===== */
.site-footer {
  background: var(--qin-black);
  color: var(--qin-cream);
  padding: 50px 0 20px;
  margin-top: 60px;
  border-top: 3px solid var(--qin-gold);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(212,160,23,0.2);
}

.footer-brand h3 {
  color: var(--qin-gold);
  font-size: 1.5rem;
  letter-spacing: 4px;
  margin-bottom: 8px;
}

.footer-brand p {
  color: var(--qin-light-gold);
  opacity: 0.8;
  font-size: 0.9rem;
}

.footer-motto {
  margin-top: 8px;
  font-style: italic;
}

.footer-links h4,
.footer-info h4 {
  color: var(--qin-gold);
  margin-bottom: 12px;
  font-size: 1rem;
  letter-spacing: 2px;
}

.footer-links a {
  display: block;
  color: var(--qin-cream);
  opacity: 0.7;
  padding: 4px 0;
  font-size: 0.9rem;
  transition: var(--transition);
}

.footer-links a:hover {
  opacity: 1;
  color: var(--qin-gold);
  padding-left: 5px;
}

.footer-info p {
  font-size: 0.85rem;
  opacity: 0.7;
  line-height: 1.6;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  font-size: 0.85rem;
  opacity: 0.6;
}

/* ===== 响应式导航 ===== */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(26,26,26,0.98);
    flex-direction: column;
    padding: 10px 20px 20px;
    gap: 2px;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition);
    border-bottom: 2px solid var(--qin-gold);
  }

  .nav-links.show {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-links li a {
    display: block;
    padding: 12px 16px;
    font-size: 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
}
</style>
