/* =============================================
   TAMANNA RAWAT — PORTFOLIO SCRIPT
   ============================================= */

'use strict';

/* --------------------------------------------------
   PROJECT DATA
-------------------------------------------------- */
const PROJECTS = [
  {
    id: 'biophilic',
    title: 'Biophilic Design',
    tag: 'MAJOR PROJECT',
    tagBg: '#5C7A4E',
    tagColor: '#fff',
    gradientFrom: '#1E3A1A',
    gradientTo: '#4A7C42',
    featured: true,
    pdf: 'BIOPHILIC DESIGN_compressed.pdf',
    description:
      'An in-depth exploration of biophilic design — integrating nature\'s patterns, textures, and living systems into built environments to enhance human well-being and restore our connection with the natural world.',
    process: [
      'Literature review: nature–human connection theories',
      'Site analysis & environmental observation',
      'Biophilic design principles development',
      'Visual documentation & application',
    ],
    learning:
      'How we shape our spaces shapes us in return. Bringing nature into design isn\'t aesthetic — it\'s restorative.',
  },
  {
    id: 'stillroom',
    title: 'The Still Room',
    tag: 'STORY NARRATION',
    tagBg: '#3C5C7A',
    tagColor: '#fff',
    gradientFrom: '#131C24',
    gradientTo: '#2A4053',
    featured: false,
    pdf: 'https://shivikanegi.github.io/The-still-room/',
    externalUrl: 'https://shivikanegi.github.io/The-still-room/',
    subject: 'Design for and with AI',
    description:
      'A quiet, atmospheric winter story co-created in collaboration with generative AI — exploring flash fiction, narrative expansion, digital illustration, TTS audio narration, and UI generation.',
    process: [
      'Observation & Description: Manual prompt building',
      'Flash Fiction & Narrative Expansion using LLM',
      'Atmospheric Audio & TTS Voice Generation',
      'Visual Identity & UI Code Generation',
    ],
    learning:
      'Co-creating with AI is an exercise in precise observation. The machine expands the form, but the soul of the story — the pauses, the quiet, the feeling — remains human.',
  },
  {
    id: 'prompting_practice',
    title: 'Design for and with AI',
    tag: 'PROMPTING PRACTICE',
    tagBg: '#C17B3F',
    tagColor: '#fff',
    gradientFrom: '#2D1F18',
    gradientTo: '#5C3D2E',
    featured: false,
    pdf: 'Prompt Practice.pdf',
    subject: 'Design for and with AI',
    description:
      'An exhaustive exploration of generative AI prompting methodologies — investigating text-to-image, text-to-text, and image-to-image systems to master precise control over creative AI models.',
    process: [
      'Analyzing prompt structures, weights, and parameters',
      'Iterative refinement loops for style and content control',
      'Exploring image generation and LLM storytelling frameworks',
      'Developing structural prompt recipes for design workflows',
    ],
    learning:
      'Creative prompting is about intentional constraint. A great prompt is not a random collection of words, but a structured design brief that guides generative models toward a highly specific, repeatable aesthetic outcome.',
  },
  {
    id: 'biomimicry',
    title: 'Biomimicry',
    tag: 'RESEARCH',
    tagBg: '#A06020',
    tagColor: '#fff',
    gradientFrom: '#5C3010',
    gradientTo: '#B87040',
    featured: false,
    pdf: 'biomimicry.pdf',
    description:
      'Investigating biological systems and natural processes as a design methodology — translating millions of years of evolution into innovative, sustainable design strategies.',
    process: [
      'Deep-dive into biomimicry case studies',
      'Biological system mapping & analysis',
      'Translation into design principles',
      'Concept ideation & visual application',
    ],
    learning:
      'Nature has already solved most of our design problems — the skill lies in learning how to ask the right questions.',
  },
  {
    id: 'rishikesh',
    title: 'Rishikesh Field Study',
    tag: 'FIELD STUDY',
    tagBg: '#8B4513',
    tagColor: '#fff',
    gradientFrom: '#4A2510',
    gradientTo: '#A0522D',
    featured: false,
    pdf: 'rishikesh field visit.pdf',
    description:
      'A comprehensive field documentation from Rishikesh — capturing the interplay of sacred architecture, river ecology, culture, and human experience through direct observation and hand-drawn sketches.',
    process: [
      'On-site observation & immersive documentation',
      'Sketching environments, people & spatial details',
      'Cultural & experiential pattern analysis',
      'Reflective synthesis & design documentation',
    ],
    learning:
      'First-hand field observation reveals nuances that no secondary research can replicate — the eye learns by being present.',
  },
  {
    id: 'wildlife',
    title: 'Wildlife Institute of India',
    tag: 'VISUAL DESIGN',
    tagBg: '#1B5C8A',
    tagColor: '#fff',
    gradientFrom: '#0E3052',
    gradientTo: '#1E6898',
    featured: false,
    pdf: 'Wildlife-INSTITUTE-OF-INDIA (1).pdf.pdf',
    description:
      'A visual design project exploring institutional identity and communication design for the Wildlife Institute of India — how authority, conservation, and accessibility can coexist in visual language.',
    process: [
      'Institutional brand audit & benchmarking',
      'Research into conservation communication',
      'Visual identity development',
      'Layout design & typographic system',
    ],
    learning:
      'Design for conservation must carry weight and warmth simultaneously — it needs to be trusted and loved.',
  },
  {
    id: 'chindogu',
    title: 'Pinocchio — Chindōgu',
    tag: 'SPECULATIVE DESIGN',
    tagBg: '#5C3A8A',
    tagColor: '#fff',
    gradientFrom: '#2E1A50',
    gradientTo: '#6A40A0',
    featured: false,
    pdf: 'PINOSKIO_chindogu.pdf',
    description:
      'Chindōgu is the Japanese art of the un-useless invention — solutions to real problems that are too absurd to be practical. Pinocchio is my exploration of speculative design through this playful philosophy.',
    process: [
      'Understanding Chindōgu principles & philosophy',
      'Problem identification & absurdist ideation',
      'Prototyping the speculative object',
      'Presentation & critical reflection',
    ],
    learning:
      'Designing for absurdity is designing for clarity — it exposes every hidden assumption in what we call "practical".',
  },
  {
    id: 'poster',
    title: "Book's Poster",
    tag: 'GRAPHIC DESIGN',
    tagBg: '#8A1E1E',
    tagColor: '#fff',
    gradientFrom: '#4A0A0A',
    gradientTo: '#A02828',
    featured: false,
    pdf: "book's poster.pdf",
    description:
      'A graphic design exercise translating the soul of a book into a single visual composition — exploring typography, hierarchy, and the art of editorial storytelling through image and type.',
    process: [
      'Deep reading & thematic analysis',
      'Mood board & typographic exploration',
      'Visual hierarchy & composition studies',
      'Final refinement & production',
    ],
    learning:
      'Every typographic choice is an editorial decision. The poster is never just decoration — it\'s an argument.',
  },
];

