import Vue from 'vue'

// plugins
import '@/plugins'

// application
import App from './App.vue'
import router from './router/router'
import http from '@/http/http';
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

Vue.config.productionTip = false;

VueCookies.config('7d');

new Vue({
    el: '#app',
    router,
    http,
    render: h => h(App)
});
