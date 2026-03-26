import { Link } from "react-router-dom";

const demos = [
  {
    slug: "fitness",
    title: "Fitness",
    desc: "Premium sportschool met hero, lidmaatschappen, trainers, reviews en volledige landingspagina.",
    image: "/previews/gym.svg",
    accent: "from-teal-500/30 to-emerald-600/20"
  },
  {
    slug: "restaurant",
    title: "Restaurant",
    desc: "Warme horeca-ervaring: menu, specialiteiten, galerij, reserveringen en sociaal bewijs.",
    image: "/previews/restaurant.svg",
    accent: "from-rose-500/25 to-amber-600/20"
  },
  {
    slug: "barber",
    title: "Kapsalon",
    desc: "Strakke barbershop: behandelingen, prijzen, team, reviews en duidelijke boek-CTA.",
    image: "/previews/barber.svg",
    accent: "from-slate-400/20 to-zinc-700/25"
  }
];

export default function DemosSection() {
  return (
    <section
      id="demos"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-800 bg-void py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_50%,rgba(34,211,238,0.05),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" data-reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Live demos</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Zie wat we bouwen
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-300">
              Drie voorbeeldsites die je live kunt doorlopen — elk met meerdere secties, echte copy en
              conversiegerichte opbouw.
            </p>
          </div>
          <Link
            to="/demos/fitness"
            className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-600 bg-slate-900 px-6 py-3.5 text-sm font-bold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Direct een demo openen
          </Link>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3" data-reveal-stagger>
          {demos.map((d) => (
            <article
              key={d.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/90 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600"
            >
              <div className="relative border-b border-slate-800 bg-slate-950 px-3 pt-3">
                <div className="flex items-center gap-1.5 rounded-t-lg bg-slate-800 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-400/90" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/90" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                  <span className="ml-2 flex-1 truncate text-center font-mono text-[10px] font-medium text-slate-400">
                    demo / {d.slug}
                  </span>
                </div>
                <div className={`relative aspect-[16/10] overflow-hidden bg-slate-900 bg-gradient-to-br ${d.accent}`}>
                  <img
                    src={d.image}
                    alt=""
                    className="h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-50">{d.title}</h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-slate-300">{d.desc}</p>
                <Link
                  to={`/demos/${d.slug}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-3.5 text-sm font-bold text-slate-950 shadow-md shadow-black/30 transition hover:brightness-105"
                >
                  Bekijk live demo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
