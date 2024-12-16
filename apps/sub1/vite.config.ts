import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PluginOption } from "vite";
import qiankun from "@repo/vite-plugin-qiankun";
// https://vite.dev/config/
/**
 * @param {mode} development, production, test
 */
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const isProd = mode === "production";
  const port = isDev ? 5001 : 3001;
  return {
    //开发，测试环境路径为/，生产环境路径为http://test.xiaojie.com:3001
    base: !isProd ? "/" : `http://test.xiaojie.com:${port}`,
    plugins: [
      react(),
      qiankun("sub1", {
        useDevMode: isDev,
      }) as PluginOption,
    ],
    server: {
      port,
    },
  };
});
