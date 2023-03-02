import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/')
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/login')
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: function () {
            return import('@/views/HomeView.vue');
        },
    },
    {
        path: '/login',
        name: 'login',
        component: function () {
            return import('@/components/Login.vue')
        },
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/register',
        name: 'register',
        component: function () {
            return import('@/components/SignUp.vue');
        },
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/logout',
        name: 'logout',
        component: function () {
            return import('@/components/SignOut.vue');
        },
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: function () {
            return import('@/components/Catalog.vue');
        },
    },
    {
        path: '/cart',
        name: 'cart',
        component: function () {
            return import('@/components/Cart.vue');
        },
        beforeEnter: ifAuthenticated
    },
    {
        path: '/orders',
        name: 'orders',
        component: function () {
            return import('@/components/Order.vue');
        },
        beforeEnter: ifAuthenticated,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router