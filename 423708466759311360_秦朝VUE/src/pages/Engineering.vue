<template>
  <div class="engineering-page">
    <div class="page-header">
      <h1>重大工程</h1>
      <p>震撼世界的建筑奇迹 · 古代劳动人民的智慧结晶</p>
    </div>

    <section class="container content-section">
      <div class="section-title">
        <h2>万里长城</h2>
      </div>
      <div class="project-card">
        <div class="project-img">
          <img src="https://picsum.photos/seed/greatwall/700/400" alt="万里长城">
        </div>
        <div class="project-body">
          <div class="project-info">
            <div class="info-item"><span>长度</span> 约5000公里</div>
            <div class="info-item"><span>修建时间</span> 公元前214年—前210年</div>
            <div class="info-item"><span>动用人力</span> 约30万军队+数十万民夫</div>
          </div>
          <p>秦始皇统一六国后，为抵御北方匈奴的侵扰，下令将战国时期秦、赵、燕三国的北部长城连接并扩建，形成了西起临洮（今甘肃岷县）、东至辽东的万里长城。长城不仅是军事防御工程，也是古代建筑技术的杰出代表。</p>
          <p>秦长城多采用夯土筑成，部分地段使用石块。城墙高约8-10米，顶部宽约4-6米，可容五马并行。城墙上每隔一段距离设有烽火台，用于传递军情。长城沿线还修建了众多的关隘、城堡和兵站。</p>
        </div>
      </div>
    </section>

    <!-- 兵马俑 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>兵马俑</h2>
      </div>
      <div class="project-card reverse">
        <div class="project-img">
          <img src="https://picsum.photos/seed/terracotta/700/400" alt="兵马俑">
        </div>
        <div class="project-body">
          <div class="project-info">
            <div class="info-item"><span>发现时间</span> 1974年</div>
            <div class="info-item"><span>占地面积</span> 约2万平方米</div>
            <div class="info-item"><span>出土数量</span> 8000余件陶俑</div>
          </div>
          <p>兵马俑是秦始皇陵的陪葬坑，位于陕西省西安市临潼区。目前已发现三个俑坑，出土了数以千计的陶质兵马俑、战车和武器。每个陶俑的面部表情各不相同，栩栩如生，展现了秦朝军队的威武雄姿。</p>
          <p>兵马俑的制作工艺极为精湛，采用模塑结合的方法，先分段制作身体各部位，然后组装成型，最后进行精细的雕刻和彩绘。陶俑原本都有鲜艳的色彩，但因出土后氧化而褪色。兵马俑被誉为"世界第八大奇迹"。</p>
        </div>
      </div>
    </section>

    <!-- 阿房宫与秦始皇陵 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>阿房宫与秦始皇陵</h2>
      </div>
      <div class="grid grid-2">
        <div class="card">
          <img class="card-img" src="https://picsum.photos/seed/epang/400/250" alt="阿房宫">
          <div class="card-body">
            <h3>阿房宫</h3>
            <p>阿房宫是秦始皇计划修建的巨型宫殿群，位于咸阳渭河南岸。据《史记》记载，阿房宫"东西五百步，南北五十丈，上可以坐万人，下可以建五丈旗"。但阿房宫并未完全建成，秦朝就灭亡了。唐代杜牧的《阿房宫赋》使其名垂千古。</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img" src="https://picsum.photos/seed/qintomb/400/250" alt="秦始皇陵">
          <div class="card-body">
            <h3>秦始皇陵</h3>
            <p>秦始皇陵位于陕西省西安市临潼区，是中国历史上第一座规模宏大、设计完善的帝王陵寝。陵墓高约76米，周长约2000米。据记载，地宫内以水银为百川江河大海，上具天文，下具地理。由于尚未发掘，地宫内部仍是一个未解之谜。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 工程数据 -->
    <section class="container content-section">
      <div class="section-title">
        <h2>工程数据总览</h2>
      </div>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">5000km</div>
          <div class="stat-label">长城总长</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">8000+</div>
          <div class="stat-label">兵马俑数量</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">76m</div>
          <div class="stat-label">秦始皇陵高度</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">300万+</div>
          <div class="stat-label">征用民夫总数</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
  background: var(--qin-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--qin-border);
  margin-bottom: 40px;
}

.project-card.reverse {
  grid-template-columns: 1fr 1.2fr;
}

.project-card.reverse .project-img {
  order: 1;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-body {
  padding: 30px;
}

.project-body p {
  margin-bottom: 10px;
  line-height: 1.9;
  text-indent: 2em;
  color: var(--qin-text);
}

.project-info {
  display: grid;
  gap: 8px;
  margin-bottom: 15px;
  padding: 15px;
  background: var(--qin-cream);
  border-radius: 8px;
}

.info-item {
  font-size: 0.9rem;
  color: var(--qin-text);
}

.info-item span {
  font-weight: bold;
  color: var(--qin-red);
  margin-right: 8px;
}

@media (max-width: 768px) {
  .project-card,
  .project-card.reverse {
    grid-template-columns: 1fr;
  }

  .project-card.reverse .project-img {
    order: -1;
  }

  .project-img {
    max-height: 280px;
  }
}
</style>
