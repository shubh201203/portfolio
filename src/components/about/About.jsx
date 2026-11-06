import React from 'react';
import { 
  GraduationCap, 
  BarChart3, 
  Database, 
  Cpu, 
  Code2, 
  BrainCircuit, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { achievements } = portfolioData;

  const domains = [
    {
      title: 'Data Analytics',
      desc: 'Translating messy operational logs into diagnostic and prescriptive insights via Python, Pandas, cohort retention matrices, and exploratory statistical modeling.',
      icon: BarChart3,
      badge: 'Core Focus'
    },
    {
      title: 'Business Intelligence',
      desc: 'Designing executive reporting suites in Power BI with complex DAX measures, time-intelligence calculations, and automated ETL data refresh pipelines.',
      icon: Database,
      badge: 'Core Focus'
    },
    {
      title: 'Analytics Engineering',
      desc: 'Architecting dimensional star-schema data marts, managing surrogate keys, grain isolation, deterministic key recovery algorithms, and SQL data reconciliation.',
      icon: Cpu,
      badge: 'Architecture'
    },
    {
      title: 'Data Science & Applied AI',
      desc: 'Formulating machine learning pipelines, predictive customer churn modeling, TF-IDF NLP feature extraction, and affective computer vision recommendation systems.',
      icon: BrainCircuit,
      badge: 'Modeling'
    },
    {
      title: 'Full-Stack Web Development',
      desc: 'Developing high-throughput decoupled REST APIs in FastAPI / Node.js and building responsive, accessible analytical frontends in React 19 and TypeScript.',
      icon: Code2,
      badge: 'Production'
    }
  ];

  return (
    <section id="about" className="py-24 border-b border-gray-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Profile & Technical Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
            About Me & Technical Domains
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl">
            Computer Science undergraduate and data analyst specializing in dimensional modeling, advanced SQL analysis, and executive business intelligence.
          </p>
        </div>

        {/* Narrative & Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-700 text-base leading-relaxed">
            <p>
              I am a data analyst and computer science undergraduate passionate about solving strategic commercial challenges through data. My academic foundation bridges core computer science at <strong className="text-gray-950 font-semibold">VIT-AP University</strong> with specialized quantitative coursework in data science, statistics, and business management from the <strong className="text-gray-950 font-semibold">Indian Institute of Technology Madras</strong>.
            </p>
            <p>
              I specialize in the complete analytics life cycle: ingesting disparate, messy operational event streams, executing deterministic data hygiene routines in Python, engineering robust star-schema relational warehouses in PostgreSQL 18, and formulating complex SQL queries to isolate revenue leakages, customer retention decay, and category margin dilution.
            </p>
            <p>
              On the business intelligence front, I build high-performance Power BI dashboards backed by validated DAX measures that reconcile to 100% mathematical precision against database figures. I hold four industry credentials completed in October 2026—Microsoft Certified: Power BI Data Analyst Associate (PL-300), Fabric Analytics Engineer Associate (DP-600), Azure Data Fundamentals (DP-900), and Google Data Practitioner Associate—and am actively pursuing the Google Data Analytics Professional Certificate.
            </p>

            {/* Academic Credentials Box */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Verified Academic Credentials</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#F7F7F3] border border-gray-200 space-y-1">
                  <div className="text-xs font-bold text-gray-950">VIT-AP University</div>
                  <div className="text-xs text-gray-700">B.Tech in Computer Science & Engineering (Core)</div>
                  <div className="text-[11px] font-mono text-gray-500 pt-1">2023–2027 • Amaravati, AP</div>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F7F3] border border-blue-200/80 space-y-1">
                  <div className="text-xs font-bold text-gray-950">Indian Institute of Technology Madras</div>
                  <div className="text-xs text-gray-700">BS Degree in Data Science & Management</div>
                  <div className="text-[11px] font-mono text-emerald-700 font-semibold pt-1">Foundational Level — Pursuing</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-center justify-between font-mono">
                <span>Secondary & Senior Secondary Records:</span>
                <span className="font-bold text-gray-900">Class X: 95% | Class XII: 78%</span>
              </div>
            </div>
          </div>

          {/* Profile Card & Achievements Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Profile Card */}
            <div className="rounded-2xl border border-gray-200 bg-[#F7F7F3] p-5 shadow-card space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-subtle shrink-0">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                    alt="Shubh Sharma"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-950">Shubh Sharma</h3>
                  <div className="text-xs text-blue-600 font-semibold">Data Analyst & BI Candidate</div>
                  <div className="text-[11px] text-gray-500 font-mono mt-0.5">VIT-AP & IIT Madras</div>
                  <div className="inline-block mt-1 text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
                    4x Microsoft & Google Certified (Oct 2026)
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200/80 space-y-2">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">
                  Key Honors & Expo Achievements
                </div>

                {achievements.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-gray-200 text-xs space-y-1">
                    <div className="font-bold text-gray-900 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[11px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Working Philosophy Card */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-950 space-y-2">
              <div className="font-bold uppercase tracking-wider font-mono text-[10px] text-blue-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Analytical Rigor Standard</span>
              </div>
              <p className="leading-relaxed text-blue-900">
                "Zero speculative numbers. Every metric published in my work is backed by automated tests, grain-aware database schemas, and mathematical reconciliation between SQL sums and DAX measures."
              </p>
            </div>

          </div>

        </div>

        {/* 5 Core Technical Domain Pillars */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-4">
            Five Core Technical Competency Pillars
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div
                  key={domain.title}
                  className="p-5 rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-200/60">
                        {domain.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-gray-950">
                      {domain.title}
                    </h4>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
