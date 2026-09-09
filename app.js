// Asset Database details for modal inspection across pages
const ASSET_DETAILS = {
// Corporate B2B Channel Work Showcase (45 Unique Simplicity Projects)
  'life-1': {
    title: "Reallocating Tax-Inefficient Retirement Assets",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-1.png",
    desc: "Advanced Markets strategy guide on optimizing retirement plan asset tax efficiency."
  },
  'life-2': {
    title: "Executive Sales Training Mailer (April 2026)",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-2.png",
    desc: "Executive mailer collateral designed for Simplicity Advanced Sales Training producers."
  },
  'life-3': {
    title: "Advanced Markets Estate Planning Brochure",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-3.png",
    desc: "Comprehensive estate planning brochure detailing trust funding and wealth preservation."
  },
  'life-4': {
    title: "Intergenerational Split-Dollar (IGSD) Strategy",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-4.png",
    desc: "Wealth transfer brochure outlining intergenerational split-dollar life insurance structures."
  },
  'life-5': {
    title: "Summary of Key Tax Provisions in OBBB Act",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-5.png",
    desc: "Executive summary of key tax law provisions and life insurance policy benefits."
  },
  'life-6': {
    title: "Seven Creative Principles Brand Book",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-6.png",
    desc: "Official brand standards book and visual design methodology handbook."
  },
  'life-7': {
    title: "The Partnership You Need To Grow Recruiting Flyer",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-7.png",
    desc: "Executive business growth flyer created for Simplicity advisor recruitment programs."
  },
  'life-8': {
    title: "BKA Financial Client Planning Strategies Flyer",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-8.png",
    desc: "Planning strategies flyer designed for BKA Financial client consultations."
  },
  'life-9': {
    title: "Simplicity Sales Training Performance Case Study",
    category: "Life Insurance",
    img: "assets/b2b_unique/life-9.png",
    desc: "In-depth case study collateral detailing sales enablement performance and advisor training."
  },
  'annuity-1': {
    title: "Advisor Growth Forum Scalable Growth Flyer",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-1.png",
    desc: "Downloadable flyer for the Advisor Growth Forum focused on scalable practice growth."
  },
  'annuity-2': {
    title: "Advisors Resource Annuity Rate Update",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-2.png",
    desc: "Monthly annuity interest rate schedule and contract crediting update for advisors."
  },
  'annuity-3': {
    title: "Puritan Life Interest Plus Annuity vs FIA Flyer",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-3.png",
    desc: "Comparative flyer analyzing fixed index annuities, MYGA yields, and traditional annuities."
  },
  'annuity-4': {
    title: "Enduris 6 FIA Product Highlight Sheet",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-4.png",
    desc: "Fixed index annuity highlight sheet detailing participation rates and principal protection."
  },
  'annuity-5': {
    title: "Enduris FIA 10 Premium Bonus Overview",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-5.png",
    desc: "Annuity premium bonus overview detailing upfront bonus crediting and retirement accumulation."
  },
  'annuity-6': {
    title: "Brokers Edge Safe Harbor Annuity Campaign",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-6.png",
    desc: "Digital campaign banner promoting Safe Harbor fixed index annuity solutions."
  },
  'annuity-7': {
    title: "Allianz Life Sales Forum Carrier Event Flyer",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-7.png",
    desc: "Carrier partner event collateral designed for the Allianz Life Sales Forum."
  },
  'annuity-8': {
    title: "Coastal Insurance Consulting Products Flyer",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-8.png",
    desc: "Turnkey product flyer designed for Coastal Insurance Consulting advisors."
  },
  'annuity-9': {
    title: "Daly Brokerage Exclusive Webinar Series Flyer",
    category: "Annuity",
    img: "assets/b2b_unique/annuity-9.png",
    desc: "Educational webinar series collateral for Daly Brokerage producers."
  },
  'ltc-1': {
    title: "Simplicity LTC Pros & Cons Consumer Guide",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-1.png",
    desc: "Consumer guide comparing pros and cons of asset-based LTC policies vs traditional care."
  },
  'ltc-2': {
    title: "Simplicity LTC Co-Branding Process Guide",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-2.png",
    desc: "Advisor co-branding workflow guide for custom asset-based LTC marketing materials."
  },
  'ltc-3': {
    title: "AssetLock Trigger System Client Flyer",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-3.png",
    desc: "AssetLock client flyer explaining automated portfolio risk trigger protection."
  },
  'ltc-4': {
    title: "2025 Simplicity LTC Road Show Presentation",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-4.png",
    desc: "Nationwide roadshow collateral and presentation deck for asset-based LTC specialists."
  },
  'ltc-5': {
    title: "Simplicity AssetLock Investor Overview Brochure",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-5.png",
    desc: "Asset-based long-term care investor overview detailing asset preservation and care benefits."
  },
  'ltc-6': {
    title: "Linked Benefit LTC Request Form",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-6.png",
    desc: "Interactive advisor request form and proposal sheet for linked-benefit LTC quotes."
  },
  'ltc-7': {
    title: "Sub-IMO LTC Recruiting Webinar Banner",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-7.png",
    desc: "Sub-IMO training and client presentation webinar graphics for LTC specialists."
  },
  'ltc-8': {
    title: "Sub-IMO LTC Producer Invitation Banner",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-8.png",
    desc: "Producer invitation graphics for sub-IMO long-term care events."
  },
  'ltc-9': {
    title: "Care Protection Benefit Allocation Pathway",
    category: "Asset-Based LTC",
    img: "assets/b2b_unique/ltc-9.png",
    desc: "Visual flowchart mapping indemnity benefit payouts and tax-free care reimbursements."
  },
  'disability-1': {
    title: "Simplicity DI Policy Definitions by Carrier Guide",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-1.png",
    desc: "Carrier policy definition guide comparing own-occupation and residual disability riders."
  },
  'disability-2': {
    title: "DI Issue & Participation (I&P) Limits Matrix",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-2.png",
    desc: "Carrier issue and participation limit matrix for medical professionals and executives."
  },
  'disability-3': {
    title: "Disability Consumer Buy-Sell Funding Flyer",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-3.png",
    desc: "Business buy-sell disability funding brochure protecting partner equity during disability."
  },
  'disability-4': {
    title: "Business Overhead Expense (BOE) Disability Flyer",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-4.png",
    desc: "Business overhead expense flyer protecting small business operating costs during medical leave."
  },
  'disability-5': {
    title: "Disability Educational Consumer Guide",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-5.png",
    desc: "Educational consumer guide explaining income replacement ratios and disability terms."
  },
  'disability-6': {
    title: "Protect Your Paycheck Disability Infographic",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-6.png",
    desc: "Disability insurance visual infographic engineered for client consultations."
  },
  'disability-7': {
    title: "Disability Protect Income Campaign Banner",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-7.png",
    desc: "Digital marketing campaign graphics empowering agents to lead paycheck protection conversations."
  },
  'disability-8': {
    title: "Disability Missing Link Campaign Banner",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-8.png",
    desc: "Advisor presentation deck graphics highlighting the income protection gap in retirement."
  },
  'disability-9': {
    title: "Dempsey Companies Informal Application Form",
    category: "Disability Insurance",
    img: "assets/b2b_unique/disability-9.png",
    desc: "Informal application and authorization form for Dempsey Companies disability producers."
  },
  'wealth-1': {
    title: "Redefining Risk Tolerance White Paper",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-1.png",
    desc: "Simplicity Wealth white paper detailing risk tolerance measurement and VaR continua diagrams."
  },
  'wealth-2': {
    title: "DOL Fiduciary Rule & Compliance Disclosure Form",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-2.png",
    desc: "DOL fiduciary rule compliance form and best interest disclosure documentation."
  },
  'wealth-3': {
    title: "Account Management Policies & Procedures Disclosure",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-3.png",
    desc: "Regulatory disclosure document outlining Simplicity Wealth account management procedures."
  },
  'wealth-4': {
    title: "Blue Ocean Financial Client Binder Cover",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-4.png",
    desc: "Client onboarding binder cover designed for Blue Ocean Financial advisors."
  },
  'wealth-5': {
    title: "Benefit RFP Corporate Presentation Folder",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-5.png",
    desc: "Corporate presentation folder design created for Benefit RFP executive proposals."
  },
  'wealth-6': {
    title: "Simplicity Consulting Repeat Champions Campaign",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-6.png",
    desc: "Internal recognition campaign collateral for the Simplicity Consulting Team."
  },
  'wealth-7': {
    title: "Simplicity Cash Balance Plan Solution Sheet",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-7.png",
    desc: "Advanced planning solution sheet for business owners and high-income partners."
  },
  'wealth-8': {
    title: "National Accounts Leadership Bio Template",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-8.png",
    desc: "Point-of-sale bio sheet template for Simplicity National Accounts leadership."
  },
  'wealth-9': {
    title: "Broker-Dealer PPT Flowchart Architecture",
    category: "Wealth & Securities",
    img: "assets/b2b_unique/wealth-9.png",
    desc: "Operations flowchart mapping broker-dealer clearing and RIA custodial services."
  },

  // A-Z Independent Advisor Logo Showcase (20 Samples: Navy, Gold, Green, Grey)
  'az-a-asset-protection': {
    title: "Asset Protection Advisors Identity",
    category: 'Logo Design',
    img: "assets/Asset Protection Advisors \u2013 Logo.png",
    desc: "Shield crest emblem and executive typography designed for Asset Protection Advisors."
  },
  'az-b-breakthrough': {
    title: "Breakthrough Financial Group Logo",
    category: 'Logo Design',
    img: "assets/ZentraWealth-Horizontal-Logo-Blue.png",
    desc: "Corporate vector logo and brand identity designed for Breakthrough Financial Group."
  },
  'az-c-capital-wealth': {
    title: "Capital Wealth Solutions Brand Mark",
    category: 'Logo Design',
    img: "assets/Capital_Wealth_Folder.png",
    desc: "Bespoke corporate identity and crest mark designed for Capital Wealth Solutions."
  },
  'az-d-douglas-neibloom': {
    title: "Douglas Neibloom Financial Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-d-douglas-neibloom.png",
    desc: "Corporate logo and financial brand mark designed for Douglas Neibloom Financial."
  },
  'az-e-advanced-concepts': {
    title: "Advanced Insurance Concepts Logo",
    category: 'Logo Design',
    img: "assets/Advanced-Insurance-Concepts-Logo-CMYK.png",
    desc: "CMYK vector logo and brand identity system created for Advanced Insurance Concepts."
  },
  'az-f-first-financial': {
    title: "First Financial Group Logo Suite",
    category: 'Logo Design',
    img: "assets/True-Financial-Partners-Logo.png",
    desc: "Modern vector brand mark and identity system created for First Financial Group."
  },
  'az-g-gerber-financial': {
    title: "Gerber Financial Management Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-g-gerber-financial.png",
    desc: "Executive logo design and corporate mark for Gerber Financial Management."
  },
  'az-h-hurt-associates': {
    title: "Hurt & Associates Financial Services",
    category: 'Logo Design',
    img: "assets/az_logos/az-h-hurt-associates.png",
    desc: "Vector icon redraw and corporate identity for Hurt & Associates Financial Services."
  },
  'az-i-insurance-retirement': {
    title: "Insurance & Retirement Planning Services",
    category: 'Logo Design',
    img: "assets/az_logos/az-i-insurance-retirement.png",
    desc: "CMYK corporate logo and brand mark created for Insurance & Retirement Planning Services."
  },
  'az-j-jones-group': {
    title: "Jones Group Horizontal Brand Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-j-jones-group.png",
    desc: "Horizontal corporate logo layout designed for Jones Group."
  },
  'az-k-kawasaki-finance': {
    title: "Kawasaki Finance & Income Services",
    category: 'Logo Design',
    img: "assets/az_logos/az-k-kawasaki-finance.png",
    desc: "Corporate logo design options created for Kawasaki Finance & Income Services."
  },
  'az-l-legacy-tree': {
    title: "Legacy Tree Financial Group Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-l-legacy-tree.png",
    desc: "Stacked CMYK tree emblem logo designed for Legacy Tree Financial Group."
  },
  'az-m-midwest-advisors': {
    title: "Midwest Advisors Shield Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-m-midwest-advisors.png",
    desc: "Shield mark and corporate typography system designed for Midwest Advisors."
  },
  'az-n-northstead': {
    title: "Northstead Wealth Vector Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-n-northstead.png",
    desc: "Corporate identity options and brand mark designed for Northstead Wealth."
  },
  'az-p-protected-retirement': {
    title: "Protected Retirement Savings Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-p-protected-retirement.png",
    desc: "Vector SVG shield emblem designed for Protected Retirement Savings."
  },
  'az-r-roberts-funai': {
    title: "Roberts-Funai Insurance Agency Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-r-roberts-funai.png",
    desc: "Horizontal CMYK corporate logo designed for Roberts-Funai Insurance Agency."
  },
  'az-s-strategic-wealth': {
    title: "Strategic Wealth Designs Crest Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-s-strategic-wealth.png",
    desc: "Executive crest emblem and logo system designed for Strategic Wealth Designs."
  },
  'az-t-tradewell': {
    title: "TradeWell Tax & Financial Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-t-tradewell.png",
    desc: "Horizontal white-out vector logo designed for TradeWell Tax & Financial."
  },
  'az-w-wealth-coverage': {
    title: "Wealth Coverage Advisors Logo",
    category: 'Logo Design',
    img: "assets/az_logos/az-w-wealth-coverage.png",
    desc: "CMYK vector logo and brand identity created for Wealth Coverage Advisors."
  },
  'az-z-zentrawealth': {
    title: "ZentraWealth Gold Corporate Identity",
    category: 'Logo Design',
    img: "assets/az_logos/az-z-zentrawealth.png",
    desc: "Horizontal gold vector logo and brand identity system created for ZentraWealth."
  },

  'agent-flyer-apa': {
    title: 'Asset Protection Advisors Interest Rate Flyer',
    category: 'Flyers & Folders',
    img: 'assets/Asset_Protection_Earn_Interest_Flyer.png',
    desc: 'Product brochure designed for Asset Protection Advisors detailing guaranteed fixed interest rates and wealth accumulation.'
  },
  'agent-folder-cws': {
    title: 'Capital Wealth Solutions Presentation Folder',
    category: 'Flyers & Folders',
    img: 'assets/Capital_Wealth_Folder.png',
    desc: 'Die-cut print presentation folder design created for Capital Wealth Solutions client proposals and onboarding packets.'
  },
  'agent-logo-ais': {
    title: 'Advanced Insurance Solutions Logo System',
    category: 'Logo Design',
    img: 'assets/Advanced-Insurance-Concepts-Logo-CMYK.png',
    desc: 'Bespoke corporate identity and vector logo package crafted for Advanced Insurance Solutions.'
  },
  'agent-logo-apa': {
    title: 'Asset Protection Advisors Identity Suite',
    category: 'Logo Design',
    img: 'assets/Asset Protection Advisors – Logo.png',
    desc: 'Custom crest mark and executive identity created for Asset Protection Advisors.'
  },
  'agent-logo-zentra': {
    title: 'ZentraWealth Corporate Identity System',
    category: 'Logo Design',
    img: 'assets/ZentraWealth-Horizontal-Logo-Blue.png',
    desc: 'Corporate vector identity system and horizontal logo design created for ZentraWealth financial advisors.'
  },
  'agent-logo-tfp': {
    title: 'True Financial Partners Logo Suite',
    category: 'Logo Design',
    img: 'assets/True-Financial-Partners-Logo.png',
    desc: 'Modern corporate brand mark and vector logo package created for True Financial Partners.'
  },
  'agent-logo-summit': {
    title: 'Summit Group Wealth Advisors Logo Mark',
    category: 'Logo Design',
    img: 'assets/Summit-Group-Wealth-Advisors-Logo.png',
    desc: 'Executive identity mark and wordmark designed for Summit Group Wealth Advisors.'
  },
  'agent-logo-thoroughbred': {
    title: 'Thoroughbred Financial Group Vector Logo',
    category: 'Logo Design',
    img: 'assets/Thoroughbred-Financial-Group-Logo.png',
    desc: 'Custom crest emblem and vector logo system designed for Thoroughbred Financial Group.'
  },
  'agent-logo-abundant-living': {
    title: "Abundant Living Financial Services Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-abundant-living.png",
    desc: "Vector CMYK logo design created for Abundant Living Financial Services."
  },
  'agent-logo-advisor-foundry': {
    title: "Advisor Foundry Corporate Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-advisor-foundry.png",
    desc: "Modern corporate logo mark designed for Advisor Foundry."
  },
  'agent-logo-advocate-life': {
    title: "Advocate Life Group Logo System",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-advocate-life.png",
    desc: "Vector corporate identity and brand emblem created for Advocate Life Group."
  },
  'agent-logo-advisors-360': {
    title: "Advisors 360 Brand Identity Mark",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-advisors-360.png",
    desc: "Circular crest emblem and corporate logo designed for Advisors 360."
  },
  'agent-logo-abood-wealth': {
    title: "Abood Wealth Management Identity",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-abood-wealth.png",
    desc: "Horizontal corporate wordmark and identity system for Abood Wealth Management."
  },
  'agent-logo-ams-financial': {
    title: "Aaron M Smith Financial Group Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-ams-financial.png",
    desc: "Executive typography mark designed for Aaron M Smith Financial Group."
  },
  'agent-logo-alg-legacies': {
    title: "Abundant Legacies Group Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-alg-legacies.png",
    desc: "Vector emblem and brand mark designed for Abundant Legacies Group."
  },
  'agent-logo-aph-hub': {
    title: "Advanced Planning HUB Brand Mark",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-aph-hub.png",
    desc: "Modular brand mark and logo design created for Advanced Planning HUB."
  },
  'agent-logo-adventus-legacy': {
    title: "Adventus Life & Legacy Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-adventus-legacy.png",
    desc: "Executive black vector mark designed for Adventus Life & Legacy."
  },
  'agent-logo-advocate-wealth': {
    title: "Advocate Wealth Advisors Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-advocate-wealth.png",
    desc: "Bespoke corporate identity and vector logo created for Advocate Wealth Advisors."
  },
  'agent-logo-abrams-solutions': {
    title: "Abrams Insurance Solutions Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-abrams-solutions.png",
    desc: "Corporate insurance logo mark created for Abrams Insurance Solutions."
  },
  'agent-logo-adams-hansen': {
    title: "Adams-Hansen & Associates Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-adams-hansen.png",
    desc: "Partner firm corporate logo and typography mark for Adams-Hansen & Associates."
  },
  'agent-logo-afs-strategies': {
    title: "Advanced Financial Strategies Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-afs-strategies.png",
    desc: "Vector brand identity and corporate logo package created for Advanced Financial Strategies."
  },
  'agent-logo-apf-finances': {
    title: "Advanced Planning & Finances Logo",
    category: 'Logo Design',
    img: "assets/advisor_logos/logo-apf-finances.png",
    desc: "Executive logo system designed for Advanced Planning & Finances, Inc."
  },

  'agent-social-401k': {
    title: '401(k) Distribution & Rollover Social Series',
    category: 'Social Posts',
    img: 'assets/Simplicity - 401k Distribution Socials - 08.10.jpg',
    desc: 'Turnkey social media graphic for LinkedIn and Facebook, empowering independent agents to engage pre-retirees on 401(k) rollover opportunities.'
  },
  'agent-social-kickcan': {
    title: '"Kick the Can" Tax & Retirement Post',
    category: 'Social Posts',
    img: 'assets/Kick the can - Social Post - 09.04.26.jpg',
    desc: 'High-converting social artwork addressing tax procrastination and urgent retirement plan reviews for independent agent feeds.'
  },

  // Figma UI/UX Showcase
  'ui-home-collage': {
    title: 'Simplicity Master Web Homepage Collage',
    category: 'Design System',
    img: 'assets/ui_unique/ui-home-collage.png',
    desc: 'Figma-crafted design system grid and homepage layout composition showcasing partner ecosystem assets, brand silos, and hero section components.'
  },
  'ui-portal-sso': {
    title: 'Agent Resource Center SSO Interface',
    category: 'Portals & SSO',
    img: 'assets/ui_unique/ui-portal-sso.png',
    desc: 'User interface design for single-sign-on (SSO) advisor dashboard and resource center navigation layout.'
  },
  'ui-step-cards': {
    title: 'Sequential Process UI Cards Component',
    category: 'Component Specs',
    img: 'assets/ui_unique/ui-step-cards.png',
    desc: 'Modular step-by-step process component library used across web onboarding flows and landing pages.'
  },
  'ui-summit-dashboard': {
    title: 'AssetLock Real-Time Portfolio Monitoring UI',
    category: 'Portals & SSO',
    img: 'assets/ui_unique/ui-summit-dashboard.png',
    desc: 'Interactive dashboard user interface designed for advisors and clients to monitor real-time portfolio thresholds, account balances, and security alerts.'
  },
  'ui-icon-system': {
    title: 'Advanced Markets UI Icon Component System',
    category: 'Component Specs',
    img: 'assets/ui_unique/ui-icon-system.png',
    desc: 'Vector UI icon component system designed for financial web applications, dashboards, and mobile views.'
  },
  'ui-landing-system': {
    title: 'Jenkins Financial Advisor Web Layout UI',
    category: 'Design System',
    img: 'assets/ui_unique/ui-landing-system.png',
    desc: 'Responsive web interface design for high-converting financial advisor marketing, services overview, and lead capture.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Corporate Showcase elements
  const corpFilterBtns = document.querySelectorAll('.filter-btn');
  const corpCards = document.querySelectorAll('#portfolio-grid .portfolio-card');

  // Agent Showcase elements
  const agentFilterBtns = document.querySelectorAll('.agent-filter-btn');
  const agentCards = document.querySelectorAll('#agent-grid .agent-card');

  // UI Showcase elements
  const uiFilterBtns = document.querySelectorAll('.ui-filter-btn');
  const uiCards = document.querySelectorAll('#ui-grid .ui-card');

  const modal = document.getElementById('asset-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Modal elements
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');

  // Corporate Filter functionality
  corpFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      corpFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      corpCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // Agent Filter functionality
  agentFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      agentFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-agent-filter');

      agentCards.forEach(card => {
        const category = card.getAttribute('data-agent-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // UI Filter functionality
  uiFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      uiFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-ui-filter');

      uiCards.forEach(card => {
        const category = card.getAttribute('data-ui-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // Modal Inspect functionality (for all cards)
  const allCards = document.querySelectorAll('.portfolio-card');
  allCards.forEach(card => {
    const inspectBtn = card.querySelector('.view-btn');
    const assetId = card.getAttribute('data-id');

    if (inspectBtn && ASSET_DETAILS[assetId]) {
      inspectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const data = ASSET_DETAILS[assetId];

        modalImg.src = data.img;
        modalImg.alt = data.title;
        modalTitle.textContent = data.title;
        modalCategory.textContent = data.category;
        modalDesc.textContent = data.desc;

        if (typeof modal.showModal === 'function') {
          modal.showModal();
        } else {
          modal.setAttribute('open', '');
        }
      });
    }
  });

  // Close Modal
  const closeModalHandler = () => {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  };

  if (modalClose) modalClose.addEventListener('click', closeModalHandler);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModalHandler);

  // Close modal when clicking backdrop
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      closeModalHandler();
    }
  });
});
