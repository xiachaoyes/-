/* ============================================================
   武汉理工大学 - 模拟展示网站 JavaScript
   职责：数据定义、DOM渲染、交互逻辑
   ============================================================ */

// ===== 1. 模拟数据 =====

/** 轮播图数据 */
const sliderData = [
  { img: 'https://picsum.photos/seed/whut1/1600/800', caption: '武汉理工大学 · 南湖校区图书馆' },
  { img: 'https://picsum.photos/seed/whut2/1600/800', caption: '武汉理工大学 · 马房山校区主楼' },
  { img: 'https://picsum.photos/seed/whut3/1600/800', caption: '武汉理工大学 · 余家头校区' },
  { img: 'https://picsum.photos/seed/whut4/1600/800', caption: '武汉理工大学 · 校园樱花大道' },
];

/** 统计数据 */
const statsData = [
  { number: '3', label: '个校区（马房山、余家头、南湖）' },
  { number: '5万+', label: '在校学生' },
  { number: '4000+', label: '专任教师' },
  { number: 'QS 801-1000', label: 'QS世界大学排名' },
];

/** 历史沿革数据 */
const historyData = [
  { year: '2000年', desc: '武汉工业大学、武汉交通科技大学、武汉汽车工业大学三校合并，组建武汉理工大学。' },
  { year: '2001年', desc: '学校正式进入国家"211工程"重点建设高校行列。' },
  { year: '2010年', desc: '学校成为教育部直属高校，由教育部与交通运输部、国家海洋局等共建。' },
  { year: '2017年', desc: '入选国家"双一流"建设高校，材料科学与工程入选"双一流"建设学科。' },
  { year: '2020年', desc: '学校迎来合并组建20周年，综合实力稳步提升，多个学科进入ESI全球前1%。' },
  { year: '2023年', desc: '学校持续深化教育教学改革，在材料、交通、汽车等领域取得多项重大科研成果。' },
];

/** 学院数据 */
const collegesData = [
  {
    name: '材料科学与工程学院',
    img: 'https://picsum.photos/seed/college1/400/300',
    intro: '材料科学与工程学院是武汉理工大学最具特色的学院之一，材料科学与工程学科为国家"双一流"建设学科。学院拥有材料科学与工程一级学科博士点和博士后流动站。',
    majors: ['材料科学与工程', '材料物理', '材料化学', '无机非金属材料工程', '高分子材料与工程'],
    faculty: '现有专任教师280余人，其中教授120余人，博士生导师90余人。拥有中国科学院院士2人、中国工程院院士1人。',
    labs: ['材料复合新技术国家重点实验室', '硅酸盐建筑材料国家重点实验室', '光纤传感技术国家工程实验室']
  },
  {
    name: '汽车工程学院',
    img: 'https://picsum.photos/seed/college2/400/300',
    intro: '汽车工程学院是我国汽车工业人才培养和科学研究的重要基地，在新能源汽车、智能网联汽车等领域具有显著优势。',
    majors: ['车辆工程', '能源与动力工程', '汽车服务工程'],
    faculty: '现有专任教师120余人，其中教授40余人，博士生导师30余人。',
    labs: ['汽车零部件技术湖北省重点实验室', '新能源汽车技术研究中心']
  },
  {
    name: '交通与物流工程学院',
    img: 'https://picsum.photos/seed/college3/400/300',
    intro: '交通与物流工程学院在交通运输规划与管理、物流工程等领域具有雄厚的教学科研实力。',
    majors: ['交通运输', '交通工程', '物流工程', '物流管理'],
    faculty: '现有专任教师150余人，其中教授50余人，博士生导师40余人。',
    labs: ['智能交通系统研究中心', '物流系统优化实验室']
  },
  {
    name: '计算机科学与技术学院',
    img: 'https://picsum.photos/seed/college4/400/300',
    intro: '计算机科学与技术学院致力于培养计算机领域的高素质人才，在人工智能、大数据、网络安全等方向成果丰硕。',
    majors: ['计算机科学与技术', '软件工程', '人工智能', '数据科学与大数据技术'],
    faculty: '现有专任教师130余人，其中教授30余人，博士生导师20余人。',
    labs: ['湖北省计算机基础实验教学示范中心', '人工智能研究所']
  },
  {
    name: '经济学院',
    img: 'https://picsum.photos/seed/college5/400/300',
    intro: '经济学院在应用经济学、理论经济学等领域具有扎实的教学科研基础，培养了大量经济管理人才。',
    majors: ['经济学', '金融学', '国际经济与贸易', '电子商务'],
    faculty: '现有专任教师90余人，其中教授20余人，博士生导师15余人。',
    labs: ['经济数据分析实验室', '金融工程研究中心']
  },
  {
    name: '艺术与设计学院',
    img: 'https://picsum.photos/seed/college6/400/300',
    intro: '艺术与设计学院在设计学、美术学等领域具有鲜明的办学特色，注重艺术与科技的融合。',
    majors: ['工业设计', '视觉传达设计', '环境设计', '动画'],
    faculty: '现有专任教师80余人，其中教授15余人，博士生导师10余人。',
    labs: ['数字艺术实验室', '工业设计创新中心']
  }
];

