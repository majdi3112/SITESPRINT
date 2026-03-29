import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { useAutoHideHeader } from "../hooks/useAutoHideHeader";

const sections = [
  { id: "waarom", label: "Waarom" },
  { id: "diensten", label: "Diensten" },
  { id: "demos", label: "Demo's" },
  { id: "werkwijze", label: "Werkwijze" },
  { id: "contact", label: "Contact" }
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const { headerRef, spacerHeight, isHidden } = useAutoHideHeader({ pinnedOpen: open });

  useEffect(() => {
    if (!isHome) return;
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  function goSection(id) {
    setOpen(false);
    if (isHome) {
      scrollToId(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  return (
    <>
      <div
        aria-hidden
        className={spacerHeight ? "shrink-0" : "min-h-[4.25rem] shrink-0 sm:min-h-[4.5rem]"}
        style={spacerHeight ? { height: spacerHeight } : undefined}
      />
      <header
        ref={headerRef}
        className={`fixed left-0 right-0 top-0 z-50 border-b border-slate-700/80 bg-void/95 backdrop-blur-md transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
          isHidden ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          to="/"
          className="transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          onClick={() => setOpen(false)}
        >
          <Logo size="md" variant="dark" />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Hoofdnavigatie">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => goSection(id)}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                active === id
                  ? "bg-slate-800 text-cyan-200 ring-1 ring-cyan-500/50"
                  : "text-slate-200 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goSection("contact")}
            className="ml-2 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-black/30 transition hover:brightness-105 active:scale-[0.98]"
          >
            Plan gratis kennismaking
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-slate-200 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-700 bg-void px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => goSection(id)}
                className={`rounded-xl px-3 py-3 text-left text-sm font-semibold ${
                  active === id ? "bg-slate-800 text-cyan-200" : "text-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goSection("contact")}
              className="mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-3 text-sm font-bold text-slate-950"
            >
              Plan gratis kennismaking
            </button>
          </div>
        </div>
      ) : null}
    </header>
    </>
  );
}
