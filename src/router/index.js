//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home/index.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Search from '@/pages/Search/index.vue'
//配置路由
export default new VueRouter({
  //配置路由
  routes: [{
    //重定向
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { showFooter: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { showFooter: false }
  }, {
    path: '/search/:keyword?',
    component: Search,
    meta: { showFooter: true },
    name: 'search'
  }, {
    path: '/register',
    component: Register,
    meta: { showFooter: false }
  }]
})