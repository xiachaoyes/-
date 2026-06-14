<template>
  <div class="app-wrapper">
    <header class="navbar">
      <div class="navbar-inner">
        <router-link to="/" class="logo">
          <span class="logo-icon">鼎</span>
          <span class="logo-text">华夏第一朝</span>
        </router-link>
        <button class="menu-toggle" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
          <span></span><span></span><span></span>
        </button>
        <nav :class="['nav-links', { open: menuOpen }]">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: $route.path === item.path }"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="site-footer">
      <div class="footer-inner">
        <p>华夏文明源远流长 · 夏朝 —— 中国历史上第一个世袭制王朝</p>
        <p class="footer-motto">以史为鉴，可以知兴替</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/establish', label: '夏朝建立' },
  { path: '/politics', label: '政治制度' },
  { path: '/economy', label: '经济文化' },
  { path: '/fall', label: '夏朝灭亡' },
  { path: '/significance', label: '历史意义' }
]
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ===== 导航栏 ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--color-header-bg);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
  height: var(--nav-height);
}

.navbar-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-accent) !important;
  font-family: var(--font-title);
  font-size: 1.25rem;
  letter-spacing: 2px;
}

.logo-icon {
  font-size: 1.6rem;
}

.nav-links {
  display: flex;
  gap: 4px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: 4px;
  color: var(--color-text-muted) !important;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.3s;
  position: relative;
}

.nav-link:hover {
  color: var(--color-accent) !important;
  background: rgba(201, 168, 76, 0.08);
}

.nav-link.active {
  color: var(--color-accent) !important;
  background: rgba(201, 168, 76, 0.12);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: var(--color-accent);
}

/* ===== 汉堡菜单 ===== */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: all 0.3s;
  border-radius: 2px;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ===== 页脚 ===== */
.site-footer {
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  padding: 32px 24px;
  text-align: center;
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.site-footer p {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.footer-motto {
  margin-top: 8px;
  color: var(--color-accent);
  font-family: var(--font-title);
  font-size: 0.95rem;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: var(--color-header-bg);
    flex-direction: column;
    padding: 16px;
    gap: 4px;
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    padding: 12px 16px;
    font-size: 1rem;
  }

  .nav-link.active::after {
    display: none;
  }
}
</style>
