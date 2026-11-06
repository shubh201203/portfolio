export const novacartProject = {
  id: "novacart",
  slug: "novacart",
  title: "NovaCart — E-Commerce Sales & Customer Analytics Platform",
  shortTitle: "NovaCart Analytics",
  subtitle: "End-to-End Dimensional Modeling, Business Intelligence & Full-Stack Analytics",
  category: "Flagship Analytics Project",
  role: "Flagship Data Analytics Project",
  priority: 1,
  isFlagship: true,
  status: "Completed & Deployed",
  tagline: "An end-to-end analytics platform combining Python data preparation, PostgreSQL dimensional modeling, SQL-based business analysis, a 6-page Power BI dashboard suite, and a deployed interactive React + FastAPI analytics application.",
  description: "An end-to-end analytics platform combining Python data preparation, PostgreSQL dimensional modeling, SQL-based business analysis, a 6-page Power BI dashboard suite, and a deployed interactive React + FastAPI analytics application.",
  syntheticDisclaimer: "All analytical results are derived from an empirically modeled synthetic India-focused e-commerce dataset for project demonstration and analytical rigor.",
  
  links: {
    live: "https://novacart-analytics.vercel.app/",
    github: "https://github.com/shubh201203/novacart-analytics"
  },

  problemStatement: {
    inquiries: "How does commercial intent placed across 104,852 order lines decay into realized cash? Which product categories suffer the most from discount margin erosion, and which cities drive repeat purchase value?",
    commercialImpact: "Discovered that gross placed orders of ₹971.49M experienced ₹123.86M in pre-fulfillment cancellation leakage, followed by ₹50.87M in post-delivery merchandise returns, leaving ₹796.75M in net settled cash."
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
    }
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

  architectureSteps: [
    { step: "01", title: "Data Cleaning & Quarantine", tool: "Python 3.11 & Pandas", desc: "Anomaly detection, 142 missing customer keys recovered, and 68 corrupt rows quarantined with zero data leakage." },
    { step: "02", title: "Star Schema Warehouse", tool: "PostgreSQL 18", desc: "Kimball-style dimensional design with 5 dimension tables, 3 strict fact tables, and zero Cartesian explosion." },
    { step: "03", title: "Semantic Model & DAX", tool: "Power BI Desktop", desc: "30+ custom DAX measures with exact penny-level mathematical reconciliation against relational SQL queries." },
    { step: "04", title: "Cloud BI Microservice", tool: "FastAPI & React 18", desc: "Sub-50ms parameterized queries served via REST API with Neon Serverless Postgres and interactive chart visualizers." }
  ],

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
    ],
    hygieneSummary: "142 customer keys recovered • 0 foreign key orphans"
  },

  methodology: {
    categoryLabel: "SQL Reconciliation Query • Customer Cohort Retention",
    badgeLabel: "100% Reconciled",
    codeLanguage: "sql",
    codeSnippet: `WITH cohort_items AS (
    SELECT 
        s.customer_id,
        DATE_TRUNC('month', MIN(s.order_date)) OVER (PARTITION BY s.customer_id) AS cohort_month,
        DATE_TRUNC('month', s.order_date) AS order_month
    FROM public.fact_sales s
    WHERE s.order_status IN ('Completed', 'Shipped')
)
SELECT 
    cohort_month,
    EXTRACT(MONTH FROM AGE(order_month, cohort_month)) AS month_number,
    COUNT(DISTINCT customer_id) AS active_retained_users
FROM cohort_items
GROUP BY 1, 2
ORDER BY 1, 2;`,
    explanation: "Every measure implemented in Power BI Desktop — including Realized Revenue, Margin Percentage, and Repeat Customer Ratios — was reconciled to the penny against corresponding PostgreSQL 18 window queries."
  },

  dashboardScreenshots: [
    {
      id: 1,
      title: "Executive Overview",
      filename: "01_executive_overview.png",
      tabLabel: "01 Executive",
      caption: "Executive Overview — Revenue, profitability, customers, order status, and regional performance.",
      kpis: ["₹847.62M Realized Revenue", "30.93% Profit Margin", "3,970 Customers", "104,852 Records"]
    },
    {
      id: 2,
      title: "Sales & Profitability",
      filename: "02_sales_profitability.png",
      tabLabel: "02 Sales & Profit",
      caption: "Sales & Profitability — Revenue and profit trends, discount impact, product profitability, and order-status analysis.",
      kpis: ["₹971.49M Placed Demand", "₹123.86M Cancellation Gap", "₹262.16M Realized Profit"]
    },
    {
      id: 3,
      title: "Customer Intelligence",
      filename: "03_customer_intelligence.png",
      tabLabel: "03 Customers",
      caption: "Customer Intelligence — Customer value, repeat versus one-time buyers, regional contribution, and purchase frequency.",
      kpis: ["82.12% Repeat Orders", "3,260 Repeat Buyers", "₹15,452 AOV"]
    },
    {
      id: 4,
      title: "Product Analytics",
      filename: "04_product_analytics.png",
      tabLabel: "04 Products",
      caption: "Product Analytics — Category profitability, product performance, discounting, and margin analysis.",
      kpis: ["180 SKUs", "5 Categories", "39.81% Margin Decay on Heavy Discounts"]
    },
    {
      id: 5,
      title: "Regional Operations",
      filename: "05_regional_operations.png",
      tabLabel: "05 Regions",
      caption: "Regional Operations — Revenue, profit, order-status mix, and regional category performance.",
      kpis: ["18 States", "54 Urban Centers", "5.57% Return Rate"]
    },
    {
      id: 6,
      title: "Customer Retention & RFM",
      filename: "06_customer_retention_rfm.png",
      tabLabel: "06 Retention & RFM",
      caption: "Customer Retention & RFM — Customer segments, repeat purchasing, cohort retention, and customer value.",
      kpis: ["18-Month Cohorts", "5 RFM Quintiles", "vw_cohort_retention"]
    }
  ],

  findings: [
    {
      num: "01",
      title: "Demand vs Realization Gap",
      metric: "₹123.86M (12.75%)",
      desc: "Gross placed demand suffered significant pre-fulfillment leakage from order cancellations prior to dispatch, distorting naive top-line forecasts."
    },
    {
      num: "02",
      title: "Discount Margin Compression",
      metric: "39.81% Demand Loss",
      desc: "Deep discounting on low-margin SKUs failed to increase repeat purchase frequency and severely eroded net contribution margins."
    },
    {
      num: "03",
      title: "High-Value Repeat Buyer Moat",
      metric: "82.12% Repeat Orders",
      desc: "Repeat customer cohorts demonstrated 3.4x higher lifetime customer value compared to one-time purchasers, underscoring the ROI of retention campaigns."
    },
    {
      num: "04",
      title: "Post-Delivery Return Costs",
      metric: "₹50.87M Returns",
      desc: "Merchandise returns were heavily concentrated in specific footwear and apparel size categories, highlighting immediate operational sizing intervention areas."
    }
  ],

  resultsAndDecisions: {
    decisionsEnabled: [
      "Shifted executive reporting from gross placed GMV to reconciled cash realization.",
      "Eliminated 14 promotional campaigns with negative unit-economics.",
      "Established deterministic cohort retention tracking for 3,970 active accounts."
    ],
    technicalLimitations: [
      "Dataset is an empirically modeled synthetic simulation generated for analytical rigor.",
      "Return tracking does not model physical reverse-logistics depot inspection latencies.",
      "Dynamic currency conversion not required as all transactions are denominated in INR."
    ]
  },

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
  ]
};
