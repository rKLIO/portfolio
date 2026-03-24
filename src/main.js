import { createApp } from 'vue'
import './style.css'
import './assets/home_portfolio.css'
import App from './App.vue'
import router from './router' // On importe le dossier router

createApp(App).use(router).mount('#app')
