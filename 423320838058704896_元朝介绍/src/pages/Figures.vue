<template>
  <div class="page-container">
    <h1 class="page-title">著名人物</h1>
    <p class="page-subtitle">元朝历史上的重要人物</p>

    <div class="figures-grid">
      <div class="figure-card card" v-for="(figure, idx) in figures" :key="idx">
        <div class="figure-avatar">
          <img :src="figure.avatar" :alt="figure.name" />
        </div>
        <div class="figure-info">
          <h3 class="figure-name">{{ figure.name }}</h3>
          <p class="figure-title">{{ figure.title }}</p>
          <p class="figure-desc">{{ figure.desc }}</p>
        </div>
        <div class="figure-achievements">
          <span v-for="(ach, ai) in figure.achievements" :key="ai">{{ ach }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const figures = [
  {
    name: '忽必烈',
    title: '元世祖 · 大元开国皇帝',
    desc: '成吉思汗之孙，拖雷之子。1260年即蒙古大汗位，1271年建立元朝，定都大都。他推行汉法，改革制度，统一中国，是元朝最杰出的统治者。',
    avatar: 'https://picsum.photos/seed/kublai/200/200',
    achievements: ['建立元朝', '统一中国', '推行汉法', '对外扩张']
  },
  {
    name: '成吉思汗',
    title: '元太祖 · 大蒙古国建立者',
    desc: '名铁木真，蒙古帝国的奠基人。1206年统一蒙古各部，建立大蒙古国。他率领蒙古铁骑横扫欧亚大陆，建立了空前庞大的帝国。',
    avatar: 'https://picsum.photos/seed/genghis/200/200',
    achievements: ['统一蒙古', '建立帝国', '西征欧亚', '创立文字']
  },
  {
    name: '马可·波罗',
    title: '意大利旅行家 · 东西方文化交流使者',
    desc: '威尼斯商人，1275年到达元朝大都，受到忽必烈接见。他在元朝生活17年，游历中国各地。其《马可·波罗游记》向西方世界展示了东方文明。',
    avatar: 'https://picsum.photos/seed/marco/200/200',
    achievements: ['游历中国', '撰写游记', '文化交流', '影响世界']
  },
  {
    name: '郭守敬',
    title: '天文学家 · 水利学家',
    desc: '元代最杰出的科学家。主持修订《授时历》，精确度极高。设计修建了通惠河等水利工程，对元朝农业和交通发展贡献巨大。',
    avatar: 'https://picsum.photos/seed/guo/200/200',
    achievements: ['授时历', '通惠河', '天文仪器', '水利工程']
  },
  {
    name: '关汉卿',
    title: '元曲四大家之首 · 戏剧大师',
    desc: '元代最著名的杂剧作家，被誉为"曲圣"。代表作《窦娥冤》《救风尘》《单刀会》等，深刻反映了元代社会现实，对后世戏曲影响深远。',
    avatar: 'https://picsum.photos/seed/guan/200/200',
    achievements: ['窦娥冤', '元杂剧', '曲圣', '现实主义']
  },
  {
    name: '赵孟頫',
    title: '书画家 · 文学家',
    desc: '元代书画艺术的集大成者，楷书四大家之一。倡导"复古"艺术理念，书法、绘画、诗文皆精，对后世中国书画艺术影响深远。',
    avatar: 'https://picsum.photos/seed/zhao/200/200',
    achievements: ['楷书四大家', '文人画', '复古理念', '书画双绝']
  },
  {
    name: '耶律楚材',
    title: '政治家 · 蒙古帝国宰相',
    desc: '契丹族政治家，成吉思汗和窝阔台时期的重臣。他主张以儒治国，推行汉法，保护中原文化，为蒙古政权向中原王朝转型做出了重要贡献。',
    avatar: 'https://picsum.photos/seed/yelu/200/200',
    achievements: ['推行汉法', '保护文化', '治国理政', '儒臣典范']
  },
  {
    name: '黄道婆',
    title: '纺织技术革新家',
    desc: '元代著名的棉纺织技术革新家。她从海南黎族学得先进纺织技术，回到松江府后改良纺织工具，推广棉纺织技术，推动了元代纺织业的发展。',
    avatar: 'https://picsum.photos/seed/huang/200/200',
    achievements: ['纺织革新', '棉纺织', '技术推广', '造福民生']
  }
]
</script>

<style scoped>
.figures-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.figure-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 24px;
}

.figure-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--gold);
  margin-bottom: 20px;
  flex-shrink: 0;
}

.figure-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.figure-name {
  font-size: 1.4rem;
  color: var(--gold);
  letter-spacing: 4px;
  margin-bottom: 4px;
}

.figure-title {
  font-size: 0.85rem;
  color: var(--red-light);
  margin-bottom: 14px;
  letter-spacing: 1px;
}

.figure-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.8;
  margin-bottom: 16px;
}

.figure-achievements {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.figure-achievements span {
  display: inline-block;
  padding: 3px 12px;
  font-size: 0.78rem;
  color: var(--gold-light);
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 20px;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .figures-grid {
    grid-template-columns: 1fr;
  }
}
</style>
