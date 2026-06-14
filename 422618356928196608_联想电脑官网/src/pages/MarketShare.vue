<template>
  <div class="market-page">
    <div class="page-banner">
      <div class="container">
        <h1>市场份额</h1>
        <p>联想电脑在全球及中国市场的领先地位</p>
      </div>
    </div>

    <div class="container">
      <!-- 全球市场概览 -->
      <section class="section">
        <h2 class="section-title">全球PC市场份额</h2>
        <p class="section-desc">联想连续多年位居全球PC出货量前列，稳居行业领先地位</p>
        <div class="data-card">
          <div class="data-item" v-for="item in globalData" :key="item.year">
            <div class="data-year">{{ item.year }}</div>
            <div class="data-bar-wrap">
              <div class="data-bar" :style="{ width: item.share + '%' }">
                <span>{{ item.share }}%</span>
              </div>
            </div>
            <div class="data-rank">{{ item.rank }}</div>
          </div>
        </div>
      </section>

      <!-- 区域市场表现 -->
      <section class="section section-gray">
        <div class="container-inner">
          <h2 class="section-title">各区域市场表现</h2>
          <p class="section-desc">联想在全球各主要区域均保持强劲增长势头</p>
          <div class="region-grid">
            <div class="region-card" v-for="region in regions" :key="region.name">
              <div class="region-icon">{{ region.icon }}</div>
              <h3>{{ region.name }}</h3>
              <div class="region-stat">
                <span class="region-share">{{ region.share }}</span>
                <span class="region-label">市场份额</span>
              </div>
              <div class="region-rank">排名：{{ region.rank }}</div>
              <p>{{ region.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 中国市场 -->
      <section class="section">
        <h2 class="section-title">中国市场表现</h2>
        <p class="section-desc">联想在中国PC市场长期占据领先地位</p>
        <div class="china-data">
          <div class="china-stat">
            <div class="china-number">38.6%</div>
            <div class="china-label">中国PC市场份额</div>
          </div>
          <div class="china-stat">
            <div class="china-number">第1名</div>
            <div class="china-label">市场排名</div>
          </div>
          <div class="china-stat">
            <div class="china-number">8.2%</div>
            <div class="china-label">同比增长率</div>
          </div>
        </div>
      </section>

      <!-- 增长趋势 -->
      <section class="section section-gray">
        <div class="container-inner">
          <h2 class="section-title">增长趋势</h2>
          <p class="section-desc">联想PC业务持续增长，AI PC成为新增长引擎</p>
          <div class="trend-list">
            <div class="trend-item" v-for="(trend, idx) in trends" :key="idx">
              <div class="trend-icon">{{ trend.icon }}</div>
              <div class="trend-info">
                <h4>{{ trend.title }}</h4>
                <p>{{ trend.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const globalData = [
  { year: '2022', share: 23.3, rank: '第1名' },
  { year: '2023', share: 22.7, rank: '第1名' },
  { year: '2024 Q1', share: 23.5, rank: '第1名' },
  { year: '2024 Q2', share: 23.8, rank: '第1名' },
  { year: '2024 Q3', share: 24.1, rank: '第1名' }
]

const regions = [
  { name: '中国', icon: '🇨🇳', share: '38.6%', rank: '第1名', desc: '联想在中国PC市场占据绝对领先地位，市场份额超过第二名两倍以上。' },
  { name: '亚太地区', icon: '🌏', share: '28.3%', rank: '第1名', desc: '在亚太（不含日本）市场保持领先，受益于新兴市场的强劲需求。' },
  { name: '欧洲/中东/非洲', icon: '🌍', share: '21.5%', rank: '第2名', desc: 'EMEA市场表现稳健，商用PC业务持续增长，市场份额稳步提升。' },
  { name: '北美', icon: '🌎', share: '16.8%', rank: '第3名', desc: '北美市场竞争激烈，联想通过高端产品线和商用渠道持续扩大份额。' }
]

const trends = [
  { icon: '📈', title: 'AI PC驱动增长', desc: '2024年联想率先推出AI PC产品，预计到2027年AI PC将占联想出货量的60%以上。' },
  { icon: '💼', title: '商用市场稳固', desc: '联想在全球商用PC市场保持领先，ThinkPad品牌在企业客户中拥有极高的忠诚度。' },
  { icon: '🎮', title: '游戏本高速增长', desc: '拯救者系列游戏本在全球市场保持高速增长，年增长率超过15%。' },
  { icon: '🌱', title: '新兴市场拓展', desc: '在印度、东南亚、拉美等新兴市场，联想通过本地化策略实现持续增长。' }
]
</script>

<style scoped>
.section {
  padding: 50px 0;
}

.section-gray {
  background: #f0f0f0;
  margin: 0 -9999px;
  padding-left: 9999px;
  padding-right: 9999px;
}

.container-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 28px;
  color: #222;
  margin-bottom: 12px;
}

.section-desc {
  text-align: center;
  color: #888;
  margin-bottom: 36px;
}

/* 全球数据 */
.data-card {
  max-width: 700px;
  margin: 0 auto;
}

.data-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.data-year {
  width: 70px;
  font-size: 14px;
  font-weight: 600;
  color: #555;
  text-align: right;
}

.data-bar-wrap {
  flex: 1;
  height: 32px;
  background: #eee;
  border-radius: 16px;
  overflow: hidden;
}

.data-bar {
  height: 100%;
  background: linear-gradient(90deg, #e2231a, #ff6b6b);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  min-width: 50px;
  transition: width 0.6s ease;
}

.data-bar span {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
}

.data-rank {
  width: 50px;
  font-size: 14px;
  color: #e2231a;
  font-weight: 600;
}

/* 区域市场 */
.region-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.region-card {
  background: #fff;
  border-radius: 12px;
  padding: 28px 24px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.region-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.region-card h3 {
  font-size: 18px;
  color: #222;
  margin-bottom: 16px;
}

.region-stat {
  margin-bottom: 8px;
}

.region-share {
  font-size: 32px;
  font-weight: 700;
  color: #e2231a;
}

.region-label {
  font-size: 13px;
  color: #999;
  margin-left: 6px;
}

.region-rank {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.region-card p {
  font-size: 13px;
  color: #777;
  line-height: 1.7;
}

/* 中国市场 */
.china-data {
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 30px 0;
}

.china-stat {
  text-align: center;
}

.china-number {
  font-size: 42px;
  font-weight: 700;
  color: #e2231a;
  margin-bottom: 8px;
}

.china-label {
  font-size: 15px;
  color: #666;
}

/* 增长趋势 */
.trend-list {
  max-width: 700px;
  margin: 0 auto;
}

.trend-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 16px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}

.trend-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.trend-info h4 {
  font-size: 16px;
  color: #333;
  margin-bottom: 6px;
}

.trend-info p {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .china-data {
    flex-direction: column;
    gap: 30px;
  }
  .data-item {
    flex-wrap: wrap;
  }
}
</style>
