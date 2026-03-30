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

// Logo / initials
document.getElementById('nav-name').textContent = personal.initials;

// Nav links
const navSections = [
  { id: 'home',       label: 'Home' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'education',  label: 'Education' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact',    label: 'Contact' },
];
const navLinks = document.getElementById('nav-links');
navLinks.innerHTML = navSections.map(s =>
  `<li><a href="#${s.id}" class="nav-link">${s.label}</a></li>`
).join('');

// Scroll spy
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  const current = navSections.map(s => {
    const el = document.getElementById(s.id);
    return el ? { id: s.id, top: el.getBoundingClientRect().top } : null;
  }).filter(Boolean).reverse().find(s => s.top <= 100);
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', current && a.getAttribute('href') === '#' + current.id);
  });
});

// Mobile toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ──────────────────────────────────────────────────────────
   Hero
─────────────────────────────────────────────────────────── */
document.getElementById('hero-tag').textContent   = personal.tag;
document.getElementById('hero-name').innerHTML    = nl2br(esc(personal.name));
document.getElementById('hero-title').innerHTML   = nl2br(esc(personal.title));
document.getElementById('hero-bio').textContent   = personal.bio;

if (personal.photo) {
  const img = document.createElement('img');
  img.src = personal.photo;
  img.alt = personal.name;
  img.className = 'hero-photo';
  img.loading = 'lazy';
  document.getElementById('nav-name').appendChild(img);

  const lightbox = document.createElement('div');
  lightbox.id = 'photo-lightbox';
  const lbImg = document.createElement('img');
  lbImg.alt = personal.name;
  lightbox.appendChild(lbImg);
  document.body.appendChild(lightbox);

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lbImg.src = '';
  };

  img.addEventListener('click', () => {
    lbImg.src = personal.photo;
    lightbox.classList.add('open');
  });

  lightbox.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ──────────────────────────────────────────────────────────
   Skills — domain cards
─────────────────────────────────────────────────────────── */
document.getElementById('domains-grid').innerHTML = domains.map(d => `
  <div class="domain-card" style="--accent:${d.color}">
    <div class="domain-icon"><i data-lucide="${d.icon}"></i></div>
    <h3>${esc(d.title)}</h3>
    <p>${esc(d.desc)}</p>
  </div>
`).join('');

/* Skills marquee — duplicate for seamless loop */
const marqueeHTML = skills.map(s => `<span class="marquee-item">${esc(s)}</span>`).join('');
document.getElementById('marquee-track').innerHTML = marqueeHTML + marqueeHTML;

/* ──────────────────────────────────────────────────────────
   Experience — timeline
─────────────────────────────────────────────────────────── */
document.getElementById('timeline').innerHTML = experience.map((exp, i) => `
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
        ${exp.tools.map(t => tag(t)).join('')}
      </div>
    </div>
  </div>
`).join('');

/* ──────────────────────────────────────────────────────────
   Projects
─────────────────────────────────────────────────────────── */
document.getElementById('projects-grid').innerHTML = projects.map((p, i) => `
  <div class="project-card" style="--i:${i}">
    ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" class="project-img" loading="lazy">` : `
    <div class="project-icon-bg">
      <i data-lucide="${p.icon || 'code-2'}"></i>
    </div>`}
    <div class="project-body">
      <h3 class="project-title">${esc(p.title)}</h3>
      <p class="project-desc">${esc(p.desc)}</p>
      <div class="project-tags">
        ${p.tags.map(t => tag(t)).join('')}
      </div>
      ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="project-link">View Project <i data-lucide="arrow-up-right"></i></a>` : ''}
    </div>
  </div>
`).join('');

/* ──────────────────────────────────────────────────────────
   Education
─────────────────────────────────────────────────────────── */
document.getElementById('education-list').innerHTML = education.map(e => `
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

/* Certifications */
document.getElementById('certs-list').innerHTML = certifications.map(c => `
  <a href="${esc(c.link)}" target="_blank" rel="noopener" class="cert-item">
    <div class="cert-icon"><i data-lucide="${c.icon}"></i></div>
    <div>
      <h4>${esc(c.title)}</h4>
      <span class="cert-issuer">${esc(c.issuer)}</span>
    </div>
    <i data-lucide="external-link" class="cert-ext"></i>
  </a>
`).join('');

/* ──────────────────────────────────────────────────────────
   Activities
─────────────────────────────────────────────────────────── */
document.getElementById('activities-grid').innerHTML = activities.map(a => `
  <div class="activity-card">
    <div class="activity-year">${esc(a.year)}</div>
    <ul class="activity-list">
      ${a.items.map(it => `<li>${esc(it)}</li>`).join('')}
    </ul>
  </div>
`).join('');

/* ──────────────────────────────────────────────────────────
   Contact
─────────────────────────────────────────────────────────── */
document.getElementById('contact-intro').textContent = contact.intro;
document.getElementById('contact-links').innerHTML = contact.links.map(l => `
  <a href="${esc(l.href)}" target="_blank" rel="noopener" class="contact-link">
    <i data-lucide="${l.icon}"></i>
    <span>${esc(l.label)}</span>
  </a>
`).join('');

/* ──────────────────────────────────────────────────────────
   Footer
─────────────────────────────────────────────────────────── */
document.getElementById('footer-text').textContent = footer;

/* ──────────────────────────────────────────────────────────
   Lucide icons init
─────────────────────────────────────────────────────────── */
lucide.createIcons();

/* ──────────────────────────────────────────────────────────
   Intersection Observer — reveal animations
─────────────────────────────────────────────────────────── */
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
