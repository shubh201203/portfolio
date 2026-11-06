import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck
} from 'lucide-react';

export default function AboutEditorial() {

  const disciplines = [
    {
      title: "Data Analytics",
      description: "Translating complex transactional event streams into actionable diagnostic and prescriptive metrics using Python, cohort retention matrices, and exploratory statistical modeling."
    },
    {
      title: "Business Intelligence",
      description: "Engineering executive decision suites in Power BI with 30+ validated DAX measures, automated semantic relationships, and 100% mathematical reconciliation against database figures."
    },
    {
      title: "Analytics Engineering",
      description: "Architecting dimensional star-schema relational data marts in PostgreSQL 18 with explicit grain isolation, surrogate keys, and deterministic customer key recovery."
    },
    {
      title: "Data Science & Applied AI",
      description: "Implementing deterministic scoring heuristics, PuLP linear programming for crisis logistics, and lightweight computer vision inference models for consumer platforms."
    }
  ];

  return (
    <section id="introduction" className="py-24 sm:py-32 bg-[#F5F3EC] text-[#0A0A0C] relative border-b border-[#0A0A0C]/10 overflow-hidden">
      
      {/* Subtle Editorial Background Grid */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Tracker Header */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#0A0A0C]/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="font-bold tracking-wider uppercase text-[#0A0A0C]">EXPERIENCE 02 // THE INTRODUCTION</span>
          </div>
          <span className="text-[#0A0A0C]/50">QUANTITATIVE FOUNDATIONS &amp; MANIFESTO</span>
        </div>

        {/* Oversized Editorial Manifesto Statement */}
        <div className="mb-16 lg:mb-20 space-y-6">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#1D4ED8] font-bold">
            The Analytical Philosophy
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-[#0A0A0C] leading-[1.02] max-w-5xl">
            I WORK AT THE INTERSECTION OF <span className="underline decoration-[#D8F243] decoration-8 underline-offset-4">DATA</span>, ANALYTICAL RIGOR AND DIGITAL CRAFT.
          </h2>

          <p className="text-lg sm:text-2xl font-display text-[#0A0A0C]/80 max-w-3xl leading-relaxed">
            I believe modern data work requires both deep quantitative discipline—grain awareness, dimensional modeling, mathematical reconciliation—and the product intuition to present complex information clearly.
          </p>
        </div>

        {/* Asymmetric Split Layout: Story Narrative + Academic Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#0A0A0C]/80 text-base sm:text-lg leading-relaxed">
            <p>
              My academic background bridges core computer science at <strong className="text-[#0A0A0C] font-bold">VIT-AP University</strong> with rigorous quantitative coursework in statistics, algorithms, and business management through the <strong className="text-[#0A0A0C] font-bold">Indian Institute of Technology Madras</strong> BS Degree in Data Science &amp; Applications.
            </p>
            <p>
              Rather than treating data as passive spreadsheets, I engineer deterministic end-to-end analytics lifecycles: from raw dirty event logs ingested through Python, into high-performance <strong className="text-[#0A0A0C] font-bold">PostgreSQL 18</strong> star schemas with surrogate keys and grain isolation, through to validated <strong className="text-[#0A0A0C] font-bold">Power BI</strong> dashboards where every measure reconciles to the exact rupee.
            </p>
            <p>
              I hold four completed professional credentials awarded in October 2026—<strong className="text-[#0A0A0C] font-bold">Microsoft Certified: Power BI Data Analyst Associate (PL-300)</strong>, <strong className="text-[#0A0A0C] font-bold">Fabric Analytics Engineer Associate (DP-600)</strong>, <strong className="text-[#0A0A0C] font-bold">Azure Data Fundamentals (DP-900)</strong>, and <strong className="text-[#0A0A0C] font-bold">Google Data Practitioner Associate</strong>—while actively completing the Google Data Analytics Professional Certificate.
            </p>

            {/* Academic Track Record (Factual, Verified, NO CGPA) */}
            <div className="pt-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#0A0A0C]/60 font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#1D4ED8]" />
                <span>Verified Academic Degrees</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#0A0A0C]/10 shadow-sm space-y-1.5">
                  <div className="text-sm font-bold text-[#0A0A0C] font-display">VIT-AP University</div>
                  <div className="text-xs text-[#0A0A0C]/70">B.Tech in Computer Science &amp; Engineering (Core)</div>
                  <div className="text-xs font-mono text-[#0A0A0C]/50 pt-1">2023–2027 • Amaravati, AP</div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#1D4ED8]/30 shadow-sm space-y-1.5">
                  <div className="text-sm font-bold text-[#0A0A0C] font-display">Indian Institute of Technology Madras</div>
                  <div className="text-xs text-[#0A0A0C]/70">BS Degree in Data Science &amp; Management</div>
                  <div className="text-xs font-mono text-[#1D4ED8] font-bold pt-1">Foundational Level — Pursuing</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#0A0A0C]/10 flex flex-wrap items-center justify-between text-xs font-mono text-[#0A0A0C]/70 shadow-sm">
                <span>Secondary &amp; Senior Secondary Board Records:</span>
                <span className="font-bold text-[#0A0A0C]">Class X: 95% &nbsp;|&nbsp; Class XII: 78%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Disciplines Grid & Rigor Standard */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Discipline Breakdown Cards */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#0A0A0C]/60 font-bold">
                Core Competency Clusters
              </div>

              {disciplines.map((d, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#0A0A0C]/10 shadow-sm hover:border-[#1D4ED8]/50 transition-all space-y-1.5 group"
                >
                  <div className="flex items-center justify-between text-sm font-bold text-[#0A0A0C] font-display">
                    <span>{d.title}</span>
                    <span className="text-xs font-mono text-[#1D4ED8] group-hover:translate-x-1 transition-transform">0{idx + 1} →</span>
                  </div>
                  <p className="text-xs text-[#0A0A0C]/70 leading-relaxed font-normal">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Zero Speculation Pledge */}
            <div className="p-6 rounded-2xl bg-[#08090C] text-white border border-white/10 space-y-2.5 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D8F243] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#D8F243]" />
                <span>Zero Speculation Standard</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Every metric published across my portfolio is backed by automated tests, grain-aware database schemas, and mathematical reconciliation between SQL sums and DAX measures. No fabricated numbers, ever."
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
