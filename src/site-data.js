import floralBenchToFlowerArt from './assets/floraguard-bench-to-flower.svg'
import floralStressArt from './assets/floral-stress.svg'
import floralLabArt from './assets/floral-lab.svg'
import floralNotesArt from './assets/floral-notes.svg'
import floralSupplyChainArt from './assets/floral-supply-chain.svg'
import floralWetLabArt from './assets/floral-wet-lab.svg'
import floralDryLabArt from './assets/floral-dry-lab.svg'
import floralStakeholderMapArt from './assets/floral-stakeholder-map.svg'
import floralTeamCollageArt from './assets/floral-team-collage.svg'
import floralReferenceMapArt from './assets/floral-reference-map.svg'
import floralPhenotypeBoardArt from './assets/floral-phenotype-board.svg'
import floralHardwareBlueprintArt from './assets/floral-hardware-blueprint.svg'
import floralPathwayBoardArt from './assets/floral-pathway-board.svg'
import floralFermentationBoardArt from './assets/floral-fermentation-board.svg'
import floralBoundedFormatsArt from './assets/floral-bounded-formats.svg'
import floralTeamNetworkArt from './assets/floral-team-network.svg'
import floralModelDecisionBoardArt from './assets/floral-model-decision-board.svg'
import floralInterviewWallArt from './assets/floral-interview-wall.svg'
import floralProjectProofMapArt from './assets/floral-project-proof-map.svg'
import floralConstructPackageArt from './assets/floral-construct-package.svg'
import floralWetlabEvidencePackArt from './assets/floral-wetlab-evidence-pack.svg'
import floralFeedbackRevisionMapArt from './assets/floral-feedback-revision-map.svg'

const paragraph = (text) => ({ type: 'paragraph', text })
const list = (items, style = 'unordered') => ({ type: 'list', items, style })
const table = (columns, rows) => ({ type: 'table', columns, rows })
const callout = (text) => ({ type: 'callout', text })
const references = (items) => ({ type: 'references', items })

const siteMeta = {
  projectName: 'FloraGuard',
  subtitle: 'Engineered E. coli Melatonin Biosynthesis for Cut Flower Preservation',
  deck:
    'A multi-page iGEM wiki focused on producing melatonin with engineered E. coli, verifying the pathway analytically, and testing whether that product can extend cut-flower vase life.',
}

const homePage = {
  eyebrow: 'Synthetic biology for floral post-harvest care',
  heroImage: floralBenchToFlowerArt,
  heroAlt:
    'Illustrated bench-to-flower workflow showing route engineering, fermentation, and cut-flower validation.',
  heroCaption:
    'From pathway design to flower assays, FloraGuard asks whether microbial melatonin can become a practical preservation strategy.',
  lead: [
    'Cut flowers lose value quickly after harvest. Dehydration, oxidative stress, hormone imbalance, and handling variability all push the bouquet toward senescence long before consumers think the flowers are old.',
    'In practice, preservation still relies on sugar solutions, preservatives, and cold storage. Those approaches help, but they do not tell us much about the biology of decline or how to intervene more precisely.',
    'We chose melatonin as a single molecular target and built FloraGuard around three linked questions: can engineered Escherichia coli make it, can we verify that production analytically, and does that product help cut flowers last longer?',
  ],
  status: [
    'We design and optimize a melatonin pathway in E. coli.',
    'We verify production before making preservation claims.',
    'We only discuss downstream use through purified or otherwise bounded outputs.',
  ],
  metrics: [
    {
      value: '1',
      label: 'core molecule, melatonin, anchors the whole project from metabolic engineering to preservation outcome',
    },
    {
      value: '3',
      label: 'proof layers: production, quantification, and cut-flower application',
    },
  ],
  challengeCards: [
    {
      title: 'Floral waste accumulates fast',
      detail:
        'A bouquet can lose market value in just a few days, and much of that loss happens during transport, storage, and retail display rather than at home.',
    },
    {
      title: 'Current preservation is mostly static',
      detail:
        'Sugar solutions, antimicrobials, and refrigeration help in some settings, but they do not create a biologically programmable preservation workflow.',
    },
    {
      title: 'Melatonin is promising but supply and format matter',
      detail:
        'Melatonin appears repeatedly in the literature as a stress-buffering molecule, but using it well still requires a reliable source, a measurable dose, and a realistic application format.',
    },
    {
      title: 'Translation needs bounded outputs',
      detail:
        'Pathway engineering is only half the project. We also need to show how any useful output could be delivered without putting engineered microbes into the floral chain.',
    },
  ],
  platformCards: [
    {
      kicker: 'Frame',
      title: 'Define the floral problem',
      detail:
        'Anchor the project in cut-flower waste, short vase life, and the limitations of passive preservative strategies.',
    },
    {
      kicker: 'Engineer',
      title: 'Build a microbial melatonin pathway',
      detail:
        'Use engineered E. coli as the chassis for biosynthesizing melatonin from a tractable metabolic route.',
    },
    {
      kicker: 'Verify',
      title: 'Quantify the product',
      detail:
        'Use analytical readouts to confirm whether pathway design and optimization actually increase melatonin output.',
    },
    {
      kicker: 'Validate',
      title: 'Test cut-flower preservation',
      detail:
        'Apply melatonin-centered formulations or purified outputs to flowers and measure vase life, ROS burden, and visible senescence.',
    },
    {
      kicker: 'Translate',
      title: 'Plan safe real-world formats',
      detail:
        'Frame future implementation around purified or otherwise bounded products rather than direct environmental release of living engineered cells.',
    },
  ],
  showcaseCards: [
    {
      image: floralStressArt,
      alt: 'Illustrated contrast between fresh and stressed flowers.',
      title: 'The floral problem remains the reason this project matters',
      detail:
        'Dehydration, ROS accumulation, and post-harvest handling still define the problem. Without that floral context, the biosynthesis work would have no clear application target.',
    },
    {
      image: floralFermentationBoardArt,
      alt: 'Illustrated fermentation and validation board linking construct design to flower readout.',
      title: 'Production proof connects construct design to flower readout',
      detail:
        'The point is not simply to apply melatonin. The point is to connect route construction, fermentation output, and flower validation as one experimental chain.',
    },
  ],
  atlasCards: [
    {
      image: floralSupplyChainArt,
      alt: 'Illustrated flower supply chain showing where senescence pressure accumulates.',
      label: 'Problem',
      title: 'Stress starts before flowers reach the vase',
      detail:
        'Post-harvest stress accumulates across harvest, transport, storage, and retail display before flowers ever reach home care.',
    },
    {
      image: floralPathwayBoardArt,
      alt: 'Illustrated board linking pathway logic, analytical output, and decision windows.',
      label: 'Science',
      title: 'Pathway design and quantification sit at the center of FloraGuard',
      detail:
        'FloraGuard is first a metabolic-engineering project and then a preservation application project.',
    },
    {
      image: floralBoundedFormatsArt,
      alt: 'Illustrated staged rollout from lab work to bounded application formats.',
      label: 'Translation',
      title: 'Implementation focuses on bounded product formats',
      detail:
        'The project emphasizes purified products, florist-facing pilots, and careful translation rather than live-cell deployment.',
    },
  ],
  storyFlow: [
    {
      step: '01',
      title: 'Define the senescence problem',
      detail:
        'Show why floral waste is driven by ROS, dehydration, and post-harvest stress rather than simple neglect alone.',
    },
    {
      step: '02',
      title: 'Engineer melatonin biosynthesis',
      detail:
        'Design a melatonin route in E. coli and treat pathway construction as the primary synthetic-biology task.',
    },
    {
      step: '03',
      title: 'Measure whether the chassis works',
      detail:
        'Use production data and optimization logic to decide whether the pathway is viable enough for preservation testing.',
    },
    {
      step: '04',
      title: 'Validate and translate carefully',
      detail:
        'Apply the product to cut flowers, measure biological effect, and frame future use around non-release formats.',
    },
  ],
  editorialFeature: {
    eyebrow: 'Project focus',
    title: 'One molecule links the whole FloraGuard project',
    summary:
      'Instead of combining many preservation ideas at once, we built FloraGuard around one molecule and one question: can microbial melatonin production be turned into a measurable preservation strategy for cut flowers?',
    quote:
      'If FloraGuard works, the same melatonin signal should appear in the fermenter, in the assay, and in the flower.',
    image: floralSupplyChainArt,
    alt:
      'Illustrated supply chain art showing cut flowers moving through harvest, transport, and care contexts.',
    caption:
      'FloraGuard links floral waste, microbial production, and application testing in one argument.',
    chips: ['Cut flowers', 'Melatonin', 'E. coli chassis', 'Bounded translation'],
    points: [
      'The application problem is cut-flower loss.',
      'The engineering task is microbial melatonin production.',
      'Any downstream use stays within bounded, non-release formats.',
    ],
  },
  evidencePreview: [
    {
      label: 'Production proof',
      title: 'Construct maps, titers, and bottleneck data establish the build',
      detail:
        'These figures need to show what we built, what changed across iterations, and which changes actually improved output.',
    },
    {
      label: 'Application proof',
      title: 'Flower images and vase-life data show whether melatonin matters',
      detail:
        'Readers need both the visible phenotype and the quantitative result to judge whether the treatment is worth taking seriously.',
    },
    {
      label: 'Translation proof',
      title: 'Safety and implementation define how a bounded product could be used',
      detail:
        'Any future application has to be framed around purified or otherwise controlled outputs, not live environmental release.',
    },
  ],
  readerRoutes: [
    {
      eyebrow: 'Science frame',
      title: 'Start with the project question and why melatonin is the chosen preservation lever',
      detail:
        'Project Description and Problem & Inspiration explain the floral problem, the limits of current preservation, and why melatonin became the centerpiece.',
      slug: 'project-description',
      cta: 'Read the scientific frame',
    },
    {
      eyebrow: 'Build logic',
      title: 'Follow the pathway from chassis design to flower validation',
      detail:
        'Design, Engineering, Wet Lab, and Dry Lab together show how FloraGuard moves from metabolic engineering to measurable floral outcome.',
      slug: 'design',
      cta: 'Trace the build path',
    },
    {
      eyebrow: 'Translation',
      title: 'Jump ahead to safety, stakeholders, and future product formats',
      detail:
        'Human Practices, Safety, and Implementation explain how the project could leave the lab without leaving behind biosafety and real-world constraints.',
      slug: 'integrated-human-practices',
      cta: 'See the translation path',
    },
  ],
  deploymentRhythm: [
    {
      step: 'A',
      title: 'Build the route',
      detail:
        'Select a melatonin biosynthesis pathway, choose the chassis, and identify the enzymatic steps most likely to limit output.',
    },
    {
      step: 'B',
      title: 'Optimize production',
      detail:
        'Use fermentation, precursor, and cofactor logic to push the pathway toward analytically visible melatonin production.',
    },
    {
      step: 'C',
      title: 'Validate on flowers',
      detail:
        'Compare controls and treatment groups with phenotype images, ROS-associated readouts, and vase-life measurements.',
    },
    {
      step: 'D',
      title: 'Translate responsibly',
      detail:
        'Move toward purified or bounded product formats and keep stakeholder and safety constraints visible from the start.',
    },
  ],
  nextAdd: [
    'Construct maps and pathway diagrams for the engineered E. coli chassis',
    'Melatonin production plots, chromatograms, or other analytical confirmation figures',
    'Flower phenotype timelines and vase-life comparison photos',
    'Stakeholder quotes and use-case evidence for florist-facing preservation scenarios',
  ],
}

