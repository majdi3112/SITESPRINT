const heroImage =
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=85&w=2400";

export default function Hero() {
  return (
    <section className="relative min-h-[min(92vh,880px)] overflow-hidden border-b border-slate-200/40">
      {/* Full-bleed background + Ken Burns (wrapper centers; img only animates scale/pan) */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2">
            <img
              src={heroImage}
              alt=""
              className="motion-safe:animate-ken-burns h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
        {/* Readability: even base + center-weighted vignette (copy is centered) */}
        <div className="absolute inset-0 bg-slate-950/48" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_38%,rgba(15,23,42,0.78),transparent_68%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/18 via-transparent to-indigo-950/12" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,880px)] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-28">
        <div className="w-full max-w-[40rem] lg:max-w-4xl">
          <h1
            className="motion-safe:animate-hero-text-in text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl xl:leading-[1.08]"
            style={{ animationDelay: "0.12s", opacity: 0 }}
          >
            Websites die vertrouwen winnen{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent">
              en klanten opleveren.
            </span>
          </h1>

          <p
            className="motion-safe:animate-hero-text-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/95 sm:text-xl"
            style={{ animationDelay: "0.38s", opacity: 0 }}
          >
            SiteSprint ontwerpt en bouwt strakke, snelle sites voor lokale bedrijven — met een helder verhaal en een
            duidelijke weg naar contact.
          </p>

          <div
            className="motion-safe:animate-hero-text-in mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "0.58s", opacity: 0 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 motion-safe:transition motion-safe:duration-200 hover:bg-slate-100"
            >
              Plan gratis kennismaking
              <svg
                className="ml-2 h-4 w-4 motion-safe:transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#demos"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("demos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-[2px] motion-safe:transition motion-safe:duration-200 hover:border-white/40 hover:bg-white/10"
            >
              Bekijk demo&apos;s
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
