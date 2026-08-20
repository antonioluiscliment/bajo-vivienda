export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="page-header">
      <a href="/" className="back-link">
        ← Volver al inicio
      </a>
      <p className="page-header-eyebrow mono">{eyebrow}</p>
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </header>
  );
}
