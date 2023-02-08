import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/index.vue";
import Create from "../pages/create.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/create", name: "Create", component: Create, props: true },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
