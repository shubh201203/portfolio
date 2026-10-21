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
      issuer: "Google Cloud",
      badgeImage: "images/certifications/google-cloud-associate.png",
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
      name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      status: "Completed",
      statusType: "completed"
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
      id: "smart-resume",
      title: "SmartResume AI — AI-Powered Resume Screening Platform",
      shortTitle: "SmartResume AI",
      role: "AI Recruitment & Analytics Platform",
      priority: 4,
      isFlagship: false,
      status: "Completed & Deployed",
      tagline: "A production-grade recruitment intelligence platform featuring in-memory resume parsing, deterministic math-based candidate scoring, direct textual evidence grounding, and recruiter analytics.",
      description: "A production-grade recruitment intelligence platform featuring in-memory resume parsing, deterministic math-based candidate scoring, direct textual evidence grounding, and recruiter analytics.",
      links: {
        live: "https://smart-resume-screener-pi.vercel.app/",
        github: "https://github.com/shubh201203/smart-resume-screener"
      },
      techStack: [
        "FastAPI",
        "Python 3.11",
        "React 19",
        "TypeScript",
        "SQLAlchemy",
        "PostgreSQL",
        "SQLite",
        "Scikit-Learn",
        "Recharts",
        "Tailwind CSS"
      ],
      concepts: [
        "Hybrid Matching Engine: Combines LLM contextual analysis with an autonomous Scikit-Learn TF-IDF cosine similarity fallback engine.",
        "Deterministic Weighted Math Scoring: Strictly normalized formula (1.0–10.0 scale) eliminating black-box AI rating hallucinations.",
        "Direct Evidence Grounding: Quotes verbatim resume text snippets for all required/preferred competency matches and gap diagnostics.",
        "Diagnostic 'Why Not 10/10?': Transparent score reduction feedback detailing exact missing technical skills and experience gaps.",
        "Recruiter Workflow Dashboard: Side-by-side comparison of up to 3 candidates, cohort skill coverage analytics, and interview notes.",
        "Sanitized Data Export: Automated candidate report generation with RFC-4180 compliance and CSV formula injection protection.",
        "Dual Database Architecture: SQLite local development fallback with automatic Neon Serverless PostgreSQL connection pooling in production.",
        "29 Automated Pytest Tests: Rigorous test suite validating document parsing, SHA-256 deduplication, math scoring, and API health."
      ]
    },
    {
      id: "wardrobewhiz",
      title: "WardrobeWhiz",
      shortTitle: "WardrobeWhiz",
      role: "AI-Powered Wardrobe Assistant",
      subtitle: "AI-Powered Wardrobe Assistant",
      priority: 4,
      isFlagship: false,
      status: "Completed & Deployed",
      tagline: "A modern wardrobe management and styling application that helps users organize clothing and discover personalized outfit combinations.",
      description: "A modern wardrobe management and styling application that helps users organize clothing and discover personalized outfit combinations.",
      image: `${import.meta.env.BASE_URL}images/projects/wardrobewhiz/logo.png`,
      links: {
        live: "https://wardrobewhiz.vercel.app/home",
        github: "https://github.com/shubh201203/wardrobewhiz"
      },
      techStack: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "Firebase",
        "OpenAI API",
        "MobileNet",
        "Framer Motion"
      ],
      concepts: [
        "Digital Wardrobe Management: Categorized inventory tracking (tops, bottoms, outerwear, footwear) with image uploads and cloud sync.",
        "Computer Vision Classification: MobileNet image inference pipeline classifying uploaded apparel into standard wardrobe taxonomies.",
        "Context-Aware AI Stylist: OpenAI GPT-3.5 integration passing serialized closet inventories to recommend outfits strictly from owned items.",
        "Fault-Tolerant Heuristic Fallback: Dual-layer recommendation system falling back to color-theory algorithms if API quotas or latency occur.",
        "Data-Driven Wardrobe Insights: Real-time calculation of closet balance scores, neutral-to-accent palette ratios, and gap detector alerts.",
        "Interactive Fit Sandbox: Camera-based body mapping prototype simulating garment alignment over live video (Proof-of-Concept).",
        "Full-Stack Decoupled Architecture: React 19 frontend hosted on Vercel with Node.js/Express REST API on Render and Firebase Firestore persistence.",
        "Verified Test Coverage: Native Node.js unit tests (node:test) validating outfit filtering, gap detection, and styling rule heuristics."
      ]
    },
    {
      id: "emotion-music",
      title: "Emotion-Driven Beats — Emotion-Aware Music Recommendation",
      shortTitle: "Emotion-Driven Beats",
      role: "Affective Computing & Audio Recommendation",
      priority: 5,
      isFlagship: false,
      status: "Completed & Deployed",
      tagline: "An interactive full-stack music recommendation application that analyzes webcam image signals, maps experimental emotion profiles to musical mood dimensions, and recommends tracks through Spotify integration, with feedback-driven genre adaptation.",
      description: "An interactive full-stack music recommendation application that analyzes webcam image signals, maps experimental emotion profiles to musical mood dimensions, and recommends tracks through Spotify integration, with feedback-driven genre adaptation.",
      links: {
        live: "https://emotion-music-system.vercel.app/",
        github: "https://github.com/shubh201203/emotion-music-system",
        docs: "https://emotion-music-system-unge.onrender.com/docs"
      },
      techStack: [
        "React",
        "Vite",
        "FastAPI",
        "Python",
        "OpenCV",
        "NumPy",
        "MongoDB",
        "Spotify API"
      ],
      concepts: [
        "Affective Visual Signal Extraction: In-memory Base64 image decoding and bilateral frame standardization via OpenCV with luminance and chromatic warmth analysis.",
        "Deterministic Mood Mapping: Linear rule-based formulation mapping discrete emotion distributions into normalized musical Valence (0.0–1.0), Energy (0.0–1.0), and Tempo (60–140 BPM).",
        "Spotify Web API Orchestration: Server-to-server Client Credentials authentication dynamically fetching live tracks and 30-second audio previews by compound mood-genre seeds.",
        "Adaptive Reinforcement Learning Lite: MongoDB-backed feedback loop that tracks song-level user dislikes and automatically triggers genre pivots after 2 consecutive rejections.",
        "Fault-Tolerant Resilience: Graceful fallback pipelines serving structured mock audio metadata and artwork when Spotify API quotas or external databases are unreachable.",
        "Modern Glassmorphic Client: High-performance single-page React interface featuring Framer Motion micro-interactions, animated confidence bars, and responsive CSS grid cards."
      ],
      pipeline: [
        "Webcam Capture",
        "OpenCV Preprocessing",
        "Signal Analysis",
        "Mathematical Mood Mapping",
        "Spotify Synthesis",
        "Adaptive Playback"
      ],
      historicalDetail: "Features a dual-mode architectural design: a lightweight statistical signal analyzer in production for zero-crash cloud execution, with verified DeepFace CNN integration available in repository history for high-compute local demos."
    },
    {
      id: "mental-health-detection",
      title: "AI-Powered Mental Health Detection Using NLP & Machine Learning",
      shortTitle: "Mental Health NLP",
      role: "NLP & ML Course Project",
      priority: 6,
      isFlagship: false,
      status: "Deployed & Verified",
      tagline: "Educational NLP classification platform evaluating Multinomial Naive Bayes, Logistic Regression, and Linear Support Vector Machines on TF-IDF feature representations.",
      links: {
        live: "https://mental-health-ai-app-ldakmvakivnws7llfcaajf.streamlit.app/",
        github: "https://github.com/shubh201203/mental-health-ai-app"
      },
      techStack: [
        "Python",
        "NLP",
        "NLTK",
        "Scikit-learn",
        "TF-IDF",
        "Streamlit",
        "Pandas",
        "Matplotlib"
      ],
      concepts: [
        "NLTK Tokenization & WordNet Lemmatization",
        "15,000-Feature Unigram + Bigram TF-IDF Representation",
        "Tri-Model Benchmark (Naive Bayes: 89.59%, Logistic Regression: 93.53%, Linear SVC: 94.03%)",
        "Dual-Mode Input (Single Reflection vs. Multi-Post Social Timeline Simulation)",
        "XSS-Sanitized Real-Time Emotional Keyword Highlighting",
        "Automated Unittest Suite (8 Tests: Inference, Probability Calibration & Fallback Cues)",
        "Full Streamlit Cloud Production Deployment with Integrated Crisis Resources"
      ]
    },
    {
      id: "shortx",
      title: "ShortX — URL Shortener & Analytics Platform",
      shortTitle: "ShortX Shortener",
      role: "Full-Stack Development",
      priority: 7,
      isFlagship: false,
      status: "Completed & Deployed",
      tagline: "A full-stack URL shortening platform with Redis caching, asynchronous click analytics, and URL classification.",
      links: {
        live: "https://shortx-url-shortener-1w5piewh6-shubh201203s-projects.vercel.app/",
        github: "https://github.com/shubh201203/shortx-url-shortener"
      },
      techStack: [
        "Next.js",
        "React",
        "FastAPI",
        "Python",
        "MongoDB Atlas",
        "Upstash Redis",
        "scikit-learn",
        "Recharts"
      ],
      concepts: [
        "URL Shortening & Collision-Resistant Token Generation: Generates unique 7-character alphanumeric identifiers with MongoDB index uniqueness validation.",
        "Redis Cache-Aside Layer with Automatic TTL: Reads directly from Upstash Redis with 24-hour expiration for fast redirection, updating cache on misses.",
        "Fail-Open Fault Tolerance: Non-blocking exception handling on Redis cache and rate-limit reads to prevent 500 errors during cache network latency.",
        "Asynchronous Click Analytics: In-memory asyncio.Queue worker decoupling telemetry logging from the HTTP 307 redirect lifecycle.",
        "Sliding-Window Rate Limiting: 100 requests/minute per-IP sliding threshold implemented via Redis Sorted Sets (ZSET).",
        "Machine Learning URL Classification: Pre-trained Multinomial Naive Bayes model (TF-IDF character n-grams) scoring URL entropy at creation time.",
        "Interactive Analytics Dashboard: Real-time Recharts line graph visualizing 7-day click volume trends alongside top 5 performing links.",
        "Decoupled Cloud Architecture: Next.js frontend deployed on Vercel with FastAPI ASGI service on Render and Motor async MongoDB storage."
      ]
    },
    {
      id: "todo",
      title: "TO-DO — Full-Stack Task Management Application",
      shortTitle: "TO-DO Task Manager",
      role: "Full-Stack Development",
      priority: 8,
      isFlagship: false,
      status: "Completed & Deployed",
      tagline: "A full-stack task management application featuring a REST API, priority tracking, task filtering and sorting, and persistent PostgreSQL storage in production with SQLite support for local development.",
      image: `${import.meta.env.BASE_URL}images/projects/todo/todo-dashboard.png`,
      screenshots: [
        {
          id: 1,
          title: "Dashboard Overview & KPI Counters",
          image: `${import.meta.env.BASE_URL}images/projects/todo/todo-dashboard.png`,
          caption: "Real-time task counter cards (Total, In Progress, Completed, Overdue) and task creation interface."
        },
        {
          id: 2,
          title: "Active Task Management & Priority Sorting",
          image: `${import.meta.env.BASE_URL}images/projects/todo/todo-dashboard-tasks.png`,
          caption: "Live task items with color-coded priority badges, debounced search, status filter tabs, and inline actions."
        }
      ],
      links: {
        live: "https://todo-app-shubh.onrender.com/",
        github: "https://github.com/shubh201203/TO-DO"
      },
      techStack: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "PostgreSQL",
        "Neon",
        "SQLite",
        "Render",
        "Node.js Native Test Runner"
      ],
      concepts: [
        "Create, view, update, complete, and delete tasks with instant state synchronization.",
        "Search, filter by status (All, Pending, Completed), and sort by priority, due date, or title.",
        "Track priorities (Low, Medium, High) and calculate overdue dates dynamically against current UTC time.",
        "View task summary metrics on real-time KPI cards (Total, In Progress, Completed, Overdue).",
        "REST API with input validation, 100kb payload caps, and parameterized database queries.",
        "PostgreSQL-backed production persistence using Neon Serverless Postgres with TLS encryption.",
        "SQLite local-development fallback with Write-Ahead Logging (WAL) and memory-mode testing.",
        "Strict Fail-Fast Architecture: Halts immediately if configured PostgreSQL connection fails without silent data loss.",
        "Automated Test Coverage: 52 passing automated tests across unit, integration, and logic suites using node:test.",
        "Health-check endpoint (/health) and automated cloud deployment on Render Free Web Service."
      ]
    }
  ]
};