/** 校园风采图片数据 */
const galleryData = [
  { img: 'https://picsum.photos/seed/campus1/800/600', alt: '南湖校区图书馆' },
  { img: 'https://picsum.photos/seed/campus2/800/600', alt: '马房山校区主楼' },
  { img: 'https://picsum.photos/seed/campus3/800/600', alt: '校园秋景' },
  { img: 'https://picsum.photos/seed/campus4/800/600', alt: '余家头校区' },
  { img: 'https://picsum.photos/seed/campus5/800/600', alt: '校园樱花' },
  { img: 'https://picsum.photos/seed/campus6/800/600', alt: '南湖体育中心' },
];

/** 招生数据 */
const admissionData = [
  { year: '2021', plan: 9200, enrolled: 9180, avgScore: 598 },
  { year: '2022', plan: 9350, enrolled: 9320, avgScore: 602 },
  { year: '2023', plan: 9500, enrolled: 9480, avgScore: 605 },
  { year: '2024', plan: 9600, enrolled: '-', avgScore: '-' },
];

/** 就业率数据（用于柱状图） */
const employmentData = [
  { year: '2020', rate: 92.5 },
  { year: '2021', rate: 93.8 },
  { year: '2022', rate: 94.2 },
  { year: '2023', rate: 95.1 },
];


// ===== 2. DOM 渲染函数 =====

