/**
 * main.js — Portfolio rendering engine
 * Reads PORTFOLIO from data.js and populates all HTML sections.
 */

/* ──────────────────────────────────────────────────────────
   Utility helpers
─────────────────────────────────────────────────────────── */

/** Replace \n with <br> */
const nl2br = s => s.replace(/\n/g, '<br>');

/** Escape HTML special chars */
const esc = s => s.replace(/[&<>"']/g, c =>
  ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

/** Build a pill/tag element */
const tag = (text, color) =>
  `<span class="tag" style="${color ? `--tag-color:${color}` : ''}">${esc(text)}</span>`;

/* ──────────────────────────────────────────────────────────
   Custom cursor
─────────────────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup',   () => cursor.classList.remove('click'));
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

/* ──────────────────────────────────────────────────────────
   Navbar
─────────────────────────────────────────────────────────── */
const { personal, domains, skills, experience, projects,
        education, certifications, activities, contact, footer } = PORTFOLIO;

const i18n = {
  en: {
    navSections: [
      { id: 'home',       label: 'Home' },
      { id: 'skills',     label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects',   label: 'Projects' },
      { id: 'education',  label: 'Education' },
      { id: 'activities', label: 'Activities' },
      { id: 'contact',    label: 'Contact' },
    ],
    sectionTitles: {
      skills: 'Expertise & Skills',
      experience: 'Experiences',
      projects: 'Projects',
      education: 'Education & Certifications',
      activities: 'Leadership & Activities',
      contact: 'Get In Touch'
    },
    heroCta: { experience: 'View Experience', contact: 'Contact Me' },
    scroll: 'scroll',
    langToggle: 'FR'
  },
  fr: {
    navSections: [
      { id: 'home',       label: 'Accueil' },
      { id: 'skills',     label: 'Compétences' },
      { id: 'experience', label: 'Expérience' },
      { id: 'projects',   label: 'Projets' },
      { id: 'education',  label: 'Éducation' },
      { id: 'activities', label: 'Activités' },
      { id: 'contact',    label: 'Contact' },
    ],
    sectionTitles: {
      skills: 'Compétences',
      experience: 'Expériences Professionnelles',
      projects: 'Projets',
      education: 'Éducation & Certifications',
      activities: 'Leadership & Activités',
      contact: 'Contactez-moi'
    },
    heroCta: { experience: 'Expériences', contact: 'Contacter' },
    scroll: 'défiler',
    langToggle: 'EN'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
let navSections = i18n[currentLang].navSections;

const navLinks = document.getElementById('nav-links');
const langToggleBtn = document.getElementById('lang-toggle');
const themeToggleBtn = document.getElementById('theme-toggle');

function renderNav() {
  navSections = i18n[currentLang].navSections;
  navLinks.innerHTML = navSections.map(s =>
    `<li><a href="#${s.id}" class="nav-link">${s.label}</a></li>`
  ).join('');
  updateActiveNav();
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function updateSectionText() {
  document.getElementById('skills-title').textContent = i18n[currentLang].sectionTitles.skills;
  document.getElementById('experience-title').textContent = i18n[currentLang].sectionTitles.experience;
  document.getElementById('projects-title').textContent = i18n[currentLang].sectionTitles.projects;
  document.getElementById('education-title').textContent = i18n[currentLang].sectionTitles.education;
  document.getElementById('activities-title').textContent = i18n[currentLang].sectionTitles.activities;
  document.getElementById('contact-title').textContent = i18n[currentLang].sectionTitles.contact;
  document.getElementById('btn-view-experience').textContent = i18n[currentLang].heroCta.experience;
  document.getElementById('btn-contact-me').textContent = i18n[currentLang].heroCta.contact;
  document.getElementById('scroll-label').textContent = i18n[currentLang].scroll;
  // langToggleBtn.textContent = i18n[currentLang].langToggle;
}

const FR_CONTENT = {
  personal: {
    tag: 'Analyste de données - Data Scientist',
    title: 'Transformer les données brutes en systèmes intelligents et informations exploitables',
    bio: "En tant qu'Ingénieur d'État en Data & IA, j'architecture des pipelines de données, je crée des solutions de l'intelligence artificielle et je prépare les données pour l'analyse — de l'extraction multi-source aux dashboards interactifs et systèmes intelligents.",
  },
  domains: [
    { title: 'Analyse de données & BI', desc: 'Tableaux de bord Power BI, SQL Server, SSIS/SSAS, modélisation des données et visualisation des KPIs.' },
    { title: 'Ingénierie IA', desc: 'Machine Learning, Deep Learning, NLP, Transformers, BERT, LSTM — cycle de vie complet des modèles.' },
    { title: 'Ingénierie des données', desc: 'Pipelines ETL/ELT, Apache Airflow, Spark, Kafka, Hadoop et orchestration Docker.' },
    { title: 'IA × Cybersécurité', desc: 'Détection proactive des cyberattaques par IA — sujet de recherche doctoral.' },
    { title: 'Backend & Automatisation', desc: 'Python, PHP, SQL Server, Spring Boot, REST API et automatisation pilotée par IA.' },
    { title: 'OCR & Document AI', desc: 'Tesseract, EasyOCR, extraction NLP — numérisation et validation de cartes d’assurance et pièces d’identité.' },
  ],
  experience: [
   {role : "Analyste de données",
    company : "RMA", 
    period : "Poste Actuel",
    type : "Temps plein",
    bullets : [
      "Correction des anomalies et problèmes de qualité des bases clients."
      "Consolidation multi-sources : vue client à 360°."
      "Enrichissement des données clients (sources internes/externes)."
      "Tableaux de bord interactifs et visualisations de KPI."
    ],
      tools: ["Python", "SQL", "DBeaver", "Power BI", "QlikView", "Jira"],
    },
    {
      role: 'Data Analyst & Développeur Back-end',
      company: 'SSNA',
      period: '3 mois',
      type: 'Stage - Freelance',
      bullets: [
        'Automatisation de tâches répétitives.',
        'Extraction de données depuis des sources hétérogènes.',
        'Nettoyage, prétraitement et modélisation de données.',
        'Visualisation des données SAP B1 et autres sources.',
        'Création de tableaux de bord interactifs Power BI.',
      ],
    },
    {
      role: 'Ingénieur IA — Développeur Python',
      company: 'Freedom Assessoria',
      period: '3 mois',
      type: 'Stage',
      bullets: [
        'Conception d’un système IP-PBX pour la gestion des appels.',
        'Implémentation de l’enregistrement d’appels et supervision en temps réel.',
        'Analyse conversations basée IA/ML des appels et messages vocaux.',
      ],
    },
    {
      role: 'Stagiaire Data Science',
      company: 'RMA — Assurance',
      period: '5 mois',
      type: 'Stage',
      bullets: [
        'Détection de fraude via IA/ML sur données d’assurance.',
        'Extraction de texte de cartes d’assurance scannées via OCR.',
        'NER pour détecter noms, dates, CIN et numéros d’immatriculation.',
        'Classification de documents et comparaison des souscriptions.',
      ],
    },
    {
      role: 'Stagiaire Ingénierie IA',
      company: '3D Smart Factory',
      period: '2 mois',
      type: 'Stage',
      bullets: [
        'Analyse d’articles scientifiques et chatbot d’extraction de données.',
        'Web scraping de sources de recherche.',
        'Pipeline de traitement NLP avec Python.',
        'Conception, entraînement et évaluation d’un chatbot LSTM/BERT.',
      ],
    },
  ],
  projects: [
    { title: 'Entrepôt de données & suite BI', desc: 'DWH de bout en bout avec SQL Server. Données intégrées via SSIS, cubes analysés avec SSAS et KPIs visualisés sur Power BI.' },
    { title: 'Analyseur de sentiment — Tweets & avis TikTok', desc: 'Pipeline NLP classifiant le sentiment sur les réseaux sociaux, entraîné sur Twitter et TikTok Shop.' },
    { title: 'Application AutoML (Agent IA)', desc: 'Application web automatisant le cycle ML : exploration, ingénierie de features, entraînement et évaluation.' },
    { title: 'Analyseur de conversations WhatsApp', desc: 'Outil NLP explorant exports WhatsApp : fréquence, topics, sentiment, contributeurs.' },
    { title: 'Similarité de questions Quora (DL)', desc: 'Modèle de similarité sémantique pour paires de questions avec réseaux siamois et embeddings BERT.' },
    { title: 'Application Web Spring Boot', desc: 'Application full-stack avec Spring Boot, Spring Data, Thymeleaf et Bootstrap 5.' },
  ],
  education: [
    { degree: 'Doctorat en Intelligence Artificielle & Cybersécurité', detail: 'Recherche : détection proactive de cyberattaques par IA.' },
    { degree: 'Formation MS Power BI', detail: 'Power BI · SQL Server (SSIS & SSAS) · Automatisation IA (UiPath)' },
    { degree: 'Diplôme d’Ingénieur d’État — Data & IA', detail: 'Ingénierie des données · Analyse de données · Ingénierie IA · Développement web' },
  ],
  activities: [
    { year: '2022 / 2023', items: ['Président — Club CCT', 'Conseiller — Club DATAI'] },
    { year: '2021 / 2022', items: ['Fondateur & Président — Club DATAI', 'Coordinateur partenaires — Comité Hult Prize, ENSAH', 'Responsable Media Cell — événement W.E.C 4.0', 'Membre — Comité JLM ENSAH'] },
    { year: '2019 / 2020', items: ['Responsable cellule ouverture & clôture — W.E.C 3.0'] },
  ],
  contactIntro: "Je suis ouvert à de nouvelles opportunités, collaborations de recherche et projets freelance data/IA. Envoyez-moi un message !",
  footer: 'Créé avec passion 🤍 Abdelilah HSSASASA',
};

function getLocalizedPortfolio() {
  const data = JSON.parse(JSON.stringify(PORTFOLIO));
  if (currentLang === 'fr') {
    data.personal = { ...data.personal, ...FR_CONTENT.personal };
    data.domains = data.domains.map((domain, index) => ({ ...domain, ...FR_CONTENT.domains[index] }));
    data.experience = data.experience.map((item, index) => ({ ...item, ...FR_CONTENT.experience[index] }));
    data.projects = data.projects.map((project, index) => ({ ...project, ...FR_CONTENT.projects[index] }));
    data.education = data.education.map((edu, index) => ({ ...edu, ...FR_CONTENT.education[index] }));
    data.activities = data.activities.map((activity, index) => ({ ...activity, ...FR_CONTENT.activities[index] }));
    data.contact.intro = FR_CONTENT.contactIntro;
    data.footer = FR_CONTENT.footer;
  }
  return data;
}

function renderHero(personalData) {
  const navNameEl = document.getElementById('nav-name');
  navNameEl.textContent = personalData.initials || personalData.name;

  // image in nav-logo 
  const existingImg = navNameEl.querySelector('img.hero-photo');
  if (personalData.photo) {
    if (!existingImg) {
      const img = document.createElement('img');
      img.src = personalData.photo;
      img.alt = personalData.name;
      img.className = 'hero-photo';
      img.loading = 'lazy';
      navNameEl.appendChild(img);
    } else {
      existingImg.src = personalData.photo;
      existingImg.alt = personalData.name;
    }
  } else if (existingImg) {
    existingImg.remove();
  }

  document.getElementById('hero-tag').textContent = personalData.tag;
  document.getElementById('hero-name').innerHTML = nl2br(esc(personalData.name));
  document.getElementById('hero-title').innerHTML = nl2br(esc(personalData.title));
  document.getElementById('hero-bio').textContent = personalData.bio;

  // Lightbox behaviour
  if (personalData.photo) {
    let lightbox = document.getElementById('photo-lightbox');
    let lbImg = lightbox?.querySelector('img');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'photo-lightbox';
      lbImg = document.createElement('img');
      lbImg.alt = personalData.name;
      lightbox.appendChild(lbImg);
      document.body.appendChild(lightbox);

      lightbox.addEventListener('click', () => {
        lightbox.classList.remove('open');
        lbImg.src = '';
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          lightbox.classList.remove('open');
          lbImg.src = '';
        }
      });
    }

    
    const img = navNameEl.querySelector('img.hero-photo');
    if (img && !img.dataset.lightboxBound) {
      img.addEventListener('click', () => {
        lbImg.src = personalData.photo;
        lightbox.classList.add('open');
      });
      img.dataset.lightboxBound = 'true';
    }
  }
}

function renderDomains(domainsData) {
  document.getElementById('domains-grid').innerHTML = domainsData.map(d => `
    <div class="domain-card" style="--accent:${d.color}">
      <div class="domain-icon"><i data-lucide="${d.icon}"></i></div>
      <h3>${esc(d.title)}</h3>
      <p>${esc(d.desc)}</p>
    </div>
  `).join('');
}

function renderSkills(skillsData) {
  const marqueeHTML = skillsData.map(s => `<span class="marquee-item">${esc(s)}</span>`).join('');
  document.getElementById('marquee-track').innerHTML = marqueeHTML + marqueeHTML;
}

function renderExperience(experienceData) {
  document.getElementById('timeline').innerHTML = experienceData.map((exp, i) => `
    <div class="timeline-item" style="--i:${i}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${esc(exp.role)}</h3>
            <span class="timeline-company">${esc(exp.company)}</span>
          </div>
          <div class="timeline-meta">
            <span class="timeline-period">${esc(exp.period)}</span>
            <span class="timeline-type">${esc(exp.type)}</span>
          </div>
        </div>
        <ul class="timeline-bullets">
          ${exp.bullets.map(b => `<li>${esc(b)}</li>`).join('')}
        </ul>
        ${exp.screenshot ? `<img src="${esc(exp.screenshot)}" alt="${esc(exp.role)} screenshot" class="timeline-screenshot" loading="lazy">` : ''}
        <div class="timeline-tools">
          ${(exp.tools || []).map(t => tag(t)).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderProjects(projectsData) {
  document.getElementById('projects-grid').innerHTML = projectsData.map((p, i) => `
    <div class="project-card" style="--i:${i}">
      ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" class="project-img" loading="lazy">` : `
      <div class="project-icon-bg">
        <i data-lucide="${p.icon || 'code-2'}"></i>
      </div>`}
      <div class="project-body">
        <h3 class="project-title">${esc(p.title)}</h3>
        <p class="project-desc">${esc(p.desc)}</p>
        <div class="project-tags">
          ${(p.tags || []).map(t => tag(t)).join('')}
        </div>
        ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="project-link">${currentLang === 'fr' ? 'Voir le projet' : 'View Project'} <i data-lucide="arrow-up-right"></i></a>` : ''}
      </div>
    </div>
  `).join('');
}

function renderEducation(educationData) {
  document.getElementById('education-list').innerHTML = educationData.map(e => `
    <div class="edu-item">
      <div class="edu-icon"><i data-lucide="${e.icon}"></i></div>
      <div>
        <h4>${esc(e.degree)}</h4>
        <span class="edu-school">${esc(e.school)}</span>
        <span class="edu-period">${esc(e.period)}</span>
        <p class="edu-detail">${esc(e.detail)}</p>
      </div>
    </div>
  `).join('');
}

function renderCertifications(certificationsData) {
  document.getElementById('certs-list').innerHTML = certificationsData.map(c => `
    <a href="${esc(c.link)}" target="_blank" rel="noopener" class="cert-item">
      <div class="cert-icon"><i data-lucide="${c.icon}"></i></div>
      <div>
        <h4>${esc(c.title)}</h4>
        <span class="cert-issuer">${esc(c.issuer)}</span>
      </div>
      <i data-lucide="external-link" class="cert-ext"></i>
    </a>
  `).join('');
}

function renderActivities(activitiesData) {
  document.getElementById('activities-grid').innerHTML = activitiesData.map(a => `
    <div class="activity-card">
      <div class="activity-year">${esc(a.year)}</div>
      <ul class="activity-list">
        ${a.items.map(it => `<li>${esc(it)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderContact(contactData) {
  document.getElementById('contact-intro').textContent = contactData.intro;
  document.getElementById('contact-links').innerHTML = contactData.links.map(l => `
    <a href="${esc(l.href)}" target="_blank" rel="noopener" class="contact-link">
      <i data-lucide="${l.icon}"></i>
      <span>${esc(l.label)}</span>
    </a>
  `).join('');
}

function renderFooter(footerText) {
  document.getElementById('footer-text').textContent = footerText;
}

// ==================== LANGUAGE & THEME HANDLING ====================

// Remove duplicate declarations - we already have them at the top
// We only keep the functions and listeners

function updateLanguageToggleUI() {
  const enSpan = langToggleBtn.querySelector('.lang-text:first-child');
  const frSpan = langToggleBtn.querySelector('.lang-text:last-child');
  
  if (!enSpan || !frSpan) return;

  if (currentLang === 'fr') {
    enSpan.style.opacity = '0.45';
    frSpan.style.opacity = '1';
    enSpan.style.fontWeight = '400';
    frSpan.style.fontWeight = '700';
    langToggleBtn.classList.add('active');
  } else {
    enSpan.style.opacity = '1';
    frSpan.style.opacity = '0.45';
    enSpan.style.fontWeight = '700';
    frSpan.style.fontWeight = '400';
    langToggleBtn.classList.remove('active');
  }
}

function renderAll() {
  const data = getLocalizedPortfolio();

  renderHero(data.personal);
  renderDomains(data.domains);
  renderSkills(data.skills);
  renderExperience(data.experience);
  renderProjects(data.projects);
  renderEducation(data.education);
  renderCertifications(data.certifications);
  renderActivities(data.activities);
  renderContact(data.contact);
  renderFooter(data.footer);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function setupObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.domain-card, .timeline-item, .project-card, .edu-item, .cert-item, .activity-card'
  ).forEach(el => observer.observe(el));
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  renderNav();           // Update nav links
  updateSectionText();   // Update section titles & CTAs
  renderAll();           // Re-render everything
  setupObserver();       // Re-observe new elements for animations
  updateLanguageToggleUI();
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const sun = themeToggleBtn.querySelector('.sun');
  const moon = themeToggleBtn.querySelector('.moon');
  
  if (sun && moon) {
    if (theme === 'dark') {
      sun.style.opacity = '1';
      moon.style.opacity = '0';
    } else {
      sun.style.opacity = '0';
      moon.style.opacity = '1';
    }
  }
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'fr' : 'en';
  applyLanguage(newLang);
}

function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

// ==================== INITIAL RENDERING & EVENT LISTENERS ====================

// Initial setup
applyLanguage(currentLang);
applyTheme(currentTheme);
updateLanguageToggleUI();

// Event listeners
langToggleBtn.addEventListener('click', toggleLanguage);
themeToggleBtn.addEventListener('click', toggleTheme);

// Scroll spy for active nav link
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNav();
});

// Mobile menu toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ──────────────────────────────────────────────────────────
   Lucide icons init
─────────────────────────────────────────────────────────── */
lucide.createIcons();

/* ──────────────────────────────────────────────────────────
   Intersection Observer — reveal animations
─────────────────────────────────────────────────────────── */
setupObserver();

/* ──────────────────────────────────────────────────────────
   Smooth scroll
─────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('open');
  });
});
