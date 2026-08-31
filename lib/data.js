export const experience = [
  {
    date: 'May 2026 to Present',
    role: 'Shopify eCommerce Specialist',
    co: 'The Trustee for Cloverash Family Trust, Part Time',
    desc: 'I manage and update the Shopify store, including discounts, banners, homepage sections and custom Liquid tweaks. I also audit and optimize Klaviyo flows like Welcome Series and Abandoned Cart, launch seasonal campaigns including EOFY, and run full content audits across product, FAQ and policy pages.',
  },
  {
    date: 'May 2026 to Present',
    role: 'Shopify Webshop Builder and QA Specialist',
    co: 'Peco Lab Kft., Freelance',
    desc: 'I build and customize Shopify stores on the Tinker theme from approved desktop and mobile mockups. I handle collections, navigation and product population, prep assets in Figma, then run end to end QA before the client ever sees it live.',
  },
  {
    date: 'Apr 2026 to Present',
    role: 'Web Designer and Back Office Manager',
    co: 'HelloSeller Online Uzletfejlesztes, Freelance',
    desc: 'I built a 13 section Wix landing page from a client\'s vision, handling responsive layout, FAQ interactions and hover effects. I also manage backend tasks like coupon generation, UX improvements and general site organization.',
  },
  {
    date: 'Sep 2025 to Mar 2026',
    role: 'Shopify and QA Specialist',
    co: 'Ecom Capital',
    desc: 'I built product, collection and landing pages in GemPages, managed listings and app installs like Loox, Judge.me and Klaviyo, ran cross device QA, logged bugs in ClickUp and recorded Loom tutorials for clients.',
  },
  {
    date: 'Apr 2025 to May 2025',
    role: 'Shopify eCommerce VA and Data Entry Specialist',
    co: 'Aladdin Mediterranean Restaurants, Freelance',
    desc: 'I ran competitor research, organized findings into clean CSV files, and presented insights on top performing brands with a focus on accuracy and clear reporting.',
  },
  {
    date: 'Sep 2024 to May 2025',
    role: 'Shopify Webshop Builder VA',
    co: 'Peco Lab Kft.',
    desc: 'I built and customized Shopify pages straight from Figma designs, helped with store setup, optimized images and communicated directly with the client on updates.',
  },
  {
    date: 'Nov 2022 to Dec 2024',
    role: 'Administrative Assistant',
    co: 'Infinitex Phil Construction Materials Trading',
    desc: 'I managed purchase and expense encoding and reporting in Excel, handled online orders, and ran product listings across Facebook Marketplace, Lazada and Shopee.',
  },
];

// Placeholder image used for every screenshot slot until a real, sanitized
// screenshot is collected. See the Master Screenshot Collection Plan for the
// full list of shots and privacy ratings before replacing any of these.
const PLACEHOLDER = '/project-placeholder.svg';

// To replace a placeholder once you have the real screenshot:
// 1. Drop the sanitized image in /public/project-images/
// 2. Change that slot's `image` path below (e.g. '/project-images/BB-01-hero-desktop.png')
// 3. Change that slot's `status` from 'placeholder' to 'ready'
// The gallery and thumbnails pick this up automatically, no JSX edits needed.

