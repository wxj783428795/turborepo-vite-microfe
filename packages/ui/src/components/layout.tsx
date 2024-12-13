import { AppMenu, AppSidebar } from "./app-sidebar";
import { ThemeProvider } from "./theme-provider";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Layout({
  children,
  appMenus,
}: {
  children: React.ReactNode;
  appMenus: AppMenu[];
}) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar appMenus={appMenus} />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
