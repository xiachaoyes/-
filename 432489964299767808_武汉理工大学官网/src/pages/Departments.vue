<template>
  <div class="departments-page">
    <div class="page-banner">
      <div class="container">
        <h1>院系学科</h1>
        <p>学科齐全，特色鲜明，追求卓越</p>
      </div>
    </div>

    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <!-- 分类筛选 -->
      <div class="filter-bar">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-btn"
          :class="{ active: currentCategory === cat }"
          @click="currentCategory = cat"
        >{{ cat }}</button>
      </div>

      <!-- 搜索 -->
      <div class="search-bar">
        <input v-model="searchQuery" type="text" placeholder="搜索学院名称..." class="search-input" />
      </div>

      <!-- 学院列表 -->
      <div v-if="filtered.length" class="dept-grid">
        <div v-for="dept in filtered" :key="dept.id" class="dept-card card" @click="$router.push(`/departments/${dept.id}`)">
          <div class="dept-image">
            <img :src="dept.image" :alt="dept.name" loading="lazy" />
            <span class="dept-icon">{{ dept.icon }}</span>
          </div>
          <div class="dept-info">
            <h3>{{ dept.name }}</h3>
            <span class="tag tag-blue">{{ dept.category }}</span>
            <p class="dept-intro">{{ dept.intro.slice(0, 60) }}...</p>
            <div class="dept-meta">
              <span>📖 {{ dept.majors.length }}个专业</span>
              <span>🔬 {{ dept.labs.length }}个实验室</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="empty-state">
        <p>暂无匹配的学院信息</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { departments, categories } from '@/assets/data/departments.js'

const currentCategory = ref('全部')
const searchQuery = ref('')

const filtered = computed(() => {
  let list = departments
  if (currentCategory.value !== '全部') {
    list = list.filter(d => d.category === currentCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter(d => d.name.toLowerCase().includes(q))
  }
  return list
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

.filter-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 8px 20px;
  border: 2px solid var(--border);
  border-radius: 20px;
  background: var(--bg-white);
  font-size: 14px;
  cursor: pointer;
  transition: var(--transition);
  color: var(--text);
}

.filter-btn.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

.filter-btn:hover:not(.active) {
  border-color: var(--primary);
  color: var(--primary);
}

.search-bar {
  margin-bottom: 24px;
}

.search-input {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: block;
  padding: 12px 20px;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  font-size: 14px;
  outline: none;
  transition: var(--transition);
}

.search-input:focus {
  border-color: var(--primary);
}

.dept-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.dept-card {
  cursor: pointer;
}

.dept-image {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.dept-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.dept-card:hover .dept-image img {
  transform: scale(1.08);
}

.dept-icon {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 28px;
  background: rgba(255,255,255,0.9);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dept-info {
  padding: 16px;
}

.dept-info h3 {
  font-size: 16px;
  margin-bottom: 6px;
}

.dept-intro {
  font-size: 13px;
  color: var(--text-light);
  margin: 8px 0;
  line-height: 1.5;
}

.dept-meta {
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: var(--text-lighter);
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: var(--text-lighter);
  font-size: 16px;
}

@media (max-width: 992px) {
  .dept-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .page-banner { padding: 40px 0; }
  .page-banner h1 { font-size: 28px; }
  .dept-grid { grid-template-columns: 1fr; }
}
</style>
