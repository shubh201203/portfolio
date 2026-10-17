import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import ProjectsSection from './components/projects/ProjectsSection';
import Certifications from './components/certifications/Certifications';
import Achievements from './components/achievements/Achievements';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

// Case Studies & Modals
import NovaCartCaseStudy from './components/case-studies/NovaCartCaseStudy';
import ProductAnalyticsCaseStudy from './components/case-studies/ProductAnalyticsCaseStudy';
import DisasterReportingModal from './components/case-studies/DisasterReportingModal';
import SecondaryProjectModal from './components/case-studies/SecondaryProjectModal';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Hash route listener to allow direct link sharing (e.g., #novacart)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (
        hash === 'novacart' ||
        hash === 'product-analytics' ||
        hash === 'disaster-reporting' ||
        hash === 'wardrobewhiz' ||
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
    <div className="min-h-screen bg-[#F7F7F3] text-gray-900 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      {/* Top Fixed Navigation */}
      <Navbar onOpenCaseStudy={handleOpenCaseStudy} />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        <Hero onExploreNovaCart={() => handleOpenCaseStudy('novacart')} />
        <About />
        <Skills />
        <ProjectsSection onOpenCaseStudy={handleOpenCaseStudy} />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Overlays */}
      {activeCaseStudy === 'novacart' && (
        <NovaCartCaseStudy onClose={handleCloseCaseStudy} />
      )}
      {activeCaseStudy === 'product-analytics' && (
        <ProductAnalyticsCaseStudy onClose={handleCloseCaseStudy} />
      )}
      {activeCaseStudy === 'disaster-reporting' && (
        <DisasterReportingModal onClose={handleCloseCaseStudy} />
      )}
      {(activeCaseStudy === 'wardrobewhiz' || activeCaseStudy === 'emotion-music' || activeCaseStudy === 'mental-health-detection') && (
        <SecondaryProjectModal projectId={activeCaseStudy} onClose={handleCloseCaseStudy} />
      )}
    </div>
  );
}
