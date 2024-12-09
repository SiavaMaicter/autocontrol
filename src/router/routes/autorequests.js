// const routeToCorusFolder = "../../components/askue/corus/"
const componentFolder = "../../components/";
const routes = [
  {
    path: "/auth",
    component: () => import(componentFolder + "AuthPage.vue"),
    name: "AuthPage",
    meta: { auth: false },
  },
  {
    path: "/",
    component: () => import(componentFolder + "MainPage.vue"),
    name: "MainPage",
    meta: { auth: true },
  },
  {
    path: "/kot/:id",
    component: () => import(componentFolder + "KotelnayaPage.vue"),
    name: "Kotelnaya",
    meta: { auth: true },
  },
];
export default {
  routes,
};
