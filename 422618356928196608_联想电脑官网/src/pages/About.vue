<template>
  <div class="about-page">
    <div class="page-banner">
      <div class="container">
        <h1>关于联想</h1>
        <p>全球领先的智能设备与解决方案提供商</p>
      </div>
    </div>

    <div class="container">
      <section class="about-section">
        <div class="about-text">
          <h2>公司简介</h2>
          <p>联想集团（Lenovo Group）成立于1984年，是一家全球领先的科技公司，总部位于中国北京。联想致力于为全球用户提供创新的智能设备、基础设施和解决方案，业务遍及180多个国家和地区。</p>
          <p>联想是全球最大的PC制造商之一，旗下拥有ThinkPad、拯救者、小新、YOGA等知名产品系列。2023/2024财年，联想集团全年营收超过600亿美元，全球员工总数超过7万人。</p>
          <p>联想始终坚持"智能，为每一个可能"的品牌愿景，在人工智能、云计算、物联网等前沿领域持续投入研发，推动数字化转型和智能化变革。</p>
        </div>
        <div class="about-img">
          <img src="https://picsum.photos/seed/lenovo-hq/700/450" alt="联想总部">
        </div>
      </section>

      <section class="milestones">
        <h2 class="section-title">发展历程</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, idx) in milestones" :key="idx">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="values">
        <h2 class="section-title">企业价值观</h2>
        <div class="values-grid">
          <div class="value-item" v-for="v in values" :key="v.title">
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const milestones = [
  { year: '1984', title: '联想成立', desc: '联想集团在北京成立，最初名为"中国科学院计算技术研究所新技术发展公司"。' },
  { year: '2005', title: '收购IBM PC业务', desc: '联想收购IBM个人电脑业务，包括ThinkPad品牌，正式进军全球市场。' },
  { year: '2013', title: '全球PC冠军', desc: '联想首次成为全球最大的个人电脑制造商，市场份额位居世界第一。' },
  { year: '2017', title: '多元化转型', desc: '提出"三波战略"，在保持PC优势的同时，大力发展移动业务和数据中心业务。' },
  { year: '2021', title: '新IT架构', desc: '发布"新IT"战略，聚焦智能物联网、智能基础设施和行业智能三大领域。' },
  { year: '2024', title: 'AI新时代', desc: '全面拥抱AI，推出多款AI PC产品，引领个人计算进入人工智能时代。' }
]

const values = [
  { title: '客户至上', desc: '始终把客户需求放在第一位，提供超出期望的产品和服务体验。' },
  { title: '创新驱动', desc: '鼓励技术创新和思维创新，持续投入研发，保持技术领先优势。' },
  { title: '诚信正直', desc: '坚持商业道德和职业操守，以诚信赢得客户和合作伙伴的信任。' },
  { title: '全球视野', desc: '立足中国，放眼全球，整合世界各地的优秀人才和资源。' }
]
</script>

<style scoped>
.about-section {
  display: flex;
  gap: 50px;
  padding: 50px 0;
  align-items: center;
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 28px;
  color: #222;
  margin-bottom: 20px;
}

.about-text p {
  font-size: 15px;
  color: #555;
  line-height: 1.9;
  margin-bottom: 16px;
}

.about-img {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
}

.about-img img {
  width: 100%;
  height: auto;
}

.milestones {
  padding: 40px 0 60px;
}

.section-title {
  text-align: center;
  font-size: 28px;
  color: #222;
  margin-bottom: 36px;
}

.timeline {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #ddd;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 30px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -33px;
  top: 6px;
  width: 12px;
  height: 12px;
  background: #e2231a;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #e2231a;
}

.timeline-year {
  font-size: 14px;
  font-weight: 700;
  color: #e2231a;
  margin-bottom: 4px;
}

.timeline-content h4 {
  font-size: 16px;
  color: #333;
  margin-bottom: 6px;
}

.timeline-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
}

.values {
  padding: 40px 0 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}

.value-item {
  background: #fff;
  border-radius: 10px;
  padding: 28px 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  border-top: 3px solid #e2231a;
}

.value-item h3 {
  font-size: 17px;
  color: #222;
  margin-bottom: 10px;
}

.value-item p {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
