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
      tagline: "End-to-end sales, customer, and dimensional analytics platform with PostgreSQL, Star Schema modeling, and Power BI.",
      techStack: [
        "PostgreSQL",
        "SQL",
        "Python",
        "Pandas",
        "Power Query",
        "Power BI",
        "DAX",
        "Dimensional Data Modeling",
        "Star Schema"
      ],
      pipeline: [
        "Raw E-Commerce Data",
        "Python Cleaning / Transformation",
        "PostgreSQL",
        "Star Schema",
        "SQL Analytics",
        "Power BI / DAX",
        "Business Insights"
      ],
      analyticsAreas: [
        {
          category: "Revenue",
          items: ["Revenue analysis", "Profitability", "Growth", "AOV", "YoY / MoM"]
        },
        {
          category: "Customers",
          items: ["Customer analytics", "RFM segmentation", "Repeat purchase analysis", "Customer behavior", "Cohort analysis", "Retention"]
        },
        {
          category: "Products",
          items: ["Product performance", "Category performance", "Pareto analysis"]
        },
        {
          category: "Geography",
          items: ["Geographic performance", "Regional trends"]
        },
        {
          category: "Business Intelligence",
          items: ["KPI tracking", "Dashboard development", "Business recommendations"]
        }
      ],
      powerBiStructure: {
        plannedPages: [
          "Executive Overview",
          "Sales / Revenue",
          "Customer Analytics",
          "Product Analytics",
          "Geographic Performance",
          "KPI Tracking"
        ],
        daxCapabilities: [
          "Revenue",
          "Profit",
          "AOV",
          "YoY / MoM growth",
          "Customer metrics",
          "Time intelligence",
          "Retention-related measures"
        ],
        previewStatus: "Dashboard Preview — Coming Soon"
      },
      caseStudySections: [
        { num: "01", title: "Business Problem", status: "Defined", content: "Structuring multi-category enterprise e-commerce operational data to analyze sales trends, margin health, customer retention, and regional performance drivers." },
        { num: "02", title: "Data Source", status: "Defined", content: "Transactional order data, customer demographic profiles, itemized order lines, and payment events." },
        { num: "03", title: "Data Cleaning", status: "Implemented", content: "Automated data hygiene routines using Python, Pandas, and Power Query: deduplication, schema standardization, missing value handling, and data type validation." },
        { num: "04", title: "Data Architecture", status: "Implemented", content: "Full end-to-end data pipeline: Raw Operational Data → Python Cleaning/ETL → PostgreSQL DW → Star Schema." },
        { num: "05", title: "SQL Analytics", status: "Implemented", content: "Structured analytical queries investigating revenue trends, customer lifetime dynamics, product sales distribution, and time-based metrics." },
        { num: "06", title: "Data Modeling", status: "Implemented", content: "Dimensional modeling implementing a centralized fact table connected to clean dimension tables via an optimized Star Schema." },
        { num: "07", title: "DAX Measures", status: "Implemented", content: "Analytical measure calculations for dynamic revenue, margin, AOV, YoY / MoM growth, and time-intelligence filters." },
        { num: "08", title: "Power BI Dashboards", status: "Planned", content: "6 core reporting views: Executive Overview, Sales & Profitability, Customer Analytics, Product Matrix, Geographic Trends, and KPI Tracking." },
        { num: "09", title: "Insights", status: "In Progress", content: "Analysis underway — real findings displayed as completed." },
        { num: "10", title: "Recommendations", status: "Planned", content: "Actionable strategic recommendations to be derived directly from verified analytical findings." },
        { num: "11", title: "Project Outcome", status: "In Progress", content: "End-to-end analytics pipeline and reporting workflow currently being developed." }
      ],
      links: {
        github: "https://github.com/shubh201203"
      }
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
