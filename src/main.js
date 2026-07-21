import '@tabler/icons-webfont/dist/tabler-icons.min.css'
import './style.css'
import { escapeHtml, pageHref } from './site-data.js'

import brandBlock from './assets/home-2026/brand-block.png'
import heroBouquet from './assets/home-2026/hero-bouquet.png'
import challengeFarm from './assets/home-2026/challenge-farm.png'
import challengeTransport from './assets/home-2026/challenge-transport.png'
import challengeWholesale from './assets/home-2026/challenge-wholesale.png'
import challengeFlorist from './assets/home-2026/challenge-florist.png'
import challengeConsumer from './assets/home-2026/challenge-consumer.png'
import solutionApplication from './assets/home-2026/solution-application.png'
import solutionVase from './assets/home-2026/solution-vase.png'
import sdg2 from './assets/home-2026/sdg-2.png'
import sdg12 from './assets/home-2026/sdg-12.png'
import sdg13 from './assets/home-2026/sdg-13.png'
import sdg15 from './assets/home-2026/sdg-15.png'
import footerIgem from './assets/home-2026/footer-igem.png'
import goalFloralLine from './assets/home-2026/goal-floral-line.png'
import impactFlower from './assets/home-2026/impact-flower.png'
import leafLeftMid from './assets/home-2026/leaf-left-mid.png'
import leafLeftLow from './assets/home-2026/leaf-left-low.png'
import leafRightBottom from './assets/home-2026/leaf-right-bottom.png'
import solutionMelatoninIcon from './assets/home-2026/solution-melatonin.png'
import solutionMicroorganismIcon from './assets/home-2026/solution-microorganism.png'
import solutionPurificationIcon from './assets/home-2026/solution-purification.png'
import statSpeciesIcon from './assets/home-2026/stat-species.png'
import statVaseLifeIcon from './assets/home-2026/stat-vase-life.png'
import statWiltingIcon from './assets/home-2026/stat-wilting.png'
import valueCommunityIcon from './assets/home-2026/value-community.png'
import valueGlobalIcon from './assets/home-2026/value-global.png'
import valuePostharvestIcon from './assets/home-2026/value-postharvest.png'
import valueSustainableIcon from './assets/home-2026/value-sustainable.png'

document.body.dataset.screen = 'flowever-home'
document.title = 'Flowever | iGEM Wiki'

const navGroups = [
  {
    label: 'Project',
    items: [
      { label: 'Project Description', href: pageHref('project-description') },
      { label: 'Problem & Inspiration', href: pageHref('problem-inspiration') },
    ],
  },
  {
    label: 'Research',
    items: [
      { label: 'Wet Lab', href: pageHref('wet-lab') },
      { label: 'Dry Lab', href: pageHref('dry-lab') },
    ],
  },
  {
    label: 'Engineering',
    items: [
      { label: 'Design', href: pageHref('design') },
      { label: 'Engineering (DBTL)', href: pageHref('engineering') },
      { label: 'Hardware', href: pageHref('hardware') },
    ],
  },
  {
    label: 'Results',
    items: [
      { label: 'Wet Lab Results', href: pageHref('wet-lab') },
      { label: 'Dry Lab Results', href: pageHref('dry-lab') },
      { label: 'Implementation', href: pageHref('implementation') },
    ],
  },
  {
    label: 'Human Practices',
    items: [
      { label: 'Human Practices', href: pageHref('integrated-human-practices') },
      { label: 'Safety', href: pageHref('safety') },
    ],
  },
  {
    label: 'Team',
    href: pageHref('team'),
  },
  {
    label: 'More',
    items: [
      { label: 'Contribution', href: pageHref('contribution') },
      { label: 'References', href: pageHref('references') },
      { label: 'Application Support', href: pageHref('hardware') },
    ],
  },
]

const valueCards = [
  {
    image: valueSustainableIcon,
    title: 'Sustainable Solutions',
    detail: 'Biotechnology for a greener future',
  },
  {
    image: valuePostharvestIcon,
    title: 'Postharvest Impact',
    detail: 'Reducing waste, increasing value',
  },
  {
    image: valueCommunityIcon,
    title: 'Better Blooms for Everyone',
    detail: 'From farm to home, we care for every bloom',
  },
  {
    image: valueGlobalIcon,
    title: 'Global Responsibility',
    detail: 'Contributing to SDGs and a better world',
  },
]

