<template>
  <div class="app">
    <header class="header">
      <div class="header-inner container">
        <router-link to="/" class="logo">
          <span class="logo-icon">🎓</span>
          <div class="logo-text">
            <span class="logo-title">武汉理工大学</span>
            <span class="logo-sub">Wuhan University of Technology</span>
          </div>
        </router-link>
        <button class="menu-toggle" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav" :class="{ open: menuOpen }">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: $route.path === item.path || ($route.path.startsWith(item.path) && item.path !== '/') }"
            @click="menuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </nav>
      </div>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-info">
          <div class="footer-brand">
            <span class="footer-logo">🎓</span>
            <span>武汉理工大学</span>
          </div>
          <p class="footer-addr">地址：湖北省武汉市洪山区珞狮路122号 | 邮编：430070</p>
          <p class="footer-addr">招生咨询：027-87859017 | 总机：027-87651428</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>快速链接</h4>
            <router-link to="/about">学校概况</router-link>
            <router-link to="/departments">院系学科</router-link>
            <router-link to="/admission">招生就业</router-link>
          </div>
          <div class="footer-col">
            <h4>更多信息</h4>
            <router-link to="/research">科研创新</router-link>
            <router-link to="/culture">校园文化</router-link>
            <router-link to="/gallery">校园风光</router-link>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 武汉理工大学 版权所有 | 鄂ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const navItems = [
  { path: '/', name: '首页' },
  { path: '/about', name: '学校概况' },
  { path: '/departments', name: '院系学科' },
  { path: '/admission', name: '招生就业' },
  { path: '/research', name: '科研创新' },
  { path: '/culture', name: '校园文化' },
  { path: '/gallery', name: '校园风光' }
]
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--bg-white);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  height: 64px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary);
  text-decoration: none;
}

.logo-icon {
  font-size: 32px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
}

.logo-sub {
  font-size: 11px;
  color: var(--text-lighter);
  letter-spacing: 0.5px;
}

.nav {
  display: flex;
  gap: 4px;
}

.nav-link {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  border-radius: var(--radius);
  transition: var(--transition);
  text-decoration: none;
}

.nav-link:hover {
  background: #f0f4f8;
  color: var(--primary);
}

.nav-link.active {
  background: var(--primary);
  color: #fff;
}

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
  background: var(--primary);
  border-radius: 2px;
  transition: var(--transition);
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

.main {
  margin-top: 64px;
  min-height: calc(100vh - 64px - 280px);
}

.footer {
  background: var(--primary-dark);
  color: #ccc;
  padding: 40px 0 0;
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

.footer-logo {
  font-size: 28px;
}

.footer-addr {
  font-size: 13px;
  line-height: 1.8;
  color: #aaa;
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.footer-col h4 {
  color: #fff;
  font-size: 15px;
  margin-bottom: 12px;
}

.footer-col a {
  display: block;
  color: #aaa;
  font-size: 13px;
  padding: 4px 0;
  text-decoration: none;
}

.footer-col a:hover {
  color: #fff;
}

.footer-bottom {
  grid-column: 1 / -1;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 16px 0;
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  color: #888;
}

@media (max-width: 992px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--bg-white);
    flex-direction: column;
    padding: 12px;
    gap: 2px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition);
  }

  .nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    padding: 12px 16px;
  }

  .logo-title {
    font-size: 15px;
  }

  .logo-sub {
    display: none;
  }
}
</style>
