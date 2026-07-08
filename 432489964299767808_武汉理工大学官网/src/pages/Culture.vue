<template>
  <div class="culture-page">
    <div class="page-banner">
      <div class="container">
        <h1>校园文化</h1>
        <p>多彩校园，青春绽放</p>
      </div>
    </div>

    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <!-- 文化活动时间线 -->
      <section class="section">
        <h2 class="section-title">文化活动</h2>
        <p class="section-subtitle">全年精彩活动不断</p>
        <div class="activity-timeline">
          <div v-for="(act, i) in activities" :key="i" class="activity-item">
            <div class="activity-date">
              <span class="act-month">{{ act.date.slice(5) }}月</span>
              <span class="act-year">{{ act.date.slice(0, 4) }}</span>
            </div>
            <div class="activity-content card">
              <h3>{{ act.name }}</h3>
              <p>{{ act.desc }}</p>
              <span class="activity-loc">📍 {{ act.location }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 校友风采 -->
      <section class="section">
        <h2 class="section-title">校友风采</h2>
        <p class="section-subtitle">杰出校友，母校荣光</p>
        <div class="alumni-grid">
          <div v-for="a in alumni" :key="a.id" class="alumni-card card">
            <div class="alumni-img">
              <img :src="a.image" :alt="a.name" />
            </div>
            <div class="alumni-info">
              <h3>{{ a.name }}</h3>
              <p class="alumni-major">{{ a.major }}</p>
              <p class="alumni-company">{{ a.company }} · {{ a.position }}</p>
              <p class="alumni-quote">"{{ a.quote }}"</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 社团展示 -->
      <section class="section">
        <h2 class="section-title">学生社团</h2>
        <p class="section-subtitle">百团大战，各展风采</p>
        <div class="clubs-wall">
          <div v-for="club in clubs" :key="club.name" class="club-item card">
            <span class="club-icon">{{ club.icon }}</span>
            <span class="club-name">{{ club.name }}</span>
            <span class="club-desc">{{ club.desc }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { activities, alumni, clubs } from '@/assets/data/culture.js'
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

.activity-timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.activity-date {
  min-width: 80px;
  text-align: center;
  background: var(--primary);
  color: #fff;
  border-radius: var(--radius);
  padding: 12px 8px;
}

.act-month {
  display: block;
  font-size: 20px;
  font-weight: 800;
}

.act-year {
  display: block;
  font-size: 12px;
  opacity: 0.8;
}

.activity-content {
  flex: 1;
  padding: 20px;
}

.activity-content h3 {
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 6px;
}

.activity-content p {
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 8px;
}

.activity-loc {
  font-size: 12px;
  color: var(--text-lighter);
}

.alumni-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.alumni-card {
  display: flex;
  flex-direction: column;
}

.alumni-img {
  height: 200px;
  overflow: hidden;
}

.alumni-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.alumni-card:hover .alumni-img img {
  transform: scale(1.08);
}

.alumni-info {
  padding: 20px;
}

.alumni-info h3 {
  font-size: 18px;
  color: var(--primary);
  margin-bottom: 4px;
}

.alumni-major {
  font-size: 13px;
  color: var(--text-lighter);
  margin-bottom: 4px;
}

.alumni-company {
  font-size: 13px;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 10px;
}

.alumni-quote {
  font-size: 13px;
  color: var(--text-light);
  font-style: italic;
  line-height: 1.6;
  padding: 10px;
  background: #f9f9f9;
  border-radius: var(--radius);
}

.clubs-wall {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.club-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 12px;
  text-align: center;
  cursor: default;
}

.club-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.club-name {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
}

.club-desc {
  font-size: 12px;
  color: var(--text-lighter);
}

@media (max-width: 992px) {
  .alumni-grid { grid-template-columns: repeat(2, 1fr); }
  .clubs-wall { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .page-banner { padding: 40px 0; }
  .page-banner h1 { font-size: 28px; }
  .alumni-grid { grid-template-columns: 1fr; }
  .clubs-wall { grid-template-columns: repeat(2, 1fr); }
  .activity-item { flex-direction: column; }
  .activity-date { min-width: auto; display: flex; gap: 8px; align-items: center; justify-content: center; padding: 8px 16px; }
}
</style>
