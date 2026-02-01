import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from '@/routes'
import { useDarkMode } from '@/composables/useDarkMode'
import { useServiceWorker } from '@/composables/useServiceWorker'
import { useAccessibility } from '@/composables/useAccessibility'

// Initialize dark mode
useDarkMode()

// Register service worker for PWA
useServiceWorker()

// Initialize accessibility features
useAccessibility()

createApp(App).use(router).mount('#app')
