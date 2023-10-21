import './assets/styles/main.css'

import SvgIcon from "@/components/BaseComponents/SvgIcon.vue";

import { createApp } from 'vue'
import { createPinia } from "pinia";
const pinia = createPinia()
import App from './App.vue'

const app = createApp(App);

app.use(pinia)
app.component('SvgIcon', SvgIcon)

app.mount('#app')
