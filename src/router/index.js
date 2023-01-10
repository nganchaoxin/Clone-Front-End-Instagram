import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/index.vue'
import Upload from '../pages/upload.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/upload', component: Upload },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;