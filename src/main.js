import './style.css'
import {
  dropdownNavigationMarkup,
  flattenPages,
  initDropdownNav,
  pageHref,
  wikiGroups,
} from './site-data.js'

document.title = 'Project Wiki Preview | iGEM-style Structure'

const totalPages = flattenPages().length

const groupCards = wikiGroups
  .map(
    (group, index) => `
      <article class="structure-card fade-card" style="--delay:${index * 70}ms">
        <div class="structure-card-head">
          <p class="card-kicker">${group.title}</p>
          <p class="card-count">${group.pages.length} pages</p>
        </div>
        <h3>${group.summary}</h3>
        <div class="pill-list">
          ${group.pages
            .map(
              (page) => `
                <a class="page-pill" href="${pageHref(page.slug)}">
                  ${page.navTitle ?? page.title}
                </a>
              `,
            )
            .join('')}
        </div>
      </article>
    `,
  )
  .join('')

const principles = [
  {
    title: 'Dropdown-first navigation',
    detail:
      'Top-level categories stay compact in the header, while subpages live inside dropdown panels instead of taking over the whole screen.',
  },
  {
    title: 'Real page URLs',
    detail:
      'Every major section now has its own standalone path so the preview behaves like a real wiki, not a long scrolling prototype.',
  },
  {
    title: 'Fill-ready content blocks',
    detail:
      'Each page is scaffolded with section prompts and checklists so you can drop in evidence and media without rethinking layout later.',
  },
]

const principleMarkup = principles
  .map(
    (item, index) => `
      <article class="principle-card fade-card" style="--delay:${index * 90}ms">
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>
    `,
  )
  .join('')

const starterChecklist = [
  'Reference the winning structure without pretending this is the official 2026 template.',
  'Draft the judged pages first: project, lab evidence, engagement, team credit, awards.',
  'Use GitHub Pages for layout review, narrative review, and media proofing before final migration.',
  'Keep the repo static and portable so final handoff into the official host remains practical.',
]

const checklistMarkup = starterChecklist
  .map(
    (item, index) => `
      <li class="check-item fade-card" style="--delay:${index * 55}ms">
        <span class="check-mark" aria-hidden="true"></span>
        <span>${item}</span>
      </li>
    `,
  )
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="wiki-shell">
    <header class="site-header">
      <div class="brand-block">
        <a class="brand-mark" href="${pageHref()}">Wiki Preview Lab</a>
        <p class="brand-note">Munich 2025-inspired structure while the new official template is still unavailable.</p>
      </div>

      <nav class="dropdown-nav" aria-label="Primary">
        <a class="nav-home active" href="${pageHref()}">Home</a>
        ${dropdownNavigationMarkup()}
      </nav>

      <a class="reference-link" href="https://2025.igem.wiki/munich/" target="_blank" rel="noreferrer">
        Reference site
      </a>
    </header>

    <main class="home-main">
      <section class="hero-shell">
        <div class="hero-copy">
          <p class="eyebrow">iGEM-style wiki rehearsal</p>
          <h1>A cleaner structure that behaves more like a real competition wiki.</h1>
          <p class="lede">
            Instead of showing every page at once in the header, this version keeps the top
            navigation compact and groups pages into dropdowns. The content area then carries
            the page map, drafting prompts, and structure cues in a calmer layout.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="${pageHref('project-description')}">Open Project Description</a>
            <a class="button button-secondary" href="${pageHref('human-practices')}">Open Human Practices</a>
          </div>
        </div>

        <aside class="hero-side fade-card" style="--delay:120ms">
          <p class="panel-kicker">Current scaffold</p>
          <div class="stat-grid">
            <div class="stat-card">
              <strong>${wikiGroups.length}</strong>
              <span>top-level groups</span>
            </div>
            <div class="stat-card">
              <strong>${totalPages}</strong>
              <span>standalone pages</span>
            </div>
          </div>
          <ul class="mini-list">
            <li>Dropdown header navigation</li>
            <li>Separate page URLs and templates</li>
            <li>Shared iGEM-style content skeletons</li>
          </ul>
        </aside>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">What changed</p>
          <h2>The header is compact now, so the page structure can breathe.</h2>
        </div>
        <div class="principle-grid">
          ${principleMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Page map</p>
          <h2>Five top-level groups, each with their own drafting pages</h2>
        </div>
        <div class="structure-grid">
          ${groupCards}
        </div>
      </section>

      <section class="section-block split-block">
        <div>
          <div class="section-heading">
            <p class="eyebrow">Working method</p>
            <h2>Use this as the structured review version</h2>
          </div>
          <p class="section-copy">
            Keep the official submission host for the final version. Use this GitHub Pages site
            to review menu logic, section completeness, page-by-page evidence, and how the story
            feels when read as a real wiki.
          </p>
        </div>
        <ul class="check-grid">
          ${checklistMarkup}
        </ul>
      </section>
    </main>

    <footer class="site-footer">
      <p>Static Vite site with GitHub Pages deployment and a Munich 2025-inspired information architecture.</p>
      <p>Best used as a structure rehearsal before content moves into the official competition wiki.</p>
    </footer>
  </div>
`

initDropdownNav()
