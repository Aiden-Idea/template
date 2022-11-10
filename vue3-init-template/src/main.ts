import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import i18n from './i18n'
import { createPinia } from 'pinia'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

const language = localStorage.getItem('language')
const pinia = createPinia()

app.component('svg-icon', SvgIcon)
app.use(Router)
app.use(i18n)
app.use(ElementPlus, {
  locale: language === 'zh-cn' ? zhCn : ''
})
app.use(pinia)
app.mount('#app')
