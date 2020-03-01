import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home.vue'
import Vip from '@/components/vip/vip.vue'
import Shotcart from '@/components/shotcart/shotcart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/vip',
      name:'vip',
      component:Vip
    },
    {
      path:'/shotcart',
      name:'shotcart',
      component:Shotcart
    }
    
  ]
})


