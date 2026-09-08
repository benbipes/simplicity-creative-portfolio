// Asset Database details for modal inspection across pages
const ASSET_DETAILS = {
  // Corporate Showcase
  'brand-logo': {
    title: 'Simplicity Group Master Logo System',
    category: 'Brand Identity',
    img: 'assets/SG-Logo-Icon-Blue.jpg',
    desc: 'The official master emblem and vector identity system for Simplicity Group. Scalable for high-definition 300 PPI print collateral, executive presentations, and responsive digital headers.',
    path: 'Simplicity/Simplicity Group/Logo/JPG/300ppi/SG-Logo-Icon-Blue.jpg',
    format: 'High-Res JPG / Vector AI',
    usage: 'Master Brand Identity'
  },
  'bd-onboarding': {
    title: 'Broker-Dealer 4-Step Advisor Pathway',
    category: 'Brokerage & Sales',
    img: 'assets/Simplicity-Broker-Dealer-Step-1.png',
    desc: 'Part of a 4-part sequential visual guide engineered for Simplicity Broker-Dealer. Clarifies advisor contracting, registration, product access, and business scaling.',
    path: 'Simplicity/Simplicity Group/Website Graphics/Graphics/Simplicity-Broker-Dealer-Step-1.png',
    format: 'Transparent PNG / Illustrator Source',
    usage: 'Advisor Onboarding & POS'
  },
  'advanced-planning': {
    title: 'Advanced Markets & Planning Icon Suite',
    category: 'Brand Identity',
    img: 'assets/Advanced-Planning-Icon.png',
    desc: 'Custom vector icon design representing advanced wealth management, estate planning, and tax strategy. Used across partner silod marketing materials.',
    path: 'Simplicity/Simplicity Group/Website Graphics/Graphics/Advanced-Planning-Icon.png',
    format: 'Vector PNG / AI',
    usage: 'Silo Marketing & Web Graphics'
  },
  'seven-principles': {
    title: 'Seven Creative Principles Brand Book',
    category: 'Campaigns & Guidelines',
    img: 'assets/iStock-1269045922.jpg',
    desc: 'The official brand strategy guide and visual standards handbook for the Simplicity Creative Team. Defines grid systems, typography, color palettes, and multi-channel principles.',
    path: 'Simplicity/Seven Creative Principles to Elevate Your Brand/',
    format: 'InDesign (.indd) / PDF Guide',
    usage: 'Internal Brand Elevation Standards'
  },
  'executive-suite': {
    title: 'Executive & Wealth Imagery Suite',
    category: 'Campaigns & Guidelines',
    img: 'assets/iStock-2148975941.jpg',
    desc: 'Curated high-production lifestyle and corporate imagery standard established for financial advisory campaigns, annual report covers, and digital media.',
    path: 'Simplicity/Simplicity Group/Website Graphics/Graphics/iStock-2148975941.jpg',
    format: 'High-Res Stock JPEG',
    usage: 'National Consumer Campaigns'
  },
  'step-sequence': {
    title: 'Agent Center SSO & Portal Components',
    category: 'Web & Digital',
    img: 'assets/Simplicity-Broker-Dealer-Step-3.png',
    desc: 'Digital workflow graphics designed for Simplicity Intranet and SSO Agent Resource Center. Simplifies complex operational steps into intuitive web cards.',
    path: 'Simplicity/Web/Simplicity Partners Resource Center/',
    format: 'Web-Optimized PNG',
    usage: 'Portal UX & Intranet Banners'
  },

  // Independent Agent Showcase
  'agent-logo-ais': {
    title: 'Advanced Insurance Solutions Logo System',
    category: 'Independent Agent Logo Design',
    img: 'assets/Advanced-Insurance-Concepts-Logo-CMYK.png',
    desc: 'Bespoke corporate identity and vector logo package crafted for Advanced Insurance Solutions, an independent agency providing life, annuities, and wealth protection.',
    path: 'Advisors/Advanced Insurance Solutions/Logo/Advanced-Insurance-Concepts-Logo-CMYK.png',
    format: 'CMYK PNG / Vector AI',
    usage: 'Agency Stationery & Print Branding'
  },
  'agent-logo-apa': {
    title: 'Asset Protection Advisors Identity Suite',
    category: 'Independent Agent Logo Design',
    img: 'assets/Asset Protection Advisors – Logo.png',
    desc: 'Custom crest mark and executive identity created for Asset Protection Advisors. Includes full color, monochrome, and inverse dark-background variants.',
    path: 'Advisors/Asset Protection Advisors/Logo/1x/Asset Protection Advisors – Logo.png',
    format: 'High-Res Transparent PNG',
    usage: 'Primary Agency Brand & Web'
  },
  'agent-flyer-apa': {
    title: 'Asset Protection Advisors Interest Rate Flyer',
    category: 'Flyers & Brochures',
    img: 'assets/iStock-1269045922.jpg',
    desc: 'Turnkey client-facing educational brochure designed for independent agents to explain fixed interest rates, principal protection, and annuity accumulation options.',
    path: 'Advisors/Asset Protection Advisors/Guaranteed Interest Flyer/',
    format: 'Adobe InDesign (.indd) / Print PDF',
    usage: 'Client Point-of-Sale Handout'
  },
  'agent-folder-cws': {
    title: 'Capital Wealth Solutions Presentation Folder',
    category: 'Flyers & Brochures',
    img: 'assets/Advanced-Planning-Icon.png',
    desc: 'Custom die-cut pocket presentation folder designed for Independent Agent client proposals, policy delivery, and initial consultation packets.',
    path: 'Advisors/Capital Wealth Solutions/Folder/CWS-Folder-Print.pdf',
    format: 'Print PDF / Foil Die-Cut Spec',
    usage: 'Client Onboarding & Proposal Packet'
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
  'agent-social-carousel': {
    title: 'Multi-Slide Financial Wellness Social Kit',
    category: 'Social Posts',
    img: 'assets/Simplicity - 401k Distribution Socials - 08.102.jpg',
    desc: 'Sequential multi-slide carousel social asset designed to increase post swipe-through rates and drive appointment requests for independent insurance practices.',
    path: 'Simplicity/Simplicity Group/Social Media Posts/2026 401k(s) Savings Goal Post/',
    format: 'Multi-Slide Carousel JPG',
    usage: 'Social Lead Generation'
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
