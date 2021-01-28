import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
// import BMap from 'vue-baidu-map';
import axios from 'axios';
Vue.prototype.axios=axios;
axios.defaults.baseURL="http://localhost:8000";
// Vue.use(BMap,{
  // ak:'Fh9X4hT3ygcBMZnlPbRlMG508r0OCqsk'
 // ak:'DD279b2a90afdf0ae7a3796787a0742e'
// })
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
