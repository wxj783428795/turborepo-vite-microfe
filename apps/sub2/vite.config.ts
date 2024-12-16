import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "@repo/vite-plugin-qiankun";
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const isProd = mode === "production";
  const port = isDev ? 5002 : 3002;
  return {
    //开发，测试环境路径为/，生产环境路径为http://test.xiaojie.com:3001
    base: !isProd ? "/" : `http://test.xiaojie.com:${port}`,
    plugins: [
      react(),
      qiankun("sub2", {
        useDevMode: isDev,
      }),
    ],
    server: {
      port,
    },
  };
});
