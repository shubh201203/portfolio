'use client';

import React, { useState, useEffect } from 'react';
import CinematicIntro from '@/components/CinematicIntro';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import HowIWorkSequence from '@/components/animations/HowIWorkSequence';
import ProjectsSection from '@/components/projects/ProjectsSection';
import SkillsMatrix from '@/components/skills/SkillsMatrix';
import AboutSection from '@/components/about/AboutSection';
import ToolkitSection from '@/components/skills/ToolkitSection';
import CertificationsSection from '@/components/certifications/CertificationsSection';
import ContactSection from '@/components/contact/ContactSection';

// Deep-Dive Modal Case Studies
import NovaCartCaseStudy from '@/components/case-studies/NovaCartCaseStudy';
import ProductAnalyticsCaseStudy from '@/components/case-studies/ProductAnalyticsCaseStudy';
import DisasterReportingModal from '@/components/case-studies/DisasterReportingModal';
import SecondaryProjectModal from '@/components/case-studies/SecondaryProjectModal';

export default function Home() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Hash route listener for direct case-study linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (
        hash === 'novacart' ||
        hash === 'novacart-modal' ||
        hash === 'product-analytics' ||
        hash === 'disaster-reporting' ||
        hash === 'smart-resume' ||
        hash === 'wardrobewhiz' ||
        hash === 'shortx' ||
        hash === 'todo' ||
        hash === 'emotion-music' ||
        hash === 'mental-health-detection'
      ) {
        setActiveCaseStudy(hash === 'novacart-modal' ? 'novacart' : hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCaseStudy = (id) => {
    setActiveCaseStudy(id);
    window.location.hash = '#' + id;
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudy(null);
    history.pushState('', document.title, window.location.pathname + window.location.search);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F5F4] flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white">
      
      {/* 1. Cinematic Intro Animation (< 2s, skip path, accessible) */}
      <CinematicIntro />

      {/* Top Sticky Technical Navigation */}
      <Navbar />

      {/* Main Narrative Sequence */}
      <main className="flex-1">
        
        {/* 2. Hero: "I turn complex data into decisions." */}
        <Hero 
          onExploreWork={() => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExplorePipeline={() => {
            const el = document.getElementById('how-it-works');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Subtle Moving Marquee of Real Tools & Domains */}
        <Marquee />

        {/* 6. Pinned Scroll-Driven "How I Work" Sequence (Define → Collect → Model → Analyze → Communicate → Decide) */}
        <HowIWorkSequence />

        {/* 4 & 5. Large Featured-Project Exhibition (NovaCart & BitePulse with Problem → Data → Approach → Insight → Impact) */}
        <ProjectsSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 7. Interactive Skills Matrix Connecting Skills to Projects */}
        <SkillsMatrix onOpenProject={handleOpenCaseStudy} />

        {/* 8. Genuine About & Education (VIT-AP CSE & IIT Madras Data Science, Zero Speculation) */}
        <AboutSection />

        {/* Toolkit Section: The Tools Behind The Thinking */}
        <ToolkitSection />

        {/* 8. Genuine Certifications Section (4 Completed Oct 2026, 1 In Progress) */}
        <CertificationsSection />

        {/* 9. Strong Closing Contact Section */}
        <ContactSection />

      </main>

      {/* Shared-Transition Interactive Case Study Modals */}
      {activeCaseStudy === 'novacart' && (
        <NovaCartCaseStudy onClose={handleCloseCaseStudy} />
      )}
      {activeCaseStudy === 'product-analytics' && (
        <ProductAnalyticsCaseStudy onClose={handleCloseCaseStudy} />
      )}
      {activeCaseStudy === 'disaster-reporting' && (
        <DisasterReportingModal onClose={handleCloseCaseStudy} />
      )}
      {(activeCaseStudy === 'smart-resume' ||
        activeCaseStudy === 'wardrobewhiz' ||
        activeCaseStudy === 'shortx' ||
        activeCaseStudy === 'todo' ||
        activeCaseStudy === 'emotion-music' ||
        activeCaseStudy === 'mental-health-detection') && (
        <SecondaryProjectModal
          projectId={activeCaseStudy}
          onClose={handleCloseCaseStudy}
        />
      )}

    </div>
  );
}
