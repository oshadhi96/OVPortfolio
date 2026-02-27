import { useEffect } from "react";
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
