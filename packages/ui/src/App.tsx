
import Layout from "#components/layout.tsx";
import { Calendar, Home, Inbox, Search, Settings } from "#components/icons";
const items = [
  {
    title: "子应用1",
    url: "/sub1",
    icon:Home
  },
 
];

function App() {

  return (
    <Layout menus={items}>
      <div>123</div>
    </Layout>
  );
}

export default App;
