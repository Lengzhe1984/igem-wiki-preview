import './style.css'
import {
  flattenPages,
  groupedNavigationMarkup,
  pageHref,
  wikiGroups,
} from './site-data.js'

document.title = 'Project Wiki Preview | iGEM-style Structure'

const groupCards = wikiGroups
  .map(
    (group, index) => `
      <section class="group-card fade-card" style="--delay:${index * 80}ms">
        <div class="group-card-header">
          <p class="group-label">${group.title}</p>
          <p class="group-summary">${group.summary}</p>
        </div>
        <ul class="group-link-list">
          ${group.pages
            .map(
              (page) => `
                <li>
                  <a class="group-link" href="${pageHref(page.slug)}">
                    <span>${page.navTitle ?? page.title}</span>
                    <span class="link-arrow">/</span>
                  </a>
                </li>
              `,
            )
            .join('')}
        </ul>
      </section>
    `,
  )
  .join('')

const pageTrail = flattenPages()
  .map(
    (page, index) => `
      <li class="timeline-step fade-card" style="--delay:${index * 45}ms">
        <span class="timeline-count">${String(index + 1).padStart(2, '0')}</span>
        <a href="${pageHref(page.slug)}">${page.navTitle ?? page.title}</a>
      </li>
    `,
  )
  .join('')

const starterChecks = [
  'Keep the site fully static so GitHub Pages and future migration both stay simple.',
  'Build every major judging page early, even if the content is still placeholder copy.',
  'Use the preview URL for advisor and teammate review before moving content to the official wiki host.',
  'Treat this repo as the structure rehearsal: navigation, hierarchy, media layout, and story flow.',
]

const starterChecklist = starterChecks
  .map(
    (item, index) => `
      <li class="check-item fade-card" style="--delay:${index * 60}ms">
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
        <p class="brand-note">Munich 2025-inspired information architecture for a future iGEM wiki.</p>
      </div>
      <a class="header-chip" href="https://2025.igem.wiki/munich/" target="_blank" rel="noreferrer">
        Reference: Munich 2025
      </a>
    </header>

    <section class="mega-nav">
      ${groupedNavigationMarkup()}
    </section>

    <main>
      <section class="hero-panel home-hero">
        <div class="hero-copy">
          <p class="eyebrow">Preview the wiki structure before the official template exists</p>
          <h1>Build against a winning iGEM-style page tree now, not at the last minute.</h1>
          <p class="lede">
            This starter now follows the broad navigation logic used by Munich 2025:
            Project, Lab, Engagement, Team, and Awards. That gives you a stable set of
            slugs, menus, and page skeletons to fill while the new official template is
            still unavailable.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="${pageHref('project-description')}">Open the first content page</a>
            <a class="button button-secondary" href="#structure">Review the page map</a>
          </div>
        </div>
        <aside class="hero-aside fade-card" style="--delay:120ms">
          <p class="panel-kicker">Current page count</p>
          <p class="hero-stat">${flattenPages().length}</p>
          <p class="hero-stat-label">core wiki pages scaffolded</p>
          <ul class="mini-facts">
            <li>Grouped top navigation on every page</li>
            <li>Standalone URLs for each section</li>
            <li>Placeholder content blocks ready for drafting</li>
          </ul>
        </aside>
      </section>

      <section class="panel" id="structure">
        <div class="section-heading">
          <p class="eyebrow">Wiki map</p>
          <h2>Grouped the way a real competition wiki reads</h2>
          <p class="section-copy">
            Each category below opens into individual pages that you can draft, review,
            and later migrate into the official competition environment.
          </p>
        </div>
        <div class="group-grid">
          ${groupCards}
        </div>
      </section>

      <section class="content-grid-two">
        <section class="panel">
          <div class="section-heading">
            <p class="eyebrow">Navigation trail</p>
            <h2>All pages in one sequence</h2>
          </div>
          <ol class="timeline-list">
            ${pageTrail}
          </ol>
        </section>

        <section class="panel panel-accent">
          <div class="section-heading">
            <p class="eyebrow">Working method</p>
            <h2>Use GitHub Pages as the rehearsal venue</h2>
          </div>
          <ul class="check-grid">
            ${starterChecklist}
          </ul>
        </section>
      </section>
    </main>

    <footer class="site-footer">
      <p>Static Vite site with GitHub Pages deployment and a Munich 2025-inspired structure.</p>
      <p>Fill the pages here first, then migrate approved content to the final official wiki host.</p>
    </footer>
  </div>
`
