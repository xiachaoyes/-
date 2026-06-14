<template>
  <div class="page-container">
    <h1 class="page-title">历史事件</h1>
    <p class="page-subtitle">元朝九十八年间的重大历史事件</p>

    <div class="events-list">
      <div class="event-item card" v-for="(event, idx) in events" :key="idx">
        <div class="event-year">{{ event.year }}</div>
        <div class="event-body">
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-desc">{{ event.desc }}</p>
          <div class="event-tags">
            <span class="tag" v-for="(tag, ti) in event.tags" :key="ti">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const events = [
  {
    year: '1271年',
    title: '忽必烈建立元朝',
    desc: '1271年，元世祖忽必烈采纳汉臣刘秉忠的建议，取《易经》"大哉乾元"之意，正式将国号改为"大元"，定都大都（今北京）。这标志着蒙古政权从草原帝国向中原王朝的转型，元朝成为中国历史上第一个由少数民族建立的大一统王朝。',
    tags: ['建国', '忽必烈', '定都']
  },
  {
    year: '1276年',
    title: '攻占临安，南宋灭亡',
    desc: '元军统帅伯颜率大军南下，攻破南宋都城临安（今杭州），俘获宋恭帝及谢太后。南宋残余势力退往南方继续抵抗，但大势已去。元朝基本完成了对中国的统一。',
    tags: ['军事', '统一', '南宋']
  },
  {
    year: '1279年',
    title: '崖山海战',
    desc: '元将张弘范在崖山（今广东新会）与南宋最后一支抵抗力量展开决战。宋军大败，左丞相陆秀夫背负年仅八岁的宋帝赵昺投海殉国，南宋彻底灭亡。崖山海战标志着元朝完成了全国统一。',
    tags: ['海战', '统一', '南宋']
  },
  {
    year: '1274年 & 1281年',
    title: '征伐日本（元日战争）',
    desc: '忽必烈两次派遣大军远征日本。第一次率军约3万人，第二次规模更大，约14万人。但两次均遭遇台风（日本称为"神风"）袭击，舰队损失惨重，最终以失败告终。这是元朝对外扩张的重要事件。',
    tags: ['对外扩张', '日本', '神风']
  },
  {
    year: '1253年-1292年',
    title: '征伐大理与安南',
    desc: '忽必烈在即位前即率军远征大理国（今云南地区），将其纳入蒙古版图。此后元朝多次征伐安南（今越南北部），迫使安南成为藩属国。元朝的势力范围扩展至东南亚地区。',
    tags: ['对外扩张', '大理', '安南']
  },
  {
    year: '1287年',
    title: '乃颜之乱',
    desc: '蒙古宗王乃颜在东北地区发动叛乱，忽必烈亲率大军征讨。此战动用了大量汉军和蒙古军，最终平定叛乱，维护了元朝的统一。此事件反映了元朝内部蒙古贵族之间的矛盾。',
    tags: ['内乱', '平叛', '忽必烈']
  },
  {
    year: '1340年代',
    title: '红巾军起义爆发',
    desc: '元朝末年，政治腐败，天灾频发，民不聊生。韩山童、刘福通等人以白莲教组织民众，在颍州（今安徽阜阳）发动红巾军起义。起义迅速蔓延全国，各地反元势力纷纷响应，元朝统治开始动摇。',
    tags: ['起义', '元末', '红巾军']
  },
  {
    year: '1368年',
    title: '明朝建立，元朝北遁',
    desc: '朱元璋在应天（今南京）称帝，建立明朝。同年，明军大将徐达、常遇春率军北伐，攻占大都。元顺帝妥懽帖睦尔率皇室北逃至上都，元朝在全国的统治结束，史称"北元"。',
    tags: ['灭亡', '明朝', '北元']
  }
]
</script>

<style scoped>
.events-list {
  max-width: 800px;
  margin: 0 auto;
}

.event-item {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  padding: 28px;
  position: relative;
  overflow: hidden;
}

.event-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--gold), var(--red));
  border-radius: 2px;
}

.event-year {
  flex-shrink: 0;
  width: 90px;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--gold);
  letter-spacing: 2px;
  padding-top: 2px;
}

.event-body {
  flex: 1;
}

.event-title {
  font-size: 1.2rem;
  color: var(--gold-light);
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.event-desc {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.9;
  margin-bottom: 14px;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-block;
  padding: 3px 12px;
  font-size: 0.8rem;
  color: var(--gold);
  background: rgba(201, 168, 76, 0.1);
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: 4px;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .event-item {
    flex-direction: column;
    gap: 10px;
  }
  .event-year {
    width: auto;
  }
}
</style>
