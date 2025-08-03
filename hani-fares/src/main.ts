import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from '@/routes'
document.documentElement.classList.add("dark")

createApp(App).use(router).mount('#app')
