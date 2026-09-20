/* ============================================================
   武汉理工大学 · 单页网站交互逻辑
   所有数据均为前端模拟，用户留言持久化在 localStorage
   ============================================================ */

/* ------------------------------------------------------------
   1. 数据定义
   ------------------------------------------------------------ */

// 院系 / 学科数据
const DEPARTMENTS = [
  {
    id: 1,
    name: "材料科学与工程学院",
    category: "理工类",
    tag: "双一流学科",
    desc: "材料学科进入世界一流行列，聚焦先进复合材料与绿色建材。",
    detail:
      "材料科学与工程学院是学校最具优势的学院之一，材料科学与工程学科入选国家"双一流"建设学科。学院在先进复合材料、绿色建筑材料、新能源材料等方向承担了大量国家级科研项目，拥有国家重点实验室等高水平科研平台，培养了大批材料领域的高层次人才。",
    image: "https://picsum.photos/id/1074/800/600"
  },
  {
    id: 2,
    name: "交通与物流工程学院",
    category: "理工类",
    tag: "行业特色",
    desc: "面向水运、港口与智慧物流，服务国家交通强国战略。",
    detail:
      "交通与物流工程学院依托学校在交通行业的深厚积淀，围绕水路运输、港口工程、智慧物流等方向开展教学与科研。学院与多家大型港航企业建立了紧密的产学研合作关系，毕业生在交通运输行业具有很高的认可度。",
    image: "https://picsum.photos/id/1067/800/600"
  },
  {
    id: 3,
    name: "汽车工程学院",
    category: "理工类",
    tag: "行业特色",
    desc: "聚焦新能源汽车与智能网联汽车，产教融合特色鲜明。",
    detail:
      "汽车工程学院是学校三大行业特色学院之一，在新能源汽车、智能网联汽车、汽车轻量化等前沿领域开展研究。学院与国内主要汽车企业共建实习实训基地，注重学生工程实践能力培养，就业前景广阔。",
    image: "https://picsum.photos/id/111/800/600"
  },
  {
    id: 4,
    name: "计算机与人工智能学院",
    category: "理工类",
    tag: "热门方向",
    desc: "涵盖计算机科学、人工智能、大数据等热门专业方向。",
    detail:
      "计算机与人工智能学院开设计算机科学与技术、人工智能、数据科学与大数据技术等专业，注重算法基础与工程实践并重。学院建有多个校企联合实验室，学生在各类学科竞赛中屡获佳绩。",
    image: "https://picsum.photos/id/180/800/600"
  },
  {
    id: 5,
    name: "管理学院",
    category: "人文社科",
    tag: "经管类",
    desc: "培养具有工科背景的复合型管理人才。",
    detail:
      "管理学院依托学校工科优势，形成了"工科背景 + 管理素养"的培养特色，开设工商管理、会计学、信息管理与信息系统等专业。学院注重案例教学与实践训练，与多家企业合作开展创新创业教育。",
    image: "https://picsum.photos/id/20/800/600"
  },
  {
    id: 6,
    name: "法学与人文社会学院",
    category: "人文社科",
    tag: "人文类",
    desc: "涵盖法学、新闻传播、外语等人文社科专业。",
    detail:
      "法学与人文社会学院开设法学、新闻学、英语等专业，注重人文素养与专业能力并重。学院鼓励学生参与社会实践与志愿服务，培养具有社会责任感的应用型人才。",
    image: "https://picsum.photos/id/24/800/600"
  },
  {
    id: 7,
    name: "艺术与设计学院",
    category: "人文社科",
    tag: "艺术类",
    desc: "工业设计、视觉传达等专业，工科与艺术交叉融合。",
    detail:
      "艺术与设计学院开设工业设计、视觉传达设计、环境设计等专业，充分发挥学校工科背景优势，形成"设计 + 工程"的交叉培养模式。学院师生作品在国内外设计赛事中多次获奖。",
    image: "https://picsum.photos/id/26/800/600"
  },
  {
    id: 8,
    name: "智能交通与新能源交叉研究院",
    category: "交叉学科",
    tag: "交叉学科",
    desc: "融合交通、能源、信息，探索未来出行新范式。",
    detail:
      "智能交通与新能源交叉研究院整合交通、能源、信息等多个学科的力量，围绕智能交通系统、新能源动力、车路协同等方向开展跨学科研究，是学校推进学科交叉融合的重要平台。",
    image: "https://picsum.photos/id/1073/800/600"
  },
  {
    id: 9,
    name: "生物医学与健康工程中心",
    category: "交叉学科",
    tag: "交叉学科",
    desc: "材料、信息与生命科学交叉，服务健康中国战略。",
    detail:
      "生物医学与健康工程中心依托学校在材料与信息领域的优势，开展生物医用材料、健康监测与智能医疗设备等交叉研究，推动科技成果向临床应用转化。",
    image: "https://picsum.photos/id/1059/800/600"
  }
];

