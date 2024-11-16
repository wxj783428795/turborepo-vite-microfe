import { Button } from "@repo/ui/button";
import { Calendar, Home, Inbox, Search, Settings } from "@repo/ui/icons";
// import { Text } from "@repo/ui/text";
import "./App.css";
import Layout from "@repo/ui/layout";
// Menu items.
const items = [
  {
    title: "子应用1",
    url: "/sub1",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

function App() {
  return (
    <Layout menus={items}> 
      <div>
        main
        <Button>按钮</Button>
      </div>
      <div id="subapp-container"></div>
    </Layout>
  );
}

export default App;
