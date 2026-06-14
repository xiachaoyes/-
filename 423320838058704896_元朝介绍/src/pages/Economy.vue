<template>
  <div class="page-container">
    <h1 class="page-title">经济与社会</h1>
    <p class="page-subtitle">元朝的经济发展与社会生活</p>

    <!-- 农业 -->
    <section class="eco-section">
      <div class="eco-card card">
        <div class="eco-header">
          <span class="eco-icon">🌾</span>
          <h2>农业发展</h2>
        </div>
        <div class="eco-body">
          <p>元朝统一后，重视农业恢复与发展。忽必烈颁布《农桑辑要》，推广先进农业技术。棉花种植在元代得到大规模推广，黄道婆改良纺织技术，松江府成为全国棉纺织业中心。</p>
          <p>元朝在各地设立司农司，兴修水利，开垦荒地。郭守敬主持修建的通惠河等水利工程，极大地改善了农田灌溉条件，促进了农业生产的发展。</p>
        </div>
        <div class="eco-stats">
          <div class="eco-stat">
            <span class="eco-num">↑40%</span>
            <span class="eco-label">耕地面积增长</span>
          </div>
          <div class="eco-stat">
            <span class="eco-num">棉花</span>
            <span class="eco-label">大规模推广种植</span>
          </div>
          <div class="eco-stat">
            <span class="eco-num">通惠河</span>
            <span class="eco-label">重要水利工程</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 商业与城市 -->
    <section class="eco-section">
      <div class="eco-card card">
        <div class="eco-header">
          <span class="eco-icon">🏙️</span>
          <h2>商业与城市</h2>
        </div>
        <div class="eco-body">
          <p>元朝商业空前繁荣，大都（今北京）是当时世界上最繁华的国际大都市，人口超过百万。来自中亚、波斯、欧洲的商人云集于此，进行丝绸、瓷器、香料等贸易。</p>
          <p>元朝发行纸币"中统元宝交钞"，是中国历史上首次在全国范围推行纸币。海上丝绸之路在元代达到鼎盛，泉州港成为世界第一大港，与埃及亚历山大港齐名。</p>
        </div>
        <div class="city-cards">
          <div class="city-card" v-for="(city, idx) in cities" :key="idx">
            <h4>{{ city.name }}</h4>
            <p>{{ city.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 手工业 -->
    <section class="eco-section">
      <div class="eco-card card">
        <div class="eco-header">
          <span class="eco-icon">⚒️</span>
          <h2>手工业</h2>
        </div>
        <div class="eco-body">
          <p>元代手工业在继承宋代基础上继续发展。官营手工业规模庞大，设有诸色人匠总管府等管理机构。民间手工业也相当发达，纺织、陶瓷、矿冶等行业尤为突出。</p>
          <p>元青花瓷是元代手工业的杰出代表，采用进口钴料，工艺精湛。此外，元代的丝织品、漆器、金银器也享有盛誉，远销海外。</p>
        </div>
        <div class="craft-list">
          <span v-for="(item, idx) in crafts" :key="idx" class="craft-tag">{{ item }}</span>
        </div>
      </div>
    </section>

    <!-- 社会生活 -->
    <section class="eco-section">
      <div class="eco-card card">
        <div class="eco-header">
          <span class="eco-icon">👥</span>
          <h2>社会生活</h2>
        </div>
        <div class="eco-body">
          <p>元代社会呈现多元文化交融的特点。蒙古人、色目人、汉人、南人四个等级在服饰、饮食、习俗上各具特色，又相互影响。大都城内既有汉式建筑，也有蒙古包和清真寺。</p>
          <p>元代的节日文化丰富多彩，既有汉族的传统节日，也有蒙古族的节庆活动。勾栏瓦舍中杂剧演出盛行，成为市民重要的娱乐方式。马可·波罗在游记中盛赞元朝城市的繁华与富庶。</p>
        </div>
        <div class="society-grid">
          <div class="society-item" v-for="(item, idx) in society" :key="idx">
            <span class="society-icon">{{ item.icon }}</span>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const cities = [
  { name: '大都（北京）', desc: '元朝都城，世界级大都市，人口超百万，商业繁荣，万商云集。' },
  { name: '泉州', desc: '世界第一大港，海上丝绸之路起点，各国商旅汇聚，多元文化交融。' },
  { name: '杭州', desc: '南宋故都，江南商业中心，马可·波罗誉为"世界上最美丽华贵之天城"。' },
  { name: '广州', desc: '南方重要港口城市，对外贸易繁荣，是中外商品集散地。' }
]

const crafts = [
  '青花瓷', '丝织品', '漆器', '金银器', '铜器', '兵器制造',
  '酿酒', '制盐', '造纸', '印刷', '造船', '矿冶'
]

const society = [
  { icon: '🍜', title: '饮食文化', desc: '蒙古人的乳肉饮食与汉人的谷物蔬菜相结合，形成了独特的元代饮食文化。' },
  { icon: '👘', title: '服饰风尚', desc: '蒙古袍与汉服并存，贵族喜穿金锦"纳石失"，民间服饰各具特色。' },
  { icon: '🏠', title: '居住建筑', desc: '大都城规划整齐，汉式宫殿与蒙古帐幕并存，体现了多元文化融合。' },
  { icon: '🎭', title: '娱乐生活', desc: '杂剧、歌舞、角抵、马球等娱乐活动丰富，勾栏瓦舍遍布城市。' }
]
</script>

<style scoped>
.eco-section {
  max-width: 900px;
  margin: 0 auto 28px;
}

.eco-card {
  padding: 32px;
}

.eco-header {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-bottom: 16px;
}

.eco-icon {
  font-size: 2rem;
}

.eco-header h2 {
  font-size: 1.5rem;
  color: var(--gold);
  letter-spacing: 4px;
}

.eco-body p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 2;
  margin-bottom: 12px;
  text-indent: 2em;
}

.eco-stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-gold);
}

.eco-stat {
  text-align: center;
}

.eco-num {
  display: block;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--gold);
  letter-spacing: 2px;
}

.eco-label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  letter-spacing: 1px;
}

.city-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-gold);
}

.city-card {
  background: rgba(201, 168, 76, 0.05);
  border: 1px solid var(--border-gold);
  border-radius: 6px;
  padding: 16px;
  transition: all 0.3s;
}

.city-card:hover {
  background: rgba(201, 168, 76, 0.1);
}

.city-card h4 {
  color: var(--gold-light);
  font-size: 1rem;
  margin-bottom: 6px;
  letter-spacing: 2px;
}

.city-card p {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.7;
}

.craft-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-gold);
  justify-content: center;
}

.craft-tag {
  display: inline-block;
  padding: 5px 16px;
  font-size: 0.85rem;
  color: var(--gold-light);
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 20px;
  letter-spacing: 1px;
}

.society-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-gold);
}

.society-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px;
  background: rgba(201, 168, 76, 0.04);
  border: 1px solid var(--border-gold);
  border-radius: 6px;
  transition: all 0.3s;
}

.society-item:hover {
  background: rgba(201, 168, 76, 0.08);
}

.society-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.society-item h4 {
  color: var(--gold-light);
  font-size: 0.95rem;
  margin-bottom: 4px;
  letter-spacing: 1px;
}

.society-item p {
  color: var(--text-muted);
  font-size: 0.83rem;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .eco-stats {
    flex-direction: column;
    gap: 14px;
  }
  .city-cards {
    grid-template-columns: 1fr;
  }
  .society-grid {
    grid-template-columns: 1fr;
  }
  .eco-card {
    padding: 22px 16px;
  }
}
</style>
