export const todoProject = {
  id: "todo",
  slug: "todo",
  aliases: ["todo"],
  title: "TO-DO — Full-Stack Task Management Application",
  shortTitle: "TO-DO Task Manager",
  subtitle: "Robust CRUD Engine, Priority Triage, Dual-Database Architecture & Automated Testing",
  category: "Full-Stack Web Application",
  role: "Full-Stack Engineer",
  priority: 6,
  isFlagship: false,
  status: "Completed & Deployed",
  tagline: "A full-stack task management application featuring a REST API, priority tracking, dynamic deadline triage, persistent PostgreSQL storage in production, and SQLite local testing with 52 automated tests.",
  description: "A full-stack task management application featuring a REST API, priority tracking, dynamic deadline triage, persistent PostgreSQL storage in production, and SQLite local testing with 52 automated tests.",
  
  links: {
    live: "https://todo-app-shubh.onrender.com/",
    github: "https://github.com/shubh201203/TO-DO"
  },

  problemStatement: {
    inquiries: "How can a task management service enforce strict input sanitization, dynamic deadline calculations, and fail-fast database invariants while maintaining seamless zero-downtime persistence across both development and production tiers?",
    commercialImpact: "Many simple task applications suffer from silent state corruption, unvalidated payloads, or brittle database locks. TO-DO implements parameterized queries, payload caps, fail-fast health checks, and a comprehensive 52-test automated suite to guarantee operational reliability."
  },

  verifiedMetrics: {
    automatedTests: {
      value: "52 Tests",
      raw: "52 passing tests",
      label: "Automated Tests",
      desc: "Comprehensive suite using Node.js native test runner (node:test)"
    },
    productionDB: {
      value: "PostgreSQL",
      raw: "Neon Serverless Postgres",
      label: "Production Database",
      desc: "TLS-encrypted connection pooling on Neon Serverless Postgres"
    },
    localDB: {
      value: "SQLite WAL",
      raw: "SQLite 3 WAL Mode",
      label: "Development Database",
      desc: "Zero-dependency local database with Write-Ahead Logging"
    },
    payloadSafety: {
      value: "100kb Cap",
      raw: "100kb payload limit",
      label: "Payload Security",
      desc: "Strict request size caps and parameterized SQL queries"
    }
  },

  deliverables: [
    {
      num: "01",
      title: "RESTful Task Lifecycle API",
      tech: "Node.js · Express.js · RESTful Architecture",
      desc: "Robust CRUD endpoints supporting creation, retrieval, updates, status toggling, and deletion with strict parameter validation."
    },
    {
      num: "02",
      title: "Dual-Database Persistence Engine",
      tech: "PostgreSQL (Neon) · SQLite · SQL Parameterization",
      desc: "Seamless environment switching between cloud-hosted PostgreSQL in production and zero-dependency SQLite with WAL mode in development."
    },
    {
      num: "03",
      title: "Automated Verification Suite",
      tech: "node:test · 52 Automated Tests · CI Ready",
      desc: "Complete test coverage across route validation, query parameter sanitization, state machine transitions, and database error recovery."
    }
  ],

  architectureSteps: [
    { step: "01", title: "Task Client Interface", tool: "HTML5 & Tailwind CSS", desc: "Interactive task interface featuring real-time status filters (All, Pending, Completed) and priority badges." },
    { step: "02", title: "Express REST Service", tool: "Node.js & Express.js", desc: "Handles parameterized request routing, input validation, and dedicated health-check telemetry at /health." },
    { step: "03", title: "Data Access Layer", tool: "SQL Parameterization", desc: "Executes parameterized SQL statements preventing SQL injection across both PostgreSQL and SQLite backends." },
    { step: "04", title: "Cloud Deployment", tool: "Render & Neon", desc: "Continuous deployment on Render Web Service backed by Neon Serverless PostgreSQL with auto-scaling." }
  ],

  methodology: {
    categoryLabel: "Database Access Layer • Parameterized Query Safety",
    badgeLabel: "Parameterized SQL",
    codeLanguage: "javascript",
    codeSnippet: `// Parameterized SQL query preventing injection and enforcing data hygiene
export async function updateTask(id, { title, description, priority, due_date, status }) {
  const query = \`
    UPDATE tasks 
    SET 
      title = COALESCE($1, title),
      description = COALESCE($2, description),
      priority = COALESCE($3, priority),
      due_date = COALESCE($4, due_date),
      status = COALESCE($5, status),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $6
    RETURNING *;
  \`;
  const values = [title, description, priority, due_date, status, id];
  const { rows } = await db.query(query, values);
  if (rows.length === 0) throw new NotFoundError('Task not found');
  return rows[0];
}`,
    explanation: "Using parameterized SQL queries with COALESCE ensures field-level partial updates while completely immunizing the database against SQL injection vulnerabilities."
  },

  // Has 2 real screenshots in public/images/projects/todo/
  imageDir: "todo",
  dashboardScreenshots: [
    {
      id: 1,
      title: "Task Management Dashboard",
      filename: "todo-dashboard.png",
      tabLabel: "01 Overview",
      caption: "Task Management Dashboard — Summary KPI cards (Total, In Progress, Completed, Overdue), filter toolbar, and task creation interface.",
      kpis: ["KPI Summary Cards", "Priority Filters", "Due Date Tracker"]
    },
    {
      id: 2,
      title: "Active Task List & Triage",
      filename: "todo-dashboard-tasks.png",
      tabLabel: "02 Task List",
      caption: "Active Task List & Triage — Status toggles, priority indicators (Low, Medium, High), search bar, and inline action controls.",
      kpis: ["Instant Status Toggle", "Overdue Calculation", "Search & Sort"]
    }
  ],

  findings: [
    {
      num: "01",
      title: "52 Verified Passing Tests",
      metric: "100% Pass Rate",
      desc: "Automated test suites executed via native node:test verified all edge cases including corrupt payloads, missing IDs, and database disconnects."
    },
    {
      num: "02",
      title: "Fail-Fast Connection Safety",
      metric: "Zero Silent Failures",
      desc: "Immediate process termination on failed database handshake prevents the application from accepting requests into corrupt unpersisted memory states."
    },
    {
      num: "03",
      title: "Dynamic UTC Overdue Triage",
      metric: "Timezone-Drift Free",
      desc: "Calculating overdue thresholds dynamically against normalized UTC timestamps eliminated regional client clock drift errors."
    }
  ],

  resultsAndDecisions: {
    decisionsEnabled: [
      "Deployed live application on Render Free Web Service with automated deployment from GitHub.",
      "Established verified 52-test automated regression safety net.",
      "Integrated Neon Serverless Postgres with TLS encryption for cloud persistence."
    ],
    technicalLimitations: [
      "Recurring task automation (e.g. daily/weekly repetition) is planned for v2.",
      "Authentication is designed as a single-workspace architecture without multi-tenant team accounts."
    ]
  },

  techStack: [
    "Node.js",
    "Express.js",
    "JavaScript",
    "PostgreSQL",
    "Neon",
    "SQLite",
    "Render",
    "node:test"
  ]
};
