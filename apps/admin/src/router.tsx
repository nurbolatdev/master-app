import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ReferencePage } from "@/pages/ReferencePage";
import { SectionPage } from "@/pages/SectionPage";
import { sections } from "@/sections";

export const queryClient = new QueryClient();

// Sign-in for ADMIN (/sign-in + guard in beforeLoad) arrives in F0-9.
const rootRoute = createRootRoute({
  component: () => (
    <AppShell>
      <Outlet />
    </AppShell>
  ),
  notFoundComponent: NotFoundPage,
});

const sectionRoutes = sections.map((section) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: section.path,
    component: () =>
      section.path === "/reference" ? <ReferencePage section={section} /> : <SectionPage section={section} />,
  }),
);

const routeTree = rootRoute.addChildren(sectionRoutes);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
