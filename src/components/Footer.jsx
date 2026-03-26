import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div data-reveal>
            <Link to="/" className="inline-block">
              <Logo size="sm" variant="dark" />
            </Link>
            <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-slate-400">
              Moderne websites voor ondernemers die willen groeien: strak design, duidelijke boodschap, meer aanvragen.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Premium webdesign · conversiegericht
            </p>
          </div>
          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-500/90">Contact</p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-slate-300">
              <li>
                <a href="mailto:info@sitesprint.eu" className="font-medium hover:text-cyan-400">
                  info@sitesprint.eu
                </a>
              </li>
              <li>
                <a href="tel:+32498338913" className="hover:text-white">
                  +32 498 33 89 13
                </a>
              </li>
            </ul>
          </div>
          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-500/90">Demo&apos;s</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/demos/fitness" className="text-slate-300 hover:text-cyan-300">
                  Fitness demo
                </Link>
              </li>
              <li>
                <Link to="/demos/restaurant" className="text-slate-300 hover:text-cyan-300">
                  Restaurant demo
                </Link>
              </li>
              <li>
                <Link to="/demos/barber" className="text-slate-300 hover:text-cyan-300">
                  Kapsalon demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-slate-800 pt-8 text-center text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} SiteSprint. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
