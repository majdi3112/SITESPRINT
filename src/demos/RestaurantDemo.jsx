import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const nav = [
  { id: "top", label: "Home" },
  { id: "verhaal", label: "Ons verhaal" },
  { id: "menu", label: "Menu" },
  { id: "signature", label: "Specialiteiten" },
  { id: "reviews", label: "Gasten" },
  { id: "galerij", label: "Sfeer" },
  { id: "reserveren", label: "Reserveren" }
];

const heroImg =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=85&w=1400";

const menuVoorgerechten = [
  {
    name: "Burrata & vijgen",
    desc: "Creamige burrata, geroosterde vijg, honing en pistache — een zacht begin van de avond.",
    price: "16",
    img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Carpaccio van ossenhaas",
    desc: "Dun gesneden met rucola, parmezaan en truffelolie.",
    price: "18",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Gegrilde octopus",
    desc: "Met krokante aardappel, paprika en citroen-salie.",
    price: "19",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
  }
];

const menuHoofdgerechten = [
  {
    name: "Tagliatelle al tartufo",
    desc: "Huisgemaakte pasta met seizoenspaddenstoelen en zwarte truffel.",
    price: "26",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Gegrilde zeebaars",
    desc: "Venkel, citrus en een lichte witte wijnsaus.",
    price: "32",
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Langzaam gegaarde lamsschenkel",
    desc: "Met polenta, gremolata en rode wijnjus.",
    price: "34",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
  }
];

const menuDesserts = [
  {
    name: "Tiramisù della casa",
    desc: "Onze klassieker: mascarpone, espresso en een vleugje amaretto.",
    price: "10",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Panna cotta van vanille",
    desc: "Met bosbessencompote en amandelschaafsel.",
    price: "9",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Sorbet trio",
    desc: "Citroen, framboos en basilicum — verfrissend en licht.",
    price: "8",
    img: "https://images.unsplash.com/photo-1501443762994-3bd181d8e330?auto=format&fit=crop&q=80&w=600"
  }
];

const signatures = [
  {
    title: "Chef's verrassingsmenu",
    subtitle: "Vijf gangen · alleen op donderdag",
    desc: "Laat u meenemen door het seizoen met kleine creaties van de keuken en bijpassende wijnen.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=900",
    badge: "Signature"
  },
  {
    title: "Osso buco alla Milanese",
    subtitle: "Huisgerecht sinds 1998",
    desc: "Gestoofd kalfsschenkel met saffraanrisotto en gremolata — comfort en verfijning in één bord.",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=900",
    badge: "Klassieker"
  },
  {
    title: "Wijn & antipasti",
    subtitle: "Elke vrijdagavond",
    desc: "Een rijk geschakeerde plank met charcuterie, kazen en onze favoriete olijfolie uit Puglia.",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=900",
    badge: "Shared"
  }
];

const reviews = [
  {
    name: "Charlotte & Willem",
    text: "Een avond vol smaak, sfeer en aandacht. De bediening voelde persoonlijk — alsof we bij vrienden aan tafel zaten.",
    stars: 5
  },
  {
    name: "Marc De Smet",
    text: "Authentieke smaken en een wijnkaart die indruk maakt. Dit is wat we zoeken voor zakelijke diners.",
    stars: 5
  },
  {
    name: "Elise Vervoort",
    text: "Romantisch, warm en het dessert was om van te dromen. We komen zeker terug met familie.",
    stars: 5
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800"
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-amber-600" aria-label={`${n} van 5 sterren`}>
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

function DishCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_4px_24px_rgba(92,22,35,0.06)] transition duration-300 hover:-translate-y-1 hover:border-amber-700/25 hover:shadow-[0_20px_48px_rgba(92,22,35,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c0a10]/50 to-transparent opacity-60 transition group-hover:opacity-40" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-[#3d1419]">{item.name}</h3>
          <span className="shrink-0 font-display text-lg font-bold text-[#6b1c2e]">€{item.price}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.desc}</p>
      </div>
    </article>
  );
}

