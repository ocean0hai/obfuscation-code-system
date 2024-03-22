import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss],
    },
  },
  build: {
    minify: false,
  },
  server: {
    //中转服务器
    port: 8800, // 你需要定义的端口号
    // origin: "http://127.0.0.1:8800",
    // host:'0.0.0.0',
    proxy: {
      //通过代理实现跨域
      "/api": {
        target: "http://8.130.113.197:8080", //替换的服务器地址
        changeOrigin: true, //开启代理，允许跨域
        // 重写路径 --> 作用与vue配置pathRewrite作用相同
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
