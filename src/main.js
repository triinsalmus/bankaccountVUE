import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')

module.exports= {
    devServer: {
        proxy: {
            '˄/banksql2': {
                target: 'http://localhost:8080',
                changeOrigin: true
            },
        }
    }
}