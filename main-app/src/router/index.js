import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import OrderList from "../views/Order/List"
import OrderDetails from '../views/Order/Details'
import StaffList from '../views/Staff/List'
import StaffClients from '../views/Staff/Clients'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/order/list',
    name: 'OrderList',
    component: OrderList,
  },
  {
    path: '/order/details',
    name: 'OrderDetails',
    component: OrderDetails,
  },
  {
    path: '/staff/list',
    name: 'StaffList',
    component: StaffList,
  },
  {
    path: '/staff/clients',
    name: 'StaffClients',
    component: StaffClients,
  }
]

const router = new VueRouter({
  routes
})

export default router
