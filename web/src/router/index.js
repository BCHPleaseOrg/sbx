import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Auth from '../views/Auth'
import Exchange from '../views/Exchange'
import FAQ from '../views/FAQ'
import $SBX from '../views/$SBX'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/auth',
        component: Auth,
    },
    {
        path: '/exchange',
        component: Exchange,
    },
    {
        path: '/faq',
        component: FAQ,
    },
    {
        path: '/$sbx',
        component: $SBX,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
