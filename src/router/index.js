import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Auth from '../views/Auth'
import Help from '../views/Help'

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
        path: '/help',
        component: Help,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