export default function RestaurantDemo() {
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f6f0e8] text-stone-800">
      <div className="sticky top-0 z-[100] isolate">
        <div className="border-b border-stone-200/90 bg-[#faf6ef]/95 shadow-[0_8px_28px_rgba(44,10,16,0.08)] backdrop-blur-xl backdrop-saturate-150">
          <div className="mx-auto flex min-h-[2.75rem] max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 sm:min-h-0">
            <Link
              to="/"
              className="text-xs font-semibold text-stone-600 transition-colors hover:text-[#6b1c2e] sm:text-sm"
            >
              ← Terug naar SiteSprint
            </Link>
            <span className="rounded-full border border-[#6b1c2e]/25 bg-[#6b1c2e]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5c1824] sm:text-xs">
              Voorbeeldsite — restaurant
            </span>
          </div>
        </div>

        <header className="border-b border-stone-200/60 bg-[#fbf8f3]/95 shadow-[0_4px_24px_rgba(44,10,16,0.06)] backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="group flex items-center gap-3 text-left"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6b1c2e]/25 bg-gradient-to-br from-[#6b1c2e] to-[#4a121f] font-display text-lg font-bold text-[#f5e6c8] shadow-md transition group-hover:shadow-lg">
              ON
            </span>
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-[#2c0a10] sm:text-2xl">
                Osteria Nova
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-800/80">
                Cucina & vini
              </p>
            </div>
          </button>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Hoofdmenu">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeNav === item.id
                    ? "bg-[#6b1c2e] text-[#faf3e8] shadow-md shadow-[#6b1c2e]/25"
                    : "text-stone-600 hover:bg-white/70 hover:text-[#3d1419]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToId("reserveren")}
              className="hidden rounded-full bg-gradient-to-r from-[#6b1c2e] to-[#4a121f] px-5 py-2.5 text-sm font-semibold text-[#faf3e8] shadow-md transition hover:brightness-110 sm:inline-flex"
            >
              Reserveer
            </button>
            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-stone-600 lg:hidden"
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
          <div className="border-t border-stone-200/60 bg-[#fbf8f3] px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium ${
                    activeNav === item.id ? "bg-[#6b1c2e]/10 text-[#6b1c2e]" : "text-stone-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToId("reserveren")}
                className="mt-2 rounded-full bg-[#6b1c2e] py-3 text-center text-sm font-semibold text-[#faf3e8]"
              >
                Reserveer uw tafel
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
          className="relative overflow-hidden border-b border-stone-200/60 bg-gradient-to-b from-[#efe6d8] to-[#f6f0e8]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(107,28,46,0.08),transparent)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-[#6b1c2e]/20 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#6b1c2e] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  Hartje Antwerpen
                </p>
                <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-[#2c0a10] sm:text-5xl lg:text-[3.25rem]">
                  Authentieke smaken in een{" "}
                  <span className="italic text-[#6b1c2e]">warme setting</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
                  Verse ingrediënten, seizoensgerechten en gastvrijheid op topniveau. Beleef een avond vol smaak, sfeer
                  en aandacht — precies zoals Italië bedoeld is.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => scrollToId("reserveren")}
                    className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6b1c2e] to-[#4a121f] px-8 py-4 text-sm font-semibold text-[#faf3e8] shadow-[0_8px_28px_rgba(107,28,46,0.35)] transition hover:shadow-[0_12px_36px_rgba(107,28,46,0.4)]"
                  >
                    Reserveer een tafel
                    <svg
                      className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId("menu")}
                    className="inline-flex items-center justify-center rounded-full border-2 border-[#6b1c2e]/30 bg-white/80 px-8 py-4 text-sm font-semibold text-[#3d1419] backdrop-blur-sm transition hover:border-[#6b1c2e]/50 hover:bg-white"
                  >
                    Bekijk het menu
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    { t: "Authentieke keuken", d: "Familierecepten" },
                    { t: "Verse ingrediënten", d: "Dagverse levering" },
                    { t: "Hartje stad", d: "5 min van de Grote Markt" }
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-stone-200/90 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm transition hover:border-amber-800/20"
                    >
                      <p className="text-sm font-semibold text-[#3d1419]">{x.t}</p>
                      <p className="text-xs text-stone-500">{x.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 shadow-[0_32px_64px_-24px_rgba(44,10,16,0.35)]">
                <img src={heroImg} alt="" className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:min-h-[440px]" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c0a10]/75 via-[#2c0a10]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="font-display text-2xl text-[#f5e6c8] sm:text-3xl">“Waar elke maaltijd een moment wordt.”</p>
                  <p className="mt-2 text-sm text-stone-300">— Chef Marco, sinds 1998 in de keuken</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Ons verhaal */}
        <section id="verhaal" className="border-b border-stone-200/60 bg-[#faf6ef] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6b1c2e]">Ons verhaal</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#2c0a10] sm:text-4xl">
                  Van familiekeuken tot uw favoriete tafel in de stad
                </h2>
                <p className="mt-6 text-stone-600 leading-relaxed">
                  Osteria Nova begon als droom van de familie Romano: echte smaken uit Puglia, zonder compromis. We werken
                  met kleine leveranciers die we persoonlijk kennen — vis van de haven, groenten van het seizoen, olijfolie
                  van de boerderij van nonna.
                </p>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  Vandaag verwelkomen we gasten van overal, maar het gevoel blijft hetzelfde: alsof u bij ons thuis
                  aanschuift. Dat merkt u in elk bord, elk glas wijn en elk glimlachje aan tafel.
                </p>
                <div className="mt-8 flex flex-wrap gap-6 border-t border-stone-200/80 pt-8">
                  <div>
                    <p className="font-display text-3xl font-semibold text-[#6b1c2e]">26+</p>
                    <p className="text-sm text-stone-500">jaar passie</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold text-[#6b1c2e]">180+</p>
                    <p className="text-sm text-stone-500">wijnen op kaart</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold text-[#6b1c2e]">4.9</p>
                    <p className="text-sm text-stone-500">gemiddelde beoordeling</p>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="relative">
                  <div className="absolute -left-3 -top-3 h-24 w-24 rounded-full border border-amber-700/30" aria-hidden />
                  <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#6b1c2e]/10" aria-hidden />
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=900"
                    alt=""
                    className="relative rounded-3xl border border-stone-200/80 object-cover shadow-xl"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="border-b border-stone-200/60 bg-[#f6f0e8] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6b1c2e]">Menukaart</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#2c0a10] sm:text-4xl">
                Een selectie van onze favorieten
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-stone-600">
                Elk gerecht wordt met zorg bereid. Vraag naar allergenen — ons team helpt u graag.
              </p>
            </Reveal>

            {[
              { title: "Voorgerechten", items: menuVoorgerechten },
              { title: "Hoofdgerechten", items: menuHoofdgerechten },
              { title: "Desserts", items: menuDesserts }
            ].map((block) => (
              <div key={block.title} className="mt-16">
                <Reveal>
                  <h3 className="mb-8 flex items-center gap-4 font-display text-2xl font-semibold text-[#3d1419]">
                    <span className="h-px flex-1 max-w-[3rem] bg-gradient-to-r from-transparent to-[#6b1c2e]/40" />
                    {block.title}
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#6b1c2e]/40" />
                  </h3>
                </Reveal>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {block.items.map((item) => (
                    <Reveal key={item.name}>
                      <DishCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Signature */}
        <section
          id="signature"
          className="border-b border-stone-200/60 bg-gradient-to-b from-[#f0e4dc] via-[#faf6ef] to-[#f6f0e8] py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6b1c2e]">Specialiteiten</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#2c0a10] sm:text-4xl">
                Signature dishes & momenten
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-stone-600">
                Drie ervaringen die onze gasten keer op keer terug laten komen.
              </p>
            </Reveal>

            <div className="mt-14 space-y-8">
              {signatures.map((sig, i) => (
                <Reveal key={sig.title}>
                  <div
                    className={`flex flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_12px_40px_rgba(44,10,16,0.08)] transition hover:shadow-[0_24px_56px_rgba(44,10,16,0.12)] md:flex-row ${
                      i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/10] md:w-1/2 md:aspect-auto md:min-h-[280px]">
                      <img src={sig.img} alt="" className="h-full w-full object-cover" loading="lazy" />
                      <span className="absolute left-4 top-4 rounded-full bg-[#faf3e8]/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#6b1c2e] shadow-sm">
                        {sig.badge}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                      <p className="text-sm font-medium uppercase tracking-wider text-amber-800">{sig.subtitle}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-[#2c0a10] sm:text-3xl">{sig.title}</h3>
                      <p className="mt-4 text-stone-600 leading-relaxed">{sig.desc}</p>
                      <button
                        type="button"
                        onClick={() => scrollToId("reserveren")}
                        className="mt-8 self-start rounded-full border-2 border-[#6b1c2e] px-6 py-3 text-sm font-semibold text-[#6b1c2e] transition hover:bg-[#6b1c2e] hover:text-[#faf3e8]"
                      >
                        Reserveer vandaag nog uw tafel
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="border-b border-stone-200/60 bg-[#2c0a10] py-20 text-[#faf3e8]">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500/90">Gasten aan het woord</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Wat u bij ons kunt verwachten</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name}>
                  <blockquote className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-amber-600/30 hover:bg-white/[0.07]">
                    <Stars n={r.stars} />
                    <p className="mt-4 text-[#f0e8df] leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <footer className="mt-6 border-t border-white/10 pt-6">
                      <cite className="not-italic font-display text-lg font-semibold text-[#f5e6c8]">{r.name}</cite>
                      <p className="text-xs text-stone-400">Bezoek in 2024–2025</p>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Galerij */}
        <section id="galerij" className="border-b border-stone-200/60 bg-[#faf6ef] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6b1c2e]">Sfeerimpressie</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#2c0a10] sm:text-4xl">
                Sfeer, licht en gezelligheid
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-stone-600">
                Van de eerste aperitivo tot het laatste dessert — ontdek de ambiance van Osteria Nova.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {gallery.map((src) => (
                <Reveal key={src}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-md md:aspect-[5/4]">
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#2c0a10]/0 transition group-hover:bg-[#2c0a10]/20" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reserveren */}
        <section
          id="reserveren"
          className="border-b border-stone-200/60 bg-gradient-to-br from-[#efe6d8] via-[#f6f0e8] to-[#f0e4dc] py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white shadow-[0_24px_64px_rgba(44,10,16,0.1)]">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[280px] lg:min-h-full">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2c0a10]/85 to-[#2c0a10]/40" />
                  <div className="relative flex h-full flex-col justify-end p-8 lg:p-10">
                    <p className="font-display text-2xl text-[#f5e6c8] lg:text-3xl">Reserveer vandaag nog uw tafel</p>
                    <p className="mt-2 max-w-sm text-sm text-stone-300">
                      Liever bellen? Ons team helpt u met allergenen, groepen en speciale gelegenheden.
                    </p>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="font-display text-2xl font-semibold text-[#2c0a10] sm:text-3xl">Openingsuren & contact</h2>
                  <ul className="mt-8 space-y-4 text-stone-600">
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#6b1c2e]" aria-hidden>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold text-[#3d1419]">Keuken open</p>
                        <p>Di t/m zo · 17:30 – 22:30</p>
                        <p className="text-sm text-stone-500">Zondag brunch 12:00 – 15:00 (seizoensgebonden)</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#6b1c2e]" aria-hidden>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold text-[#3d1419]">Adres</p>
                        <p>Hoogstraat 14, 2000 Antwerpen</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#6b1c2e]" aria-hidden>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold text-[#3d1419]">Reserveren</p>
                        <p>
                          <a href="tel:+3230000000" className="text-[#6b1c2e] underline-offset-2 hover:underline">
                            03 000 00 00
                          </a>
                        </p>
                        <p>
                          <a
                            href="mailto:reserveren@osterianova.demo"
                            className="text-sm text-[#6b1c2e] underline-offset-2 hover:underline"
                          >
                            reserveren@osterianova.demo
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:+3230000000"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#6b1c2e] to-[#4a121f] px-6 py-4 text-center text-sm font-semibold text-[#faf3e8] shadow-md transition hover:brightness-110"
                    >
                      Bel om te reserveren
                    </a>
                    <button
                      type="button"
                      className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-[#6b1c2e]/40 px-6 py-4 text-sm font-semibold text-[#3d1419] transition hover:border-[#6b1c2e] hover:bg-[#6b1c2e]/5"
                      onClick={() => window.alert("In een live site koppelt u hier uw reserveringstool (bijv. Formitable, Zenchef).")}
                    >
                      Online reserveren (demo)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-[#231008] py-16 text-stone-300">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-700/40 bg-[#6b1c2e] font-display text-sm font-bold text-[#f5e6c8]">
                    ON
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold text-[#faf3e8]">Osteria Nova</p>
                    <p className="text-xs text-stone-500">Cucina & vini · Antwerpen</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-stone-400">
                  Authentieke Italiaanse keuken met een warme, moderne touch.{" "}
                  <Link to="/" className="text-amber-500/90 underline-offset-2 hover:underline">
                    Demo door SiteSprint
                  </Link>
                  . Foto&apos;s: Unsplash.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600/90">Contact</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>Hoogstraat 14, 2000 Antwerpen</li>
                  <li>
                    <a href="tel:+3230000000" className="hover:text-[#faf3e8]">
                      03 000 00 00
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hallo@osterianova.demo" className="hover:text-[#faf3e8]">
                      hallo@osterianova.demo
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600/90">Openingstijden</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>Di–za: 17:30 – 22:30</li>
                  <li>Zo: 17:00 – 21:30</li>
                  <li>Ma: gesloten</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600/90">Volg ons</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Instagram", "Facebook"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium transition hover:border-amber-600/50 hover:text-[#f5e6c8]"
                      onClick={(e) => e.preventDefault()}
                    >
                      {s}
                    </a>
                  ))}
                </div>
                <p className="mt-8 font-display text-lg italic text-[#f5e6c8]/90">
                  “A tavola, non si invecchia.”
                </p>
                <p className="mt-1 text-xs text-stone-500">Aan tafel veroudert men niet — Italiaans gezegde</p>
              </div>
            </div>
            <p className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-stone-600">
              © {new Date().getFullYear()} Osteria Nova (demo). Alle rechten voorbehouden.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
