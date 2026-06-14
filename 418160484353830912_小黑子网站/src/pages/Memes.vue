<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">😂 经典梗大全</h1>
      <p class="page-subtitle">这里收录了小黑子们口口相传的经典名场面，建议搭配背带裤食用</p>

      <div class="card-grid">
        <div class="card" v-for="(meme, i) in memes" :key="i">
          <img :src="meme.img" :alt="meme.title" class="card-img">
          <div class="card-body">
            <h3>{{ meme.title }}</h3>
            <p>{{ meme.desc }}</p>
            <div class="meme-tags">
              <span class="tag" v-for="(tag, j) in meme.tags" :key="j">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const memes = [
  {
    title: '鸡你太美',
    desc: '原曲《只因你太美》中"只因"二字发音过于魔性，被空耳成"鸡你"，从此开启了万物皆可"鸡"的时代。',
    img: 'https://picsum.photos/seed/jini/400/250',
    tags: ['空耳', '经典永流传', '入坑必知']
  },
  {
    title: '背带裤の诱惑',
    desc: '白色背带裤搭配中分发型，再配上一条银色项链，这套穿搭被称为"小黑子制服"，cos界永恒的经典。',
    img: 'https://picsum.photos/seed/beidai/400/250',
    tags: ['穿搭', 'cosplay', '时尚单品']
  },
  {
    title: '铁山靠之谜',
    desc: '一段让无数网友竞相模仿的舞蹈动作，据说学会铁山靠就能获得"小黑子"荣誉称号。至今无人能完美复刻。',
    img: 'https://picsum.photos/seed/tieshan/400/250',
    tags: ['舞蹈', '高难度', '传世经典']
  },
  {
    title: '你干嘛～哎呦～',
    desc: '一句充满灵魂的台词，适用于各种场合：被老师点名、被妈妈催婚、被老板加薪……万物皆可"你干嘛～哎呦～"。',
    img: 'https://picsum.photos/seed/nigama/400/250',
    tags: ['台词', '万能句式', '灵魂呐喊']
  },
  {
    title: '篮球の绝技',
    desc: '一段令人叹为观止的篮球表演，运球、转身、投篮，每一个动作都充满了艺术感。篮球从此有了新的定义。',
    img: 'https://picsum.photos/seed/lanqiu/400/250',
    tags: ['篮球', '艺术', '跨界']
  },
  {
    title: '中分头の哲学',
    desc: '中分发型不仅仅是一种发型，更是一种态度。它代表着"我两边都行"的人生哲学，是当代年轻人的精神图腾。',
    img: 'https://picsum.photos/seed/zhongfen/400/250',
    tags: ['发型', '哲学', '态度']
  },
  {
    title: '银色项链の传说',
    desc: '一条普通的银色项链，因为出现在某个经典造型中而身价倍增。据说每个小黑子都有一条，没有的赶紧去拼多多。',
    img: 'https://picsum.photos/seed/xianglian/400/250',
    tags: ['配饰', '时尚', '必备']
  },
  {
    title: '唱跳Rap篮球',
    desc: '四项全能型艺人的标准配置。不会唱跳Rap篮球？那你还好意思说自己是小黑子？赶紧去报个培训班吧！',
    img: 'https://picsum.photos/seed/rap/400/250',
    tags: ['才艺', '全能', '标准配置']
  }
]
</script>

<style scoped>
.meme-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.tag {
  background: linear-gradient(135deg, #fce4ec, #e8f5e9);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
}
</style>
