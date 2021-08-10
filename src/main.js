import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/scss/index.scss'
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'



createApp(App)
    .use(store)
    .use(router)

    .mount('#app')
