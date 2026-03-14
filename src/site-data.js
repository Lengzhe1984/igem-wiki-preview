import floralHeroArt from './assets/floraguard-hero.svg'
import floralStressArt from './assets/floral-stress.svg'
import floralLabArt from './assets/floral-lab.svg'
import smartVaseArt from './assets/floral-smart-vase.svg'
import floralNotesArt from './assets/floral-notes.svg'
import floralSupplyChainArt from './assets/floral-supply-chain.svg'
import floralWetLabArt from './assets/floral-wet-lab.svg'
import floralDryLabArt from './assets/floral-dry-lab.svg'
import floralStakeholderMapArt from './assets/floral-stakeholder-map.svg'
import floralTeamCollageArt from './assets/floral-team-collage.svg'
import floralReferenceMapArt from './assets/floral-reference-map.svg'

const paragraph = (text) => ({ type: 'paragraph', text })
const list = (items, style = 'unordered') => ({ type: 'list', items, style })
const table = (columns, rows) => ({ type: 'table', columns, rows })
const callout = (text) => ({ type: 'callout', text })
const references = (items) => ({ type: 'references', items })

const siteMeta = {
  projectName: 'FloraGuard',
  subtitle: 'A Programmable Senescence Management System for Cut Flowers',
  deck:
    'A multi-page iGEM wiki draft focused on turning cut flower preservation from passive treatment into programmable senescence management.',
}

const homePage = {
  eyebrow: 'Synthetic biology for post-harvest resilience',
  heroImage: floralHeroArt,
  heroAlt:
    'Stylized bouquet in a vase with petals, stems, and monitoring traces representing FloraGuard.',
  heroCaption:
    'A floral systems view: sensing, biological response, and smart monitoring around a cut-flower vase.',
  lead: [
    'Cut flowers are among the most traded horticultural commodities worldwide. Yet once detached from the plant, flowers rapidly lose vitality due to dehydration, oxidative stress, microbial blockage, and hormonal imbalance. This leads to substantial waste across the floral supply chain.',
    'Current preservation strategies mainly rely on passive treatments such as sugar solutions, chemical preservatives, and refrigeration. While these approaches can partially delay senescence, they cannot dynamically respond to the physiological status of the flower.',
    'FloraGuard proposes a new paradigm: transforming flower preservation from passive treatment into programmable senescence management.',
  ],
  status: [
    'Narrative structure is in place across the full wiki.',
    'The site is ready for experimental figures, photos, and validation plots.',
    'Wet lab, dry lab, hardware, and stakeholder logic now read as one system.',
  ],
  metrics: [
    {
      value: '40B+',
      label: 'USD global cut flower market that depends on maintaining post-harvest quality',
    },
    {
      value: '5',
      label: 'integrated preservation layers spanning sensing, response, monitoring, and prediction',
    },
  ],
  challengeCards: [
    {
      title: 'Dehydration and xylem failure',
      detail:
        'Once flowers are cut, water balance becomes fragile and microbial blockage can quickly reduce vascular transport.',
    },
    {
      title: 'Oxidative stress accumulation',
      detail:
        'Reactive oxygen species damage petals and accelerate visible decline unless the system can buffer stress in time.',
    },
    {
      title: 'Ethylene-driven aging',
      detail:
        'Hormonal signaling pushes senescence forward, especially under transport and storage stress.',
    },
    {
      title: 'Supply-chain variability',
      detail:
        'Temperature fluctuation, storage duration, and retail display conditions make one-size-fits-all preservation unreliable.',
    },
  ],
  platformCards: [
    {
      kicker: 'Sense',
      title: 'Senescence sensing',
      detail:
        'Track ROS accumulation, ethylene signaling, and dehydration stress so the system knows when preservation pressure should increase.',
    },
    {
      kicker: 'Respond',
      title: 'Melatonin response',
      detail:
        'Use melatonin as a multifunctional regulator to reinforce antioxidant capacity and slow oxidative damage.',
    },
    {
      kicker: 'Regulate',
      title: 'Ethylene control',
      detail:
        'Reduce ACC-driven ethylene production with ACC deaminase logic to slow hormone-mediated senescence.',
    },
    {
      kicker: 'Stabilize',
      title: 'Microbiome-aware preservation',
      detail:
        'Treat microbial blockage as part of the preservation problem so water uptake and flower condition remain more stable.',
    },
    {
      kicker: 'Predict',
      title: 'Monitoring and modeling',
      detail:
        'Combine sensors, image-based status tracking, and predictive modeling to recommend timely intervention.',
    },
  ],
  showcaseCards: [
    {
      image: floralStressArt,
      alt: 'Fresh and stressed flowers connected by a flow arrow.',
      title: 'Stress travels with the flower',
      detail:
        'The problem is not confined to the vase. Transport, storage, dehydration, and microbial blockage shape senescence long before a consumer sees the bouquet.',
    },
    {
      image: smartVaseArt,
      alt: 'Illustrated smart vase with sensors and a monitoring dashboard.',
      title: 'Hardware makes the biology actionable',
      detail:
        'A smart vase or florist-facing monitoring system gives FloraGuard a path from lab logic to a real preservation interface.',
    },
  ],
  storyFlow: [
    {
      step: '01',
      title: 'Detect senescence early',
      detail:
        'Sense ROS buildup, ethylene-associated decline, and dehydration pressure before visible collapse dominates the phenotype.',
    },
    {
      step: '02',
      title: 'Stabilize the flower',
      detail:
        'Use melatonin-centered protection and ethylene regulation to preserve flower quality rather than treating symptoms too late.',
    },
    {
      step: '03',
      title: 'Predict intervention timing',
      detail:
        'Combine environment, harvest context, and visible status tracking to estimate when action matters most.',
    },
    {
      step: '04',
      title: 'Translate to real use',
      detail:
        'Move from a bench system toward florist and consumer-facing preservation tools that reduce waste in practice.',
    },
  ],
  editorialFeature: {
    eyebrow: 'Editorial feature',
    title: 'From harvest stress to adaptive care, FloraGuard should feel like one continuous story',
    summary:
      'Many strong iGEM homepages show the project as a chain of linked decisions rather than isolated modules. FloraGuard can do the same by making the floral supply chain visible, then showing where programmable preservation changes the outcome.',
    quote:
      'The vase is not where the problem begins. It is where better intervention can finally become visible.',
    image: floralSupplyChainArt,
    alt:
      'Illustrated floral supply chain from harvest to smart care, showing how stress accumulates before the bouquet reaches the user.',
    caption:
      'A visual scaffold for the homepage: stress begins before retail, and FloraGuard responds by turning static care into adaptive care.',
    chips: ['Harvest stress', 'Cold-chain variability', 'Retail uncertainty', 'Adaptive response'],
    points: [
      'The preservation problem starts at cutting, not at home.',
      'Transport and display conditions reshape flower quality before customers ever see the bouquet.',
      'Programmable care only makes sense when the site shows how sensing, intervention, and recommendation connect across that journey.',
    ],
  },
  evidencePreview: [
    {
      label: 'Biology evidence',
      title: 'Wet lab should culminate in side-by-side treatment proof',
      detail:
        'Readers need to see phenotype, stress markers, and vase-life outcome in one coordinated evidence board.',
    },
    {
      label: 'Prediction evidence',
      title: 'Dry lab should prove that timing and dose become more actionable',
      detail:
        'The best computational pages show not only a model, but why the model changes real intervention decisions.',
    },
    {
      label: 'Prototype evidence',
      title: 'Hardware should show the object, interface, and care workflow together',
      detail:
        'A deployable-feeling page combines device form, captured signals, and user-facing recommendations in one narrative.',
    },
  ],
  nextAdd: [
    'Experimental figures for ROS, ACC, ethylene, and vase life comparisons across treatments',
    'Smart vase photos, schematics, and a hardware workflow diagram',
    'Stakeholder interview pull quotes and floral supply chain context visuals',
    'Species-specific performance data and representative flower images over time',
  ],
}

