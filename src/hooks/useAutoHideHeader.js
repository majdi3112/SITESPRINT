import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Fixed header: hide on scroll down, show on scroll up or near page top.
 * @param {{ pinnedOpen?: boolean }} options — when true (e.g. mobile menu open), header stays visible
 */
export function useAutoHideHeader(options = {}) {
  const { pinnedOpen = false } = options;
  const headerRef = useRef(null);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const reduceMotion = useRef(false);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setSpacerHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reduceMotion.current = mq.matches;
      if (mq.matches) setHidden(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (pinnedOpen) {
      setHidden(false);
      return;
    }

    const TOP_ALWAYS_VISIBLE = 48;
    const DELTA_THRESHOLD = 8;

    const onScroll = () => {
      if (reduceMotion.current) {
        setHidden(false);
        return;
      }
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop;
        if (reduceMotion.current) {
          setHidden(false);
          lastY.current = y;
          ticking.current = false;
          return;
        }
        const delta = y - lastY.current;

        if (y <= TOP_ALWAYS_VISIBLE) {
          setHidden(false);
        } else if (delta > DELTA_THRESHOLD) {
          setHidden(true);
        } else if (delta < -DELTA_THRESHOLD) {
          setHidden(false);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    lastY.current = window.scrollY || document.documentElement.scrollTop;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pinnedOpen]);

  const isHidden = !pinnedOpen && hidden;

  return { headerRef, spacerHeight, isHidden };
}
