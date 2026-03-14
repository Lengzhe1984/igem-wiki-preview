import floralHeroArt from './assets/floraguard-hero.svg'
import floralStressArt from './assets/floral-stress.svg'
import floralLabArt from './assets/floral-lab.svg'
import smartVaseArt from './assets/floral-smart-vase.svg'
import floralNotesArt from './assets/floral-notes.svg'

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
        ],
        sections: [
          {
            eyebrow: 'Aim 1',
            title: 'Characterize senescence progression in selected cut flowers',
            blocks: [
              paragraph('We selected representative flower species and monitored the baseline progression of decline.'),
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
              paragraph('Measured parameters include:'),
              list([
                'vase life',
                'antioxidant enzyme activity',
                'visual senescence scoring',
              ]),
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
            ],
          },
          {
            eyebrow: 'Use case',
            title: 'What the device enables',
            blocks: [
              paragraph(
                'This device supports senescence prediction and preservation recommendations, creating a path from experimental understanding toward florist and consumer-facing tools.',
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
            ],
          },
          {
            eyebrow: 'Integration',
            title: 'How human practices changed the project',
            blocks: [
              paragraph(
                'These insights guided the design of FloraGuard as a practical preservation system rather than a single laboratory intervention. They reinforced the need for monitoring, prediction, and formats that could work for both professionals and consumers.',
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
            ],
          },
          {
            eyebrow: 'Practice',
            title: 'Laboratory biosafety and translation boundaries',
            blocks: [
              paragraph(
                'All laboratory work follows institutional biosafety guidelines. As the project moves toward application thinking, we treat deployable formats separately from laboratory engineering so that future translation remains responsible and controlled.',
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
        sections: [
          {
            eyebrow: 'Research use',
            title: 'Laboratory system',
            blocks: [
              paragraph('This format is used for studying flower senescence biology and testing preservation logic under controlled conditions.'),
            ],
          },
          {
            eyebrow: 'Professional use',
            title: 'Florist preservation kit',
            blocks: [
              paragraph(
                'A florist-oriented version would pair preservation solutions with monitoring tools to improve storage, transport, and display decisions.',
              ),
            ],
          },
          {
            eyebrow: 'Consumer use',
            title: 'Consumer smart vase',
            blocks: [
              paragraph(
                'A household device could provide flower care recommendations, bringing predictive preservation into the home and improving consumer experience.',
              ),
            ],
          },
          {
            eyebrow: 'Goal',
            title: 'Why these formats matter',
            blocks: [
              paragraph(
                'Together, these implementations aim to reduce floral waste while showing that synthetic biology can support practical post-harvest management rather than remain locked inside the lab.',
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
    image: floralNotesArt,
    imageAlt: 'Notebook and flower illustration representing team planning and authorship.',
    imageCaption: 'A multidisciplinary team is needed to connect biology, hardware, and modeling.',
  },
  references: {
    image: floralNotesArt,
    imageAlt: 'Notebook with flower motifs and literature lines.',
    imageCaption: 'Core literature anchors FloraGuard in plant stress biology and senescence control.',
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
