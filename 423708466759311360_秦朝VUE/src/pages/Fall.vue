<template>
  <div class="fall-page">
    <div class="page-header">
      <h1>秦末风云</h1>
      <p>帝国崩塌 · 十五载兴亡启示录</p>
    </div>

    <section class="container content-section">
      <div class="section-title">
        <h2>灭亡原因</h2>
      </div>
      <div class="grid grid-3">
        <div class="card">
          <div class="card-body">
            <h3>⚖️ 暴政苛法</h3>
            <p>秦朝推行严刑峻法，刑罚残酷。百姓动辄触犯法律，遭受重罚。连坐、族诛等制度使得人人自危。赋税沉重，百姓负担极重，社会矛盾日益激化。</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>🏗️ 劳役无度</h3>
            <p>修筑长城、阿房宫、秦始皇陵、驰道等大型工程，征用了数百万民夫。青壮年长期脱离生产，导致农业凋敝，民生困苦。据估算，秦朝各种劳役征发的人口占总人口的三分之一以上。</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>👑 继承失当</h3>
            <p>秦始皇突然病逝后，赵高与李斯合谋篡改遗诏，立胡亥为秦二世。胡亥昏庸无能，赵高专权，大肆屠杀宗室大臣，导致统治集团内部离心离德，加速了秦朝的灭亡。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 陈胜吴广起义 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>陈胜吴广起义</h2>
      </div>
      <div class="revolt-card">
        <div class="revolt-img">
          <img src="https://picsum.photos/seed/revolt/600/350" alt="大泽乡起义">
        </div>
        <div class="revolt-text">
          <h3>大泽乡起义 · 公元前209年</h3>
          <p>秦二世元年（公元前209年），陈胜、吴广等九百名戍卒被征发前往渔阳（今北京密云）戍守，行至大泽乡（今安徽宿州）时遇大雨，道路不通，无法按期到达。按照秦律，失期当斩。陈胜、吴广遂率众起义，喊出了"王侯将相宁有种乎"的千古名言。</p>
          <p>起义军迅速壮大，建立了"张楚"政权，陈胜自立为王。各地纷纷响应，六国旧贵族也趁机起兵。虽然陈胜吴广起义最终被秦军镇压，但它点燃了推翻秦朝的燎原之火。</p>
        </div>
      </div>
    </section>

    <!-- 刘邦项羽 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>刘邦与项羽</h2>
      </div>
      <div class="grid grid-2">
        <div class="card">
          <img class="card-img" src="https://picsum.photos/seed/liubang/400/250" alt="刘邦">
          <div class="card-body">
            <h3>刘邦 — 从亭长到开国皇帝</h3>
            <p>刘邦，沛县（今江苏徐州）人，曾任泗水亭长。陈胜起义后，刘邦在萧何、曹参等人的支持下起兵响应，自称沛公。他知人善任，广纳贤才，逐渐发展成为反秦的重要力量。公元前206年，刘邦率军攻入咸阳，秦王子婴投降，秦朝灭亡。</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img" src="https://picsum.photos/seed/xiangyu/400/250" alt="项羽">
          <div class="card-body">
            <h3>项羽 — 西楚霸王</h3>
            <p>项羽，名籍，字羽，楚国名将项燕之孙。他力能扛鼎，勇猛过人。在巨鹿之战中，项羽率楚军破釜沉舟，大败秦军主力，威震天下。秦朝灭亡后，项羽自称西楚霸王，分封诸侯。但最终在楚汉之争中败于刘邦，自刎于乌江。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 时间线 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>秦末大事记</h2>
      </div>
      <div class="timeline">
        <div v-for="(item, index) in events" :key="index" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="year">{{ item.year }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const events = [
  {
    year: '公元前210年',
    title: '秦始皇病逝',
    desc: '秦始皇在第五次巡游途中病逝于沙丘平台（今河北广宗）。赵高、李斯合谋篡改遗诏，立胡亥为帝，赐死扶苏。'
  },
  {
    year: '公元前209年',
    title: '大泽乡起义',
    desc: '陈胜、吴广在大泽乡率众起义，喊出"王侯将相宁有种乎"的口号。各地纷纷响应，反秦浪潮席卷全国。'
  },
  {
    year: '公元前208年',
    title: '巨鹿之战',
    desc: '项羽率楚军在巨鹿（今河北平乡）与秦军主力决战。楚军破釜沉舟，大败秦军，章邯投降，秦军主力覆灭。'
  },
  {
    year: '公元前207年',
    title: '刘邦入咸阳',
    desc: '刘邦率军攻入咸阳，秦王子婴投降，秦朝灭亡。刘邦与关中父老约法三章，废除秦朝苛法，深得民心。'
  },
  {
    year: '公元前206年',
    title: '鸿门宴',
    desc: '项羽入关后，在鸿门设宴招待刘邦。范增劝项羽杀刘邦，但项羽犹豫不决，刘邦借机逃脱。此后楚汉之争开始。'
  },
  {
    year: '公元前202年',
    title: '垓下之围',
    desc: '刘邦在垓下（今安徽灵璧）包围项羽。项羽四面楚歌，突围至乌江边，自觉无颜见江东父老，自刎而死。刘邦建立汉朝。'
  }
]
</script>

<style scoped>
.revolt-card {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
  background: var(--qin-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--qin-border);
}

.revolt-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.revolt-text {
  padding: 30px;
}

.revolt-text h3 {
  font-size: 1.3rem;
  color: var(--qin-red);
  margin-bottom: 12px;
}

.revolt-text p {
  margin-bottom: 10px;
  line-height: 1.9;
  text-indent: 2em;
  color: var(--qin-text);
}

@media (max-width: 768px) {
  .revolt-card {
    grid-template-columns: 1fr;
  }

  .revolt-img {
    max-height: 250px;
  }
}
</style>
