const items = [
  {
    title: "Zakelijke website",
    desc: "Complete site met heldere pagina's, sterke tekststructuur en een uitstraling die vertrouwen uitstraalt.",
    icon: "globe"
  },
  {
    title: "Redesign",
    desc: "Van verouderd naar fris: betere indeling, snellere laadtijd en een look die past bij hoe je nu wilt groeien.",
    icon: "layers"
  },
  {
    title: "Landingspagina",
    desc: "Eén krachtige pagina voor campagnes, leads of boekingen — gericht op één duidelijke actie.",
    icon: "target"
  }
];

function Icon({ name, className = "h-6 w-6" }) {
  const c = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.5, viewBox: "0 0 24 24" };
  if (name === "globe")
    return (
      <svg {...c}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  if (name === "layers")
    return (
      <svg {...c}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        />
      </svg>
    );
  return (
    <svg {...c}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="diensten"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-100 to-white py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-grid-subtle"
        style={{ backgroundSize: "56px 56px" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Diensten</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Wat we voor jou bouwen
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-slate-700">
            Kies wat bij je fase past. Alles wordt als snelle, moderne frontend opgeleverd — klaar voor hosting zonder
            gedoe.
          </p>
        </div>
        <ul className="mt-16 grid gap-6 md:grid-cols-3" data-reveal-stagger>
          {items.map((item, i) => (
            <li
              key={item.title}
              className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_48px_-16px_rgba(34,211,238,0.2)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-bold text-cyan-600">0{i + 1}</span>
                <div className="rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 p-2.5 text-cyan-700 transition group-hover:shadow-md">
                  <Icon name={item.icon} />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-slate-700">{item.desc}</p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 inline-flex items-center text-sm font-bold text-cyan-800 transition hover:text-indigo-800"
              >
                Start jouw nieuwe website
                <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
