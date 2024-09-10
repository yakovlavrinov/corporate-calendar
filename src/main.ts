import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import components from '@/components/UI/index'
console.log(components)
const app = createApp(App)

components.forEach(component=> {
    app.component(component.name, component)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
