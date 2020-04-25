import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')


// Agregue el siguiente código en su componente (por ejemplo, App.vue):

// import M from 'materialize-css'

// export default {
// ...
// mounted () {
//     M.AutoInit()
// },
// ...