const wikiGroups = [
  {
    slug: 'project',
    title: 'Project',
    summary: 'Frame the core idea, how it evolved, and the tools that support it.',
    pages: [
      {
        slug: 'project-description',
        navTitle: 'Project Description',
        title: 'Project Description',
        summary:
          'Explain the problem, your core concept, and why this direction matters scientifically and socially.',
        sections: [
          {
            title: 'Abstract',
            guidance: 'Write a compact overview of the challenge, your solution, and the main outcome you want readers to remember.',
          },
          {
            title: 'Problem Framing',
            guidance: 'Describe the unmet need, who experiences it, and what current approaches still fail to solve.',
          },
          {
            title: 'Concept Overview',
            guidance: 'Introduce the system architecture, major biological logic, and the high-level mechanism of action.',
          },
          {
            title: 'Why This Project',
            guidance: 'Show why this topic is worth pursuing now and why your team chose this exact angle.',
          },
        ],
        checklist: [
          'One-paragraph abstract that a judge can understand quickly',
          'Clear explanation of the real-world problem',
          'Simple system overview figure or diagram',
          'Connection between the concept and the intended impact',
        ],
      },
      {
        slug: 'engineering',
        navTitle: 'Engineering',
        title: 'Engineering',
        summary:
          'Document the design-build-test-learn cycle and show how decisions changed across iterations.',
        sections: [
          {
            title: 'Design Objectives',
            guidance: 'State the constraints, performance goals, and biological design criteria that guided your engineering choices.',
          },
          {
            title: 'DBTL Cycles',
            guidance: 'Break the page into rounds of iteration so readers can see what you changed and why.',
          },
          {
            title: 'Decision Points',
            guidance: 'Highlight the moments where evidence forced you to pivot, simplify, or redesign.',
          },
          {
            title: 'Current Version',
            guidance: 'Summarize what the system looks like at the end of the season and what still remains unresolved.',
          },
        ],
        checklist: [
          'Show at least one before-and-after design change',
          'Connect each iteration to experimental evidence',
          'Include rationale, not only chronology',
          'Explain which engineering tradeoffs remain open',
        ],
      },
      {
        slug: 'model',
        navTitle: 'Model',
        title: 'Model',
        summary:
          'Use modeling to make predictions, justify design choices, or interpret system behavior.',
        sections: [
          {
            title: 'Question the Model Answers',
            guidance: 'Define the biological or design question that motivated the model in the first place.',
          },
          {
            title: 'Assumptions and Inputs',
            guidance: 'List simplifying assumptions, parameter sources, and the limits of the current approach.',
          },
          {
            title: 'Method',
            guidance: 'Explain whether the model is mechanistic, statistical, simulation-based, or a combination of approaches.',
          },
          {
            title: 'Insight Back to Design',
            guidance: 'Make explicit how the model changed experimental priorities, design choices, or interpretation.',
          },
        ],
        checklist: [
          'State the purpose of the model before the equations',
          'Include readable assumptions and data sources',
          'Show one concrete prediction or design decision',
          'Acknowledge limitations and uncertainty',
        ],
      },
      {
        slug: 'software',
        navTitle: 'Software',
        title: 'Software',
        summary:
          'Describe any computational tools, interfaces, or pipelines you built for the project or the wider community.',
        sections: [
          {
            title: 'User Need',
            guidance: 'Define who the software is for and which problem it removes or simplifies.',
          },
          {
            title: 'Feature Walkthrough',
            guidance: 'Show the main flows with screenshots, diagrams, or a lightweight product tour.',
          },
          {
            title: 'Architecture',
            guidance: 'Explain the stack, data flow, dependencies, and how the tool is structured internally.',
          },
          {
            title: 'Validation',
            guidance: 'Describe how you tested correctness, usefulness, and usability.',
          },
        ],
        checklist: [
          'Explain what the tool does in one sentence',
          'Show input and output examples',
          'Link to the repo or runnable demo if available',
          'Describe how the software contributed to the project',
        ],
      },
    ],
  },
  {
    slug: 'lab',
    title: 'Lab',
    summary: 'Organize the experimental backbone of the project from parts to outcomes.',
    pages: [
      {
        slug: 'parts',
        navTitle: 'Parts',
        title: 'Parts',
        summary:
          'Present the genetic constructs, composite parts, and design rationale behind the biological toolkit.',
        sections: [
          {
            title: 'Part Inventory',
            guidance: 'List the central parts or constructs with short annotations on their function.',
          },
          {
            title: 'Design Rationale',
            guidance: 'Explain why each part exists in the system and what role it plays in the larger architecture.',
          },
          {
            title: 'Assembly Logic',
            guidance: 'Show how parts combine into devices, modules, or pathways.',
          },
          {
            title: 'Registry and Documentation',
            guidance: 'Note what should later sync to the official parts documentation and what evidence supports each part.',
          },
        ],
        checklist: [
          'Identify the most important constructs clearly',
          'Explain why each part matters to the project',
          'Prepare diagrams or plasmid maps',
          'Link design choices to downstream experiments',
        ],
      },
      {
        slug: 'experiments',
        navTitle: 'Experiments',
        title: 'Experiments',
        summary:
          'Capture protocol logic, controls, troubleshooting, and the main workflows that drove the lab season.',
        sections: [
          {
            title: 'Experimental Plan',
            guidance: 'Summarize the major experimental streams and how they connect to your project goals.',
          },
          {
            title: 'Protocols',
            guidance: 'Document the key methods that another team would need to understand or repeat.',
          },
          {
            title: 'Controls and Quality',
            guidance: 'State what positive and negative controls you used and how you judged data quality.',
          },
          {
            title: 'Troubleshooting',
            guidance: 'Include failed conditions, bottlenecks, and how you adapted the workflow.',
          },
        ],
        checklist: [
          'Give enough detail for reproducibility',
          'Mention controls explicitly',
          'Record failed attempts that changed the plan',
          'Tie experiments back to engineering and results',
        ],
      },
      {
        slug: 'notebook',
        navTitle: 'Notebook',
        title: 'Notebook',
        summary:
          'Maintain a dated project log so the story of the season stays traceable, not reconstructed later.',
        sections: [
          {
            title: 'Timeline',
            guidance: 'Break the season into weeks or milestones and record what was attempted in each period.',
          },
          {
            title: 'Progress Notes',
            guidance: 'Capture decisions, observations, setbacks, and next steps in a concise recurring format.',
          },
          {
            title: 'Raw Context',
            guidance: 'Link to raw files, notes, images, or records that support the summary above.',
          },
          {
            title: 'Milestone Review',
            guidance: 'At key points, summarize what the team learned and what changed direction afterward.',
          },
        ],
        checklist: [
          'Use dates or milestone labels consistently',
          'Keep entries honest about unfinished work',
          'Link notable outputs and raw context',
          'Make the season legible at a glance',
        ],
      },
      {
        slug: 'results',
        navTitle: 'Results',
        title: 'Results',
        summary:
          'Curate the strongest evidence and interpretation, not just a dump of every figure produced.',
        sections: [
          {
            title: 'Headline Findings',
            guidance: 'Open with the results that matter most for the project claims or competition story.',
          },
          {
            title: 'Figures and Tables',
            guidance: 'Pair each visual with a clear caption, experimental condition, and takeaway.',
          },
          {
            title: 'Interpretation',
            guidance: 'Explain what the evidence means, what it does not mean, and where ambiguity remains.',
          },
          {
            title: 'Limitations',
            guidance: 'State the weak points honestly so the page reads as rigorous rather than promotional.',
          },
        ],
        checklist: [
          'Prioritize the figures that support the main claims',
          'Use captions that explain the result, not just the method',
          'Separate observation from interpretation',
          'Acknowledge inconclusive or partial evidence',
        ],
      },
      {
        slug: 'safety',
        navTitle: 'Safety',
        title: 'Safety',
        summary:
          'Cover laboratory safety, responsible project design, and any broader environmental or human risk considerations.',
        sections: [
          {
            title: 'Laboratory Safety',
            guidance: 'Document organisms, materials, facilities, and the training or procedures used in the lab.',
          },
          {
            title: 'Project-Specific Risks',
            guidance: 'Discuss the unique safety questions raised by the biology, delivery method, or intended use.',
          },
          {
            title: 'Mitigations',
            guidance: 'Explain how design choices, containment, or process decisions reduced risk.',
          },
          {
            title: 'Open Questions',
            guidance: 'Note what still needs further validation or regulatory consideration before real-world use.',
          },
        ],
        checklist: [
          'State the organisms and relevant biosafety context',
          'Show you considered more than routine bench safety',
          'Explain project-specific mitigations clearly',
          'Keep language concrete and evidence-based',
        ],
      },
    ],
  },
  {
    slug: 'engagement',
    title: 'Engagement',
    summary: 'Show how the project connects to people, communities, and shared knowledge outside the bench.',
    pages: [
      {
        slug: 'human-practices',
        navTitle: 'Human Practices',
        title: 'Integrated Human Practices',
        summary:
          'Show which stakeholders shaped the project and how those conversations fed back into design decisions.',
        sections: [
          {
            title: 'Stakeholder Map',
            guidance: 'Identify the people, communities, and institutions affected by or relevant to your project.',
          },
          {
            title: 'Conversations and Evidence',
            guidance: 'Summarize interviews, consultations, workshops, or advisory input with dates and purpose.',
          },
          {
            title: 'Design Changes',
            guidance: 'Make the feedback loop visible by showing how engagement altered your design or priorities.',
          },
          {
            title: 'Broader Reflection',
            guidance: 'Reflect on ethics, access, adoption, and real-world fit rather than only listing meetings.',
          },
        ],
        checklist: [
          'Document who you spoke with and why',
          'Show at least one concrete project change from feedback',
          'Address social or ethical dimensions explicitly',
          'Keep it integrated with the science, not separate from it',
        ],
      },
      {
        slug: 'education',
        navTitle: 'Education',
        title: 'Education',
        summary:
          'Present the educational activities, audiences, materials, and measurable learning impact you developed.',
        sections: [
          {
            title: 'Audience',
            guidance: 'Define who the educational work was designed for and what gap you wanted to address.',
          },
          {
            title: 'Program or Materials',
            guidance: 'Describe the workshop, campaign, lesson, event, or resources you created.',
          },
          {
            title: 'Delivery',
            guidance: 'Explain how the activity was run and what participation looked like in practice.',
          },
          {
            title: 'Impact and Iteration',
            guidance: 'Capture feedback, numbers, qualitative reactions, and what you improved after the first run.',
          },
        ],
        checklist: [
          'Clarify the target audience and learning goal',
          'Show what was actually produced or delivered',
          'Include evidence of participation or feedback',
          'Explain how you evaluated effectiveness',
        ],
      },
      {
        slug: 'contribution',
        navTitle: 'Contribution',
        title: 'Contribution',
        summary:
          'Document what your team created that can help future iGEM teams or the wider synthetic biology community.',
        sections: [
          {
            title: 'What We Contributed',
            guidance: 'State clearly what was built, written, standardized, or made reusable.',
          },
          {
            title: 'Who Can Reuse It',
            guidance: 'Identify the teams, researchers, or educators who would benefit from this contribution.',
          },
          {
            title: 'How to Use It',
            guidance: 'Provide access, instructions, dependencies, and any caveats for adoption.',
          },
          {
            title: 'Why It Matters',
            guidance: 'Explain why this is more than a side output and how it lowers effort for others.',
          },
        ],
        checklist: [
          'Name the contribution in one sentence',
          'Provide a route to reuse or replicate it',
          'Clarify who benefits from it',
          'Show why it is distinct from the rest of the project output',
        ],
      },
    ],
  },
  {
    slug: 'team',
    title: 'Team',
    summary: 'Introduce the people, support network, and credit structure behind the work.',
    pages: [
      {
        slug: 'team-members',
        navTitle: 'Team Members',
        title: 'Team',
        summary:
          'Present the members, advisors, instructors, and key roles in a way that feels like a real team page, not just a list.',
        sections: [
          {
            title: 'Core Team',
            guidance: 'List members with names, roles, and a short line that gives personality or expertise context.',
          },
          {
            title: 'PI and Advisors',
            guidance: 'Introduce scientific or institutional support and clarify each person’s role.',
          },
          {
            title: 'Instructors and Extended Support',
            guidance: 'Include the people who trained, guided, or enabled the work behind the scenes.',
          },
          {
            title: 'Team Dynamics',
            guidance: 'Optionally add a short note on how the team organized responsibilities across wet lab, dry lab, wiki, and outreach.',
          },
        ],
        checklist: [
          'List names and roles clearly',
          'Separate members from advisors and instructors',
          'Make the page feel human, not administrative only',
          'Keep role labels consistent across all profiles',
        ],
      },
      {
        slug: 'sponsors',
        navTitle: 'Sponsors & Partners',
        title: 'Sponsors & Partners',
        summary:
          'Acknowledge financial, technical, institutional, and in-kind support in a clean public-facing format.',
        sections: [
          {
            title: 'Sponsor Overview',
            guidance: 'Summarize what kinds of support made the project possible: funding, materials, mentoring, or access.',
          },
          {
            title: 'Partners',
            guidance: 'List organizations and explain the nature of each collaboration or support relationship.',
          },
          {
            title: 'Recognition',
            guidance: 'Add logos, preferred naming, and brief descriptions in a way that is readable and respectful.',
          },
          {
            title: 'Support Impact',
            guidance: 'Explain how the support affected the project rather than only placing logos on the page.',
          },
        ],
        checklist: [
          'Confirm names and logos are correct',
          'Clarify the type of support received',
          'Group partners in a readable hierarchy',
          'Acknowledge support without making the page feel like advertising',
        ],
      },
      {
        slug: 'attributions',
        navTitle: 'Attributions',
        title: 'Attributions',
        summary:
          'Be explicit about who did what, what external help was received, and which materials or code were adapted.',
        sections: [
          {
            title: 'Team Contributions',
            guidance: 'Break down major workstreams and who within the team contributed to them.',
          },
          {
            title: 'External Support',
            guidance: 'Record help from advisors, labs, institutions, or collaborators that deserves formal credit.',
          },
          {
            title: 'Borrowed Materials',
            guidance: 'Note images, code, frameworks, datasets, or templates adapted from other sources.',
          },
          {
            title: 'Licenses and Credits',
            guidance: 'Keep links, permissions, and attribution details organized so nothing is ambiguous later.',
          },
        ],
        checklist: [
          'Explain internal division of labor clearly',
          'Name outside contributors precisely',
          'Credit borrowed code, media, or references',
          'Prepare this page early enough to avoid last-minute gaps',
        ],
      },
    ],
  },
  {
    slug: 'awards',
    title: 'Awards',
    summary: 'Collect the strongest evidence and claims tied to medal criteria or special award stories.',
    pages: [
      {
        slug: 'awards',
        navTitle: 'Awards',
        title: 'Awards',
        summary:
          'Use one page to organize medal logic, award-specific evidence, and the strongest reasons your work stands out.',
        sections: [
          {
            title: 'Medal or Baseline Criteria',
            guidance: 'Summarize the broad checklist you expect the team to satisfy and where evidence lives elsewhere on the wiki.',
          },
          {
            title: 'Award Narratives',
            guidance: 'Outline the specific categories you are targeting and the central case for each one.',
          },
          {
            title: 'Evidence Map',
            guidance: 'Point readers to the exact pages, figures, and activities that support the award story.',
          },
          {
            title: 'Final Highlights',
            guidance: 'Close with the strongest takeaways that you would want judges to remember after reading the site.',
          },
        ],
        checklist: [
          'Keep the page tightly cross-linked to evidence elsewhere',
          'Avoid claiming more than the rest of the wiki proves',
          'Group award stories in a skimmable format',
          'Use this as a synthesis page, not a duplicate of every other section',
        ],
      },
    ],
  },
]

