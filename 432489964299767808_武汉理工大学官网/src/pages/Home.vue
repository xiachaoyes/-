<template>
  <div class="home">
    <!-- 轮播大图 -->
    <section class="hero">
      <div class="hero-slider" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, i) in slides" :key="i" class="hero-slide" :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="hero-overlay"></div>
          <div class="hero-content container">
            <h1 class="hero-title">{{ slide.title }}</h1>
            <p class="hero-desc">{{ slide.desc }}</p>
            <router-link :to="slide.link" class="btn btn-accent hero-btn">{{ slide.btnText }}</router-link>
          </div>
        </div>
      </div>
      <div class="hero-dots">
        <button v-for="(_, i) in slides" :key="i" :class="{ active: i === currentSlide }" @click="currentSlide = i"></button>
      </div>
      <button class="hero-arrow hero-arrow-left" @click="prevSlide">‹</button>
      <button class="hero-arrow hero-arrow-right" @click="nextSlide">›</button>
    </section>

    <!-- 快速入口 -->
    <section class="quick-entry container">
      <h2 class="section-title">快速入口</h2>
      <p class="section-subtitle">一键直达您关心的内容</p>
      <div class="entry-grid">
        <router-link v-for="item in quickEntries" :key="item.path" :to="item.path" class="entry-card card">
          <span class="entry-icon">{{ item.icon }}</span>
          <span class="entry-name">{{ item.name }}</span>
          <span class="entry-desc">{{ item.desc }}</span>
        </router-link>
      </div>
    </section>

    <!-- 新闻动态 -->
    <section class="news-section" style="background: var(--bg-white); padding: 60px 0;">
      <div class="container">
        <h2 class="section-title">新闻动态</h2>
        <p class="section-subtitle">了解武汉理工大学最新资讯</p>
        <div class="news-grid">
          <div v-for="item in newsList" :key="item.id" class="news-card card">
            <div class="news-meta">
              <span class="tag tag-blue">{{ item.category }}</span>
              <span class="news-date">{{ item.date }}</span>
            </div>
            <h3 class="news-title">{{ item.title }}</h3>
            <p class="news-summary">{{ item.summary }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 数字统计 -->
    <section class="stats-section" style="background: var(--primary); padding: 60px 0;">
      <div class="container">
        <h2 class="section-title" style="color: #fff;">武汉理工大学·数字</h2>
        <p class="section-subtitle" style="color: rgba(255,255,255,0.7);">用数据见证实力</p>
        <div class="stats-grid">
          <div v-for="(stat, i) in schoolStats" :key="i" class="stat-item" ref="statRefs">
            <span class="stat-icon">{{ stat.icon }}</span>
            <span class="stat-value" :ref="el => { if(el) statEls[i] = el }">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 风光预览 -->
    <section class="preview-section" style="padding: 60px 0;">
      <div class="container">
        <h2 class="section-title">校园风光</h2>
        <p class="section-subtitle">一草一木皆风景</p>
        <div class="preview-grid">
          <div v-for="img in previewImages" :key="img.id" class="preview-item" @click="$router.push('/gallery')">
            <img :src="img.src" :alt="img.title" loading="lazy" />
            <div class="preview-overlay">
              <span>{{ img.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { schoolInfo, newsList } from '@/assets/data/school.js'
import { galleryImages } from '@/assets/data/gallery.js'

const currentSlide = ref(0)
let timer = null

const slides = [
  { title: '厚德博学，追求卓越', desc: '教育部直属全国重点大学，国家"211工程"和"双一流"建设高校', image: 'https://picsum.photos/seed/whut1/1600/600', link: '/about', btnText: '了解武汉理工大学' },
  { title: '材料科学的领跑者', desc: '材料科学学科ESI排名全球前1‰，多项成果国际领先', image: 'https://picsum.photos/seed/whut2/1600/600', link: '/research', btnText: '科研创新' },
  { title: '欢迎报考武汉理工大学', desc: '96个本科专业，50个国家级一流专业建设点，等你来', image: 'https://picsum.photos/seed/whut3/1600/600', link: '/admission', btnText: '招生信息' }
]

const quickEntries = [
  { path: '/about', name: '学校概况', icon: '🏛️', desc: '百年学府，底蕴深厚' },
  { path: '/departments', name: '院系学科', icon: '📚', desc: '学科齐全，特色鲜明' },
  { path: '/admission', name: '招生就业', icon: '🎯', desc: '招生政策，就业质量' },
  { path: '/research', name: '科研创新', icon: '🔬', desc: '前沿科技，创新成果' },
  { path: '/culture', name: '校园文化', icon: '🎭', desc: '多彩活动，青春风采' },
  { path: '/gallery', name: '校园风光', icon: '🏞️', desc: '美丽校园，如诗如画' }
]

const schoolStats = schoolInfo.stats
const previewImages = galleryImages.slice(0, 6)

const statEls = ref([])

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  height: 480px;
}

.hero-slider {
  display: flex;
  height: 100%;
  transition: transform 0.6s ease;
}

.hero-slide {
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,64,128,0.8) 0%, rgba(0,0,0,0.4) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

.hero-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.hero-desc {
  font-size: 18px;
  margin-bottom: 28px;
  opacity: 0.9;
  max-width: 600px;
}

.hero-btn {
  font-size: 16px;
  padding: 14px 36px;
}

.hero-dots {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.hero-dots button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: transparent;
  cursor: pointer;
  transition: var(--transition);
}

.hero-dots button.active {
  background: #fff;
}

.hero-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background: rgba(255,255,255,0.2);
  border: none;
  color: #fff;
  font-size: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.hero-arrow:hover {
  background: rgba(255,255,255,0.4);
}

.hero-arrow-left { left: 20px; }
.hero-arrow-right { right: 20px; }

.quick-entry {
  padding: 60px 20px;
}

.entry-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.entry-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 16px;
  text-align: center;
  text-decoration: none;
  color: var(--text);
}

.entry-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.entry-name {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
}

.entry-desc {
  font-size: 12px;
  color: var(--text-lighter);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.news-card {
  padding: 24px;
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.news-date {
  font-size: 12px;
  color: var(--text-lighter);
}

.news-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.4;
}

.news-summary {
  font-size: 13px;
  color: var(--text-light);
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.stat-item {
  text-align: center;
  color: #fff;
  padding: 20px;
}

.stat-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 12px;
}

.stat-value {
  font-size: 32px;
  font-weight: 800;
  display: block;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.8;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.preview-item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.preview-item:hover img {
  transform: scale(1.08);
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 60%, rgba(0,0,0,0.7));
  display: flex;
  align-items: flex-end;
  padding: 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 992px) {
  .hero { height: 380px; }
  .hero-title { font-size: 32px; }
  .entry-grid { grid-template-columns: repeat(3, 1fr); }
  .news-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { grid-template-columns: repeat(3, 1fr); }
  .preview-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .hero { height: 300px; }
  .hero-title { font-size: 24px; }
  .hero-desc { font-size: 14px; }
  .entry-grid { grid-template-columns: repeat(2, 1fr); }
  .news-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .preview-grid { grid-template-columns: 1fr; }
}
</style>
