import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../pages/login.vue'
import secondcomponent from '../pages/secondcomponent.vue'

Vue.use(VueRouter);

 //这里可以带有路由器的配置参数
const router = new VueRouter({
  mode: 'history',
  base: __dirname+'/report',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
});

export default router; //将路由器导出
