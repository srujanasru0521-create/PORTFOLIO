/**
 * Portfolio Interactions & Animations
 * - Scroll reveal
 * - Typewriter hero effect
 * - Navbar scroll behavior
 * - Project filtering
 * - Stats counter animation
 * - Mobile nav
 * - Contact form
 */

document.addEventListener("DOMContentLoaded", () => {
  buildPortfolio();
  initNavbar();
  initTypewriter();
  initScrollReveal();
  initStatCounters();
  initProjectFilter();
  initMobileNav();
  initContactForm();
  new AIAssistant();
});

// ── Build DOM from data.js ─────────────────────────────────
function buildPortfolio() {
  buildStats();
  buildAbout();
  buildSkills();
  buildExperience();
  buildProjects();
  buildEducation();
  buildContact();
  buildChatSuggestions();
  buildFooter();
}

function buildStats() {
  const grid = document.getElementById("stats-grid");
  if (!grid) return;
  grid.innerHTML = SRUJANA.stats.map(s => `
    <div class="stat-item">
      <div class="stat-value" data-target="${s.value}">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

function buildAbout() {
  const bioEl = document.getElementById("about-bio-text");
  if (bioEl) {
    bioEl.innerHTML = SRUJANA.bio.map(p => `<p>${p}</p>`).join("");
  }

  const linksEl = document.getElementById("about-links");
  if (linksEl) {
    linksEl.innerHTML = `
      <a href="mailto:${SRUJANA.contact.email}" class="about-link-btn" id="about-email-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
        Email
      </a>
      <a href="${SRUJANA.contact.linkedin}" target="_blank" rel="noopener" class="about-link-btn" id="about-linkedin-link">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>
      <a href="${SRUJANA.contact.github}" target="_blank" rel="noopener" class="about-link-btn" id="about-github-link">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
      <a href="${SRUJANA.contact.resume}" download class="about-link-btn" id="about-resume-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Resume
      </a>
    `;
  }
}

function buildSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;
  container.innerHTML = Object.entries(SRUJANA.skills).map(([category, skills]) => `
    <div class="skill-category reveal">
      <div class="skill-category-title">${category}</div>
      <div class="skills-grid">
        ${skills.map(skill => `
          <div class="skill-card">
            <div class="skill-name">${skill.name}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function buildExperience() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;
  timeline.innerHTML = SRUJANA.experience.map((exp, i) => `
    <div class="timeline-item reveal reveal-delay-${i + 1}">
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <div class="timeline-logo">${exp.logo}</div>
        <div class="timeline-meta">
          <div class="timeline-role">${exp.role}</div>
          <div class="timeline-company">${exp.company}</div>
          <div class="timeline-period">${exp.period} · ${exp.location}</div>
        </div>
        <div class="timeline-type">${exp.type}</div>
      </div>
      <p class="timeline-summary">${exp.summary}</p>
      <div class="timeline-highlights">
        ${exp.highlights.map(h => `<div class="highlight-item">${h}</div>`).join("")}
      </div>
    </div>
  `).join("");
}

function buildProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const featured = SRUJANA.projects.filter(p => p.featured);
  const rest = SRUJANA.projects.filter(p => !p.featured);

  const renderCard = (project, idx, isFeatured = false) => {
    const wrapperClass = `project-card-wrapper${isFeatured ? " project-card-featured" : ""}`;
    return `
      <div class="${wrapperClass}" data-category="${project.category}">
        <div class="project-card reveal reveal-delay-${(idx % 3) + 1}">
          <div>
            <div class="project-icon-row">
              <div class="project-icon">${project.icon}</div>
              <div class="project-links">
                ${project.github
                  ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link-btn" title="GitHub">⬡</a>`
                  : `<span class="project-link-btn" title="Internal Project" style="opacity:0.4;cursor:default">🔒</span>`
                }
              </div>
            </div>
            <div style="margin-top:16px">
              <div class="project-name">${project.name}</div>
              <div class="project-subtitle">${project.subtitle}</div>
            </div>
          </div>
          <div>
            <p class="project-desc">${project.description}</p>
            ${project.detail ? `<div class="project-detail">${project.detail}</div>` : ""}
            <div class="project-tags" style="margin-top:16px">
              ${project.tags.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  };

  grid.innerHTML =
    featured.map((p, i) => renderCard(p, i, true)).join("") +
    rest.map((p, i) => renderCard(p, i, false)).join("");
}

function buildEducation() {
  const container = document.getElementById("edu-grid");
  if (!container) return;
  container.innerHTML = SRUJANA.education.map((edu, i) => `
    <div class="edu-card reveal reveal-delay-${i + 1}">
      <div class="edu-period">${edu.period}</div>
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-institution">${edu.institution}</div>
      <div class="edu-cgpa">⭐ CGPA: ${edu.cgpa}</div>
      <div class="edu-highlights">
        ${edu.highlights.map(h => `<div class="edu-highlight-item">${h}</div>`).join("")}
      </div>
    </div>
  `).join("");
}

function buildContact() {
  const linksEl = document.getElementById("contact-links");
  if (!linksEl) return;
  const contactItems = [
    { icon: "✉️", label: "Email", value: SRUJANA.contact.email, href: `mailto:${SRUJANA.contact.email}` },
    { icon: "💼", label: "LinkedIn", value: "https://www.linkedin.com/in/srujanag21/", href: SRUJANA.contact.linkedin },
    { icon: "🐙", label: "GitHub", value: "https://github.com/srujanasru0521-create", href: SRUJANA.contact.github },
    { icon: "📄", label: "Resume", value: "Download PDF", href: SRUJANA.contact.resume }
  ];
  linksEl.innerHTML = contactItems.map((item, i) => `
    <a href="${item.href}" target="${item.href.startsWith("mailto") || item.href.endsWith(".pdf") ? "_self" : "_blank"}"
       rel="noopener" class="contact-link reveal reveal-delay-${i + 1}" id="contact-link-${i}">
      <div class="contact-link-icon">${item.icon}</div>
      <div class="contact-link-info">
        <div class="contact-link-label">${item.label}</div>
        <div class="contact-link-value">${item.value}</div>
      </div>
      <div class="contact-link-arrow">→</div>
    </a>
  `).join("");
}

function buildChatSuggestions() {
  const el = document.getElementById("suggestion-chips");
  if (!el) return;
  const questions = [
    "Who is Srujana?",
    "What's her strongest skill?",
    "Tell me about CogniGraph",
    "Is she open to new roles?",
    "What's her RAG experience?"
  ];
  el.innerHTML = questions.map(q => `<button class="chip">${q}</button>`).join("");

  // Rebind chip events (since AI assistant may init before this)
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const input = document.getElementById("chat-input");
      if (input) {
        input.value = chip.textContent.trim();
        document.getElementById("chat-send-btn")?.click();
      }
    });
  });
}

