<template>
  <div class="home">
    <!-- 主视觉 -->
    <section class="hero">
      <div class="container">
        <h1>联想电脑</h1>
        <p>三十余年技术积淀，全球领先的智能设备提供商<br>为每一位用户打造卓越的计算体验</p>
        <router-link to="/products" class="hero-btn">探索产品线</router-link>
      </div>
    </section>

    <!-- 产品线概览 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">产品系列</h2>
        <p class="section-desc">覆盖商务办公、游戏娱乐、创意设计等全场景需求</p>
        <div class="card-grid">
          <div class="card" v-for="item in seriesList" :key="item.name">
            <img :src="item.img" :alt="item.name" class="card-img">
            <div class="card-body">
              <h3>{{ item.name }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="section section-gray">
      <div class="container">
        <h2 class="section-title">为什么选择联想</h2>
        <div class="advantages">
          <div class="advantage-item" v-for="item in advantages" :key="item.title">
            <div class="adv-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新资讯 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">最新动态</h2>
        <div class="news-list">
          <div class="news-item" v-for="(item, idx) in newsList" :key="idx">
            <span class="news-date">{{ item.date }}</span>
            <span class="news-tag" :class="item.tag">{{ item.tag }}</span>
            <span class="news-title">{{ item.title }}</span>
          </div>
        </div>
        <div class="text-center" style="margin-top:24px">
          <router-link to="/news" class="link-more">查看更多资讯 →</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const seriesList = [
  { name: 'ThinkPad', desc: '经典商务笔记本，以坚固耐用、稳定可靠著称，是全球商务人士的首选。', img: 'https://picsum.photos/seed/thinkpad/600/400' },
  { name: '拯救者', desc: '专业游戏本系列，搭载高性能处理器与独立显卡，为玩家带来极致游戏体验。', img: 'https://picsum.photos/seed/legion/600/400' },
  { name: '小新', desc: '面向年轻用户的轻薄本，兼顾颜值与性能，是学生和职场新人的理想选择。', img: 'https://picsum.photos/seed/xiaoxin/600/400' },
  { name: 'YOGA', desc: '高端轻薄变形本，支持360°翻转触控，融合艺术美学与前沿科技。', img: 'https://picsum.photos/seed/yoga/600/400' }
]

const advantages = [
  { icon: '🔧', title: '品质卓越', desc: '严苛的质量测试标准，确保每一台设备都经久耐用' },
  { icon: '💡', title: '技术创新', desc: '持续投入研发，在AI、散热、屏幕等领域保持领先' },
  { icon: '🌍', title: '全球服务', desc: '覆盖160多个国家和地区的售后服务网络' },
  { icon: '🌱', title: '绿色环保', desc: '致力于可持续发展，产品采用可回收环保材料' }
]

const newsList = [
  { date: '2024-12-15', tag: '新品', title: '联想发布全新ThinkPad X1 Carbon Gen 12，搭载英特尔酷睿Ultra处理器' },
  { date: '2024-12-10', tag: '活动', title: '拯救者2024冬季新品发布会即将开启，多款游戏本齐亮相' },
  { date: '2024-12-05', tag: '资讯', title: '小新Pro 16 2024款获年度最佳轻薄本奖项' },
  { date: '2024-11-28', tag: '新品', title: 'YOGA Air 14s 轻盈上市，仅重1.2kg' }
]
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #fff;
  padding: 100px 0;
  text-align: center;
}

.hero h1 {
  font-size: 52px;
  margin-bottom: 20px;
  letter-spacing: 4px;
}

.hero p {
  font-size: 18px;
  opacity: 0.85;
  margin-bottom: 36px;
  line-height: 1.8;
}

.hero-btn {
  display: inline-block;
  background: #e2231a;
  color: #fff;
  padding: 14px 40px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.3s;
}

.hero-btn:hover {
  background: #c41e16;
}

.section {
  padding: 60px 0;
}

.section-gray {
  background: #f0f0f0;
}

.section-title {
  text-align: center;
  font-size: 30px;
  color: #222;
  margin-bottom: 12px;
}

.section-desc {
  text-align: center;
  color: #888;
  margin-bottom: 32px;
}

.advantages {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.advantage-item {
  text-align: center;
  padding: 30px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.adv-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.advantage-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.advantage-item p {
  font-size: 14px;
  color: #777;
  line-height: 1.7;
}

.news-list {
  max-width: 800px;
  margin: 30px auto 0;
}

.news-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: background 0.2s;
}

.news-item:hover {
  background: #fafafa;
}

.news-date {
  font-size: 13px;
  color: #999;
  white-space: nowrap;
}

.news-tag {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
  background: #e8e8e8;
  color: #666;
  white-space: nowrap;
}

.news-tag.新品 {
  background: #fff0e6;
  color: #e2231a;
}

.news-tag.活动 {
  background: #e6f0ff;
  color: #1a73e8;
}

.news-tag.资讯 {
  background: #e6f7e6;
  color: #2e7d32;
}

.news-title {
  flex: 1;
  font-size: 15px;
  color: #333;
}

.link-more {
  color: #e2231a;
  font-size: 15px;
  font-weight: 500;
}

.link-more:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hero h1 { font-size: 36px; }
  .hero { padding: 60px 0; }
  .news-item { flex-wrap: wrap; gap: 8px; }
}
</style>
