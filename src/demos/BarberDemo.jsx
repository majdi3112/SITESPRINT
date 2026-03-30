import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DemoTopChrome from "../components/DemoTopChrome";
import { scrollToSection } from "../utils/scrollToSection";

const nav = [
  { id: "top", label: "Home" },
  { id: "shop", label: "De shop" },
  { id: "behandelingen", label: "Behandelingen" },
  { id: "prijzen", label: "Prijzen" },
  { id: "team", label: "Team" },
  { id: "reviews", label: "Reviews" },
  { id: "afspraak", label: "Afspraak" }
];

const heroImg =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=85&w=1400";

const treatments = [
  {
    name: "Haircut",
    desc: "Consult, wassen, knippen en stylen strakke fade of klassiek, precies zoals jij het wilt.",
    price: "32",
    duration: "45 min",
    icon: "scissors"
  },
  {
    name: "Beard trim",
    desc: "Contour, lengte en textuur: scherpe lijnen met machine en mes, afgewerkt met premium olie.",
    price: "18",
    duration: "25 min",
    icon: "beard"
  },
  {
    name: "Hair + beard",
    desc: "Complete look in één sessie. Ideaal als je alles in lijn wilt hebben voor werk of een avond uit.",
    price: "45",
    duration: "60 min",
    icon: "combo"
  },
  {
    name: "Hot towel shave",
    desc: "Traditioneel met warme doeken, rich lather en mes glad als glas, zero irritatie.",
    price: "28",
    duration: "35 min",
    icon: "blade"
  }
];

const priceRows = [
  { service: "Haircut", detail: "Incl. wassen & styling", price: "32", time: "45 min" },
  { service: "Beard trim", detail: "Contour & verzorging", price: "18", time: "25 min" },
  { service: "Hair + beard", detail: "Combodeal", price: "45", time: "60 min" },
  { service: "Hot towel shave", detail: "Klassiek scheerwerk", price: "28", time: "35 min" },
  { service: "Kids cut", detail: "Tot 12 jaar", price: "24", time: "30 min" },
  { service: "Grey blending", detail: "Natuurlijke dekking", price: "22", time: "20 min" }
];

const barbers = [
  {
    name: "Jay Vermeer",
    role: "Master barber · 12 jaar ervaring",
    bio: "Specialist in texture fades en Aziatisch haar. Rustig tempo, maximale precisie.",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Rico Mendes",
    role: "Fade & design",
    bio: "Van skin fade tot creative patterns  als het scherp moet, zit je bij Rico goed.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Sam De Bruyne",
    role: "Baard & klassiek scheren",
    bio: "Hot towel ritual en baard-sculpting. Verzorging die je voelt tot de volgende afspraak.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
  }
];

const reviews = [
  {
    name: "Thomas V.",
    text: "Eindelijk een shop waar ze tijd nemen en écht kijken naar je gezichtsvorm. Loop elke keer scherp naar buiten.",
    stars: 5
  },
  {
    name: "Kevin M.",
    text: "Premium producten, geen haast. De hot towel shave is next level aanrader voor een cadeaumoment.",
    stars: 5
  },
  {
    name: "Julien D.",
    text: "Online boeken werkt vlot, walk-in ook altijd geprobeerd. Sfeer is stoer maar super professioneel.",
    stars: 5
  }
];

function Icon({ name, className = "h-6 w-6" }) {
  const stroke = "currentColor";
  const c = { className, fill: "none", stroke, strokeWidth: 1.5, viewBox: "0 0 24 24" };
  switch (name) {
    case "scissors":
      return (
        <svg {...c}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.121 14.121L19 19m-4.879-4.879L5.636 5.636m9.9 9.9L21 21m-4.879-4.879l-4.122-4.122m0 0L9.879 9.879M9.88 9.88l-4.123-4.122m0 0L4.5 4.5m5.25 4.25L9.88 9.88"
          />
        </svg>
      );
    case "beard":
      return (
        <svg {...c}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "combo":
      return (
        <svg {...c}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      );
    case "blade":
      return (
        <svg {...c}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19M9.88 9.88L4.5 4.5m8.485 8.485L12 12" />
        </svg>
      );
    default:
      return null;
  }
}

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-amber-500" aria-label={`${n} van 5 sterren`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Reveal({ children, className = "" }) {
  return <div data-reveal className={className}>{children}</div>;
}

