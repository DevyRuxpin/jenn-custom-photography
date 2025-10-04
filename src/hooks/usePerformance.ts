import { useEffect, useState } from 'react';
import { trackPerformance } from '../utils/analytics';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
}

export const usePerformance = (pageName: string) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if Performance Observer is supported
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    // Track basic page load time
    const trackPageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        trackPerformance.pageLoad(pageName, loadTime);
        
        setMetrics(prev => ({
          ...prev,
          pageLoadTime: loadTime,
        } as PerformanceMetrics));
      }
    };

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[0]?.startTime || 0;
        setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp } as PerformanceMetrics));
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1]?.startTime || 0;
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lcp } as PerformanceMetrics));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0] as any; // Type assertion for modern PerformanceEntry
        const fid = firstEntry?.processingStart - firstEntry?.startTime || 0;
        setMetrics(prev => ({ ...prev, firstInputDelay: fid } as PerformanceMetrics));
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue } as PerformanceMetrics));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Total Blocking Time (TBT)
      const tbtObserver = new PerformanceObserver((list) => {
        let totalBlockingTime = 0;
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            totalBlockingTime += entry.duration - 50;
          }
        }
        setMetrics(prev => ({ ...prev, totalBlockingTime } as PerformanceMetrics));
      });
      tbtObserver.observe({ entryTypes: ['longtask'] });

      // Cleanup observers
      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        tbtObserver.disconnect();
      };
    };

    // Wait for page to load before tracking
    if (document.readyState === 'complete') {
      trackPageLoad();
      const cleanup = trackWebVitals();
      return cleanup;
    } else {
      window.addEventListener('load', () => {
        trackPageLoad();
        const cleanup = trackWebVitals();
        return cleanup;
      });
    }
  }, [pageName]);

  return { metrics, isSupported };
};

// Hook for tracking image load performance
export const useImagePerformance = () => {
  const trackImageLoad = (imageUrl: string, startTime: number) => {
    const loadTime = performance.now() - startTime;
    trackPerformance.imageLoad(imageUrl, loadTime);
  };

  return { trackImageLoad };
};

// Hook for monitoring bundle size and performance
export const useBundleAnalysis = () => {
  const [bundleSize, setBundleSize] = useState<number | null>(null);

  useEffect(() => {
    // This would typically be done at build time
    // For now, we'll estimate based on loaded resources
    const estimateBundleSize = () => {
      const resources = performance.getEntriesByType('resource');
      const scriptSize = resources
        .filter((resource: any) => resource.name.includes('.js'))
        .reduce((total: number, resource: any) => total + (resource.transferSize || 0), 0);
      
      setBundleSize(scriptSize);
    };

    if (document.readyState === 'complete') {
      estimateBundleSize();
    } else {
      window.addEventListener('load', estimateBundleSize);
    }
  }, []);

  return { bundleSize };
};
