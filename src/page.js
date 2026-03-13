import './style.css'
import {
  dropdownNavigationMarkup,
  flattenPages,
  getPageBySlug,
  initDropdownNav,
  pageHref,
  wikiGroups,
} from './site-data.js'

const slug = document.body.dataset.page
const page = getPageBySlug(slug)

if (!page) {
  throw new Error(`Unknown wiki page slug: ${slug}`)
}

const allPages = flattenPages()
const currentIndex = allPages.findIndex((entry) => entry.slug === slug)
const previousPage = currentIndex > 0 ? allPages[currentIndex - 1] : null
const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null
const siblings = wikiGroups.find((group) => group.slug === page.groupSlug)?.pages ?? []

document.title = `${page.title} | Project Wiki Preview`

const sectionMarkup = page.sections
  .map(
    ({ title, guidance }, index) => `
      <article class="content-card fade-card" style="--delay:${index * 55}ms">
        <p class="card-kicker">Block ${String(index + 1).padStart(2, '0')}</p>
        <h3>${title}</h3>
        <p>${guidance}</p>
      </article>
    `,
  )
  .join('')

const checklistMarkup = page.checklist
  .map(
    (item, index) => `
      <li class="check-item fade-card" style="--delay:${index * 55}ms">
        <span class="check-mark" aria-hidden="true"></span>
        <span>${item}</span>
      </li>
    `,
  )
  .join('')

const siblingMarkup = siblings
  .map(
    (entry) => `
      <a class="page-pill ${entry.slug === page.slug ? 'active' : ''}" href="${pageHref(entry.slug)}">
        ${entry.navTitle ?? entry.title}
      </a>
    `,
  )
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="wiki-shell">
    <header class="site-header">
      <div class="brand-block">
        <a class="brand-mark" href="${pageHref()}">Wiki Preview Lab</a>
        <p class="brand-note">Multi-page structure preview for a future iGEM wiki.</p>
      </div>

      <nav class="dropdown-nav" aria-label="Primary">
        <a class="nav-home" href="${pageHref()}">Home</a>
        ${dropdownNavigationMarkup(page.slug)}
      </nav>

      <a class="reference-link" href="https://2025.igem.wiki/munich/" target="_blank" rel="noreferrer">
        Munich 2025
      </a>
    </header>

    <main class="page-main">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="${pageHref()}">Home</a>
        <span>/</span>
        <span>${page.groupTitle}</span>
        <span>/</span>
        <span>${page.navTitle ?? page.title}</span>
      </nav>

      <section class="hero-shell page-shell">
        <div class="hero-copy">
          <p class="eyebrow">${page.groupTitle}</p>
          <h1>${page.title}</h1>
          <p class="lede">${page.summary}</p>
          <div class="meta-line">
            <span>${String(currentIndex + 1).padStart(2, '0')} / ${String(allPages.length).padStart(2, '0')}</span>
            <span>${page.slug}</span>
          </div>
        </div>

        <aside class="hero-side fade-card" style="--delay:120ms">
          <p class="panel-kicker">Same-section pages</p>
          <div class="pill-list compact">
            ${siblingMarkup}
          </div>
        </aside>
      </section>

      <section class="split-block page-block">
        <section class="section-block">
          <div class="section-heading">
            <p class="eyebrow">Drafting blocks</p>
            <h2>Fill this page in a judged-wiki rhythm</h2>
            <p class="section-copy">
              These are not official rule labels. They are structured prompts to help you
              draft a strong page while the official template is not yet available.
            </p>
          </div>
          <div class="content-card-grid">
            ${sectionMarkup}
          </div>
        </section>

        <section class="section-block panel-accent">
          <div class="section-heading">
            <p class="eyebrow">Checklist</p>
            <h2>What to make sure this page includes</h2>
          </div>
          <ul class="check-grid">
            ${checklistMarkup}
          </ul>
        </section>
      </section>

      <section class="pager-row">
        ${
          previousPage
            ? `<a class="pager-link" href="${pageHref(previousPage.slug)}">
                <span class="pager-label">Previous</span>
                <strong>${previousPage.navTitle ?? previousPage.title}</strong>
              </a>`
            : '<span class="pager-link pager-empty"></span>'
        }
        ${
          nextPage
            ? `<a class="pager-link" href="${pageHref(nextPage.slug)}">
                <span class="pager-label">Next</span>
                <strong>${nextPage.navTitle ?? nextPage.title}</strong>
              </a>`
            : '<span class="pager-link pager-empty"></span>'
        }
      </section>
    </main>

    <footer class="site-footer">
      <p>Reference structure inspired by Munich 2025, not claimed as an official new-season template.</p>
      <p>Use this page for structure review, then migrate the approved content into the final official host.</p>
    </footer>
  </div>
`

initDropdownNav()
