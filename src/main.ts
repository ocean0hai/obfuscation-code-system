import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import router from "./router/index.js";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
