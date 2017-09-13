import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import router from './route/routes'

/* eslint-disable no-new */
new Vue({
    // el: 'body',
    el: '#app',
    // router,
    render: h => h(App)
    // components: { App }
})

