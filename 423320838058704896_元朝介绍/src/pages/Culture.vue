<template>
  <div class="page-container">
    <h1 class="page-title">文化成就</h1>
    <p class="page-subtitle">多元交融的元代文化</p>

    <!-- 元曲 -->
    <section class="culture-section">
      <div class="culture-header">
        <span class="culture-icon">🎭</span>
        <h2>元曲 · 一代文学之盛</h2>
      </div>
      <div class="divider">
        <span class="divider-line"></span>
        <span class="divider-icon">◇</span>
        <span class="divider-line"></span>
      </div>
      <div class="culture-content">
        <div class="culture-text">
          <p>元曲是元代最具代表性的文学形式，与唐诗、宋词并称中国文学史上的三座高峰。元曲包括杂剧和散曲两部分，其中杂剧是元代戏剧艺术的最高成就。</p>
          <p>元曲四大家——关汉卿、白朴、马致远、郑光祖，创作了大量传世名作。关汉卿的《窦娥冤》被誉为中国古典悲剧的典范，马致远的《天净沙·秋思》更是千古绝唱。</p>
        </div>
        <div class="culture-cards">
          <div class="mini-card" v-for="(item, idx) in yuanqu" :key="idx">
            <h4>{{ item.title }}</h4>
            <p>{{ item.author }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 青花瓷 -->
    <section class="culture-section">
      <div class="culture-header">
        <span class="culture-icon">🏺</span>
        <h2>青花瓷 · 元瓷之冠</h2>
      </div>
      <div class="divider">
        <span class="divider-line"></span>
        <span class="divider-icon">◇</span>
        <span class="divider-line"></span>
      </div>
      <div class="culture-content">
        <div class="culture-text">
          <p>元代青花瓷是中国陶瓷史上的里程碑。元青花采用进口的苏麻离青料，发色浓艳深沉，纹饰繁复精美，开创了青花瓷的新纪元。</p>
          <p>元青花的纹饰题材丰富多样，有缠枝莲、牡丹、龙凤、人物故事等。其造型硕大雄浑，体现了蒙古民族的审美情趣。元青花存世稀少，被誉为"瓷器之王"，在拍卖市场上屡创天价。</p>
        </div>
        <div class="culture-image">
          <img src="https://picsum.photos/seed/blueporcelain/500/280" alt="元青花" />
          <span class="image-caption">元青花缠枝牡丹纹梅瓶（示意图）</span>
        </div>
      </div>
    </section>

    <!-- 杂剧 -->
    <section class="culture-section">
      <div class="culture-header">
        <span class="culture-icon">🎪</span>
        <h2>杂剧 · 元代戏剧艺术</h2>
      </div>
      <div class="divider">
        <span class="divider-line"></span>
        <span class="divider-icon">◇</span>
        <span class="divider-line"></span>
      </div>
      <div class="culture-content">
        <div class="culture-text">
          <p>元杂剧是中国戏曲成熟的标志。它融合了唱、念、做、打等多种表演形式，形成了完整的戏剧体系。元杂剧通常为四折一楔子，结构严谨。</p>
          <p>元代城市经济繁荣，勾栏瓦舍遍布，为杂剧的兴盛提供了土壤。据记载，元代有姓名可考的杂剧作家约200人，作品达700余种，现存约160种。</p>
        </div>
        <div class="culture-cards">
          <div class="mini-card" v-for="(item, idx) in zaju" :key="idx">
            <h4>{{ item.name }}</h4>
            <p>{{ item.author }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 其他文化成就 -->
    <section class="culture-section">
      <div class="culture-header">
        <span class="culture-icon">📚</span>
        <h2>其他文化成就</h2>
      </div>
      <div class="divider">
        <span class="divider-line"></span>
        <span class="divider-icon">◇</span>
        <span class="divider-line"></span>
      </div>
      <div class="other-grid">
        <div class="other-item card" v-for="(item, idx) in others" :key="idx">
          <span class="other-icon">{{ item.icon }}</span>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const yuanqu = [
  { title: '《窦娥冤》', author: '关汉卿' },
  { title: '《天净沙·秋思》', author: '马致远' },
  { title: '《梧桐雨》', author: '白朴' },
  { title: '《倩女离魂》', author: '郑光祖' }
]

const zaju = [
  { name: '《救风尘》', author: '关汉卿' },
  { name: '《汉宫秋》', author: '马致远' },
  { name: '《墙头马上》', author: '白朴' },
  { name: '《赵氏孤儿》', author: '纪君祥' }
]

const others = [
  { icon: '🖌️', title: '元代书法', desc: '赵孟頫倡导复古，楷书行书皆精，与欧阳询、颜真卿、柳公权并称"楷书四大家"。' },
  { icon: '🎨', title: '元代绘画', desc: '文人画兴盛，黄公望《富春山居图》为传世名作，倪瓒、王蒙等大家辈出。' },
  { icon: '🏗️', title: '元代建筑', desc: '元大都规划整齐，布局严谨，是当时世界上最宏伟的城市之一。' },
  { icon: '🔭', title: '天文历法', desc: '郭守敬编制《授时历》，精度与公历相当，领先世界300年。' }
]
</script>

<style scoped>
.culture-section {
  margin-bottom: 50px;
}

.culture-header {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}

.culture-icon {
  font-size: 2rem;
}

.culture-header h2 {
  font-size: 1.6rem;
  color: var(--gold);
  letter-spacing: 4px;
}

.culture-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start;
}

.culture-text p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 2;
  margin-bottom: 14px;
  text-indent: 2em;
}

.culture-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.mini-card {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  transition: all 0.3s;
}

.mini-card:hover {
  border-color: var(--gold);
  transform: translateY(-2px);
}

.mini-card h4 {
  color: var(--gold-light);
  font-size: 1rem;
  margin-bottom: 4px;
  letter-spacing: 1px;
}

.mini-card p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.culture-image {
  text-align: center;
}

.culture-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  border: 2px solid var(--border-gold);
}

.image-caption {
  display: block;
  margin-top: 8px;
  color: var(--text-muted);
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.other-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.other-item {
  text-align: center;
  padding: 24px 16px;
}

.other-icon {
  font-size: 2.2rem;
  display: block;
  margin-bottom: 12px;
}

.other-item h4 {
  color: var(--gold);
  font-size: 1.05rem;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.other-item p {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.7;
}

@media (max-width: 992px) {
  .culture-content {
    grid-template-columns: 1fr;
  }
  .other-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .culture-header h2 {
    font-size: 1.3rem;
  }
  .culture-cards {
    grid-template-columns: 1fr;
  }
  .other-grid {
    grid-template-columns: 1fr;
  }
}
</style>