const allPages = wikiGroups.flatMap((group) =>
  group.pages.map((page) => ({
    ...page,
    groupSlug: group.slug,
    groupTitle: group.title,
  })),
)

function baseUrl() {
  return import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`
}

function pageHref(slug = '') {
  return slug ? `${baseUrl()}${slug}/` : baseUrl()
}

function getPageBySlug(slug) {
  return allPages.find((page) => page.slug === slug)
}

function getGroupForPageSlug(slug) {
  return wikiGroups.find((group) => group.pages.some((page) => page.slug === slug))
}

function flattenPages() {
  return allPages
}

function dropdownNavigationMarkup(activeSlug = '') {
  const activeGroup = getGroupForPageSlug(activeSlug)

  return wikiGroups
    .map(
      (group) => `
        <details class="nav-dropdown ${activeGroup?.slug === group.slug ? 'is-active' : ''}">
          <summary class="nav-trigger">
            <span>${group.title}</span>
            <span class="nav-caret" aria-hidden="true"></span>
          </summary>
          <div class="dropdown-menu">
            <p class="dropdown-kicker">${group.summary}</p>
            <div class="dropdown-links">
            ${group.pages
              .map(
                (page) => `
                  <a class="nav-link ${page.slug === activeSlug ? 'active' : ''}" href="${pageHref(page.slug)}">
                    ${page.navTitle ?? page.title}
                  </a>
                `,
              )
              .join('')}
          </div>
          </div>
        </details>
      `,
    )
    .join('')
}

function initDropdownNav() {
  const dropdowns = Array.from(document.querySelectorAll('.nav-dropdown'))
  if (!dropdowns.length) return

  const desktopMedia = window.matchMedia('(min-width: 961px)')

  const closeAll = (except = null) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== except) {
        dropdown.open = false
      }
    })
  }

  dropdowns.forEach((dropdown) => {
    const summary = dropdown.querySelector('summary')

    summary?.addEventListener('click', (event) => {
      if (desktopMedia.matches) {
        event.preventDefault()
        const shouldOpen = !dropdown.open
        closeAll()
        dropdown.open = shouldOpen
      }
    })

    dropdown.addEventListener('mouseenter', () => {
      if (!desktopMedia.matches) return
      closeAll(dropdown)
      dropdown.open = true
    })

    dropdown.addEventListener('mouseleave', () => {
      if (!desktopMedia.matches) return
      dropdown.open = false
    })
  })

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-nav')) {
      closeAll()
    }
  })
}

export {
  dropdownNavigationMarkup,
  flattenPages,
  getPageBySlug,
  getGroupForPageSlug,
  initDropdownNav,
  pageHref,
  wikiGroups,
}
