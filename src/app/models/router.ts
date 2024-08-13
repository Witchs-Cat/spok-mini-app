import { createRouter, createMemoryHistory } from 'vue-router';
import { Routes } from '@/entities';

let pageIndex = 0;
const routes = [
    { 
        path: Routes.Home,
        component: () => import("@/pages/home"),
        meta: {
            pageIndex: pageIndex++,
            useAnimation: true
        }
    },
    { 
        path: Routes.Settings, 
        component: () => import("@/pages/settings"),
        meta: {
            pageIndex: pageIndex++,
            useAnimation: true
        } 
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router }