// 校园风光图片
const GALLERY = [
  { id: 1, title: "图书馆前的清晨", src: "https://picsum.photos/id/1039/800/600" },
  { id: 2, title: "教学楼一角", src: "https://picsum.photos/id/1040/800/600" },
  { id: 3, title: "校园林荫道", src: "https://picsum.photos/id/1043/800/600" },
  { id: 4, title: "运动场上的青春", src: "https://picsum.photos/id/1050/800/600" },
  { id: 5, title: "湖畔的黄昏", src: "https://picsum.photos/id/1052/800/600" },
  { id: 6, title: "实验楼群", src: "https://picsum.photos/id/1060/800/600" },
  { id: 7, title: "学生活动中心", src: "https://picsum.photos/id/1068/800/600" },
  { id: 8, title: "校园四季", src: "https://picsum.photos/id/1076/800/600" }
];

// 轮播图
const SLIDES = [
  { id: 1, title: "南湖校区 · 现代校园", src: "https://picsum.photos/id/1076/1200/500" },
  { id: 2, title: "马房山校区 · 历史底蕴", src: "https://picsum.photos/id/1039/1200/500" },
  { id: 3, title: "余家头校区 · 江畔风光", src: "https://picsum.photos/id/1052/1200/500" },
  { id: 4, title: "校园生活 · 青春洋溢", src: "https://picsum.photos/id/1050/1200/500" }
];

// 新闻数据
const NEWS = [
  {
    id: 1,
    title: "我校材料学科再次入选国家"双一流"建设学科",
    date: "2024-03-18",
    summary: "在最新一轮"双一流"建设学科名单中，我校材料科学与工程学科再次入选。",
    full: "在最新一轮"双一流"建设学科名单中，我校材料科学与工程学科再次入选。学校将以此为契机，进一步优化学科布局，加强高层次人才引育，持续提升学科核心竞争力，为国家和区域经济社会发展作出更大贡献。"
  },
  {
    id: 2,
    title: "学校举行2024届毕业生春季双选会",
    date: "2024-03-12",
    summary: "来自全国各地的三百余家企业来校招聘，提供岗位超过一万个。",
    full: "本次双选会吸引了来自全国各地的三百余家企业来校招聘，涵盖材料、交通、汽车、信息、经管等多个行业，提供就业岗位超过一万个。学校将持续做好毕业生就业服务工作，搭建更加高效的校企对接平台。"
  },
  {
    id: 3,
    title: "我校学子在全国大学生数学建模竞赛中获佳绩",
    date: "2024-03-05",
    summary: "我校参赛队伍在本次竞赛中斩获多项国家级奖项。",
    full: "在刚刚结束的全国大学生数学建模竞赛中，我校参赛队伍表现优异，斩获多项国家级奖项。学校长期重视学生创新实践能力培养，通过开设相关课程和组织培训，为学生参赛提供了有力支持。"
  },
  {
    id: 4,
    title: "学校与多家企业签署产学研合作协议",
    date: "2024-02-26",
    summary: "围绕新能源、智能交通等领域，学校与多家企业达成合作。",
    full: "学校近日与多家行业龙头企业签署产学研合作协议，双方将在新能源、智能交通、先进材料等领域开展联合攻关与人才培养合作，推动科技成果转化，实现校企互利共赢。"
  },
  {
    id: 5,
    title: "新学期开学第一课：厚德博学，追求卓越",
    date: "2024-02-20",
    summary: "校领导为新生讲授开学第一课，勉励同学们立志成才。",
    full: "新学期伊始，校领导为同学们讲授开学第一课，回顾学校办学历史，勉励同学们传承"厚德博学，追求卓越"的校训精神，珍惜大学时光，努力成长为堪当民族复兴重任的时代新人。"
  },
  {
    id: 6,
    title: "我校科研团队在新能源材料领域取得新进展",
    date: "2024-02-10",
    summary: "相关研究成果发表在国际知名学术期刊上。",
    full: "我校科研团队在新能源材料领域取得重要研究进展，相关成果发表在国际知名学术期刊上。该研究为新型储能材料的开发提供了新思路，具有较好的应用前景。"
  },
  {
    id: 7,
    title: "学校举办第十八届校园文化艺术节",
    date: "2024-01-15",
    summary: "丰富多彩的文艺活动展现了武理学子的青春风采。",
    full: "第十八届校园文化艺术节期间，学校举办了文艺汇演、书画展览、社团展示等丰富多彩的活动，充分展现了武理学子的青春风采与艺术才华，营造了积极向上的校园文化氛围。"
  }
];

