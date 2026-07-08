<template>
  <div class="admission-page">
    <div class="page-banner">
      <div class="container">
        <h1>招生就业</h1>
        <p>招生政策、历年分数、就业质量</p>
      </div>
    </div>

    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <!-- 招生简章 -->
      <section class="section">
        <h2 class="section-title">招生简章</h2>
        <p class="section-subtitle">了解最新招生政策</p>
        <div class="policy-list">
          <div v-for="(p, i) in policies" :key="i" class="policy-item card">
            <div class="policy-info">
              <span class="tag" :class="p.type === '本科' ? 'tag-blue' : p.type === '硕士' ? 'tag-green' : 'tag-orange'">{{ p.type }}</span>
              <span class="policy-title">{{ p.title }}</span>
            </div>
            <div class="policy-meta">
              <span>{{ p.date }}</span>
              <a :href="p.file" class="btn btn-primary btn-sm">下载简章</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 分数线 -->
      <section class="section">
        <h2 class="section-title">历年分数线</h2>
        <p class="section-subtitle">选择年份查看各省录取分数</p>
        <div class="score-controls">
          <label>选择年份：</label>
          <select v-model="selectedYear" class="select-input">
            <option v-for="y in scoreData.years" :key="y" :value="y">{{ y }}年</option>
          </select>
        </div>
        <div class="table-wrap">
          <table class="score-table">
            <thead>
              <tr>
                <th>省份</th>
                <th>录取分数</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="province in scoreData.provinces" :key="province">
                <td>{{ province }}</td>
                <td><span class="score-value">{{ currentScores[province] || '-' }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 就业数据 -->
      <section class="section">
        <h2 class="section-title">就业质量</h2>
        <p class="section-subtitle">2024届毕业生就业数据一览</p>
        <div class="employment-cards">
          <div class="emp-card card">
            <h3>总体就业率</h3>
            <p class="emp-big">{{ employmentData.overallRate }}%</p>
          </div>
          <div class="emp-card card" v-for="e in employmentData.byEducation" :key="e.name">
            <h3>{{ e.name }}</h3>
            <p class="emp-big">{{ e.value }}%</p>
          </div>
        </div>

        <div class="chart-grid">
          <div class="chart-card card">
            <h3>就业行业分布</h3>
            <div class="bar-chart">
              <div v-for="item in employmentData.byIndustry" :key="item.name" class="bar-row">
                <span class="bar-label">{{ item.name }}</span>
                <div class="bar-track">
                  <div class="bar-fill" :style="{ width: item.value + '%' }"></div>
                </div>
                <span class="bar-value">{{ item.value }}%</span>
              </div>
            </div>
          </div>
          <div class="chart-card card">
            <h3>就业单位性质</h3>
            <div class="bar-chart">
              <div v-for="item in employmentData.byEmployer" :key="item.name" class="bar-row">
                <span class="bar-label">{{ item.name }}</span>
                <div class="bar-track">
                  <div class="bar-fill bar-fill-orange" :style="{ width: item.value + '%' }"></div>
                </div>
                <span class="bar-value">{{ item.value }}%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { scoreData, employmentData, policies } from '@/assets/data/admission.js'

const selectedYear = ref(2024)

const currentScores = computed(() => {
  return scoreData.data[selectedYear.value] || {}
})
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

.policy-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.policy-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

.policy-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.policy-title {
  font-size: 15px;
  font-weight: 500;
}

.policy-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: var(--text-lighter);
}

.btn-sm {
  padding: 6px 16px;
  font-size: 13px;
}

.score-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  justify-content: center;
}

.select-input {
  padding: 8px 16px;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  font-size: 14px;
  outline: none;
  background: var(--bg-white);
}

.select-input:focus {
  border-color: var(--primary);
}

.table-wrap {
  overflow-x: auto;
}

.score-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.score-table th {
  background: var(--primary);
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  text-align: left;
}

.score-table td {
  padding: 10px 20px;
  font-size: 14px;
  border-bottom: 1px solid var(--border);
}

.score-table tr:last-child td { border-bottom: none; }

.score-table tr:hover td { background: #f0f4f8; }

.score-value {
  font-weight: 700;
  color: var(--accent);
  font-size: 16px;
}

.employment-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.emp-card {
  padding: 24px;
  text-align: center;
}

.emp-card h3 {
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 8px;
}

.emp-big {
  font-size: 32px;
  font-weight: 800;
  color: var(--primary);
}

.chart-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.chart-card {
  padding: 24px;
}

.chart-card h3 {
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 20px;
}

.bar-chart {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bar-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bar-label {
  width: 80px;
  font-size: 13px;
  color: var(--text-light);
  flex-shrink: 0;
}

.bar-track {
  flex: 1;
  height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: var(--primary);
  border-radius: 10px;
  transition: width 0.8s ease;
}

.bar-fill-orange {
  background: var(--accent);
}

.bar-value {
  width: 50px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  text-align: right;
}

@media (max-width: 992px) {
  .employment-cards { grid-template-columns: repeat(2, 1fr); }
  .chart-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .page-banner { padding: 40px 0; }
  .page-banner h1 { font-size: 28px; }
  .employment-cards { grid-template-columns: repeat(2, 1fr); }
  .policy-item { flex-direction: column; align-items: flex-start; gap: 10px; }
}
</style>
