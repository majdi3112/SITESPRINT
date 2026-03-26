import { Link } from "react-router-dom";

export default function DemoChrome({ brand, tagline, theme, children, tabs, activeTab, onTabChange }) {
  return (
    <div className={`min-h-screen ${theme.bg}`}>
      <div className="border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-navy"
          >
            Terug naar SiteSprint
          </Link>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            Voorbeeldsite (demo)
          </span>
        </div>
      </div>

      <header className={`border-b ${theme.headerBorder} ${theme.headerBg}`}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider ${theme.accentText}`}>{tagline}</p>
            <p className={`mt-1 text-2xl font-black ${theme.brandText}`}>{brand}</p>
          </div>
          <nav className="flex flex-wrap gap-2" aria-label="Demo secties">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => onTabChange(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeTab === t.id ? theme.tabActive : theme.tabIdle
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
    </div>
  );
}
