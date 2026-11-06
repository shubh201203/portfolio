import React from 'react';
import { 
  GraduationCap, 
  Star,
  Trophy,
  ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function AboutEditorial() {
  const { achievements } = portfolioData;

  return (
    <section id="about" className="py-24 border-b border-gray-200/80 bg-[#F7F7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Profile &amp; Quantitative Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            ABOUT SHUBH SHARMA
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
            Computer science engineering candidate and quantitative analyst bridging core systems programming with advanced data modeling, relational warehousing, and business intelligence.
          </p>
        </div>

        {/* Narrative & Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-700 text-base leading-relaxed">
            <p>
              I am a data analyst and computer science undergraduate passionate about solving complex commercial challenges through data. My academic foundation bridges core computer science at <strong className="text-gray-950 font-semibold">VIT-AP University</strong> with rigorous quantitative coursework in data science, statistics, and business management from the <strong className="text-gray-950 font-semibold">Indian Institute of Technology Madras</strong>.
            </p>
            <p>
              I specialize in the complete analytics life cycle: ingesting disparate, messy operational event streams, executing deterministic data hygiene routines in Python, engineering robust star-schema relational warehouses in PostgreSQL 18, and formulating complex SQL queries to isolate revenue leakages, customer retention decay, and category margin dilution.
            </p>
            <p>
              On the business intelligence front, I build high-performance Power BI dashboards backed by validated DAX measures that reconcile to 100% mathematical precision against database figures. I hold four industry credentials completed in October 2026—<strong className="text-gray-950 font-semibold">Microsoft Certified: Power BI Data Analyst Associate (PL-300)</strong>, <strong className="text-gray-950 font-semibold">Fabric Analytics Engineer Associate (DP-600)</strong>, <strong className="text-gray-950 font-semibold">Azure Data Fundamentals (DP-900)</strong>, and <strong className="text-gray-950 font-semibold">Google Data Practitioner Associate</strong>—and am actively pursuing the Google Data Analytics Professional Certificate.
            </p>

            {/* Academic Credentials Box */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-500 font-bold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Verified Academic Credentials</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-subtle space-y-1">
                  <div className="text-xs font-bold text-gray-950">VIT-AP University</div>
                  <div className="text-xs text-gray-700">B.Tech in Computer Science &amp; Engineering (Core)</div>
                  <div className="text-[11px] font-mono text-gray-500 pt-1">2023–2027 • Amaravati, AP</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-blue-200 shadow-subtle space-y-1">
                  <div className="text-xs font-bold text-gray-950">Indian Institute of Technology Madras</div>
                  <div className="text-xs text-gray-700">BS Degree in Data Science &amp; Management</div>
                  <div className="text-[11px] font-mono text-emerald-700 font-semibold pt-1">Foundational Level — Pursuing</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-xs text-gray-600 flex items-center justify-between font-mono shadow-subtle">
                <span>Secondary &amp; Senior Secondary Records:</span>
                <span className="font-bold text-gray-900">Class X: 95% | Class XII: 78%</span>
              </div>
            </div>
          </div>

          {/* Profile Card & Honors Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Candidate Profile Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-card space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-card shrink-0 ring-1 ring-gray-200">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                    alt="Shubh Sharma"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-950">Shubh Sharma</h3>
                  <div className="text-xs text-blue-700 font-semibold font-mono">Data Analyst | BI &amp; Analytics</div>
                  <div className="text-[11px] text-gray-500 font-mono mt-0.5">VIT-AP &amp; IIT Madras</div>
                  <div className="inline-block mt-2 text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
                    4x Microsoft &amp; Google Certified (Oct 2026)
                  </div>
                </div>
              </div>

              {/* Verified Honors */}
              <div className="pt-4 border-t border-gray-100 space-y-2.5">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                  Recognitions &amp; Competitions
                </div>

                {achievements.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
                    <div className="font-bold text-gray-900 flex items-center gap-1.5">
                      {idx === 0 ? <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-100" /> : <Trophy className="w-3.5 h-3.5 text-blue-600" />}
                      <span>{item.title}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[11px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytical Rigor Standard Callout */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 space-y-2 shadow-subtle">
              <div className="font-bold uppercase tracking-wider font-mono text-[11px] text-blue-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Zero Speculation Standard</span>
              </div>
              <p className="leading-relaxed text-blue-900">
                "Every metric published across my portfolio is backed by automated tests, grain-aware database schemas, and mathematical reconciliation between SQL sums and DAX measures. No fabricated numbers, ever."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
