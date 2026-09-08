// Asset Database details for modal inspection across pages
const ASSET_DETAILS = {
  // Corporate Real Work Showcase
  'seven-principles': {
    title: 'Seven Creative Principles Brand Book',
    category: 'Brand Book',
    img: 'assets/Seven_Principles_Cover.png',
    desc: 'Official brand strategy handbook and visual design principles guide rendered directly from the InDesign PDF in your Google Drive folder.',
    path: 'Simplicity/Seven Creative Principles to Elevate Your Brand/Seven Creative Principles to Elevate Your Brand v01.pdf',
    format: 'Adobe InDesign PDF / 200 DPI PNG Render',
    usage: 'Internal Brand & Design Standards'
  },
  'partnership-flyer': {
    title: 'The Partnership You Need To Grow Flyer',
    category: 'Flyer Collateral',
    img: 'assets/Partnership_Flyer.png',
    desc: 'Executive business growth flyer created for Simplicity advisor recruitment and agency scaling programs.',
    path: 'Simplicity/Simplicity Group/Flyers/Simplicity - Flyer - The Partnership You Need to Grow - 06.30.26.pdf',
    format: 'Print PDF / High-Res PNG Render',
    usage: 'Advisor Growth & Recruiting POS'
  },
  'protect-paycheck': {
    title: 'Protect Your Paycheck Infographic',
    category: 'Infographic',
    img: 'assets/Protect_Your_Paycheck_Infographic.png',
    desc: 'Disability insurance and paycheck protection visual infographic engineered for client consultation and field presentation.',
    path: 'Simplicity/Simplicity Group/Infographics/2026/Protect Your Paycheck/Simplicity - Infographic - Protect Your Paycheck.pdf',
    format: 'Infographic PDF / PNG Render',
    usage: 'Disability Insurance Consultation'
  },
  'sales-case-study': {
    title: 'Simplicity Sales Training Case Study',
    category: 'Case Study',
    img: 'assets/Sales_Training_Case_Study.png',
    desc: 'In-depth sales training case study collateral detailing advisor performance results, onboarding metrics, and sales enablement workflows.',
    path: 'Simplicity/Simplicity Group/Case Studies/Simplicity Sales Training Case Study/Simplicity - Case Study - Sales Training.pdf',
    format: 'Case Study PDF / PNG Render',
    usage: 'Sales Enablement & Advisor Training'
  },
  'cash-balance-plan': {
    title: 'Cash Balance Plan Solution Sheet',
    category: 'Flyer Collateral',
    img: 'assets/Cash_Balance_Plan_Flyer.png',
    desc: 'Advanced markets financial flyer designed for business owners, medical practices, and high-income corporate executives.',
    path: 'Simplicity/Simplicity Group/Flyers/Cash Balance Plan/Simplicity - Cash Balance Plan.pdf',
    format: 'Advanced Markets PDF / PNG Render',
    usage: 'B2B Advanced Tax Strategy'
  },
  'national-accounts-bio': {
    title: 'National Accounts & POS Team Bio Sheet',
    category: 'Flyer Collateral',
    img: 'assets/National_Accounts_Bio_Sheet.png',
    desc: 'Corporate brand template and point-of-sale bio sheet created for Simplicity National Accounts leadership and institutional relationships.',
    path: 'Simplicity/Bio Sheets/National Accounts and POS/Simplicity - Bio Sheet - National Accounts.pdf',
    format: 'Corporate POS PDF / PNG Render',
    usage: 'Institutional National Accounts'
  },

  // Independent Agent Real Work Showcase
  'agent-flyer-apa': {
    title: 'Asset Protection Advisors Earn Interest Flyer',
    category: 'Flyers & Folders',
    img: 'assets/Asset_Protection_Earn_Interest_Flyer.png',
    desc: 'Real product brochure rendered from the PDF in `Advisors/Asset Protection Advisors/`, detailing fixed annuity interest accumulation.',
    path: 'Advisors/Asset Protection Advisors/Guaranteed Interest Flyer/Asset Protection Advisors - Earn Interest Flyer (2023).pdf',
    format: 'Adobe InDesign PDF / 200 DPI PNG Render',
    usage: 'Client Point-of-Sale Handout'
  },
  'agent-folder-cws': {
    title: 'Capital Wealth Solutions Presentation Folder',
    category: 'Flyers & Folders',
    img: 'assets/Capital_Wealth_Folder.png',
    desc: 'Real die-cut print presentation folder design rendered from the PDF in `Advisors/Capital Wealth Solutions/Folder/`.',
    path: 'Advisors/Capital Wealth Solutions/Folder/CWS-Folder-Print.pdf',
    format: 'Die-Cut Print PDF / PNG Render',
    usage: 'Client Onboarding & Proposal Packet'
  },
  'agent-logo-ais': {
    title: 'Advanced Insurance Solutions Logo System',
    category: 'Logo Design',
    img: 'assets/Advanced-Insurance-Concepts-Logo-CMYK.png',
    desc: 'Bespoke corporate identity and vector logo package crafted for Advanced Insurance Solutions, an independent agency providing life and health strategies.',
    path: 'Advisors/Advanced Insurance Solutions/Logo/Advanced-Insurance-Concepts-Logo-CMYK.png',
    format: 'CMYK PNG / Vector AI',
    usage: 'Agency Stationery & Print Branding'
  },
  'agent-logo-apa': {
    title: 'Asset Protection Advisors Identity Suite',
    category: 'Logo Design',
    img: 'assets/Asset Protection Advisors – Logo.png',
    desc: 'Custom crest mark and executive identity created for Asset Protection Advisors. Includes full color, monochrome, and inverse dark-background variants.',
    path: 'Advisors/Asset Protection Advisors/Logo/1x/Asset Protection Advisors – Logo.png',
    format: 'High-Res Transparent PNG',
    usage: 'Primary Agency Brand & Web'
  },
  'agent-social-401k': {
    title: '401(k) Distribution & Rollover Social Series',
    category: 'Social Posts',
    img: 'assets/Simplicity - 401k Distribution Socials - 08.10.jpg',
    desc: 'Turnkey social media graphic for LinkedIn and Facebook, empowering independent agents to engage pre-retirees on 401(k) rollover opportunities.',
    path: 'Simplicity/Simplicity Group/Social Media Posts/2026 401k(s) Savings Goal Post/',
    format: '1080x1080 JPEG / Canva / InDesign',
    usage: 'Independent Agent Social Campaign'
  },
  'agent-social-kickcan': {
    title: '"Kick the Can" Tax & Retirement Post',
    category: 'Social Posts',
    img: 'assets/Kick the can - Social Post - 09.04.26.jpg',
    desc: 'High-converting social artwork addressing tax procrastination and urgent retirement plan reviews for independent agent audience feeds.',
    path: 'Simplicity/Instagram Posts/Kick the can - Social Post - 09.04.26.jpg',
    format: 'Instagram Square JPG',
    usage: 'Organic & Paid Social Feed'
  },

  // Figma UI/UX Showcase
  'ui-home-collage': {
    title: 'Simplicity Master Web Homepage Collage',
    category: 'Design System',
    img: 'assets/Simplicity-Home-Page-Image-Collage.png',
    desc: 'Figma-crafted design system grid and homepage layout composition showcasing partner ecosystem assets, brand silos, and hero section components.',
    path: 'Simplicity/Web/_assets/Simplicity Home Page Image Collage.ai',
    format: 'Figma Canvas Artboard / 4K PNG',
    usage: 'Master Corporate Website & Brand Grid'
  },
  'ui-portal-sso': {
    title: 'Agent Resource Center SSO Interface',
    category: 'Portals & SSO',
    img: 'assets/Simplicity-Broker-Dealer-Step-3.png',
    desc: 'User interface design for single-sign-on (SSO) advisor dashboard and resource center navigation layout.',
    path: 'Simplicity/Web/Simplicity Partners Resource Center/',
    format: 'Figma Component System / SVG Icons',
    usage: 'Single Sign-On Agent Portal'
  },
  'ui-step-cards': {
    title: 'Sequential Process UI Cards Component',
    category: 'Component Specs',
    img: 'assets/Simplicity-Broker-Dealer-Step-1.png',
    desc: 'Modular step-by-step process component library used across web onboarding flows and landing pages.',
    path: 'Simplicity/Simplicity Group/Website Graphics/Graphics/',
    format: 'Figma Auto-Layout Component',
    usage: 'Advisor Onboarding UI Flow'
  },
  'ui-summit-dashboard': {
    title: 'Executive Summit Portal & Office Header',
    category: 'Portals & SSO',
    img: 'assets/Simplicity Group Holdings Summit Office.jpg',
    desc: 'High-resolution hero header layout and imagery architecture for executive intranet applications.',
    path: 'Simplicity/Web/_assets/Simplicity Group Holdings Summit Office.jpg',
    format: 'Figma Layout / Web Banner',
    usage: 'Executive Intranet Dashboard'
  },
  'ui-icon-system': {
    title: 'Advanced Markets UI Icon Set Component',
    category: 'Component Specs',
    img: 'assets/Advanced-Planning-Icon.png',
    desc: 'Vector UI icon component system designed for financial web applications, dashboards, and mobile views.',
    path: 'Simplicity/Simplicity Group/Website Graphics/Graphics/Advanced-Planning-Icon.png',
    format: 'Vector SVG Component',
    usage: 'Financial Web App UI'
  },
  'ui-landing-system': {
    title: 'Executive Compensation Landing Page UI',
    category: 'Design System',
    img: 'assets/iStock-2148975941.jpg',
    desc: 'Responsive web layout design for high-converting B2B financial marketing and lead capture.',
    path: 'Simplicity/Simplicity Group/Landing Pages/',
    format: 'Figma Web Artboard',
    usage: 'B2B Executive Campaign Landing Page'
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
  const modalPath = document.getElementById('modal-path');
  const modalFormat = document.getElementById('modal-format');
  const modalUsage = document.getElementById('modal-usage');

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
        modalPath.textContent = data.path;
        modalFormat.textContent = data.format;
        modalUsage.textContent = data.usage;

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
