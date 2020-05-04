import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'
import './static/reset.scss'
//使用github提交代码
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')