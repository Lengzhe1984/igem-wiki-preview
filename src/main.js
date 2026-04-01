import './style.css'
import {
  dropdownNavigationMarkup,
  escapeHtml,
  flattenPages,
  homePage,
  initDropdownNav,
  siteMeta,
  pageHref,
} from './site-data.js'

document.title = `${siteMeta.projectName} | iGEM Wiki`

const totalPages = flattenPages().length

const metricItems = [
  ...homePage.metrics,
  {
    value: String(totalPages),
    label: 'core wiki pages arranged into a reviewable bench-to-flower narrative',
  },
]

const floatingMetricMarkup = metricItems
  .slice(0, 2)
  .map(
    (item, index) => `
      <div class="floating-stat floating-stat-${index + 1} fade-card" style="--delay:${index * 95}ms">
        <strong>${escapeHtml(item.value)}</strong>
        <span>${escapeHtml(item.label)}</span>
      </div>
    `,
  )
  .join('')

const challengeMarkup = homePage.challengeCards
  .map(
    (item, index) => `
      <article class="focus-card fade-card" style="--delay:${index * 65}ms">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </article>
    `,
  )
  .join('')

const atlasMarkup = homePage.atlasCards
  .map(
    (item, index) => `
      <article class="art-card fade-card" style="--delay:${index * 70}ms">
        <img class="art-card-image" src="${item.image}" alt="${escapeHtml(item.alt)}" />
        <div class="art-card-copy">
          <span class="art-card-label">${escapeHtml(item.label)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.detail)}</p>
        </div>
      </article>
    `,
  )
  .join('')

const storyFlowMarkup = homePage.storyFlow
  .map(
    (item, index) => `
      <article class="flow-card fade-card" style="--delay:${index * 55}ms">
        <span class="flow-step">${escapeHtml(item.step)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </article>
    `,
  )
  .join('')

const evidencePreviewMarkup = homePage.evidencePreview
  .map(
    (item, index) => `
      <article class="evidence-card fade-card" style="--delay:${index * 60}ms">
        <span class="evidence-label">${escapeHtml(item.label)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </article>
    `,
  )
  .join('')

const editorialChipMarkup = homePage.editorialFeature.chips
  .map((chip) => `<span class="editorial-chip">${escapeHtml(chip)}</span>`)
  .join('')

const editorialPointMarkup = homePage.editorialFeature.points
  .map((point) => `<li>${escapeHtml(point)}</li>`)
  .join('')

const leadMarkup = homePage.lead
  .map((text) => `<p>${escapeHtml(text)}</p>`)
  .join('')

const systemPillMarkup = homePage.platformCards
  .map((item) => `<span class="system-pill">${escapeHtml(item.title)}</span>`)
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="wiki-shell">
    <header class="site-header">
      <div class="brand-block">
        <a class="brand-mark" href="${pageHref()}">${escapeHtml(siteMeta.projectName)}</a>
        <p class="brand-note">${escapeHtml(siteMeta.subtitle)}</p>
      </div>

      <nav class="dropdown-nav" aria-label="Primary">
        <a class="nav-home active" href="${pageHref()}">Home</a>
        ${dropdownNavigationMarkup()}
      </nav>
    </header>

    <main class="home-main">
      <section class="hero-banner">
        <div class="hero-banner-copy">
          <p class="eyebrow">${escapeHtml(homePage.eyebrow)}</p>
          <h1>${escapeHtml(siteMeta.projectName)}</h1>
          <p class="project-subtitle">${escapeHtml(siteMeta.subtitle)}</p>
          <p class="hero-deck">${escapeHtml(siteMeta.deck)}</p>
          <div class="intro-stack">
            ${leadMarkup}
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="${pageHref('project-description')}">Open Project Description</a>
            <a class="button button-secondary" href="${pageHref('design')}">Open Design</a>
          </div>
          <div class="hero-system-pills">
            ${systemPillMarkup}
          </div>
        </div>

        <div class="hero-stage">
          <div class="hero-stage-frame">
            <img class="hero-stage-art" src="${homePage.heroImage}" alt="${escapeHtml(homePage.heroAlt)}" />
            ${floatingMetricMarkup}
          </div>
          <p class="visual-caption">${escapeHtml(homePage.heroCaption)}</p>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Challenge snapshot</p>
          <h2>Why preserving cut flowers is harder than choosing a preservative recipe</h2>
          <p class="section-copy">
            We start from a straightforward premise: floral waste is real, melatonin is a
            promising anti-senescence molecule, and synthetic biology gives us a way to make and
            test that molecule in a controlled way.
          </p>
        </div>
        <div class="focus-grid">
          ${challengeMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Project flow</p>
          <h2>FloraGuard moves through four connected stages</h2>
        </div>
        <div class="flow-grid">
          ${storyFlowMarkup}
        </div>
      </section>

      <section class="editorial-band fade-card">
        <div class="editorial-figure">
          <img class="editorial-art" src="${homePage.editorialFeature.image}" alt="${escapeHtml(homePage.editorialFeature.alt)}" />
          <p class="visual-caption">${escapeHtml(homePage.editorialFeature.caption)}</p>
        </div>
        <div class="editorial-copy">
          <p class="eyebrow">${escapeHtml(homePage.editorialFeature.eyebrow)}</p>
          <h2>${escapeHtml(homePage.editorialFeature.title)}</h2>
          <p class="section-copy">${escapeHtml(homePage.editorialFeature.summary)}</p>
          <blockquote class="editorial-quote">
            <p>${escapeHtml(homePage.editorialFeature.quote)}</p>
          </blockquote>
          <div class="editorial-chip-row">
            ${editorialChipMarkup}
          </div>
          <ul class="mini-list mini-list-spacious">
            ${editorialPointMarkup}
          </ul>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Evidence</p>
          <h2>The core evidence falls into three groups</h2>
          <p class="section-copy">
            FloraGuard needs three kinds of proof: production data for melatonin biosynthesis,
            flower phenotype and vase-life results, and a clear boundary for how bounded outputs
            could be used outside the lab.
          </p>
        </div>
        <div class="evidence-grid">
          ${evidencePreviewMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Project overview</p>
          <h2>Three visual anchors carry FloraGuard from floral stress to bounded translation</h2>
          <p class="section-copy">
            The homepage keeps the floral problem, the biosynthesis route, and the implementation
            boundary visible at the same time.
          </p>
        </div>
        <div class="art-card-grid">
          ${atlasMarkup}
        </div>
      </section>

    </main>

    <footer class="site-footer">
      <p>FloraGuard links metabolic engineering, flower biology, and bounded translation across one continuous project narrative.</p>
      <p>The site follows the project from pathway design and analytical validation to flower assays, safety boundaries, and future use contexts.</p>
    </footer>
  </div>
`

initDropdownNav()
