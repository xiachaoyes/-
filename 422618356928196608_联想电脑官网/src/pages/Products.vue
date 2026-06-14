<template>
  <div class="products-page">
    <div class="page-banner">
      <div class="container">
        <h1>产品线</h1>
        <p>四大核心系列，满足不同场景需求</p>
      </div>
    </div>

    <div class="container">
      <div class="product-detail" v-for="(series, idx) in productSeries" :key="series.name">
        <div class="detail-img">
          <img :src="series.img" :alt="series.name">
        </div>
        <div class="detail-info">
          <h2>{{ series.name }}</h2>
          <p class="detail-slogan">{{ series.slogan }}</p>
          <p class="detail-desc">{{ series.desc }}</p>
          <ul class="detail-specs">
            <li v-for="spec in series.specs" :key="spec">{{ spec }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const productSeries = [
  {
    name: 'ThinkPad',
    slogan: '经典商务，坚若磐石',
    desc: 'ThinkPad 是联想旗下最具传奇色彩的商务笔记本品牌，自1992年诞生以来，一直以卓越的可靠性、出色的键盘手感和严谨的商务设计闻名于世。X1 Carbon、T系列、X系列等产品线覆盖从高端商务到企业级应用的全面需求。',
    specs: ['通过MIL-STD-810H军规标准测试', '标志性小红点TrackPoint', '防泼溅键盘设计', '最高搭载英特尔酷睿Ultra处理器'],
    img: 'https://picsum.photos/seed/thinkpad2/800/500'
  },
  {
    name: '拯救者（Legion）',
    slogan: '为战而生，极致性能',
    desc: '拯救者系列是联想专为游戏玩家打造的高性能游戏本品牌。搭载最新一代英特尔酷睿或AMD锐龙处理器，配合NVIDIA GeForce RTX独立显卡，配合先进的霜刃散热系统，让玩家畅享高画质3A大作。',
    specs: ['最高RTX 4090独立显卡', '霜刃Pro散热系统', '165Hz高刷电竞屏', 'DDG双模显示切换'],
    img: 'https://picsum.photos/seed/legion2/800/500'
  },
  {
    name: '小新',
    slogan: '年轻新生，轻巧随行',
    desc: '小新系列面向学生和职场新人，以高性价比和出色的综合体验赢得市场青睐。轻薄金属机身、全面屏设计、强劲的性能释放，让学习和工作更加高效。Pro系列更是以越级配置成为爆款。',
    specs: ['全金属轻薄机身', '2.5K/2.8K高分辨率屏幕', '大容量电池长续航', 'USB-C全功能接口'],
    img: 'https://picsum.photos/seed/xiaoxin2/800/500'
  },
  {
    name: 'YOGA',
    slogan: '艺术科技，随心翻转',
    desc: 'YOGA 系列代表联想在高端轻薄本领域的最高水准。360°翻转触控屏、精湛的工艺设计、极致的便携性，配合联想智能笔和触控优化，为创意工作者和高端用户提供无与伦比的使用体验。',
    specs: ['360°翻转触控屏', 'OLED超清显示面板', 'CNC一体成型工艺', '最轻仅1.2kg起'],
    img: 'https://picsum.photos/seed/yoga2/800/500'
  }
]
</script>

<style scoped>
.product-detail {
  display: flex;
  gap: 40px;
  padding: 50px 0;
  border-bottom: 1px solid #eee;
}

.product-detail:last-child {
  border-bottom: none;
}

.detail-img {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
}

.detail-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.detail-info h2 {
  font-size: 28px;
  color: #222;
  margin-bottom: 8px;
}

.detail-slogan {
  font-size: 16px;
  color: #e2231a;
  font-weight: 600;
  margin-bottom: 16px;
}

.detail-desc {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
}

.detail-specs {
  list-style: disc;
  padding-left: 20px;
}

.detail-specs li {
  font-size: 14px;
  color: #666;
  margin-bottom: 6px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .product-detail {
    flex-direction: column;
    gap: 20px;
  }
  .detail-info h2 {
    font-size: 24px;
  }
}
</style>
