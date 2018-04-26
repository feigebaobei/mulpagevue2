import Vue from 'vue'
import second from './second.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#second',
  render: h => h(second)
})
