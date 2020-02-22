import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
// 请求方法的挂载到vue
import {getRequest} from './network/api'
import {postRequest} from './network/api'
import {deleteRequest} from './network/api'
import {putRequest} from './network/api'



/*import { Button, Input, Pagination, Table, TableColumn, MessageBox } from 'element-ui'*/
/*Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$alert = MessageBox.alert*/
Vue.use(ElementUI)

// 请求方法的挂载到vue
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
