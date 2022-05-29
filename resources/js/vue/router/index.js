import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        meta: {
            layout: "main",
            title: "Главная страница",
        },
        component: HomeView,
    },
    {
        path: "/admin",
        name: "admin",
        meta: {
            layout: "main",
            title: "Админ панель",
        },
        component: () => import('@/views/Admin'),
    },
    {
        path: "/admin/sync/:id",
        name: "sync",
        meta: {
            layout: "main",
            title: "Админ панель",
        },
        component: () => import('@/views/Sync'),
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        meta: {layout: "Main"},
        component: () => import("@/views/NotFoundPage"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    if (!to.meta["title"]) document.title = "Syncer";
    else document.title = `Syncer | ${to.meta["title"]}`;
});

export default router;
