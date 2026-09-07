import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../src/assets/styles/style.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')

const app_element = document.getElementById("app");
if (app_element){
    console.log("setting user theme on app element");
    app_element.dataset.theme = localStorage.getItem("user_theme") ?? "light"
}