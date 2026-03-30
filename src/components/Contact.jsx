import { useForm, ValidationError } from "@formspree/react";

const inputClass =
  "w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/25";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqegzovw");

  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-b border-slate-800 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-void to-midnight" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Laten we jouw site scherp neerzetten
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-300">
              Vertel kort wie je bent en wat je nodig hebt. We reageren persoonlijk geen standaardmailtjes.
            </p>
            <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-700">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt=""
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-slate-100">
                Samen zorgen we dat je online net zo professioneel oogt als offline.
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-sm font-medium text-slate-300">
              <li>
                <span className="font-semibold text-slate-100">E-mail</span>{" "}
                <a href="mailto:info@sitesprint.eu" className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline">
                  info@sitesprint.eu
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-100">Telefoon</span>{" "}
                <a href="tel:+32498338913" className="text-slate-200 hover:text-white hover:underline">
                  +32 498 33 89 13
                </a>
              </li>
            </ul>
          </div>

          {state.succeeded ? (
            <div
              className="rounded-2xl border border-slate-600 bg-slate-900/95 p-10 text-center shadow-lg"
              data-reveal
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Bericht verzonden</h3>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-300">
                Bedankt, je bericht is succesvol verzonden. We nemen zo snel mogelijk contact met je op.
              </p>
            </div>
          ) : (
            <form
              data-reveal
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-700 bg-slate-900/95 p-8 shadow-xl"
              noValidate
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    Naam <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Jouw naam"
                  />
                  <ValidationError
                    prefix="Naam"
                    field="name"
                    errors={state.errors}
                    className="mt-1.5 text-sm text-red-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    E-mail <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="naam@voorbeeld.be"
                  />
                  <ValidationError
                    prefix="E-mail"
                    field="email"
                    errors={state.errors}
                    className="mt-1.5 text-sm text-red-400"
                  />
                </div>

                <div>
                  <label htmlFor="branche" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    Type bedrijf / branche <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="branche"
                    name="branche"
                    type="text"
                    required
                    className={inputClass}
                    placeholder="Bv. restaurant, kapsalon, sportschool"
                  />
                  <ValidationError
                    prefix="Branche"
                    field="branche"
                    errors={state.errors}
                    className="mt-1.5 text-sm text-red-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    Bericht <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-y`}
                    placeholder="Waar kunnen we je mee helpen?"
                  />
                  <ValidationError
                    prefix="Bericht"
                    field="message"
                    errors={state.errors}
                    className="mt-1.5 text-sm text-red-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-4 text-sm font-bold text-slate-950 shadow-md shadow-black/40 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? "Verzenden…" : "Verstuur bericht"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
