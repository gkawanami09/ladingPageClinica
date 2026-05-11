interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionTitle({ eyebrow, title, description, center }: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
