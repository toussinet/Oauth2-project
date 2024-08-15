import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import './index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
axios.defaults.baseURL= import.meta.env.VITE_BASE_URL;

app.use(createPinia())
app.use(router)

app.mount('#app')
