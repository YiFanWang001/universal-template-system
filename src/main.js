import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import '@/assets/icons'
import SvgIcon from '@/components/plugins/svgIcon.vue'

import './authentication'
console.log(process.env.VUE_APP_BASE_API)

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .component('svg-icon', SvgIcon)

.mount('#app')