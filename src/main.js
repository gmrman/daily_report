import Vue from 'vue'
import App from './App.vue'
//elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css' 
//路由
import router from './lib/router'
//ajax
import API from './lib/API' 
//弹出框
import Pop from './lib/pop' 



//开启debug模式
Vue.config.debug = true;
Vue.use(ElementUI)
Vue.use(API)
Vue.use(Pop)
// Vue.use(httpservice);

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  created(){
    console.log(this.$http?'http works!':'Uh oh..');
  },
  router: router,
  render: h => h(App)
}).$mount('#app')