export const workItems = [
  {
    id: 'bouncing-boxer-build',
    tag: 'Shopify Build',
    title: 'Shopify Storefront Build — Bouncing Boxer Co.',
    client: 'Bouncing Boxer Co.',
    // No confirmed start date yet, using neutral wording until provided.
    year: 'Recent project',
    summary: 'Custom Horizon-theme Shopify storefront built with Shopify CLI, Liquid, responsive implementation, integrations, and QA.',
    role: 'Shopify Webshop Builder & QA Specialist',
    tools: 'Shopify Horizon, Liquid, Shopify CLI, GitHub, HTML/CSS/JS',
    heroImage: PLACEHOLDER,
    heroAlt: 'Placeholder — replace with the Bouncing Boxer Co. desktop homepage hero screenshot (BB-01)',
    challenge: 'The client needed a modern, responsive Shopify storefront implemented accurately from the approved direction, and structured so it could function cleanly across desktop and mobile.',
    approach: [
      "Built the storefront on Shopify's native Horizon theme",
      'Developed and customized Shopify sections in Liquid, HTML, CSS and JavaScript',
      'Used Shopify CLI and GitHub as part of the development workflow',
      'Implemented responsive layouts across desktop and mobile breakpoints',
      'Implemented the Afterpay integration on relevant pages',
      'Ran end to end QA across devices before handoff',
    ],
    outcome: 'A working, responsive Shopify storefront built and QA tested from the ground up, using a proper Liquid, CLI and GitHub development workflow.',
    gallery: [
      { id: 'BB-02', title: 'Full Homepage, Desktop', category: 'Visual Result', group: 'Visual Result', image: PLACEHOLDER, alt: 'Placeholder slot BB-02, full desktop homepage screenshot', status: 'placeholder', size: 'large' },
      { id: 'BB-03', title: 'Full Homepage, Mobile', category: 'Visual Result', group: 'Visual Result', image: PLACEHOLDER, alt: 'Placeholder slot BB-03, full mobile homepage screenshot', status: 'placeholder' },
      { id: 'BB-04', title: 'Product Page, Desktop', category: 'Visual Result', group: 'Visual Result', image: PLACEHOLDER, alt: 'Placeholder slot BB-04, product page screenshot, desktop', status: 'placeholder' },
      { id: 'BB-05', title: 'Product Page, Mobile', category: 'Visual Result', group: 'Visual Result', image: PLACEHOLDER, alt: 'Placeholder slot BB-05, product page screenshot, mobile', status: 'placeholder' },
      { id: 'BB-06', title: 'Collection Page', category: 'Visual Result', group: 'Visual Result', image: PLACEHOLDER, alt: 'Placeholder slot BB-06, collection page screenshot', status: 'placeholder' },
      { id: 'BB-07', title: 'Cart / Cart Drawer', category: 'Visual Result', group: 'Visual Result', image: PLACEHOLDER, alt: 'Placeholder slot BB-07, cart screenshot', status: 'placeholder' },
      { id: 'BB-08', title: 'Custom Liquid Section Code', category: 'Technical Implementation', group: 'Technical Implementation', image: PLACEHOLDER, alt: 'Placeholder slot BB-08, custom Liquid section code screenshot', status: 'placeholder', size: 'large' },
      { id: 'BB-09', title: 'Shopify CLI', category: 'Technical Implementation', group: 'Technical Implementation', image: PLACEHOLDER, alt: 'Placeholder slot BB-09, Shopify CLI terminal screenshot', status: 'placeholder' },
      { id: 'BB-10', title: 'GitHub (only if permitted)', category: 'Technical Implementation', group: 'Technical Implementation', image: PLACEHOLDER, alt: 'Placeholder slot BB-10, GitHub repository screenshot', status: 'placeholder' },
      { id: 'BB-11', title: 'Afterpay Integration', category: 'Technical Implementation', group: 'Technical Implementation', image: PLACEHOLDER, alt: 'Placeholder slot BB-11, Afterpay widget screenshot', status: 'placeholder' },
      { id: 'BB-12', title: 'Responsive QA', category: 'QA', group: 'QA', image: PLACEHOLDER, alt: 'Placeholder slot BB-12, desktop and mobile QA comparison', status: 'placeholder', size: 'large' },
      { id: 'BB-13', title: 'Final Storefront', category: 'Final Result', group: 'Final Result', image: PLACEHOLDER, alt: 'Placeholder slot BB-13, final storefront screenshot', status: 'placeholder', size: 'large' },
    ],
  },
  {
    id: 'peco-figma-build',
    tag: 'Shopify Build',
    title: 'Figma to Live Shopify Build',
    client: 'Peco Lab Kft.',
    year: '2024 to Present',
    summary: 'Turning approved Figma mockups into pixel accurate, responsive Shopify storefronts on the Tinker theme.',
    role: 'Shopify Webshop Builder and QA Specialist',
    tools: 'Shopify, Tinker Theme, Figma, Liquid',
    heroImage: PLACEHOLDER,
    heroAlt: 'Placeholder — replace with the finished Peco Lab live storefront screenshot (PL-09)',
    challenge: 'Approved Figma mockups needed to become fully responsive, pixel accurate Shopify storefronts on the Tinker theme, without losing spacing or structure across breakpoints.',
    approach: [
      'Broke down desktop and mobile Figma frames into reusable Shopify sections',
      'Built collection structures, navigation and product organization from scratch',
      'Prepped image assets and icons directly in Figma before implementation',
      'Ran end to end QA passes to catch layout and functionality issues before delivery',
      'Communicated directly with the client through build and QA rounds',
    ],
    outcome: 'Consistent, on time store builds that match approved designs closely enough that clients rarely ask for revision rounds.',
    gallery: [
      { id: 'PL-01', title: 'Figma Homepage', category: 'Design → Implementation', group: 'Design → Implementation', image: PLACEHOLDER, alt: 'Placeholder slot PL-01, Figma homepage design frame', status: 'placeholder', size: 'large' },
      { id: 'PL-04', title: 'Figma Mobile', category: 'Design → Implementation', group: 'Design → Implementation', image: PLACEHOLDER, alt: 'Placeholder slot PL-04, Figma mobile design frame', status: 'placeholder' },
      { id: 'PL-02', title: 'Live Homepage, Desktop', category: 'Responsive Build', group: 'Responsive Build', image: PLACEHOLDER, alt: 'Placeholder slot PL-02, live homepage screenshot, desktop', status: 'placeholder', size: 'large' },
      { id: 'PL-03', title: 'Live Homepage, Mobile', category: 'Responsive Build', group: 'Responsive Build', image: PLACEHOLDER, alt: 'Placeholder slot PL-03, live homepage screenshot, mobile', status: 'placeholder' },
      { id: 'PL-07', title: 'Theme Editor', category: 'Technical Implementation', group: 'Technical Implementation', image: PLACEHOLDER, alt: 'Placeholder slot PL-07, Shopify theme editor screenshot', status: 'placeholder', size: 'large' },
      { id: 'PL-05', title: 'Product Page', category: 'Technical Implementation', group: 'Technical Implementation', image: PLACEHOLDER, alt: 'Placeholder slot PL-05, product page screenshot', status: 'placeholder' },
      { id: 'PL-06', title: 'Collection / Navigation', category: 'Technical Implementation', group: 'Technical Implementation', image: PLACEHOLDER, alt: 'Placeholder slot PL-06, collection and navigation screenshot', status: 'placeholder' },
      { id: 'PL-08', title: 'QA Comparison', category: 'QA', group: 'QA', image: PLACEHOLDER, alt: 'Placeholder slot PL-08, desktop and mobile QA comparison', status: 'placeholder', size: 'large' },
      { id: 'PL-09', title: 'Final Outcome', category: 'Final Result', group: 'Final Result', image: PLACEHOLDER, alt: 'Placeholder slot PL-09, final live storefront screenshot', status: 'placeholder', size: 'large' },
    ],
  },
  {
    id: 'cloverash-ops',
    tag: 'Ecom Ops and Email',
    title: 'Store Ops, Klaviyo Flows & Campaign Support — Cloverash',
    client: 'Cloverash Family Trust',
    year: '2026 to Present',
    summary: 'Ongoing Shopify store management covering promotions, banners, Liquid updates, GemPages pages, and a full Klaviyo flow audit.',
    role: 'Shopify eCommerce Specialist',
    tools: 'Shopify, Liquid, Klaviyo, Canva, GemPages',
    heroImage: PLACEHOLDER,
    heroAlt: 'Placeholder — replace with the Cloverash live storefront homepage screenshot (CL-01)',
    challenge: 'The store needed ongoing hands on management for promotions and content accuracy, plus email flows that had not been reviewed in a while. This is store operations and marketing support on an existing store, not a from scratch build.',
    approach: [
      'Updated homepage banners, discounts and custom Liquid sections as needed',
      'Built and maintained pages in GemPages',
      'Audited Welcome Series and Abandoned Cart flows for gaps in timing and copy',
      'Rebuilt seasonal campaigns end to end, including EOFY promotions',
      'Ran full content audits across product, FAQ and policy pages with screenshots',
      'Designed campaign graphics in Canva for Instagram, Facebook and TikTok',
    ],
    outcome: 'A cleaner customer journey from first email to checkout, with documented audit trails for every content pass.',
    gallery: [
      { id: 'CL-02', title: 'Promo Banner, Before/After (only if real evidence exists)', category: 'Store Operations', group: 'Store Operations & Content', image: PLACEHOLDER, alt: 'Placeholder slot CL-02, promo banner before and after, only if a real before screenshot exists', status: 'placeholder' },
      { id: 'CL-07', title: 'GemPages Editor', category: 'Store Operations', group: 'Store Operations & Content', image: PLACEHOLDER, alt: 'Placeholder slot CL-07, GemPages editor screenshot', status: 'placeholder' },
      { id: 'CL-08', title: 'FAQ / Policy Page', category: 'Store Operations', group: 'Store Operations & Content', image: PLACEHOLDER, alt: 'Placeholder slot CL-08, FAQ or policy page screenshot', status: 'placeholder' },
      { id: 'CL-09', title: 'Liquid Edit', category: 'Store Operations', group: 'Store Operations & Content', image: PLACEHOLDER, alt: 'Placeholder slot CL-09, custom Liquid edit code screenshot', status: 'placeholder' },
      { id: 'CL-10', title: 'Canva Asset', category: 'Store Operations', group: 'Store Operations & Content', image: PLACEHOLDER, alt: 'Placeholder slot CL-10, Canva promotional graphic', status: 'placeholder' },
      { id: 'CL-03', title: 'Klaviyo Welcome Series', category: 'Klaviyo', group: 'Klaviyo & Campaigns', image: PLACEHOLDER, alt: 'Placeholder slot CL-03, Klaviyo Welcome Series flow overview', status: 'placeholder', size: 'large' },
      { id: 'CL-04', title: 'Klaviyo Abandoned Cart', category: 'Klaviyo', group: 'Klaviyo & Campaigns', image: PLACEHOLDER, alt: 'Placeholder slot CL-04, Klaviyo Abandoned Cart flow overview', status: 'placeholder' },
      { id: 'CL-05', title: 'Email Design', category: 'Klaviyo', group: 'Klaviyo & Campaigns', image: PLACEHOLDER, alt: 'Placeholder slot CL-05, individual Klaviyo email design', status: 'placeholder' },
      { id: 'CL-06', title: 'EOFY / Seasonal Campaign', category: 'Klaviyo', group: 'Klaviyo & Campaigns', image: PLACEHOLDER, alt: 'Placeholder slot CL-06, seasonal or EOFY campaign screenshot', status: 'placeholder' },
      { id: 'CL-11', title: 'Final Outcome', category: 'Final Result', group: 'Final Result', image: PLACEHOLDER, alt: 'Placeholder slot CL-11, current full homepage screenshot', status: 'placeholder', size: 'large' },
    ],
  },
  {
    id: 'ecom-capital-qa',
    tag: 'Agency / Multi-Store QA',
    title: 'Shopify QA & Multi-Store eCommerce Support — Ecom Capital',
    client: 'Ecom Capital',
    year: '2025 to 2026',
    summary: 'Agency-side QA, page builds, troubleshooting, and eCommerce support across multiple client storefronts.',
    role: 'Shopify and QA Specialist',
    tools: 'GemPages, Figma, ClickUp, Klaviyo, Loox, Judge.me',
    heroImage: PLACEHOLDER,
    heroAlt: 'Placeholder — replace with a composite of multiple client storefront homepages (this was an agency engagement across several stores, not one single store)',
    challenge: 'Multiple client stores in active development, across a shared agency workflow, needed consistent QA coverage before launch and clearer documentation so bugs did not slip through.',
    approach: [
      'Worked within an eCommerce agency, supporting multiple client Shopify stores rather than a single storefront',
      'Built and updated product, collection and landing pages in GemPages across those stores',
      'Managed listings, variants, pricing, inventory, and shipping and market settings per store',
      'Installed and configured apps including Loox, Judge.me and Klaviyo, plus bundles and cart tools',
      'Cross checked builds against Figma for layout accuracy, logging issues in ClickUp',
      'Recorded Loom walkthroughs so clients could see fixes without a call',
    ],
    outcome: 'A repeatable QA checklist that catches issues before customers ever see them.',
    gallery: [
      { id: 'EC-05', title: 'ClickUp Board', category: 'QA Workflow', group: 'QA Workflow', image: PLACEHOLDER, alt: 'Placeholder slot EC-05, ClickUp board of logged bugs, client and teammate names redacted before publishing', status: 'placeholder', size: 'large' },
      { id: 'EC-06', title: 'ClickUp Bug Report', category: 'QA Workflow', group: 'QA Workflow', image: PLACEHOLDER, alt: 'Placeholder slot EC-06, individual bug report detail, client name and URL redacted before publishing', status: 'placeholder' },
      { id: 'EC-07', title: 'QA Comparison', category: 'QA Workflow', group: 'QA Workflow', image: PLACEHOLDER, alt: 'Placeholder slot EC-07, desktop and mobile QA comparison, store branding blurred if needed', status: 'placeholder' },
      { id: 'EC-02', title: 'GemPages', category: 'Tools & Implementation', group: 'Tools & Implementation', image: PLACEHOLDER, alt: 'Placeholder slot EC-02, GemPages editor screenshot', status: 'placeholder' },
      { id: 'EC-03', title: 'Loox', category: 'Tools & Implementation', group: 'Tools & Implementation', image: PLACEHOLDER, alt: 'Placeholder slot EC-03, Loox reviews widget on a live product page', status: 'placeholder' },
      { id: 'EC-04', title: 'Judge.me', category: 'Tools & Implementation', group: 'Tools & Implementation', image: PLACEHOLDER, alt: 'Placeholder slot EC-04, Judge.me reviews widget on a live product page', status: 'placeholder' },
      { id: 'EC-08', title: 'Loom Documentation', category: 'Documentation', group: 'Documentation', image: PLACEHOLDER, alt: 'Placeholder slot EC-08, Loom tutorial title card, title card only, no client screen content', status: 'placeholder' },
    ],
  },
  {
    id: 'helloseller-landing',
    tag: 'Landing Page',
    title: '13-Section Landing Page & Back Office Support — HelloSeller',
    client: 'HelloSeller',
    year: '2026 to Present',
    summary: 'A full book launch landing page built section by section from a client\'s content and brand vision, plus ongoing back office support.',
    role: 'Web Designer and Back Office Manager',
    tools: 'Wix, UX/UI, Coupon Systems',
    heroImage: PLACEHOLDER,
    heroAlt: 'Placeholder — replace with the HelloSeller landing page hero screenshot (HS-01)',
    challenge: 'Turn a client\'s vision for a book product into a page that reads well and actually converts, on both desktop and mobile.',
    approach: [
      'Mapped out 13 sections balancing story, proof and call to action',
      'Designed responsive spacing and layout for both device sizes',
      'Built interactive FAQ accordions and hover effects for engagement',
      'Handled backend coupon generation, ongoing site updates and general back office support',
    ],
    outcome: 'A single page experience built entirely from a content brief, with no existing design system to lean on.',
    gallery: [
      { id: 'HS-02', title: 'Full Page, Desktop', category: 'Visual Result', group: 'Visual Result', image: PLACEHOLDER, alt: 'Placeholder slot HS-02, full 13 section landing page screenshot, desktop', status: 'placeholder', size: 'large' },
      { id: 'HS-03', title: 'Full Page, Mobile', category: 'Visual Result', group: 'Visual Result', image: PLACEHOLDER, alt: 'Placeholder slot HS-03, full landing page screenshot, mobile', status: 'placeholder' },
      { id: 'HS-04a', title: 'FAQ, Closed', category: 'Interactions', group: 'Interactions', image: PLACEHOLDER, alt: 'Placeholder slot HS-04a, FAQ accordion closed state', status: 'placeholder' },
      { id: 'HS-04b', title: 'FAQ, Open', category: 'Interactions', group: 'Interactions', image: PLACEHOLDER, alt: 'Placeholder slot HS-04b, FAQ accordion open state', status: 'placeholder' },
      { id: 'HS-05', title: 'Hover State', category: 'Interactions', group: 'Interactions', image: PLACEHOLDER, alt: 'Placeholder slot HS-05, hover interaction on a button or card', status: 'placeholder' },
      { id: 'HS-06', title: 'Coupon Feature', category: 'Interactions', group: 'Interactions', image: PLACEHOLDER, alt: 'Placeholder slot HS-06, coupon code generator feature, no live valid code shown', status: 'placeholder' },
      { id: 'HS-07', title: 'Wix Editor', category: 'Technical Implementation', group: 'Technical Implementation', image: PLACEHOLDER, alt: 'Placeholder slot HS-07, Wix editor backend view', status: 'placeholder' },
      { id: 'HS-08', title: 'Final Outcome', category: 'Final Result', group: 'Final Result', image: PLACEHOLDER, alt: 'Placeholder slot HS-08, closing full page screenshot', status: 'placeholder', size: 'large' },
    ],
  },
];

