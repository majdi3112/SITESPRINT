import { useAutoHideHeader } from "../hooks/useAutoHideHeader";

const spacerFallback = "min-h-[7.5rem] lg:min-h-[6.75rem]";

/**
 * Demo context strip + site header as one fixed unit; hides on scroll down.
 */
export default function DemoTopChrome({ mobileMenuOpen, children }) {
  const { headerRef, spacerHeight, isHidden } = useAutoHideHeader({ pinnedOpen: mobileMenuOpen });

  return (
    <>
      <div
        aria-hidden
        className={spacerHeight ? "shrink-0" : `shrink-0 ${spacerFallback}`}
        style={spacerHeight ? { height: spacerHeight } : undefined}
      />
      <div
        id="site-header"
        ref={headerRef}
        className={`fixed left-0 right-0 top-0 z-[100] isolate transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
          isHidden ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
