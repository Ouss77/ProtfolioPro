import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { initLocale } from './composables/useI18n'

initLocale()

createApp(App).use(router).mount('#app')