export const partners = [
  {
    name: 'Glasari',
    initials: 'GL',
    color: 'var(--mauve-600)',
    desc: 'I collaborated on Shopify build and design support here, helping with store setup and keeping the visuals consistent across projects.',
  },
  {
    name: 'Bouncing Boxer Co.',
    initials: 'BB',
    color: 'var(--mauve-500)',
    desc: 'We worked together on eCommerce store tasks, from product setup to content updates and day to day store management.',
  },
  {
    name: 'HelloSeller',
    initials: 'HS',
    color: 'var(--mauve-700)',
    desc: 'An ongoing collaboration on landing pages, backend site management and UX/UI improvements for client launches.',
  },
];

// personal and school projects
// to add a real video, drop the file in /public and set type to "video" with media pointing to it
// videos autoplay muted on hover in the grid, and open with controls when clicked
export const personalProjects = [
  {
    id: 'alca-mascot',
    title: 'Alca the Bear, Mascot Design',
    type: 'image',
    media: '/bear-hand.png',
    bg: 'linear-gradient(135deg, var(--pink-100), var(--pink-200))',
    tag: 'Personal Project',
    year: '2026',
    tools: 'Figma, Illustration',
    desc: 'A little brand mascot I designed for myself. Alca shows up across my socials and this portfolio as a familiar, friendly face. I explored a few poses and expressions to keep her feeling consistent without being stiff.',
  },
  {
    id: 'campus-marketplace',
    title: 'Campus Marketplace App Concept',
    type: 'image',
    media: '',
    bg: 'linear-gradient(135deg, var(--pink-200), var(--mauve-500))',
    tag: 'School Project',
    year: '2023',
    tools: 'Figma, UX Research',
    desc: 'Example slot, swap this with a screenshot or short clip of a real school project, like a marketplace app concept for students to buy and sell secondhand items on campus. Add the real problem you were solving, how you approached it, and what came out of it.',
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker Redesign',
    type: 'image',
    media: '',
    bg: 'linear-gradient(135deg, var(--mauve-600), var(--pink-100))',
    tag: 'Personal Project',
    year: '2024',
    tools: 'Figma, UI Design',
    desc: 'Example slot, replace with a personal project of your own, like a redesign exercise or a tool you built for yourself. Include what you set out to fix, what you tried, and what you would do differently next time.',
  },
];

