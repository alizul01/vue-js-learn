import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.min.js"
import router from './router'