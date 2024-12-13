import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const port = isDev? 5001 : 3001;
  return {
    base: isDev ? "/" : `http://test.xiaojie.com:${port}`,
    plugins: [
      react(),
      qiankun("sub1", {
        useDevMode: isDev,
      }),
    ],
    server: {
      port,
    },
  };
});
