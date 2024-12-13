import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";

import { AppSwitcher } from "./app-switcher";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export type AppMenu = {
  url: string;
  name: string;
  logo: React.ComponentType;
  brief: string;
  menus: Menu[];
};

export type Menu = {
  title: string;
  url: string;
  icon: React.ComponentType;
};

export function AppSidebar({ appMenus }: { appMenus: AppMenu[] }) {
  const [activeApp, setActiveApp] = useState(appMenus[0]);
  console.log("activeApp", activeApp);
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <AppSwitcher
          apps={appMenus}
          activeApp={activeApp}
          setActiveApp={setActiveApp}
        />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>menus</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {activeApp.menus.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <span onClick={() => history.pushState({}, "", item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
