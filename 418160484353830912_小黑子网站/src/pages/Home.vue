<template>
  <div class="page">
    <div class="container">
      <!-- 英雄区 -->
      <div class="hero">
        <div class="hero-text">
          <h1 class="page-title">🎤 只因你太美 🎤</h1>
          <p class="page-subtitle">欢迎来到全球最大（自称）的小黑子交流基地</p>
        </div>
        <div class="hero-banner">
          <img src="https://picsum.photos/seed/kun/800/300" alt="只因你太美" class="hero-img">
          <div class="hero-overlay">
            <span>🐔 你干嘛～哎呦～ 🐔</span>
          </div>
        </div>
      </div>

      <!-- 数据统计 -->
      <div class="stats">
        <div class="stat-item">
          <span class="stat-num">2.5</span>
          <span class="stat-unit">亿</span>
          <span class="stat-label">全球小黑子数量（自称）</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">999+</span>
          <span class="stat-label">经典名场面</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">∞</span>
          <span class="stat-label">鸡你太美循环次数</span>
        </div>
      </div>

      <!-- 今日热梗 -->
      <div class="section">
        <h2 class="section-title">🔥 今日热梗</h2>
        <div class="card-grid">
          <div class="card hot-card" v-for="(item, i) in hotMemes" :key="i">
            <div class="hot-rank">#{{ i + 1 }}</div>
            <div class="card-body">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
              <div class="hot-meta">
                <span>🔥 {{ item.hot }}°C</span>
                <span>💬 {{ item.comments }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 快速入口 -->
      <div class="section">
        <h2 class="section-title">🎯 快速上手</h2>
        <div class="quick-links">
          <router-link to="/memes" class="quick-card">
            <span class="quick-icon">😂</span>
            <span class="quick-text">补梗大全</span>
            <span class="quick-arrow">→</span>
          </router-link>
          <router-link to="/talents" class="quick-card">
            <span class="quick-icon">💃</span>
            <span class="quick-text">才艺鉴赏</span>
            <span class="quick-arrow">→</span>
          </router-link>
          <router-link to="/about" class="quick-card">
            <span class="quick-icon">📖</span>
            <span class="quick-text">入门指南</span>
            <span class="quick-arrow">→</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const hotMemes = [
  {
    title: '鸡你太美',
    desc: '原曲《只因你太美》的空耳神作，从此"鸡"取代了"只"，成为了一代传奇的开端。',
    hot: 9999,
    comments: '2.5w'
  },
  {
    title: '背带裤中分头',
    desc: '经典皮肤搭配：白色背带裤 + 中分发型 + 银色项链，小黑子们争相cos的时尚单品。',
    hot: 8888,
    comments: '1.8w'
  },
  {
    title: '铁山靠',
    desc: '一段神秘的舞蹈动作，被广大网友反复研究、模仿、二创，至今无人能完美复刻。',
    hot: 7777,
    comments: '1.5w'
  },
  {
    title: '你干嘛～哎呦～',
    desc: '一句充满灵魂的呐喊，适用于各种尴尬、惊讶、无语的场景，已入选网络流行语大全。',
    hot: 6666,
    comments: '1.2w'
  }
]
</script>

<style scoped>
.hero {
  margin-bottom: 40px;
}

.hero-banner {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.hero-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  padding: 40px 30px 20px;
  text-align: center;
}

.hero-overlay span {
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
  animation: pulse 2s infinite;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.stat-item {
  background: rgba(255,255,255,0.85);
  border-radius: 16px;
  padding: 24px 32px;
  text-align: center;
  min-width: 180px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  backdrop-filter: blur(10px);
}

.stat-num {
  font-size: 36px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff6b6b, #ffd93d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-unit {
  font-size: 20px;
  font-weight: bold;
  color: #ff6b6b;
}

.stat-label {
  display: block;
  color: #888;
  font-size: 13px;
  margin-top: 6px;
}

.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 26px;
  margin-bottom: 24px;
  padding-left: 16px;
  border-left: 4px solid #ffd93d;
  color: #444;
}

.hot-card {
  position: relative;
  padding-top: 0;
}

.hot-rank {
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #ff6b6b, #ff4757);
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(255,107,107,0.4);
}

.hot-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #eee;
  font-size: 13px;
  color: #999;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.quick-card {
  background: rgba(255,255,255,0.85);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  transition: all 0.3s;
  backdrop-filter: blur(10px);
}

.quick-card:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.quick-icon {
  font-size: 32px;
}

.quick-text {
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: #444;
}

.quick-arrow {
  font-size: 20px;
  color: #ccc;
  transition: all 0.3s;
}

.quick-card:hover .quick-arrow {
  color: #ff6b6b;
  transform: translateX(3px);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@media (max-width: 768px) {
  .hero-img {
    height: 200px;
  }
  
  .hero-overlay span {
    font-size: 20px;
  }
  
  .stats {
    gap: 16px;
  }
  
  .stat-item {
    min-width: 140px;
    padding: 16px 20px;
  }
  
  .stat-num {
    font-size: 28px;
  }
}
</style>
