import type { ReactNode } from "react";

import { SideNav } from "./SideNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
