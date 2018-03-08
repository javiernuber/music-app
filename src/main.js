import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import EventBus from '@/plugins/event-bus'
import blur from '@/directives/blur'
import msToMm from '@/filters/ms-to-mm'

import routes from '@/routes'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(blur)
Vue.use(msToMm)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