/** 渲染轮播图 */
function renderSlider() {
  const container = document.getElementById('sliderContainer');
  const dotsContainer = document.getElementById('sliderDots');
  container.innerHTML = '';
  dotsContainer.innerHTML = '';

  sliderData.forEach((item, index) => {
    const slide = document.createElement('div');
    slide.className = `slider-slide${index === 0 ? ' active' : ''}`;
    slide.innerHTML = `
      <img src="${item.img}" alt="${item.caption}">
      <div class="slider-caption">${item.caption}</div>
    `;
    container.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = `slider-dot${index === 0 ? ' active' : ''}`;
    dot.dataset.index = index;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

/** 渲染统计数据 */
function renderStats() {
  const container = document.getElementById('overviewStats');
  container.innerHTML = statsData.map(item => `
    <div class="stat-card">
      <span class="stat-number">${item.number}</span>
      <span class="stat-label">${item.label}</span>
    </div>
  `).join('');
}

/** 渲染时间轴 */
function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = historyData.map(item => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-desc">${item.desc}</div>
    </div>
  `).join('');
}

/** 渲染学院网格 */
function renderColleges() {
  const container = document.getElementById('collegeGrid');
  container.innerHTML = collegesData.map((item, index) => `
    <div class="college-card" data-index="${index}">
      <img src="${item.img}" alt="${item.name}">
      <div class="college-card-body">
        <h3>${item.name}</h3>
        <p>${item.intro.slice(0, 40)}...</p>
      </div>
    </div>
  `).join('');

  // 绑定点击事件
  container.querySelectorAll('.college-card').forEach(card => {
    card.addEventListener('click', () => {
      const index = parseInt(card.dataset.index);
      showCollegeModal(index);
    });
  });
}

/** 渲染画廊 */
function renderGallery() {
  const container = document.getElementById('galleryGrid');
  container.innerHTML = galleryData.map((item, index) => `
    <div class="gallery-item" data-index="${index}">
      <img src="${item.img}" alt="${item.alt}">
    </div>
  `).join('');

  container.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index);
      showLightbox(index);
    });
  });
}

/** 渲染招生表格 */
function renderAdmissionTable() {
  const table = document.getElementById('admissionTable');
  let html = `
    <thead>
      <tr>
        <th>年份</th>
        <th>计划招生</th>
        <th>实际录取</th>
        <th>平均录取分</th>
      </tr>
    </thead>
    <tbody>
  `;
  admissionData.forEach(row => {
    html += `<tr>
      <td>${row.year}</td>
      <td>${row.plan}</td>
      <td>${row.enrolled}</td>
      <td>${row.avgScore}</td>
    </tr>`;
  });
  html += '</tbody>';
  table.innerHTML = html;
}

/** 渲染就业率柱状图 */
function renderChart() {
  const container = document.getElementById('chartContainer');
  const maxRate = Math.max(...employmentData.map(d => d.rate));
  container.innerHTML = employmentData.map(item => {
    const heightPercent = (item.rate / maxRate) * 100;
    return `
      <div class="chart-bar-wrapper">
        <div class="chart-bar" style="height: ${heightPercent}%;" title="${item.rate}%"></div>
        <span class="chart-label">${item.year}<br>${item.rate}%</span>
      </div>
    `;
  }).join('');
}


// ===== 3. 交互逻辑 =====

// --- 3.1 轮播图控制 ---
let currentSlide = 0;
let slideInterval = null;

function goToSlide(index) {
  const slides = document.querySelectorAll('.slider-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startSlideAuto() {
  stopSlideAuto();
  slideInterval = setInterval(nextSlide, 4000);
}

function stopSlideAuto() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
}

// --- 3.2 学院模态框 ---
function showCollegeModal(index) {
  const college = collegesData[index];
  if (!college) return;

  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <h2>${college.name}</h2>
    <img src="${college.img}" alt="${college.name}">
    <p><strong>学院简介：</strong>${college.intro}</p>
    <p><strong>师资力量：</strong>${college.faculty}</p>
    <p><strong>下属专业：</strong></p>
    <ul>${college.majors.map(m => `<li>${m}</li>`).join('')}</ul>
    <p><strong>重点实验室/中心：</strong></p>
    <ul>${college.labs.map(l => `<li>${l}</li>`).join('')}</ul>
  `;
  document.getElementById('collegeModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCollegeModal() {
  document.getElementById('collegeModal').classList.remove('show');
  document.body.style.overflow = '';
}

// --- 3.3 Lightbox ---
function showLightbox(index) {
  const item = galleryData[index];
  if (!item) return;
  const img = document.getElementById('lightboxImg');
  img.src = item.img;
  img.alt = item.alt;
  document.getElementById('lightbox').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
  document.body.style.overflow = '';
}

// --- 3.4 表单提交 ---
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const message = document.getElementById('formMessage').value.trim();

  if (!name || !email || !message) {
    showToast('请填写所有必填项');
    return;
  }

  // 存储到 localStorage
  const messages = JSON.parse(localStorage.getItem('messages') || '[]');
  messages.push({
    id: Date.now(),
    name,
    email,
    message,
    time: new Date().toLocaleString()
  });
  localStorage.setItem('messages', JSON.stringify(messages));

  // 清空表单
  document.getElementById('contactForm').reset();
  showToast('提交成功！感谢您的留言。');
}

// --- 3.5 Toast 提示 ---
function showToast(text, duration) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration || 2500);
}

// --- 3.6 查看历史留言 ---
function showMessages() {
  const messages = JSON.parse(localStorage.getItem('messages') || '[]');
  if (messages.length === 0) {
    showToast('暂无历史留言');
    return;
  }

  let html = '<h2>历史留言</h2>';
  messages.slice().reverse().forEach(m => {
    html += `
      <div style="border-bottom:1px solid #eee;padding:12px 0;">
        <strong>${m.name}</strong> (${m.email}) <span style="color:#999;font-size:12px;">${m.time}</span>
        <p style="margin-top:4px;color:#555;">${m.message}</p>
      </div>
    `;
  });

  const body = document.getElementById('modalBody');
  body.innerHTML = html;
  document.getElementById('collegeModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

// --- 3.7 导航高亮（Intersection Observer） ---
function setupNavHighlight() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

// --- 3.8 汉堡菜单 ---
function setupHamburgerMenu() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // 点击导航链接后关闭菜单
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
}


// ===== 4. 初始化 =====
function init() {
  // 渲染所有动态内容
  renderSlider();
  renderStats();
  renderTimeline();
  renderColleges();
  renderGallery();
  renderAdmissionTable();
  renderChart();

  // 轮播控制
  document.getElementById('sliderPrev').addEventListener('click', () => { prevSlide(); startSlideAuto(); });
  document.getElementById('sliderNext').addEventListener('click', () => { nextSlide(); startSlideAuto(); });
  startSlideAuto();

  // 模态框关闭
  document.getElementById('modalClose').addEventListener('click', closeCollegeModal);
  document.getElementById('collegeModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCollegeModal();
  });

  // Lightbox 关闭
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  // 表单提交
  document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);

  // 查看历史留言
  document.getElementById('viewMessagesBtn').addEventListener('click', showMessages);

  // 导航高亮
  setupNavHighlight();

  // 汉堡菜单
  setupHamburgerMenu();

  // 键盘关闭模态框/lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCollegeModal();
      closeLightbox();
    }
  });
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
