<template>
  <div class="detail-page">
    <div class="page-banner" :style="{ background: `linear-gradient(135deg, var(--primary), var(--primary-dark))` }">
      <div class="container">
        <router-link to="/departments" class="back-link">← 返回院系列表</router-link>
        <h1>{{ dept?.name }}</h1>
        <p>{{ dept?.intro?.slice(0, 80) }}...</p>
      </div>
    </div>

    <div v-if="dept" class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="detail-grid">
        <div class="detail-main">
          <section class="detail-section card">
            <h2>学院简介</h2>
            <p>{{ dept.intro }}</p>
            <img :src="dept.image" :alt="dept.name" class="detail-img" />
          </section>

          <section class="detail-section card">
            <h2>专业设置</h2>
            <div class="major-list">
              <span v-for="major in dept.majors" :key="major" class="major-tag">{{ major }}</span>
            </div>
          </section>

          <section class="detail-section card">
            <h2>科研平台</h2>
            <ul class="lab-list">
              <li v-for="lab in dept.labs" :key="lab">🔬 {{ lab }}</li>
            </ul>
          </section>
        </div>

        <div class="detail-side">
          <div class="side-card card">
            <h3>师资力量</h3>
            <p>{{ dept.faculty }}</p>
          </div>
          <div class="side-card card">
            <h3>学科类别</h3>
            <span class="tag tag-blue" style="font-size:14px; padding:6px 16px;">{{ dept.category }}</span>
          </div>
          <div class="side-card card">
            <h3>专业数量</h3>
            <p class="side-num">{{ dept.majors.length }}个</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container" style="padding: 60px 0; text-align: center; color: var(--text-lighter);">
      <p>未找到该学院信息</p>
      <router-link to="/departments" class="btn btn-primary" style="margin-top: 16px;">返回院系列表</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { departments } from '@/assets/data/departments.js'

const route = useRoute()
const dept = computed(() => departments.find(d => d.id === Number(route.params.id)))
</script>

<style scoped>
.page-banner {
  color: #fff;
  padding: 50px 0 40px;
  text-align: center;
}

.back-link {
  display: inline-block;
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  margin-bottom: 12px;
  text-decoration: none;
}

.back-link:hover { color: #fff; }

.page-banner h1 { font-size: 32px; font-weight: 800; margin-bottom: 8px; }
.page-banner p { font-size: 15px; opacity: 0.8; }

.detail-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: start;
}

.detail-section {
  padding: 28px;
  margin-bottom: 20px;
}

.detail-section h2 {
  font-size: 20px;
  color: var(--primary);
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border);
}

.detail-section p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 16px;
}

.detail-img {
  border-radius: var(--radius);
  width: 100%;
  margin-top: 12px;
}

.major-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.major-tag {
  padding: 6px 16px;
  background: #e8f0fe;
  color: var(--primary);
  border-radius: 20px;
  font-size: 14px;
}

.lab-list li {
  padding: 8px 0;
  font-size: 14px;
  color: var(--text-light);
  border-bottom: 1px solid var(--border);
}

.lab-list li:last-child { border-bottom: none; }

.side-card {
  padding: 20px;
  margin-bottom: 16px;
}

.side-card h3 {
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 10px;
}

.side-card p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.side-num {
  font-size: 28px !important;
  font-weight: 800;
  color: var(--accent) !important;
}

@media (max-width: 992px) {
  .detail-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .page-banner { padding: 40px 0 30px; }
  .page-banner h1 { font-size: 24px; }
}
</style>
