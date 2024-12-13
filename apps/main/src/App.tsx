import { Button } from "@repo/ui/button";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  AudioWaveform,
  GalleryVerticalEnd,
} from "@repo/ui/icons";
// import { Text } from "@repo/ui/text";
import "./App.css";
import Layout from "@repo/ui/layout";
import { useState } from "react";
// Menu items.
const items = [
  {
    name: "子应用1",
    logo: AudioWaveform,
    brief: "子应用简介 1",
    url: "/sub1",
    menus: [
      {
        title: "子应用1-菜单1",
        url: "/sub1/menu1",
        icon: Home,
      },
      {
        title: "子应用1-菜单2",
        url: "/sub1/menu2",
        icon: Inbox,
      },
      {
        title: "子应用1-菜单3",
        url: "/sub1/menu3",
        icon: Calendar,
      },
      {
        title: "子应用1-菜单4",
        url: "/sub1/menu4",
        icon: Search,
      },
    ],
  },
  {
    name: "子应用2",
    logo: GalleryVerticalEnd,
    brief: "子应用简介 2",
    url: "/sub2",
    menus: [
      {
        title: "子应用2-菜单1",
        url: "/sub2/menu1",
        icon: Home,
      },
      {
        title: "子应用2-菜单2",
        url: "/sub2/menu2",
        icon: Inbox,
      },
      {
        title: "子应用2-菜单3",
        url: "/sub2/menu3",
        icon: Calendar,
      },
      {
        title: "子应用2-菜单4",
        url: "/sub2/menu4",
        icon: Search,
      },
    ],
  },
];

function App() {
  const [count, setCount] = useState(0);
  return (
    <Layout appMenus={items}>
      <div>
        main
        {count}
        <Button onClick={() => setCount(count + 1)}>按钮</Button>
      </div>
      <div id="subapp-container"></div>
    </Layout>
  );
}

export default App;
