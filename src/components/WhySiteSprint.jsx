const points = [
  {
    title: "Conversiegericht",
    text: "Elke sectie heeft een doel: vertrouwen, duidelijkheid en actie — niet alleen een mooi plaatje.",
    icon: "chart"
  },
  {
    title: "Snel & mobiel",
    text: "Je site voelt licht aan en werkt vlekkeloos op telefoon. Dat verwachten bezoekers én Google.",
    icon: "bolt"
  },
  {
    title: "Heldere samenwerking",
    text: "Vaste stappen, korte lijnen, voorspelbare feedback. Jij focust op je bedrijf, wij op je site.",
    icon: "handshake"
  }
];

function Icon({ name, className = "h-6 w-6" }) {
  const c = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.5, viewBox: "0 0 24 24" };
  if (name === "chart")
    return (
      <svg {...c}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 12l4-4 4 4 6-6" />
      </svg>
    );
  if (name === "bolt")
    return (
      <svg {...c}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  return (
    <svg {...c}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export default function WhySiteSprint() {
  return (
    <section
      id="waarom"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-800 bg-midnight py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_100%_0%,rgba(99,102,241,0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Waarom SiteSprint</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Minder gedoe. <span className="text-slate-300">Meer resultaat.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-slate-300">
            We combineren strak design met inhoud die verkoopt — zodat bezoekers snappen wat je doet en gemakkelijk de
            stap zetten.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3" data-reveal-stagger>
          {points.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-slate-700 bg-slate-900/70 p-8 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600"
            >
              <div className="inline-flex rounded-xl border border-slate-600 bg-slate-800 p-3 text-cyan-200">
                <Icon name={p.icon} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-50">{p.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-300">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
