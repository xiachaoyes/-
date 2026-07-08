<template>
  <div class="about-page">
    <div class="page-banner">
      <div class="container">
        <h1>学校概况</h1>
        <p>百年学府，薪火相传</p>
      </div>
    </div>

    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <!-- 学校简介 -->
      <section class="intro-section">
        <div class="intro-text">
          <h2>{{ schoolInfo.name }}</h2>
          <p class="intro-english">{{ schoolInfo.englishName }}</p>
          <p class="intro-desc">武汉理工大学是教育部直属全国重点大学，国家"211工程"和"双一流"建设高校。学校起源于1898年创办的湖北工艺学堂，2000年由原武汉工业大学、武汉交通科技大学、武汉汽车工业大学合并组建。学校以工科为主，理、工、文、管、经、法、艺术等多学科协调发展，形成了材料科学与工程、交通运输工程、车辆工程等一批优势特色学科群。</p>
          <div class="intro-tags">
            <span class="tag tag-blue">教育部直属</span>
            <span class="tag tag-blue">211工程</span>
            <span class="tag tag-blue">双一流建设</span>
            <span class="tag tag-orange">理工类</span>
          </div>
        </div>
        <div class="intro-image">
          <img src="https://picsum.photos/seed/whutabout/600/400" alt="武汉理工大学" />
        </div>
      </section>

      <!-- 数字统计 -->
      <section class="stats-section">
        <h2 class="section-title">学校数据</h2>
        <p class="section-subtitle">数字见证发展</p>
        <div class="stats-grid">
          <div v-for="(stat, i) in schoolInfo.stats" :key="i" class="stat-card card">
            <span class="stat-icon">{{ stat.icon }}</span>
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </section>

      <!-- 校史时间线 -->
      <section class="history-section">
        <h2 class="section-title">校史沿革</h2>
        <p class="section-subtitle">百廿余载，砥砺前行</p>
        <div class="timeline">
          <div v-for="(item, i) in schoolInfo.history" :key="i" class="timeline-item" :class="{ right: i % 2 === 1 }">
            <div class="timeline-dot"></div>
            <div class="timeline-content card">
              <span class="timeline-year">{{ item.year }}</span>
              <p>{{ item.event }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 校训文化 -->
      <section class="culture-section">
        <h2 class="section-title">学校精神与文化</h2>
        <p class="section-subtitle">厚德博学，追求卓越</p>
        <div class="culture-grid">
          <div v-for="(item, i) in schoolInfo.culture" :key="i" class="culture-card card">
            <h3>{{ item.title }}</h3>
            <p class="culture-quote">{{ item.content }}</p>
            <p class="culture-desc">{{ item.desc }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { schoolInfo } from '@/assets/data/school.js'
</script>

<style scoped>
.page-banner {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  padding: 60px 0;
  text-align: center;
}

.page-banner h1 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 8px;
}

.page-banner p {
  font-size: 16px;
  opacity: 0.8;
}

.intro-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}

.intro-text h2 {
  font-size: 28px;
  color: var(--primary);
  margin-bottom: 6px;
}

.intro-english {
  font-size: 14px;
  color: var(--text-lighter);
  margin-bottom: 16px;
}

.intro-desc {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 16px;
}

.intro-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.intro-image img {
  border-radius: var(--radius-lg);
  width: 100%;
}

.stats-section {
  margin-bottom: 60px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.stat-card {
  text-align: center;
  padding: 24px 12px;
}

.stat-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 24px;
  font-weight: 800;
  color: var(--primary);
  display: block;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 13px;
  color: var(--text-light);
}

.history-section {
  margin-bottom: 60px;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px 40px;
}

.timeline-item.right {
  margin-left: 50%;
}

.timeline-dot {
  position: absolute;
  top: 28px;
  width: 16px;
  height: 16px;
  background: var(--accent);
  border-radius: 50%;
  border: 3px solid var(--primary);
}

.timeline-item:not(.right) .timeline-dot {
  right: -8px;
}

.timeline-item.right .timeline-dot {
  left: -8px;
}

.timeline-content {
  padding: 20px;
}

.timeline-year {
  display: inline-block;
  background: var(--primary);
  color: #fff;
  padding: 3px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
}

.timeline-content p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.culture-card {
  padding: 28px;
  text-align: center;
}

.culture-card h3 {
  font-size: 18px;
  color: var(--primary);
  margin-bottom: 12px;
}

.culture-quote {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 12px;
}

.culture-desc {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 992px) {
  .intro-section { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(3, 1fr); }
  .culture-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .page-banner { padding: 40px 0; }
  .page-banner h1 { font-size: 28px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .culture-grid { grid-template-columns: 1fr; }
  .timeline::before { left: 20px; }
  .timeline-item { width: 100%; padding-left: 50px; padding-right: 20px; }
  .timeline-item.right { margin-left: 0; }
  .timeline-item:not(.right) .timeline-dot,
  .timeline-item.right .timeline-dot { left: 12px; }
}
</style>
