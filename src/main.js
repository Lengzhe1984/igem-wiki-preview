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

document.title = `${siteMeta.projectName} | iGEM Wiki Draft`

const totalPages = flattenPages().length

const metricItems = [
  ...homePage.metrics,
  {
    value: String(totalPages),
    label: 'core wiki pages arranged into a reviewable FloraGuard narrative',
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
            <p class="eyebrow">Current build</p>
            <h2>What the best-performing winner wikis do well, this version now starts to emulate</h2>
          </div>
          <p class="section-copy">
            The strongest 2025 wikis consistently use a bold project-specific visual language,
            grouped navigation, large above-the-fold imagery, and long-form sections that stay
            readable because the page keeps orienting you. FloraGuard is now being pushed in that
            direction rather than staying a neutral template.
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
          <h2>Why preserving cut flowers is harder than adding preservatives</h2>
          <p class="section-copy">
            FloraGuard starts from the idea that vase life is shaped by overlapping biological,
            microbial, and environmental pressures. The site is now organized to tell that story
            from problem framing to deployable implementation.
          </p>
        </div>
        <div class="focus-grid">
          ${challengeMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Story rhythm</p>
          <h2>A winner-style homepage makes the project logic legible in four beats</h2>
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
          <p class="eyebrow">Evidence rhythm</p>
          <h2>The strongest science pages usually show where proof will land before every figure is final</h2>
          <p class="section-copy">
            FloraGuard can already reserve the right kinds of result panels now, so later we swap in real plots, photos, and prototype screenshots instead of redesigning the whole page.
          </p>
        </div>
        <div class="evidence-grid">
          ${evidencePreviewMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Reader routes</p>
          <h2>Different readers should be able to enter the FloraGuard story from different angles</h2>
          <p class="section-copy">
            Many strong team wikis are easy to browse because they quietly offer more than one reading path.
            FloraGuard now starts to do that too: one route for project logic, one for the closed-loop system,
            and one for translation into real users and deployment boundaries.
          </p>
        </div>
        <div class="content-card-grid">
          ${readerRouteMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Visual direction</p>
          <h2>Flowers, stress, and smart care should all be visible in the interface</h2>
        </div>
        <div class="showcase-grid">
          ${showcaseMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Closed-loop platform</p>
          <h2>Five layers combine to turn passive preservation into active management</h2>
        </div>
        <div class="module-grid">
          ${moduleMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Deployment rhythm</p>
          <h2>The homepage should already show how FloraGuard grows from bench proof into real care</h2>
          <p class="section-copy">
            This keeps Implementation, Safety, and Human Practices connected to the front page instead of
            feeling like late-stage appendices. The rollout logic becomes part of the project identity.
          </p>
        </div>
        <div class="flow-grid">
          ${deploymentRhythmMarkup}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Wiki map</p>
          <h2>The FloraGuard story now lives in a complete multi-page structure</h2>
        </div>
        <div class="structure-grid">
          ${groupCards}
        </div>
      </section>

      <section class="section-block split-block">
        <div>
          <div class="section-heading">
            <p class="eyebrow">Next additions</p>
            <h2>The narrative draft is ready for figures, datasets, and images</h2>
          </div>
          <p class="section-copy">
            The site now reads like a project-specific wiki rather than a placeholder scaffold.
            From here, the biggest gains will come from adding experiment timelines, quantitative
            results, hardware visuals, and stakeholder evidence without changing the overall page
            architecture again.
          </p>
        </div>
        <ul class="check-grid">
          ${nextAddMarkup}
        </ul>
      </section>
    </main>

    <footer class="site-footer">
      <p>FloraGuard is now structured as a narrative iGEM wiki draft that can absorb data, figures, and media as the project matures.</p>
      <p>This GitHub Pages build is meant for review and iteration before migration into the official competition host.</p>
    </footer>
  </div>
`

initDropdownNav()
