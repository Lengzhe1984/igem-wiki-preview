import './style.css'
import {
  dropdownNavigationMarkup,
  escapeHtml,
  flattenPages,
  homePage,
  initDropdownNav,
  pageHref,
  siteMeta,
  wikiGroups,
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

const metricMarkup = metricItems
  .map(
    (item, index) => `
      <div class="stat-card fade-card" style="--delay:${index * 55}ms">
        <strong>${escapeHtml(item.value)}</strong>
        <span>${escapeHtml(item.label)}</span>
      </div>
    `,
  )
  .join('')

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

const moduleMarkup = homePage.platformCards
  .map(
    (item, index) => `
      <article class="module-card fade-card" style="--delay:${index * 60}ms">
        <p class="card-kicker">${escapeHtml(item.kicker)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </article>
    `,
  )
  .join('')

const showcaseMarkup = homePage.showcaseCards
  .map(
    (item, index) => `
      <article class="media-card fade-card" style="--delay:${index * 70}ms">
        <img class="media-art" src="${item.image}" alt="${escapeHtml(item.alt)}" />
        <div class="media-copy">
          <p class="card-kicker">Visual anchor</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.detail)}</p>
        </div>
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

const readerRouteMarkup = homePage.readerRoutes
  .map(
    (item, index) => `
      <article class="content-card fade-card" style="--delay:${index * 65}ms">
        <p class="card-kicker">${escapeHtml(item.eyebrow)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
        <a class="page-pill" href="${pageHref(item.slug)}">${escapeHtml(item.cta)}</a>
      </article>
    `,
  )
  .join('')

const deploymentRhythmMarkup = homePage.deploymentRhythm
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

const editorialChipMarkup = homePage.editorialFeature.chips
  .map((chip) => `<span class="editorial-chip">${escapeHtml(chip)}</span>`)
  .join('')

const editorialPointMarkup = homePage.editorialFeature.points
  .map((point) => `<li>${escapeHtml(point)}</li>`)
  .join('')

const groupCards = wikiGroups
  .map(
    (group, index) => `
      <article class="structure-card fade-card" style="--delay:${index * 70}ms">
        <div class="structure-card-head">
          <p class="card-kicker">${escapeHtml(group.title)}</p>
          <p class="card-count">${group.pages.length} pages</p>
        </div>
        <h3>${escapeHtml(group.summary)}</h3>
        <div class="pill-list">
          ${group.pages
            .map(
              (page) => `
                <a class="page-pill" href="${pageHref(page.slug)}">
                  ${escapeHtml(page.navTitle ?? page.title)}
                </a>
              `,
            )
            .join('')}
        </div>
      </article>
    `,
  )
  .join('')

const nextAddMarkup = homePage.nextAdd
  .map(
    (item, index) => `
      <li class="check-item fade-card" style="--delay:${index * 55}ms">
        <span class="check-mark" aria-hidden="true"></span>
        <span>${escapeHtml(item)}</span>
      </li>
    `,
  )
  .join('')

const leadMarkup = homePage.lead
  .map((text) => `<p>${escapeHtml(text)}</p>`)
  .join('')

const statusMarkup = homePage.status
  .map((text) => `<li>${escapeHtml(text)}</li>`)
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

      <section class="section-block split-block">
        <div>
          <div class="section-heading">
            <p class="eyebrow">Project focus</p>
            <h2>FloraGuard centers on one molecule, one chassis, and one preservation question</h2>
          </div>
          <p class="section-copy">
            The homepage follows a simple scientific chain: define the post-harvest
            problem, engineer microbial melatonin production, validate that output on cut flowers,
            and translate the result through bounded product formats.
          </p>
          <ul class="mini-list mini-list-spacious">
            ${statusMarkup}
          </ul>
        </div>
        <div class="panel-stack">
          <div class="stat-grid">
            ${metricMarkup}
          </div>
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
          <p class="eyebrow">Start here</p>
          <h2>You can enter FloraGuard from the problem, the build, or the translation path</h2>
          <p class="section-copy">
            Some readers want the biological rationale first. Others want the engineering workflow
            or the real-world boundary. The site is organized so each of those entry points still
            leads back to the same core claim.
          </p>
        </div>
        <div class="content-card-grid">
          ${readerRouteMarkup}
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

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Visual direction</p>
          <h2>Flowers, pathway chemistry, and assay data stay visible throughout the site</h2>
        </div>
        <div class="showcase-grid">
          ${showcaseMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Project spine</p>
          <h2>Five layers connect the floral problem to a focused synthetic-biology proof chain</h2>
        </div>
        <div class="module-grid">
          ${moduleMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Translation path</p>
          <h2>FloraGuard moves from lab proof to bounded use in clear stages</h2>
          <p class="section-copy">
            Implementation, Safety, and Human Practices all grow out of the same bench-to-flower
            logic instead of appearing as separate add-ons.
          </p>
        </div>
        <div class="flow-grid">
          ${deploymentRhythmMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Site structure</p>
          <h2>The project is organized as a multi-page wiki</h2>
        </div>
        <div class="structure-grid">
          ${groupCards}
        </div>
      </section>

      <section class="section-block split-block">
        <div>
          <div class="section-heading">
            <p class="eyebrow">Planned figures</p>
            <h2>The next version needs data, images, and methods to match the structure already in place</h2>
          </div>
          <p class="section-copy">
            The highest-value additions are pathway diagrams, production results, flower phenotype
            figures, and stakeholder evidence. Those materials will turn this structure into a
            full scientific record.
          </p>
        </div>
        <ul class="check-grid">
          ${nextAddMarkup}
        </ul>
      </section>
    </main>

    <footer class="site-footer">
      <p>FloraGuard links metabolic engineering, flower biology, and bounded translation across one continuous wiki narrative.</p>
      <p>We use GitHub Pages to refine structure and content before moving the final version to the official iGEM host.</p>
    </footer>
  </div>
`

initDropdownNav()
