// Asset Database details for modal inspection across pages
const ASSET_DETAILS = {
// Corporate B2B Channel Work Showcase (45 Items: Life, Annuity, LTC, Disability, Wealth)
  'life-1': {
    title: "Seven Creative Principles Brand Book",
    category: "Life Insurance",
    img: "assets/Seven_Principles_Cover.png",
    desc: "Brand strategy book and visual standards guide for life insurance marketing and collateral."
  },
  'life-2': {
    title: "Universal Life Accumulation Rate Matrix",
    category: "Life Insurance",
    img: "assets/Asset_Protection_Earn_Interest_Flyer.png",
    desc: "Guaranteed interest rate schedules and cash value growth matrix for universal life policies."
  },
  'life-3': {
    title: "Index Universal Life (IUL) Growth Solution",
    category: "Life Insurance",
    img: "assets/Partnership_Flyer.png",
    desc: "IUL cap rates, participation rates, and death benefit accumulation client flyer."
  },
  'life-4': {
    title: "Term vs. Permanent Life Comparison Chart",
    category: "Life Insurance",
    img: "assets/Simplicity-Broker-Dealer-Step-1.png",
    desc: "Side-by-side product comparison visual chart engineered for advisor client consultations."
  },
  'life-5': {
    title: "Key Person Executive Life Insurance Flyer",
    category: "Life Insurance",
    img: "assets/Simplicity-Broker-Dealer-Step-2.png",
    desc: "Corporate key employee indemnification and executive retention life insurance flyer."
  },
  'life-6': {
    title: "Estate Planning & Life Wealth Transfer Sheet",
    category: "Life Insurance",
    img: "assets/National_Accounts_Bio_Sheet.png",
    desc: "Generational wealth transfer and estate tax liquidity strategy guide for high-net-worth clients."
  },
  'life-7': {
    title: "Executive Life Bonus Compensation Plan",
    category: "Life Insurance",
    img: "assets/iStock-2148975941.jpg",
    desc: "Section 162 executive bonus plan collateral for corporate leadership and key executives."
  },
  'life-8': {
    title: "Life Underwriting Pathways & Field Guide",
    category: "Life Insurance",
    img: "assets/Simplicity-Broker-Dealer-Step-3.png",
    desc: "Impaired risk navigation and expedited underwriting flowcharts for independent life agents."
  },
  'life-9': {
    title: "Survivorship & Legacy Life One-Pager",
    category: "Life Insurance",
    img: "assets/Simplicity-Broker-Dealer-Step-4.png",
    desc: "Second-to-die survivorship life insurance solution sheet for trust funding and estate planning."
  },
  'annuity-1': {
    title: "Puritan Life Interest Plus Annuity vs. FIA vs. MYGA",
    category: "Annuity",
    img: "assets/Asset_Protection_Earn_Interest_Flyer.png",
    desc: "Product comparison collateral analyzing fixed index annuities, MYGA rate guarantees, and traditional annuities."
  },
  'annuity-2': {
    title: "Enduris 6 FIA Product Highlight Sheet",
    category: "Annuity",
    img: "assets/Partnership_Flyer.png",
    desc: "Fixed index annuity highlight sheet detailing participation rates, index crediting, and principal protection."
  },
  'annuity-3': {
    title: "Enduris FIA 10 Premium Bonus Overview",
    category: "Annuity",
    img: "assets/Cash_Balance_Plan_Flyer.png",
    desc: "Annuity premium bonus overview detailing upfront bonus crediting and retirement accumulation pathways."
  },
  'annuity-4': {
    title: "AnnuityLink Digital Platform Advisor Guide",
    category: "Annuity",
    img: "assets/Simplicity-Home-Page-Image-Collage.png",
    desc: "Digital e-application and order entry platform guide designed for annuity producers and broker-dealers."
  },
  'annuity-5': {
    title: "Topsider FIA Guaranteed Lifetime Income Solution",
    category: "Annuity",
    img: "assets/Sales_Training_Case_Study.png",
    desc: "Guaranteed lifetime withdrawal benefit (GLWB) annuity collateral for retirement income planning."
  },
  'annuity-6': {
    title: "Multi-Year Guaranteed Annuity (MYGA) Rate Sheet",
    category: "Annuity",
    img: "assets/Protect_Your_Paycheck_Infographic.png",
    desc: "Turnkey MYGA interest rate schedule and contract duration overview for guaranteed yield clients."
  },
  'annuity-7': {
    title: "Fixed Index Annuity Accumulation Strategy Sheet",
    category: "Annuity",
    img: "assets/Simplicity-Broker-Dealer-Step-1.png",
    desc: "Volatility-controlled index strategies and crediting method comparisons for annuity buyers."
  },
  'annuity-8': {
    title: "Annuity Income Rider Comparison Brochure",
    category: "Annuity",
    img: "assets/Simplicity-Broker-Dealer-Step-2.png",
    desc: "Comparative analysis brochure evaluating rider roll-up rates, payout factors, and income start ages."
  },
  'annuity-9': {
    title: "Retirement Annuity Distribution & Rollover Guide",
    category: "Annuity",
    img: "assets/Simplicity - 401k Distribution Socials - 08.10.jpg",
    desc: "Educational guide empowering pre-retirees to convert tax-deferred savings into guaranteed annuity streams."
  },
  'ltc-1': {
    title: "Simplicity LTC Road Show One-Pager",
    category: "Asset-Based LTC",
    img: "assets/National_Accounts_Bio_Sheet.png",
    desc: "Nationwide roadshow collateral and advisor presentation deck for asset-based long-term care solutions."
  },
  'ltc-2': {
    title: "AssetLock Investor Care Protection Brochure",
    category: "Asset-Based LTC",
    img: "assets/Protect_Your_Paycheck_Infographic.png",
    desc: "Asset-based long-term care investor overview detailing asset preservation and tax-free care benefits."
  },
  'ltc-3': {
    title: "Hybrid Asset-Based LTC Solution Sheet",
    category: "Asset-Based LTC",
    img: "assets/Asset_Protection_Earn_Interest_Flyer.png",
    desc: "Life/LTC hybrid combination product overview detailing return-of-premium features and pool of care benefits."
  },
  'ltc-4': {
    title: "Long-Term Care Planning & Asset Protection Guide",
    category: "Asset-Based LTC",
    img: "assets/Seven_Principles_Cover.png",
    desc: "Comprehensive consumer planning guide covering nursing home, home health, and assisted living care funding."
  },
  'ltc-5': {
    title: "LTC Advisor Enablement & Webinar Series",
    category: "Asset-Based LTC",
    img: "assets/Simplicity Group Holdings Summit Office.jpg",
    desc: "Sub-IMO training and client presentation webinar graphics for asset-based LTC specialists."
  },
  'ltc-6': {
    title: "Care Protection Benefit Allocation Flowchart",
    category: "Asset-Based LTC",
    img: "assets/Simplicity-Broker-Dealer-Step-1.png",
    desc: "Visual flowchart mapping indemnity benefit payouts, tax-free reimbursements, and asset multipliers."
  },
  'ltc-7': {
    title: "Asset-Based LTC vs. Traditional Care Matrix",
    category: "Asset-Based LTC",
    img: "assets/Simplicity-Broker-Dealer-Step-3.png",
    desc: "Comparison matrix contrasting traditional use-it-or-lose-it LTC policies against asset-based hybrid policies."
  },
  'ltc-8': {
    title: "Legacy Care Protection & Wealth Preservation Sheet",
    category: "Asset-Based LTC",
    img: "assets/Cash_Balance_Plan_Flyer.png",
    desc: "Strategy sheet demonstrating how asset-based LTC insulates retirement portfolios against health crises."
  },
  'ltc-9': {
    title: "Sub-IMO Long-Term Care Advisor Playbook",
    category: "Asset-Based LTC",
    img: "assets/Partnership_Flyer.png",
    desc: "Turnkey marketing playbook for independent general agencies distributing asset-based LTC solutions."
  },
  'disability-1': {
    title: "Protect Your Paycheck Disability Infographic",
    category: "Disability Insurance",
    img: "assets/Protect_Your_Paycheck_Infographic.png",
    desc: "Disability insurance and paycheck protection visual infographic engineered for client consultations."
  },
  'disability-2': {
    title: "Income Protection Disability Solution Sheet",
    category: "Disability Insurance",
    img: "assets/Partnership_Flyer.png",
    desc: "Individual disability income solution sheet showing benefit replacement ratios and own-occupation terms."
  },
  'disability-3': {
    title: "Disability Missing Link Advisor Presentation",
    category: "Disability Insurance",
    img: "assets/Sales_Training_Case_Study.png",
    desc: "Sales enablement campaign deck educating financial advisors on closing the income protection gap."
  },
  'disability-4': {
    title: "Business Overhead Expense Disability Flyer",
    category: "Disability Insurance",
    img: "assets/Cash_Balance_Plan_Flyer.png",
    desc: "Business overhead expense (BOE) disability flyer protecting small business owners during medical leave."
  },
  'disability-5': {
    title: "Executive Paycheck Protection Strategy Sheet",
    category: "Disability Insurance",
    img: "assets/iStock-2148975941.jpg",
    desc: "High-limit supplemental disability coverage strategy sheet for C-suite executives and physician groups."
  },
  'disability-6': {
    title: "Individual Disability Rate & Coverage Guide",
    category: "Disability Insurance",
    img: "assets/Asset_Protection_Earn_Interest_Flyer.png",
    desc: "Comprehensive occupation class rate guide and policy rider handbook for disability specialists."
  },
  'disability-7': {
    title: "Key Employee Disability Income Protection",
    category: "Disability Insurance",
    img: "assets/National_Accounts_Bio_Sheet.png",
    desc: "Corporate disability insurance policy designed to cover revenue-producing key employees during disability."
  },
  'disability-8': {
    title: "Disability Insurance Claim & Benefit Overview",
    category: "Disability Insurance",
    img: "assets/Simplicity-Broker-Dealer-Step-2.png",
    desc: "Client-facing brochure explaining elimination periods, benefit periods, and presumptive disability clauses."
  },
  'disability-9': {
    title: "Group vs. Individual Disability Comparison Sheet",
    category: "Disability Insurance",
    img: "assets/Simplicity-Broker-Dealer-Step-4.png",
    desc: "Educational flyer highlighting taxability, portability, and coverage limits between group LTD and IDI."
  },
  'wealth-1': {
    title: "Cash Balance Plan Financial Solution Sheet",
    category: "Wealth & Securities",
    img: "assets/Cash_Balance_Plan_Flyer.png",
    desc: "Advanced planning financial flyer designed for business owners, medical practices, and high-earning partners."
  },
  'wealth-2': {
    title: "Simplicity Sales Training Case Study",
    category: "Wealth & Securities",
    img: "assets/Sales_Training_Case_Study.png",
    desc: "In-depth sales training case study collateral detailing advisor performance results and wealth management workflows."
  },
  'wealth-3': {
    title: "The Partnership You Need To Grow Recruiting Flyer",
    category: "Wealth & Securities",
    img: "assets/Partnership_Flyer.png",
    desc: "Executive business growth flyer created for Simplicity advisor recruitment and RIA scaling programs."
  },
  'wealth-4': {
    title: "National Accounts & POS Leadership Bio Sheet",
    category: "Wealth & Securities",
    img: "assets/National_Accounts_Bio_Sheet.png",
    desc: "Corporate brand template and point-of-sale sheet for Simplicity National Accounts and institutional wealth relationships."
  },
  'wealth-5': {
    title: "Simplicity Commonwealth Advisor Workflow",
    category: "Wealth & Securities",
    img: "assets/Simplicity-Broker-Dealer-Step-1.png",
    desc: "Operations flowchart mapping securities clearing, custodial integration, and wealth management platform services."
  },
  'wealth-6': {
    title: "RIA Investment Advisory & Broker-Dealer Portal",
    category: "Wealth & Securities",
    img: "assets/Simplicity-Broker-Dealer-Step-3.png",
    desc: "User interface layout design for single-sign-on (SSO) advisor dashboard and broker-dealer resource center."
  },
  'wealth-7': {
    title: "Executive Compensation Landing Page UI",
    category: "Wealth & Securities",
    img: "assets/iStock-2148975941.jpg",
    desc: "Responsive web layout design for high-converting B2B wealth management marketing and lead capture."
  },
  'wealth-8': {
    title: "401(k) Rollover & Tax-Optimized Transition Guide",
    category: "Wealth & Securities",
    img: "assets/Simplicity - 401k Distribution Socials - 08.10.jpg",
    desc: "Tax-optimized wealth transition brochure empowering independent advisors to guide rollover clients."
  },
  'wealth-9': {
    title: "Wealth Risk Management & Planning Matrix",
    category: "Wealth & Securities",
    img: "assets/iStock-1269045922.jpg",
    desc: "Comprehensive portfolio asset allocation and risk hedging matrix for high-net-worth wealth advisors."
  },

  // Independent Agent Real Work Showcase
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
    img: 'assets/Simplicity-Home-Page-Image-Collage.png',
    desc: 'Figma-crafted design system grid and homepage layout composition showcasing partner ecosystem assets, brand silos, and hero section components.'
  },
  'ui-portal-sso': {
    title: 'Agent Resource Center SSO Interface',
    category: 'Portals & SSO',
    img: 'assets/Simplicity-Broker-Dealer-Step-3.png',
    desc: 'User interface design for single-sign-on (SSO) advisor dashboard and resource center navigation layout.'
  },
  'ui-step-cards': {
    title: 'Sequential Process UI Cards Component',
    category: 'Component Specs',
    img: 'assets/Simplicity-Broker-Dealer-Step-1.png',
    desc: 'Modular step-by-step process component library used across web onboarding flows and landing pages.'
  },
  'ui-summit-dashboard': {
    title: 'Executive Summit Portal & Office Header',
    category: 'Portals & SSO',
    img: 'assets/Simplicity Group Holdings Summit Office.jpg',
    desc: 'High-resolution hero header layout and imagery architecture for executive intranet applications.'
  },
  'ui-icon-system': {
    title: 'Advanced Markets UI Icon Set Component',
    category: 'Component Specs',
    img: 'assets/Advanced-Planning-Icon.png',
    desc: 'Vector UI icon component system designed for financial web applications, dashboards, and mobile views.'
  },
  'ui-landing-system': {
    title: 'Executive Compensation Landing Page UI',
    category: 'Design System',
    img: 'assets/iStock-2148975941.jpg',
    desc: 'Responsive web layout design for high-converting B2B financial marketing and lead capture.'
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
