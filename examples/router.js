import Vue from 'vue'
import Router from 'vue-router'
import Install from './pages/install'
import TestItem from './pages/test-item'
import Eventer from './pages/eventer'
import Toggle from './pages/toggle'
import Test from './pages/test'
import Bmap from './pages/bmap.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '安装', component: Install },
    { path: '/test-item/:type', name: '测试图表', component: TestItem },
    { path: '/eventer', name: '事件监听', component: Eventer },
    { path: '/toggle', name: '图表切换', component: Toggle },
    { path: '/test', name: '测试', component: Test },
    { path: '/bmap', name: '百度地图', component: Bmap }
  ]
})
