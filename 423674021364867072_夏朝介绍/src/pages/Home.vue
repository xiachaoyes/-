<template>
  <div class="home-page">
    <!-- 英雄区 -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title">夏</h1>
        <p class="hero-subtitle">中国历史上第一个世袭制王朝</p>
        <p class="hero-desc">约公元前2070年 — 约公元前1600年</p>
        <div class="hero-divider"></div>
        <p class="hero-quote">茫茫禹迹，画为九州</p>
      </div>
    </section>

    <!-- 简介 -->
    <section class="intro-section">
      <div class="page-container">
        <h2 class="page-title">华夏文明的开端</h2>
        <p class="page-subtitle">从部落联盟到国家形态的伟大跨越</p>
        <div class="intro-text">
          <p>
            夏朝（约公元前2070年—约公元前1600年），是中国史书中记载的第一个世袭制王朝。
            一般认为夏朝共传14代、17后（夏朝统治者在位时称"后"，去世后称"帝"），延续约470年。
            夏朝作为中国传统史书中记载的第一个中原世袭制王朝，标志着中国早期国家的形成，
            是中华文明发展史上的重要里程碑。
          </p>
          <p>
            夏朝的建立，结束了原始社会部落联盟的松散状态，建立了中国历史上第一个国家政权。
            大禹治水的功绩使他获得了极高的威望，最终由他的儿子启建立了世袭制的夏朝，
            开创了"家天下"的先河。夏朝在政治制度、经济文化等方面都取得了重要成就，
            为后世商周文明奠定了坚实基础。
          </p>
        </div>
      </div>
    </section>

    <!-- 概览卡片 -->
    <section class="overview-section">
      <div class="page-container">
        <h2 class="page-title">夏朝概览</h2>
        <p class="page-subtitle">一窥华夏第一朝的风貌</p>
        <div class="card-grid">
          <router-link to="/establish" class="card overview-card">
            <img src="https://picsum.photos/seed/xia1/600/400" alt="大禹治水" class="card-img" />
            <h3>夏朝建立</h3>
            <p>大禹治水，三过家门而不入，以治水之功受舜禅让。禹死后，其子启继位，开创世袭制，夏朝由此建立。</p>
          </router-link>
          <router-link to="/politics" class="card overview-card">
            <img src="https://picsum.photos/seed/xia2/600/400" alt="九州" class="card-img" />
            <h3>政治制度</h3>
            <p>确立王位世袭制，划分天下为九州，建立贡赋制度，形成了中国最早的国家治理体系。</p>
          </router-link>
          <router-link to="/economy" class="card overview-card">
            <img src="https://picsum.photos/seed/xia3/600/400" alt="青铜器" class="card-img" />
            <h3>经济文化</h3>
            <p>青铜冶炼技术萌芽，农业生产显著发展，出现了最早的刻画符号——文字雏形。</p>
          </router-link>
          <router-link to="/fall" class="card overview-card">
            <img src="https://picsum.photos/seed/xia4/600/400" alt="夏桀" class="card-img" />
            <h3>夏朝灭亡</h3>
            <p>末代君主夏桀暴虐无道，商汤起兵伐桀，鸣条之战后夏朝覆灭，商朝建立。</p>
          </router-link>
          <router-link to="/significance" class="card overview-card">
            <img src="https://picsum.photos/seed/xia5/600/400" alt="历史意义" class="card-img" />
            <h3>历史意义</h3>
            <p>夏朝标志着中国从原始社会进入文明时代，其世袭制、九州划分等对后世影响深远。</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 时间线 -->
    <section class="timeline-section">
      <div class="page-container">
        <h2 class="page-title">夏朝大事年表</h2>
        <p class="page-subtitle">穿越四千年的时光回望</p>
        <div class="timeline">
          <div class="timeline-item">
            <h4>约公元前2070年</h4>
            <p>大禹治水成功，受舜禅让成为部落联盟首领，后建立夏朝雏形。</p>
          </div>
          <div class="timeline-item">
            <h4>约公元前2045年</h4>
            <p>禹去世，其子启继位，废除禅让制，确立王位世袭制，夏朝正式建立。</p>
          </div>
          <div class="timeline-item">
            <h4>约公元前1900年</h4>
            <p>夏朝进入鼎盛时期，农业生产技术显著进步，青铜器开始出现。</p>
          </div>
          <div class="timeline-item">
            <h4>约公元前1700年</h4>
            <p>夏朝国力衰退，诸侯离心，社会矛盾日益尖锐。</p>
          </div>
          <div class="timeline-item">
            <h4>约公元前1600年</h4>
            <p>夏桀暴政引发民怨，商汤起兵伐夏，鸣条之战夏军大败，夏朝灭亡。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* ===== 英雄区 ===== */
.hero {
  position: relative;
  height: 100vh;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(26, 20, 16, 0.85) 0%, rgba(26, 20, 16, 0.6) 100%),
    url('https://picsum.photos/seed/xia-hero/1920/1080') center/cover no-repeat;
}

.hero-content {
  position: relative;
  text-align: center;
  padding: 0 24px;
  animation: fadeInUp 1s ease;
}

.hero-title {
  font-family: var(--font-title);
  font-size: 8rem;
  color: var(--color-accent);
  letter-spacing: 24px;
  line-height: 1;
  margin-bottom: 16px;
  text-shadow: 0 4px 20px rgba(201, 168, 76, 0.3);
}

.hero-subtitle {
  font-size: 1.4rem;
  color: var(--color-text);
  letter-spacing: 6px;
  margin-bottom: 12px;
}

.hero-desc {
  font-size: 1rem;
  color: var(--color-text-muted);
  letter-spacing: 3px;
  margin-bottom: 24px;
}

.hero-divider {
  width: 80px;
  height: 2px;
  background: var(--color-accent);
  margin: 0 auto 24px;
}

.hero-quote {
  font-family: var(--font-title);
  font-size: 1.2rem;
  color: var(--color-accent-light);
  letter-spacing: 4px;
  font-style: italic;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== 简介 ===== */
.intro-section {
  padding: 60px 0 20px;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto;
}

.intro-text p {
  color: var(--color-text-muted);
  font-size: 1.02rem;
  line-height: 2.1;
  margin-bottom: 20px;
  text-indent: 2em;
}

/* ===== 概览卡片 ===== */
.overview-section {
  padding: 40px 0 60px;
}

.overview-card {
  cursor: pointer;
  display: block;
  color: inherit !important;
}

/* ===== 时间线 ===== */
.timeline-section {
  padding: 40px 0 80px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 4.5rem;
    letter-spacing: 16px;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }
}
</style>
