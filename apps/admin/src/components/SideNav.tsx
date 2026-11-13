import { Link } from "@tanstack/react-router";

import { sections } from "@/sections";

export function SideNav() {
  return (
    <nav className="flex w-60 shrink-0 flex-col gap-1 border-r border-line bg-white p-4">
      <div className="mb-4 px-2 text-lg font-extrabold">
        Master App <span className="font-medium text-muted">· админка</span>
      </div>
      {sections.map((s) => (
        <Link
          key={s.path}
          to={s.path}
          activeOptions={{ exact: true }}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-muted hover:bg-page"
          activeProps={{ className: "bg-primary-soft text-primary" }}
        >
          <s.icon size={18} aria-hidden />
          {s.title}
        </Link>
      ))}
    </nav>
  );
}
