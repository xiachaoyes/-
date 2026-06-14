<template>
  <div class="unification-page">
    <div class="page-header">
      <h1>统一六国</h1>
      <p>横扫六合 · 十年统一战争历程</p>
    </div>

    <section class="container content-section">
      <div class="section-title">
        <h2>战争背景</h2>
      </div>
      <div class="bg-card">
        <div class="bg-text">
          <p>战国末期，经过商鞅变法后的秦国日益强大，成为七雄中最具统一实力的国家。秦王嬴政亲政后，采纳李斯等人的建议，制定了"远交近攻、逐个击破"的统一战略。从公元前230年灭韩开始，到公元前221年灭齐结束，秦国仅用十年时间就完成了统一大业。</p>
          <p>秦国的胜利得益于其强大的军事力量、先进的政治制度和卓越的人才战略。秦军装备精良、训练有素，加之白起、王翦等名将的指挥，使得六国难以抵挡秦国的进攻锋芒。</p>
        </div>
        <div class="bg-img">
          <img src="https://picsum.photos/seed/qinwar/600/350" alt="战国七雄">
        </div>
      </div>
    </section>

    <!-- 时间线 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>灭国时间线</h2>
      </div>
      <div class="timeline">
        <div v-for="(item, index) in conquests" :key="index" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="year">{{ item.year }}</span>
            <h3>灭{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
            <p style="margin-top:8px;font-size:0.85rem;color:var(--qin-text-light);">{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 关键因素 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>统一关键因素</h2>
      </div>
      <div class="grid grid-3">
        <div class="card">
          <div class="card-body">
            <h3>⚔️ 军事力量</h3>
            <p>秦国军队装备精良，以青铜兵器为主，弓弩、戈矛等武器制造工艺先进。秦军实行军功爵制，将士作战勇猛，纪律严明，是当时最强大的军事力量。</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>👥 人才战略</h3>
            <p>秦国重用外来人才，如李斯（楚国人）、吕不韦（卫国人）等。秦始皇不拘一格任用贤能，建立了高效的人才选拔机制，为统一大业提供了智力支持。</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>📋 制度改革</h3>
            <p>商鞅变法奠定了秦国强大的制度基础。废除世卿世禄制、推行县制、奖励耕战等改革措施，使秦国在政治、经济、军事各方面都领先于其他六国。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 统一意义 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>统一的历史意义</h2>
      </div>
      <div class="grid grid-2">
        <div class="card">
          <div class="card-body">
            <h3>政治意义</h3>
            <p>结束了春秋战国以来五百多年的分裂割据局面，建立了中国历史上第一个大一统王朝。中央集权制度的建立为后世两千多年的封建政治体制奠定了基础。</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>民族意义</h3>
            <p>促进了华夏各民族的融合，奠定了中华民族多元一体格局的基础。秦朝将中原、楚、吴越等不同文化区域统一在一个政权之下，加速了民族融合进程。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const conquests = [
  {
    year: '公元前230年',
    name: '韩',
    desc: '首战告捷，灭韩设颍川郡',
    detail: '韩国是七国中最弱小的国家，地处中原四战之地。秦将内史腾率军攻韩，韩王安投降，韩国灭亡。秦国在韩地设置颍川郡。'
  },
  {
    year: '公元前228年',
    name: '赵',
    desc: '反间计破赵，邯郸城破',
    detail: '秦将王翦率军攻赵，赵将李牧率军抵抗。秦国使用反间计，赵王迁杀李牧。王翦趁机大破赵军，攻破邯郸，赵王迁被俘。'
  },
  {
    year: '公元前225年',
    name: '魏',
    desc: '水淹大梁，魏国灭亡',
    detail: '秦将王贲率军攻魏，魏国都城大梁（今开封）城池坚固。秦军引黄河水灌城，大梁城破，魏王假投降，魏国灭亡。'
  },
  {
    year: '公元前223年',
    name: '楚',
    desc: '倾国之战，平定南方大国',
    detail: '楚国是南方大国，地域辽阔。秦将王翦率六十万大军攻楚，采用持久战术，待楚军疲惫后发动总攻，大破楚军，俘虏楚王负刍。'
  },
  {
    year: '公元前222年',
    name: '燕',
    desc: '辽东追剿，燕王喜被俘',
    detail: '秦将王贲攻燕，燕王喜退守辽东。秦军追击至辽东，燕王喜被俘。此前燕太子丹曾派荆轲刺杀秦王，加速了燕国的灭亡。'
  },
  {
    year: '公元前221年',
    name: '齐',
    desc: '最后一战，天下一统',
    detail: '齐国是最后一个被灭的国家。秦将王贲从燕地南下攻齐，齐王建投降。齐国灭亡后，秦始皇完成了统一六国的大业，建立了秦朝。'
  }
]
</script>

<style scoped>
.bg-card {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
  background: var(--qin-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--qin-border);
}

.bg-text {
  padding: 30px;
}

.bg-text p {
  margin-bottom: 12px;
  line-height: 1.9;
  text-indent: 2em;
  color: var(--qin-text);
}

.bg-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .bg-card {
    grid-template-columns: 1fr;
  }

  .bg-img {
    order: -1;
    max-height: 250px;
  }
}
</style>
