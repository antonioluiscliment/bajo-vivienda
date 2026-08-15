type CotaItem = {
  label: string;
  value: string;
  strong?: boolean;
};

export default function CotaDivider({ items }: { items: CotaItem[] }) {
  return (
    <div className="cota" role="separator" aria-hidden="true">
      <div className="cota-label mono">
        {items.map((item, i) => (
          <span key={i}>
            {item.strong ? <b>{item.label}</b> : item.label}{" "}
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
}
