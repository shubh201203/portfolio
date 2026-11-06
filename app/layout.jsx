import './globals.css';
import SmoothScroll from '@/components/animations/SmoothScroll';
import SpaceParticleBackground from '@/components/space/SpaceParticleBackground';
import SpaceScrollRail from '@/components/space/SpaceScrollRail';

export const metadata = {
  title: 'Shubh Sharma — Data Analyst | From Raw Data to Decisions',
  description: 'Turning complex raw data into decision-grade business intelligence, analytical SQL, star-schema warehouses, and high-reconciliation executive reporting suites.',
  keywords: [
    'Data Analyst',
    'BI Analyst',
    'Analytics Engineer',
    'SQL',
    'PostgreSQL 18',
    'Power BI',
    'Python',
    'DAX',
    'Star Schema',
    'Shubh Sharma'
  ],
  authors: [{ name: 'Shubh Sharma' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('shubh_portfolio_intro_seen') === 'true') {
                  document.documentElement.classList.add('intro-seen');
                }
                window.addEventListener('keydown', function(e) {
                  if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
                    try { sessionStorage.setItem('shubh_portfolio_intro_seen', 'true'); } catch(_) {}
                    document.documentElement.classList.add('intro-seen');
                    document.body.style.overflow = '';
                    var el = document.querySelector('[data-intro="true"]');
                    if (el) el.style.display = 'none';
                  }
                });
              } catch(_) {}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080A10] text-[#F1F3F7] antialiased selection:bg-blue-600 selection:text-white relative">
        <SpaceParticleBackground />
        <SmoothScroll>{children}</SmoothScroll>
        <SpaceScrollRail />
      </body>
    </html>
  );
}
