import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import StaffList from '../views/Staff/List'
import StaffClients from '../views/Staff/Clients'
import Empty from "../components/Empty";
import {microAppPrefix} from "../components/Container";

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
    path: `/${microAppPrefix}/order/list`,
    name: 'OrderList',
    component: Empty,
  },
  {
    path: `/${microAppPrefix}/order/details`,
    name: 'OrderDetails',
    component: Empty,
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
