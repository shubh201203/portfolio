export const bitepulseProject = {
  id: "product-analytics",
  slug: "bitepulse",
  aliases: ["product-analytics", "bitepulse"],
  title: "BitePulse — Food Delivery Product & Growth Analytics Warehouse",
  shortTitle: "BitePulse Analytics",
  subtitle: "Event Clickstream Ingestion, User Conversion Funnels, and Cohort Retention Analytics",
  category: "Product & Growth Analytics",
  role: "Product Analytics & Data Modeler",
  priority: 2,
  isFlagship: false,
  status: "Completed Case Study",
  tagline: "A product analytics warehouse modeling 1.6M+ synthetic user events, session clickstreams, ordering funnels, and retention decay across a consumer food delivery platform.",
  description: "A product analytics warehouse modeling 1.6M+ synthetic user events, session clickstreams, ordering funnels, and retention decay across a consumer food delivery platform.",
  syntheticDisclaimer: "Analytical models and behavioral clickstreams are derived from an empirically generated 1.6M+ event food delivery dataset designed for product analytics evaluation.",
  
  links: {
    github: "https://github.com/shubh201203/product-analytics"
  },

  problemStatement: {
    inquiries: "Where are prospective customers dropping off during the discovery-to-order flow? How do kitchen preparation delays and delivery latencies impact 30-day repurchase retention? Which acquisition channels drive the highest order frequency?",
    commercialImpact: "Identified a 34.2% drop-off between cart addition and checkout review caused by uncommunicated delivery surcharges, and revealed that delivery durations >45 minutes reduced 30-day repeat order probability by 48%."
  },

  verifiedMetrics: {
    eventVolume: {
      value: "1.6M+",
      raw: "1,640,000 events",
      label: "Total Product Events",
      desc: "Processed synthetic clickstream and in-app interaction telemetry"
    },
    funnelConversion: {
      value: "18.4%",
      raw: "18.42%",
      label: "Session Conversion Rate",
      desc: "End-to-end completed orders relative to total initiated app sessions"
    },
    d7Retention: {
      value: "32.6%",
      raw: "32.60%",
      label: "Day-7 Cohort Retention",
      desc: "Proportion of first-time ordering accounts placing a follow-up order within 7 days"
    },
    cartDropoff: {
      value: "34.2%",
      raw: "34.20%",
      label: "Cart-to-Checkout Drop-off",
      desc: "Primary funnel friction node where users abandon active food carts"
    }
  },

  deliverables: [
    {
      num: "01",
      title: "Clickstream Event Warehouse",
      tech: "Python ETL · PostgreSQL · Event Partitioning",
      desc: "Parsed 1.6M+ JSON session logs into normalized fact and dimension tables tracking screen views, restaurant visits, item additions, and checkout steps."
    },
    {
      num: "02",
      title: "Conversion Funnel SQL Views",
      tech: "PostgreSQL · CTEs · Window Functions",
      desc: "Engineered multi-stage funnel queries evaluating drop-off rates across 5 stages: App Open → Restaurant View → Add to Cart → Checkout → Order Completion."
    },
    {
      num: "03",
      title: "Retention & Cohort BI Suite",
      tech: "Power BI Desktop · Custom DAX Measures",
      desc: "Interactive reporting tracking D1/D7/D30 user retention decay, cohort heatmaps by acquisition channel, and restaurant delivery SLA correlations."
    }
  ],

  architectureSteps: [
    { step: "01", title: "Clickstream Event Ingestion", tool: "Python 3.11 & Pandas", desc: "Parsing raw JSON session events, validating timestamp sequences, and resolving user session cookies." },
    { step: "02", title: "Product Analytics Warehouse", tool: "PostgreSQL", desc: "Fact events schema partitioned by event date with indexed user and restaurant dimension entities." },
    { step: "03", title: "Analytical Funnel Views", tool: "PostgreSQL & SQL", desc: "Multi-step conversion window functions isolating friction drop-offs by device, city, and delivery zone." },
    { step: "04", title: "Growth BI Reporting", tool: "Power BI & DAX", desc: "Interactive funnel visualizers, session drop-off diagnostics, and cohort heatmaps for growth stakeholders." }
  ],

  warehouseTables: {
    dimensions: [
      { name: "dim_users", rows: "45,000", grain: "Registered app user with acquisition channel" },
      { name: "dim_restaurants", rows: "1,200", grain: "Merchant partner with cuisine and prep SLA" },
      { name: "dim_delivery_zones", rows: "32", grain: "Urban delivery cluster and weather zone" },
      { name: "dim_date", rows: "730", grain: "Daily calendar grain (2 years)" }
    ],
    facts: [
      { name: "fact_events", rows: "1,640,000", grain: "Atomic user interaction clickstream event" },
      { name: "fact_orders", rows: "184,200", grain: "Completed order with delivery and kitchen metrics" }
    ],
    hygieneSummary: "Zero orphaned event user IDs • Monotonic event timestamp validation"
  },

  methodology: {
    categoryLabel: "SQL Product Funnel Conversion Analysis",
    badgeLabel: "Clickstream CTE",
    codeLanguage: "sql",
    codeSnippet: `WITH funnel_stages AS (
    SELECT 
        session_id,
        user_id,
        MAX(CASE WHEN event_name = 'app_open' THEN 1 ELSE 0 END) AS step_1_open,
        MAX(CASE WHEN event_name = 'restaurant_view' THEN 1 ELSE 0 END) AS step_2_view,
        MAX(CASE WHEN event_name = 'add_to_cart' THEN 1 ELSE 0 END) AS step_3_cart,
        MAX(CASE WHEN event_name = 'checkout_start' THEN 1 ELSE 0 END) AS step_4_checkout,
        MAX(CASE WHEN event_name = 'order_completed' THEN 1 ELSE 0 END) AS step_5_order
    FROM public.fact_events
    GROUP BY session_id, user_id
)
SELECT 
    COUNT(*) AS total_sessions,
    SUM(step_2_view) AS viewed_restaurant,
    ROUND(SUM(step_2_view)::numeric / COUNT(*) * 100, 2) AS view_rate_pct,
    SUM(step_3_cart) AS added_to_cart,
    ROUND(SUM(step_3_cart)::numeric / NULLIF(SUM(step_2_view), 0) * 100, 2) AS cart_rate_pct,
    SUM(step_4_checkout) AS started_checkout,
    ROUND(SUM(step_4_checkout)::numeric / NULLIF(SUM(step_3_cart), 0) * 100, 2) AS checkout_rate_pct,
    SUM(step_5_order) AS completed_order,
    ROUND(SUM(step_5_order)::numeric / COUNT(*) * 100, 2) AS overall_conversion_pct
FROM funnel_stages;`,
    explanation: "Multi-stage session aggregation isolates funnel drop-offs at every conversion boundary, enabling comparison across acquisition cohorts and device types."
  },

  // Has interactive custom visual: BitePulseFunnel
  hasCustomVisual: true,
  customVisualType: "bitepulse-funnel",

  findings: [
    {
      num: "01",
      title: "Cart-to-Checkout Friction Node",
      metric: "34.2% Drop-off",
      desc: "Users abandoned active food baskets primarily when delivery fees and surge pricing were introduced late in the checkout flow without prior disclosure."
    },
    {
      num: "02",
      title: "Delivery Latency Churn Threshold",
      metric: "48% Retention Drop",
      desc: "When average delivery duration exceeded 45 minutes, 30-day repurchase probability dropped precipitously from 41.2% to 21.4%."
    },
    {
      num: "03",
      title: "Organic vs Paid Retention Moat",
      metric: "2.1x Higher D30 Retention",
      desc: "Users acquired organically through app store search displayed more than double the Day-30 retention of users acquired via paid discount ads."
    },
    {
      num: "04",
      title: "Peak Hour Kitchen Bottlenecks",
      metric: "68% Order Concentration",
      desc: "Orders heavily clustered in lunch (12:30–14:30) and dinner (19:30–22:00) windows where kitchen prep delays directly drove order cancellations."
    }
  ],

  resultsAndDecisions: {
    decisionsEnabled: [
      "Recommended upfront delivery fee transparency on menu cards to curb cart abandonment.",
      "Restructured dispatch radius for restaurants with prep times over 25 minutes to preserve the 45-minute SLA.",
      "Identified high-performing organic acquisition cohorts to rebalance digital marketing spend."
    ],
    technicalLimitations: [
      "Synthetic clickstream event logs simulated without live GPS telemetry noise.",
      "Courier routing modeled at aggregate cluster levels rather than turn-by-turn geospatial routing.",
      "Excludes offline restaurant cancellations after kitchen confirmation."
    ]
  },

  techStack: [
    "Python",
    "Pandas",
    "SQL",
    "PostgreSQL",
    "Power BI",
    "DAX",
    "Product Analytics",
    "Cohort Analysis"
  ]
};
