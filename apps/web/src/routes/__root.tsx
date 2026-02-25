import { HeadContent, Outlet, createRootRouteWithContext, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "../index.css";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "SignSecure - Buy Digital Signature Certificate Online | Class 3 DSC in 30 Minutes",
      },
      {
        name: "description",
        content: "Buy Digital Signature Certificate online. Government-approved Class 3 DSC for GST, MCA, Income Tax, e-Tendering & more. 100% paperless. Same-day delivery across India.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});

const MARKETING_ROUTES = ["/", "/products", "/pricing", "/partners", "/about", "/downloads", "/contact", "/blog"];

function RootComponent() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isMarketingPage =
    MARKETING_ROUTES.includes(pathname) ||
    pathname.startsWith("/products/");

  return (
    <>
      <HeadContent />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        storageKey="vite-ui-theme"
      >
        {isMarketingPage ? (
          /* Marketing pages use their own header/footer inside the page */
          <Outlet />
        ) : (
          /* App pages (dashboard, etc.) use the standard layout */
          <div className="grid grid-rows-[auto_1fr] h-svh">
            <Header />
            <Outlet />
          </div>
        )}
        <Toaster richColors />
      </ThemeProvider>
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
