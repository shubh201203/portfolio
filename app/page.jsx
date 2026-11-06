'use client';

import React, { useEffect } from 'react';
import CinematicIntro from '@/components/CinematicIntro';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import HowIWorkSequence from '@/components/animations/HowIWorkSequence';
import ProjectsSection from '@/components/projects/ProjectsSection';
import AboutSection from '@/components/about/AboutSection';
import SkillsMatrix from '@/components/skills/SkillsMatrix';
import ToolkitSection from '@/components/skills/ToolkitSection';
import EducationCredentialsSection from '@/components/education/EducationCredentialsSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/common/Footer';

export default function Home() {
  // Listen for hash route navigation (e.g. #novacart, #product-analytics)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      const validProjects = [
        'novacart',
        'product-analytics',
        'bitepulse',
        'disaster-reporting',
        'smart-resume',
        'wardrobewhiz',
        'shortx',
        'todo',
        'emotion-music',
        'mental-health-detection'
      ];
      if (validProjects.includes(hash)) {
        const targetSlug = hash === 'bitepulse' ? 'product-analytics' : hash;
        window.location.href = `${window.location.origin}/portfolio/projects/${targetSlug}/`;
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCaseStudy = (id) => {
    const targetSlug = id === 'bitepulse' ? 'product-analytics' : id;
    window.location.href = `${window.location.origin}/portfolio/projects/${targetSlug}/`;
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

        {/* 4. Pinned Scroll-Driven "How I Work" Sequence (Define → Collect → Model → Analyze → Communicate → Decide) */}
        <HowIWorkSequence />

        {/* 5. Large Featured-Project Exhibition (NovaCart & BitePulse with Problem → Data → Approach → Insight → Impact) */}
        <ProjectsSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 6. Genuine About & Analytical Foundations (Dual Academic Track & Zero Speculation Standard) */}
        <AboutSection />

        {/* 7. Interactive Skills Matrix Connecting Skills to Projects */}
        <SkillsMatrix onOpenProject={handleOpenCaseStudy} />

        {/* 8. Toolkit Section: The Tools Behind The Thinking */}
        <ToolkitSection />

        {/* 9. Education & Credentials (VIT-AP CSE, IIT Madras Data Science, 4 Completed Oct 2026 Certs, 1 In Progress) */}
        <EducationCredentialsSection />

        {/* 10. Strong Closing Contact Section */}
        <ContactSection />

      </main>

      {/* Reusable Portfolio Footer */}
      <Footer />

    </div>
  );
}