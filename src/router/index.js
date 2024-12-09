import { createRouter, createWebHistory } from "vue-router";
import autorequests from "./routes/autorequests";
import store from "../store/store";
import auth from "@/store/modules/auth";
let allRoutes = [];
const routes = allRoutes.concat(
  autorequests.routes
  // accountRoutes.routes,
  // mainPage
);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  if (to.meta.auth && !store.getters.auth) {
    localStorage.setItem("redirectAfterLogin", to.fullPath);
    const access = await store.dispatch("RefreshAction", {
      token: localStorage.getItem("user_token"),
    });
    if (!access) {
      next({ name: "AuthPage" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
