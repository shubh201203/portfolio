export const portfolioData = {
  personal: {
    name: "Shubh Sharma",
    roleTitle: "Data Analyst | BI & Product Analytics",
    headline: "Turning raw data into actionable business insights through SQL, Python, Power BI, and analytics.",
    email: "shubhsharmaa2003@gmail.com",
    phone: "9680749857",
    linkedin: "https://www.linkedin.com/in/shubh-sharma-2067981b5",
    github: "https://github.com/shubh201203",
    resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
    targetRoles: [
      "Data Analyst",
      "BI Analyst",
      "Data Analytics Intern",
      "Product Analyst",
      "Business Analyst",
      "Product/Growth Analytics"
    ]
  },

  about: {
    summary: [
      "I am a data analyst and computer science undergraduate focused on translating multi-source operational data into structured analytical models and decision-grade business intelligence.",
      "Currently pursuing my B.Tech in Computer Science and Engineering (Core) at VIT-AP University alongside a BS Degree in Data Science and Management (Foundational Level) from the Indian Institute of Technology Madras.",
      "My core focus centers on end-to-end analytical pipelines: raw data processing and cleaning in Python, dimensional data modeling (Star Schema) in PostgreSQL, structured SQL analytics, and interactive Power BI dashboard development with DAX."
    ]
  },

  skills: [
    {
      category: "Data Analytics / BI",
      priority: 1,
      skills: [
        "SQL",
        "PostgreSQL",
        "Microsoft Excel",
        "Power BI",
        "DAX",
        "Power Query",
        "Tableau",
        "Data Modeling",
        "Star Schema",
        "Data Visualization",
        "Business Analytics"
      ]
    },
    {
      category: "Python / Data",
      priority: 2,
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Statistics",
        "Exploratory Data Analysis"
      ]
    },
    {
      category: "Analytics Concepts",
      priority: 3,
      skills: [
        "Data Cleaning",
        "ETL",
        "KPI Development",
        "Customer Analytics",
        "Sales Analytics",
        "Dashboard Development",
        "Cohort Analysis",
        "Retention Analysis",
        "Customer Segmentation",
        "A/B Testing"
      ]
    },
    {
      category: "Development / Tools",
      priority: 4,
      skills: [
        "Git",
        "GitHub",
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "FastAPI",
        "Firebase"
      ]
    }
  ],

  certifications: [
    {
      name: "Google Data Practitioner Associate",
      issuer: "Google",
      status: "Completed",
      statusType: "completed"
    },
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      status: "In Progress",
      statusType: "in_progress"
    },
    {
      name: "Microsoft Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      status: "Planned",
      statusType: "planned"
    },
    {
      name: "Tableau Certified Data Analyst",
      issuer: "Tableau",
      status: "Planned",
      statusType: "planned"
    }
  ],

  achievements: [
    {
      title: "CBSE Certificate of Merit",
      description: "Scored 100/100 in Social Science in Class X board examinations."
    },
    {
      title: "VIT-AP Engineering Clinics Expo 2025–26 — Top 10",
      description: "Team project selected in the Top 10 among approximately 1,008 competing teams."
    }
  ],

  education: [
    {
      institution: "VIT-AP University",
      degree: "B.Tech Computer Science and Engineering (Core)",
      period: "2023–2027",
      details: "Undergraduate Program in Computer Science & Engineering (Core)"
    },
    {
      institution: "Indian Institute of Technology Madras",
      degree: "BS Degree in Data Science and Management — Foundational Level",
      period: "Pursuing",
      details: "Foundational Level coursework in Data Science, Statistics, and Management."
    },
    {
      institution: "Academic Records",
      degree: "Senior Secondary & Secondary Education",
      period: "",
      details: "Class X: 95% | Class XII: 78%"
    }
  ],

  projects: [
    {
      id: "novacart",
      title: "NovaCart — E-Commerce Sales & Customer Analytics Platform",
      shortTitle: "NovaCart Analytics",
      role: "Flagship Data Analytics Project",
      priority: 1,
      isFlagship: true,
      status: "Completed & Deployed",
      tagline: "An end-to-end analytics platform combining Python data preparation, PostgreSQL dimensional modeling, SQL-based business analysis, a 6-page Power BI dashboard suite, and a deployed interactive React + FastAPI analytics application.",
      syntheticDisclaimer: "All analytical results are derived from an empirically modeled synthetic India-focused e-commerce dataset for project demonstration and analytical rigor.",
      links: {
        live: "https://novacart-analytics.vercel.app/",
        github: "https://github.com/shubh201203/novacart-analytics"
      },
      deliverables: [
        {
          num: "01",
          title: "Dimensional Analytics Warehouse",
          tech: "Python · PostgreSQL 18 · Star Schema",
          desc: "Cleaned and staged 104,852 sales records into an 8-table star schema warehouse with surrogate keys, 0 foreign-key orphans, deterministic customer recovery, and strict fact-grain isolation."
        },
        {
          num: "02",
          title: "Executive Power BI Suite",
          tech: "Power BI Desktop · 30+ DAX Measures",
          desc: "6-page interactive reporting suite analyzing executive performance, profitability, customer intelligence, product margins, regional operations, and cohort retention with 100% SQL reconciliation."
        },
        {
          num: "03",
          title: "Production Cloud Analytics App",
          tech: "React 18 · TypeScript · FastAPI · Neon",
          desc: "Production single-page web BI dashboard deployed on Vercel backed by a Python FastAPI REST service on Render and a Neon Serverless PostgreSQL database with sub-50ms parameterized query responses."
        }
      ],
      techStack: [
        "PostgreSQL 18",
        "SQL",
        "Power BI",
        "DAX",
        "Python 3.11",
        "Pandas",
        "Star Schema",
        "FastAPI",
        "React 18",
        "TypeScript"
      ],
      techStackCategorized: {
        dataAndAnalytics: [
          "Python 3.11",
          "Pandas",
          "PostgreSQL 18",
          "Dimensional Modeling",
          "Star Schema",
          "Data Quality & Quarantine",
          "Analytical SQL (CTEs, Window Functions)"
        ],
        businessIntelligence: [
          "Microsoft Power BI Desktop",
          "DAX (30+ Measures)",
          "Power Query",
          "Interactive Visualizations",
          "SQL-to-DAX Reconciliation"
        ],
        applicationAndCloud: [
          "React 18",
          "TypeScript",
          "Vite",
          "FastAPI",
          "Neon Serverless PostgreSQL",
          "Vercel",
          "Render",
          "Git & GitHub"
        ]
      },
      warehouseTables: {
        dimensions: [
          { name: "dim_customer", rows: "5,000", grain: "Registered customer account" },
          { name: "dim_product", rows: "180", grain: "Catalog SKU across 5 categories" },
          { name: "dim_location", rows: "54", grain: "Unique city, state, and region" },
          { name: "dim_payment", rows: "18", grain: "Payment method and status pair" },
          { name: "dim_date", rows: "1,826", grain: "Calendar day (2022–2026)" }
        ],
        facts: [
          { name: "fact_sales", rows: "104,852", grain: "Product line item within an order" },
          { name: "fact_returns", rows: "5,792", grain: "Returned item line event" },
          { name: "fact_payments", rows: "62,952", grain: "Payment transaction attempt" }
        ]
      },
      verifiedMetrics: {
        placedRevenue: {
          value: "₹971.49M",
          raw: "₹971,486,941.80",
          label: "Total Placed Revenue",
          desc: "Gross commercial intent placed before lifecycle deductions"
        },
        realizedRevenue: {
          value: "₹847.62M",
          raw: "₹847,624,781.93",
          label: "Realized Revenue",
          desc: "Fulfilled & in-transit orders (Completed: ₹733.52M + Shipped: ₹114.10M)"
        },
        returnedRevenue: {
          value: "₹50.87M",
          raw: "₹50,871,926.16",
          label: "Returned Revenue",
          desc: "Merchandise returned post-delivery across 5,792 return events"
        },
        postReturnRevenue: {
          value: "₹796.75M",
          raw: "₹796,752,855.77",
          label: "Post-Return Revenue",
          desc: "Net settled cash retained (Realized Revenue − Returned Revenue)"
        },
        realizedProfit: {
          value: "₹262.16M",
          raw: "₹262,159,342.82",
          label: "Realized Profit",
          desc: "Operational profit delivered across fulfilled order catalog"
        },
        profitMargin: {
          value: "30.93%",
          raw: "30.93%",
          label: "Realized Profit Margin",
          desc: "Realized profit divided by realized revenue"
        },
        activeCustomers: {
          value: "3,970",
          raw: "3,970 accounts",
          label: "Active Customers",
          desc: "Registered accounts with at least 1 completed or shipped order"
        },
        repeatShare: {
          value: "82.12%",
          raw: "82.12%",
          label: "Repeat Customer Share",
          desc: "3,260 repeat buyers out of 3,970 active customers"
        },
        aov: {
          value: "₹15,452",
          raw: "₹15,452.38",
          label: "Average Order Value",
          desc: "Average realized basket size across 54,854 fulfilled orders"
        },
        returnRate: {
          value: "5.57%",
          raw: "5.57%",
          label: "Return Rate",
          desc: "8,712 returned units / 156,395 ordered units"
        }
      },
      dashboardScreenshots: [
        {
          id: 1,
          title: "Executive Overview",
          filename: "01_executive_overview.png",
          caption: "Executive Overview — Revenue, profitability, customers, order status, and regional performance.",
          focus: "Top-level executive KPIs, monthly realized revenue trendline (2022–2026), regional sales distribution, category profit contribution, and order lifecycle status split."
        },
        {
          id: 2,
          title: "Sales & Profitability",
          filename: "02_sales_profitability.png",
          caption: "Sales & Profitability — Revenue and profit trends, discount impact, product profitability, and order-status analysis.",
          focus: "Gross demand vs. realized revenue, monthly realized revenue vs. profit combo tracking, placed revenue by order status, promotional discount depth trendline, and top 10 products by profit."
        },
        {
          id: 3,
          title: "Customer Intelligence",
          filename: "03_customer_intelligence.png",
          caption: "Customer Intelligence — Customer value, repeat versus one-time buyers, regional contribution, and purchase frequency.",
          focus: "Active customer count (3,970), repeat customer share (82.12%), customer purchase frequency ranking (top distinct orders), repeat vs. one-time buyer distribution, and regional revenue."
        },
        {
          id: 4,
          title: "Product Analytics",
          filename: "04_product_analytics.png",
          caption: "Product Analytics — Category profitability, product performance, discounting, and margin analysis.",
          focus: "Catalog performance across 180 SKUs, Category Profitability Matrix, top 10 profit generators, and an interactive Discount % vs. Profit Margin scatter analysis."
        },
        {
          id: 5,
          title: "Regional Operations",
          filename: "05_regional_operations.png",
          caption: "Regional Operations — Revenue, profit, order-status mix, and regional category performance.",
          focus: "Geographic demand across 18 Indian states and 6 macro-regions, top revenue-generating urban centers, uniform return rate tracking, and full Category × Region revenue cross-tabulation."
        },
        {
          id: 6,
          title: "Customer Retention & RFM",
          filename: "06_customer_retention_rfm.png",
          caption: "Customer Retention & RFM — Customer segments, repeat purchasing, cohort retention, and customer value.",
          focus: "Demographic segment revenue, customer lifetime value table, and an authoritative Monthly Customer Cohort Retention Heatmap Matrix (public.vw_cohort_retention) tracking repeat retention across M0 to M18."
        }
      ],
      technicalHighlights: [
        {
          title: "8-Table Star Schema & Strict Grain Isolation",
          desc: "Avoided Cartesian duplication by strictly separating fact_sales (line items) from fact_payments (transactions), requiring order-level CTE pre-aggregation before joining."
        },
        {
          title: "Deterministic Missing Key Recovery & Quarantine",
          desc: "Recovered 142 missing customer IDs via co-occurring order line items while routing 68 unrecoverable rows to an audited quarantine log."
        },
        {
          title: "100% SQL & DAX Mathematical Reconciliation",
          desc: "Every metric across PostgreSQL, Power BI, and the React application is reconciled to exact precision (Placed, Realized, Returned, and Post-Return cash flow)."
        },
        {
          title: "Cohort Retention View & RFM Behavioral Tiers",
          desc: "Engineered public.vw_cohort_retention tracking 18-month retention decay matrices alongside NTILE-based RFM quintile segmentation across 3,970 active customers."
        },
        {
          title: "28 Automated Pytest Verification Tests (100% Pass)",
          desc: "Comprehensive automated test suite validating data cleaning, schema integrity, fact grains, financial reconciliation, SQL analytical outputs, and FastAPI REST routes."
        }
      ]
    },
    {
      id: "product-analytics",
      title: "Product Analytics — Food Delivery / Consumer App Analytics",
      shortTitle: "Product Analytics",
      role: "Product & Growth Analytics Case Study",
      priority: 2,
      isFlagship: false,
      tagline: "Evaluating user acquisition, conversion funnels, retention cohorts, and A/B test experiments for a consumer food delivery platform.",
      techStack: [
        "Python",
        "Pandas",
        "SQL",
        "PostgreSQL",
        "Power BI",
        "DAX",
        "Statistics"
      ],
      status: "Case Study / In Development",
      modules: {
        acquisition: {
          title: "Acquisition",
          topics: ["New users", "Acquisition channels", "CAC"]
        },
        funnel: {
          title: "Conversion Funnel",
          steps: [
            "App Visit",
            "Restaurant View",
            "Add to Cart",
            "Checkout",
            "Payment",
            "Completed Order"
          ],
          analysis: "Step-by-step conversion and drop-off analysis to identify user friction points across the ordering experience."
        },
        retention: {
          title: "Retention & Cohorts",
          metrics: ["Day 1", "Day 7", "Day 30", "Churn", "Repeat orders"],
          cohortSlices: ["Signup month", "Acquisition channel", "First-order month"]
        },
        segmentation: {
          title: "User Segmentation",
          segments: [
            "High-value users",
            "Occasional users",
            "At-risk users",
            "Churned users"
          ]
        },
        abTesting: {
          title: "A/B Testing Framework",
          concept: "Control vs Treatment checkout experience",
          note: "Methodology and statistical evaluation framework (in development).",
          evaluations: [
            "Conversion rate",
            "AOV",
            "Completion rate",
            "Statistical significance",
            "Confidence interval"
          ]
        }
      }
    },
    {
      id: "disaster-reporting",
      title: "Disaster Reporting & Management Platform",
      shortTitle: "Disaster Reporting Platform",
      role: "B.Tech Capstone Project",
      priority: 3,
      isFlagship: false,
      tagline: "End-to-end disaster reporting and coordination platform connecting citizens, volunteers, NGOs, and government administrators.",
      techStack: [
        "Full-Stack Development",
        "Database Design",
        "Authentication & Authorization",
        "Multi-Role System Architecture"
      ],
      rolesArchitecture: [
        {
          role: "Citizen",
          capabilities: ["Report disaster", "Upload evidence", "Location/details", "Track report"]
        },
        {
          role: "Volunteer",
          capabilities: ["View nearby incidents", "Accept tasks", "Update status", "Coordinate response"]
        },
        {
          role: "NGO",
          capabilities: ["Manage resources", "Coordinate volunteers", "Support affected areas"]
        },
        {
          role: "Government Admin",
          capabilities: ["Verify incidents", "Assign resources", "Monitor response", "Manage users", "Track incidents"]
        }
      ],
      highlights: [
        "Full-stack development",
        "Database design",
        "Multi-role authentication and authorization",
        "Multi-role systems",
        "Team development",
        "Real-world problem solving"
      ]
    },
    {
      id: "wardrobewhiz",
      title: "WardrobeWhiz — AI-Powered Wardrobe Recommendation Platform",
      shortTitle: "WardrobeWhiz",
      role: "AI + Full Stack Project",
      priority: 4,
      isFlagship: false,
      tagline: "AI-powered wardrobe platform providing personalized outfit recommendations based on a user's clothing collection.",
      techStack: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "Firebase",
        "Vercel"
      ],
      concepts: [
        "Clothing inventory",
        "Outfit recommendations",
        "User interaction",
        "AI functionality",
        "Web application architecture",
        "Deployment"
      ]
    },
    {
      id: "emotion-music",
      title: "Emotion-Based Music Recommendation System",
      shortTitle: "Emotion Music System",
      role: "Computer Vision & Recommendation System",
      priority: 5,
      isFlagship: false,
      tagline: "Facial emotion detection pipeline recommending tailored music playlists.",
      techStack: [
        "React",
        "FastAPI",
        "Python",
        "AI / Emotion Analysis"
      ],
      pipeline: [
        "User",
        "Image / Face Input",
        "Emotion Detection",
        "Emotion Classification",
        "Music Recommendation",
        "React Interface"
      ],
      historicalDetail: "Initially used DeepFace and later moved toward a pixel-analysis approach."
    }
  ]
};
