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

const metricMarkup = [
  ...homePage.metrics,
  {
    value: String(totalPages),
    label: 'core wiki pages arranged into a reviewable FloraGuard narrative',
  },
]
  .map(
    (item, index) => `
      <div class="stat-card fade-card" style="--delay:${index * 55}ms">
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

      <a class="reference-link" href="${pageHref('references')}">References</a>
    </header>

    <main class="home-main">
      <section class="hero-shell">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(homePage.eyebrow)}</p>
          <h1>${escapeHtml(siteMeta.projectName)}</h1>
          <p class="project-subtitle">${escapeHtml(siteMeta.subtitle)}</p>
          <div class="intro-stack">
            ${leadMarkup}
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="${pageHref('project-description')}">Open Project Description</a>
            <a class="button button-secondary" href="${pageHref('design')}">Open Design</a>
          </div>
        </div>

        <aside class="hero-side">
          <figure class="media-frame">
            <img class="hero-art" src="${homePage.heroImage}" alt="${escapeHtml(homePage.heroAlt)}" />
            <figcaption class="visual-caption">${escapeHtml(homePage.heroCaption)}</figcaption>
          </figure>
          <p class="panel-kicker">Current build</p>
          <div class="stat-grid">
            ${metricMarkup}
          </div>
          <ul class="mini-list">
            ${statusMarkup}
          </ul>
        </aside>
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
