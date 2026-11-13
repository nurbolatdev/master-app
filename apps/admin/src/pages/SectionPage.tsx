import type { Section } from "@/sections";

/** A section that is not built yet: what it will do and which feature brings it. */
export function SectionPage({ section }: { section: Section }) {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-extrabold">{section.title}</h1>
      <p className="text-muted">{section.description}</p>
      <div className="rounded-xl border border-dashed border-line bg-white p-6 text-sm text-muted">
        <span className="font-bold text-primary">{section.feature}</span> — раздел появится вместе с фичей
        (см. Roadmap в vault).
      </div>
    </div>
  );
}
