const steps = [
  {
    n: "01",
    title: "Kennismaking",
    text: "We bespreken je doelen, doelgroep en wat bezoekers op je site moeten doen  helder en zonder omwegen."
  },
  {
    n: "02",
    title: "Ontwerp en bouw",
    text: "Structuur, visueel ontwerp en daarna een snelle frontend. Jij keurt tussendoor goed, wij scherpen bij."
  },
  {
    n: "03",
    title: "Livegang",
    text: "Je site gaat live. Optioneel plannen we updates en optimalisatie zodat je blijft groeien."
  }
];

export default function Process() {
  return (
    <section
      id="werkwijze"
      className="relative overflow-hidden border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-200 via-slate-100 to-white" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600">Werkwijze</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Zo pakken we het aan
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-slate-700">
            Duidelijke fases, voorspelbare planning — jij weet altijd waar we staan.
          </p>
        </div>
        <ol className="mt-16 grid gap-8 md:grid-cols-3" data-reveal-stagger>
          {steps.map((s) => (
            <li
              key={s.n}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
            >
              <span className="font-display text-4xl font-black text-cyan-700">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center" data-reveal>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }}
            className="inline-flex rounded-2xl border-2 border-navy/15 bg-navy px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
          >
            Vraag een voorstel aan
          </a>
        </div>
      </div>
    </section>
  );
}
