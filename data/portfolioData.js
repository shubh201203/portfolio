import { allProjects } from './projects';

export const portfolioData = {
  personal: {
    name: "Shubh Sharma",
    roleTitle: "Data Analyst | BI & Product Analytics",
    headline: "Turning complex raw data into decision-grade business intelligence and analytics pipelines through SQL, Python, Power BI, and dimensional modeling.",
    email: "shubhsharmaa2003@gmail.com",
    phone: "9680749857",
    linkedin: "https://www.linkedin.com/in/shubh-sharma-2067981b5",
    github: "https://github.com/shubh201203",
    resumePath: "/portfolio/resume.pdf",
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
      category: "Data Analytics",
      description: "Exploratory analysis, data hygiene, and statistical modeling with Python and numerical libraries.",
      priority: 1,
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Statistical Analysis"
      ]
    },
    {
      category: "Databases & SQL",
      description: "Relational data warehousing, analytical queries, window calculations, and star schema modeling.",
      priority: 2,
      skills: [
        "PostgreSQL",
        "SQL",
        "CTEs",
        "Window Functions",
        "Joins",
        "Query Optimization",
        "Dimensional Modeling"
      ]
    },
    {
      category: "Business Intelligence",
      description: "Interactive executive reporting, DAX measure calculations, and dimensional ETL pipelines.",
      priority: 3,
      skills: [
        "Power BI",
        "DAX",
        "Power Query",
        "Data Modeling",
        "KPI Design",
        "Dashboard Development"
      ]
    },
    {
      category: "Engineering",
      description: "Modern web frontend frameworks, RESTful backend APIs, and developer workflows.",
      priority: 4,
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "FastAPI",
        "Node.js",
        "Git",
        "API Integration"
      ]
    },
    {
      category: "AI / Machine Learning",
      description: "Machine learning models, recommendation heuristics, affective computing, and NLP pipelines.",
      priority: 5,
      skills: [
        "Machine Learning Fundamentals",
        "Applied AI",
        "Recommendation Systems",
        "Data Processing"
      ]
    }
  ],

  certifications: [
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      period: "October 2026",
      status: "Completed",
      statusType: "completed",
      badgeImage: "/images/certifications/microsoft-certified-associate.webp",
      description: "Validated expertise in data preparation, star-schema semantic modeling, complex DAX calculations, and interactive Power BI report engineering."
    },
    {
      name: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
      issuer: "Microsoft",
      period: "October 2026",
      status: "Completed",
      statusType: "completed",
      badgeImage: "/images/certifications/microsoft-certified-associate.webp",
      description: "Certified in end-to-end analytics engineering across Microsoft Fabric Lakehouses, Delta Parquet architecture, T-SQL data transformation, and semantic models."
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      period: "October 2026",
      status: "Completed",
      statusType: "completed",
      badgeImage: "/images/certifications/microsoft-certified-fundamentals.png",
      description: "Foundational mastery of core cloud data concepts, relational and non-relational Azure storage, Cosmos DB, and modern cloud lakehouse analytics."
    },
    {
      name: "Google Data Practitioner Associate",
      issuer: "Google Cloud",
      period: "October 2026",
      status: "Completed",
      statusType: "completed",
      badgeImage: "/images/certifications/google-cloud-data-practitioner.jpg",
      description: "Official Google Cloud credential demonstrating practical data processing, BigQuery SQL analytics, cloud storage architectures, and ML capabilities."
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      period: "In Progress",
      status: "In Progress",
      statusType: "in_progress",
      badgeImage: null,
      description: "Comprehensive multi-course professional specialization covering analytical workflows, R programming, data hygiene, exploratory analysis, and stakeholder storytelling."
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
    }
  ],

  projects: allProjects
};
