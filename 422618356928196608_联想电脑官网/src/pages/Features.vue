<template>
  <div class="features-page">
    <div class="page-banner">
      <div class="container">
        <h1>产品特点</h1>
        <p>联想电脑的核心技术与创新优势</p>
      </div>
    </div>

    <div class="container">
      <div class="features-grid">
        <div class="feature-card" v-for="item in features" :key="item.title">
          <div class="feature-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <div class="tech-showcase">
        <h2 class="section-title">核心技术</h2>
        <div class="tech-list">
          <div class="tech-item" v-for="tech in techs" :key="tech.name">
            <h4>{{ tech.name }}</h4>
            <p>{{ tech.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { icon: '❄️', title: '智能散热系统', desc: '联想自主研发的霜刃散热系统，采用多风扇多热管设计，配合智能温控算法，在高负载下依然保持冷静运行。' },
  { icon: '🖥️', title: '卓越显示技术', desc: '从2.5K到4K分辨率，从IPS到OLED面板，联想电脑提供专业级色彩准确度和出色的视觉体验。' },
  { icon: '🔋', title: '长效续航', desc: '大容量高密度电池配合智能电源管理，最长可达15小时续航，满足全天移动办公需求。' },
  { icon: '🎵', title: '沉浸式音频', desc: '与Harman Kardon、Dolby等顶级音频品牌合作，打造身临其境的音效体验。' },
  { icon: '🔒', title: '全方位安全防护', desc: '指纹识别、人脸识别、物理摄像头开关、TPM安全芯片，多层级保护您的数据安全。' },
  { icon: '🌐', title: '智能互联', desc: '联想Lenovo Vantage软件生态，实现设备管理、驱动更新、系统优化一站式服务。' }
]

const techs = [
  { name: '联想AI芯片', desc: '自研AI加速芯片，智能优化系统性能、功耗和散热，让电脑越用越懂你。' },
  { name: '双模显示技术', desc: 'DDG双模显示切换，在集显模式和独显模式之间自由切换，兼顾续航与性能。' },
  { name: '联想智能降噪', desc: '基于AI的智能降噪算法，在视频会议中有效过滤环境噪音，让沟通更清晰。' },
  { name: '快充技术', desc: '支持最高140W PD快充，充电15分钟即可使用4小时，告别电量焦虑。' }
]
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
  padding: 50px 0;
}

.feature-card {
  background: #fff;
  border-radius: 12px;
  padding: 32px 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 36px;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 18px;
  color: #222;
  margin-bottom: 12px;
}

.feature-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}

.tech-showcase {
  padding: 40px 0 60px;
}

.section-title {
  text-align: center;
  font-size: 28px;
  color: #222;
  margin-bottom: 36px;
}

.tech-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.tech-item {
  background: linear-gradient(135deg, #f8f9fa, #fff);
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 24px;
}

.tech-item h4 {
  font-size: 16px;
  color: #e2231a;
  margin-bottom: 10px;
}

.tech-item p {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
