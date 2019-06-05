import Vue from 'vue'
import App from './App.vue'
import router from '../routers'
import store from '../stores'
import axios from "axios"
import "../public/css/iconfont.css"
Vue.prototype.axios = axios
Vue.config.productionTip = false


import {
  Cell,
  CellGroup,
  List,
  Tab,
  Tabs,
  Swipe,
  SwipeItem
} from 'vant';
Vue.use(Cell).use(CellGroup);
Vue.use(List);
Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);

Vue.filter("imgfilter", function (value) {
  return value.replace('w.h', '200.350')
})

import {
  Rate
} from 'vant';

Vue.use(Rate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')