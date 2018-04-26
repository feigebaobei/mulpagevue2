import Vue from 'vue'
import first from './first.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#first',
  render: h => h(first)
})
