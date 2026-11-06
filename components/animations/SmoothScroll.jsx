'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // 1. Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 2. Initialize Lenis instance
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      prevent: (node) => {
        // Allow native scrolling inside any element with data-lenis-prevent
        return Boolean(node?.hasAttribute?.('data-lenis-prevent') || node?.closest?.('[data-lenis-prevent]'));
      },
    });

    lenis.on('scroll', ScrollTrigger.update);
    window.__lenis = lenis;

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      delete window.__lenis;
      lenis.destroy();
      gsap.ticker.remove(tickerCb);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Handle route changes: reset scroll position and clean up old ScrollTriggers
  useEffect(() => {
    // Only kill ScrollTriggers on actual page transitions, not initial component mount
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }

      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.clearScrollMemory();

      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { immediate: true });
          window.__lenis.resize();
        }
      }
    }

    // Refresh layout calculations after DOM settles
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.__lenis) {
        window.__lenis.resize();
      }
    }, 150);

    return () => clearTimeout(refreshTimer);
  }, [pathname]);

  return <>{children}</>;
}