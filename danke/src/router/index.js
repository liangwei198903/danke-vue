import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import First from '../components/first.vue'
import Second from '../components/second.vue'
import Third from '../components/third.vue'
import Fourth from '../components/fourth.vue'
import Detail from '../views/detail.vue'
import Reg from '../views/reg.vue'
import Login from '../views/login.vue'
import Collect from '../views/collect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'index',
    component: Index
  },
  {
    path: '/index',
    component: Index,
    children:[
      {path:'',component:First,meta:{keepAlive:true}},
      {path:'second',component:Second},
      {path:'third',component:Third},
      {path:'fourth',component:Fourth},
    ]
  },
  {
    path:'/detail',
    name:'detail',
    component:Detail
  },
  {
    path:'/reg',
    name:'reg',
    component:Reg
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/collect',
    name:'collect',
    component:Collect
  }
]

const router = new VueRouter({
  routes
})

export default router
