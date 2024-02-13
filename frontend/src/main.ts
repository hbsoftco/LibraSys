import { createApp } from 'vue'

import '@/assets/styles/tailwind.css'
import '@/assets/styles/fonts.css'
import '@/assets/styles/style.css'

import 'preline/preline'

import { createPinia } from 'pinia'

// @ts-ignore
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

import i18n from './plugins/i18n'

const app = createApp(App)

app.use(VueApexCharts)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
