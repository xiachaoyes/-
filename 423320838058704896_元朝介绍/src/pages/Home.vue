<template>
  <div class="page-container home-page">
    <!-- 英雄区 -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title">大元王朝</h1>
        <p class="hero-subtitle">1271 — 1368</p>
        <div class="hero-divider"></div>
        <p class="hero-desc">
          ​元朝是中国历史上首次由少数民族建立的大一统王朝，<br />
          疆域空前辽阔，文化多元交融，开创了中外交流的新纪元。
        </p>
      </div>
    </section>

    <!-- 概述 -->
    <section class="overview">
      <h2 class="section-title">历史概述</h2>
      <div class="divider">
        <span class="divider-line"></span>
        <span class="divider-icon">◆</span>
        <span class="divider-line"></span>
      </div>
      <div class="overview-grid">
        <div class="overview-card card">
          <div class="card-icon">🏛️</div>
          <h3>立国</h3>
          <p>1271年，忽必烈取《易经》"大哉乾元"之意，改国号为"大元"，定都大都（今北京），标志着元朝正式建立。</p>
        </div>
        <div class="overview-card card">
          <div class="card-icon">🗺️</div>
          <h3>疆域</h3>
          <p>元朝疆域东起日本海，西至天山，北达西伯利亚，南抵南海，面积约1400万平方公里，是中国历史上疆域最辽阔的王朝。</p>
        </div>
        <div class="overview-card card">
          <div class="card-icon">🔄</div>
          <h3>融合</h3>
          <p>元朝推行多元文化政策，蒙古、汉、回回、藏等各民族文化交流融合，形成了独特的元代文化风貌。</p>
        </div>
        <div class="overview-card card">
          <div class="card-icon">📜</div>
          <h3>终结</h3>
          <p>1368年，朱元璋建立明朝，元朝退居漠北，史称北元。元朝作为全国性政权共历98年，传五世十一帝。</p>
        </div>
      </div>
    </section>

    <!-- 时间轴 -->
    <section class="timeline-section">
      <h2 class="section-title">大事年表</h2>
      <div class="divider">
        <span class="divider-line"></span>
        <span class="divider-icon">◆</span>
        <span class="divider-line"></span>
      </div>
      <div class="timeline">
        <div class="timeline-item" v-for="(item, idx) in timeline" :key="idx">
          <div class="timeline-dot"></div>
          <div class="timeline-year">{{ item.year }}</div>
          <div class="timeline-content card">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const timeline = [
  { year: '1206年', title: '成吉思汗建立大蒙古国', desc: '铁木真统一蒙古各部，被尊为成吉思汗，建立大蒙古国，为元朝奠定基础。' },
  { year: '1260年', title: '忽必烈即汗位', desc: '忽必烈在开平府即蒙古大汗位，开始推行汉法，改革政治制度。' },
  { year: '1271年', title: '元朝建立', desc: '忽必烈正式改国号为"大元"，定都大都，元朝正式成为全国性政权。' },
  { year: '1279年', title: '崖山海战', desc: '元军在崖山击败南宋残余势力，陆秀夫负帝昺投海，南宋灭亡，元朝统一中国。' },
  { year: '1294年', title: '忽必烈去世', desc: '元世祖忽必烈去世，其孙铁穆耳即位，是为元成宗，元朝进入稳定发展期。' },
  { year: '1351年', title: '红巾军起义', desc: '韩山童、刘福通等领导红巾军起义，元朝统治开始动摇，各地反元势力蜂起。' },
  { year: '1368年', title: '元朝灭亡', desc: '朱元璋攻占大都，元顺帝北逃，元朝在全国的统治结束，明朝建立。' }
]
</script>

<style scoped>
/* ===== 英雄区 ===== */
.hero {
  position: relative;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 60px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #2a1a12 0%, #4a2a1a 30%, #6a3a2a 60%, #2a1a12 100%);
  z-index: 0;
}

.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 40%, rgba(201,168,76,0.15) 0%, transparent 60%),
              radial-gradient(circle at 70% 60%, rgba(178,34,34,0.1) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.hero-title {
  font-size: 4rem;
  color: var(--gold);
  letter-spacing: 20px;
  text-shadow: 0 0 40px rgba(201,168,76,0.4);
  margin-bottom: 8px;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-muted);
  letter-spacing: 8px;
  margin-bottom: 20px;
}

.hero-divider {
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 0 auto 24px;
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--text-light);
  line-height: 2;
  letter-spacing: 2px;
  opacity: 0.9;
}

/* ===== 通用 ===== */
.section-title {
  text-align: center;
  font-size: 2rem;
  color: var(--gold);
  letter-spacing: 6px;
}

/* ===== 概述卡片 ===== */
.overview {
  margin-bottom: 60px;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.overview-card {
  text-align: center;
  padding: 30px 20px;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.overview-card h3 {
  color: var(--gold);
  font-size: 1.2rem;
  margin-bottom: 12px;
  letter-spacing: 2px;
}

.overview-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.8;
}

/* ===== 时间轴 ===== */
.timeline-section {
  margin-bottom: 40px;
}

.timeline {
  position: relative;
  max-width: 700px;
  margin: 30px auto 0;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--gold), var(--gold-dark), var(--gold));
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-dot {
  position: absolute;
  left: -32px;
  top: 20px;
  width: 14px;
  height: 14px;
  background: var(--gold);
  border: 3px solid var(--bg-dark);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(201,168,76,0.5);
}

.timeline-year {
  font-size: 0.9rem;
  color: var(--gold-light);
  letter-spacing: 2px;
  margin-bottom: 8px;
  font-weight: bold;
}

.timeline-content h4 {
  color: var(--gold);
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.timeline-content p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.8;
}

/* ===== 响应式 ===== */
@media (max-width: 992px) {
  .overview-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 320px;
  }
  .hero-title {
    font-size: 2.6rem;
    letter-spacing: 12px;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-desc {
    font-size: 0.95rem;
  }
  .overview-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 1.6rem;
  }
}
</style>
