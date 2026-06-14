<template>
  <div class="news-page">
    <div class="page-banner">
      <div class="container">
        <h1>最新资讯</h1>
        <p>了解联想电脑最新动态与行业新闻</p>
      </div>
    </div>

    <div class="container">
      <div class="news-grid">
        <div class="news-card" v-for="(item, idx) in newsData" :key="idx">
          <img :src="item.img" :alt="item.title" class="news-card-img">
          <div class="news-card-body">
            <div class="news-meta">
              <span class="news-date">{{ item.date }}</span>
              <span class="news-tag" :class="item.tag">{{ item.tag }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const newsData = [
  {
    date: '2024-12-15',
    tag: '新品',
    title: '联想发布全新ThinkPad X1 Carbon Gen 12',
    summary: '搭载英特尔酷睿Ultra处理器，AI算力大幅提升，续航长达18小时，重量仅1.08kg，再次定义商务旗舰新标准。',
    img: 'https://picsum.photos/seed/news1/600/350'
  },
  {
    date: '2024-12-10',
    tag: '活动',
    title: '拯救者2024冬季新品发布会即将开启',
    summary: '联想宣布将于12月20日举办拯救者冬季新品发布会，预计将推出搭载RTX 50系列显卡的新一代游戏本。',
    img: 'https://picsum.photos/seed/news2/600/350'
  },
  {
    date: '2024-12-05',
    tag: '资讯',
    title: '小新Pro 16 2024款获年度最佳轻薄本',
    summary: '在2024年度科技产品评选中，小新Pro 16凭借出色的综合表现荣获"年度最佳轻薄本"奖项。',
    img: 'https://picsum.photos/seed/news3/600/350'
  },
  {
    date: '2024-11-28',
    tag: '新品',
    title: 'YOGA Air 14s 轻盈上市',
    summary: '全新YOGA Air 14s重量仅1.2kg，搭载2.8K OLED屏幕，采用CNC一体成型工艺，售价7999元起。',
    img: 'https://picsum.photos/seed/news4/600/350'
  },
  {
    date: '2024-11-20',
    tag: '资讯',
    title: '联想蝉联全球PC出货量冠军',
    summary: '据IDC最新数据显示，联想2024年第三季度全球PC出货量继续保持第一，市场份额达到23.5%。',
    img: 'https://picsum.photos/seed/news5/600/350'
  },
  {
    date: '2024-11-15',
    tag: '活动',
    title: '联想双十一战报：全网销售额突破50亿',
    summary: '2024年双十一购物节期间，联想全网销售额突破50亿元，拯救者Y9000P、小新Pro 16等产品成为爆款。',
    img: 'https://picsum.photos/seed/news6/600/350'
  }
]
</script>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
  padding: 50px 0;
}

.news-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: transform 0.3s;
}

.news-card:hover {
  transform: translateY(-4px);
}

.news-card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-card-body {
  padding: 22px;
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.news-date {
  font-size: 13px;
  color: #999;
}

.news-tag {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
  background: #e8e8e8;
  color: #666;
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

.news-card-body h3 {
  font-size: 17px;
  color: #222;
  margin-bottom: 10px;
  line-height: 1.5;
}

.news-card-body p {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
