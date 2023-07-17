import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import MainPage from "../pages/MainPage.vue"
import PolicyPage from "../pages/PolicyPage.vue"
import TermsPage from "../pages/TermsPage.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        }
    },
    {
        path: '/policy',
        name: 'PolicyPage',
        component: PolicyPage,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        }
    },
    {
        path: '/terms',
        name: 'TermsPage',
        component: TermsPage,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router