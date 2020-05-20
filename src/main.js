import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '/test', name: 'test', component: { template: '<div>Hello test</div>' } }
]

const router = new VueRouter({
    routes,
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
