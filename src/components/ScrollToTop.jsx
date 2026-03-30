import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets window scroll on every route change (pathname).
 * Prevents half-scrolled demo pages when navigating from the main site or between demos.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.documentElement.dataset.scrollContext = pathname.startsWith("/demos/") ? "demo" : "site";
  }, [pathname]);

  useEffect(() => {
    if (hash) return; // Do not scroll to top if there is a hash in the URL

    const run = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    run();
    const id = requestAnimationFrame(run);
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
