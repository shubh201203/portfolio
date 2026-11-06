import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/hero/Hero';
import AboutEditorial from './components/about/AboutEditorial';
import ProjectsExhibition from './components/projects/ProjectsExhibition';
import Toolkit from './components/skills/Toolkit';
import CertificationsEditorial from './components/certifications/CertificationsEditorial';
import ContactEditorial from './components/contact/ContactEditorial';

// Deep-Dive Modal Case Studies
import NovaCartCaseStudy from './components/case-studies/NovaCartCaseStudy';
import ProductAnalyticsCaseStudy from './components/case-studies/ProductAnalyticsCaseStudy';
import DisasterReportingModal from './components/case-studies/DisasterReportingModal';
import SecondaryProjectModal from './components/case-studies/SecondaryProjectModal';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Hash route listener to allow direct link sharing
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
    <div className="min-h-screen bg-[#F6F4ED] text-[#111215] flex flex-col justify-between selection:bg-[#D8F243] selection:text-[#111215]">
      
      {/* Sticky Editorial Navigation */}
      <Navbar />

      {/* Main Narrative Flow: Shubh Sharma — Data × Design × Technology */}
      <main className="flex-1">
        {/* The Hero: I MAKE DATA MAKE SENSE. */}
        <Hero onExploreWork={() => {
          const el = document.getElementById('work');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Section 01: INTRODUCTION / ABOUT */}
        <AboutEditorial />

        {/* Section 02: SELECTED WORK (01 / 06 Exhibition) */}
        <ProjectsExhibition onOpenCaseStudy={handleOpenCaseStudy} />

        {/* Section 03: THE TOOLKIT (The Tools Behind The Thinking) */}
        <Toolkit />

        {/* Section 04: CREDENTIALS (Verified Certifications) */}
        <CertificationsEditorial />

        {/* Section 05: CONTACT (Let's Make Something Meaningful) */}
        <ContactEditorial />
      </main>

      {/* Deep-Dive Interactive Case Study Overlays */}
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
