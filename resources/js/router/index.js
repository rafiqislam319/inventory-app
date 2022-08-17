import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import ForgotPassword from "../components/ForgotPassword.vue";

const routes = [
    {
        path: "/",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/forgot-password",
        component: ForgotPassword,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
