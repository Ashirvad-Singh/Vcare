import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const RouteScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    // If there is an anchor hash on the URL, let it scroll to that element
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el as HTMLElement, { immediate: true });
        } else {
          el.scrollIntoView({ behavior: 'auto' });
        }
        return;
      }
    }

    // Always reset immediately to top (0, 0) for every page change
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search, hash]);

  // Secondary guarantee after layout rendering
  useEffect(() => {
    if (!hash) {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, search, hash]);

  return null;
};