const wikiGroups = [
  {
    slug: 'project',
    title: 'Project',
    summary:
      'State the problem, the system concept, and the design-build-test-learn logic behind FloraGuard.',
    pages: [
      {
        slug: 'project-description',
        navTitle: 'Project Description',
        title: 'Project Description',
        summary:
          'FloraGuard frames cut flower senescence as a controllable systems problem rather than a storage problem alone.',
        highlights: [
          'Cut flower decline is driven by multiple interacting physiological pathways.',
          'Melatonin and ACC pathway regulation give FloraGuard two complementary biological levers.',
          'The project treats preservation as a programmable intervention strategy.',
        ],
        nextAdd: [
          'A system overview schematic that connects sensing, response, and monitoring',
          'Comparative baseline imagery of untreated versus treated flowers',
          'Additional citations for species-specific senescence behavior',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'project',
            eyebrow: 'Project frame',
            title: 'This page should explain why cut flower aging is controllable instead of inevitable',
            image: floralSupplyChainArt,
            alt:
              'Illustrated floral supply chain showing how stress accumulates and where FloraGuard can intervene.',
            caption:
              'A system-level framing figure for the Project Description page.',
            lede:
              'Strong project-description pages quickly move from background facts to a clear systems hypothesis. Here, that hypothesis is that senescence can be detected, influenced, and timed rather than merely endured.',
            points: [
              'Show that senescence is multi-factorial, not a single-cause problem.',
              'Connect melatonin and ACC regulation as complementary levers rather than separate ideas.',
              'Frame FloraGuard as a controllable intervention system from the beginning.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'Key numbers',
            title: 'The project frame becomes sharper when a few core facts stay visible',
            items: [
              {
                label: 'Global floral market',
                value: '40B+',
                detail: 'A large commercial system depends on keeping cut flowers presentable after harvest.',
              },
              {
                label: 'Stress axes',
                value: '4',
                detail: 'ROS, ethylene signaling, microbial blockage, and water imbalance together drive decline.',
              },
              {
                label: 'Core biological levers',
                value: '2',
                detail: 'Melatonin-centered protection and ACC-linked ethylene control anchor the FloraGuard strategy.',
              },
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Concept shift',
            title: 'FloraGuard changes the project from treatment-first thinking to systems-first thinking',
            items: [
              {
                title: 'Conventional preservation',
                detail: 'Apply sugar, antimicrobials, or cold storage and hope the flower responds well enough under variable conditions.',
              },
              {
                title: 'Programmable preservation',
                detail: 'Sense condition, buffer oxidative stress, modulate ethylene-linked decline, and adapt timing based on what the flower is actually experiencing.',
              },
            ],
          },
          {
            type: 'evidence-strip',
            eyebrow: 'Hypothesis board',
            title: 'A strong project page usually makes the hypothesis readable in three connected panels',
            items: [
              {
                label: 'Panel 01',
                title: 'Stress accumulates as a system',
                detail: 'The page should show that senescence is not one pathway but an interacting post-harvest network.',
              },
              {
                label: 'Panel 02',
                title: 'Two biological levers can intervene',
                detail: 'Melatonin and ACC deaminase logic should appear as complementary rather than independent ideas.',
              },
              {
                label: 'Panel 03',
                title: 'Monitoring turns treatment into management',
                detail: 'Hardware and prediction are what convert a treatment concept into a programmable preservation system.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Background',
            title: 'Why cut flower senescence is a systems problem',
            blocks: [
              paragraph(
                'The global cut flower industry is worth more than 40 billion USD annually. However, a significant fraction of harvested flowers never reach consumers in optimal condition.',
              ),
              paragraph(
                'Cut flower senescence is driven by several physiological processes that overlap rather than operate independently.',
              ),
              list([
                'reactive oxygen species (ROS) accumulation',
                'ethylene-mediated senescence signaling',
                'microbial blockage of xylem vessels',
                'water balance disruption',
              ]),
              paragraph(
                'These processes interact to accelerate petal wilting, discoloration, and loss of ornamental value.',
              ),
            ],
          },
          {
            eyebrow: 'Scientific basis',
            title: 'Why FloraGuard focuses on melatonin and ethylene control',
            blocks: [
              paragraph(
                'Recent research has demonstrated that melatonin acts as a multifunctional plant regulator capable of delaying senescence by enhancing antioxidant capacity and modulating hormone pathways.',
              ),
              paragraph(
                'At the same time, ethylene biosynthesis plays a crucial role in floral senescence. Enzymes such as ACC oxidase and ACC synthase regulate the ethylene pathway, while microbial enzymes such as ACC deaminase can reduce ethylene precursor levels.',
              ),
              callout(
                'Together, these findings suggest that flower senescence may be controllable through combined regulation of oxidative stress and ethylene signaling.',
              ),
            ],
          },
          {
            eyebrow: 'Our idea',
            title: 'A programmable senescence management system',
            blocks: [
              paragraph(
                'Instead of simply applying exogenous preservatives, we aim to build a programmable senescence management system that can respond to flower status over time.',
              ),
              list(
                [
                  'sensing senescence signals',
                  'delaying oxidative stress using melatonin',
                  'reducing ethylene-mediated senescence using ACC deaminase',
                ],
                'ordered',
              ),
              paragraph(
                'Combined with hardware monitoring and predictive modeling, this system provides an integrated preservation strategy for cut flowers.',
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
          'The project begins with the hidden cost of floral waste and the limitations of static preservation methods.',
        highlights: [
          'Cut flowers have short natural vase lives even before logistics stress is added.',
          'Transport and retail conditions amplify dehydration and senescence.',
          'Current preservation methods delay damage but rarely adapt to flower condition.',
        ],
        nextAdd: [
          'A floral supply chain diagram from harvest to consumer',
          'Images showing progressive senescence across representative species',
          'Quantitative waste or loss estimates from stakeholder interviews or literature',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'problem',
            eyebrow: 'Problem picture',
            title: 'The problem page should make floral waste feel visible before the reader reaches the science',
            image: floralSupplyChainArt,
            alt:
              'Illustrated supply chain view of cut flowers moving from harvest through transport to smart care.',
            caption:
              'A visual summary of where value is lost across the floral chain.',
            lede:
              'Many strong iGEM pages use one simple image to make the problem legible. For FloraGuard, that means showing how transport stress, dehydration, and retail handling all compress vase life before the bouquet reaches home.',
            points: [
              'Anchor the reader in the full journey from cutting to consumer use.',
              'Use species examples to make loss feel concrete rather than abstract.',
              'Set up why static preservation strategies break under variable real-world conditions.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'Species snapshot',
            title: 'The problem feels more real when vase-life pressure is attached to familiar flower types',
            items: [
              {
                label: 'Rose',
                value: '5-7 d',
                detail: 'A popular cut flower with a narrow window before visible quality drops.',
              },
              {
                label: 'Tulip',
                value: '4-6 d',
                detail: 'A short-lived example that makes timing and handling especially important.',
              },
              {
                label: 'Carnation',
                value: '7-10 d',
                detail: 'Longer life does not remove the underlying stress and care challenges.',
              },
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Pain points',
            title: 'Three things make current floral care feel structurally fragile',
            items: [
              {
                title: 'Timing is opaque',
                detail: 'People usually do not know when stress accumulation has crossed the point where intervention still helps.',
              },
              {
                title: 'Responses vary by species',
                detail: 'A treatment that helps one flower type may underperform or over-correct in another context.',
              },
              {
                title: 'Retail and home care disconnect',
                detail: 'By the time the bouquet reaches the user, hidden transport and storage damage may already dominate the outcome.',
              },
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Care gap',
            title: 'Current methods fail for different reasons at different points in the chain',
            items: [
              {
                title: 'Before purchase',
                detail: 'Transport temperature shifts, storage time, and dehydration create hidden damage before consumers ever see the flower.',
              },
              {
                title: 'After purchase',
                detail: 'Consumers inherit a stressed bouquet without enough information to know what care will still be effective.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Problem framing',
            title: 'The hidden cost of floral waste',
            blocks: [
              paragraph('Cut flowers are highly perishable products.'),
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
                'During transportation, storage, and retail display, flowers experience stress conditions such as temperature fluctuation and dehydration.',
              ),
              paragraph(
                'These stresses accelerate senescence and reduce market value long before a bouquet reaches the consumer.',
              ),
            ],
          },
          {
            eyebrow: 'Inspiration',
            title: 'Why current solutions are not enough',
            blocks: [
              paragraph('Existing preservation methods often include:'),
              list([
                'sucrose supplements',
                'antimicrobial agents',
                'ethylene inhibitors',
                'refrigeration',
              ]),
              paragraph('However, these methods suffer from several limitations:'),
              list([
                'lack of dynamic control',
                'species-dependent responses',
                'chemical residue concerns',
              ]),
              callout(
                'These shortcomings inspired us to explore a synthetic biology-based preservation system capable of actively managing senescence.',
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
          'FloraGuard combines sensing, biological response, and smart monitoring into a closed-loop preservation architecture.',
        highlights: [
          'The design uses modular biological and hardware layers rather than a single treatment.',
          'Response logic centers on oxidative stress buffering and ethylene regulation.',
          'Monitoring data supports future prediction of intervention timing.',
        ],
        nextAdd: [
          'A full system diagram linking each module and its inputs or outputs',
          'Promoter or response logic details for the sensing module',
          'A combined workflow figure connecting biology, hardware, and prediction',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'design',
            eyebrow: 'System architecture',
            title: 'Design pages work best when they show how each module hands off to the next',
            image: floralHeroArt,
            alt:
              'Illustrated FloraGuard platform showing vase, floral modules, and monitoring traces.',
            caption:
              'A closed-loop architecture placeholder for the Design page.',
            lede:
              'The goal of this page is not only to list modules, but to show how sensing, biological response, and monitoring become one coherent platform.',
            points: [
              'Start with the system overview before zooming into individual modules.',
              'Keep the handoff between sensing, response, and prediction visible.',
              'Use one architecture graphic to stop the design from feeling fragmented.',
            ],
          },
          {
            type: 'profile-grid',
            eyebrow: 'Module roles',
            title: 'Each design layer should have one clear job inside the platform',
            items: [
              {
                label: 'L-01',
                title: 'Sensing',
                detail: 'Detect stress-linked cues early enough that intervention still matters.',
              },
              {
                label: 'L-02',
                title: 'Melatonin response',
                detail: 'Buffer oxidative stress and stabilize flower tissues before visible collapse accelerates.',
              },
              {
                label: 'L-03',
                title: 'Ethylene regulation',
                detail: 'Reduce ethylene-linked decline by acting on ACC-associated signaling logic.',
              },
              {
                label: 'L-04',
                title: 'Monitoring and prediction',
                detail: 'Track changing context and convert observation into future intervention timing.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'Closed loop',
            title: 'Design is easiest to grasp when the platform reads as one loop',
            items: [
              {
                title: 'Sense',
                detail: 'Monitor ROS, ethylene-linked decline, and dehydration-associated stress cues.',
              },
              {
                title: 'Respond',
                detail: 'Trigger melatonin-centered buffering and ACC-linked ethylene control.',
              },
              {
                title: 'Observe',
                detail: 'Use hardware and image-informed monitoring to track how condition changes over time.',
              },
              {
                title: 'Predict',
                detail: 'Feed those observations back into intervention timing and deployment strategy.',
              },
            ],
          },
          {
            type: 'evidence-strip',
            eyebrow: 'Architecture board',
            title: 'A final design figure should explain the platform in three glances',
            items: [
              {
                label: 'Panel 01',
                title: 'Signal inputs',
                detail: 'Show what stress signals the system watches and where they originate.',
              },
              {
                label: 'Panel 02',
                title: 'Response handoff',
                detail: 'Show how sensing informs melatonin and ethylene-linked response logic.',
              },
              {
                label: 'Panel 03',
                title: 'Monitoring output',
                detail: 'Show how hardware and modeling close the loop and guide intervention timing.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'System overview',
            title: 'Four core modules drive the FloraGuard architecture',
            blocks: [
              paragraph('FloraGuard consists of four functional modules that work together as a preservation system.'),
              paragraph(
                'The overall logic is to detect senescence-associated stress, trigger or recommend protective responses, and use monitoring data to improve timing and intervention quality.',
              ),
            ],
          },
          {
            eyebrow: 'Module 1',
            title: 'Senescence sensing',
            blocks: [
              paragraph('This module monitors physiological signals associated with flower senescence.'),
              paragraph('Key indicators include:'),
              list(['ROS accumulation', 'ethylene signaling', 'dehydration stress']),
              paragraph('These signals serve as triggers for downstream responses.'),
            ],
          },
          {
            eyebrow: 'Module 2',
            title: 'Melatonin response',
            blocks: [
              paragraph('Melatonin is produced or released in response to detected senescence signals.'),
              paragraph('Melatonin functions as:'),
              list([
                'antioxidant regulator',
                'stress tolerance enhancer',
                'senescence inhibitor',
              ]),
              paragraph('This module helps maintain cellular stability and delay oxidative damage.'),
            ],
          },
          {
            eyebrow: 'Module 3',
            title: 'Ethylene regulation',
            blocks: [
              paragraph('To address ethylene-driven senescence, we introduce a complementary pathway.'),
              paragraph(
                'ACC deaminase catalyzes the degradation of ACC, the precursor of ethylene. Reducing ACC levels lowers ethylene production and slows flower aging.',
              ),
            ],
          },
          {
            eyebrow: 'Module 4',
            title: 'Smart monitoring system',
            blocks: [
              paragraph('FloraGuard integrates hardware monitoring to track environmental conditions.'),
              paragraph('Sensors record:'),
              list(['temperature', 'time after harvest', 'visual flower condition']),
              paragraph(
                'These data support predictive modeling and help determine optimal intervention timing.',
              ),
            ],
          },
          {
            eyebrow: 'Integration',
            title: 'From modules to a closed-loop platform',
            blocks: [
              paragraph(
                'The design is meant to operate as a closed-loop preservation platform: sensing informs response, hardware tracks changing context, and predictive models help decide when intervention matters most.',
              ),
              paragraph(
                'Within this broader logic, microbiome-aware preservation remains an important application layer because water uptake and xylem health strongly influence post-harvest quality.',
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
          'The engineering story of FloraGuard follows a modular design-build-test-learn cycle.',
        highlights: [
          'The system is organized around modular sensing and response logic.',
          'Testing connects molecular interventions to visible flower longevity outcomes.',
          'Learning focuses on response thresholds and intervention strategies.',
        ],
        nextAdd: [
          'A DBTL diagram or timeline showing iteration points',
          'Specific constructs, strains, or treatment variants used in each cycle',
          'Result snapshots that show what changed after each learning stage',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'wet',
            eyebrow: 'Engineering logic',
            title: 'A DBTL page should show iteration, not just four headings in sequence',
            image: floralLabArt,
            alt:
              'Illustrated floral lab scene showing experiment loops and measurement motifs.',
            caption:
              'A placeholder for a future DBTL cycle diagram or iteration storyboard.',
            lede:
              'Good engineering pages make the learning loop tangible. The reader should understand what was designed, what was tested, and what changed after the test.',
            points: [
              'Use a loop or timeline, not isolated headings alone.',
              'Tie each phase to a specific experimental or design decision.',
              'Show what was learned, not only what was done.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'DBTL shorthand',
            title: 'The engineering page should compress the iteration loop into four memorable moves',
            items: [
              {
                label: 'Design',
                value: 'D',
                detail: 'Choose what signals, responses, and modules belong in FloraGuard.',
              },
              {
                label: 'Build',
                value: 'B',
                detail: 'Turn those ideas into constructs, treatments, and prototype-ready components.',
              },
              {
                label: 'Test',
                value: 'T',
                detail: 'Measure whether flower quality and senescence timing actually change.',
              },
              {
                label: 'Learn',
                value: 'L',
                detail: 'Use the outcome to update thresholds, strategies, and deployment logic.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'DBTL cycle',
            title: 'Engineering becomes legible when each stage answers a different question',
            items: [
              {
                title: 'Design',
                detail: 'What signals and responses should the FloraGuard system include?',
              },
              {
                title: 'Build',
                detail: 'How do those ideas become constructs, treatments, and prototype parts?',
              },
              {
                title: 'Test',
                detail: 'Which outputs show that flower quality actually changes?',
              },
              {
                title: 'Learn',
                detail: 'How do the results reshape thresholds, doses, and deployment logic?',
              },
            ],
          },
          {
            type: 'evidence-strip',
            eyebrow: 'Iteration board',
            title: 'An engineering page becomes more convincing when each cycle leaves a visible artifact',
            items: [
              {
                label: 'Cycle 01',
                title: 'Architecture decision',
                detail: 'What module arrangement or hypothesis was selected, and why was it worth building?',
              },
              {
                label: 'Cycle 02',
                title: 'Test evidence',
                detail: 'What readout or phenotype made the team rethink or confirm the design?',
              },
              {
                label: 'Cycle 03',
                title: 'Learned revision',
                detail: 'What threshold, dose, or response strategy changed after the result?',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Design',
            title: 'Define the system architecture',
            blocks: [
              paragraph(
                'We designed a modular system combining senescence sensing and biological response so that cut flower decline could be addressed before irreversible damage accumulates.',
              ),
            ],
          },
          {
            eyebrow: 'Build',
            title: 'Construct the biological components',
            blocks: [
              paragraph(
                'Biological components were constructed using standard cloning and microbial engineering techniques to support melatonin-centered protection and ACC deaminase-based regulation.',
              ),
            ],
          },
          {
            eyebrow: 'Test',
            title: 'Measure preservation performance',
            blocks: [
              paragraph(
                'We evaluated the effectiveness of melatonin treatment and ACC deaminase pathways in delaying flower senescence.',
              ),
              paragraph(
                'Testing links molecular intervention to visible phenotypes such as vase life, wilting progression, and stress-associated biochemical markers.',
              ),
            ],
          },
          {
            eyebrow: 'Learn',
            title: 'Refine thresholds and strategy',
            blocks: [
              paragraph(
                'Experimental results informed optimization of response thresholds and treatment strategies, helping us decide how sensing, timing, and preservation modules should interact in later iterations.',
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
      'Show how wet lab, dry lab, and hardware converge on measurable vase-life decisions.',
    pages: [
      {
        slug: 'wet-lab',
        navTitle: 'Wet Lab',
        title: 'Wet Lab',
        summary:
          'The wet lab plan focuses on characterizing senescence, testing melatonin response, and assessing ACC deaminase effects.',
        highlights: [
          'The wet lab starts from baseline senescence characterization in selected flowers.',
          'Melatonin treatment is assessed against untreated and combined-module groups.',
          'ACC reduction is evaluated as a route to slow ethylene-associated aging.',
        ],
        nextAdd: [
          'Species selection rationale and cultivation or sourcing details',
          'Experimental timelines, replication counts, and protocol figures',
          'Representative photos and quantitative plots for each aim',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'wet',
            eyebrow: 'Figure preview',
            title: 'A wet lab page should read like evidence: assay, phenotype, and vase life in one frame',
            image: floralWetLabArt,
            alt:
              'Illustrated wet lab composite with flower assay readouts, scoring panels, and phenotype tracking.',
            caption:
              'A placeholder figure block showing the kind of composite visual that can later be replaced with real experiment photos and plots.',
            lede:
              'This is where a future winner-style figure can sit: one glance should show the assay logic, the visual phenotype, and the final preservation outcome.',
            points: [
              'Pair ROS or oxidative-stress readouts with phenotype scoring.',
              'Use side-by-side treatment imagery instead of text-only descriptions.',
              'End the visual with a clear vase-life outcome panel.',
            ],
          },
          {
            type: 'metric-cards',
            eyebrow: 'Experimental logic',
            title: 'Wet lab readouts are organized around three connected questions',
            items: [
              {
                label: 'Baseline biology',
                value: 'Aim 1',
                detail: 'How fast do different flowers move from healthy petals to visible senescence?',
              },
              {
                label: 'Protective response',
                value: 'Aim 2',
                detail: 'Can melatonin-centered treatment measurably preserve flower quality and extend vase life?',
              },
              {
                label: 'Ethylene control',
                value: 'Aim 3',
                detail: 'Does ACC reduction shift hormone-driven aging and increase usable post-harvest time?',
              },
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Measurement stack',
            title: 'Each experiment is meant to connect molecular change to visible floral quality',
            items: [
              {
                title: 'Stress markers',
                detail: 'Track ROS and related oxidative signatures so biochemical decline can be compared with visible senescence.',
              },
              {
                title: 'Phenotype scoring',
                detail: 'Use petal wilting and visual senescence scoring as consistent indicators of ornamental quality loss.',
              },
              {
                title: 'Longevity outcome',
                detail: 'Measure vase life extension as the most direct readout of whether FloraGuard changes real post-harvest performance.',
              },
            ],
          },
          {
            type: 'evidence-strip',
            eyebrow: 'Result board',
            title: 'Three result panels will eventually make the wet lab page feel complete',
            items: [
              {
                label: 'Panel 01',
                title: 'Treatment phenotype board',
                detail: 'Side-by-side flower images should show control versus treatment progression across the same timeline.',
              },
              {
                label: 'Panel 02',
                title: 'Stress and pathway readouts',
                detail: 'ROS, ACC, ethylene, or antioxidant measurements should connect molecular change to the visible phenotype.',
              },
              {
                label: 'Panel 03',
                title: 'Vase-life outcome summary',
                detail: 'A compact result view should show whether FloraGuard meaningfully extends useful display life.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Aim 1',
            title: 'Characterize senescence progression in selected cut flowers',
            blocks: [
              paragraph('We selected representative flower species and monitored the baseline progression of decline.'),
              paragraph(
                'Species were chosen to span different expected vase-life ranges and senescence behaviors, allowing FloraGuard to be framed against realistic variation rather than one idealized flower type.',
              ),
              table(
                ['Flower type', 'Why include it', 'Main readout emphasis'],
                [
                  ['Rose', 'Commercially common and quality-sensitive', 'wilting and visible ornamental decline'],
                  ['Tulip', 'Short vase life and rapid shape change', 'timing sensitivity and dehydration response'],
                  ['Carnation or similar long-life flower', 'Provides a slower senescence comparison', 'extended decline curve and treatment durability'],
                ],
              ),
              paragraph('Measured observations include:'),
              list(['ROS accumulation', 'petal wilting', 'vase life duration']),
            ],
          },
          {
            eyebrow: 'Aim 2',
            title: 'Evaluate melatonin effects on flower longevity',
            blocks: [
              paragraph('Experimental groups include:'),
              list(
                [
                  'control (water)',
                  'melatonin treatment',
                  'combined melatonin plus secondary module',
                ],
                'ordered',
              ),
              table(
                ['Group', 'Purpose'],
                [
                  ['Control (water)', 'Define untreated senescence baseline'],
                  ['Melatonin treatment', 'Test whether antioxidant-centered buffering delays decline'],
                  ['Melatonin + secondary module', 'Explore whether multi-module intervention outperforms a single treatment logic'],
                ],
              ),
              paragraph('Measured parameters include:'),
              list([
                'vase life',
                'antioxidant enzyme activity',
                'visual senescence scoring',
              ]),
              paragraph(
                'By recording both biochemical and visible outputs over time, this aim is designed to show not only whether melatonin helps, but when its effect becomes most meaningful during the senescence trajectory.',
              ),
            ],
          },
          {
            eyebrow: 'Aim 3',
            title: 'Assess ACC deaminase pathway effects',
            blocks: [
              paragraph(
                'We examine whether ACC reduction can delay ethylene-related senescence and extend the usable life of cut flowers.',
              ),
              paragraph('Measurements include:'),
              list(['ACC concentration', 'ethylene production', 'vase life extension']),
              callout(
                'This aim matters because it tests whether FloraGuard can act on hormone-linked decline directly rather than only buffering downstream stress damage.',
              ),
            ],
          },
          {
            eyebrow: 'Readout strategy',
            title: 'How wet lab measurements connect mechanism to outcome',
            blocks: [
              table(
                ['Readout', 'Why it matters', 'What it should explain'],
                [
                  ['ROS and oxidative markers', 'Track stress burden in petals', 'whether treatment reduces biochemical damage'],
                  ['Visual senescence score', 'Captures ornamental quality loss', 'whether users would actually perceive improvement'],
                  ['Vase life', 'Most intuitive outcome metric', 'whether FloraGuard changes usable post-harvest duration'],
                ],
              ),
              paragraph(
                'Together, these readouts keep the wet lab page grounded in both mechanism and practical relevance, which is usually what makes strong iGEM experiment pages feel convincing.',
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
          'The dry lab builds predictive logic around senescence timing and treatment optimization.',
        highlights: [
          'The model uses environmental and physiological inputs to estimate decline trajectories.',
          'Prediction is meant to guide intervention timing, not just describe outcomes after the fact.',
          'Dose optimization helps identify practical melatonin treatment windows.',
        ],
        nextAdd: [
          'Model diagram, equations, and parameter assumptions',
          'Validation plots comparing predictions with measured vase life',
          'Sensitivity analysis for temperature, treatment, and harvest stage',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'dry',
            eyebrow: 'Model story',
            title: 'The dry lab page should show how modeling changes timing, dose, and recommendations',
            image: floralDryLabArt,
            alt:
              'Illustrated dry lab dashboard with prediction curves, dose controls, and decision outputs.',
            caption:
              'A model-first composition that can later be replaced with real plots, parameter tables, and prediction snapshots.',
            lede:
              'Good dry lab pages do not just describe equations. They show how prediction becomes a usable decision for flower care.',
            points: [
              'Show the input features that drive the prediction.',
              'Make the intervention window visible, not buried in prose.',
              'Use comparison views to show how modeling improves over fixed treatment logic.',
            ],
          },
          {
            type: 'pipeline',
            eyebrow: 'Model pipeline',
            title: 'Dry lab work turns observations into intervention decisions',
            items: [
              {
                title: 'Inputs',
                detail: 'Temperature, humidity, harvest stage, and treatment conditions define the starting state of the flower.',
              },
              {
                title: 'Prediction',
                detail: 'A senescence model estimates decline trajectory and points to when intervention is likely to be most useful.',
              },
              {
                title: 'Optimization',
                detail: 'Dose-response simulations help identify practical melatonin operating windows instead of relying on one arbitrary concentration.',
              },
              {
                title: 'Decision support',
                detail: 'The model feeds back into treatment timing and future hardware recommendations.',
              },
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Why this matters',
            title: 'Dry lab is not an add-on, it is what makes FloraGuard adaptive',
            items: [
              {
                title: 'Without modeling',
                detail: 'Preservation remains mostly static: fixed treatment, fixed timing, and little guidance across flower types or contexts.',
              },
              {
                title: 'With modeling',
                detail: 'Preservation becomes adaptive: timing, dose, and environmental context can all inform what the system should recommend.',
              },
            ],
          },
          {
            type: 'evidence-strip',
            eyebrow: 'Validation board',
            title: 'A strong dry lab page usually proves three things at once',
            items: [
              {
                label: 'Panel 01',
                title: 'Input sensitivity',
                detail: 'Show which environmental or harvest variables most strongly shift predicted senescence timing.',
              },
              {
                label: 'Panel 02',
                title: 'Model fit and validation',
                detail: 'Use prediction-versus-observation snapshots so readers can judge whether the model is trustworthy.',
              },
              {
                label: 'Panel 03',
                title: 'Decision gain',
                detail: 'Demonstrate how the model changes dose or intervention timing compared with static treatment rules.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Prediction',
            title: 'Senescence prediction model',
            blocks: [
              paragraph(
                'We developed a computational model to predict flower senescence based on environmental and physiological parameters.',
              ),
              paragraph('Model inputs include:'),
              list(['temperature', 'humidity', 'harvest stage', 'treatment conditions']),
              table(
                ['Input class', 'Example variable', 'Why it matters'],
                [
                  ['Environment', 'temperature or humidity', 'strongly affects dehydration and metabolic stress'],
                  ['Harvest context', 'developmental stage at cutting', 'changes baseline vase-life potential'],
                  ['Intervention', 'treatment identity or dose', 'determines whether the decline curve can shift'],
                ],
              ),
              callout('Model output: predicted vase life and intervention timing.'),
            ],
          },
          {
            eyebrow: 'Optimization',
            title: 'Dose optimization for treatment strategy',
            blocks: [
              paragraph(
                'We simulated melatonin concentration-response relationships to determine optimal treatment strategies and identify useful operating ranges for preservation.',
              ),
              paragraph(
                'The goal is not to pick one arbitrary concentration, but to understand where treatment becomes effective, where gains plateau, and where intervention could become impractical or wasteful.',
              ),
            ],
          },
          {
            eyebrow: 'Validation',
            title: 'How the dry lab should be validated against experiments',
            blocks: [
              paragraph(
                'A useful model must be judged against experimental outcomes rather than only internal consistency. For FloraGuard, that means comparing predicted decline timing and predicted treatment benefit against measured vase-life and senescence observations.',
              ),
              list(
                [
                  'compare predicted vase life with observed vase life across conditions',
                  'test whether model sensitivity matches biological intuition',
                  'check whether recommendations improve over static treatment timing',
                ],
                'ordered',
              ),
              callout(
                'The most important validation question is not “is the model mathematically elegant?” but “does it lead to better preservation decisions?”',
              ),
            ],
          },
        ],
      },
      {
        slug: 'hardware',
        navTitle: 'Hardware',
        title: 'Hardware',
        summary:
          'The hardware layer translates FloraGuard from laboratory reasoning into a deployable smart vase concept.',
        highlights: [
          'The prototype is designed to record environment and visible flower status.',
          'Hardware supports prediction, recommendation, and future intervention timing.',
          'The smart vase bridges wet lab insights and real use conditions.',
        ],
        nextAdd: [
          'Device renders, wiring layout, and sensor selection table',
          'Prototype photos and physical enclosure design notes',
          'A user workflow showing how measurements become recommendations',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'hardware',
            eyebrow: 'Prototype frame',
            title: 'Hardware pages need an object, an interface, and a workflow in the same glance',
            image: smartVaseArt,
            alt:
              'Illustrated smart vase prototype with sensors, interface card, and preservation dashboard.',
            caption:
              'A bridge visual for the hardware page: the device, the captured signals, and the recommendation interface all belong together.',
            lede:
              'This block creates space for future prototype renders, photos, and interface screenshots while already teaching the reader how the device fits the FloraGuard system.',
            points: [
              'Show the physical vase or enclosure, not only sensor names.',
              'Connect the captured signals to the recommendation interface.',
              'Keep the user workflow visible so the page feels deployable, not hypothetical.',
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Prototype layers',
            title: 'The smart vase is designed as a bridge from bench insight to usable monitoring',
            items: [
              {
                title: 'Sensing layer',
                detail: 'Environmental sensors capture temperature and time-linked context that strongly shapes post-harvest decline.',
              },
              {
                title: 'Visual layer',
                detail: 'Camera-based tracking provides a route to monitor visible flower condition and support image-informed scoring.',
              },
              {
                title: 'Data layer',
                detail: 'Logging and interpretation make it possible to compare conditions over time instead of relying on one-off observations.',
              },
              {
                title: 'Recommendation layer',
                detail: 'The device can eventually connect model output to preservation advice for florists or consumers.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'Use pathway',
            title: 'How hardware supports a real preservation workflow',
            items: [
              {
                title: 'Monitor',
                detail: 'Observe temperature, elapsed time, and visible condition continuously.',
              },
              {
                title: 'Interpret',
                detail: 'Convert raw measurements into an estimate of flower stress and likely remaining vase life.',
              },
              {
                title: 'Act',
                detail: 'Recommend when treatment, replacement, or handling changes should happen.',
              },
            ],
          },
          {
            type: 'evidence-strip',
            eyebrow: 'Prototype board',
            title: 'Hardware pages become convincing when they show the product from three angles',
            items: [
              {
                label: 'Panel 01',
                title: 'Object and enclosure',
                detail: 'Show what the smart vase or prototype physically looks like in use, not only as a component list.',
              },
              {
                label: 'Panel 02',
                title: 'Dashboard and signals',
                detail: 'Show the captured data or UI so the recommendation logic is visible to the reader.',
              },
              {
                label: 'Panel 03',
                title: 'User workflow',
                detail: 'Show how a florist or consumer would move from observation to action using the device.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Prototype',
            title: 'Smart vase monitoring system',
            blocks: [
              paragraph(
                'To bridge laboratory research with real-world application, we designed a smart vase monitoring system.',
              ),
              paragraph('Core features include:'),
              list([
                'environmental sensors',
                'camera-based flower status tracking',
                'data logging',
              ]),
              table(
                ['Signal', 'Why capture it', 'How it informs care'],
                [
                  ['Temperature', 'Strongly shapes senescence rate', 'helps estimate remaining vase life'],
                  ['Elapsed time after harvest', 'Tracks cumulative stress exposure', 'provides context for intervention urgency'],
                  ['Visual flower condition', 'Captures visible quality decline', 'supports user-facing scoring and recommendation'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Use case',
            title: 'What the device enables',
            blocks: [
              paragraph(
                'This device supports senescence prediction and preservation recommendations, creating a path from experimental understanding toward florist and consumer-facing tools.',
              ),
              list(
                [
                  'observe condition continuously instead of relying on occasional manual inspection',
                  'translate model output into readable preservation prompts',
                  'compare different storage or handling conditions over time',
                ],
                'ordered',
              ),
            ],
          },
          {
            eyebrow: 'Workflow',
            title: 'From measurement to recommendation',
            blocks: [
              paragraph(
                'The hardware concept matters because it turns FloraGuard from a scientific idea into a usable workflow. A florist or consumer does not need raw sensor traces; they need a simple answer about whether the flower is stable, declining, or in need of intervention.',
              ),
              callout(
                'A future hardware figure should make the interface legible enough that a reader can immediately understand how the recommendation is produced.',
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
      'Connect stakeholder needs, biosafety, deployment, and community contribution.',
    pages: [
      {
        slug: 'integrated-human-practices',
        navTitle: 'Human Practices',
        title: 'Integrated Human Practices',
        summary:
          'Stakeholder interviews shaped FloraGuard as a practical preservation platform rather than a purely academic construct.',
        highlights: [
          'Interviews span growers, distributors, florists, and consumers.',
          'Supply-chain loss and weak end-user flower care emerged as central problems.',
          'These conversations pushed the project toward usable preservation tools.',
        ],
        nextAdd: [
          'Interview counts, dates, and method summaries',
          'Quoted stakeholder insights with permissions or anonymization',
          'A feedback loop diagram showing how specific interviews changed design choices',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'human',
            eyebrow: 'Stakeholder picture',
            title: 'Human practices should show who loses value, when, and how that changed the project',
            image: floralStakeholderMapArt,
            alt:
              'Illustrated stakeholder map connecting growers, distributors, florists, and consumers to a central flower system.',
            caption:
              'A visual placeholder for a future stakeholder map or interview synthesis diagram.',
            lede:
              'Winner-style HP pages usually make stakeholder logic easy to grasp before the reader reaches long interview summaries.',
            points: [
              'Map stakeholders to specific pain points in the floral chain.',
              'Show which feedback changed sensing, hardware, or implementation choices.',
              'Use one simple visual to anchor the page before detailed quotes and interview notes.',
            ],
          },
          {
            type: 'stakeholder-grid',
            eyebrow: 'Stakeholder map',
            title: 'Different actors experience flower loss at different points in the chain',
            items: [
              {
                title: 'Growers',
                detail: 'Need post-harvest strategies that preserve value after cutting without creating unsustainable complexity.',
              },
              {
                title: 'Distributors',
                detail: 'Care most about transport losses, handling windows, and how variable storage conditions affect quality.',
              },
              {
                title: 'Florists',
                detail: 'Need practical tools that improve display life and reduce uncertainty in care decisions.',
              },
              {
                title: 'Consumers',
                detail: 'Often lack actionable flower-care knowledge and respond best to simple, trustworthy guidance.',
              },
            ],
          },
          {
            type: 'journey-strip',
            eyebrow: 'Feedback loop',
            title: 'Human practices reshaped the project in a concrete direction',
            items: [
              {
                title: 'Listen',
                detail: 'Map where value is lost and who experiences the pain most directly.',
              },
              {
                title: 'Translate',
                detail: 'Turn those problems into design criteria for sensing, usability, and deployment format.',
              },
              {
                title: 'Integrate',
                detail: 'Use the stakeholder perspective to justify why FloraGuard should become a practical preservation platform.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Stakeholders',
            title: 'Who we spoke with',
            blocks: [
              paragraph('We conducted interviews with stakeholders across the floral supply chain, including:'),
              list([
                'flower growers',
                'wholesale distributors',
                'florists',
                'consumers',
              ]),
              table(
                ['Stakeholder', 'What we asked about'],
                [
                  ['Growers', 'post-harvest handling, loss points, and treatment practicality'],
                  ['Distributors', 'transport conditions, storage windows, and quality variability'],
                  ['Florists', 'display life, uncertainty in care decisions, and customer expectations'],
                  ['Consumers', 'flower-care habits, confusion points, and desired guidance'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Insights',
            title: 'What we learned',
            blocks: [
              paragraph('Key insights included:'),
              list([
                'high post-harvest loss during transport',
                'limited knowledge of flower care among consumers',
                'strong interest in technologies that extend vase life',
              ]),
              paragraph(
                'These interviews reinforced that floral waste is not caused by one actor making one mistake. Instead, losses accumulate when every stage in the chain has incomplete information about flower condition.',
              ),
            ],
          },
          {
            eyebrow: 'Integration',
            title: 'How human practices changed the project',
            blocks: [
              paragraph(
                'These insights guided the design of FloraGuard as a practical preservation system rather than a single laboratory intervention. They reinforced the need for monitoring, prediction, and formats that could work for both professionals and consumers.',
              ),
              list(
                [
                  'stakeholder concern about hidden transport stress strengthened the case for monitoring hardware',
                  'consumer uncertainty strengthened the case for simple recommendation outputs',
                  'professional demand for practical value strengthened the focus on deployable preservation formats',
                ],
                'ordered',
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
          'Safety is built around laboratory confinement, controlled translation, and responsible downstream application.',
        highlights: [
          'No environmental release is intended in the project design.',
          'Laboratory practice remains aligned with institutional biosafety rules.',
          'Future application pathways emphasize cell-free or purified outputs where possible.',
        ],
        nextAdd: [
          'Organism list, strain table, and biosafety level context',
          'Risk assessment for any engineered microbes or treatment components',
          'A future-use decision tree distinguishing lab-only versus deployable formats',
        ],
        modules: [
          {
            type: 'comparison-grid',
            eyebrow: 'Boundary setting',
            title: 'Safety pages become clearer when they separate present lab practice from future deployment thinking',
            items: [
              {
                title: 'Current project boundary',
                detail: 'Engineered systems remain confined to laboratory use, with no environmental release intended in the present project scope.',
              },
              {
                title: 'Future translation boundary',
                detail: 'Any real-world preservation product should move toward cell-free, purified, or otherwise tightly controlled formats before practical deployment.',
              },
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Safety principles',
            title: 'Three ideas should stay visible throughout the whole project narrative',
            items: [
              {
                title: 'Confinement',
                detail: 'Keep engineered biological components inside approved laboratory settings.',
              },
              {
                title: 'Control',
                detail: 'Treat future translation formats as a separate design problem, not an automatic extension of lab work.',
              },
              {
                title: 'Responsibility',
                detail: 'Make risk assessment and user context part of implementation thinking from the start.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Principles',
            title: 'Safety by design',
            blocks: [
              paragraph('Safety considerations are essential in synthetic biology projects.'),
              paragraph('Our system is designed with the following principles:'),
              list([
                'engineered organisms are confined to laboratory environments',
                'no environmental release is intended',
                'downstream applications may use cell-free systems or purified compounds',
              ]),
              table(
                ['Risk area', 'Current boundary', 'Mitigation logic'],
                [
                  ['Engineered biological components', 'lab use only', 'containment and institutional biosafety practice'],
                  ['Future preservation product', 'not directly released as engineered cells', 'favor purified or cell-free formats'],
                  ['User interpretation', 'recommendation systems must remain transparent', 'separate decision support from uncontrolled autonomous action'],
                ],
              ),
            ],
          },
          {
            eyebrow: 'Practice',
            title: 'Laboratory biosafety and translation boundaries',
            blocks: [
              paragraph(
                'All laboratory work follows institutional biosafety guidelines. As the project moves toward application thinking, we treat deployable formats separately from laboratory engineering so that future translation remains responsible and controlled.',
              ),
              callout(
                'For FloraGuard, the safest translation path is staged: validate in the lab first, then redesign for tightly controlled non-release applications.',
              ),
            ],
          },
          {
            eyebrow: 'Preferred pathway',
            title: 'Why staged translation matters',
            blocks: [
              paragraph(
                'A staged pathway avoids collapsing research logic and product logic into one step. Laboratory engineering answers whether FloraGuard can work; implementation design answers how a future version could be used safely.',
              ),
              list(
                [
                  'validate biological logic under controlled conditions',
                  'define which outputs or compounds could be separated from living systems',
                  'only then consider user-facing preservation formats',
                ],
                'ordered',
              ),
            ],
          },
        ],
      },
      {
        slug: 'implementation',
        navTitle: 'Implementation',
        title: 'Implementation',
        summary:
          'FloraGuard is designed to move from a research platform toward deployable preservation tools.',
        highlights: [
          'The same logic can support research, florist, and consumer formats.',
          'Implementation depends on combining treatment modules with monitoring.',
          'The project aims to reduce waste while improving flower care decisions.',
        ],
        nextAdd: [
          'User journey diagrams for florist and consumer scenarios',
          'A deployment comparison table covering cost, complexity, and biosafety',
          'Photos or mockups for kit packaging and smart vase use',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'implementation',
            eyebrow: 'Deployment picture',
            title: 'Implementation pages should show what FloraGuard becomes outside the lab',
            image: smartVaseArt,
            alt:
              'Illustrated smart vase and interface showing a possible deployment direction for FloraGuard.',
            caption:
              'A visual transition from research platform to product-facing preservation formats.',
            lede:
              'This page is where the project starts to feel real: what does FloraGuard look like in a florist workflow, and what changes when the user is a consumer instead of a researcher?',
            points: [
              'Translate the platform into concrete use formats.',
              'Keep biosafety and practicality in the same conversation.',
              'Show how monitoring changes recommendations for different users.',
            ],
          },
          {
            type: 'comparison-grid',
            eyebrow: 'Deployment formats',
            title: 'Different users need different versions of the same platform logic',
            items: [
              {
                title: 'Florist-facing format',
                detail: 'Higher-touch monitoring and recommendation tools can help manage transport, storage, and display quality at professional scale.',
              },
              {
                title: 'Consumer-facing format',
                detail: 'A simpler smart-vase or care-assistant version should prioritize clarity, trust, and low-friction recommendations at home.',
              },
            ],
          },
          {
            type: 'use-case-cards',
            eyebrow: 'Journey scenarios',
            title: 'Implementation gets much stronger when each user journey is concrete',
            items: [
              {
                tag: 'Research',
                title: 'Bench validation workflow',
                detail: 'The lab version focuses on controlled observation, treatment testing, and senescence measurement under reproducible conditions.',
                points: [
                  'High data density',
                  'Protocol-first operation',
                  'Supports model calibration',
                ],
              },
              {
                tag: 'Florist',
                title: 'Professional preservation workflow',
                detail: 'The florist version prioritizes display life, transport handling, and practical recommendations that fit a fast-paced retail setting.',
                points: [
                  'Fewer inputs, faster decisions',
                  'Operational care guidance',
                  'Quality retention during display',
                ],
              },
              {
                tag: 'Home',
                title: 'Consumer smart-care workflow',
                detail: 'The household version emphasizes trust, simple guidance, and low-friction feedback that helps consumers care for flowers without expert knowledge.',
                points: [
                  'Simple prompts',
                  'Low-maintenance hardware',
                  'Clear remaining-life guidance',
                ],
              },
            ],
          },
          {
            type: 'profile-grid',
            eyebrow: 'Deployment checkpoints',
            title: 'Three conditions matter before FloraGuard can leave the lab',
            items: [
              {
                label: 'Safety',
                title: 'Use controlled output formats',
                detail: 'Implementation should favor cell-free, purified, or otherwise tightly bounded forms over direct release of engineered organisms.',
              },
              {
                label: 'Usability',
                title: 'Make recommendations easy to act on',
                detail: 'A preservation platform only helps if users can quickly understand what to do and when to do it.',
              },
              {
                label: 'Evidence',
                title: 'Link recommendation to measurable benefit',
                detail: 'Deployment needs a clear chain from monitoring signal to treatment decision to visible flower-quality outcome.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Research use',
            title: 'Laboratory system',
            blocks: [
              paragraph('This format is used for studying flower senescence biology and testing preservation logic under controlled conditions.'),
              paragraph(
                'The laboratory version is where FloraGuard can be measured most rigorously, because treatment, timing, and environmental variables can be compared under structured experimental conditions.',
              ),
            ],
          },
          {
            eyebrow: 'Professional use',
            title: 'Florist preservation kit',
            blocks: [
              paragraph(
                'A florist-oriented version would pair preservation solutions with monitoring tools to improve storage, transport, and display decisions.',
              ),
              list([
                'helps prioritize intervention for bouquets at highest risk',
                'supports more consistent display quality during retail handling',
                'creates a professional-facing use case before home deployment',
              ]),
            ],
          },
          {
            eyebrow: 'Consumer use',
            title: 'Consumer smart vase',
            blocks: [
              paragraph(
                'A household device could provide flower care recommendations, bringing predictive preservation into the home and improving consumer experience.',
              ),
              list([
                'translate complex biology into simple flower-care prompts',
                'reduce guesswork about when to change water or intervene',
                'make post-purchase flower care feel more trustworthy and useful',
              ]),
            ],
          },
          {
            eyebrow: 'Goal',
            title: 'Why these formats matter',
            blocks: [
              paragraph(
                'Together, these implementations aim to reduce floral waste while showing that synthetic biology can support practical post-harvest management rather than remain locked inside the lab.',
              ),
              table(
                ['Format', 'Main user', 'Primary value'],
                [
                  ['Laboratory system', 'researchers', 'evidence generation and mechanism testing'],
                  ['Florist kit', 'professionals', 'better operational preservation decisions'],
                  ['Consumer smart vase', 'households', 'simple guidance and improved flower care'],
                ],
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
          'FloraGuard contributes a systems-level preservation framework that connects biology, hardware, and predictive reasoning.',
        highlights: [
          'The project proposes a programmable senescence management framework.',
          'It integrates biological intervention with monitoring hardware.',
          'It broadens how synthetic biology can address horticultural preservation.',
        ],
        nextAdd: [
          'A comparison to existing flower preservation approaches',
          'Reusable protocols, code, or hardware documentation for other teams',
          'A clear statement of what parts of the framework are novel or transferable',
        ],
        modules: [
          {
            type: 'comparison-grid',
            eyebrow: 'Contribution lens',
            title: 'The contribution is stronger when it is framed against what floral preservation usually looks like',
            items: [
              {
                title: 'Typical preservation framing',
                detail: 'Focuses on a single additive, treatment, or storage condition without integrating timing, sensing, and downstream usability.',
              },
              {
                title: 'FloraGuard framing',
                detail: 'Treats post-harvest quality as a programmable systems problem where biology, hardware, and prediction support each other.',
              },
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Reusable outputs',
            title: 'What other teams or users could borrow from FloraGuard',
            items: [
              {
                title: 'Framework',
                detail: 'A general way to think about preservation as closed-loop management rather than static treatment.',
              },
              {
                title: 'Integration pattern',
                detail: 'A project structure that combines wet lab, dry lab, hardware, and implementation in one logic chain.',
              },
              {
                title: 'Transferable methods',
                detail: 'Protocols, monitoring ideas, and modeling logic that could extend to other horticultural preservation problems.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Contribution',
            title: 'What FloraGuard contributes',
            blocks: [
              paragraph('Our project contributes to synthetic biology by:'),
              list([
                'developing a programmable senescence management framework',
                'integrating biological and hardware systems',
                'proposing a new preservation strategy for horticultural products',
              ]),
              paragraph(
                'Taken together, these contributions mean that FloraGuard is not only a treatment concept. It is a proposal for how synthetic biology can reason about post-harvest quality as a controllable systems problem.',
              ),
            ],
          },
          {
            eyebrow: 'Why it matters',
            title: 'Beyond a single project outcome',
            blocks: [
              paragraph(
                'The broader contribution of FloraGuard is conceptual as well as technical. It reframes preservation as an active systems problem, opening a new direction for synthetic biology in post-harvest applications.',
              ),
            ],
          },
          {
            eyebrow: 'Comparison',
            title: 'How FloraGuard differs from typical flower-preservation thinking',
            blocks: [
              table(
                ['Question', 'Typical approach', 'FloraGuard approach'],
                [
                  ['What is adjusted?', 'one additive or storage condition', 'a connected system of sensing, response, and monitoring'],
                  ['When does intervention happen?', 'mostly fixed timing', 'timing informed by condition and prediction'],
                  ['What counts as success?', 'delay visible wilting', 'improve quality, timing, and future decision support together'],
                ],
              ),
              paragraph(
                'This comparison matters because the novelty of FloraGuard is not just in any single module. It lies in how the modules work together as one preservation logic.',
              ),
            ],
          },
          {
            eyebrow: 'Reusability',
            title: 'What parts of the project could be reused by others',
            blocks: [
              list(
                [
                  'the preservation-as-feedback-loop framework',
                  'the pattern of combining wet lab, dry lab, hardware, and implementation in one story',
                  'the idea of translating biological condition into recommendation logic',
                ],
                'ordered',
              ),
              callout(
                'Even before all experiments are complete, FloraGuard already contributes a transferable project architecture that other teams could adapt to different post-harvest or plant-care problems.',
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
      'Introduce the people behind the project and the literature grounding the design.',
    pages: [
      {
        slug: 'team',
        navTitle: 'Team',
        title: 'Team',
        summary:
          'FloraGuard is developed by a multidisciplinary team bringing together synthetic biology, plant science, engineering, and data analysis.',
        highlights: [
          'The project depends on cross-disciplinary collaboration.',
          'Plant physiology, engineering, and modeling are all central to the system.',
          'Team structure should ultimately connect people to concrete work packages.',
        ],
        nextAdd: [
          'Member names, photos, and short biographies',
          'Role matrix across wet lab, dry lab, hardware, and wiki work',
          'Advisor, instructor, and institutional support acknowledgements',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'team',
            eyebrow: 'Team picture',
            title: 'Great team pages connect people to work packages, not just names to faces',
            image: floralTeamCollageArt,
            alt:
              'Illustrated collage of team role clusters around a central floral project.',
            caption:
              'A placeholder for future team photos, role diagrams, and collaboration snapshots.',
            lede:
              'This page should eventually show who built what, how the team coordinated across disciplines, and what kind of expertise made FloraGuard possible.',
            points: [
              'Map people to wet lab, dry lab, hardware, HP, and wiki work.',
              'Use photos and role groupings to make the team memorable.',
              'Show collaboration flow, not just membership.',
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Role clusters',
            title: 'The team works because different expertise areas support different parts of the story',
            items: [
              {
                title: 'Biology and plant science',
                detail: 'Define senescence mechanisms, treatment strategy, and experimental readouts.',
              },
              {
                title: 'Engineering and hardware',
                detail: 'Translate the project into a monitorable and eventually deployable device concept.',
              },
              {
                title: 'Modeling and data',
                detail: 'Turn observations into prediction, intervention timing, and decision support.',
              },
              {
                title: 'Narrative and human practices',
                detail: 'Connect the science to stakeholder needs, implementation, and clear public communication.',
              },
            ],
          },
          {
            type: 'profile-grid',
            eyebrow: 'Work packages',
            title: 'A future team page can already preview how ownership will be shown',
            items: [
              {
                label: 'WP-01',
                title: 'Wet lab and senescence assays',
                detail: 'Responsible for flower treatment design, measurement strategy, and experimental evidence generation.',
              },
              {
                label: 'WP-02',
                title: 'Dry lab and modeling',
                detail: 'Responsible for predictive logic, parameter thinking, and turning observations into recommendations.',
              },
              {
                label: 'WP-03',
                title: 'Hardware and interface',
                detail: 'Responsible for sensing hardware, device framing, and the smart-care experience.',
              },
              {
                label: 'WP-04',
                title: 'Human practices and wiki',
                detail: 'Responsible for stakeholder integration, implementation logic, and public-facing project narrative.',
              },
            ],
          },
        ],
        sections: [
          {
            eyebrow: 'Composition',
            title: 'A multidisciplinary team',
            blocks: [
              paragraph('FloraGuard is developed by a multidisciplinary team including:'),
              list([
                'synthetic biology researchers',
                'plant physiologists',
                'engineers',
                'data scientists',
              ]),
              paragraph(
                'That mix matters because no single discipline can carry the whole project alone: FloraGuard depends on biological mechanism, quantitative reasoning, device thinking, and clear public explanation at the same time.',
              ),
            ],
          },
          {
            eyebrow: 'Shared goal',
            title: 'Working toward sustainable floral care',
            blocks: [
              paragraph(
                'Together we aim to build sustainable solutions for the floral industry by combining biological insight with practical monitoring and deployment thinking.',
              ),
            ],
          },
          {
            eyebrow: 'Organization',
            title: 'How the team can be organized across work packages',
            blocks: [
              table(
                ['Work package', 'Main responsibilities', 'What it contributes to the wiki'],
                [
                  ['Wet Lab', 'treatment design, assays, senescence measurements', 'evidence for mechanism and outcome'],
                  ['Dry Lab', 'prediction logic, dose analysis, validation strategy', 'evidence for decision support'],
                  ['Hardware', 'device concept, sensing, interface thinking', 'evidence for deployment and usability'],
                  ['HP + Wiki', 'stakeholder integration, public narrative, page structure', 'evidence for implementation and social relevance'],
                ],
              ),
              paragraph(
                'This kind of work-package framing will make it easier later to plug in real member names, photos, and biographies without needing to redesign the page structure.',
              ),
            ],
          },
          {
            eyebrow: 'Collaboration',
            title: 'Why coordination matters as much as specialization',
            blocks: [
              paragraph(
                'The project only works when each work package informs the others. Wet lab results should influence the model; hardware needs to know which signals matter; human practices should reshape implementation; and the wiki must make all of those feedback loops legible.',
              ),
              list(
                [
                  'biology defines what should be measured',
                  'modeling defines how those measurements become decisions',
                  'hardware defines how the decisions become usable',
                  'human practices define whether the use case is actually meaningful',
                ],
                'ordered',
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
          'The current literature set anchors FloraGuard in melatonin biology, plant stress tolerance, and ACC deaminase-enabled senescence delay.',
        highlights: [
          'Melatonin literature supports the antioxidant and regulatory logic of the project.',
          'ACC deaminase literature supports ethylene precursor control as a preservation strategy.',
          'This page can expand into a full bibliography as methods and results mature.',
        ],
        nextAdd: [
          'More cut flower senescence and post-harvest physiology papers',
          'Method references for ROS, ACC, and vase life measurements',
          'Hardware and modeling references once those sections are finalized',
        ],
        modules: [
          {
            type: 'visual-panel',
            tone: 'references',
            eyebrow: 'Literature map',
            title: 'Reference pages work better when the reader can see what each paper supports',
            image: floralReferenceMapArt,
            alt:
              'Illustrated reference map linking different literature pillars to the FloraGuard project.',
            caption:
              'A placeholder for future citation clusters or an annotated bibliography overview.',
            lede:
              'Instead of feeling like a dump of citations, this page should explain which papers justify the senescence model, the treatment logic, and the future deployment path.',
            points: [
              'Group literature by what part of FloraGuard it supports.',
              'Grow from core citations into a full methods and modeling bibliography.',
              'Keep references tied to the project logic, not detached from it.',
            ],
          },
          {
            type: 'step-cards',
            eyebrow: 'Literature pillars',
            title: 'The current bibliography already supports three core pillars of the project',
            items: [
              {
                title: 'Melatonin biology',
                detail: 'Supports antioxidant buffering, stress tolerance, and the choice of a senescence-delaying regulator.',
              },
              {
                title: 'ACC deaminase and ethylene',
                detail: 'Supports the idea that manipulating the ethylene precursor pathway can delay floral aging.',
              },
              {
                title: 'Post-harvest physiology',
                detail: 'Supports the broader framing that cut flower decline is a systems problem involving water balance, microbes, and stress signaling.',
              },
            ],
          },
          {
            type: 'citation-clusters',
            eyebrow: 'Citation groups',
            title: 'The bibliography becomes more useful when it is organized by what part of FloraGuard it supports',
            items: [
              {
                support: 'Supports oxidative-stress control',
                title: 'Melatonin literature',
                papers: [
                  'Arnao MB, Hernandez-Ruiz J. Melatonin in plants: growth regulator and antioxidant.',
                  'Zhang N et al. Roles of melatonin in plant stress tolerance.',
                ],
              },
              {
                support: 'Supports ethylene-pathway control',
                title: 'ACC deaminase literature',
                papers: [
                  'Ali S et al. ACC deaminase producing bacteria delay flower senescence.',
                ],
              },
              {
                support: 'Supports project framing and future growth',
                title: 'Post-harvest and methods expansion',
                papers: [
                  'Future additions: cut flower physiology, ROS assays, vase life scoring, and smart monitoring references.',
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
                'Ali S et al. ACC deaminase producing bacteria delay flower senescence. Plant Physiology and Biochemistry (2012).',
              ]),
            ],
          },
          {
            eyebrow: 'Next step',
            title: 'From core references to a full bibliography',
            blocks: [
              paragraph(
                'As wet lab, dry lab, and hardware sections become more detailed, this page should grow into a structured bibliography covering post-harvest physiology, modeling, instrumentation, and synthetic biology methods.',
              ),
            ],
          },
          {
            eyebrow: 'Reference map',
            title: 'How the current literature maps onto the FloraGuard story',
            blocks: [
              table(
                ['Literature pillar', 'Supports pages', 'Main idea supported'],
                [
                  ['Melatonin biology', 'Project Description, Design, Wet Lab', 'oxidative-stress buffering and senescence delay'],
                  ['ACC deaminase / ethylene control', 'Project Description, Design, Wet Lab', 'ethylene-pathway intervention as a preservation lever'],
                  ['Post-harvest physiology', 'Problem, Human Practices, Implementation', 'cut flower decline as a systems-level commercial problem'],
                ],
              ),
              paragraph(
                'Organizing references this way makes the bibliography more helpful for readers, because it shows why each citation exists inside the FloraGuard argument rather than leaving references detached from the pages they justify.',
              ),
            ],
          },
          {
            eyebrow: 'Expansion plan',
            title: 'What the bibliography should include next',
            blocks: [
              list(
                [
                  'cut flower post-harvest physiology and vase-life studies',
                  'methods for ROS, ACC, and visual senescence scoring',
                  'modeling and sensor references for hardware-enabled prediction',
                ],
                'ordered',
              ),
              callout(
                'A strong final reference page will not just be longer. It will be more clearly grouped by what part of the project each paper supports.',
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
    imageAlt: 'Illustrated bouquet and vase representing the FloraGuard platform.',
    imageCaption: 'Project framing around a programmable preservation platform.',
  },
  'problem-inspiration': {
    image: floralStressArt,
    imageAlt: 'Illustration contrasting fresh and stressed flowers.',
    imageCaption: 'Post-harvest stress accumulates across the floral supply chain.',
  },
  design: {
    image: floralHeroArt,
    imageAlt: 'Floral system illustration with sensing and vase motifs.',
    imageCaption: 'Design brings sensing, response, and monitoring into one closed loop.',
  },
  engineering: {
    image: floralLabArt,
    imageAlt: 'Flower and lab illustration with experimental motifs.',
    imageCaption: 'The DBTL cycle connects construct logic to visible flower outcomes.',
  },
  'wet-lab': {
    image: floralLabArt,
    imageAlt: 'Flower, petri dish, and lab instrumentation illustration.',
    imageCaption: 'Wet lab work links senescence markers to treatment performance.',
  },
  'dry-lab': {
    image: smartVaseArt,
    imageAlt: 'Monitoring interface and smart vase illustration.',
    imageCaption: 'Dry lab modeling helps predict intervention timing and dose.',
  },
  hardware: {
    image: smartVaseArt,
    imageAlt: 'Smart vase with sensors and dashboard illustration.',
    imageCaption: 'Hardware turns the preservation concept into a usable monitoring device.',
  },
  'integrated-human-practices': {
    image: floralStressArt,
    imageAlt: 'Flowers and system flow illustration representing supply-chain context.',
    imageCaption: 'Stakeholder needs shape how FloraGuard should be used outside the lab.',
  },
  safety: {
    image: floralLabArt,
    imageAlt: 'Lab-and-flower illustration suggesting controlled biosafety practice.',
    imageCaption: 'Safety is grounded in confinement, controlled use, and responsible translation.',
  },
  implementation: {
    image: smartVaseArt,
    imageAlt: 'Illustrated smart vase and monitoring interface.',
    imageCaption: 'Implementation asks what FloraGuard looks like in real workflows.',
  },
  contribution: {
    image: floralHeroArt,
    imageAlt: 'Bouquet and system illustration representing a synthetic biology platform.',
    imageCaption: 'FloraGuard contributes a preservation framework, not just a single intervention.',
  },
  team: {
    image: floralTeamCollageArt,
    imageAlt: 'Illustrated team role collage around the FloraGuard project.',
    imageCaption: 'A multidisciplinary team is needed to connect biology, hardware, modeling, and translation.',
  },
  references: {
    image: floralReferenceMapArt,
    imageAlt: 'Illustrated literature map for the FloraGuard bibliography.',
    imageCaption: 'Core literature anchors FloraGuard in plant stress biology, ethylene control, and post-harvest systems thinking.',
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