const wikiGroups = [
  {
    slug: 'project',
    title: 'Project',
    summary:
      'Explain why microbial melatonin production is the scientific core of FloraGuard.',
    pages: [
      {
        slug: 'project-description',
        navTitle: 'Project Description',
        title: 'Project Description',
        summary:
          'FloraGuard proposes using engineered E. coli to biosynthesize melatonin and testing that product as a cut-flower preservation strategy.',
        highlights: [
          'The project links metabolic engineering, analytics, and floral application in one workflow.',
          'Melatonin is chosen because it is repeatedly associated with antioxidant buffering and delayed senescence.',
          'The implementation path favors purified or otherwise bounded outputs rather than live release.',
        ],
        nextAdd: [
          'A route-specific construct diagram with actual gene order and plasmid context',
          'Analytical figures showing melatonin detection, standards, and representative output',
          'Species-linked flower results with time-course images and vase-life statistics',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'project',
            eyebrow: 'Project frame',
            title: 'We start from floral waste and ask whether a microbial product can change that outcome',
            image: floralSupplyChainArt,
            alt:
              'Illustrated floral supply chain showing where value is lost before flowers reach consumers.',
            caption:
              'Floral loss is the application problem; microbial melatonin production is the engineering response.',
            lede:
              'We start from a post-harvest problem and turn it into a synthetic-biology question: can we make melatonin in a controllable chassis and show that it improves flower performance?',
            points: [
              'Cut-flower loss begins before retail display.',
              'Melatonin gives the project a specific biological target.',
              'Flower testing remains part of the core proof chain.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'Project logic',
            title: 'FloraGuard rests on three connected questions',
            items: [
              {
                label: 'Problem layer',
                value: '01',
                detail: 'Cut flowers senesce rapidly, and current preservation is often static and species-dependent.',
              },
              {
                label: 'Engineering layer',
                value: '02',
                detail: 'Engineered E. coli is used to biosynthesize melatonin as a preservation-active molecule.',
              },
              {
                label: 'Validation layer',
                value: '03',
                detail: 'The produced or formulated melatonin is tested on flowers through phenotype and vase-life measurements.',
              },
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Project scope',
            title: 'What makes FloraGuard more focused',
            items: [
              {
                title: 'Conventional preservation framing',
                detail: 'A broad preservation concept can mix many ideas at once and make it harder to define one clean engineering target.',
              },
              {
                title: 'FloraGuard framing',
                detail: 'FloraGuard centers on one molecule, one chassis, and one translational question: can engineered melatonin production improve cut-flower preservation in a measurable way?',
              },
            ],
          },
          {
            type: 'art-card-grid',
            eyebrow: 'Proof package',
            title: 'Three figure families hold the whole project together',
            items: [
              {
                image: floralProjectProofMapArt,
                alt: 'Illustrated project proof map connecting floral problem, microbial production, and flower validation.',
                label: 'Overview',
                title: 'One map keeps the whole claim legible',
                detail:
                  'The introduction works best when readers can see the problem, the build, and the final flower outcome in a single frame.',
              },
              {
                image: floralPathwayBoardArt,
                alt: 'Illustrated pathway board previewing the melatonin route and optimization logic.',
                label: 'Build',
                title: 'Route logic belongs in the introduction too',
                detail:
                  'Project Description should preview how melatonin is made before the reader reaches the detailed design chapter.',
              },
              {
                image: floralPhenotypeBoardArt,
                alt: 'Illustrated phenotype board showing day-by-day flower outcome.',
                label: 'Outcome',
                title: 'The flower readout has to stay visible from the start',
                detail:
                  'This project is persuasive only if the introduction already makes clear that floral phenotype is the final test.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Background',
            title: 'Cut flowers deteriorate quickly after harvest',
            blocks: [
              paragraph(
                'The global cut flower industry depends on keeping harvested flowers visually attractive during transport, retail display, and home use. Yet once flowers are detached from the plant, senescence accelerates because water balance, oxidative stress, hormone signaling, and handling variability all change at once.',
              ),
              list([
                'reactive oxygen species accumulation',
                'progressive dehydration and loss of vascular function',
                'hormone-mediated senescence signaling',
                'hidden transport and storage stress before purchase',
              ]),
              paragraph(
                'That combination of pressures means floral preservation is not simply a storage problem. It is a post-harvest biology problem with direct commercial consequences.',
              ),
            ],
          },
          {
            eyebrow: 'Scientific rationale',
            title: 'Why we chose melatonin',
            blocks: [
              paragraph(
                'Melatonin has been repeatedly reported as a multifunctional regulator in plants and post-harvest systems. It is associated with improved antioxidant capacity, reduced ROS burden, and delayed senescence under several stress contexts.',
              ),
              paragraph(
                'That makes melatonin attractive not only as an exogenous treatment, but also as a product for synthetic-biology production. If an engineered microbial chassis can generate it in a controllable way, we can connect metabolic engineering directly to floral preservation.',
              ),
              callout(
                'Our working hypothesis is straightforward: if engineered E. coli can produce melatonin reliably enough, that product may become the basis of a safer and more controllable preservation strategy.',
              ),
            ],
          },
          {
            eyebrow: 'Project scope',
            title: 'Our working hypothesis',
            blocks: [
              list(
                [
                  'engineered E. coli can be designed to biosynthesize melatonin',
                  'the pathway output can be analytically verified and optimized',
                  'melatonin-centered treatment can improve cut-flower post-harvest performance',
                ],
                'ordered',
              ),
              paragraph(
                'This puts metabolic engineering, analytical chemistry, and post-harvest flower validation into the same project. The scope is broad, but the core claim stays the same from page to page.',
              ),
              table(
                ['Proof layer', 'Representative evidence', 'Why it matters'],
                [
                  ['Route design', 'pathway and construct diagrams', 'shows that melatonin production is a defined engineering target'],
                  ['Analytical output', 'standards, chromatograms, titers, or intermediate profiles', 'shows that the chassis produced the molecule rather than a vague signal'],
                  ['Flower outcome', 'phenotype timelines and vase-life plots', 'shows whether the molecule changes a real post-harvest result'],
                  ['Translation boundary', 'purified-format or bounded-use framing', 'shows how the project avoids leaping from lab build to open release'],
                ],
              ),
            ],
          },
        ],
      },
      {
        slug: 'problem-inspiration',
        navTitle: 'Problem & Inspiration',
        title: 'Problem & Inspiration',
        summary:
          'The problem page connects floral waste and short vase life to the decision to pursue melatonin biosynthesis as a preservation strategy.',
        highlights: [
          'Cut flowers are economically valuable but physiologically fragile.',
          'Current preservatives help, yet they rarely adapt to the actual biological state of the flower.',
          'Melatonin offers a biologically grounded alternative worth producing and testing.',
        ],
        nextAdd: [
          'Real species photographs showing senescence progression over time',
          'Loss estimates or stakeholder-derived examples from the floral supply chain',
          'A figure explaining why melatonin is a more interesting lever than a generic additive',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'problem',
            eyebrow: 'Problem picture',
            title: 'Floral value is lost across the whole post-harvest chain',
            image: floralStressArt,
            alt: 'Illustrated contrast between fresh bouquets and stressed flowers.',
            caption:
              'Senescence pressure builds from harvest to home care.',
            lede:
              'Flowers accumulate stress during harvest, storage, transport, retail display, and household care. By the time a bouquet reaches the vase, part of the decline has already begun.',
            points: [
              'The problem starts before purchase.',
              'Different flowers have short, commercially important display windows.',
              'A useful intervention has to address biology, not only handling.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'Species snapshot',
            title: 'Representative cut flowers show how narrow the usable display window can be',
            items: [
              {
                label: 'Rose',
                value: '5-7 d',
                detail: 'A commercially important cut flower where visible wilting quickly reduces value.',
              },
              {
                label: 'Tulip',
                value: '4-6 d',
                detail: 'A short-life flower that makes timing and water balance especially important.',
              },
              {
                label: 'Carnation',
                value: '7-10 d',
                detail: 'A relatively longer-lived comparison that still experiences cumulative post-harvest stress.',
              },
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Why current methods fall short',
            title: 'Existing floral care methods are useful, but structurally limited',
            items: [
              {
                title: 'They are mostly static',
                detail: 'Standard preservatives are often applied as fixed recipes, even though stress and species response vary widely.',
              },
              {
                title: 'They do not explain mechanism',
                detail: 'A bouquet may improve or fail without clarifying which stress process was actually buffered.',
              },
              {
                title: 'They are hard to translate into new biology',
                detail: 'Chemical preservation does not naturally open a path for iGEM-style pathway design, production, and validation.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Problem framing',
            title: 'The hidden cost of floral waste',
            blocks: [
              paragraph('Cut flowers are highly perishable products with short, commercially meaningful display windows.'),
              table(
                ['Flower', 'Typical vase life'],
                [
                  ['Rose', '5-7 days'],
                  ['Tulip', '4-6 days'],
                  ['Carnation', '7-10 days'],
                  ['Lily', '6-8 days'],
                ],
              ),
              paragraph(
                'During transportation, storage, and retail display, flowers are exposed to dehydration, temperature fluctuation, and physiological stress that shorten vase life before the end user can intervene.',
              ),
            ],
          },
          {
            eyebrow: 'Inspiration',
            title: 'Why melatonin is an appealing preservation lever',
            blocks: [
              paragraph(
                'Literature on melatonin in plants and post-harvest systems consistently points to antioxidant buffering, improved stress tolerance, and delayed senescence-associated damage.',
              ),
              list([
                'melatonin is associated with lower ROS burden',
                'melatonin can help maintain membrane and cellular stability',
                'melatonin has already shown promise in post-harvest horticultural contexts',
              ]),
              paragraph(
                'Those observations inspired us to ask whether melatonin could become more than an externally purchased treatment. In FloraGuard, it becomes the product of a synthetic-biology chassis and the centerpiece of a preservation workflow.',
              ),
            ],
          },
          {
            eyebrow: 'Project inspiration',
            title: 'Why we moved from treatment to biosynthesis',
            blocks: [
              paragraph(
                'Testing purchased melatonin on flowers would still be interesting, but it would leave the main synthetic-biology question untouched. We wanted to ask how the molecule is made, optimized, measured, and translated, so biosynthesis became the center of the project.',
              ),
              callout(
                'The key shift is this: instead of only asking whether melatonin helps flowers, we ask whether synthetic biology can produce that help in a controllable way.',
              ),
            ],
          },
        ],
      },
      {
        slug: 'design',
        navTitle: 'Design',
        title: 'Design',
        summary:
          'Design links pathway engineering, analytical verification, and flower validation.',
        highlights: [
          'The project is designed around a microbial chassis, a melatonin pathway, analytical verification, and application testing.',
          'Route optimization may include precursor and cofactor logic such as BH4-related support when relevant.',
          'The final design is bench-to-application, not hardware-first.',
        ],
        nextAdd: [
          'A route diagram with the exact candidate enzymes and any support modules you keep',
          'A construct sheet with real plasmid names, promoter logic, and comparison variants',
          'An assay plan showing how standards, samples, and flower experiments are paired',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'design',
            eyebrow: 'System architecture',
            title: 'The design links pathway engineering, analytics, and flower assays',
            image: floralPathwayBoardArt,
            alt: 'Illustrated pathway board connecting melatonin chemistry, optimization levers, and evidence gates.',
            caption:
              'The design places route choice, optimization, measurement, and application in one workflow.',
            lede:
              'We designed FloraGuard as a sequence: choose a chassis, build a melatonin pathway, verify the product, then test flower outcomes.',
            points: [
              'The metabolic route remains explicit.',
              'Analytics comes before application claims.',
              'Implementation constraints feed back into design.',
            ],
          },
          {
            type: 'profile-grid',
            eyebrow: 'Module roles',
            title: 'Each module answers a different design question',
            items: [
              {
                label: 'M-01',
                title: 'Chassis and pathway',
                detail: 'Select E. coli and define the enzyme set needed to convert a tractable precursor stream into melatonin.',
              },
              {
                label: 'M-02',
                title: 'Production optimization',
                detail: 'Tune expression, precursor flow, and any needed cofactor support to raise melatonin output.',
              },
              {
                label: 'M-03',
                title: 'Product verification',
                detail: 'Use analytical methods to confirm that the pathway is generating melatonin rather than only upstream intermediates.',
              },
              {
                label: 'M-04',
                title: 'Application validation',
                detail: 'Test whether melatonin-centered treatments measurably improve cut-flower preservation outcomes.',
              },
            ],
          },
          {
            type: 'art-card-grid',
            eyebrow: 'Design package',
            title: 'Three diagrams make the design reviewable',
            items: [
              {
                image: floralPathwayBoardArt,
                alt: 'Illustrated pathway board with melatonin route stages.',
                label: 'Route',
                title: 'The route shows where melatonin comes from',
                detail:
                  'Readers should be able to trace the path from tryptophan-derived metabolism to melatonin before they reach the construct details.',
              },
              {
                image: floralConstructPackageArt,
                alt: 'Illustrated construct package showing route logic, gene arrangement, and assay planning.',
                label: 'Construct',
                title: 'Construct architecture should sit beside the route map',
                detail:
                  'Reviewers should be able to see what is cloned, how variants differ, and what comparison each construct is meant to answer.',
              },
              {
                image: floralFermentationBoardArt,
                alt: 'Illustrated fermentation and validation board.',
                label: 'Assay',
                title: 'The assay plan explains how design success will be judged',
                detail:
                  'Quantification is part of the design package, not something added only after constructs are built.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'Bench-to-flower sequence',
            title: 'The design follows one ordered workflow',
            items: [
              {
                title: 'Engineer',
                detail: 'Choose the chassis and biosynthesis route from tryptophan-derived metabolism to melatonin.',
              },
              {
                title: 'Optimize',
                detail: 'Adjust route bottlenecks, precursor supply, and relevant cofactors or helper modules.',
              },
              {
                title: 'Verify',
                detail: 'Measure whether melatonin is actually produced at a useful and reproducible level.',
              },
              {
                title: 'Validate',
                detail: 'Use preserved flowers, phenotype scoring, and vase-life outcomes to judge application value.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Module 1',
            title: 'Chassis and pathway design',
            blocks: [
              paragraph(
                'We begin with engineered E. coli as a microbial cell factory. The pathway design centers on converting a tryptophan-derived metabolic stream toward melatonin through decarboxylation, hydroxylation, acetylation, and methylation steps.',
              ),
              paragraph(
                'A practical route can therefore be described as a candidate enzyme sequence from tryptophan-derived intermediates to serotonin, then to N-acetylserotonin, and finally to melatonin. The exact enzyme set may vary, but the route has to stay readable enough that each later optimization step makes sense.',
              ),
              paragraph(
                'The exact enzyme combination can vary with route choice, but the design principle stays the same: make melatonin production explicit, modular, and optimizable.',
              ),
              table(
                ['Design output', 'What it clarifies', 'Representative artifact'],
                [
                  ['Route map', 'which intermediates and transformations are included', 'pathway diagram from precursor to melatonin'],
                  ['Construct sheet', 'how genes, promoters, and variants are organized', 'plasmid schema or operon layout'],
                  ['Assay plan', 'how success will be measured and compared', 'standard-plus-sample workflow and target readouts'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Module 2',
            title: 'Production optimization and route support',
            blocks: [
              paragraph(
                'A pathway that looks complete on paper may still perform poorly in cells. That is why FloraGuard includes a separate optimization layer for precursor balance, expression strength, and route bottlenecks.',
              ),
              list([
                'promoter and expression balancing across pathway enzymes',
                'precursor supplementation or routing from tryptophan metabolism',
                'cofactor support, including BH4-related logic where the chosen route requires it',
              ]),
              paragraph(
                'This module is where metabolic engineering becomes practical rather than conceptual.',
              ),
            ],
          },
          {
            eyebrow: 'Module 3',
            title: 'Product verification',
            blocks: [
              paragraph(
                'FloraGuard needs analytical proof before it can claim a preservation mechanism. Depending on available instrumentation, that proof may come from chromatographic methods, mass-confirmed detection, or other validated analytical assays.',
              ),
              table(
                ['Question', 'Why it matters', 'Representative answer format'],
                [
                  ['Is melatonin present?', 'confirms route completion', 'chromatogram or mass-confirmed detection'],
                  ['How much is produced?', 'supports optimization decisions', 'titer comparison across constructs or conditions'],
                  ['Where are bottlenecks?', 'guides next DBTL cycle', 'intermediate accumulation or low-yield signatures'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Module 4',
            title: 'Application validation on cut flowers',
            blocks: [
              paragraph(
                'The final module asks whether the produced or formulated melatonin actually helps flowers. Treatments are therefore tested on cut-flower material through phenotype images, ROS-associated readouts, and vase-life comparisons.',
              ),
              callout(
                'The design only succeeds if production data and flower data can be read as one argument: FloraGuard made melatonin, and that melatonin changed a relevant floral outcome.',
              ),
            ],
          },
        ],
      },
      {
        slug: 'engineering',
        navTitle: 'Engineering (DBTL)',
        title: 'Engineering (DBTL)',
        summary:
          'Engineering follows a clear Design-Build-Test-Learn loop around melatonin biosynthesis and flower validation.',
        highlights: [
          'Design focuses on route choice, chassis logic, and what counts as evidence.',
          'Build centers on assembling and expressing the pathway in E. coli.',
          'Test and Learn connect production output to preservation performance and pathway revision.',
        ],
        nextAdd: [
          'A DBTL figure showing specific constructs and iteration decisions',
          'A strain table and construct naming scheme',
          'Result snapshots for each round of pathway or application optimization',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'wet',
            eyebrow: 'Engineering logic',
            title: 'DBTL stays centered on the melatonin-producing chassis',
            image: floralFermentationBoardArt,
            alt: 'Illustrated fermentation board used as a DBTL cover image.',
            caption:
              'Each DBTL round changes the route, the assay, or the flower readout.',
            lede:
              'Every DBTL cycle answers whether the chassis, the output, or the application design improved.',
            points: [
              'Keep the iteration centered on one route rather than many disconnected modules.',
              'Link pathway revisions to measurable analytical changes.',
              'Use flower results to justify what is worth optimizing next.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'DBTL shorthand',
            title: 'Each stage answers a different engineering question',
            items: [
              {
                label: 'Design',
                value: 'D',
                detail: 'Which melatonin route, enzymes, and proof criteria define the project?',
              },
              {
                label: 'Build',
                value: 'B',
                detail: 'How do those decisions become strains, constructs, and testable culture conditions?',
              },
              {
                label: 'Test',
                value: 'T',
                detail: 'Does the chassis make melatonin, and does the resulting treatment change flower outcome?',
              },
              {
                label: 'Learn',
                value: 'L',
                detail: 'Which bottlenecks in pathway performance or application format are revised next?',
              },
            ],
          },
          {
            type: 'evidence-strip',
            eyebrow: 'Iteration board',
            title: 'Each DBTL cycle leaves a visible artifact',
            items: [
              {
                label: 'Cycle 01',
                title: 'Route selection',
                detail: 'Why this chassis and pathway combination was chosen over simpler but less controllable alternatives.',
              },
              {
                label: 'Cycle 02',
                title: 'Analytical evidence',
                detail: 'What measurements showed the construct was or was not producing usable melatonin.',
              },
              {
                label: 'Cycle 03',
                title: 'Application learning',
                detail: 'How flower experiments changed the next production, dose, or formulation decision.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Design',
            title: 'Define the route and the proof chain',
            blocks: [
              paragraph(
                'We first defined FloraGuard around a clear proof chain: engineer a melatonin biosynthesis route in E. coli, verify that the molecule is produced, and test whether it improves cut-flower preservation outcomes.',
              ),
            ],
          },
          {
            eyebrow: 'Build',
            title: 'Assemble pathway constructs and test conditions',
            blocks: [
              paragraph(
                'The build phase translates route logic into plasmids, strains, helper modules, and culture conditions that can be screened experimentally.',
              ),
              paragraph(
                'Depending on the selected route, build work may also include precursor-routing changes or cofactor-support modules that help pathway completion.',
              ),
            ],
          },
          {
            eyebrow: 'Test',
            title: 'Measure both production and preservation',
            blocks: [
              paragraph(
                'Testing is divided into two linked questions. First, does the chassis produce melatonin? Second, does a melatonin-centered treatment measurably improve floral phenotype, ROS-associated stress, or vase life?',
              ),
            ],
          },
          {
            eyebrow: 'Learn',
            title: 'Use output and phenotype together to guide revision',
            blocks: [
              paragraph(
                'The learn stage is where FloraGuard becomes genuinely iterative. Low titers may suggest pathway bottlenecks, while weak flower outcomes may point to dose, formulation, or application-timing problems. Both kinds of evidence should shape the next cycle.',
              ),
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'build',
    title: 'Build',
    summary:
      'Show how production, quantification, and application experiments support FloraGuard.',
    pages: [
      {
        slug: 'wet-lab',
        navTitle: 'Wet Lab',
        title: 'Wet Lab',
        summary:
          'The wet lab is organized around pathway construction, melatonin quantification, and flower-preservation validation.',
        highlights: [
          'Aim 1 builds the melatonin biosynthesis route in E. coli.',
          'Aim 2 measures and optimizes output through pathway and culture variables.',
          'Aim 3 tests whether melatonin-centered treatments delay senescence in cut flowers.',
        ],
        nextAdd: [
          'A real strain table with construct names, induction conditions, and culture timeline',
          'Chromatograms, standard curves, or LC-MS-style evidence tied to the actual build',
          'Replication-aware flower results with phenotype images, scoring rubric, and vase-life statistics',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'wet',
            eyebrow: 'Experimental overview',
            title: 'The wet lab connects engineered cells, analytics, and flower assays',
            image: floralFermentationBoardArt,
            alt: 'Illustrated wet-lab chain with route build, fermentation check, and flower readout.',
            caption:
              'The wet lab moves from pathway construction to product measurement to flower response.',
            lede:
              'We treat the wet lab as one chain: build the pathway, measure the molecule, and test the treatment on cut flowers.',
            points: [
              'Construct logic sits beside analytical results.',
              'Production and application experiments stay linked.',
              'Phenotype images track changes over time.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'Wet-lab aims',
            title: 'The experimental plan is built around three connected aims',
            items: [
              {
                label: 'Aim 1',
                value: 'Build',
                detail: 'Construct and express a melatonin biosynthesis pathway in E. coli.',
              },
              {
                label: 'Aim 2',
                value: 'Verify',
                detail: 'Measure melatonin production and identify the major bottlenecks in output.',
              },
              {
                label: 'Aim 3',
                value: 'Validate',
                detail: 'Compare melatonin-centered treatments with controls on cut-flower preservation outcomes.',
              },
            ],
          },
          {
            type: 'art-card-grid',
            eyebrow: 'Evidence package',
            title: 'Four figure types anchor the wet-lab results',
            items: [
              {
                image: floralWetlabEvidencePackArt,
                alt: 'Illustrated wet-lab evidence pack showing build, chemistry, phenotype, and replication.',
                label: 'Package',
                title: 'The result set has to read as one evidence package',
                detail:
                  'A convincing wet-lab chapter shows constructs, chemistry, flower outcome, and replication together rather than in isolation.',
              },
              {
                image: floralFermentationBoardArt,
                alt: 'Illustrated fermentation board connecting build decisions to assay outputs.',
                label: 'Chemistry',
                title: 'Production data sits beside pathway decisions',
                detail:
                  'Readers should not need to jump between chapters to understand whether the chassis really made melatonin.',
              },
              {
                image: floralPhenotypeBoardArt,
                alt: 'Illustrated phenotype board tracking flower appearance over multiple days.',
                label: 'Phenotype',
                title: 'Flower images show the treatment effect over time',
                detail:
                  'A day-by-day visual timeline helps readers compare control and treatment groups before they study the plots.',
              },
              {
                image: floralWetLabArt,
                alt: 'Illustrated bench scene with flowers, dishes, and scoring motifs.',
                label: 'Replication',
                title: 'Sampling, controls, and scoring remain visible',
                detail:
                  'Readers trust the final summary more when they can see timing, replication, and how the controls were organized.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Aim 1',
            title: 'Construct a melatonin biosynthesis pathway in engineered E. coli',
            blocks: [
              paragraph(
                'The first wet-lab objective is to establish a functional melatonin route in E. coli. That means choosing a pathway architecture, assembling the necessary genes, and checking that flux reaches melatonin rather than stalling upstream.',
              ),
              paragraph(
                'In practice, that means treating the route as a sequence with named intermediates. The team should be able to explain which step converts the tryptophan-derived precursor stream into serotonin, which step generates N-acetylserotonin, and which step closes the route to melatonin.',
              ),
              table(
                ['Design question', 'Why it matters', 'Representative output'],
                [
                  ['Which enzymes are included?', 'determines whether the pathway can complete conversion to melatonin', 'construct map or plasmid schema'],
                  ['How is expression balanced?', 'route bottlenecks can be caused by misaligned expression levels', 'promoter or construct comparison'],
                  ['What support modules are needed?', 'precursor flow or cofactors may limit output', 'helper-module or culture-condition comparison'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Aim 2',
            title: 'Measure melatonin production and optimize the route',
            blocks: [
              paragraph(
                'Once the pathway is assembled, the next goal is to determine whether melatonin is produced at a detectable and optimizable level. This stage may involve chromatographic assays, standards-based comparison, and screening of culture or construct variables.',
              ),
              list([
                'compare production across constructs or induction settings',
                'screen precursor supplementation or flux-routing changes',
                'evaluate cofactor-related support such as BH4-linked route needs where relevant',
              ]),
              paragraph(
                'This aim is essential because the preservation claim needs real production data behind it.',
              ),
            ],
          },
          {
            eyebrow: 'Aim 3',
            title: 'Validate preservation performance on cut flowers',
            blocks: [
              paragraph(
                'The third objective is to test whether melatonin-centered treatment delays cut-flower senescence relative to appropriate controls. Depending on formulation and safety boundaries, this may use purified melatonin, prepared treatment solutions, or other carefully bounded experimental materials.',
              ),
              table(
                ['Group', 'Purpose'],
                [
                  ['Control', 'define untreated post-harvest decline'],
                  ['Reference preservative or simple formulation', 'provide a practical comparison baseline'],
                  ['Melatonin-centered treatment', 'test whether FloraGuard changes floral outcome'],
                ],
              ),
              paragraph('Representative readouts include ROS-associated indicators, visual senescence score, relative freshness, and total vase life.'),
            ],
          },
          {
            eyebrow: 'Readouts',
            title: 'How wet-lab measurements connect mechanism to outcome',
            blocks: [
              paragraph(
                'The wet-lab chapter is strongest when the reader can move from construct identity to analytical signal to flower phenotype without losing track of which sample or condition produced each result.',
              ),
              table(
                ['Readout', 'Why it matters', 'What it explains'],
                [
                  ['Melatonin titer', 'proves the chassis is functioning', 'whether route engineering succeeded'],
                  ['Intermediate profile', 'reveals where flux stalls', 'which step should be optimized next'],
                  ['Visual senescence score', 'captures ornamental value loss', 'whether the treatment effect is visible to users'],
                  ['Vase life', 'most intuitive preservation outcome', 'whether FloraGuard creates a practically meaningful gain'],
                ],
              ),
            ],
          },
        ],
      },
      {
        slug: 'dry-lab',
        navTitle: 'Dry Lab',
        title: 'Dry Lab',
        summary:
          'The dry lab supports both pathway optimization and flower-application decisions in the new FloraGuard workflow.',
        highlights: [
          'Modeling can help identify route bottlenecks and promising optimization directions.',
          'Dose and timing analysis support more defensible flower-treatment experiments.',
          'Dry lab serves the wet lab instead of acting like a separate platform.',
        ],
        nextAdd: [
          'A pathway map with candidate bottleneck steps and route assumptions',
          'Dose-response or intervention-window plots for flower treatment',
          'Validation plots comparing modeled expectations with measured output and vase life',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'dry',
            eyebrow: 'Model role',
            title: 'Dry lab helps decide what to build and what to test next',
            image: floralDryLabArt,
            alt: 'Illustrated modeling interface with trajectories and decision outputs.',
            caption:
              'Modeling supports pathway optimization and flower-experiment design.',
            lede:
              'In FloraGuard, dry lab is useful when it narrows choices: which bottleneck to address, which concentration range to test, and which comparison is worth running.',
            points: [
              'Modeling should prioritize route optimization.',
              'Production-side and flower-side decisions should stay connected.',
              'Each model output should lead to an experimental decision.',
            ],
          },
          {
            type: 'pipeline',
            eyebrow: 'Model pipeline',
            title: 'Dry-lab work can be organized around three decision layers',
            items: [
              {
                title: 'Pathway support',
                detail: 'Use route knowledge and measured intermediates to identify where melatonin production is likely to bottleneck.',
              },
              {
                title: 'Treatment design',
                detail: 'Use expected concentration ranges and senescence timing to choose realistic flower-treatment experiments.',
              },
              {
                title: 'Validation loop',
                detail: 'Compare modeled expectations with measured titers and preservation outcomes to update the next cycle.',
              },
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Why it matters',
            title: 'Without dry lab, both pathway optimization and application testing become less efficient',
            items: [
              {
                title: 'Without modeling support',
                detail: 'Construct choice, culture conditions, and treatment concentration are selected mostly by guesswork and literature analogy.',
              },
              {
                title: 'With modeling support',
                detail: 'The team can prioritize bottlenecks, set more rational concentration ranges, and define which experiments should be run first.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Production support',
            title: 'Model the pathway as an optimization problem',
            blocks: [
              paragraph(
                'A dry-lab layer can help interpret why one construct outperforms another. Even a simple route model can highlight whether low output is more likely to come from precursor limitation, enzyme imbalance, or incomplete conversion to melatonin.',
              ),
              table(
                ['Input class', 'Representative variable', 'Decision supported'],
                [
                  ['Construct design', 'enzyme set or expression balance', 'which route architecture is worth keeping'],
                  ['Culture condition', 'precursor feeding or induction setting', 'which fermentation condition is worth scaling'],
                  ['Analytical result', 'titer or intermediate accumulation', 'where the pathway likely stalls'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Application support',
            title: 'Use dry lab to plan dose and timing experiments',
            blocks: [
              paragraph(
                'On the flower side, the model does not need to be overly complicated to be useful. It can still guide concentration ranges, exposure times, and which species or handling contexts are most informative for testing.',
              ),
              list([
                'estimate practical melatonin concentration windows',
                'compare early versus late intervention timing',
                'prioritize which flower species or stress contexts are worth testing first',
              ]),
            ],
          },
          {
            eyebrow: 'Validation',
            title: 'How the dry-lab layer is judged',
            blocks: [
              paragraph(
                'The important question is not whether the model is mathematically elegant. It is whether the model leads to better experimental decisions. For FloraGuard, validation should therefore compare modeled expectations with measured production data and measured flower outcomes.',
              ),
              callout(
                'Dry lab succeeds when it helps the team pick smarter builds and smarter flower assays, not when it becomes a disconnected appendix.',
              ),
            ],
          },
        ],
      },
      {
        slug: 'hardware',
        navTitle: 'Application Support',
        title: 'Application Support',
        summary:
          'Application-support tools help standardize flower evaluation without becoming the core project itself.',
        highlights: [
          'Hardware is no longer the main project spine.',
          'Simple imaging and logging can still strengthen phenotyping and application validation.',
          'Future support tools should serve bounded treatment workflows and better evidence capture.',
        ],
        nextAdd: [
          'A simple imaging rig or standardized phenotype-recording setup',
          'Temperature and time logging workflow for post-harvest experiments',
          'A table showing which measurements are manual versus tool-assisted',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'hardware',
            eyebrow: 'Support role',
            title: 'Application-support tools improve evidence quality',
            image: floralHardwareBlueprintArt,
            alt:
              'Illustrated blueprint-like panel for a measurement and support workflow.',
            caption:
              'Support tools standardize imaging, logging, and phenotyping.',
            lede:
              'A light support layer can make flower assays easier to compare by keeping images, timing, and treatment records aligned.',
            points: [
              'Standardized images make phenotype comparisons stronger.',
              'Logging helps explain variation between assays.',
              'Support tools remain secondary to biosynthesis and validation.',
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Possible support tasks',
            title: 'A light support layer can still improve the experimental workflow',
            items: [
              {
                title: 'Image capture',
                detail: 'Standardized flower photos across time points make visual comparisons much more credible.',
              },
              {
                title: 'Condition logging',
                detail: 'Temperature, elapsed time, and treatment record-keeping help explain variation between assays.',
              },
              {
                title: 'Result organization',
                detail: 'A simple interface or dashboard can keep phenotype, titer, and treatment metadata aligned for later analysis.',
              },
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Why it helps',
            title: 'Structured phenotyping is more useful than informal flower photography',
            items: [
              {
                title: 'Without support tools',
                detail: 'Images, timelines, and treatment metadata drift apart, which makes application results harder to trust.',
              },
              {
                title: 'With support tools',
                detail: 'The team can keep time-series photos, environmental context, and treatment records aligned across flower experiments.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Current scope',
            title: 'What application support contributes to FloraGuard',
            blocks: [
              paragraph(
                'In FloraGuard, hardware is not the core innovation. Any tool-like layer exists to support better flower phenotyping, experiment logging, and demonstration of the treatment workflow.',
              ),
            ],
          },
          {
            eyebrow: 'Useful measurements',
            title: 'What is worth recording during flower validation',
            blocks: [
              table(
                ['Measurement', 'Why capture it', 'How it helps interpretation'],
                [
                  ['Phenotype images', 'show visible senescence progression', 'supports side-by-side comparison'],
                  ['Elapsed time after harvest', 'captures cumulative stress exposure', 'helps align experiments across days'],
                  ['Temperature or environment', 'explains between-condition variability', 'supports fairer interpretation of treatment effect'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Future role',
            title: 'How support tools could be used in a pilot',
            blocks: [
              paragraph(
                'If the project eventually moves toward florist-facing use, the same light support tools could become part of a pilot workflow. For now, their main role is to make preservation experiments better documented and easier to compare.',
              ),
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'translation',
    title: 'Translation',
    summary:
      'Connect stakeholder need, biosafety, bounded deployment, and the broader contribution of FloraGuard.',
    pages: [
      {
        slug: 'integrated-human-practices',
        navTitle: 'Human Practices',
        title: 'Integrated Human Practices',
        summary:
          'Human Practices asks whether a melatonin-based preservation product would be usable, affordable, and acceptable in real post-harvest settings.',
        highlights: [
          'Growers, distributors, florists, and consumers care about the problem in different ways.',
          'The key questions are cost, handling burden, and whether the format feels safe enough to use.',
          'The project only has social value if it reduces waste without adding new biosafety burden.',
        ],
        nextAdd: [
          'A real interview log with dates, respondent roles, and how feedback was recorded',
          'An anonymized quote set linked to the actual questions asked',
          'A revision map showing which stakeholder concerns changed scope, format, or validation priorities',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'human',
            eyebrow: 'Stakeholder picture',
            title: 'Human Practices asks who would actually use FloraGuard and under what conditions',
            image: floralStakeholderMapArt,
            alt:
              'Illustrated stakeholder map connecting the floral chain to the FloraGuard project.',
            caption:
              'Stakeholder input helps us move from a lab result to a realistic use case.',
            lede:
              'We use Human Practices to check whether a melatonin-based preservation strategy solves a real problem and what kind of product format people would actually accept outside the lab.',
            points: [
              'Waste reduction and daily workflow have to be discussed together.',
              'Production only matters if the final format makes sense to users.',
              'Stakeholder feedback changes deployment and safety decisions.',
            ],
          },
          {
            type: 'stakeholder-grid',
            eyebrow: 'Stakeholder map',
            title: 'Each group sees a different bottleneck in the floral chain',
            items: [
              {
                title: 'Growers',
                detail: 'Care about maintaining value after harvest without adding unrealistic treatment or process burden.',
              },
              {
                title: 'Distributors',
                detail: 'Need solutions that still make sense under transport variability and imperfect cold-chain conditions.',
              },
              {
                title: 'Florists',
                detail: 'Want preservation tools that are practical, affordable, and easy to act on during retail display and bouquet handling.',
              },
              {
                title: 'Consumers',
                detail: 'Mostly want flowers to last longer without needing to understand synthetic biology or post-harvest chemistry.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'Feedback loop',
            title: 'Stakeholder feedback changes what we build and how we describe it',
            items: [
              {
                title: 'Need',
                detail: 'Map where value is lost and what users actually need from a preservation product.',
              },
              {
                title: 'Constraint',
                detail: 'Identify whether cost, handling, or biosafety would block adoption even if the biology works.',
              },
              {
                title: 'Revision',
                detail: 'Use those constraints to favor purified, bounded, and operationally plausible translation formats.',
              },
            ],
          },
          {
            type: 'art-card-grid',
            eyebrow: 'HP evidence package',
            title: 'The chapter should show who was heard and what changed',
            items: [
              {
                image: floralStakeholderMapArt,
                alt: 'Illustrated stakeholder map for the floral chain.',
                label: 'Coverage',
                title: 'Interview coverage shows whose needs were represented',
                detail:
                  'Readers need to know whether the project listened only to one user group or to the wider floral chain.',
              },
              {
                image: floralFeedbackRevisionMapArt,
                alt: 'Illustrated map showing stakeholder feedback leading to project revisions.',
                label: 'Revision',
                title: 'Feedback should map to specific design changes',
                detail:
                  'Human Practices becomes more credible when interviews clearly change product format, safety framing, or validation priorities.',
              },
              {
                image: floralBoundedFormatsArt,
                alt: 'Illustrated bounded-format translation board.',
                label: 'Outcome',
                title: 'The main outcome is a safer and simpler deployment boundary',
                detail:
                  'The chapter should make clear how field feedback pushed FloraGuard toward bounded outputs rather than open-ended deployment.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Stakeholders',
            title: 'Who this project may ultimately affect',
            blocks: [
              paragraph(
                'We frame Human Practices around the floral supply chain rather than around laboratory curiosity alone. That includes growers, wholesale distributors, florists, and consumers, each of whom experiences flower loss from a different position.',
              ),
              table(
                ['Stakeholder', 'Main concern'],
                [
                  ['Growers', 'maintaining harvested value without impractical extra burden'],
                  ['Distributors', 'reducing losses during transport and storage variability'],
                  ['Florists', 'keeping bouquets attractive during display and sale'],
                  ['Consumers', 'making flowers last longer with simple care'],
                ],
              ),
              table(
                ['Evidence piece', 'What it contributes', 'Representative material'],
                [
                  ['Interview log', 'shows when, with whom, and under what context feedback was gathered', 'date, role, setting, and interview focus'],
                  ['Quote set', 'shows how stakeholders framed the real problem in their own words', 'anonymized short excerpts grouped by theme'],
                  ['Revision map', 'shows that feedback changed project scope or format', 'need-to-response diagram tied to specific project decisions'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Insights',
            title: 'What changed once biosynthesis became the project core',
            blocks: [
              paragraph(
                'Once biosynthesis became the center of FloraGuard, Human Practices changed as well. The important questions were no longer only about flower-care advice or monitoring. They became questions about price, handling, acceptance, and how to move toward use without crossing the live-cell boundary.',
              ),
              list([
                'stakeholders care about post-harvest loss, but not about live engineered cells entering the floral chain',
                'florists need simple and operationally plausible treatment formats',
                'social value improves when preservation gains do not create new biosafety concerns',
              ]),
            ],
          },
          {
            eyebrow: 'Design consequences',
            title: 'How stakeholder input changes the project',
            blocks: [
              table(
                ['Observed need', 'Why it matters', 'Project response'],
                [
                  ['Practical post-harvest use', 'a product that is too complex will not be adopted', 'favor simple treatment formats over device-heavy deployment'],
                  ['Low biosafety burden', 'users will not accept open-ended live-cell exposure', 'frame translation around purified or bounded outputs'],
                  ['Visible value', 'preservation claims need to be obvious in practice', 'prioritize phenotype and vase-life validation on flowers'],
                ],
              ),
              callout(
                'The main HP takeaway is that value can leave the lab even if engineered cells do not.',
              ),
            ],
          },
          {
            eyebrow: 'Social value',
            title: 'Why this project could matter beyond iGEM',
            blocks: [
              paragraph(
                'If FloraGuard succeeds, it shows one concrete way synthetic biology could address post-harvest waste: make a defined molecule, verify it carefully, and carry only the bounded output into a real horticultural setting.',
              ),
            ],
          },
        ],
      },
      {
        slug: 'safety',
        navTitle: 'Safety',
        title: 'Safety',
        summary:
          'Safety is built around laboratory confinement, clear product boundaries, and non-release translation.',
        highlights: [
          'Engineered E. coli remains confined to laboratory use.',
          'Any future application should rely on purified or otherwise bounded outputs rather than live-cell deployment.',
          'Safety here includes both biosafety and the way a user-facing product would be handled.',
        ],
        nextAdd: [
          'A strain and containment table',
          'An explicit comparison of live-cell, cell-free, and purified-product translation paths',
          'Risk notes for storage, handling, and user-facing formulations',
        ],
        modules: [
          {
            type: 'comparison-grid',
            eyebrow: 'Boundary setting',
            title: 'The first safety decision is whether engineered cells ever leave the lab',
            items: [
              {
                title: 'Current project boundary',
                detail: 'Engineered E. coli and route-testing experiments remain in controlled laboratory settings under institutional biosafety practice.',
              },
              {
                title: 'Future translation boundary',
                detail: 'Any preservation product should be based on purified or otherwise bounded outputs, not on direct release of engineered microbes to bouquets or the environment.',
              },
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Safety principles',
            title: 'Three safety principles shape the project',
            items: [
              {
                title: 'Confinement',
                detail: 'Keep pathway engineering and microbial production inside approved lab workflows.',
              },
              {
                title: 'Separation',
                detail: 'Separate the making of melatonin from the form in which a user might eventually encounter a preservation product.',
              },
              {
                title: 'Transparency',
                detail: 'Make the preferred translation path explicit so the wiki never implies open environmental release.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'Staged translation',
            title: 'The safety question changes from stage to stage',
            items: [
              {
                title: 'Lab engineering',
                detail: 'Can the pathway be tested safely under standard microbial containment?',
              },
              {
                title: 'Analytical and formulation stage',
                detail: 'Can the molecule be confirmed and handled in bounded experimental forms?',
              },
              {
                title: 'Future user-facing stage',
                detail: 'Can preservation value be delivered without live engineered organisms entering the floral chain?',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Core principle',
            title: 'Engineered cells stay in the lab',
            blocks: [
              paragraph(
                'The central biosafety principle of FloraGuard is straightforward: the engineered microbial chassis is a laboratory tool for making and studying melatonin. It is not intended for direct environmental release or direct exposure to end users in the floral chain.',
              ),
            ],
          },
          {
            eyebrow: 'Translation boundary',
            title: 'Preferred downstream formats are bounded outputs',
            blocks: [
              paragraph(
                'The safest translation path is to separate product value from live-cell deployment. In practice, that means talking about purified melatonin, bounded intermediate formulations, or other controlled outputs instead of engineered cells in bouquets.',
              ),
              table(
                ['Format', 'Safety view', 'Why it matters'],
                [
                  ['Live engineered cells', 'not preferred for deployment', 'creates avoidable biosafety and acceptance barriers'],
                  ['Cell-free or processed outputs', 'more plausible transitional format', 'retains molecular value while reducing biological uncertainty'],
                  ['Purified product', 'preferred long-term direction', 'best aligns preservation utility with bounded exposure'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Operational safety',
            title: 'Safety also applies to how the product is interpreted and used',
            blocks: [
              paragraph(
                'A preservation product is not only a biological material; it is also a handling workflow. For that reason, any user-facing format would need plain instructions for dose, storage, and intended use, without ambiguous or open-ended decision logic.',
              ),
              list([
                'keep formulation and intended use understandable to operators',
                'avoid implying that all flower types respond identically',
                'treat stakeholder acceptance as part of safety, not outside it',
              ]),
            ],
          },
        ],
      },
      {
        slug: 'implementation',
        navTitle: 'Implementation',
        title: 'Implementation',
        summary:
          'Implementation asks how a melatonin-based preservation concept could move from the lab into bounded, usable formats.',
        highlights: [
          'The most realistic path is lab validation first, florist-facing pilot second, and consumer use only much later.',
          'Implementation is mainly about product format and biosafety boundary, not app features or interface polish.',
          'FloraGuard should never imply that live engineered cells go directly into bouquets.',
        ],
        nextAdd: [
          'A formulation comparison table for pilot scenarios',
          'Mockups for florist-facing treatment kits or protocol cards',
          'A simple user-flow diagram for how bounded outputs could be deployed in practice',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'implementation',
            eyebrow: 'Deployment picture',
            title: 'Implementation focuses on bounded product formats',
            image: floralBoundedFormatsArt,
            alt:
              'Illustrated translation board showing lab confinement, bounded outputs, and user-facing formats.',
            caption:
              'FloraGuard separates lab work with engineered cells from downstream use of bounded outputs.',
            lede:
              'If FloraGuard shows both melatonin production and flower benefit, the next question is how to move toward practical, bounded formats without crossing the lab-release boundary.',
            points: [
              'Translation starts from lab evidence.',
              'Florist-facing pilots come before household claims.',
              'Purified or bounded outputs stay explicit throughout the page.',
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Deployment formats',
            title: 'Florists and consumers would not use the same format',
            items: [
              {
                title: 'Florist-facing pilot',
                detail: 'A bounded treatment format, such as a prepared concentrate or protocol-bound stock, is a realistic early translation step when paired with clear instructions and phenotype-based evaluation.',
              },
              {
                title: 'Consumer-facing future use',
                detail: 'A later household version would need even simpler delivery, lower risk, and a format that does not ask users to interpret laboratory concepts or open-ended dosing logic.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'Translation path',
            title: 'Any move toward use has to happen in stages',
            items: [
              {
                title: 'Validate',
                detail: 'Prove that the engineered pathway produces melatonin and that melatonin changes a relevant floral outcome.',
              },
              {
                title: 'Purify and bound',
                detail: 'Move from live-cell research to bounded treatment formats that can be handled more safely and credibly.',
              },
              {
                title: 'Pilot',
                detail: 'Test whether florist-facing use creates visible value under practical post-harvest conditions.',
              },
            ],
          },
          {
            type: 'use-case-cards',
            eyebrow: 'Journey scenarios',
            title: 'Each use context changes what counts as a workable product',
            items: [
              {
                tag: 'Research',
                title: 'Laboratory production and validation',
                detail: 'The lab version prioritizes route construction, analytical measurement, and tightly controlled flower testing before any user-facing claims are made.',
                points: ['High measurement density', 'construct revision', 'evidence generation'],
              },
              {
                tag: 'Florist',
                title: 'Professional pilot format',
                detail: 'An early pilot should prioritize simple handling, visible value, and minimal extra workflow burden for professional users, ideally in a prepared or pre-measured treatment format.',
                points: ['bounded treatment', 'clear instructions', 'display-life benefit'],
              },
              {
                tag: 'Future',
                title: 'Consumer translation',
                detail: 'A later consumer-facing version would need simplified presentation and more evidence for safety, consistency, and benefit.',
                points: ['low-friction use', 'clear storage and dose', 'trustworthy claims'],
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Research use',
            title: 'Laboratory platform',
            blocks: [
              paragraph(
                'Within the present project scope, FloraGuard is first a laboratory platform for melatonin biosynthesis and cut-flower validation. That is where evidence can be generated most rigorously and where the pathway can still be revised safely.',
              ),
            ],
          },
          {
            eyebrow: 'Pilot use',
            title: 'Florist-oriented pilot',
            blocks: [
              paragraph(
                'If the project progresses beyond proof-of-concept, a florist-facing pilot makes more sense than immediate consumer use. Florists already handle flowers professionally and can judge whether a preservation treatment produces visible value during display and sale.',
              ),
              list([
                'treatment must be simple to apply',
                'benefit must be visible within retail timeframes',
                'product form must avoid introducing live engineered cells into routine handling',
              ]),
            ],
          },
          {
            eyebrow: 'Longer-term use',
            title: 'Consumer translation',
            blocks: [
              paragraph(
                'A future household format would require far more simplification and much stronger evidence. It would also need careful communication about what the treatment is, how it is used, and which flowers or conditions it is expected to help.',
              ),
            ],
          },
          {
            eyebrow: 'Implementation principle',
            title: 'Why staged translation matters',
            blocks: [
              paragraph(
                'Implementation has to stay aligned with safety. FloraGuard should not jump from engineered cells in the lab to household use in one step. It has to move through bounded outputs, pilot contexts, and evidence-based claims.',
              ),
              callout(
                'A credible implementation plan states three things clearly: what the product is, who uses it, and why that use stays within the biosafety boundary.',
              ),
            ],
          },
        ],
      },
      {
        slug: 'contribution',
        navTitle: 'Contribution',
        title: 'Contribution',
        summary:
          'FloraGuard contributes a focused way to connect microbial melatonin production with post-harvest flower preservation.',
        highlights: [
          'The project bridges metabolic engineering and floriculture rather than treating them as separate topics.',
          'It proposes a staged proof chain from route design to preservation outcome.',
          'It emphasizes bounded translation rather than premature live-cell deployment.',
        ],
        nextAdd: [
          'A comparison against purely chemical or purely horticultural preservation strategies',
          'Reusable build and assay documentation for future teams',
          'A clear list of what would remain useful even if the final application format changes',
        ],
        modules: [
          {
            type: 'comparison-grid',
            eyebrow: 'Contribution lens',
            title: 'Why this narrower scope is useful',
            items: [
              {
                title: 'Generic preservation concept',
                detail: 'Interesting, but harder to prove because the engineering target and application target can drift apart.',
              },
              {
                title: 'Focused melatonin biosynthesis project',
                detail: 'Easier to evaluate because the build target, analytical proof, and flower-validation goal all point to the same claim.',
              },
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Reusable outputs',
            title: 'Several parts of FloraGuard could still be useful beyond this exact flower application',
            items: [
              {
                title: 'Pathway-centered project logic',
                detail: 'An example of how to tie one engineered molecule to one real post-harvest problem.',
              },
              {
                title: 'Bench-to-application proof chain',
                detail: 'A workflow that links route construction, analytical verification, and phenotype validation in one sequence.',
              },
              {
                title: 'Bounded translation framing',
                detail: 'A way to discuss real-world use without implying that live engineered cells must become the deployed product.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Contribution',
            title: 'What FloraGuard contributes',
            blocks: [
              list([
                'a synthetic-biology route for thinking about cut-flower preservation through microbial melatonin production',
                'an integrated proof chain from engineered chassis to floral phenotype outcome',
                'a translation framework that keeps purified or bounded outputs central to implementation',
              ]),
              paragraph(
                'These contributions make FloraGuard more than a flower-care idea. They show how metabolic engineering can be connected to a post-harvest horticultural use case without losing sight of application, safety, or evidence.',
              ),
            ],
          },
          {
            eyebrow: 'Why it matters',
            title: 'Why the contribution is broader than one molecule',
            blocks: [
              paragraph(
                'Even if the final product format changes, the project still leaves behind a reusable sequence for applied plant-care work: choose a tractable molecule, build the production route, verify the chemistry, validate the phenotype, and translate cautiously.',
              ),
            ],
          },
          {
            eyebrow: 'Comparison',
            title: 'How FloraGuard differs from typical preservation thinking',
            blocks: [
              table(
                ['Question', 'Typical approach', 'FloraGuard approach'],
                [
                  ['What is the main object?', 'a preservative recipe or handling condition', 'an engineered molecule and the route that produces it'],
                  ['What counts as proof?', 'some extension of vase life', 'production evidence plus flower outcome'],
                  ['How is translation discussed?', 'often as a generic product idea', 'through explicit bounded-output and biosafety logic'],
                ],
              ),
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'team',
    title: 'Team',
    summary:
      'Introduce the people, literature, and coordination logic behind FloraGuard.',
    pages: [
      {
        slug: 'team',
        navTitle: 'Team',
        title: 'Team',
        summary:
          'FloraGuard depends on metabolic engineering, plant physiology, analytics, modeling, and translation work moving together.',
        highlights: [
          'This project needs strong pathway-design and analytical support.',
          'Plant and floral physiology remain central because the final readout is still the flower.',
          'Work-package ownership matters because no one subgroup can prove the whole project alone.',
        ],
        nextAdd: [
          'Member names, portraits, and biographies',
          'An ownership matrix for pathway engineering, analytics, flower assays, and HP',
          'Advisor and institutional acknowledgements',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'team',
            eyebrow: 'Team picture',
            title: 'The team page shows who owns each part of FloraGuard',
            image: floralTeamCollageArt,
            alt:
              'Illustrated team collage showing multiple work packages around the FloraGuard project.',
            caption:
              'FloraGuard depends on coordinated work across pathway engineering, analytics, flower assays, and translation.',
            lede:
              'Because FloraGuard spans microbial engineering and plant application, the team structure has to make those responsibilities visible.',
            points: [
              'Pathway work and flower work need clear owners.',
              'Analytics and data interpretation need named responsibility.',
              'The team structure should mirror the proof chain.',
            ],
          },
          {
            type: 'profile-grid',
            eyebrow: 'Work packages',
            title: 'Five work packages structure the team',
            items: [
              {
                label: 'WP-01',
                title: 'Pathway engineering',
                detail: 'Construct design, strain building, and route optimization in E. coli.',
              },
              {
                label: 'WP-02',
                title: 'Analytics',
                detail: 'Melatonin detection, standards, quantification, and interpretation of production data.',
              },
              {
                label: 'WP-03',
                title: 'Flower assays',
                detail: 'Cut-flower treatment setup, phenotype scoring, and vase-life measurement.',
              },
              {
                label: 'WP-04',
                title: 'Modeling and data',
                detail: 'Dry-lab support for route optimization and treatment-design decisions.',
              },
              {
                label: 'WP-05',
                title: 'HP and implementation',
                detail: 'Stakeholder integration, safety framing, and public-facing project narrative.',
              },
            ],
          },
          {
            type: 'art-card-grid',
            eyebrow: 'Coordination',
            title: 'No single work package can prove FloraGuard alone',
            items: [
              {
                image: floralTeamNetworkArt,
                alt: 'Illustrated team network connecting work packages.',
                label: 'Coordination',
                title: 'The pathway team and flower team need each other continuously',
                detail:
                  'Production data changes which flower assays are worth running, and flower results decide whether more pathway optimization is justified.',
              },
              {
                image: floralNotesArt,
                alt: 'Illustrated notebook and planning board.',
                label: 'Planning',
                title: 'Documentation stays tied to experiments and decisions',
                detail:
                  'Build decisions, assay plans, and HP revisions need to stay synchronized across the season.',
              },
              {
                image: floralTeamCollageArt,
                alt: 'Illustrated team collage around the project.',
                label: 'Identity',
                title: 'The page still needs to show the people behind the work',
                detail:
                  'Once names and photos are added, the page should still make it obvious who owned which part of the work.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Composition',
            title: 'A multidisciplinary team',
            blocks: [
              paragraph('FloraGuard is best supported by a team that includes:'),
              list([
                'metabolic engineering and microbial genetics',
                'plant physiology and post-harvest biology',
                'analytical chemistry or assay validation',
                'modeling, data analysis, and project translation',
              ]),
            ],
          },
          {
            eyebrow: 'Organization',
            title: 'How the work packages fit the new project direction',
            blocks: [
              table(
                ['Work package', 'Main responsibilities', 'What it contributes to the wiki'],
                [
                  ['Pathway Engineering', 'strain design, construct assembly, route optimization', 'evidence for the build core'],
                  ['Analytics', 'melatonin detection and quantification', 'evidence that the chassis works'],
                  ['Flower Assays', 'treatment comparison and vase-life validation', 'evidence that the product matters'],
                  ['Modeling', 'dry-lab support and decision logic', 'evidence for smarter iteration'],
                  ['HP + Translation', 'stakeholder logic, safety, implementation', 'evidence for real-world relevance'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Coordination',
            title: 'Why coordination matters as much as specialization',
            blocks: [
              paragraph(
                'Every work package depends on the others. A strong pathway result means little without flower validation, and a promising flower result means little without trustworthy production evidence.',
              ),
            ],
          },
        ],
      },
      {
        slug: 'references',
        navTitle: 'References',
        title: 'References',
        summary:
          'The literature base for FloraGuard falls into three groups: melatonin biology, microbial biosynthesis, and post-harvest preservation.',
        highlights: [
          'Core references justify why melatonin is worth targeting biologically.',
          'Microbial biosynthesis papers support the chassis and route-design logic.',
          'Cut-flower and post-harvest papers support the application side of the project.',
        ],
        nextAdd: [
          'Method papers for analytical melatonin detection and quantification',
          'More cut-flower specific post-harvest studies as the target species set is finalized',
          'Additional references for pathway optimization and fermentation engineering',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'references',
            eyebrow: 'Literature map',
            title: 'The references are grouped by what they justify in the project',
            image: floralReferenceMapArt,
            alt:
              'Illustrated literature map used as the cover art for the references page.',
            caption:
              'The literature is grouped by what it supports in FloraGuard.',
            lede:
              'FloraGuard does not rest on one kind of paper. It depends on literature about melatonin itself, literature about making it microbially, and literature about what it does in post-harvest flowers.',
            points: [
              'Group papers by what they justify.',
              'Keep build-side and application-side references balanced.',
              'Add method papers as the experiments become more specific.',
            ],
          },
          {
            type: 'citation-clusters',
            eyebrow: 'Citation groups',
            title: 'Three literature groups support the main claims',
            items: [
              {
                support: 'Supports melatonin biology and senescence delay',
                title: 'Melatonin in plant stress and post-harvest systems',
                papers: [
                  'Arnao MB, Hernandez-Ruiz J. Melatonin in plants: growth regulator and antioxidant.',
                  'Zhang N et al. Roles of melatonin in plant stress tolerance.',
                  'The role of melatonin in delaying senescence and maintaining quality in postharvest horticultural products.',
                ],
              },
              {
                support: 'Supports the synthetic-biology build core',
                title: 'Microbial melatonin biosynthesis',
                papers: [
                  'Combining protein and metabolic engineering strategies for biosynthesis of melatonin in Escherichia coli.',
                  'Biosynthesis of melatonin from L-tryptophan by an engineered microbial cell factory.',
                ],
              },
              {
                support: 'Supports flower-facing application validation',
                title: 'Cut-flower and ornamental preservation studies',
                papers: [
                  'Eco-friendly extension of postharvest longevity in Alstroemeria cut flowers using melatonin and putrescine treatments.',
                  'Nanochitosan-encapsulated melatonin: an eco-friendly strategy to delay petal senescence in cut gerbera flowers.',
                ],
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Core literature',
            title: 'Key references supporting FloraGuard',
            blocks: [
              references([
                'Arnao MB, Hernandez-Ruiz J. Melatonin in plants: growth regulator and antioxidant. Plant Cell Physiology (2015).',
                'Zhang N et al. Roles of melatonin in plant stress tolerance. Journal of Pineal Research (2015).',
                'Combining protein and metabolic engineering strategies for biosynthesis of melatonin in Escherichia coli. Microbial Cell Factories (2021).',
                'Biosynthesis of melatonin from L-tryptophan by an engineered microbial cell factory. Bioresources and Bioprocessing (2024).',
                'Eco-friendly extension of postharvest longevity in Alstroemeria cut flowers using melatonin and putrescine treatments. South African Journal of Botany (2025).',
                'Nanochitosan-encapsulated melatonin: an eco-friendly strategy to delay petal senescence in cut gerbera flowers. BMC Plant Biology (2024).',
                'The role of melatonin in delaying senescence and maintaining quality in postharvest horticultural products. Critical Reviews in Food Science and Nutrition (2024).',
              ]),
            ],
          },
          {
            eyebrow: 'Reference map',
            title: 'How the literature supports each section',
            blocks: [
              table(
                ['Literature pillar', 'Supports pages', 'Main idea supported'],
                [
                  ['Melatonin biology', 'Project Description, Problem, Wet Lab', 'why melatonin is a plausible anti-senescence lever'],
                  ['Microbial biosynthesis', 'Design, Engineering, Wet Lab', 'why engineered E. coli is a reasonable chassis and route target'],
                  ['Post-harvest preservation', 'Problem, Wet Lab, Implementation', 'why flower validation matters and what outcomes should be measured'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Expansion plan',
            title: 'References still to add',
            blocks: [
              list(
                [
                  'analytical methods for melatonin detection and quantification',
                  'species-specific cut-flower senescence studies for the chosen floral models',
                  'route-optimization and fermentation-engineering references for later DBTL cycles',
                ],
                'ordered',
              ),
              callout(
                'The final reference list should support every major claim in the project: why melatonin, why this chassis, and why these flower readouts.',
              ),
            ],
          },
        ],
      },
    ],
  },
]

const pageMedia = {
  'project-description': {
    image: floralSupplyChainArt,
    imageAlt: 'Illustrated floral supply chain showing post-harvest stress before flowers reach consumers.',
    imageCaption: 'The project begins with post-harvest loss and narrows toward a microbial preservation strategy.',
  },
  'problem-inspiration': {
    image: floralStressArt,
    imageAlt: 'Illustrated contrast between fresh flowers and senescing flowers.',
    imageCaption: 'Cut-flower senescence is a visible post-harvest problem with real commercial cost.',
  },
  design: {
    image: floralPathwayBoardArt,
    imageAlt: 'Illustrated pathway architecture board representing the design sequence.',
    imageCaption: 'The design links route chemistry, optimization levers, analytics, and application in one sequence.',
  },
  engineering: {
    image: floralFermentationBoardArt,
    imageAlt: 'Fermentation and readout board used for the engineering page.',
    imageCaption: 'The DBTL cycle revolves around one central build target: measurable microbial melatonin production.',
  },
  'wet-lab': {
    image: floralFermentationBoardArt,
    imageAlt: 'Fermentation and flower validation illustration for the wet-lab page.',
    imageCaption: 'Wet-lab work moves from pathway construction to assay signal and preserved flowers.',
  },
  'dry-lab': {
    image: floralModelDecisionBoardArt,
    imageAlt: 'Illustrated model board showing trajectories and intervention windows.',
    imageCaption: 'Dry lab supports route optimization and treatment design rather than becoming a separate platform.',
  },
  hardware: {
    image: floralHardwareBlueprintArt,
    imageAlt: 'Illustrated blueprint panel for measurement and support tools.',
    imageCaption: 'Application-support tools serve evidence capture and phenotyping.',
  },
  'integrated-human-practices': {
    image: floralInterviewWallArt,
    imageAlt: 'Illustrated interview wall connecting stakeholders to the project.',
    imageCaption: 'Human Practices asks what kind of melatonin-based preservation product would be useful and acceptable.',
  },
  safety: {
    image: floralBoundedFormatsArt,
    imageAlt: 'Illustrated bounded-format board suggesting controlled biosafety practice.',
    imageCaption: 'Safety is grounded in confinement, separation of product from live cells, and bounded translation.',
  },
  implementation: {
    image: floralBoundedFormatsArt,
    imageAlt: 'Illustrated bounded-format journey from lab work to deployment contexts.',
    imageCaption: 'Implementation emphasizes staged translation and product-format boundaries.',
  },
  contribution: {
    image: floralBenchToFlowerArt,
    imageAlt: 'Illustrated bench-to-flower banner representing FloraGuard as a synthetic-biology framework.',
    imageCaption: 'The project contributes a focused build-to-application framework for floriculture.',
  },
  team: {
    image: floralTeamCollageArt,
    imageAlt: 'Illustrated team role collage for the FloraGuard team page.',
    imageCaption: 'The team structure mirrors the project proof chain from pathway to phenotype.',
  },
  references: {
    image: floralReferenceMapArt,
    imageAlt: 'Illustrated literature map for the FloraGuard bibliography.',
    imageCaption: 'The bibliography is organized around melatonin biology, microbial biosynthesis, and post-harvest application.',
  },
}

const allPages = wikiGroups.flatMap((group) =>
  group.pages.map((page) => ({
    ...page,
    ...pageMedia[page.slug],
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

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function dropdownNavigationMarkup(activeSlug = '') {
  const activeGroup = getGroupForPageSlug(activeSlug)

  return wikiGroups
    .map(
      (group) => `
        <details class="nav-dropdown ${activeGroup?.slug === group.slug ? 'is-active' : ''}">
          <summary class="nav-trigger">
            <span>${escapeHtml(group.title)}</span>
            <span class="nav-caret" aria-hidden="true"></span>
          </summary>
          <div class="dropdown-menu">
            <p class="dropdown-kicker">${escapeHtml(group.summary)}</p>
            <div class="dropdown-links">
            ${group.pages
              .filter((page) => page.slug !== 'references')
              .map(
                (page) => `
                  <a class="nav-link ${page.slug === activeSlug ? 'active' : ''}" href="${pageHref(page.slug)}">
                    ${escapeHtml(page.navTitle ?? page.title)}
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
        closeAll(dropdown)
        dropdown.open = shouldOpen
      }
    })

    dropdown.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        closeAll()
      })
    })
  })

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-nav')) {
      closeAll()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAll()
    }
  })
}

export {
  dropdownNavigationMarkup,
  escapeHtml,
  flattenPages,
  getPageBySlug,
  getGroupForPageSlug,
  homePage,
  initDropdownNav,
  pageHref,
  siteMeta,
  wikiGroups,
}
