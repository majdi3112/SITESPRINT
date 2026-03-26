const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

/** M&N merklogo (cirkel, navy op wit) — bestand: `public/logo.png`. */
function LogoMarkImg({ className = "h-9 w-9", alt = "" }) {
  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`${className} shrink-0 rounded-full object-cover shadow-md ring-1 ring-white/10`}
      width={160}
      height={160}
      decoding="async"
    />
  );
}

/**
 * @param {"dark" | "light"} variant — dark: light text on dark UI. light: dark text on light sections.
 */
export function Logo({ size = "md", showWordmark = true, className = "", variant = "dark" }) {
  const sizes = {
    sm: { icon: "h-8 w-8", text: "text-base tracking-tight" },
    md: { icon: "h-9 w-9 sm:h-10 sm:w-10", text: "text-lg sm:text-xl tracking-tight" },
    lg: { icon: "h-11 w-11 sm:h-12 sm:w-12", text: "text-2xl tracking-tight" }
  };
  const s = sizes[size] || sizes.md;
  const wordClass =
    variant === "light"
      ? "text-slate-900"
      : "text-slate-50 drop-shadow-sm";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMarkImg className={s.icon} alt="SiteSprint logo" />
      {showWordmark ? (
        <span className={`font-display font-bold ${s.text} ${wordClass}`}>
          Site<span className={variant === "light" ? "text-cyan-700" : "text-cyan-300"}>Sprint</span>
        </span>
      ) : null}
    </div>
  );
}

/** Alleen het ronde M&N-logo (o.a. compacte header). */
export function LogoMarkOnly({ className = "h-9 w-9" }) {
  return <LogoMarkImg className={className} alt="SiteSprint" />;
}

export default Logo;
