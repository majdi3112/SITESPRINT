import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";

/** VOLT Studio monogram (demo-merk; los van SiteSprint M&N-logo). */
function VoltStudioMark({ className = "h-9 w-9" }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="8" y1="6" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="9" fill="#0f172a" stroke={`url(#${gid})`} strokeWidth="1.25" />
      <path
        d="M12.25 14.25c0-2.35 2.05-4 5-4s5 1.65 5 4c0 2.35-2.05 3.9-5 3.9h-2.75c-2.9 0-5 1.75-5 4.1s2.1 4.1 5.15 4.1H27.75"
        fill="none"
        stroke="#f8fafc"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const nav = [
  { id: "top", label: "Home" },
  { id: "waarom", label: "Waarom wij" },
  { id: "lidmaatschap", label: "Lidmaatschappen" },
  { id: "trainers", label: "Trainers" },
  { id: "reviews", label: "Reviews" },
  { id: "lessen", label: "Lesaanbod" },
  { id: "contact", label: "Contact" }
];

const heroImg =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1400";

const trainers = [
  {
    name: "Daan Vermeulen",
    role: "Kracht & powerlifting",
    bio: "NSCA-gecertificeerd. Jouw techniek en progressie staan centraal — van eerste deadlift tot wedstrijdvoorbereiding.",
    img: "https://images.unsplash.com/photo-1567012477007-b7e3b79ac6cc?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Sofie De Wilde",
    role: "HIIT & vetverbranding",
    bio: "Energieke sessies die resultaat en plezier combineren. Ideaal als je snel structuur en motivatie zoekt.",
    img: "https://images.unsplash.com/photo-1594381898411-e846f7a19472?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Marc Janssen",
    role: "Mobiliteit & herstel",
    bio: "Voorkom blessures en train duurzamer met gerichte mobility work en recovery — perfect naast zware dagen.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600"
  }
];

const reviews = [
  {
    name: "Eline V.",
    text: "In drie maanden merkbaar sterker en strakker. Coaches zijn top en de sfeer voelt niet intimiderend aan.",
    stars: 5
  },
  {
    name: "Thomas K.",
    text: "Eindelijk een club waar apparatuur altijd in orde is. 24/7 past perfect bij mijn shifts.",
    stars: 5
  },
  {
    name: "Fatima H.",
    text: "Groepslessen zijn pittig maar leuk. Persoonlijke tips van de trainers maken het verschil.",
    stars: 5
  }
];

const plans = [
  {
    name: "Basic",
    price: "39",
    tag: "Start sterk",
    perks: ["Toegang fitnessruimte", "Digitale uitleg app", "Lockers & douches", "Gratis parkeerplaats"],
    cta: "Kies Basic",
    featured: false
  },
  {
    name: "Premium",
    price: "69",
    tag: "Meest gekozen",
    perks: [
      "Alles uit Basic",
      "Onbeperkt groepslessen",
      "Sauna & wellnesshoek",
      "Maandelijkse InBody-scan"
    ],
    cta: "Start Premium",
    featured: true
  },
  {
    name: "Personal Coaching",
    price: "129",
    tag: "Maximaal resultaat",
    perks: [
      "Alles uit Premium",
      "2 PT-sessies per maand",
      "Voedingscheck & plan",
      "Prioriteit bij boekingen"
    ],
    cta: "Plan intake",
    featured: false
  }
];

const why = [
  {
    title: "Moderne apparatuur",
    desc: "Technogym en free weights zones — onderhouden alsof het dagelijks jouw eerste training is.",
    icon: "dumbbell"
  },
  {
    title: "Ervaren coaches",
    desc: "Geen rondjes laten lopen: echte begeleiding, vormcorrecties en programma’s op maat.",
    icon: "user"
  },
  {
    title: "Community die motiveert",
    desc: "Serieuze trainers, toffe leden. Iedereen traint op zijn niveau, zonder oordeel.",
    icon: "users"
  },
  {
    title: "24/7 toegang",
    desc: "Train wanneer het jou uitkomt. Veilige toegang via app en camerabewaking.",
    icon: "clock"
  }
];

const lessons = [
  {
    title: "HYROX & conditie",
    desc: "Hoge intensiteit, sled pushes en roeien — bouw een motor die niet opgeeft.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kracht & hypertrofie",
    desc: "Gestructureerde blokken voor spiermassa en kracht, met coaching op de vloer.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Yoga & reset",
    desc: "Mobiliteit en ademhaling om flexibel en hersteld te blijven na zware week.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  }
];

function Icon({ name, className = "h-6 w-6" }) {
  const stroke = "currentColor";
  const common = { className, fill: "none", stroke, strokeWidth: 1.5, viewBox: "0 0 24 24" };
  switch (name) {
    case "dumbbell":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5L3 12m0 0l1.5 1.5M3 12h3m9-1.5L16.5 12M21 12l-1.5-1.5M16.5 12H18m-1.5-1.5v-3m0 3v3M6 15h.01M6 9h.01m12 3h.01M6 18h.01M18 18h.01M18 15h.01M18 9h.01"
          />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-teal-400" aria-label={`${n} van 5 sterren`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Reveal({ children, className = "" }) {
  return <div data-reveal className={className}>{children}</div>;
}

export default function FitnessDemo() {
  const [activeNav, setActiveNav] = useState("top");
  const [mobileOpen, setMobileOpen] = useState(false);

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
    const sectionIds = nav.map((n) => n.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToId = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100">
      {/* Sticky: demo-contextbalk + site-header blijven samen bovenaan */}
      <div className="sticky top-0 z-[100] isolate">
        <div className="border-b border-white/10 bg-[#0a1020]/95 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150">
          <div className="mx-auto flex min-h-[2.75rem] max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 sm:min-h-0">
            <Link
              to="/"
              className="text-xs font-semibold text-slate-300 transition-colors hover:text-teal-400 sm:text-sm"
            >
              ← Terug naar SiteSprint
            </Link>
            <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-200 sm:text-xs">
              Voorbeeldsite — fitness
            </span>
          </div>
        </div>

        <header className="border-b border-white/[0.06] bg-[#0c1224]/90 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="group flex items-center gap-3 text-left transition-opacity hover:opacity-90"
          >
            <VoltStudioMark className="h-10 w-10 shadow-lg shadow-teal-500/10 ring-teal-500/20 transition group-hover:shadow-teal-500/25 sm:h-11 sm:w-11" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400/90">
                Premium fitness
              </p>
              <p className="font-black tracking-tight text-white sm:text-lg">VOLT Studio</p>
            </div>
          </button>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Hoofdmenu"
          >
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeNav === item.id
                    ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/15 text-teal-300 shadow-[0_0_24px_-4px_rgba(45,212,191,0.35)] ring-1 ring-teal-400/30"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToId("lidmaatschap")}
              className="hidden rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/25 transition hover:brightness-110 sm:inline-flex"
            >
              Proefweek
            </button>
            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-slate-300 lg:hidden"
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
          <div className="border-t border-white/5 bg-[#0c1224]/98 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                    activeNav === item.id ? "bg-teal-500/15 text-teal-300" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToId("lidmaatschap")}
                className="mt-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 py-3 text-center text-sm font-bold text-slate-950"
              >
                Start gratis proefweek
              </button>
            </div>
          </div>
        ) : null}
      </header>
      </div>

      <main>
        {/* Hero */}
        <section
          id="top"
          className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#0a1020] via-[#070b14] to-[#070b14]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.18),transparent)]" />
          <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-[100px]" />

          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                  </span>
                  Resultaten beginnen hier
                </p>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                  Word sterker.{" "}
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                    Train slimmer.
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                  Bereik jouw doel met coaching, groepslessen en topapparatuur. Start vandaag met een{" "}
                  <span className="font-semibold text-slate-200">gratis proefweek</span> — geen verplichtingen.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => scrollToId("contact")}
                    className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-slate-950 shadow-[0_8px_32px_-8px_rgba(45,212,191,0.55)] transition hover:shadow-[0_12px_40px_-8px_rgba(45,212,191,0.65)] hover:brightness-105"
                  >
                    Plan proefles
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
                    onClick={() => scrollToId("lidmaatschap")}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:border-teal-500/40 hover:bg-white/10"
                  >
                    Bekijk lidmaatschappen
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    { label: "500+ leden", sub: "actieve community" },
                    { label: "24/7 toegang", sub: "via app" },
                    { label: "Topcoaches", sub: "gecertificeerd" }
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-teal-500/25 hover:bg-white/[0.06]"
                    >
                      <p className="text-sm font-black text-white">{b.label}</p>
                      <p className="text-xs text-slate-500">{b.sub}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7),0_0_60px_-15px_rgba(45,212,191,0.25)] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[480px]">
                <img
                  src={heroImg}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#070b14]/30 lg:to-[#070b14]/80" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0c1224]/85 p-4 backdrop-blur-md sm:left-auto sm:right-6 sm:w-64">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-400">Vandaag in de club</p>
                  <p className="mt-1 text-2xl font-black text-white">HYROX prep · 18:30</p>
                  <p className="mt-1 text-sm text-slate-400">Nog 4 plekken vrij — boek via de app</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Over + waarom */}
        <section
          id="waarom"
          className="border-b border-white/[0.06] bg-gradient-to-b from-[#0d1428] to-[#080d18] py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
                Waarom VOLT Studio
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-black text-white sm:text-4xl">
                Geen standaard sportschool.{" "}
                <span className="text-slate-400">Wel jouw volgende niveau.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
                Twee verdiepingen training, aparte cardio-zone en krachtruimte. Persoonlijke begeleiding wanneer je
                het nodig hebt — zonder wachtlijsten voor een praatje.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {why.map((w) => (
                <Reveal key={w.title}>
                  <div className="group h-full rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-xl shadow-black/30 transition duration-300 hover:border-teal-500/35 hover:shadow-[0_20px_50px_-20px_rgba(45,212,191,0.2)]">
                    <div className="inline-flex rounded-xl bg-teal-500/15 p-3 text-teal-400 ring-1 ring-teal-500/25 transition group-hover:bg-teal-500/25">
                      <Icon name={w.icon} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Lidmaatschappen */}
        <section
          id="lidmaatschap"
          className="border-b border-white/[0.06] bg-[#070b14] py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
                Lidmaatschappen
              </p>
              <h2 className="mt-3 text-center text-3xl font-black text-white sm:text-4xl">
                Kies het pakket dat bij jouw doelen past
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
                Alle abonnementen maandelijks opzegbaar. Geen verborgen kosten — je weet vooraf waar je aan toe bent.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <Reveal key={plan.name}>
                  <div
                    className={`relative flex h-full flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 ${
                      plan.featured
                        ? "border-teal-500/50 bg-gradient-to-b from-teal-500/10 via-[#0c1224] to-[#0a0f1c] shadow-[0_24px_60px_-20px_rgba(45,212,191,0.35)] ring-2 ring-teal-400/30"
                        : "border-white/[0.08] bg-[#0c1224]/80 hover:border-teal-500/25"
                    }`}
                  >
                    {plan.featured ? (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-1 text-xs font-black uppercase tracking-wide text-slate-950">
                        Populair
                      </span>
                    ) : null}
                    <p className="text-sm font-bold uppercase tracking-wider text-teal-400">{plan.tag}</p>
                    <h3 className="mt-2 text-2xl font-black text-white">{plan.name}</h3>
                    <p className="mt-4 flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-500">€</span>
                      <span className="text-5xl font-black text-white">{plan.price}</span>
                      <span className="text-slate-500">/maand</span>
                    </p>
                    <ul className="mt-8 flex-1 space-y-3">
                      {plan.perks.map((perk) => (
                        <li key={perk} className="flex gap-3 text-sm text-slate-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => scrollToId("contact")}
                      className={`mt-8 w-full rounded-2xl py-4 text-sm font-bold transition ${
                        plan.featured
                          ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/30 hover:brightness-110"
                          : "border border-white/15 bg-white/5 text-white hover:border-teal-500/40 hover:bg-white/10"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trainers */}
        <section
          id="trainers"
          className="border-b border-white/[0.06] bg-gradient-to-b from-[#0a1020] to-[#070b14] py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-teal-400">Het team</p>
              <h2 className="mt-3 text-center text-3xl font-black text-white sm:text-4xl">
                Coaches die met je meedenken
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
                Geen eenheidsworst: elke trainer heeft een eigen specialisatie. Zo krijg jij advies dat echt klopt met
                jouw training.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {trainers.map((t) => (
                <Reveal key={t.name}>
                  <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1224] shadow-xl shadow-black/40 transition hover:border-teal-500/30 hover:shadow-[0_24px_50px_-20px_rgba(45,212,191,0.15)]">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={t.img}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1224] via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-teal-400">{t.role}</p>
                      <h3 className="mt-1 text-xl font-black text-white">{t.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.bio}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="border-b border-white/[0.06] bg-[#0d1428] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-teal-400">Reviews</p>
              <h2 className="mt-3 text-center text-3xl font-black text-white sm:text-4xl">
                Waar leden over praten
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name}>
                  <blockquote className="h-full rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-8 shadow-lg transition hover:border-teal-500/25">
                    <Stars n={r.stars} />
                    <p className="mt-4 text-slate-200">&ldquo;{r.text}&rdquo;</p>
                    <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-500/20 text-sm font-black text-teal-200">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <cite className="not-italic text-sm font-bold text-white">{r.name}</cite>
                        <p className="text-xs text-slate-500">Lid sinds 2024</p>
                      </div>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Lesaanbod / faciliteiten */}
        <section id="lessen" className="border-b border-white/[0.06] bg-[#070b14] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
                Lesaanbod & faciliteiten
              </p>
              <h2 className="mt-3 text-center text-3xl font-black text-white sm:text-4xl">
                Alles onder één dak
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
                Van hartslagzones tot krachtplatform — train hoe jij wilt. Groepslessen worden wekelijks vernieuwd.
              </p>
            </Reveal>

            <div className="mt-14 space-y-6">
              {lessons.map((lesson, i) => (
                <Reveal key={lesson.title}>
                  <div
                    className={`flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1224] shadow-xl md:min-h-[280px] md:flex-row ${
                      i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="relative aspect-video shrink-0 md:w-1/2 md:aspect-auto md:min-h-[280px]">
                      <img
                        src={lesson.img}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1224]/70 to-transparent md:bg-gradient-to-r md:from-[#0c1224]/50 md:to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
                      <h3 className="text-2xl font-black text-white">{lesson.title}</h3>
                      <p className="mt-3 text-slate-400">{lesson.desc}</p>
                      <ul className="mt-6 space-y-2 text-sm text-slate-300">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                          Gecertificeerde instructeurs
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                          Kleinere groepen = meer feedback
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                          Boeken tot 7 dagen vooruit
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-600/20 via-[#0c1224] to-[#070b14] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(45,212,191,0.15),transparent_50%)]" />
          <Reveal className="relative mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Klaar om sterker te worden?</h2>
            <p className="mt-4 text-lg text-slate-300">
              Start vandaag nog met jouw proefweek. We laten je de club zien, denken mee over jouw plan en plannen je
              eerste sessie.
            </p>
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 px-10 py-4 text-base font-bold text-slate-950 shadow-[0_12px_40px_-8px_rgba(45,212,191,0.5)] transition hover:brightness-110"
            >
              Boek mijn proefweek
            </button>
          </Reveal>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/[0.06] bg-[#050810] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <VoltStudioMark className="h-11 w-11" />
                  <div>
                    <p className="font-black text-white">VOLT Studio</p>
                    <p className="text-xs text-slate-500">Premium fitness Antwerpen</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-400">
                  Demo-website door{" "}
                  <Link to="/" className="font-semibold text-teal-400 hover:text-teal-300">
                    SiteSprint
                  </Link>
                  . Foto&apos;s: Unsplash.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-400">Contact</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li>Meir 120, 2000 Antwerpen</li>
                  <li>
                    <a href="tel:+3230000000" className="hover:text-white">
                      03 000 00 00
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hallo@voltstudio.demo" className="hover:text-white">
                      hallo@voltstudio.demo
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-400">Openingstijden</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li>Ma–zo: 24/7 leden</li>
                  <li>Balie: ma–vr 9:00–21:00</li>
                  <li>Za 10:00–18:00 · zo gesloten</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-400">Social</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["Instagram", "Facebook", "Strava"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-teal-500/40 hover:text-teal-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      {s}
                    </a>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => scrollToId("lidmaatschap")}
                  className="mt-6 w-full rounded-xl border border-teal-500/40 bg-teal-500/10 py-3 text-sm font-bold text-teal-300 transition hover:bg-teal-500/20"
                >
                  Bekijk tarieven →
                </button>
              </div>
            </div>
            <p className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
              © {new Date().getFullYear()} VOLT Studio (demo). Alle rechten voorbehouden.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
