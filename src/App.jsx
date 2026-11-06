import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/hero/Hero';
import DataPipelineSection from './components/pipeline/DataPipelineSection';
import NovaCartImmersive from './components/projects/NovaCartImmersive';
import InteractiveCapabilityMap from './components/skills/InteractiveCapabilityMap';
import InsideTheDataPlayground from './components/playground/InsideTheDataPlayground';
import EditorialProjects from './components/projects/EditorialProjects';
import Certifications from './components/certifications/Certifications';
import AboutEditorial from './components/about/AboutEditorial';
import ContactEditorial from './components/contact/ContactEditorial';

// Deep-Dive Modal Case Studies
import NovaCartCaseStudy from './components/case-studies/NovaCartCaseStudy';
import ProductAnalyticsCaseStudy from './components/case-studies/ProductAnalyticsCaseStudy';
import DisasterReportingModal from './components/case-studies/DisasterReportingModal';
import SecondaryProjectModal from './components/case-studies/SecondaryProjectModal';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Hash route listener to allow direct link sharing (e.g., #novacart-details)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (
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
        setActiveCaseStudy(hash);
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
    <div className="min-h-screen bg-[#F7F7F3] text-gray-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Top Adaptive Sticky Navigation */}
      <Navbar />

      {/* Main Narrative Flow: The Data Experience */}
      <main className="flex-1">
        {/* Act I: Unforgettable Hero & Living Analytics Telemetry */}
        <Hero onExploreNovaCart={() => handleOpenCaseStudy('novacart')} />

        {/* Act II: The 6-Stage Transformation Engine */}
        <DataPipelineSection />

        {/* Act III: The Flagship Centerpiece (NovaCart Full-Width Experience) */}
        <NovaCartImmersive onOpenCaseStudy={handleOpenCaseStudy} />

        {/* Act IV: The Capability Web (Connected Skills Network) */}
        <InteractiveCapabilityMap />

        {/* Act V: Inside The Data (Technical Playground: Schema, Viz, & Rigor) */}
        <InsideTheDataPlayground />

        {/* Act VI: Editorial Project Case Studies (Tailored Bespoke Layouts) */}
        <EditorialProjects onOpenCaseStudy={handleOpenCaseStudy} />

        {/* Act VII: Verified Credentials & Foundations */}
        <Certifications />
        <AboutEditorial />

        {/* Act VIII: The Decisive Finish */}
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
        <SecondaryProjectModal projectId={activeCaseStudy} onClose={handleCloseCaseStudy} />
      )}
    </div>
  );
}
