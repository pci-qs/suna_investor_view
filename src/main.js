import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import vueGoogleCharts from './plugins/googleCharts'
import i18n from './plugins/i18n';

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  vuetify,
  vueGoogleCharts,
  render: h => h(App)
}).$mount('#app')
