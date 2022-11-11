import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",
  //host:'localhost',
  port:8800,
  theme,
  shouldPrefetch: false,
});
