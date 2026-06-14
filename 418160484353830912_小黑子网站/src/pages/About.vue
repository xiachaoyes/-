<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">📖 关于小黑子</h1>
      <p class="page-subtitle">从入门到精通，一本正经地胡说八道</p>

      <!-- 什么是小黑子 -->
      <div class="about-section">
        <div class="about-card">
          <h2>🤔 什么是小黑子？</h2>
          <p>小黑子，网络用语，指那些热衷于研究、模仿、传播某位唱跳Rap篮球全能艺人（简称Kun）相关文化的人群。他们不是黑粉，而是"爱到深处自然黑"的真爱粉。</p>
          <p>小黑子的三大特征：</p>
          <ul class="feature-list">
            <li>🧑‍🦱 中分发型 + 背带裤 + 银色项链（经典三件套）</li>
            <li>🎤 能随口哼出"鸡你太美"的旋律</li>
            <li>💃 看到篮球就会不由自主地做出铁山靠的动作</li>
          </ul>
        </div>
      </div>

      <!-- 小黑子等级 -->
      <div class="about-section">
        <div class="about-card">
          <h2>📊 小黑子等级考试</h2>
          <div class="level-list">
            <div class="level-item" v-for="(level, i) in levels" :key="i">
              <div class="level-badge" :style="{ background: level.color }">{{ level.name }}</div>
              <div class="level-info">
                <h4>{{ level.title }}</h4>
                <p>{{ level.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 小黑子守则 -->
      <div class="about-section">
        <div class="about-card">
          <h2>📜 小黑子守则</h2>
          <ol class="rules-list">
            <li v-for="(rule, i) in rules" :key="i">
              <strong>{{ rule.title }}</strong>：{{ rule.desc }}
            </li>
          </ol>
        </div>
      </div>

      <!-- 常见问题 -->
      <div class="about-section">
        <div class="about-card">
          <h2>❓ 常见问题（一本正经版）</h2>
          <div class="faq-item" v-for="(faq, i) in faqs" :key="i">
            <div class="faq-q" @click="faq.open = !faq.open">
              <span>{{ faq.q }}</span>
              <span class="faq-arrow" :class="{ open: faq.open }">▼</span>
            </div>
            <div class="faq-a" v-show="faq.open">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 免责声明 -->
      <div class="disclaimer">
        <p>⚠️ 免责声明：本网站纯属娱乐，所有内容均为网友玩梗创作，请勿当真。</p>
        <p>如有冒犯，那……你干嘛～哎呦～</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const levels = [
  { name: '🐣', title: '鸡仔级', desc: '刚入坑的小白，只会说"鸡你太美"，其他梗一概不知。', color: '#ffd93d' },
  { name: '🐔', title: '铁鸡级', desc: '掌握了5个以上经典梗，能熟练背诵背带裤穿搭指南。', color: '#ff9f43' },
  { name: '🦅', title: '雄鹰级', desc: '能模仿铁山靠，会唱完整版《只因你太美》，拥有自己的背带裤。', color: '#ff6b6b' },
  { name: '🐲', title: '霸王龙级', desc: '全网梗图倒背如流，能即兴创作小黑子段子，是圈内公认的"梗王"。', color: '#ee5a24' }
]

const rules = [
  { title: '第一条', desc: '永远不要承认自己是小黑子——要自称"ikun"（爱坤）。' },
  { title: '第二条', desc: '看到背带裤要肃然起敬，看到中分头要行注目礼。' },
  { title: '第三条', desc: '听到"只因"两个字要条件反射接"你太美"，这是基本素养。' },
  { title: '第四条', desc: '打篮球时一定要穿背带裤，这是对篮球最基本的尊重。' },
  { title: '第五条', desc: '遇到其他小黑子要互相确认眼神，然后一起喊"你干嘛～哎呦～"。' }
]

const faqs = reactive([
  { q: '小黑子是黑粉吗？', a: '当然不是！小黑子是"爱到深处自然黑"的真爱粉。我们研究他的每一个动作、每一句歌词，这不是爱是什么？', open: false },
  { q: '为什么要穿背带裤？', a: '因为经典永流传！背带裤不仅是一种穿搭，更是一种信仰。穿上背带裤，你就是整条街最靓的仔。', open: false },
  { q: '铁山靠到底怎么跳？', a: '这个问题困扰了人类多年。目前公认的答案是：先扭胯，再顶胯，然后双手画圆，最后做一个投篮动作。至于像不像，随缘。', open: false },
  { q: '我真的会唱《只因你太美》吗？', a: '你会的。每个人都会。只要听到前奏，你的DNA就会自动反应："鸡你太美～哦～ baby～"', open: false },
  { q: '这个网站是认真的吗？', a: '你猜？😉', open: false }
])
</script>

<style scoped>
.about-section {
  margin-bottom: 30px;
}

.about-card {
  background: rgba(255,255,255,0.85);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  backdrop-filter: blur(10px);
}

.about-card h2 {
  font-size: 22px;
  margin-bottom: 16px;
  color: #444;
}

.about-card p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 12px;
  font-size: 15px;
}

.feature-list {
  padding-left: 20px;
}

.feature-list li {
  color: #666;
  line-height: 2;
  font-size: 15px;
  list-style: none;
}

.level-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.level-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255,255,255,0.6);
  border-radius: 12px;
  transition: all 0.3s;
}

.level-item:hover {
  transform: translateX(5px);
}

.level-badge {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.level-info h4 {
  font-size: 16px;
  color: #444;
  margin-bottom: 4px;
}

.level-info p {
  font-size: 14px;
  color: #888;
  margin: 0;
}

.rules-list {
  padding-left: 20px;
}

.rules-list li {
  color: #666;
  line-height: 1.8;
  margin-bottom: 10px;
  font-size: 15px;
}

.rules-list li strong {
  color: #ff6b6b;
}

.faq-item {
  border-bottom: 1px solid #f0f0f0;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-q {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  cursor: pointer;
  font-size: 15px;
  color: #444;
  font-weight: 500;
  transition: color 0.2s;
}

.faq-q:hover {
  color: #ff6b6b;
}

.faq-arrow {
  transition: transform 0.3s;
  font-size: 12px;
  color: #ccc;
}

.faq-arrow.open {
  transform: rotate(180deg);
  color: #ff6b6b;
}

.faq-a {
  padding: 0 0 16px;
}

.faq-a p {
  color: #888;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.disclaimer {
  text-align: center;
  padding: 30px;
  margin-top: 20px;
}

.disclaimer p {
  color: #999;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .about-card {
    padding: 20px;
  }
  
  .level-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