const stats = [
  {
    value: '40–50%',
    label: 'of cut flowers are lost after harvest.',
    note: 'Source: FAO',
  },
  {
    value: '6',
    label: 'Flower species tested',
    iconImage: statSpeciesIcon,
  },
  {
    value: '+43%',
    label: 'Increase in vase life',
    iconImage: statVaseLifeIcon,
  },
  {
    value: '32%',
    label: 'Reduction in wilting',
    iconImage: statWiltingIcon,
  },
]

const challengeSteps = [
  { image: challengeFarm, title: 'Farm', loss: '5–10% loss' },
  { image: challengeTransport, title: 'Transport', loss: '10–15% loss' },
  { image: challengeWholesale, title: 'Wholesale', loss: '10–15% loss' },
  { image: challengeFlorist, title: 'Florist', loss: '10–20% loss' },
  { image: challengeConsumer, title: 'Consumer', loss: '5–10% loss' },
]

const solutionSteps = [
  {
    type: 'art',
    image: solutionMicroorganismIcon,
    title: 'Engineered Microorganism',
    detail: 'E. coli optimized for melatonin production',
  },
  {
    type: 'art',
    image: solutionMelatoninIcon,
    title: 'Melatonin Production',
    detail: 'Efficient fermentation and biosynthesis',
  },
  {
    type: 'art',
    image: solutionPurificationIcon,
    title: 'Purification',
    detail: 'High-purity melatonin for safe application',
  },
  {
    type: 'image',
    image: solutionApplication,
    title: 'Application to Cut Flowers',
    detail: 'Simple treatment, significant protection',
  },
  {
    type: 'image',
    image: solutionVase,
    title: 'Longer Vase Life',
    detail: 'Healthier, fresher flowers for longer',
  },
]

const sdgCards = [
  {
    image: sdg2,
    title: 'Reducing postharvest losses and improving resource efficiency',
  },
  {
    image: sdg12,
    title: 'Promoting sustainable production and reducing waste',
  },
  {
    image: sdg13,
    title: 'Lowering carbon footprint across the floral supply chain',
  },
  {
    image: sdg15,
    title: 'Protecting ecosystems through sustainable agricultural practices',
  },
]

const footerQuickLinks = [
  { label: 'Project', href: pageHref('project-description') },
  { label: 'Research', href: pageHref('wet-lab') },
  { label: 'Engineering', href: pageHref('design') },
  { label: 'Results', href: pageHref('implementation') },
  { label: 'Human Practices', href: pageHref('integrated-human-practices') },
  { label: 'Team', href: pageHref('team') },
]

const footerResources = [
  { label: 'Protocols', href: pageHref('wet-lab') },
  { label: 'Parts', href: pageHref('design') },
  { label: 'Notebook', href: pageHref('engineering') },
  { label: 'Publications', href: pageHref('references') },
  { label: 'Attributions', href: pageHref('contribution') },
  { label: 'Safety', href: pageHref('safety') },
]

const footerDownloads = [
  'Poster (PDF)',
  'Presentation (PPT)',
  'Brochure (PDF)',
  'Datasheets',
]

const navMarkup = navGroups
  .map((group) => {
    if (group.href) {
      return `<a class="flow-nav-link" href="${group.href}">${escapeHtml(group.label)}</a>`
    }

    return `
      <details class="flow-nav-dropdown">
        <summary class="flow-nav-link">
          <span>${escapeHtml(group.label)}</span>
          <i class="ti ti-chevron-down"></i>
        </summary>
        <div class="flow-nav-menu">
          ${group.items
            .map(
              (item) => `
                <a class="flow-nav-menu-link" href="${item.href}">
                  ${escapeHtml(item.label)}
                </a>
              `,
            )
            .join('')}
        </div>
      </details>
    `
  })
  .join('')

const valueMarkup = valueCards
  .map(
    (item) => `
      <article class="flow-value-card">
        <div class="flow-value-icon">
          <img src="${item.image}" alt="" aria-hidden="true" />
        </div>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.detail)}</p>
        </div>
      </article>
    `,
  )
  .join('')

