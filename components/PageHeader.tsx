import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";

const BACK_LABEL: Record<Locale, string> = {
  es: "← Volver al inicio",
  en: "← Back to home",
};

export default function PageHeader({
  locale,
  eyebrow,
  title,
  intro,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="page-header">
      <a href={localeHref(locale, "/")} className="back-link">
        {BACK_LABEL[locale]}
      </a>
      <p className="page-header-eyebrow mono">{eyebrow}</p>
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </header>
  );
}
