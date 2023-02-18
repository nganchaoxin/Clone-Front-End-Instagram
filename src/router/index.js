import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/index.vue";


const routes = [
  { path: "/", component: Home },
  
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