export default function BarberDemo() {
  const [activeNav, setActiveNav] = useState("top");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const id = location.hash ? location.hash.slice(1) : null;
    if (!id) return;
    const t = window.setTimeout(() => {
      scrollToSection(id);
    }, 120);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-visible");
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToId = (id) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <DemoTopChrome mobileMenuOpen={mobileOpen}>
        <div className="border-b border-white/10 bg-zinc-950/95 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150">
          <div className="mx-auto flex min-h-[2.75rem] max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 sm:min-h-0">
            <Link
              to="/"
              className="text-xs font-semibold text-zinc-400 transition-colors hover:text-amber-400 sm:text-sm"
            >
              ← Terug naar SiteSprint
            </Link>
            <span className="rounded-full border border-amber-500/35 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 sm:text-xs">
              Voorbeeldsite — barbershop
            </span>
          </div>
        </div>

        <header className="border-b border-white/[0.06] bg-[#0c0c0f]/92 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="group flex items-center gap-3 text-left"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-amber-600/5 font-black text-amber-500 shadow-[0_0_24px_-4px_rgba(245,158,11,0.35)] transition group-hover:shadow-[0_0_32px_-2px_rgba(245,158,11,0.45)] sm:h-11 sm:w-11">
              NC
            </span>
            <div>
              <p className="text-lg font-black tracking-tight text-white sm:text-xl">NORTH CUT</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Barbershop · Gent</p>
            </div>
          </button>

          <nav className="hidden items-center gap-0 lg:flex" aria-label="Hoofdmenu">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className={`rounded-full px-2 py-2 text-xs font-semibold transition-all duration-300 xl:px-3 xl:text-sm ${
                  activeNav === item.id
                    ? "bg-gradient-to-r from-amber-500/20 to-orange-500/15 text-amber-400 shadow-[0_0_20px_-4px_rgba(245,158,11,0.4)] ring-1 ring-amber-500/40"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToId("afspraak")}
              className="hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-bold text-zinc-950 shadow-lg shadow-amber-500/25 transition hover:brightness-110 sm:inline-flex"
            >
              Boek online
            </button>
            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-zinc-400 lg:hidden"
              aria-expanded={mobileOpen}
              aria-label="Menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/5 bg-[#0c0c0f] px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                    activeNav === item.id ? "bg-amber-500/15 text-amber-400" : "text-zinc-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToId("afspraak")}
                className="mt-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 py-3 text-center text-sm font-bold text-zinc-950"
              >
                Boek je afspraak
              </button>
            </div>
          </div>
        ) : null}
      </header>
      </DemoTopChrome>

      <main>
        {/* Hero */}
        <section
          id="top"
          className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#0f0f12] via-[#09090b] to-[#09090b]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgba(245,158,11,0.12),transparent)]" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-amber-600/10 blur-[100px]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                  </span>
                  Premium barbershop
                </p>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Strakke fades.{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                    Scherpe lijnen.
                  </span>{" "}
                  Geen gedoe.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                  Klassieke service met een moderne afwerking. Vakmanschap, precisie en premium verzorging. Boek vandaag je afspraak en loop scherp naar buiten.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => scrollToId("afspraak")}
                    className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-base font-bold text-zinc-950 shadow-[0_8px_32px_-8px_rgba(245,158,11,0.55)] transition hover:shadow-[0_12px_40px_-8px_rgba(245,158,11,0.65)]"
                  >
                    Boek online
                    <svg
                      className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId("behandelingen")}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-white/[0.08]"
                  >
                    Bekijk behandelingen
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    { t: "Walk-ins welkom", d: "Indien plek vrij" },
                    { t: "Premium producten", d: "Reuzel · Layrite" },
                    { t: "Ervaren barbers", d: "10+ jaar gemiddeld" }
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-sm transition hover:border-amber-500/25"
                    >
                      <p className="text-sm font-bold text-white">{x.t}</p>
                      <p className="text-xs text-zinc-500">{x.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.8),0_0_60px_-15px_rgba(245,158,11,0.2)]">
                <img
                  src={heroImg}
                  alt=""
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:min-h-[460px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#09090b]/40 lg:to-[#09090b]/90" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0c0c0f]/90 p-4 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-500">Vandaag nog plek</p>
                  <p className="mt-1 text-xl font-black text-white">15:30 · 16:15 · 17:00</p>
                  <p className="mt-1 text-sm text-zinc-500">Bij Jay &amp; Rico  boek via de site</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Over de shop */}
        <section id="shop" className="border-b border-white/[0.06] bg-[#0c0c0f] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">Over North Cut</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Waar precisie traditie ontmoet
                </h2>
                <p className="mt-6 leading-relaxed text-zinc-400">
                  Geen chain-store vibes. North Cut is gebouwd op ambacht: messen die scherp zijn, stoelen die comfort
                  geven, en barbers die luisteren voordat ze knippen. Onze ruimte in Gent combineert industriële elementen
                  met warm licht stoer genoeg voor een fade, relaxed genoeg voor je eerste bezoek.
                </p>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  We werken uitsluitend met merken die we zelf gebruiken. Geen shortcuts, geen haast knipsels: alleen werk
                  waar we achter staan.
                </p>
                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
                  <div>
                    <p className="text-3xl font-black text-amber-500">4.9</p>
                    <p className="text-xs text-zinc-500">Google score</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-amber-500">2.4k</p>
                    <p className="text-xs text-zinc-500">cuts / jaar</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-amber-500">2016</p>
                    <p className="text-xs text-zinc-500">sinds</p>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="relative">
                  <div className="absolute -right-2 -top-2 h-20 w-20 rounded-2xl border border-amber-500/20 bg-amber-500/5" aria-hidden />
                  <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=900"
                    alt=""
                    className="relative rounded-3xl border border-white/10 object-cover shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Behandelingen */}
        <section
          id="behandelingen"
          className="border-b border-white/[0.06] bg-gradient-to-b from-[#121216] to-[#09090b] py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">Behandelingen</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Wat we voor je doen</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                Van snelle touch-up tot full service. Altijd met dezelfde aandacht voor detail.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {treatments.map((t) => (
                <Reveal key={t.name}>
                  <article className="group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-xl transition hover:border-amber-500/30 hover:shadow-[0_20px_50px_-20px_rgba(245,158,11,0.15)]">
                    <div className="inline-flex rounded-xl bg-amber-500/15 p-3 text-amber-500 ring-1 ring-amber-500/25">
                      <Icon name={t.icon} />
                    </div>
                    <div className="mt-6 flex flex-1 flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-xl font-black text-white">{t.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t.desc}</p>
                      </div>
                      <div className="mt-4 shrink-0 text-left sm:mt-0 sm:text-right">
                        <p className="text-2xl font-black text-amber-500">€{t.price}</p>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{t.duration}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Prijzen */}
        <section id="prijzen" className="border-b border-white/[0.06] bg-[#0c0c0f] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">Tarieven</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Prijzen die kloppen</h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">Transparant, geen verrassingen aan de kassa.</p>
            </Reveal>

            <Reveal className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#121216] shadow-2xl">
              <div className="divide-y divide-white/[0.06]">
                {priceRows.map((row) => (
                  <div
                    key={row.service}
                    className="flex flex-col gap-4 p-6 transition hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:px-8"
                  >
                    <div>
                      <p className="font-bold text-white">{row.service}</p>
                      <p className="text-sm text-zinc-500">{row.detail}</p>
                    </div>
                    <div className="flex items-center gap-6 sm:text-right">
                      <span className="text-sm text-zinc-500">{row.time}</span>
                      <span className="text-xl font-black text-amber-500">€{row.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Team */}
        <section
          id="team"
          className="border-b border-white/[0.06] bg-gradient-to-b from-[#09090b] to-[#0f0f12] py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">Het team</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Barbers die het verschil maken</h2>
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {barbers.map((b) => (
                <Reveal key={b.name}>
                  <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c0f] shadow-xl transition hover:border-amber-500/25">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={b.img}
                        alt=""
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-500">{b.role}</p>
                      <h3 className="mt-1 text-xl font-black text-white">{b.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{b.bio}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="border-b border-white/[0.06] bg-[#121216] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">Reviews</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Wat klanten zeggen</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name}>
                  <blockquote className="h-full rounded-3xl border border-white/[0.08] bg-[#0c0c0f] p-8 shadow-lg transition hover:border-amber-500/25">
                    <Stars n={r.stars} />
                    <p className="mt-4 text-zinc-300 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <footer className="mt-6 border-t border-white/10 pt-6">
                      <cite className="not-italic text-lg font-bold text-white">{r.name}</cite>
                      <p className="text-xs text-zinc-500">Geverifieerde klant</p>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Afspraak */}
        <section
          id="afspraak"
          className="border-b border-white/[0.06] bg-gradient-to-br from-amber-950/30 via-[#09090b] to-[#0c0c0f] py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="overflow-hidden rounded-[2rem] border border-amber-500/20 bg-[#0c0c0f] shadow-[0_24px_80px_-20px_rgba(245,158,11,0.2)]">
              <div className="grid lg:grid-cols-2">
                <Reveal>
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl font-black text-white sm:text-4xl">Openingstijden &amp; afspraak</h2>
                    <p className="mt-4 text-zinc-400">
                      Boek online voor de zekerheid of loop binnen als er een stoel vrij is.
                    </p>
                    <ul className="mt-10 space-y-6">
                      <li className="flex gap-4">
                        <span className="text-amber-500" aria-hidden>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <div>
                          <p className="font-bold text-white">Open</p>
                          <p className="text-zinc-400">Ma–za: 9:00 – 19:00</p>
                          <p className="text-sm text-zinc-500">Zo: 10:00 – 16:00</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-amber-500" aria-hidden>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                        </span>
                        <div>
                          <p className="font-bold text-white">Adres</p>
                          <p className="text-zinc-400">Veldstraat 48, 9000 Gent</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-amber-500" aria-hidden>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </span>
                        <div>
                          <p className="font-bold text-white">Telefoon</p>
                          <a href="tel:+3290000000" className="text-amber-500 hover:text-amber-400">
                            09 000 00 00
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() =>
                          window.alert(
                            "In productie koppelt u hier uw boekingstool (bijv. Fresha, Treatwell, eigen agenda)."
                          )
                        }
                        className="flex-1 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 py-4 text-center text-sm font-bold text-zinc-950 shadow-lg shadow-amber-500/25 transition hover:brightness-110"
                      >
                        Boek online (demo)
                      </button>
                      <a
                        href="tel:+3290000000"
                        className="flex-1 rounded-2xl border border-white/15 py-4 text-center text-sm font-bold text-white transition hover:border-amber-500/40"
                      >
                        Bel de shop
                      </a>
                    </div>
                  </div>
                </Reveal>
                <Reveal className="relative min-h-[280px] lg:min-h-full">
                  <img
                    src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&q=80&w=1000"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent lg:bg-gradient-to-l" />
                  <div className="relative flex h-full min-h-[280px] flex-col justify-end p-8 lg:p-12">
                    <p className="text-sm font-bold uppercase tracking-wider text-amber-500">Walk-ins</p>
                    <p className="mt-2 text-2xl font-black text-white">Kom langs we helpen je direct.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-black py-16 text-zinc-400">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 font-black text-amber-500">
                    NC
                  </span>
                  <div>
                    <p className="font-black text-white">NORTH CUT</p>
                    <p className="text-xs text-zinc-600">Barbershop</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed">
                  Premium cuts, scherpe service.{" "}
                  <Link to="/" className="font-semibold text-amber-500 hover:text-amber-400">
                    Demo door SiteSprint
                  </Link>
                  . Foto&apos;s: Unsplash.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Contact</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>Veldstraat 48, 9000 Gent</li>
                  <li>
                    <a href="tel:+3290000000" className="hover:text-white">
                      09 000 00 00
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@northcut.demo" className="hover:text-white">
                      hello@northcut.demo
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Openingstijden</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>Ma–za: 9:00 – 19:00</li>
                  <li>Zo: 10:00 – 16:00</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Social</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Instagram", "TikTok"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold transition hover:border-amber-500/40 hover:text-amber-500"
                      onClick={(e) => e.preventDefault()}
                    >
                      {s}
                    </a>
                  ))}
                </div>
                <p className="mt-8 text-sm font-semibold italic text-zinc-500">
                  Look sharp. Stay sharp. North Cut
                </p>
              </div>
            </div>
            <p className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-zinc-600">
              © {new Date().getFullYear()} North Cut (demo). Alle rechten voorbehouden.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