/* --------------------------------------------------
   PDF.JS SETUP
-------------------------------------------------- */
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

/* --------------------------------------------------
   STATE
-------------------------------------------------- */
let pdfDoc = null;
let currentPage = 1;
let totalPages = 1;
let renderTask = null;

/* --------------------------------------------------
   DOM READY
-------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNav();
  buildProjectCards();
  initReveal();
  initPanel();
  initPdfNav();
});

/* --------------------------------------------------
   LOADER
-------------------------------------------------- */
function initLoader() {
  const loader = document.getElementById('loader');
  // Hide after animation completes (~1.6s)
  setTimeout(() => {
    loader.classList.add('gone');
    // trigger hero reveal after loader gone
    document.querySelectorAll('#hero .reveal').forEach((el, i) => {
      const delay = parseInt(el.dataset.delay || 0, 10);
      setTimeout(() => el.classList.add('in-view'), delay + 100);
    });
  }, 1600);
}

/* --------------------------------------------------
   NAV — scroll shadow
-------------------------------------------------- */
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* --------------------------------------------------
   BUILD PROJECT CARDS
-------------------------------------------------- */
function buildProjectCards() {
  const grid = document.getElementById('projects-grid');

  PROJECTS.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal' + (project.featured ? ' featured' : '');
    card.setAttribute('data-id', project.id);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open ${project.title}`);

    const subjectHTML = project.subject
      ? `<span class="card-subject">${project.subject}</span>`
      : '';

    card.innerHTML = `
      <div class="card-bg" style="background: linear-gradient(145deg, ${project.gradientFrom}, ${project.gradientTo});">
        ${subjectHTML}
        <div class="card-overlay"></div>
        <div class="card-content">
          <span class="card-tag">${project.tag}</span>
          <div class="card-title">${project.title}</div>
          <div class="card-cta">Open Case Study →</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openPanel(project));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openPanel(project);
    });

    grid.appendChild(card);
  });
}

