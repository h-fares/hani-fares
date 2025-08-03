import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Services from '@/pages/Services.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/services', name: 'Services', component: Services },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio },
    { path: '/contact', name: 'Contact', component: Contact },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})