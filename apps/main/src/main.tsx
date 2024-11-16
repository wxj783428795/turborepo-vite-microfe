import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@repo/ui/styles.css";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "sub1",
    entry: "//localhost:5001",
    container: "#subapp-container",
    activeRule: "/sub1",
  },
]);
start();
createRoot(document.getElementById("main")!).render(<App />);