export const toolkit = ['Shopify + Liquid', 'GemPages', 'Klaviyo', 'Figma', 'Canva', 'Wix', 'ClickUp QA'];

export const services = [
  {
    title: 'Shopify Store Builds',
    desc: 'Full store builds from Figma or Wix mockups, covering sections, collections, navigation and product population, built to match the design closely.',
  },
  {
    title: 'QA and Bug Testing',
    desc: 'Cross device QA passes that catch layout, functionality and UX issues before customers ever see them, tracked in ClickUp and explained over Loom.',
  },
  {
    title: 'Email Flow Audits',
    desc: 'Klaviyo audits and rebuilds for Welcome Series, Abandoned Cart and seasonal campaigns, with tighter timing, copy and structure.',
  },
  {
    title: 'eCommerce Store Management',
    desc: 'Day to day Shopify store ops, promos, banners, discounts and small Liquid tweaks, so the store stays accurate and current between bigger projects.',
  },
  {
    title: 'Design and Content Ops',
    desc: 'Social graphics, banners and landing sections in Canva and Figma, plus ongoing content audits across product, FAQ and policy pages.',
  },
];

export const engagementModels = [
  {
    title: 'Project based',
    desc: 'A defined scope like a store build, a QA pass, or a flow audit, with a clear start and finish.',
  },
  {
    title: 'Retainer',
    desc: 'Ongoing monthly support for stores that need regular updates, content changes and QA, without hiring in house.',
  },
  {
    title: 'Consult',
    desc: 'A shorter session to look at your store or flows and tell you plainly what I would fix first.',
  },
];

