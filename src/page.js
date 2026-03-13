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
      <section class="story-section fade-card" style="--delay:${index * 55}ms">
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

document.querySelector('#app').innerHTML = `
  <div class="wiki-shell">
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

    <main class="page-main">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="${pageHref()}">Home</a>
        <span>/</span>
        <span>${escapeHtml(page.groupTitle)}</span>
        <span>/</span>
        <span>${escapeHtml(page.navTitle ?? page.title)}</span>
      </nav>

      <section class="hero-shell page-shell">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(page.groupTitle)}</p>
          <h1>${escapeHtml(page.title)}</h1>
          <p class="lede">${escapeHtml(page.summary)}</p>
          <div class="meta-line">
            <span>${String(currentIndex + 1).padStart(2, '0')} / ${String(allPages.length).padStart(2, '0')}</span>
            <span>FloraGuard wiki draft</span>
          </div>
        </div>

        <aside class="hero-side">
          <figure class="media-frame">
            <img class="hero-art" src="${page.image}" alt="${escapeHtml(page.imageAlt)}" />
            <figcaption class="visual-caption">${escapeHtml(page.imageCaption)}</figcaption>
          </figure>
          <p class="panel-kicker">At a glance</p>
          <ul class="mini-list">
            ${highlightMarkup}
          </ul>
        </aside>
      </section>

      <section class="page-layout">
        <article class="article-stack">
          ${sectionMarkup}
        </article>

        <aside class="page-sidebar">
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
