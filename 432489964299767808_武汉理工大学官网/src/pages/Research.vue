<template>
  <div class="research-page">
    <div class="page-banner">
      <div class="container">
        <h1>科研创新</h1>
        <p>前沿科技，创新驱动发展</p>
      </div>
    </div>

    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <!-- 统计卡片 -->
      <section class="stats-section">
        <div class="research-stats">
          <div class="rstat-card card">
            <span class="rstat-icon">📜</span>
            <span class="rstat-value">{{ researchStats.patents }}</span>
            <span class="rstat-label">授权专利（项）</span>
          </div>
          <div class="rstat-card card">
            <span class="rstat-icon">📄</span>
            <span class="rstat-value">{{ researchStats.papers }}</span>
            <span class="rstat-label">发表论文（篇）</span>
          </div>
          <div class="rstat-card card">
            <span class="rstat-icon">🏆</span>
            <span class="rstat-value">{{ researchStats.nationalAwards }}</span>
            <span class="rstat-label">国家级奖项</span>
          </div>
          <div class="rstat-card card">
            <span class="rstat-icon">💰</span>
            <span class="rstat-value">{{ researchStats.annualFunding }}</span>
            <span class="rstat-label">年度科研经费</span>
          </div>
        </div>
      </section>

      <!-- 实验室轮播 -->
      <section class="section">
        <h2 class="section-title">重点实验室</h2>
        <p class="section-subtitle">国家级与省部级科研平台</p>
        <div class="lab-slider">
          <div class="lab-slider-inner" :style="{ transform: `translateX(-${labSlide * 100}%)` }">
            <div v-for="lab in labs" :key="lab.id" class="lab-slide">
              <div class="lab-card card">
                <img :src="lab.image" :alt="lab.name" />
                <div class="lab-info">
                  <span class="tag" :class="lab.level === '国家级' ? 'tag-orange' : 'tag-green'">{{ lab.level }}</span>
                  <h3>{{ lab.name }}</h3>
                  <p>{{ lab.intro }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lab-dots">
            <button v-for="(_, i) in labs" :key="i" :class="{ active: i === labSlide }" @click="labSlide = i"></button>
          </div>
        </div>
      </section>

      <!-- 科研项目 -->
      <section class="section">
        <h2 class="section-title">科研项目</h2>
        <p class="section-subtitle">承担国家级、省部级重大科研任务</p>
        <div class="project-list">
          <div v-for="proj in projects" :key="proj.id" class="project-item card">
            <div class="project-top">
              <span class="tag" :class="proj.level === '国家级' ? 'tag-orange' : 'tag-green'">{{ proj.level }}</span>
              <span class="project-type">{{ proj.type }}</span>
            </div>
            <h3 class="project-name">{{ proj.name }}</h3>
            <div class="project-meta">
              <span>📅 {{ proj.period }}</span>
              <span>💰 {{ proj.budget }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { labs, projects, researchStats } from '@/assets/data/research.js'

const labSlide = ref(0)
</script>

<style scoped>
.page-banner {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  padding: 60px 0;
  text-align: center;
}

.page-banner h1 { font-size: 36px; font-weight: 800; margin-bottom: 8px; }
.page-banner p { font-size: 16px; opacity: 0.8; }

.section { margin-bottom: 50px; }

.research-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.rstat-card {
  text-align: center;
  padding: 28px 16px;
}

.rstat-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 10px;
}

.rstat-value {
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
  display: block;
  margin-bottom: 4px;
}

.rstat-label {
  font-size: 13px;
  color: var(--text-light);
}

.lab-slider {
  overflow: hidden;
  position: relative;
}

.lab-slider-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.lab-slide {
  min-width: 100%;
}

.lab-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.lab-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.lab-info {
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lab-info h3 {
  font-size: 20px;
  color: var(--primary);
  margin: 12px 0;
}

.lab-info p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.7;
}

.lab-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
}

.lab-dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  background: transparent;
  cursor: pointer;
  transition: var(--transition);
}

.lab-dots button.active {
  background: var(--primary);
}

.project-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.project-item {
  padding: 20px;
}

.project-top {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
}

.project-type {
  font-size: 12px;
  color: var(--text-lighter);
}

.project-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.4;
}

.project-meta {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: var(--text-lighter);
}

@media (max-width: 992px) {
  .research-stats { grid-template-columns: repeat(2, 1fr); }
  .lab-card { grid-template-columns: 1fr; }
  .lab-card img { height: 220px; }
  .project-list { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .page-banner { padding: 40px 0; }
  .page-banner h1 { font-size: 28px; }
  .research-stats { grid-template-columns: repeat(2, 1fr); }
}
</style>
