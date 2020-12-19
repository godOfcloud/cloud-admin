import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 样式
import './styles/global.scss'
// 乾坤启动程序
import startQiankun from "./micro";
startQiankun()

const app = createApp(App)
import installElementPlus from './plugins/element'
installElementPlus(app)
app.use(store).use(router).mount('#root-app')
