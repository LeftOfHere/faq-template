import { createApp } from "vue";
import "./assets/main.css";
//@ts-ignore
import { createI18n } from "vue-i18n";
import { messages } from "./assets/locales/messages";
import router from "./router";
import App from "./App.vue";

const i18n = createI18n({
  legacy: false,
  sync: true,
  locale: localStorage.getItem("i18next") || "en",
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");
