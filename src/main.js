import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './router';
import mitt from 'mitt'

const app = createApp(App);
const emitter = mitt();
app.config.globalProperties.$emitter = emitter;

app.use(router).mount('#app');