export const serviceFaqs = [
  {
    q: 'Do you work with agencies or only direct clients?',
    a: 'Both. I currently split my time between agency partnerships and direct freelance clients, and I am comfortable slotting into an existing team workflow or running a project on my own.',
  },
  {
    q: 'What platforms do you build on?',
    a: 'Mostly Shopify, using Liquid and GemPages, plus Wix for landing pages. If your store lives somewhere else, tell me the platform and I will let you know honestly if it is a good fit.',
  },
  {
    q: 'How fast can you turn a project around?',
    a: 'It depends on scope. A QA pass can happen the same week, a full store build usually takes longer depending on the number of sections and revisions. I will give you a realistic timeline after we talk through the brief.',
  },
  {
    q: 'Do you offer ongoing or retainer support?',
    a: 'Yes. Several of my current partnerships are ongoing rather than one off, covering ops, content updates and QA on a regular basis.',
  },
];

export const contactFaqs = [
  {
    q: 'What is the best way to reach you?',
    a: 'The form below or email works best. I check both daily and usually reply within 24 hours.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, happy to sign one before we get into store details, especially for agency work or anything unreleased.',
  },
  {
    q: 'Can we hop on a call before committing?',
    a: 'Of course. A short intro call is the easiest way for both of us to see if it is a good fit before anything is locked in.',
  },
];

// TODO: the Upwork URL below is still a placeholder, swap in the real
// profile URL when confirmed. Left as-is rather than inventing one.
export const socialLinks = [
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~yourprofileid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alphacathleen' },
  { label: 'GitHub', href: 'https://github.com/alphacathleen' },
  { label: 'YouTube', href: 'https://www.youtube.com/@alcafl' },
];
