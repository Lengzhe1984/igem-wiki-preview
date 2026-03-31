import floralHeroArt from './assets/floraguard-hero.svg'
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
import floralAssayDashboardArt from './assets/floral-assay-dashboard.svg'
import floralHardwareBlueprintArt from './assets/floral-hardware-blueprint.svg'
import floralPathwayBoardArt from './assets/floral-pathway-board.svg'
import floralFermentationBoardArt from './assets/floral-fermentation-board.svg'
import floralBoundedFormatsArt from './assets/floral-bounded-formats.svg'
import floralTeamNetworkArt from './assets/floral-team-network.svg'
import floralModelDecisionBoardArt from './assets/floral-model-decision-board.svg'
import floralImplementationJourneyArt from './assets/floral-implementation-journey.svg'
import floralInterviewWallArt from './assets/floral-interview-wall.svg'

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
    'FloraGuard reframes cut-flower preservation as one scientific chain: build the route, verify the molecule, test the flower, then translate bounded formats.',
  lead: [
    'Cut flowers lose value quickly after harvest because dehydration, oxidative stress, hormone imbalance, and handling variability all accelerate senescence. The current floral industry mostly responds with static preservatives and cold-chain management, but those tools do not explain or control the biology behind decline.',
    'FloraGuard focuses on one biologically meaningful molecule, melatonin, and asks whether engineered Escherichia coli can become a controllable production chassis for floral preservation.',
    'FloraGuard therefore connects three proof layers in one story: microbial melatonin biosynthesis, analytical confirmation of the product, and application validation on cut flowers under post-harvest stress.',
  ],
  status: [
    'The project is organized around pathway design, melatonin production, quantification, and flower preservation validation.',
    'The build story now runs cleanly from engineered chassis to floral phenotype outcome.',
    'Safety and implementation are framed around purified or otherwise bounded output formats.',
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
        'Cut flowers can lose market value within days, and a large share of the loss happens before consumers even realize the bouquet is already stressed.',
    },
    {
      title: 'Current preservation is mostly static',
      detail:
        'Sugar solutions, antimicrobials, and refrigeration help in some settings, but they do not create a biologically programmable preservation workflow.',
    },
    {
      title: 'Melatonin is promising but supply and format matter',
      detail:
        'Literature suggests melatonin can buffer oxidative stress and delay senescence, but turning that into a practical floral strategy requires production and validation.',
    },
    {
      title: 'Translation needs bounded outputs',
      detail:
        'A useful iGEM project cannot stop at pathway engineering. It also needs to show how the product could be delivered without releasing engineered microbes into the floral chain.',
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
      title: 'The biological problem stays visible',
      detail:
        'Even with a new project core, the floral side of the story still matters: dehydration, ROS accumulation, and post-harvest handling define why a molecule like melatonin is worth engineering around.',
    },
    {
      image: floralFermentationBoardArt,
      alt: 'Illustrated fermentation and validation board linking construct design to flower readout.',
      title: 'Production proof now looks like an experimental chain rather than an isolated assay',
      detail:
        'This version of FloraGuard is not only about applying melatonin. It is about showing how route construction, fermentation output, and flower validation sit next to one another on the same page.',
    },
  ],
  atlasCards: [
    {
      image: floralSupplyChainArt,
      alt: 'Illustrated flower supply chain showing where senescence pressure accumulates.',
      label: 'Problem',
      title: 'Post-harvest stress begins long before the vase',
      detail:
        'The homepage now starts from floral logistics and senescence pressure so the need for preservation stays concrete from the first screen onward.',
    },
    {
      image: floralPathwayBoardArt,
      alt: 'Illustrated board linking pathway logic, analytical output, and decision windows.',
      label: 'Science',
      title: 'Pathway design and quantification now sit visibly at the center of the project',
      detail:
        'Readers should understand that FloraGuard is first a metabolic-engineering project and only then a preservation application project.',
    },
    {
      image: floralBoundedFormatsArt,
      alt: 'Illustrated staged rollout from lab work to bounded application formats.',
      label: 'Translation',
      title: 'Implementation is staged around bounded outputs',
      detail:
        'The project no longer implies a smart-vase-first rollout. Instead, it emphasizes purified products, florist-facing pilots, and careful translation.',
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
    eyebrow: 'Project angle',
    title: 'FloraGuard now reads as one bench-to-flower story instead of a loose collection of preservation ideas',
    summary:
      'FloraGuard asks a focused iGEM question: can an engineered microbial chassis make a molecule with real preservation value for cut flowers, and can that value be validated responsibly from pathway to phenotype?',
    quote:
      'A convincing preservation project should prove one clear chain from pathway output to flower outcome.',
    image: floralSupplyChainArt,
    alt:
      'Illustrated supply chain art showing cut flowers moving through harvest, transport, and care contexts.',
    caption:
      'The homepage connects floral waste, microbial production, and application validation in one continuous argument.',
    chips: ['Cut flowers', 'Melatonin', 'E. coli chassis', 'Bounded translation'],
    points: [
      'Keep the industrial and consumer relevance of flower preservation visible.',
      'Center the scientific novelty on microbial melatonin production rather than on generic smart monitoring.',
      'Show that application validation and safety planning are part of the same story, not an afterthought.',
    ],
  },
  evidencePreview: [
    {
      label: 'Production proof',
      title: 'Construct maps, titer curves, and bottleneck evidence anchor the build story',
      detail:
        'The new wet-lab core needs figures that show how the chassis was engineered and what actually improved output.',
    },
    {
      label: 'Application proof',
      title: 'Flower phenotype and vase-life boards reveal why microbial melatonin is worth making',
      detail:
        'A preservation project becomes convincing only when readers can see both the cut-flower phenotype and the quantitative outcome.',
    },
    {
      label: 'Translation proof',
      title: 'Safety and implementation keep bounded product formats visible',
      detail:
        'Future application depends on purified or otherwise controlled outputs, not live environmental release.',
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
          'A one-page overview figure from pathway engineering to flower outcome',
          'A clear construct map showing the chosen biosynthesis route',
          'Additional floral post-harvest citations for species-specific senescence behavior',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'project',
            eyebrow: 'Project frame',
            title: 'The project starts with one narrower question: can we make a preservation molecule and prove that it matters?',
            image: floralSupplyChainArt,
            alt:
              'Illustrated floral supply chain showing where value is lost before flowers reach consumers.',
            caption:
              'The floral problem stays visible even as the scientific core shifts toward metabolic engineering.',
            lede:
              'This page connects commercial flower loss to a tractable synthetic-biology task. FloraGuard focuses on producing melatonin in a controllable chassis and validating that output on real cut flowers.',
            points: [
              'Keep the flower-industry problem visible from the start.',
              'State clearly that microbial melatonin production is the new core engineering challenge.',
              'Treat application testing as proof of relevance, not as a separate later idea.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'Project logic',
            title: 'Three layers make the new FloraGuard story readable at a glance',
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
                detail: 'The produced or formulated melatonin is tested on flowers through phenotype and vase-life outcomes.',
              },
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Concept shift',
            title: 'The current concept is more focused than the previous platform-style framing',
            items: [
              {
                title: 'Broad preservation platform',
                detail: 'Many ideas were connected at once, but the scientific proof chain was diffuse and harder to validate cleanly.',
              },
              {
                title: 'Focused biosynthesis-and-validation project',
                detail: 'The new version centers on one molecule, one chassis, and one translational question: can engineered melatonin production improve cut-flower preservation in a measurable way?',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Background',
            title: 'Why cut flower preservation remains a difficult biological problem',
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
            title: 'Why melatonin became the centerpiece of FloraGuard',
            blocks: [
              paragraph(
                'Melatonin has been repeatedly reported as a multifunctional regulator in plants and post-harvest systems. It is associated with improved antioxidant capacity, reduced ROS burden, and delayed senescence under several stress contexts.',
              ),
              paragraph(
                'That makes melatonin attractive not only as an exogenous treatment, but also as a target product for synthetic-biology production. If an engineered microbial chassis can generate it in a controllable way, the project gains a direct bridge between metabolic engineering and floral preservation.',
              ),
              callout(
                'The key hypothesis is simple: if engineered E. coli can produce melatonin reliably enough, that product may become the basis of a safer and more programmable cut-flower preservation strategy.',
              ),
            ],
          },
          {
            eyebrow: 'Project scope',
            title: 'What FloraGuard now tries to prove',
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
                'The project therefore spans metabolic engineering, analytical chemistry, and post-harvest flower validation. That scope is ambitious but coherent, because every page now supports the same central proof chain.',
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
            title: 'Floral waste becomes easier to understand when readers can see where value is lost',
            image: floralStressArt,
            alt: 'Illustrated contrast between fresh bouquets and stressed flowers.',
            caption:
              'The problem page makes senescence pressure visible before the build strategy appears.',
            lede:
              'This page anchors the project in a real post-harvest problem. Flowers do not simply fade at home; they accumulate stress across harvest, storage, transport, retail display, and household care.',
            points: [
              'Use flower examples that readers immediately recognize.',
              'Show that the preservation challenge starts before the consumer ever sees the bouquet.',
              'Connect that pressure to a need for better biological intervention.',
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
            title: 'Why the biosynthesis angle matters',
            blocks: [
              paragraph(
                'A melatonin application project alone would still be interesting, but an iGEM project becomes more distinctive when it asks how the molecule is made, optimized, measured, and translated. That is why the new version of FloraGuard focuses on engineered microbial production instead of preservation logic alone.',
              ),
              callout(
                'The inspiration behind FloraGuard is not only that melatonin may help flowers. It is that synthetic biology may make that help programmable, measurable, and eventually scalable.',
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
          'The design page turns FloraGuard into a modular route from pathway engineering to flower validation.',
        highlights: [
          'The project is designed around a microbial chassis, a melatonin pathway, analytical verification, and application testing.',
          'Route optimization may include precursor and cofactor logic such as BH4-related support when relevant.',
          'The final design is bench-to-application, not hardware-first.',
        ],
        nextAdd: [
          'A pathway diagram showing the chosen enzymatic route from tryptophan to melatonin',
          'Construct architecture and plasmid diagrams for the selected genes',
          'A clean system schematic linking fermentation output to flower treatment validation',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'design',
            eyebrow: 'System architecture',
            title: 'One coherent chain links chassis engineering, product verification, and flower outcome',
            image: floralPathwayBoardArt,
            alt: 'Illustrated pathway board connecting melatonin chemistry, optimization levers, and evidence gates.',
            caption:
              'The design page now makes the route, the optimization layer, and the evidence gate legible on one board.',
            lede:
              'The design links each module to the next. In FloraGuard, the order is chassis design, pathway expression, product verification, and post-harvest validation.',
            points: [
              'Keep the metabolic route visible, not hidden behind generic preservation language.',
              'Explain where analytical confirmation happens before application testing.',
              'Show how translation constraints influence the design from the start.',
            ],
          },
          {
            type: 'profile-grid',
            eyebrow: 'Module roles',
            title: 'Each design layer has one clear responsibility in the project logic',
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
            eyebrow: 'Design atlas',
            title: 'Three design visuals make the scientific chain easier to read before the final figures arrive',
            items: [
              {
                image: floralPathwayBoardArt,
                alt: 'Illustrated pathway board with melatonin route stages.',
                label: 'Route',
                title: 'The chemistry should be visible enough that readers can trace where melatonin comes from',
                detail:
                  'A design page is stronger when the route from tryptophan-derived metabolism to melatonin is visible before readers reach the construct details.',
              },
              {
                image: floralFermentationBoardArt,
                alt: 'Illustrated fermentation and validation board.',
                label: 'Evidence',
                title: 'The route only matters if the assay layer is already built into the design',
                detail:
                  'FloraGuard now treats quantification as a design requirement instead of something added after the constructs are built.',
              },
              {
                image: floralBoundedFormatsArt,
                alt: 'Illustrated bounded product formats and translation boundaries.',
                label: 'Boundary',
                title: 'Implementation constraints should already shape what counts as a good design',
                detail:
                  'The design is stronger when it anticipates bounded outputs and does not imply that live engineered cells are the deployed product.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'Bench-to-flower route',
            title: 'The FloraGuard design is easiest to grasp when it reads as one ordered sequence',
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
                'The project begins with engineered E. coli as a microbial cell factory. The pathway design centers on converting a tryptophan-derived metabolic stream toward melatonin through a set of decarboxylation, hydroxylation, acetylation, and methylation reactions.',
              ),
              paragraph(
                'A practical route can therefore be described as a candidate enzyme sequence from tryptophan-derived intermediates to serotonin, then to N-acetylserotonin, and finally to melatonin. The exact enzyme set may vary, but the route has to stay readable enough that each later optimization step makes sense.',
              ),
              paragraph(
                'The exact enzyme combination can vary with route choice, but the design principle stays the same: make melatonin production explicit, modular, and optimizable.',
              ),
            ],
          },
          {
            eyebrow: 'Module 2',
            title: 'Production optimization and route support',
            blocks: [
              paragraph(
                'A pathway that exists on paper may still perform poorly in cells. That is why FloraGuard includes a dedicated optimization layer for precursor balance, expression strength, and route bottlenecks.',
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
          'The engineering story of FloraGuard now follows a clearer Design-Build-Test-Learn loop around melatonin biosynthesis and flower validation.',
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
            title: 'DBTL now follows one main object: the melatonin-producing chassis',
            image: floralLabArt,
            alt: 'Illustrated floral lab scene used as a DBTL cover image.',
            caption:
              'A stronger engineering page shows how each iteration changed the route or the flower outcome.',
            lede:
              'Every DBTL cycle should answer whether the chassis, the output, or the application design improved.',
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
                detail: 'Which melatonin route, enzymes, and proof criteria should define the project?',
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
                detail: 'Which bottlenecks in pathway performance or application format should be revised next?',
              },
            ],
          },
          {
            type: 'evidence-strip',
            eyebrow: 'Iteration board',
            title: 'Each DBTL cycle should leave a visible artifact',
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
      'Show how production, quantification, and application experiments support the new FloraGuard concept.',
    pages: [
      {
        slug: 'wet-lab',
        navTitle: 'Wet Lab',
        title: 'Wet Lab',
        summary:
          'The wet lab is now organized around pathway construction, melatonin quantification, and flower-preservation validation.',
        highlights: [
          'Aim 1 builds the melatonin biosynthesis route in E. coli.',
          'Aim 2 measures and optimizes output through pathway and culture variables.',
          'Aim 3 tests whether melatonin-centered treatments delay senescence in cut flowers.',
        ],
        nextAdd: [
          'Construct maps, strain tables, and fermentation timelines',
          'Chromatograms or equivalent analytical evidence for melatonin production',
          'Flower phenotype boards and replication-aware vase-life plots',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'wet',
            eyebrow: 'Figure board',
            title: 'The wet lab follows one chain from engineered cells to healthier flowers',
            image: floralFermentationBoardArt,
            alt: 'Illustrated wet-lab chain with route build, fermentation check, and flower readout.',
            caption:
              'A strong wet-lab spread now reads left to right: route build, production check, and flower outcome.',
            lede:
              'This page is about making one molecule, measuring it well, and deciding whether that molecule changes the flower.',
            points: [
              'Pair construct logic with analytical results.',
              'Keep production and application experiments visibly linked.',
              'Reserve space for side-by-side phenotype images across time.',
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
            eyebrow: 'Wet-lab atlas',
            title: 'The strongest experiment pages show constructs, chemistry, and phenotype in parallel',
            items: [
              {
                image: floralFermentationBoardArt,
                alt: 'Illustrated fermentation board connecting build decisions to assay outputs.',
                label: 'Analytics',
                title: 'Production data appears beside pathway decisions',
                detail:
                  'Readers should not need to jump between pages to understand whether the chassis really made melatonin.',
              },
              {
                image: floralPhenotypeBoardArt,
                alt: 'Illustrated phenotype board tracking flower appearance over multiple days.',
                label: 'Phenotype',
                title: 'Flower images make the treatment effect obvious before the reader studies the plots',
                detail:
                  'A strong evidence board benefits from a day-by-day visual timeline for control and treatment groups.',
              },
              {
                image: floralWetLabArt,
                alt: 'Illustrated bench scene with flowers, dishes, and scoring motifs.',
                label: 'Protocol',
                title: 'Sampling and scoring remain visible',
                detail:
                  'Good wet-lab pages show enough of the protocol rhythm that the reader trusts the measurements behind the final summary figure.',
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
                'The first wet-lab objective is to establish a functional melatonin route in E. coli. This requires choosing a pathway architecture, assembling the necessary genes, and confirming that the chassis can move flux toward melatonin rather than stalling at upstream intermediates.',
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
                'Once the pathway is assembled, the next goal is to determine whether melatonin is produced in a detectable and optimizable way. This stage may involve chromatographic assays, standards-based comparison, and screening of culture or construct variables.',
              ),
              list([
                'compare production across constructs or induction settings',
                'screen precursor supplementation or flux-routing changes',
                'evaluate cofactor-related support such as BH4-linked route needs where relevant',
              ]),
              paragraph(
                'This aim is essential because the project only becomes credible when the preservation story is backed by real production data.',
              ),
            ],
          },
          {
            eyebrow: 'Aim 3',
            title: 'Validate preservation performance on cut flowers',
            blocks: [
              paragraph(
                'The third objective is to test whether melatonin-centered treatment delays cut-flower senescence relative to appropriate controls. Depending on formulation and safety boundaries, this may use purified melatonin, prepared treatment solutions, or carefully bounded extracts for experimental comparison.',
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
          'Dry lab now serves the wet lab instead of acting like a separate platform.',
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
            eyebrow: 'Model story',
            title: 'Dry lab is strongest when it helps choose what to build and what to test next',
            image: floralDryLabArt,
            alt: 'Illustrated modeling interface with trajectories and decision outputs.',
            caption:
              'The dry lab now exists to support pathway and application decisions, not to become a separate product on its own.',
            lede:
              'A useful model can narrow experimental choices. In FloraGuard, that means helping us think about pathway bottlenecks, likely intervention windows, and which treatment comparisons are most informative.',
            points: [
              'Use modeling to prioritize route optimization rather than to decorate the project.',
              'Keep production-side and flower-side decisions connected.',
              'End with a decision, not only a curve.',
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
          'This page now covers optional imaging, logging, and assay-support tools that help standardize flower evaluation rather than acting as the core project itself.',
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
            title: 'Application-support tools now exist to improve evidence quality, not to define the whole project',
            image: floralHardwareBlueprintArt,
            alt:
              'Illustrated blueprint-like panel for a measurement and support workflow.',
            caption:
              'The role of hardware has been reduced and clarified in this project version.',
            lede:
              'A simple support layer can still be valuable. Standardized image capture, condition logging, and treatment records can make flower comparisons more convincing even when hardware is not the scientific centerpiece.',
            points: [
              'Use tools to standardize phenotype documentation.',
              'Keep the support layer clearly subordinate to the biosynthesis-and-validation story.',
              'Avoid implying that a user-facing device is already the main output of the project.',
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
            title: 'What this page contributes to the current project',
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
            title: 'How support tools could evolve later',
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
          'Human Practices now focuses on whether a melatonin-based floral preservation product would be meaningful, affordable, and safe in real post-harvest settings.',
        highlights: [
          'Stakeholders still include growers, distributors, florists, and consumers.',
          'The new project direction raises stronger questions about cost, formulation, and bounded use than the previous broad platform concept.',
          'Social value comes from reducing waste without increasing biosafety burden.',
        ],
        nextAdd: [
          'Interview dates, methods, and anonymized quotes',
          'A diagram mapping stakeholder needs to specific design revisions',
          'Comparisons between academic feasibility and operational practicality',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'human',
            eyebrow: 'Stakeholder picture',
            title: 'Human Practices explains why this biosynthesis project matters beyond the bench',
            image: floralStakeholderMapArt,
            alt:
              'Illustrated stakeholder map connecting the floral chain to the FloraGuard project.',
            caption:
              'The latest HP direction is less about generic flower care and more about meaningful, bounded translation.',
            lede:
              'A stakeholder-driven page helps answer whether a melatonin-based preservation strategy would actually solve a real problem for the floral chain. It also helps define what format would be acceptable outside the lab.',
            points: [
              'Keep floral waste and product practicality in the same conversation.',
              'Ask how a preservation molecule would be used, not only whether it can be produced.',
              'Use HP to justify cost, safety, and deployment choices.',
            ],
          },
          {
            type: 'stakeholder-grid',
            eyebrow: 'Stakeholder map',
            title: 'Different actors care about different parts of the preservation problem',
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
            title: 'Stakeholder input reshapes the project in concrete ways',
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
            ],
          },
          {
            eyebrow: 'Insights',
            title: 'What becomes most important once the project centers on melatonin biosynthesis',
            blocks: [
              paragraph(
                'Once FloraGuard becomes a melatonin biosynthesis project, Human Practices changes too. The central questions are no longer only about monitoring or flower-care advice. They are also about whether the molecule can be delivered affordably, whether users would accept the product format, and how translation can stay safe.',
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
            title: 'How stakeholder thinking changes the project',
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
                'Human Practices should now reinforce one key message: even if engineered cells stay in the lab, the preservation value can still be translated through safer output formats.',
              ),
            ],
          },
          {
            eyebrow: 'Social value',
            title: 'Why this project could matter beyond iGEM',
            blocks: [
              paragraph(
                'If FloraGuard succeeds, it contributes more than one experiment. It suggests that synthetic biology can address post-harvest waste in a controlled, molecule-centered way that connects lab engineering to real horticultural value.',
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
          'Safety in the new FloraGuard concept is built around laboratory confinement, analytical clarity, and non-release translation.',
        highlights: [
          'Engineered E. coli remains confined to laboratory use.',
          'Future application should rely on purified or otherwise bounded outputs rather than live-cell deployment.',
          'Safety now applies to both biological handling and product-format decisions.',
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
            title: 'The clearest safety distinction is between what stays in the lab and what could leave it later',
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
            title: 'Three ideas organize the safety page',
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
            title: 'Safety questions change across the project lifecycle',
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
                'The most responsible translation path is to separate product value from live-cell deployment. That means favoring purified melatonin, bounded intermediate formulations, or similarly controlled outputs when discussing future implementation.',
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
                'A preservation product is not only a biological entity; it is also a handling workflow. For that reason, user-facing translation must be clear about dosing, storage, and intended use, and should not rely on opaque or autonomous decision logic.',
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
          'Implementation now centers on how a melatonin-based floral preservation concept could move from the lab toward bounded and practical use formats.',
        highlights: [
          'The most realistic path is lab validation, then florist-facing pilot, then simplified consumer translation.',
          'Implementation is tied to product format and biosafety boundary, not only to user interface.',
          'The project should never imply that live engineered cells go directly to bouquets.',
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
            title: 'Implementation is now about bounded product formats, not about pushing a device to market too early',
            image: floralBoundedFormatsArt,
            alt:
              'Illustrated translation board showing lab confinement, bounded outputs, and user-facing formats.',
            caption:
              'The current FloraGuard translation logic is staged, conservative, and explicitly separated from live-cell deployment.',
            lede:
              'This page now answers a more realistic question: if melatonin production and floral benefit are demonstrated, what forms of translation would still make operational and biosafety sense?',
            points: [
              'Start from lab evidence, not from product branding.',
              'Prefer florist-facing pilot scenarios before household claims.',
              'Keep purified or bounded outputs explicit throughout the page.',
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Deployment formats',
            title: 'Different users need different versions of the same preservation value',
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
            eyebrow: 'Rollout cadence',
            title: 'The strongest implementation path narrows the distance between molecule and market step by step',
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
            title: 'Implementation becomes more believable when each use context has its own logic',
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
                detail: 'A later consumer-facing version would need simplified presentation and stronger confidence in safety, consistency, and benefit.',
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
                'In the present project scope, FloraGuard is first a laboratory platform for melatonin biosynthesis and cut-flower validation. That is where the strongest evidence can be generated and where the pathway can be revised most safely.',
              ),
            ],
          },
          {
            eyebrow: 'Pilot use',
            title: 'Florist-oriented pilot',
            blocks: [
              paragraph(
                'If the project progresses beyond proof-of-concept, a florist-facing pilot is a more realistic first deployment target than immediate consumer use. Florists already handle flowers professionally and can judge whether a preservation treatment has visible value during display and sale.',
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
                'A future household format would require additional simplification and stronger proof. It would also need careful communication about what the treatment is, how it is used, and what kinds of flowers or conditions it is expected to help.',
              ),
            ],
          },
          {
            eyebrow: 'Implementation principle',
            title: 'Why staged translation matters',
            blocks: [
              paragraph(
                'The implementation story is stronger when it stays aligned with safety. FloraGuard should not jump from engineered cells in the lab to household use in one step. It should move through bounded outputs, pilot contexts, and evidence-based use claims.',
              ),
              callout(
                'Implementation succeeds when the product format, the user context, and the biosafety boundary are all legible on the same page.',
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
          'FloraGuard now contributes a more focused synthetic-biology framework for connecting microbial melatonin production to post-harvest flower preservation.',
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
            title: 'The current contribution is stronger because it is narrower and more testable',
            items: [
              {
                title: 'Generic preservation concept',
                detail: 'Interesting but harder to prove cleanly because the scientific object keeps shifting across pages.',
              },
              {
                title: 'Focused melatonin biosynthesis project',
                detail: 'Easier to evaluate because the build target, analytical proof, and flower-validation goal all point to the same central claim.',
              },
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Reusable outputs',
            title: 'Several parts of FloraGuard are transferable even beyond this exact flower application',
            items: [
              {
                title: 'Pathway-centered project logic',
                detail: 'A clear example of how to tie one engineered molecule to one real post-harvest problem.',
              },
              {
                title: 'Bench-to-application proof chain',
                detail: 'A workflow that links route construction, analytical verification, and phenotype validation without losing coherence.',
              },
              {
                title: 'Bounded translation framing',
                detail: 'A model for discussing real-world use without implying that live engineered cells must become the deployed product.',
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
                'These contributions make FloraGuard more than a flower-care idea. It becomes a structured example of how metabolic engineering can be connected to a post-harvest horticultural use case.',
              ),
            ],
          },
          {
            eyebrow: 'Why it matters',
            title: 'Why the contribution is broader than one molecule',
            blocks: [
              paragraph(
                'Even if the final product format evolves, the project still contributes a reusable way to design synthetic-biology projects for applied plant-care problems: choose a tractable molecule, build the production route, verify the chemistry, validate the phenotype, and translate cautiously.',
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
      'Introduce the people, literature, and coordination logic behind the current FloraGuard concept.',
    pages: [
      {
        slug: 'team',
        navTitle: 'Team',
        title: 'Team',
        summary:
          'FloraGuard depends on metabolic engineering, plant physiology, analytics, modeling, and translation work moving together.',
        highlights: [
          'This project requires stronger analytical and pathway-design support than the earlier concept.',
          'Plant and floral physiology remain central because preservation outcome must still be measured on flowers.',
          'A coherent wiki depends on clear work-package ownership.',
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
            title: 'The team page explains who carries each part of the proof chain',
            image: floralTeamCollageArt,
            alt:
              'Illustrated team collage showing multiple work packages around the FloraGuard project.',
            caption:
              'This page now needs to map people to pathway engineering, analytics, flower assays, and translation.',
            lede:
              'Because FloraGuard spans microbial engineering and plant application, the team page makes those responsibilities visible rather than presenting one generic member list.',
            points: [
              'Map people to pathway work and flower work separately.',
              'Reserve space for analytical chemistry and data interpretation roles.',
              'Keep team structure aligned with the project proof chain.',
            ],
          },
          {
            type: 'profile-grid',
            eyebrow: 'Work packages',
            title: 'Five practical work packages organize the team structure',
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
            eyebrow: 'Team atlas',
            title: 'Coordination matters because no single work package can prove the project alone',
            items: [
              {
                image: floralTeamNetworkArt,
                alt: 'Illustrated team network connecting work packages.',
                label: 'Coordination',
                title: 'The pathway team and flower team need each other continuously',
                detail:
                  'Production data changes which flower assays are worth running, and flower results determine whether more pathway optimization is justified.',
              },
              {
                image: floralNotesArt,
                alt: 'Illustrated notebook and planning board.',
                label: 'Planning',
                title: 'Documentation is part of the work, not separate from it',
                detail:
                  'The page should reveal how build decisions, assay plans, and HP revisions were coordinated across the season.',
              },
              {
                image: floralTeamCollageArt,
                alt: 'Illustrated team collage around the project.',
                label: 'Identity',
                title: 'The team page feels personal as well as structural',
                detail:
                  'Once names and photos are added, the page can still preserve the clarity of who owned which proof layer.',
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
                'The project only feels coherent when every work package informs the others. A beautiful pathway means little without flower validation, and a promising flower result means little without trustworthy production evidence.',
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
          'The literature base now supports melatonin biology, microbial melatonin biosynthesis, and post-harvest floral preservation.',
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
            title: 'The bibliography makes it clear which papers support which part of FloraGuard',
            image: floralReferenceMapArt,
            alt:
              'Illustrated literature map used as the cover art for the references page.',
            caption:
              'This version of the bibliography is grouped around project logic rather than dumped as an undifferentiated list.',
            lede:
              'The new project direction depends on three literature pillars: melatonin biology, microbial biosynthesis, and post-harvest preservation. Organizing references this way makes the whole wiki more legible.',
            points: [
              'Group papers by what they justify.',
              'Keep build-side and application-side references balanced.',
              'Add method papers as the experiments become more specific.',
            ],
          },
          {
            type: 'citation-clusters',
            eyebrow: 'Citation groups',
            title: 'The current literature set already maps onto the new project fairly cleanly',
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
            title: 'How the bibliography maps onto the current wiki',
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
            title: 'What the bibliography will deepen next',
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
                'A good final references page will support every major claim in the proof chain: why melatonin, why this chassis, and why these flower readouts.',
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
    image: floralHeroArt,
    imageAlt: 'Illustrated floral systems banner for the project description page.',
    imageCaption: 'FloraGuard now centers on engineered melatonin production and flower validation.',
  },
  'problem-inspiration': {
    image: floralStressArt,
    imageAlt: 'Illustrated contrast between fresh flowers and senescing flowers.',
    imageCaption: 'Cut-flower senescence is a visible post-harvest problem with real commercial cost.',
  },
  design: {
    image: floralHeroArt,
    imageAlt: 'Illustrated floral systems banner representing the design architecture.',
    imageCaption: 'The design links chassis, pathway, analytics, and application in one sequence.',
  },
  engineering: {
    image: floralLabArt,
    imageAlt: 'Floral lab illustration used for the engineering page.',
    imageCaption: 'The DBTL cycle now revolves around one central build target: microbial melatonin production.',
  },
  'wet-lab': {
    image: floralLabArt,
    imageAlt: 'Flower and lab instrumentation illustration for the wet-lab page.',
    imageCaption: 'Wet lab work moves from pathway construction to preserved flowers.',
  },
  'dry-lab': {
    image: floralModelDecisionBoardArt,
    imageAlt: 'Illustrated model board showing trajectories and intervention windows.',
    imageCaption: 'Dry lab supports route optimization and treatment design rather than becoming a separate platform.',
  },
  hardware: {
    image: floralHardwareBlueprintArt,
    imageAlt: 'Illustrated blueprint panel for measurement and support tools.',
    imageCaption: 'Application-support tools now serve evidence capture and phenotyping.',
  },
  'integrated-human-practices': {
    image: floralInterviewWallArt,
    imageAlt: 'Illustrated interview wall connecting stakeholders to the project.',
    imageCaption: 'Human Practices now asks what kind of melatonin-based preservation product would be useful and acceptable.',
  },
  safety: {
    image: floralLabArt,
    imageAlt: 'Lab-and-flower illustration suggesting controlled biosafety practice.',
    imageCaption: 'Safety is grounded in confinement, separation of product from live cells, and bounded translation.',
  },
  implementation: {
    image: floralImplementationJourneyArt,
    imageAlt: 'Illustrated staged rollout journey from lab work to bounded deployment formats.',
    imageCaption: 'Implementation now emphasizes staged translation and product-form boundaries.',
  },
  contribution: {
    image: floralHeroArt,
    imageAlt: 'Illustrated banner representing FloraGuard as a synthetic-biology framework.',
    imageCaption: 'The project contributes a focused build-to-application framework for floriculture.',
  },
  team: {
    image: floralTeamCollageArt,
    imageAlt: 'Illustrated team role collage for the FloraGuard team page.',
    imageCaption: 'The team structure should mirror the project proof chain from pathway to phenotype.',
  },
  references: {
    image: floralReferenceMapArt,
    imageAlt: 'Illustrated literature map for the FloraGuard bibliography.',
    imageCaption: 'The bibliography is now organized around melatonin biology, microbial biosynthesis, and post-harvest application.',
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
