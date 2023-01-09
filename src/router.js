import { createRouter, createWebHashHistory } from 'vue-router';

import Upload from './pages/upload.vue'

const routes = [
    { path: '/', name: 'Home' },
    { path: '/upload', name: 'Upload', component: Upload },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router;