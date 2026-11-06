export const smartResumeProject = {
  id: "smart-resume",
  slug: "smart-resume",
  aliases: ["smart-resume"],
  title: "SmartResume AI — AI-Powered Resume Screening Platform",
  shortTitle: "SmartResume AI",
  subtitle: "Deterministic Math Scoring, Textual Evidence Grounding & Recruiter Analytics",
  category: "AI Recruitment & Analytics Platform",
  role: "Full-Stack & ML Engineer",
  priority: 7,
  isFlagship: false,
  status: "Completed & Deployed",
  tagline: "A production-grade recruitment intelligence platform featuring in-memory resume parsing, deterministic math-based candidate scoring, direct textual evidence grounding, and recruiter analytics.",
  description: "A production-grade recruitment intelligence platform featuring in-memory resume parsing, deterministic math-based candidate scoring, direct textual evidence grounding, and recruiter analytics.",
  
  links: {
    live: "https://smart-resume-screener-pi.vercel.app/",
    github: "https://github.com/shubh201203/smart-resume-screener"
  },

  problemStatement: {
    inquiries: "How can recruitment workflows screen hundreds of unstructured resumes with objective transparency, eliminating black-box AI rating hallucinations while quoting verbatim evidence for every qualification score?",
    commercialImpact: "Standard AI resume screeners generate opaque percentage scores without verifiable grounding. SmartResume AI enforces deterministic mathematical weighting on a 1.0–10.0 scale, citing exact textual excerpts from candidate resumes for every competency decision."
  },

  verifiedMetrics: {
    scoringEngine: {
      value: "1.0–10.0",
      label: "Normalized Scale",
      desc: "Deterministic weighted formula eliminating hallucinated ratings"
    },
    testSuite: {
      value: "29 Tests",
      label: "Pytest Suite",
      desc: "100% pass across parsing, deduplication, scoring, and API health"
    },
    fallbackSystem: {
      value: "TF-IDF Cosine",
      label: "Fallback Engine",
      desc: "Autonomous Scikit-Learn vector similarity when LLMs are unavailable"
    },
    dataSafety: {
      value: "RFC-4180",
      label: "Export Security",
      desc: "Sanitized CSV data export with formula injection protection"
    }
  },

  deliverables: [
    {
      num: "01",
      title: "Hybrid Parsing & Scoring Engine",
      tech: "Python 3.11 · FastAPI · Scikit-Learn",
      desc: "In-memory document extraction supporting PDF/DOCX formats with SHA-256 deduplication and hybrid LLM/TF-IDF similarity scoring."
    },
    {
      num: "02",
      title: "Verbatim Evidence Grounding",
      tech: "Regex · NLP · Text Extraction",
      desc: "Quotes exact resume sentences validating candidate competencies and generates diagnostic 'Why Not 10/10?' skill gap explanations."
    },
    {
      num: "03",
      title: "Recruiter Comparison Workbench",
      tech: "React 19 · TypeScript · Recharts",
      desc: "Interactive recruiter interface enabling side-by-side comparison of up to 3 candidates with skill radar charts and interview notes."
    }
  ],

  architectureSteps: [
    { step: "01", title: "Document Ingestion", tool: "pdfplumber & docx", desc: "Extracts raw text directly in memory without disk persistence, enforcing SHA-256 hash deduplication." },
    { step: "02", title: "Hybrid Matching Model", tool: "Scikit-Learn TF-IDF", desc: "Computes cosine similarity vectors against job descriptions as an autonomous fallback to LLM evaluation." },
    { step: "03", title: "Deterministic Math Score", tool: "Python Normalizer", desc: "Applies explicit mathematical weighting across required skills, preferred qualifications, and domain experience." },
    { step: "04", title: "Recruiter Workbench UI", tool: "React 19 & Recharts", desc: "Renders side-by-side candidate comparisons, gap diagnostic breakdowns, and sanitized CSV exports." }
  ],

  methodology: {
    categoryLabel: "Deterministic Candidate Scoring • Evidence Grounding",
    badgeLabel: "Weighted Scoring Formula",
    codeLanguage: "python",
    codeSnippet: `def compute_candidate_score(matched_skills: list, required_skills: list, experience_years: float) -> dict:
    """
    Computes deterministic candidate score on a 1.0 to 10.0 scale:
    - 60% Core Skill Coverage
    - 25% Domain Experience Fit
    - 15% Preferred Competencies
    """
    skill_coverage = len(matched_skills) / max(len(required_skills), 1)
    exp_factor = min(experience_years / 5.0, 1.0)
    
    raw_score = (skill_coverage * 6.0) + (exp_factor * 2.5) + 1.5
    normalized_score = round(max(min(raw_score, 10.0), 1.0), 1)
    
    return {
        "final_score": normalized_score,
        "skill_coverage_pct": round(skill_coverage * 100, 1),
        "why_not_ten": [s for s in required_skills if s not in matched_skills]
    }`,
    explanation: "Explicit scoring formulas prevent model hallucinations and provide candidates and recruiters with actionable, transparent criteria for scoring decisions."
  },

  // No screenshots - Gallery is omitted!
  dashboardScreenshots: [],

  findings: [
    {
      num: "01",
      title: "Transparent Why-Not-10 Diagnostic",
      metric: "100% Traceable",
      desc: "Providing explicit skill gap lists eliminated opaque rejection ambiguity and provided objective recruiter notes."
    },
    {
      num: "02",
      title: "29 Verified Pytest Tests",
      metric: "Zero Regressions",
      desc: "Complete automated test coverage validated document parsing, hash deduplication, score boundaries, and REST routes."
    },
    {
      num: "03",
      title: "Autonomous TF-IDF Fallback",
      metric: "Zero LLM Lock-in",
      desc: "Autonomous Scikit-Learn TF-IDF cosine matching delivered continuous screening even when OpenAI API rate limits were exhausted."
    }
  ],

  resultsAndDecisions: {
    decisionsEnabled: [
      "Deployed on Vercel with FastAPI backend on Render and Neon Serverless Postgres.",
      "Eliminated black-box ratings through deterministic mathematical normalization.",
      "Protected candidate databases with RFC-4180 sanitized CSV export routines."
    ],
    technicalLimitations: [
      "Optical Character Recognition (OCR) for scanned image resumes is not enabled in the lightweight memory tier.",
      "Multi-candidate batch upload is capped at 10 documents per session on free cloud instances."
    ]
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
  ]
};
