import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@repo/ui/styles.css";
import { registerMicroApps, start } from "qiankun";
import { odmConfig } from "@repo/odm-config";

const config = odmConfig[import.meta.env.MODE];
registerMicroApps(config.entries);
start();
createRoot(document.getElementById("main")!).render(<App />);
