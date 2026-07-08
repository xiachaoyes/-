<template>
  <div class="gallery-page">
    <div class="page-banner">
      <div class="container">
        <h1>校园风光</h1>
        <p>一草一木皆风景，最美武汉理工大学</p>
      </div>
    </div>

    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <!-- 分类筛选 -->
      <div class="filter-bar">
        <button
          v-for="cat in galleryCategories"
          :key="cat"
          class="filter-btn"
          :class="{ active: currentCategory === cat }"
          @click="currentCategory = cat"
        >{{ cat }}</button>
      </div>

      <!-- 图片网格 -->
      <div v-if="filteredImages.length" class="gallery-grid">
        <div
          v-for="img in filteredImages"
          :key="img.id"
          class="gallery-item"
          @click="openLightbox(img)"
        >
          <img :src="img.src" :alt="img.title" loading="lazy" />
          <div class="gallery-overlay">
            <span class="gallery-title">{{ img.title }}</span>
            <span class="gallery-desc">{{ img.desc }}</span>
          </div>
        </div>
      </div>
      <div v-else class="empty-state">
        <p>暂无该分类的图片</p>
      </div>
    </div>

    <!-- 灯箱 -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">✕</button>
        <button class="lightbox-nav lightbox-prev" @click="prevImage">‹</button>
        <div class="lightbox-content">
          <img :src="currentImage?.src" :alt="currentImage?.title" />
          <div class="lightbox-info">
            <h3>{{ currentImage?.title }}</h3>
            <p>{{ currentImage?.desc }}</p>
          </div>
        </div>
        <button class="lightbox-nav lightbox-next" @click="nextImage">›</button>
        <div class="lightbox-counter">{{ currentIndex + 1 }} / {{ filteredImages.length }}</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { galleryImages, galleryCategories } from '@/assets/data/gallery.js'

const currentCategory = ref('全部')
const lightboxOpen = ref(false)
const currentIndex = ref(0)

const filteredImages = computed(() => {
  if (currentCategory.value === '全部') return galleryImages
  return galleryImages.filter(img => img.category === currentCategory.value)
})

const currentImage = computed(() => filteredImages.value[currentIndex.value])

function openLightbox(img) {
  currentIndex.value = filteredImages.value.findIndex(i => i.id === img.id)
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + filteredImages.value.length) % filteredImages.value.length
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % filteredImages.value.length
}
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
  margin-bottom: 24px;
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

.gallery-grid {
  columns: 3;
  column-gap: 16px;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 16px;
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 50%, rgba(0,0,0,0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-title {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}

.gallery-desc {
  color: rgba(255,255,255,0.8);
  font-size: 12px;
  margin-top: 4px;
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: var(--text-lighter);
  font-size: 16px;
}

/* 灯箱 */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  z-index: 3;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--transition);
}

.lightbox-close:hover {
  background: rgba(255,255,255,0.2);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.15);
  border: none;
  color: #fff;
  font-size: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--transition);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.lightbox-nav:hover {
  background: rgba(255,255,255,0.3);
}

.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }

.lightbox-content {
  max-width: 80vw;
  max-height: 80vh;
  text-align: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: var(--radius);
}

.lightbox-info {
  color: #fff;
  margin-top: 16px;
}

.lightbox-info h3 {
  font-size: 18px;
  margin-bottom: 4px;
}

.lightbox-info p {
  font-size: 14px;
  opacity: 0.7;
}

.lightbox-counter {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.6);
  font-size: 14px;
}

@media (max-width: 992px) {
  .gallery-grid { columns: 2; }
}

@media (max-width: 768px) {
  .page-banner { padding: 40px 0; }
  .page-banner h1 { font-size: 28px; }
  .gallery-grid { columns: 1; }
  .lightbox-content { max-width: 95vw; }
  .lightbox-nav { width: 40px; height: 40px; font-size: 28px; }
}
</style>
