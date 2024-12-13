import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@repo/ui/styles.css";
import { registerMicroApps, start } from "qiankun";
import { odmConfig } from "@repo/odm-config";

// registerMicroApps([
//   {
//     name: "sub1",
//     entry: "//localhost:5001",
//     container: "#subapp-container",
//     activeRule: "/sub1",
//   },
//   {
//     name: "sub2",
//     entry: "//localhost:5002",
//     container: "#subapp-container",
//     activeRule: "/sub2",
//   },
// ]);
const config = odmConfig[import.meta.env.MODE];
console.log("config", config);
registerMicroApps(config);
start();
createRoot(document.getElementById("main")!).render(<App />);
