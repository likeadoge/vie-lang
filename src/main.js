import { createApp } from 'vue'
import App from './App.vue'
import './css/reset.css'
import './css/globe.css'

import VieCall from './components/VieCall'

const app = createApp(App)

app.component('VieCall',VieCall)

app.mount('#app')
