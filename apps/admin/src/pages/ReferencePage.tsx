import { useQuery } from "@tanstack/react-query";

import { api, unwrap } from "@/lib/api/client";
import type { Section } from "@/sections";

/** «Справочники»: cities and categories from the live API — the first end-to-end check. */
export function ReferencePage({ section }: { section: Section }) {
  const cities = useQuery({ queryKey: ["cities"], queryFn: () => unwrap(api.GET("/api/v1/cities")) });
  const categories = useQuery({ queryKey: ["categories"], queryFn: () => unwrap(api.GET("/api/v1/categories")) });

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold">{section.title}</h1>
        <p className="text-muted">{section.description}. Редактирование — в {section.feature}.</p>
      </div>

      <Table
        title="Города"
        state={cities}
        head={["slug", "Название (ru)", "Атауы (kk)"]}
        rows={(cities.data ?? []).map((c) => [c.slug, c.nameRu, c.nameKk])}
      />
      <Table
        title="Категории"
        state={categories}
        head={["slug", "Название (ru)", "Атауы (kk)", "Нужен отчёт"]}
        rows={(categories.data ?? []).map((c) => [c.slug, c.nameRu, c.nameKk, c.requiresReport ? "да" : "нет"])}
      />
    </div>
  );
}

interface TableProps {
  title: string;
  state: { isPending: boolean; error: Error | null };
  head: string[];
  rows: string[][];
}

function Table({ title, state, head, rows }: TableProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-line bg-white">
      <h2 className="border-b border-line px-4 py-3 font-bold">{title}</h2>
      {state.isPending ? <p className="px-4 py-3 text-sm text-muted">Загрузка…</p> : null}
      {state.error ? <p className="px-4 py-3 text-sm text-danger">{state.error.message}</p> : null}
      {rows.length > 0 ? (
        <table className="w-full text-left text-sm">
          <thead className="bg-page text-muted">
            <tr>
              {head.map((h) => (
                <th key={h} className="px-4 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-line">
                {r.map((cell, i) => (
                  <td key={i} className="px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </section>
  );
}