const statsMarkup = stats
  .map(
    (item) => `
      <article class="flow-stat-card">
        ${
          item.iconImage
            ? `
              <div class="flow-stat-head">
                <img class="flow-stat-icon" src="${item.iconImage}" alt="" aria-hidden="true" />
                <strong>${escapeHtml(item.value)}</strong>
              </div>
            `
            : `<strong>${escapeHtml(item.value)}</strong>`
        }
        <p>${escapeHtml(item.label)}</p>
        ${item.note ? `<span>${escapeHtml(item.note)}</span>` : ''}
      </article>
    `,
  )
  .join('')

const challengeMarkup = challengeSteps
  .map(
    (item, index) => `
      <article class="flow-stage-card">
        <div class="flow-stage-circle">
          <img src="${item.image}" alt="${escapeHtml(item.title)} stage" />
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.loss)}</p>
        ${index < challengeSteps.length - 1 ? '<span class="flow-stage-arrow">→</span>' : ''}
      </article>
    `,
  )
  .join('')

const solutionMarkup = solutionSteps
  .map(
    (item, index) => `
      <article class="flow-solution-card">
        <div class="flow-solution-circle${item.type === 'art' ? ' flow-solution-circle-art' : ''}">
          ${
            item.type === 'image' || item.type === 'art'
              ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" />`
              : ''
          }
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
        ${index < solutionSteps.length - 1 ? '<span class="flow-stage-arrow">→</span>' : ''}
      </article>
    `,
  )
  .join('')

const sdgMarkup = sdgCards
  .map(
    (item) => `
      <article class="flow-sdg-card">
        <img src="${item.image}" alt="${escapeHtml(item.title)}" />
        <p>${escapeHtml(item.title)}</p>
      </article>
    `,
  )
  .join('')

const footerLinkMarkup = (items) =>
  items
    .map(
      (item) => `
        <li>
          <a href="${item.href}">${escapeHtml(item.label)}</a>
        </li>
      `,
    )
    .join('')

const footerDownloadMarkup = footerDownloads
  .map(
    (item) => `
      <li>
        <a href="#">${escapeHtml(item)}</a>
      </li>
    `,
  )
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="flow-home-shell">
    <img class="flow-deco flow-deco-left-mid" src="${leafLeftMid}" alt="" aria-hidden="true" />
    <img class="flow-deco flow-deco-left-low" src="${leafLeftLow}" alt="" aria-hidden="true" />
    <img class="flow-deco flow-deco-right-bottom" src="${leafRightBottom}" alt="" aria-hidden="true" />

    <header class="flow-site-header">
      <a class="flow-brand" href="${pageHref()}">
        <img src="${brandBlock}" alt="Flowever iGEM 2026" />
      </a>

      <nav class="flow-nav" aria-label="Primary">
        <a class="flow-nav-link flow-nav-link-active" href="${pageHref()}">Home</a>
        ${navMarkup}
      </nav>

      <button class="flow-lang-switch" type="button" aria-label="Language">
        <i class="ti ti-world"></i>
        <span>EN</span>
      </button>
    </header>

    <main class="flow-home-main">
      <section class="flow-hero">
        <aside class="flow-hero-rail" aria-hidden="true">
          <div class="flow-hero-rail-block">
            <span>SYNTHETIC BIOLOGY</span>
          </div>
          <div class="flow-hero-rail-block">
            <span>FOR POSTHARVEST AGRICULTURE</span>
          </div>
        </aside>

        <div class="flow-hero-copy">
          <h1>Extending Life<br />Beyond Harvest</h1>
          <p>
            Engineering microbial melatonin for
            sustainable postharvest agriculture.
          </p>
          <div class="flow-hero-divider" aria-hidden="true"></div>
          <div class="flow-hero-actions">
            <a class="flow-button flow-button-primary" href="${pageHref('project-description')}">
              <i class="ti ti-leaf"></i>
              <span>Explore Our Project</span>
            </a>
            <a class="flow-button flow-button-secondary" href="${pageHref('project-description')}#our-working-hypothesis">
              <i class="ti ti-eye"></i>
              <span>Our Vision</span>
            </a>
          </div>
        </div>

        <div class="flow-hero-visual">
          <img src="${heroBouquet}" alt="Bouquet hero visual for Flowever" />
        </div>
      </section>

      <section class="flow-values-strip">
        ${valueMarkup}
      </section>

      <section class="flow-stats-band">
        <div class="flow-stats-grid">
          ${statsMarkup}
        </div>
        <aside class="flow-goal-card">
          <div>
            <p class="flow-section-kicker">Our Goal</p>
            <p>
              Build a sustainable solution
              for postharvest agriculture
              through synthetic biology.
            </p>
          </div>
          <img src="${goalFloralLine}" alt="" aria-hidden="true" />
        </aside>
      </section>

      <section class="flow-story-section">
        <div class="flow-story-intro">
          <p class="flow-section-kicker">THE CHALLENGE</p>
          <h2>A long journey,<br />with too much loss.</h2>
          <p>
            From farm to vase, flowers face many stresses. Postharvest losses not only
            waste natural resources, but also affect livelihoods and the environment.
          </p>
          <a class="flow-text-link" href="${pageHref('problem-inspiration')}">Learn More</a>
        </div>

        <div class="flow-story-track">
          <div class="flow-stage-row">
            ${challengeMarkup}
          </div>
          <aside class="flow-story-note">
            <p>
              Flowever aims to
              break this cycle and
              protect the beauty
              of flowers after
              harvest.
            </p>
          </aside>
        </div>
      </section>

      <section class="flow-solution-section">
        <div class="flow-story-intro">
          <p class="flow-section-kicker">OUR SOLUTION</p>
          <h2>Synthetic biology<br />for longer blooms.</h2>
          <p>
            We engineer microbes to produce melatonin, a natural molecule that helps flowers
            resist stress and delay senescence.
          </p>
          <a class="flow-text-link" href="${pageHref('design')}">Learn More</a>
        </div>

        <div class="flow-solution-track">
          ${solutionMarkup}
        </div>
      </section>

      <section class="flow-impact-section">
        <div class="flow-story-intro">
          <p class="flow-section-kicker">BEYOND FLOWERS, BEYOND TODAY</p>
          <p>
            Flowever contributes to a more sustainable future through science and responsibility.
          </p>
          <a class="flow-text-link" href="${pageHref('contribution')}">Our Impact</a>
        </div>

        <div class="flow-sdg-grid">
          ${sdgMarkup}
        </div>

        <aside class="flow-impact-note">
          <img src="${impactFlower}" alt="White flower impact visual" />
          <p>
            Science for
            Beauty.
            Care for
            the Earth.
          </p>
        </aside>
      </section>
    </main>

    <footer class="flow-footer">
      <div class="flow-footer-brand">
        <img src="${brandBlock}" alt="Flowever iGEM 2026" />
        <p>
          Engineering biology for postharvest agriculture.
          Extending life, reducing waste, creating a sustainable future.
        </p>
        <div class="flow-socials">
          <a href="#" aria-label="GitHub"><i class="ti ti-brand-github"></i></a>
          <a href="#" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i class="ti ti-brand-youtube"></i></a>
        </div>
      </div>

      <div class="flow-footer-column">
        <h3>QUICK LINKS</h3>
        <ul>
          ${footerLinkMarkup(footerQuickLinks)}
        </ul>
      </div>

      <div class="flow-footer-column">
        <h3>RESOURCES</h3>
        <ul>
          ${footerLinkMarkup(footerResources)}
        </ul>
      </div>

      <div class="flow-footer-column">
        <h3>DOWNLOADS</h3>
        <ul>
          ${footerDownloadMarkup}
        </ul>
      </div>

      <div class="flow-footer-column flow-footer-contact">
        <h3>CONTACT</h3>
        <ul>
          <li><i class="ti ti-mail"></i><a href="mailto:contact@flowever-igem.org">contact@flowever-igem.org</a></li>
          <li><i class="ti ti-map-pin"></i><span>Beijing, China</span></li>
        </ul>
      </div>

      <div class="flow-footer-igem">
        <img src="${footerIgem}" alt="iGEM logo" />
      </div>
    </footer>

    <div class="flow-footer-bar">
      <span>© 2026 Flowever (iGEM Team). All rights reserved.</span>
    </div>
  </div>
`

function initHomeNav() {
  const dropdowns = [...document.querySelectorAll('.flow-nav-dropdown')]
  if (!dropdowns.length) return

  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Element)) return

    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(target)) {
        dropdown.removeAttribute('open')
      }
    })
  })
}

initHomeNav()
