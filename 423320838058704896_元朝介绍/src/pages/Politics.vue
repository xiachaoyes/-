<template>
  <div class="page-container">
    <h1 class="page-title">政治制度</h1>
    <p class="page-subtitle">元朝的政治体制与管理制度</p>

    <!-- 行省制度 -->
    <section class="politics-section">
      <div class="section-card card">
        <div class="section-icon">🏛️</div>
        <h2 class="section-heading">行省制度</h2>
        <div class="divider">
          <span class="divider-line"></span>
          <span class="divider-icon">◇</span>
          <span class="divider-line"></span>
        </div>
        <div class="section-body">
          <p>行省制度是元朝最重要的政治制度创新。元朝在中央设中书省总理全国政务，在地方设行中书省（简称"行省"）作为最高地方行政机构。这一制度开创了中国省级行政区划的先河，对后世影响深远。</p>
          <p>元朝共设十个行省：岭北、辽阳、河南江北、陕西、四川、甘肃、云南、江浙、江西、湖广。此外，还有宣政院管辖的吐蕃地区（今西藏）以及察合台后王封地等特殊行政区。</p>
        </div>
        <div class="feature-list">
          <div class="feature-item" v-for="(item, idx) in provinces" :key="idx">
            <span class="feature-dot"></span>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 驿站制度 -->
    <section class="politics-section">
      <div class="section-card card">
        <div class="section-icon">🐎</div>
        <h2 class="section-heading">驿站制度</h2>
        <div class="divider">
          <span class="divider-line"></span>
          <span class="divider-icon">◇</span>
          <span class="divider-line"></span>
        </div>
        <div class="section-body">
          <p>元朝建立了空前发达的驿站系统，称为"站赤"。驿站遍布全国，东起高丽，西至伊利汗国，北达岭北，南抵云南，形成了四通八达的交通网络。</p>
          <p>驿站分为陆站和水站，陆站备有马匹、牛车，水站备有船只。全国共有驿站约1500处，驿马约30万匹。驿站不仅用于传递公文，还为官员往来、物资运输提供了便利。</p>
        </div>
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-num">约1500</span>
            <span class="stat-label">驿站数量（处）</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">约30万</span>
            <span class="stat-label">驿马数量（匹）</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">数万里</span>
            <span class="stat-label">驿道总长度</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 其他制度 -->
    <section class="politics-section">
      <div class="section-card card">
        <div class="section-icon">📜</div>
        <h2 class="section-heading">其他重要制度</h2>
        <div class="divider">
          <span class="divider-line"></span>
          <span class="divider-icon">◇</span>
          <span class="divider-line"></span>
        </div>
        <div class="other-grid">
          <div class="other-card" v-for="(item, idx) in others" :key="idx">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const provinces = [
  '岭北行省 — 管辖蒙古高原地区',
  '辽阳行省 — 管辖东北地区',
  '河南江北行省 — 管辖中原地区',
  '陕西行省 — 管辖关中地区',
  '四川行省 — 管辖巴蜀地区',
  '甘肃行省 — 管辖河西走廊',
  '云南行省 — 管辖西南地区',
  '江浙行省 — 管辖江南富庶之地',
  '江西行省 — 管辖东南地区',
  '湖广行省 — 管辖两湖两广地区'
]

const others = [
  {
    title: '四等人制',
    desc: '元朝将臣民分为蒙古人、色目人、汉人、南人四个等级，在政治、法律、科举等方面实行差别待遇，反映了民族不平等政策。'
  },
  {
    title: '科举制度',
    desc: '元朝科举时断时续，共开科16次，录取人数远少于唐宋。科举以程朱理学为考试内容，对后世科举制度影响深远。'
  },
  {
    title: '枢密院制度',
    desc: '中央设枢密院掌管军事，地方设万户府、千户所等军事机构。元朝实行军民分治，军事系统独立于行政系统。'
  },
  {
    title: '宣政院制度',
    desc: '宣政院掌管全国佛教事务和吐蕃地区军政，是元朝特有的中央机构。这一制度加强了中央对西藏地区的管辖。'
  }
]
</script>

<style scoped>
.politics-section {
  max-width: 900px;
  margin: 0 auto 30px;
}

.section-card {
  padding: 36px;
}

.section-icon {
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.section-heading {
  text-align: center;
  font-size: 1.6rem;
  color: var(--gold);
  letter-spacing: 6px;
}

.section-body p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 2;
  margin-bottom: 12px;
  text-indent: 2em;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-gold);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-light);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.feature-dot {
  width: 6px;
  height: 6px;
  background: var(--gold);
  border-radius: 50%;
  flex-shrink: 0;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border-gold);
}

.stat-item {
  text-align: center;
}

.stat-num {
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--gold);
  letter-spacing: 2px;
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  letter-spacing: 1px;
}

.other-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 10px;
}

.other-card {
  background: rgba(201, 168, 76, 0.05);
  border: 1px solid var(--border-gold);
  border-radius: 6px;
  padding: 20px;
  transition: all 0.3s;
}

.other-card:hover {
  background: rgba(201, 168, 76, 0.1);
}

.other-card h4 {
  color: var(--gold-light);
  font-size: 1.05rem;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.other-card p {
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .feature-list {
    grid-template-columns: 1fr;
  }
  .stats-row {
    flex-direction: column;
    gap: 16px;
  }
  .other-grid {
    grid-template-columns: 1fr;
  }
  .section-card {
    padding: 24px 18px;
  }
}
</style>
