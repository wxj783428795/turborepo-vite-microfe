import { AppSidebar, Menu } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Layout({
  children,
  menus,
}: {
  children: React.ReactNode;
  menus: Menu[];
}) {
  return (
    <SidebarProvider>
      <AppSidebar menus={menus}/>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
