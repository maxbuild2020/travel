import { createApp } from 'vue';
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'

import './assets/style/border.css'
import './assets/style/reset.css'
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