/* --------------------------------------------------
   SCROLL REVEAL
-------------------------------------------------- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe everything except hero (handled by loader)
  document.querySelectorAll('.reveal:not(#hero .reveal)').forEach((el) => {
    observer.observe(el);
  });

  // Stagger project cards
  document.querySelectorAll('.project-card.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
    observer.observe(el);
  });
}

/* --------------------------------------------------
   PANEL OPEN / CLOSE
-------------------------------------------------- */
function initPanel() {
  const panel = document.getElementById('panel');
  const backdrop = document.getElementById('panel-backdrop');
  const closeBtn = document.getElementById('panel-close');

  backdrop.addEventListener('click', closePanel);
  closeBtn.addEventListener('click', closePanel);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });
}

function openPanel(project) {
  const panel = document.getElementById('panel');

  // Populate info
  const badge = document.getElementById('panel-tag-badge');
  badge.textContent = project.tag;
  badge.style.background = project.tagBg + '18';
  badge.style.color = project.tagBg;
  badge.style.border = `1px solid ${project.tagBg}44`;

  document.getElementById('panel-title').textContent = project.title;
  document.getElementById('panel-desc').textContent = project.description;

  const processList = document.getElementById('panel-process');
  processList.innerHTML = project.process
    .map((step) => `<li>${step}</li>`)
    .join('');

  document.getElementById('panel-learning').textContent = project.learning;

  const downloadBtn = document.getElementById('panel-download');
  if (project.externalUrl) {
    downloadBtn.href = project.externalUrl;
    downloadBtn.removeAttribute('download');
    downloadBtn.target = '_blank';
    downloadBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="margin-right:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Visit Live Site
    `;
  } else {
    downloadBtn.href = project.pdf;
    downloadBtn.setAttribute('download', project.pdf);
    downloadBtn.removeAttribute('target');
    downloadBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Download PDF
    `;
  }

  panel.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Load PDF or Iframe
  if (project.externalUrl) {
    loadIframe(project.externalUrl);
  } else {
    loadPdf(project.pdf);
  }
}

function closePanel() {
  const panel = document.getElementById('panel');
  panel.classList.remove('open');
  document.body.style.overflow = '';
  // Cancel any ongoing render
  if (renderTask) {
    renderTask.cancel();
    renderTask = null;
  }
  pdfDoc = null;
  currentPage = 1;
  totalPages = 1;

  // Remove iframe if present
  const iframe = document.getElementById('panel-iframe');
  if (iframe) {
    iframe.remove();
  }

  // Restore PDF viewer DOM states
  document.getElementById('pdf-controls').style.display = 'flex';
  document.getElementById('pdf-wrap').classList.remove('iframe-mode');

  // Reset canvas
  const canvas = document.getElementById('pdf-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.display = 'none';
  // Show loading state again for next open
  document.getElementById('pdf-loading').classList.remove('hidden');
  document.getElementById('pdf-loading').innerHTML = '<div class="spinner"></div><span>Loading PDF…</span>';
}

/* --------------------------------------------------
   PDF VIEWER
-------------------------------------------------- */
function initPdfNav() {
  document.getElementById('pdf-prev').addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderPage(currentPage); }
  });
  document.getElementById('pdf-next').addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderPage(currentPage); }
  });
}

