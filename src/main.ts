import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.ts'

function resize() {
    const styles: any = document.body.style
    styles.zoom = window.innerWidth <= 1450 ? 1 : window.innerWidth / 1920
}
window.onresize = resize

createApp(App).use(router).mount('#app')
