<template>
  <div class="home-page">
    <!-- 大图横幅 -->
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">大秦帝国</h1>
        <div class="gold-divider"></div>
        <p class="hero-subtitle">中国历史上第一个大一统王朝</p>
        <p class="hero-desc">公元前221年 — 公元前207年 · 十五载辉煌铸就千年基业</p>
        <router-link to="/emperor" class="hero-btn">了解秦始皇</router-link>
      </div>
    </section>

    <!-- 核心数据 -->
    <section class="container">
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">公元前221年</div>
          <div class="stat-label">统一六国</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">340万km²</div>
          <div class="stat-label">疆域面积</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">约2000万</div>
          <div class="stat-label">人口数量</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">15年</div>
          <div class="stat-label">国祚</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">36郡</div>
          <div class="stat-label">行政划分</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">8000+</div>
          <div class="stat-label">兵马俑数量</div>
        </div>
      </div>
    </section>

    <!-- 秦朝简介 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>帝国概览</h2>
      </div>
      <div class="intro-card">
        <div class="intro-text">
          <p>秦朝（公元前221年—公元前207年），是由战国时期的秦国发展起来的中国历史上第一个大一统王朝。秦朝的开国君主嬴政自称"始皇帝"，故称秦始皇。秦朝结束了自春秋战国以来五百多年的诸侯割据局面，建立了中国历史上第一个中央集权的多民族国家。</p>
          <p>秦朝在政治、经济、文化、军事等方面都进行了开创性的改革。推行郡县制、统一文字、统一度量衡、修筑长城等举措，对后世两千多年的中国历史产生了深远影响。虽然秦朝仅存在了短短十五年，但其建立的制度框架为后续王朝所继承和发展。</p>
        </div>
        <div class="intro-img">
          <img src="https://picsum.photos/seed/qinmap/600/400" alt="秦朝疆域图">
        </div>
      </div>
    </section>

    <!-- 快速导航 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>探索秦朝</h2>
      </div>
      <div class="grid grid-4">
        <router-link to="/emperor" class="nav-card">
          <div class="nav-card-icon">👑</div>
          <h3>秦始皇</h3>
          <p>千古一帝的传奇人生</p>
        </router-link>
        <router-link to="/unification" class="nav-card">
          <div class="nav-card-icon">⚔️</div>
          <h3>统一六国</h3>
          <p>横扫六合的战争历程</p>
        </router-link>
        <router-link to="/system" class="nav-card">
          <div class="nav-card-icon">📜</div>
          <h3>制度创新</h3>
          <p>开创性的政治制度</p>
        </router-link>
        <router-link to="/culture" class="nav-card">
          <div class="nav-card-icon">🖌️</div>
          <h3>文化成就</h3>
          <p>书同文车同轨</p>
        </router-link>
        <router-link to="/engineering" class="nav-card">
          <div class="nav-card-icon">🏗️</div>
          <h3>重大工程</h3>
          <p>震撼世界的建筑奇迹</p>
        </router-link>
        <router-link to="/fall" class="nav-card">
          <div class="nav-card-icon">🔥</div>
          <h3>秦末风云</h3>
          <p>帝国覆灭的历史教训</p>
        </router-link>
        <router-link to="/legacy" class="nav-card">
          <div class="nav-card-icon">🌏</div>
          <h3>历史影响</h3>
          <p>对后世中国的深远影响</p>
        </router-link>
      </div>
    </section>

    <!-- 名言 -->
    <section class="quote-section">
      <div class="container">
        <blockquote>
          <p>"及至始皇，奋六世之余烈，振长策而御宇内，吞二周而亡诸侯，履至尊而制六合。"</p>
          <cite>—— 贾谊《过秦论》</cite>
        </blockquote>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* ===== 横幅 ===== */
.hero-banner {
  position: relative;
  height: 85vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 30%, #2d1a0a 60%, #1a1a1a 100%);
  overflow: hidden;
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(212,160,23,0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 50%, rgba(192,57,43,0.08) 0%, transparent 50%),
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23d4a017' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(26,26,26,0.3) 50%, rgba(26,26,26,0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-title {
  font-size: 5rem;
  color: var(--qin-gold);
  letter-spacing: 20px;
  text-shadow: 0 4px 20px rgba(212,160,23,0.3), 0 2px 4px rgba(0,0,0,0.5);
  margin-bottom: 10px;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.6rem;
  color: var(--qin-light-gold);
  letter-spacing: 6px;
  margin: 15px 0 8px;
}

.hero-desc {
  font-size: 1rem;
  color: rgba(245,240,232,0.7);
  letter-spacing: 3px;
  margin-bottom: 30px;
}

.hero-btn {
  display: inline-block;
  padding: 14px 40px;
  background: linear-gradient(135deg, var(--qin-red), #e74c3c);
  color: var(--qin-white);
  border-radius: 50px;
  font-size: 1.1rem;
  letter-spacing: 3px;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(192,57,43,0.4);
}

.hero-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(192,57,43,0.5);
}

/* ===== 简介卡片 ===== */
.intro-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background: var(--qin-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--qin-border);
}

.intro-text {
  padding: 30px;
}

.intro-text p {
  margin-bottom: 16px;
  font-size: 1rem;
  line-height: 1.9;
  color: var(--qin-text);
  text-indent: 2em;
}

.intro-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===== 导航卡片 ===== */
.nav-card {
  background: var(--qin-white);
  border-radius: var(--radius);
  padding: 30px 20px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--qin-border);
  transition: var(--transition);
  cursor: pointer;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--qin-gold);
}

.nav-card-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.nav-card h3 {
  color: var(--qin-black);
  font-size: 1.2rem;
  margin-bottom: 6px;
  letter-spacing: 2px;
}

.nav-card p {
  color: var(--qin-text-light);
  font-size: 0.85rem;
}

/* ===== 名言 ===== */
.quote-section {
  background: linear-gradient(135deg, var(--qin-black), #3d2a1a);
  padding: 60px 0;
  margin-top: 40px;
  text-align: center;
}

.quote-section blockquote p {
  font-size: 1.4rem;
  color: var(--qin-light-gold);
  font-style: italic;
  line-height: 2;
  max-width: 800px;
  margin: 0 auto;
}

.quote-section cite {
  display: block;
  margin-top: 15px;
  color: var(--qin-gold);
  font-style: normal;
  font-size: 1rem;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
    letter-spacing: 10px;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    letter-spacing: 4px;
  }

  .hero-banner {
    height: 70vh;
    min-height: 400px;
  }

  .intro-card {
    grid-template-columns: 1fr;
  }

  .intro-img {
    order: -1;
    max-height: 250px;
  }

  .quote-section blockquote p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
    letter-spacing: 6px;
  }
}
</style>
