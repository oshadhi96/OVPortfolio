import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-RY83HXZMZB";

// Initialize GA4 once at module level
if (!window.GA_INITIALIZED) {
  ReactGA.initialize(MEASUREMENT_ID);
  window.GA_INITIALIZED = true;
}

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname + location.search + location.hash;

    ReactGA.send({
      hitType: "pageview",
      page,
      title: document.title,
    });
  }, [location]);

  return null;
}

/**
 * Hook — fires a GA4 event once when the referenced element scrolls into view.
 *
 * Usage:
 *   const ref = useTrackSectionView("selected_work_section_viewed");
 *   <section ref={ref} ...>
 */
export function useTrackSectionView(eventName, extraParams = {}) {
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          ReactGA.event(eventName, {
            page_path: window.location.pathname,
            ...extraParams,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }, // fires when 30 % of the section is visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eventName]);

  return ref;
}

/**
 * Helper — call this in an onClick handler on any work card.
 *
 * Usage:
 *   <a onClick={() => trackWorkCardClick("IFS AI Case Study", "/work/ifs-ai")}>
 */
export function trackWorkCardClick(cardTitle, cardUrl) {
  ReactGA.event("selected_work_card_clicked", {
    card_title: cardTitle,
    card_url: cardUrl,
    page_path: window.location.pathname,
  });
}
