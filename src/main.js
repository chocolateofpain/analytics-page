import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false

Vue.use<(HighchartsVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