/* ------------------------------------------------------------
   2. 工具函数
   ------------------------------------------------------------ */

// 安全读取 localStorage
function loadStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed == null ? fallback : parsed;
  } catch (e) {
    return fallback;
  }
}

// 安全写入 localStorage
function saveStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    /* 忽略写入异常 */
  }
}

// 格式化时间
function formatTime(ts) {
  const d = new Date(ts);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

// 轻提示
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ------------------------------------------------------------
   3. 导航栏：滚动高亮 + 平滑滚动 + 移动端菜单
   ------------------------------------------------------------ */
function initNav() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  // 汉堡菜单开合
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // 点击导航项后收起移动端菜单
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // 平滑滚动（含页脚链接）
  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const href = el.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navbar.offsetHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  // 滚动时高亮当前区块 + 导航栏阴影
  function onScroll() {
    const scrollY = window.pageYOffset;
    navbar.classList.toggle("scrolled", scrollY > 10);

    let currentId = "";
    const offset = navbar.offsetHeight + 20;
    sections.forEach((sec) => {
      if (sec.offsetTop - offset <= scrollY) {
        currentId = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + currentId
      );
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ------------------------------------------------------------
   4. 首屏轮播
   ------------------------------------------------------------ */
function initCarousel() {
  const track = document.getElementById("carouselTrack");
  const dotsWrap = document.getElementById("carouselDots");
  const carousel = document.getElementById("carousel");
  let current = 0;
  let timer = null;

  // 渲染幻灯片
  SLIDES.forEach((slide, i) => {
    const div = document.createElement("div");
    div.className = "carousel-slide" + (i === 0 ? " active" : "");
    div.style.backgroundImage = `url('${slide.src}')`;
    div.innerHTML = `<div class="carousel-caption">${slide.title}</div>`;
    track.appendChild(div);

    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "切换到第" + (i + 1) + "张");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = Array.from(track.children);
  const dots = Array.from(dotsWrap.children);

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function next() {
    goTo(current + 1);
  }

  function start() {
    stop();
    timer = setInterval(next, 4000);
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  // 鼠标移入暂停
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);

  start();
}

/* ------------------------------------------------------------
   5. 数据统计计数动画
   ------------------------------------------------------------ */
function initCounters() {
  const nums = Array.from(document.querySelectorAll(".stat-num"));
  let started = false;

  function animate(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  function check() {
    if (started) return;
    const stats = document.getElementById("stats");
    if (!stats) return;
    const rect = stats.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      started = true;
      nums.forEach(animate);
      window.removeEventListener("scroll", check);
    }
  }

  window.addEventListener("scroll", check, { passive: true });
  check();
}

/* ------------------------------------------------------------
   6. 学科卡片：渲染 + 筛选 + 详情弹窗
   ------------------------------------------------------------ */
function initCards() {
  const grid = document.getElementById("cardGrid");
  const filters = document.getElementById("filters");

  // 渲染卡片
  DEPARTMENTS.forEach((dept) => {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.category = dept.category;
    card.dataset.id = dept.id;
    card.innerHTML = `
      <h3 class="card-title">${dept.name}</h3>
      <p class="card-desc">${dept.desc}</p>
      <span class="card-tag">${dept.tag}</span>
    `;
    card.addEventListener("click", () => openDeptModal(dept));
    grid.appendChild(card);
  });

  // 筛选
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filters
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    const cards = Array.from(grid.children);

    // 淡出
    cards.forEach((c) => c.classList.add("fade-out"));

    setTimeout(() => {
      cards.forEach((c) => {
        const match = filter === "all" || c.dataset.category === filter;
        c.classList.toggle("hide", !match);
        c.classList.remove("fade-out");
      });
    }, 200);
  });
}

// 打开学科详情弹窗
function openDeptModal(dept) {
  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <h3>${dept.name}</h3>
    <span class="modal-tag">${dept.category} · ${dept.tag}</span>
    <p>${dept.detail}</p>
  `;
  openModal(false);
}

/* ------------------------------------------------------------
   7. 校园风光画廊 + 大图预览
   ------------------------------------------------------------ */
function initGallery() {
  const grid = document.getElementById("galleryGrid");

  GALLERY.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy">
      <div class="gallery-caption">${item.title}</div>
    `;
    div.addEventListener("click", () => openLightbox(index));
    grid.appendChild(div);
  });
}

let lightboxIndex = 0;

function openLightbox(index) {
  lightboxIndex = index;
  renderLightbox();
  openModal(true);
}

function renderLightbox() {
  const item = GALLERY[lightboxIndex];
  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <img class="lightbox-img" src="${item.src}" alt="${item.title}">
    <div class="lightbox-caption">${item.title}（${lightboxIndex + 1}/${GALLERY.length}）</div>
    <button class="lightbox-nav lightbox-prev" aria-label="上一张">&#8249;</button>
    <button class="lightbox-nav lightbox-next" aria-label="下一张">&#8250;</button>
  `;
  body
    .querySelector(".lightbox-prev")
    .addEventListener("click", (e) => {
      e.stopPropagation();
      lightboxIndex = (lightboxIndex - 1 + GALLERY.length) % GALLERY.length;
      renderLightbox();
    });
  body
    .querySelector(".lightbox-next")
    .addEventListener("click", (e) => {
      e.stopPropagation();
      lightboxIndex = (lightboxIndex + 1) % GALLERY.length;
      renderLightbox();
    });
}

/* ------------------------------------------------------------
   8. 通用浮层控制
   ------------------------------------------------------------ */
function openModal(isLightbox) {
  const modal = document.getElementById("modal");
  const box = document.getElementById("modalBox");
  box.classList.toggle("lightbox", !!isLightbox);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModal() {
  const modal = document.getElementById("modal");
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modal.querySelector("[data-close]").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ------------------------------------------------------------
   9. 新闻动态：渲染 + 展开 + 加载更多
   ------------------------------------------------------------ */
let newsShown = 0;
const NEWS_PAGE = 3;

function renderNews() {
  const list = document.getElementById("newsList");
  const next = NEWS.slice(newsShown, newsShown + NEWS_PAGE);

  next.forEach((item) => {
    const el = document.createElement("article");
    el.className = "news-item";
    el.innerHTML = `
      <div class="news-head">
        <h3 class="news-title">${item.title}</h3>
        <span class="news-date">${item.date}</span>
      </div>
      <p class="news-summary">${item.summary}</p>
      <div class="news-full">${item.full}</div>
    `;
    el.querySelector(".news-head").addEventListener("click", () => {
      el.classList.toggle("expanded");
    });
    list.appendChild(el);
  });

  newsShown += next.length;

  // 控制按钮状态
  const btn = document.getElementById("loadMoreBtn");
  if (newsShown >= NEWS.length) {
    btn.disabled = true;
    btn.textContent = "已加载全部";
    btn.style.opacity = "0.6";
    btn.style.cursor = "default";
  }
}

function initNews() {
  renderNews();
  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    if (newsShown >= NEWS.length) return;
    renderNews();
  });
}

/* ------------------------------------------------------------
   10. 招生咨询：表单校验 + 提交 + 留言列表
   ------------------------------------------------------------ */
const STORE_KEY = "whut_messages";

function getMessages() {
  return loadStore(STORE_KEY, []);
}

function setMessages(list) {
  saveStore(STORE_KEY, list);
}

// 渲染学院下拉选项
function initDeptSelect() {
  const select = document.getElementById("fDept");
  DEPARTMENTS.forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d.name;
    opt.textContent = d.name;
    select.appendChild(opt);
  });
}

// 渲染留言列表（按时间倒序）
function renderMessages() {
  const list = document.getElementById("messageList");
  const messages = getMessages().sort((a, b) => b.time - a.time);

  if (messages.length === 0) {
    list.innerHTML = '<p class="empty-tip">暂无留言，快来留下您的咨询吧～</p>';
    return;
  }

  list.innerHTML = "";
  messages.forEach((msg) => {
    const el = document.createElement("div");
    el.className = "message-item";
    el.innerHTML = `
      <div class="message-top">
        <span class="message-name">${escapeHtml(msg.name)}</span>
        <div class="message-meta">
          <span class="message-badge">${escapeHtml(msg.role)}</span>
          <span class="message-badge accent">${escapeHtml(msg.dept)}</span>
        </div>
      </div>
      <p class="message-text">${escapeHtml(msg.message)}</p>
      <div class="message-foot">
        <span class="message-time">${formatTime(msg.time)}</span>
        <button class="message-del" data-id="${msg.id}">删除</button>
      </div>
    `;
    el.querySelector(".message-del").addEventListener("click", () => {
      deleteMessage(msg.id);
    });
    list.appendChild(el);
  });
}

// 简单 HTML 转义，防止注入
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// 删除留言
function deleteMessage(id) {
  const list = getMessages().filter((m) => m.id !== id);
  setMessages(list);
  renderMessages();
  showToast("留言已删除");
}

// 表单校验
function validateForm() {
  let valid = true;

  const name = document.getElementById("fName");
  const phone = document.getElementById("fPhone");
  const message = document.getElementById("fMessage");

  // 姓名
  const nameRow = name.closest(".form-row");
  const nameErr = nameRow.querySelector(".field-error");
  if (!name.value.trim()) {
    nameRow.classList.add("invalid");
    nameErr.textContent = "请输入姓名";
    valid = false;
  } else {
    nameRow.classList.remove("invalid");
    nameErr.textContent = "";
  }

  // 手机号
  const phoneRow = phone.closest(".form-row");
  const phoneErr = phoneRow.querySelector(".field-error");
  const phoneVal = phone.value.trim();
  if (!phoneVal) {
    phoneRow.classList.add("invalid");
    phoneErr.textContent = "请输入手机号";
    valid = false;
  } else if (!/^1[3-9]\d{9}$/.test(phoneVal)) {
    phoneRow.classList.add("invalid");
    phoneErr.textContent = "手机号格式不正确";
    valid = false;
  } else {
    phoneRow.classList.remove("invalid");
    phoneErr.textContent = "";
  }

  // 留言
  const msgRow = message.closest(".form-row");
  const msgErr = msgRow.querySelector(".field-error");
  if (message.value.trim().length < 10) {
    msgRow.classList.add("invalid");
    msgErr.textContent = "留言内容不少于10个字";
    valid = false;
  } else {
    msgRow.classList.remove("invalid");
    msgErr.textContent = "";
  }

  return valid;
}

function initForm() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const msg = {
      id: Date.now(),
      name: document.getElementById("fName").value.trim(),
      phone: document.getElementById("fPhone").value.trim(),
      role: document.getElementById("fRole").value,
      dept: document.getElementById("fDept").value,
      message: document.getElementById("fMessage").value.trim(),
      time: Date.now()
    };

    const list = getMessages();
    list.push(msg);
    setMessages(list);

    form.reset();
    renderMessages();
    showToast("提交成功，感谢您的咨询！");
  });

  // 输入时清除错误提示
  ["fName", "fPhone", "fMessage"].forEach((id) => {
    const el = document.getElementById(id);
    el.addEventListener("input", () => {
      const row = el.closest(".form-row");
      row.classList.remove("invalid");
      row.querySelector(".field-error").textContent = "";
    });
  });
}

/* ------------------------------------------------------------
   11. 初始化
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initCarousel();
  initCounters();
  initCards();
  initGallery();
  initModal();
  initNews();
  initDeptSelect();
  initForm();
  renderMessages();
});
