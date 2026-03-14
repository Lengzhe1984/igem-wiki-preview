import './style.css'
import {
  dropdownNavigationMarkup,
  escapeHtml,
  flattenPages,
  getPageBySlug,
  initDropdownNav,
  pageHref,
  siteMeta,
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

document.title = `${page.title} | ${siteMeta.projectName}`

function sectionId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function renderList(items, style = 'unordered') {
  const tag = style === 'ordered' ? 'ol' : 'ul'
  const className = style === 'ordered' ? 'rich-list rich-list-ordered' : 'rich-list'
  return `
    <${tag} class="${className}">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
    </${tag}>
  `
}

function renderTable(columns, rows) {
  return `
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            ${columns.map((column) => `<th>${escapeHtml(column)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  ${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}
                </tr>
              `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `
}

function renderReferences(items) {
  return `
    <ol class="reference-list">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
    </ol>
  `
}

function renderModule(module, index) {
  switch (module.type) {
    case 'visual-panel':
      return `
        <section class="feature-module feature-visual feature-visual-${escapeHtml(module.tone ?? 'default')} fade-card" style="--delay:${index * 55}ms">
          <div class="feature-visual-media">
            <img class="feature-visual-image" src="${module.image}" alt="${escapeHtml(module.alt)}" />
            <p class="visual-caption">${escapeHtml(module.caption)}</p>
          </div>
          <div class="feature-visual-copy">
            <div class="section-heading">
              <p class="eyebrow">${escapeHtml(module.eyebrow)}</p>
              <h2>${escapeHtml(module.title)}</h2>
            </div>
            <p class="section-copy">${escapeHtml(module.lede)}</p>
            <ul class="mini-list mini-list-spacious">
              ${module.points.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </div>
        </section>
      `
    case 'metric-cards':
      return `
        <section class="feature-module feature-module-wide fade-card" style="--delay:${index * 55}ms">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(module.eyebrow)}</p>
            <h2>${escapeHtml(module.title)}</h2>
          </div>
          <div class="metric-card-grid">
            ${module.items
              .map(
                (item) => `
                  <article class="feature-card metric-feature-card">
                    <span class="feature-value">${escapeHtml(item.value)}</span>
                    <h3>${escapeHtml(item.label)}</h3>
                    <p>${escapeHtml(item.detail)}</p>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      `
    case 'step-cards':
    case 'stakeholder-grid':
      return `
        <section class="feature-module fade-card" style="--delay:${index * 55}ms">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(module.eyebrow)}</p>
            <h2>${escapeHtml(module.title)}</h2>
          </div>
          <div class="feature-card-grid">
            ${module.items
              .map(
                (item) => `
                  <article class="feature-card">
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.detail)}</p>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      `
    case 'use-case-cards':
      return `
        <section class="feature-module feature-module-wide fade-card" style="--delay:${index * 55}ms">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(module.eyebrow)}</p>
            <h2>${escapeHtml(module.title)}</h2>
          </div>
          <div class="scenario-grid">
            ${module.items
              .map(
                (item) => `
                  <article class="scenario-card">
                    <span class="scenario-tag">${escapeHtml(item.tag)}</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.detail)}</p>
                    <ul class="scenario-points">
                      ${item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
                    </ul>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      `
    case 'profile-grid':
      return `
        <section class="feature-module fade-card" style="--delay:${index * 55}ms">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(module.eyebrow)}</p>
            <h2>${escapeHtml(module.title)}</h2>
          </div>
          <div class="profile-grid">
            ${module.items
              .map(
                (item) => `
                  <article class="profile-card">
                    <span class="profile-label">${escapeHtml(item.label)}</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.detail)}</p>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      `
    case 'pipeline':
    case 'journey-strip':
      return `
        <section class="feature-module feature-module-wide fade-card" style="--delay:${index * 55}ms">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(module.eyebrow)}</p>
            <h2>${escapeHtml(module.title)}</h2>
          </div>
          <div class="journey-strip">
            ${module.items
              .map(
                (item, itemIndex) => `
                  <article class="journey-card">
                    <span class="journey-index">${String(itemIndex + 1).padStart(2, '0')}</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.detail)}</p>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      `
    case 'comparison-grid':
      return `
        <section class="feature-module fade-card" style="--delay:${index * 55}ms">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(module.eyebrow)}</p>
            <h2>${escapeHtml(module.title)}</h2>
          </div>
          <div class="comparison-grid">
            ${module.items
              .map(
                (item) => `
                  <article class="comparison-card">
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.detail)}</p>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      `
    case 'citation-clusters':
      return `
        <section class="feature-module feature-module-wide fade-card" style="--delay:${index * 55}ms">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(module.eyebrow)}</p>
            <h2>${escapeHtml(module.title)}</h2>
          </div>
          <div class="citation-grid">
            ${module.items
              .map(
                (item) => `
                  <article class="citation-card">
                    <span class="citation-support">${escapeHtml(item.support)}</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    <ul class="citation-list">
                      ${item.papers.map((paper) => `<li>${escapeHtml(paper)}</li>`).join('')}
                    </ul>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      `
    default:
      return ''
  }
}

function renderBlock(block) {
  switch (block.type) {
    case 'paragraph':
      return `<p>${escapeHtml(block.text)}</p>`
    case 'list':
      return renderList(block.items, block.style)
    case 'table':
      return renderTable(block.columns, block.rows)
    case 'callout':
      return `<div class="story-callout"><p>${escapeHtml(block.text)}</p></div>`
    case 'references':
      return renderReferences(block.items)
    default:
      return ''
  }
}

const sectionMarkup = page.sections
  .map(
    (section, index) => `
      <section id="${sectionId(section.title)}" class="story-section fade-card" style="--delay:${index * 55}ms">
        ${section.eyebrow ? `<p class="story-section-label">${escapeHtml(section.eyebrow)}</p>` : ''}
        <h2>${escapeHtml(section.title)}</h2>
        <div class="story-stack">
          ${section.blocks.map((block) => renderBlock(block)).join('')}
        </div>
      </section>
    `,
  )
  .join('')

const siblingMarkup = siblings
  .map(
    (entry) => `
      <a class="page-pill ${entry.slug === page.slug ? 'active' : ''}" href="${pageHref(entry.slug)}">
        ${escapeHtml(entry.navTitle ?? entry.title)}
      </a>
    `,
  )
  .join('')

const highlightMarkup = page.highlights
  .map((item) => `<li>${escapeHtml(item)}</li>`)
  .join('')

const nextAddMarkup = page.nextAdd
  .map(
    (item, index) => `
      <li class="check-item fade-card" style="--delay:${index * 45}ms">
        <span class="check-mark" aria-hidden="true"></span>
        <span>${escapeHtml(item)}</span>
      </li>
    `,
  )
  .join('')

const tocMarkup = page.sections
  .map(
    (section) => `
      <a class="toc-link" href="#${sectionId(section.title)}">${escapeHtml(section.title)}</a>
    `,
  )
  .join('')

const moduleMarkup = (page.modules ?? [])
  .map((module, index) => renderModule(module, index))
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="wiki-shell page-shell page-shell-${page.slug}">
    <header class="site-header">
      <div class="brand-block">
        <a class="brand-mark" href="${pageHref()}">${escapeHtml(siteMeta.projectName)}</a>
        <p class="brand-note">${escapeHtml(siteMeta.subtitle)}</p>
      </div>

      <nav class="dropdown-nav" aria-label="Primary">
        <a class="nav-home" href="${pageHref()}">Home</a>
        ${dropdownNavigationMarkup(page.slug)}
      </nav>

      <a class="reference-link" href="${pageHref('references')}">References</a>
    </header>

    <main class="page-main page-main-${page.slug}">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="${pageHref()}">Home</a>
        <span>/</span>
        <span>${escapeHtml(page.groupTitle)}</span>
        <span>/</span>
        <span>${escapeHtml(page.navTitle ?? page.title)}</span>
      </nav>

      <section class="page-banner">
        <div class="page-banner-art-wrap">
          <img class="page-banner-art" src="${page.image}" alt="${escapeHtml(page.imageAlt)}" />
        </div>
        <div class="page-banner-overlay">
          <p class="eyebrow">${escapeHtml(page.groupTitle)}</p>
          <h1>${escapeHtml(page.title)}</h1>
          <p class="lede">${escapeHtml(page.summary)}</p>
          <div class="meta-line">
            <span>${String(currentIndex + 1).padStart(2, '0')} / ${String(allPages.length).padStart(2, '0')}</span>
            <span>FloraGuard wiki draft</span>
          </div>
          <p class="visual-caption">${escapeHtml(page.imageCaption)}</p>
        </div>
      </section>

      <section class="page-layout">
        <article class="article-stack">
          <section class="story-section story-summary fade-card">
            <p class="story-section-label">At a glance</p>
            <h2>Why this page matters in the FloraGuard story</h2>
            <ul class="mini-list mini-list-spacious">
              ${highlightMarkup}
            </ul>
          </section>

          ${moduleMarkup}

          ${sectionMarkup}
        </article>

        <aside class="page-sidebar">
          <section class="side-panel">
            <p class="panel-kicker">On this page</p>
            <nav class="toc-list" aria-label="On this page">
              ${tocMarkup}
            </nav>
          </section>

          <section class="side-panel">
            <p class="panel-kicker">Same-section pages</p>
            <div class="pill-list compact">
              ${siblingMarkup}
            </div>
          </section>

          <section class="side-panel">
            <p class="panel-kicker">Next to add</p>
            <ul class="check-grid">
              ${nextAddMarkup}
            </ul>
          </section>
        </aside>
      </section>

      <section class="pager-row">
        ${
          previousPage
            ? `<a class="pager-link" href="${pageHref(previousPage.slug)}">
                <span class="pager-label">Previous</span>
                <strong>${escapeHtml(previousPage.navTitle ?? previousPage.title)}</strong>
              </a>`
            : '<span class="pager-link pager-empty"></span>'
        }
        ${
          nextPage
            ? `<a class="pager-link" href="${pageHref(nextPage.slug)}">
                <span class="pager-label">Next</span>
                <strong>${escapeHtml(nextPage.navTitle ?? nextPage.title)}</strong>
              </a>`
            : '<span class="pager-link pager-empty"></span>'
        }
      </section>
    </main>

    <footer class="site-footer">
      <p>Each FloraGuard page now carries narrative content first, with space reserved for figures, data, and evidence as they become available.</p>
      <p>This preview remains structured for rapid review before final migration into the official iGEM wiki host.</p>
    </footer>
  </div>
`

initDropdownNav()

function initTocSpy() {
  const links = Array.from(document.querySelectorAll('.toc-link'))
  const sections = links
    .map((link) => {
      const href = link.getAttribute('href')
      if (!href?.startsWith('#')) return null
      const target = document.querySelector(href)
      if (!target) return null
      return { link, target }
    })
    .filter(Boolean)

  if (!sections.length) return

  const setActive = (id) => {
    sections.forEach(({ link, target }) => {
      link.classList.toggle('active', `#${target.id}` === id)
    })
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

      if (visible[0]) {
        setActive(`#${visible[0].target.id}`)
      }
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.1, 0.4, 0.7],
    },
  )

  sections.forEach(({ target }) => observer.observe(target))

  const initialHash = window.location.hash
  if (initialHash) {
    setActive(initialHash)
  } else {
    setActive(`#${sections[0].target.id}`)
  }
}

initTocSpy()