function buildFooter() {
  const el = document.getElementById("footer-text");
  if (el) {
    el.innerHTML = `© ${new Date().getFullYear()} ${SRUJANA.name}. Built with ❤️ &amp; curiosity.`;
  }
}

// ── Typewriter Effect ──────────────────────────────────────
function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const words = SRUJANA.taglines;
  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = words[wordIdx];
    el.textContent = deleting
      ? current.substring(0, charIdx--)
      : current.substring(0, charIdx++);

    let delay = deleting ? 60 : 110;

    if (!deleting && charIdx === current.length + 1) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      delay = 300;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 1200);
}

// ── Navbar scroll ──────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}

// ── Scroll Reveal ─────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add("visible");
        observer.unobserve(el.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Re-observe dynamically added elements
  const mutationObs = new MutationObserver(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
  });
  mutationObs.observe(document.body, { childList: true, subtree: true });
}

// ── Stats Counter Animation ────────────────────────────────
function initStatCounters() {
  // Stats are text-based so we just animate opacity
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-item").forEach((item, i) => {
          setTimeout(() => item.classList.add("visible"), i * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsBar = document.getElementById("stats-bar");
  if (statsBar) observer.observe(statsBar);
}

// ── Project Filter ─────────────────────────────────────────
function initProjectFilter() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;
      document.querySelectorAll(".project-card-wrapper").forEach(card => {
        const cardCat = card.dataset.category;
        const show = category === "All" || cardCat === category;
        card.classList.toggle("hidden", !show);
      });
    });
  });
}

// ── Mobile Nav ─────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const links  = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.style.display === "flex";
    links.style.display = isOpen ? "" : "flex";
    links.style.position = "absolute";
    links.style.flexDirection = "column";
    links.style.top = "68px";
    links.style.left = "0";
    links.style.right = "0";
    links.style.background = "rgba(250,250,250,0.97)";
    links.style.backdropFilter = "blur(16px)";
    links.style.padding = "24px 32px";
    links.style.gap = "20px";
    links.style.borderBottom = "1px solid var(--border)";
    links.style.zIndex = "999";
  });

  // Close on nav link click
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => { links.style.display = ""; });
  });
}

// ── Contact Form ───────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector(".form-submit");
    const originalText = btn.innerHTML;
    btn.innerHTML = "Sending…";
    btn.disabled = true;

    // Netlify handles the backend — form works after deploy
    try {
      const data = new FormData(form);
      await fetch("/", { method: "POST", body: data });
      btn.innerHTML = "✓ Sent! I'll be in touch.";
      btn.style.background = "#16A34A";
      form.reset();
    } catch {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });
}
