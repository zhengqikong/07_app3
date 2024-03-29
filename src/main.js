import Vue from 'vue'
import App from './App.vue'

// 注册三级联动组件为全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)//第一个参数：全局组件的名字 第二个参数：哪一个组件
// 注册轮播图全局组件
import Carousel from '@/components/Carousel'
Vue.component('Carousel', Carousel)
// 注册分页器全局组件
import Pagination from '@/components/Pageination'
Vue.component('Pagination', Pagination)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/loading.gif'
Vue.use(VueLazyload, {
  // 懒加载默认图片
  loading: loading
})

// 引入自定义插件
// import myPlugins from './plugins/myplugins'
// Vue.use(myPlugins, {
//   name: 'upper'
// })

// 引入路由
import router from './router'
// 引入仓库
import store from './store'
// 引入mock数据:mock没有对外暴露,直接引用,不需要import A from B
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 统一接口api
import * as API from '@/api'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由：地下的写法KV一致，router小写
  // 注册路由信息：当这里写router的时候，组件身上都有$route,$router属性
  router,
  // 注册仓库：组件实例的身上会多一个$store 属性
  store
}).$mount('#app')
