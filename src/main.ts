import './assets/main.css'

import { createApp } from 'vue'
import type { Component } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import components from '@/components/UI/index'

const app = createApp(App)

components.forEach((component: Component) => {
    if (component.name) {
        app.component(component.name, component)
    } else {
        console.warn('Component is missing a name:', component)
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
