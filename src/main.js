import './style.css'

const phases = [
  {
    title: 'Draft',
    detail:
      'Shape structure, write placeholders, and use GitHub Pages as the public rehearsal stage.',
  },
  {
    title: 'Review',
    detail:
      'Swap in polished figures, tighten story flow, and share a stable URL with teammates.',
  },
  {
    title: 'Migrate',
    detail:
      'Move the final approved copy and assets into the official competition wiki when you are ready.',
  },
]

const modules = [
  {
    title: 'Overview',
    detail: 'Lead with a project summary, problem framing, and one strong visual anchor.',
  },
  {
    title: 'Methods',
    detail: 'Document protocols, design logic, and assumptions without waiting for the final wiki shell.',
  },
  {
    title: 'Results',
    detail: 'Stage charts, figure captions, and interpretation notes in a layout that is easy to test.',
  },
  {
    title: 'Team',
    detail: 'Prepare bios, roles, acknowledgements, and sponsor blocks before deadline week.',
  },
  {
    title: 'Media',
    detail: 'Link PDFs, posters, and slide decks from one public preview hub.',
  },
  {
    title: 'References',
    detail: 'Keep citations and outbound links tidy so the final migration takes less effort.',
  },
]

const checks = [
  'Keep everything static: HTML, CSS, JS, images, PDFs, and front-end charts.',
  'Prefer relative asset paths so the same content can move into another wiki shell later.',
  'Store source figures, slide decks, and exported PDFs alongside the site for easier review.',
  'Avoid secrets or API keys in front-end code, even for temporary preview builds.',
]

const comparison = [
  {
    label: 'GitHub Pages dry run',
    detail: 'Fast preview URLs, lightweight deployment, and easy team review on every push.',
  },
  {
    label: 'Official wiki publish',
    detail: 'Final copy, rule-compliant structure, and the host that counts for submission.',
  },
]

const routePlan = [
  'Home and project story',
  'Methods and design notes',
  'Results gallery and downloadable figures',
  'Team and acknowledgements',
]

const phaseMarkup = phases
  .map(
    ({ title, detail }, index) => `
      <article class="phase-card fade-card" style="--delay:${index * 90}ms">
        <p class="card-index">0${index + 1}</p>
        <h3>${title}</h3>
        <p>${detail}</p>
      </article>
    `,
  )
  .join('')

const moduleMarkup = modules
  .map(
    ({ title, detail }, index) => `
      <article class="module-card fade-card" style="--delay:${index * 70}ms">
        <h3>${title}</h3>
        <p>${detail}</p>
      </article>
    `,
  )
  .join('')

const checkMarkup = checks
  .map(
    (item, index) => `
      <li class="check-item fade-card" style="--delay:${index * 70}ms">
        <span class="check-mark" aria-hidden="true"></span>
        <span>${item}</span>
      </li>
    `,
  )
  .join('')

const comparisonMarkup = comparison
  .map(
    ({ label, detail }, index) => `
      <article class="comparison-card fade-card" style="--delay:${index * 80}ms">
        <p class="comparison-label">${label}</p>
        <p>${detail}</p>
      </article>
    `,
  )
  .join('')

const routeMarkup = routePlan
  .map((item) => `<li class="route-chip">${item}</li>`)
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#top">Wiki Preview Lab</a>
      <nav class="topnav" aria-label="Section navigation">
        <a href="#flow">Flow</a>
        <a href="#modules">Modules</a>
        <a href="#migration">Migration</a>
        <a href="#checklist">Checklist</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">GitHub Pages starter for project wikis</p>
          <h1>Build the public rehearsal before the official wiki.</h1>
          <p class="lede">
            Use this starter as a clean, static preview site for story flow, media layout,
            and last-mile review. When the content feels right, migrate the polished version
            into the final wiki host.
          </p>
          <div class="badge-row" aria-label="starter highlights">
            <span>Local dev</span>
            <span>GitHub Pages deploy</span>
            <span>PDF and slide friendly</span>
            <span>Easy to migrate later</span>
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="#flow">See the publishing flow</a>
            <a class="button button-secondary" href="#modules">Plan page modules</a>
          </div>
        </div>

        <aside class="hero-panel fade-card" style="--delay:120ms">
          <p class="panel-label">Recommended first passes</p>
          <ul class="panel-list">
            <li>Replace placeholder copy section by section.</li>
            <li>Drop exported charts, PDFs, and decks into a stable review layout.</li>
            <li>Use GitHub Pages URLs for external feedback before the final migration.</li>
          </ul>
          <div class="route-plan">
            <p class="panel-label muted">Suggested page plan</p>
            <ul class="route-list">
              ${routeMarkup}
            </ul>
          </div>
        </aside>
      </section>

      <section class="panel" id="flow">
        <div class="section-heading">
          <p class="eyebrow">Publishing flow</p>
          <h2>A smoother path from draft to public preview</h2>
        </div>
        <div class="phase-grid">
          ${phaseMarkup}
        </div>
      </section>

      <section class="content-split">
        <section class="panel" id="modules">
          <div class="section-heading">
            <p class="eyebrow">Wiki modules</p>
            <h2>Build your structure before the final deadline crunch</h2>
          </div>
          <div class="module-grid">
            ${moduleMarkup}
          </div>
        </section>

        <section class="panel panel-accent" id="migration">
          <div class="section-heading">
            <p class="eyebrow">Migration notes</p>
            <h2>Design for an easy handoff later</h2>
          </div>
          <div class="comparison-grid">
            ${comparisonMarkup}
          </div>
          <p class="migration-note">
            Keep assets organized and avoid server-only features. That makes it much easier
            to transfer pages into a competition-managed wiki when the final version is ready.
          </p>
        </section>
      </section>

      <section class="panel" id="checklist">
        <div class="section-heading">
          <p class="eyebrow">Content checklist</p>
          <h2>Good habits for a static preview repo</h2>
        </div>
        <ul class="check-grid">
          ${checkMarkup}
        </ul>
      </section>
    </main>

    <footer class="footer">
      <p>Built with Vite and configured for GitHub Pages via GitHub Actions.</p>
      <p>Use this repo as the rehearsal space, then migrate the polished content into the official wiki.</p>
    </footer>
  </div>
`
