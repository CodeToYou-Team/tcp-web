interface SpecItem {
  label: string;
  value?: string | number | null;
}

// Lista etiqueta–valor para fichas del vehículo (dl/dt/dd).
// Los items sin valor se omiten.
export function SpecList({ items }: { items: SpecItem[] }) {
  const filled = items.filter((item) => item.value);

  return (
    <dl>
      {filled.map(({ label, value }) => (
        <div
          key={label}
          className="flex items-baseline justify-between gap-4 border-b border-white/5 py-2 first:pt-0 last:border-none last:pb-0"
        >
          <dt className="shrink-0 text-sm text-zinc-400">{label}</dt>
          <dd className="text-right text-sm font-medium text-zinc-100">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