async function loadPdf(filename) {
  // Reset
  currentPage = 1;
  document.getElementById('pdf-loading').classList.remove('hidden');
  document.getElementById('pdf-canvas').style.display = 'none';

  try {
    const loadingTask = pdfjsLib.getDocument(filename);
    pdfDoc = await loadingTask.promise;
    totalPages = pdfDoc.numPages;
    updatePageInfo();
    await renderPage(1);
  } catch (err) {
    console.error('PDF load error:', err);
    let errMsg = `Could not load PDF "${filename}".`;
    if (err.message && (err.message.includes('404') || err.message.toLowerCase().includes('not found') || err.message.includes('Unexpected server response'))) {
      errMsg = `File not found: Please verify that "<strong>${filename}</strong>" is committed and uploaded to GitHub in the root folder with the exact same name (case-sensitive).`;
    } else if (window.location.protocol === 'file:') {
      errMsg += ' Try running via a local server.';
    } else {
      errMsg += `<br><span style="font-size:11px;opacity:0.8;">Details: ${err.message || err}</span>`;
    }
    document.getElementById('pdf-loading').innerHTML =
      `<span style="color:#c17b3f;font-size:13px;text-align:center;padding:0 20px;line-height:1.5;">${errMsg}</span>`;
  }
}

async function renderPage(pageNum) {
  if (!pdfDoc) return;

  if (renderTask) {
    renderTask.cancel();
    renderTask = null;
  }

  const page = await pdfDoc.getPage(pageNum);
  const canvas = document.getElementById('pdf-canvas');
  const ctx = canvas.getContext('2d');

  const wrapper = document.getElementById('pdf-wrap');
  const maxWidth = wrapper.clientWidth - 64;
  const viewport = page.getViewport({ scale: 1 });
  const scale = Math.min(maxWidth / viewport.width, 2);
  const scaledViewport = page.getViewport({ scale });

  // Retina
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = scaledViewport.width * pixelRatio;
  canvas.height = scaledViewport.height * pixelRatio;
  canvas.style.width = scaledViewport.width + 'px';
  canvas.style.height = scaledViewport.height + 'px';
  ctx.scale(pixelRatio, pixelRatio);

  const renderContext = { canvasContext: ctx, viewport: scaledViewport };
  renderTask = page.render(renderContext);

  try {
    await renderTask.promise;
    document.getElementById('pdf-loading').classList.add('hidden');
    canvas.style.display = 'block';
    updatePageInfo();
  } catch (err) {
    if (err.name !== 'RenderingCancelledException') {
      console.error('Render error:', err);
    }
  }
}

function updatePageInfo() {
  document.getElementById('pdf-page-info').textContent =
    `${currentPage} / ${totalPages}`;
  document.getElementById('pdf-prev').disabled = currentPage <= 1;
  document.getElementById('pdf-next').disabled = currentPage >= totalPages;
}

/* --------------------------------------------------
   IFRAME VIEWER
-------------------------------------------------- */
function loadIframe(url) {
  // Reset state
  currentPage = 1;
  totalPages = 1;

  // Hide PDF elements
  document.getElementById('pdf-canvas').style.display = 'none';
  document.getElementById('pdf-controls').style.display = 'none';
  
  // Show loading spinner with correct text
  const loadingEl = document.getElementById('pdf-loading');
  loadingEl.classList.remove('hidden');
  loadingEl.innerHTML = '<div class="spinner"></div><span>Loading Live Website…</span>';

  // Apply iframe container styles
  document.getElementById('pdf-wrap').classList.add('iframe-mode');

  // Remove any existing iframe
  const existingIframe = document.getElementById('panel-iframe');
  if (existingIframe) {
    existingIframe.remove();
  }

  // Create new iframe
  const iframe = document.createElement('iframe');
  iframe.id = 'panel-iframe';
  iframe.src = url;
  iframe.style.display = 'none'; // hide initially

  // Append to wrapper
  document.getElementById('pdf-wrap').appendChild(iframe);

  // Set loaded callback
  iframe.onload = () => {
    loadingEl.classList.add('hidden');
    iframe.style.display = 'block';
  };
}
