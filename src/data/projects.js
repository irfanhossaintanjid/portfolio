// Centralized Project Showcase Data
// Strictly derived from actual source code, README documentation, and project specifications.
// No fabricated URLs, no backend repository links, no fake statistics.

export const projectsData = [
  {
    slug: 'framio',
    title: 'Framio',
    category: 'Creative Studio Booking Marketplace',
    tagline: 'Discover and book production spaces for film, photo, audio, and creative projects',
    shortDescription: 'A full-stack marketplace connecting filmmakers, photographers, podcasters, and musicians with creative studio spaces, featuring real-time availability checks and automated invoice generation.',
    overview: 'Framio is a specialized marketplace platform engineered to streamline how creative professionals discover, schedule, and reserve production studios. The platform enables studio hosts to publish comprehensive studio listings—including gear inventories, lighting specifications, and hourly pricing—while creators can inspect studio amenities, check unbooked slots, reserve production sessions, and download official PDF receipts.',
    image: '/images/projects/framio.png',
    previewType: 'framio',
    badge: 'FLAGSHIP FULL-STACK PROJECT',
    featured: true,
    technologies: [
      { name: 'Next.js 16', category: 'Frontend', role: 'App Router & Server Components' },
      { name: 'React 19', category: 'Frontend', role: 'UI Library' },
      { name: 'TypeScript', category: 'Language', role: 'Type Safety & Domain Models' },
      { name: 'Tailwind CSS v4', category: 'Styling', role: 'Modern Utility Styling' },
      { name: 'Base UI', category: 'UI Component', role: 'Accessible Headless Primitives' },
      { name: 'Lucide Icons', category: 'Icons', role: 'Clean Vector System' },
      { name: 'Better Auth', category: 'Authentication', role: 'Email/Password & Google OAuth' },
      { name: 'MongoDB', category: 'Database', role: 'Listing & Reservation Storage' },
      { name: 'Express 5', category: 'Backend', role: 'REST API & Booking Controller' },
      { name: 'jsPDF', category: 'Utility', role: 'Client-Side PDF Invoicing' },
      { name: 'React Toastify', category: 'Feedback', role: 'Transactional Toast Notifications' }
    ],
    mainTechList: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Better Auth', 'MongoDB'],
    features: [
      'Multi-Category Studio Exploration: Filter photography studios, film stages, podcast lounges, music suites, and creative workshops.',
      'Comprehensive Studio Specifications: Inspect equipment inventories, acoustic treatment details, host profiles, and reviews.',
      'Host Listing Management: Create, update, and manage studio profiles with strict server-side ownership authorization checks.',
      'Booking Lifecycle Management: Automated state progression from Pending to Confirmed, with automatic marking to Completed past booking end time.',
      'Overlapping Slot Protection: Server-side reservation conflict prevention backed by unique booking slot verification.',
      'Automated PDF Invoice Generation: Instant client-side generation and download of formatted booking receipts using jsPDF.',
      'Saved Studios Wishlist: Save preferred spaces for future production sessions.'
    ],
    challenges: [
      'Architecting safe concurrent reservation handling in MongoDB to eliminate race conditions and double-booking during peak reservation requests.',
      'Synchronizing session cookies between the Next.js client proxy and the decoupled Express 5 REST API without sacrificing SameSite security.',
      'Ensuring responsive studio photo galleries with fast layout calculations using modern Tailwind CSS v4 and Base UI primitives.'
    ],
    futureImprovements: [
      'In-app real-time messaging pipeline between studio hosts and creators for pre-production coordination.',
      'Dynamic pricing engine supporting weekend surcharges and off-peak discount tiers.',
      'Calendar synchronization with Google Calendar and Apple iCal for automated studio schedule management.'
    ],
    // Verified URLs from assignment README & git config
    liveUrl: 'https://framio-client.vercel.app',
    clientGithubUrl: 'https://github.com/irfanhossaintanjid/framio-client',
    hasVerifiedLive: true,
    hasVerifiedGithub: true
  },
  {
    slug: 'bazardor',
    title: 'BazarDor',
    category: 'Commodity Market & Price Tracking Web App',
    tagline: 'Track daily grocery and commodity price shifts across local retail markets',
    shortDescription: 'A consumer market intelligence web app providing transparency into daily retail commodity prices, tracking price risers and fallers with authentic Bengali numeral formatting.',
    overview: 'BazarDor addresses daily grocery price volatility by aggregating verified commodity rates across local markets in Bangladesh. Users can track price fluctuations for staple goods—rice, lentils, cooking oil, seasonal vegetables, fish, and poultry—viewing low-to-high market spreads, daily price change percentages, and curated lists of rising and falling items.',
    image: '/images/projects/bazardor.png',
    previewType: 'bazardor',
    badge: 'MARKET INTELLIGENCE',
    featured: false,
    technologies: [
      { name: 'Next.js', category: 'Frontend', role: 'App Router & Dynamic Page Generation' },
      { name: 'React', category: 'Frontend', role: 'Component System' },
      { name: 'TypeScript', category: 'Language', role: 'Type Definitions' },
      { name: 'Tailwind CSS', category: 'Styling', role: 'Responsive Layouts' },
      { name: 'DaisyUI', category: 'UI Component', role: 'Component Elements' },
      { name: 'Better Auth', category: 'Authentication', role: 'Email, Google & GitHub Auth' },
      { name: 'MongoDB', category: 'Database', role: 'User Profiles & Preference Store' },
      { name: 'React Hot Toast', category: 'Feedback', role: 'Status Notifications' },
      { name: 'React Marquee Text', category: 'Animation', role: 'Live Ticker Banner' }
    ],
    mainTechList: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Better Auth', 'MongoDB', 'DaisyUI'],
    features: [
      'Bilingual Price Representation: Native Bengali language and Bengali digit rendering (বাংলা সংখ্যা) for market prices and units.',
      'Price Shift Detection: Dedicated filtered sections highlighting today’s price increases ("আজ দাম বেড়েছে ▲") and decreases ("আজ দাম কমেছে ▼").',
      'Continuous Price Marquee Ticker: Real-time scrolling ticker displaying live market price spreads below navigation.',
      'Market-by-Market Price Comparison: In-depth breakdown showing minimum, maximum, and average prices across distinct local bazars.',
      'Category Filtering & Sorting: Categorize commodities by produce, grains, and meats with numerical price sort (low-to-high & high-to-low).',
      'Protected User Profile: Authenticated user dashboard with profile name update via Better Auth.'
    ],
    challenges: [
      'Correctly parsing, formatting, and sorting Bengali numeric numerals (e.g. ১৪৮ টাকা vs ১,৮৫০ টাকা) accurately by true numerical value rather than string collation.',
      'Handling route protection gracefully across dynamic Next.js routes (`/product/[id]`, `/profile`, `/category/[slug]`) with Better Auth session validation.'
    ],
    futureImprovements: [
      'Historical price chart visualizations spanning 30-day and 90-day seasonal cost trends.',
      'User price alert notifications triggered when tracked staples drop below a user-defined price ceiling.',
      'Crowdsourced price verification system with receipt-upload verification.'
    ],
    // Verified live deployment & client GitHub
    liveUrl: 'https://bazardor-zeta-henna.vercel.app/',
    clientGithubUrl: 'https://github.com/irfanhossaintanjid/bazardor',
    hasVerifiedLive: true,
    hasVerifiedGithub: true
  },
  {
    slug: 'fitlog',
    title: 'FitLog',
    category: 'Workout & Fitness Tracking Web App',
    tagline: 'Train with intent. Log every set.',
    shortDescription: 'A streamlined fitness companion web application designed for active workout tracking, daily exercise scheduling, and structured routine organization.',
    overview: 'FitLog is a focused fitness logging web application built to eliminate distractions during training. Athletes can explore a comprehensive workout library categorized by muscle groups, view detailed step-by-step exercise execution instructions, assemble an active 5-exercise daily plan, and track completed movements in real time.',
    image: '/images/projects/fitlog.png',
    previewType: 'fitlog',
    badge: 'FITNESS & PRODUCTIVITY',
    featured: false,
    technologies: [
      { name: 'Next.js', category: 'Frontend', role: 'Page Routing & Layout Management' },
      { name: 'React', category: 'Frontend', role: 'UI Hierarchy' },
      { name: 'TypeScript', category: 'Language', role: 'Workout & Plan Data Typing' },
      { name: 'Tailwind CSS', category: 'Styling', role: 'Clean Dark/Light Theme Layouts' },
      { name: 'Context API', category: 'State', role: 'Global Plan & Saved Workouts Store' },
      { name: 'DaisyUI', category: 'UI Component', role: 'Component Styling' },
      { name: 'react-hot-toast', category: 'Feedback', role: 'Immediate Action Feedback' },
      { name: 'React Icons', category: 'Icons', role: 'Target Muscle Visuals' }
    ],
    mainTechList: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Context API', 'react-hot-toast'],
    features: [
      'Categorized Workout Catalog: Detailed exercise library with target muscle group tags, estimated time requirements, caloric expenditure, and ratings.',
      'Comprehensive Exercise Instructions: Step-by-step mechanical execution cues and safety notes for each movement.',
      'Today’s Plan Builder: Add workouts to an active training session with strict constraints (duplicate addition prevention, 5-exercise session cap).',
      'Save for Later Backlog: Bookmark exercises into a personal saved queue for future training days.',
      'Session Dashboard: Live exercise completion toggle, session total time and calorie summation, and dynamic routine reordering.'
    ],
    challenges: [
      'Managing shared routine state across independent pages using React Context API without triggering unnecessary re-renders of the entire workout list.',
      'Implementing strict client-side validation logic that restricts routine capacity to exactly 5 movements while preventing accidental duplicates.'
    ],
    futureImprovements: [
      'Custom workout routine builder allowing users to create, save, and share reusable routine presets.',
      'Progressive overload volume calculator tracking sets, reps, and cumulative poundage over time.',
      'Offline-first PWA caching so gym sessions can be recorded without active internet connectivity.'
    ],
    // Verified live deployment & client GitHub
    liveUrl: 'https://fit-log-orpin-two.vercel.app/',
    clientGithubUrl: 'https://github.com/irfanhossaintanjid/assignment-6',
    hasVerifiedLive: true,
    hasVerifiedGithub: true
  },
  {
    slug: 'dev-stack-builder',
    title: 'Dev Stack Builder',
    category: 'Developer Tool & Architecture Configurator',
    tagline: 'Explore technologies and compose customized project development stacks',
    shortDescription: 'An interactive developer utility for evaluating modern frontend, backend, and database technologies and assembling customized project stack specifications.',
    overview: 'Dev Stack Builder is a responsive single-page web application designed to help developers review, compare, and assemble modern software technology stacks. Loading comprehensive technology metadata from structured JSON, users can visually explore tool capabilities, select preferred components, and manage a consolidated stack in an interactive sidebar.',
    image: '/images/projects/dev-stack-builder.png',
    previewType: 'devstack',
    badge: 'DEVELOPER UTILITY',
    featured: false,
    technologies: [
      { name: 'React', category: 'Frontend', role: 'Component Architecture' },
      { name: 'TypeScript', category: 'Language', role: 'Type Definitions & Props Interface' },
      { name: 'Vite', category: 'Build Tool', role: 'Fast Development & Bundle Tooling' },
      { name: 'Tailwind CSS', category: 'Styling', role: 'Utility Layouts' },
      { name: 'React Toastify', category: 'Feedback', role: 'Stack Selection Feedback' },
      { name: 'JSON Catalog', category: 'Data', role: 'Extensible Tech Manifest' }
    ],
    mainTechList: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Toastify'],
    features: [
      'Technology Exploration Grid: Browse modern web technologies complete with descriptions, categories, and technical badges.',
      'Interactive Stack Assembly: Single-click addition and removal of tools to and from a personalized developer stack.',
      'Dynamic Stack Management Sidebar: Real-time calculation of total technologies selected with instant removal controls.',
      'Empty and Populated State UI: Clean visual guidance when no technologies are selected, shifting to a structured summary upon selection.'
    ],
    challenges: [
      'Designing an extensible JSON catalog structure that cleanly separates frontend, backend, database, and devops paradigms.',
      'Handling stateful item selections and removals efficiently in React without state desynchronization between grid cards and the active sidebar.'
    ],
    futureImprovements: [
      'Automated starter project scaffolding generator exporting a pre-configured `package.json` with chosen dependencies.',
      'Architecture compatibility validator flagging incompatible libraries or recommending complementary pairing.'
    ],
    // Verified live deployment & client GitHub
    liveUrl: 'https://dev-stack-builder.netlify.app/',
    clientGithubUrl: 'https://github.com/irfanhossaintanjid/assignment-5',
    hasVerifiedLive: true,
    hasVerifiedGithub: true
  }
];
