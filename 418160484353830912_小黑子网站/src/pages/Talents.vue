<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">💃 才艺展示</h1>
      <p class="page-subtitle">唱、跳、Rap、篮球——四大才艺，样样精通（并不）</p>

      <!-- 四大才艺 -->
      <div class="talents-showcase">
        <div class="talent-card" v-for="(talent, i) in talents" :key="i" :style="{ '--color': talent.color }">
          <div class="talent-icon">{{ talent.icon }}</div>
          <h3 class="talent-name">{{ talent.name }}</h3>
          <p class="talent-desc">{{ talent.desc }}</p>
          <div class="talent-level">
            <span>熟练度：</span>
            <span class="level-bar">
              <span class="level-fill" :style="{ width: talent.level + '%' }"></span>
            </span>
            <span class="level-num">{{ talent.level }}%</span>
          </div>
        </div>
      </div>

      <!-- 经典表演曲目 -->
      <div class="section">
        <h2 class="section-title">🎵 经典表演曲目</h2>
        <div class="song-list">
          <div class="song-item" v-for="(song, i) in songs" :key="i">
            <div class="song-rank">{{ i + 1 }}</div>
            <div class="song-info">
              <h4>{{ song.name }}</h4>
              <p>{{ song.artist }}</p>
            </div>
            <div class="song-tag">{{ song.tag }}</div>
            <div class="song-hot">🔥 {{ song.hot }}</div>
          </div>
        </div>
      </div>

      <!-- 模仿秀 -->
      <div class="section">
        <h2 class="section-title">🎭 小黑子模仿秀</h2>
        <div class="card-grid">
          <div class="card" v-for="(item, i) in imitations" :key="i">
            <img :src="item.img" :alt="item.name" class="card-img">
            <div class="card-body">
              <h3>{{ item.name }}</h3>
              <p>{{ item.desc }}</p>
              <div class="imitation-score">
                <span>还原度：</span>
                <span class="stars">
                  <span v-for="s in 5" :key="s" :class="{ active: s <= item.score }">⭐</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const talents = [
  { icon: '🎤', name: '唱', desc: '用灵魂演绎每一个音符，虽然可能不在调上，但感情绝对到位。代表作：《只因你太美》', level: 99, color: '#ff6b6b' },
  { icon: '💃', name: '跳', desc: '铁山靠、扭胯、顶胯……每一个动作都充满了力量感与艺术感，虽然看起来有点像触电。', level: 95, color: '#ffd93d' },
  { icon: '🎙️', name: 'Rap', desc: '语速惊人、节奏感强，虽然听不清在唱什么，但感觉很厉害的样子。Yo～ check it out！', level: 88, color: '#6bcb77' },
  { icon: '🏀', name: '篮球', desc: '运球、转身、投篮，一气呵成。虽然球可能没进，但姿势一定要帅！', level: 92, color: '#4d96ff' }
]

const songs = [
  { name: '只因你太美', artist: 'Kun & 小黑子合唱团', tag: '国歌', hot: '9999' },
  { name: 'Home', artist: 'Kun (小黑子remix版)', tag: '抒情', hot: '8888' },
  { name: 'Wait Wait Wait', artist: 'Kun (鬼畜版)', tag: '魔性', hot: '7777' },
  { name: '没有意外', artist: 'Kun (翻车版)', tag: '意外', hot: '6666' },
  { name: 'YOUNG', artist: 'Kun (慢速版)', tag: '励志', hot: '5555' }
]

const imitations = [
  { name: '张三的背带裤', desc: '耗时三个月缝制的纯手工背带裤，每一个针脚都饱含了对偶像的敬意。', img: 'https://picsum.photos/seed/fz1/400/250', score: 5 },
  { name: '李四的铁山靠', desc: '练习铁山靠第365天，终于从"像触电"进化到了"像在跳舞"。', img: 'https://picsum.photos/seed/fz2/400/250', score: 4 },
  { name: '王五的中分头', desc: '为了完美复刻中分发型，每天早起半小时打理头发，连理发师都记住了他的要求。', img: 'https://picsum.photos/seed/fz3/400/250', score: 5 },
  { name: '赵六的篮球梦', desc: '虽然投篮命中率只有5%，但运球姿势已经达到了"以假乱真"的境界。', img: 'https://picsum.photos/seed/fz4/400/250', score: 3 }
]
</script>

<style scoped>
.talents-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.talent-card {
  background: rgba(255,255,255,0.9);
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  transition: all 0.3s;
  border-top: 4px solid var(--color);
  backdrop-filter: blur(10px);
}

.talent-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.talent-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.talent-name {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.talent-desc {
  color: #777;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.talent-level {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  color: #888;
}

.level-bar {
  width: 100px;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.level-fill {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--color), #ffd93d);
  border-radius: 4px;
  transition: width 1s;
}

.level-num {
  font-weight: bold;
  color: var(--color);
}

.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 26px;
  margin-bottom: 24px;
  padding-left: 16px;
  border-left: 4px solid #6bcb77;
  color: #444;
}

.song-list {
  background: rgba(255,255,255,0.85);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  backdrop-filter: blur(10px);
}

.song-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
}

.song-item:last-child {
  border-bottom: none;
}

.song-item:hover {
  background: rgba(255,215,0,0.05);
}

.song-rank {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd93d, #ff6b6b);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  margin-right: 16px;
  flex-shrink: 0;
}

.song-info {
  flex: 1;
}

.song-info h4 {
  font-size: 16px;
  color: #333;
}

.song-info p {
  font-size: 13px;
  color: #999;
  margin-top: 2px;
}

.song-tag {
  padding: 4px 12px;
  border-radius: 12px;
  background: #f0f0f0;
  font-size: 12px;
  color: #666;
  margin: 0 16px;
}

.song-hot {
  font-size: 14px;
  color: #ff6b6b;
  white-space: nowrap;
}

.imitation-score {
  margin-top: 12px;
  font-size: 13px;
  color: #888;
}

.stars {
  letter-spacing: 2px;
}

.stars span {
  opacity: 0.3;
}

.stars span.active {
  opacity: 1;
}

@media (max-width: 768px) {
  .talents-showcase {
    grid-template-columns: 1fr 1fr;
  }
  
  .song-item {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .song-tag {
    margin: 0;
  }
}

@media (max-width: 480px) {
  .talents-showcase {
    grid-template-columns: 1fr;
  }
}
</style>
