import './style.css'
import {
  flattenPages,
  getPageBySlug,
  groupedNavigationMarkup,
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
      <article class="content-card fade-card" style="--delay:${index * 65}ms">
        <p class="card-index">${String(index + 1).padStart(2, '0')}</p>
        <h3>${title}</h3>
        <p>${guidance}</p>
      </article>
    `,
  )
  .join('')

const checklistMarkup = page.checklist
  .map(
    (item, index) => `
      <li class="check-item fade-card" style="--delay:${index * 60}ms">
        <span class="check-mark" aria-hidden="true"></span>
        <span>${item}</span>
      </li>
    `,
  )
  .join('')

const siblingMarkup = siblings
  .map(
    (entry) => `
      <a class="sibling-link ${entry.slug === page.slug ? 'active' : ''}" href="${pageHref(entry.slug)}">
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
        <p class="brand-note">Multi-page preview built around a best-wiki-style information structure.</p>
      </div>
      <a class="header-chip" href="${pageHref()}">Back to home map</a>
    </header>

    <section class="mega-nav">
      ${groupedNavigationMarkup(page.slug)}
    </section>

    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="${pageHref()}">Home</a>
        <span>/</span>
        <span>${page.groupTitle}</span>
        <span>/</span>
        <span>${page.navTitle ?? page.title}</span>
      </nav>

      <section class="hero-panel page-hero">
        <div class="hero-copy">
          <p class="eyebrow">${page.groupTitle}</p>
          <h1>${page.title}</h1>
          <p class="lede">${page.summary}</p>
          <div class="meta-strip">
            <span>${String(currentIndex + 1).padStart(2, '0')} / ${String(allPages.length).padStart(2, '0')}</span>
            <span>${page.slug}</span>
          </div>
        </div>
        <aside class="hero-aside fade-card" style="--delay:120ms">
          <p class="panel-kicker">Same-section pages</p>
          <div class="sibling-grid">
            ${siblingMarkup}
          </div>
        </aside>
      </section>

      <section class="content-grid-two">
        <section class="panel">
          <div class="section-heading">
            <p class="eyebrow">Suggested page blocks</p>
            <h2>Draft this page in a judged-wiki rhythm</h2>
            <p class="section-copy">
              These placeholders are not official rule text. They are drafting prompts so you
              can start building evidence, media, and story flow in the right shape.
            </p>
          </div>
          <div class="card-grid">
            ${sectionMarkup}
          </div>
        </section>

        <section class="panel panel-accent">
          <div class="section-heading">
            <p class="eyebrow">What to prepare</p>
            <h2>Checklist for this page</h2>
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
                <span>${previousPage.navTitle ?? previousPage.title}</span>
              </a>`
            : '<span class="pager-link pager-link-empty"></span>'
        }
        ${
          nextPage
            ? `<a class="pager-link" href="${pageHref(nextPage.slug)}">
                <span class="pager-label">Next</span>
                <span>${nextPage.navTitle ?? nextPage.title}</span>
              </a>`
            : '<span class="pager-link pager-link-empty"></span>'
        }
      </section>
    </main>

    <footer class="site-footer">
      <p>Reference structure inspired by Munich 2025 while waiting for the next official template.</p>
      <p>Use this page as a content scaffold, not as the final official judging environment.</p>
    </footer>
  </div>
`
