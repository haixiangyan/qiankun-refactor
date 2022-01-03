<template>
  <a-layout class="app">
    <!-- 侧边栏  -->
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['home']">
        <a-menu-item key="home">
          <router-link to="/">
            <span>【主应用】首页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="about">
          <router-link to="/about">
            <span>【主应用】关于</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="staff">
          <span slot="title">
            <span>【主应用】员工</span>
          </span>
          <a-menu-item key="staffList">
            <router-link to="/staff/list">【主应用】员工列表</router-link>
          </a-menu-item>
          <a-menu-item key="staffClients">
            <router-link to="/staff/clients">【主应用】顾客列表</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="order">
          <span slot="title">
            <span>【微应用】订单</span>
          </span>
          <a-menu-item key="orderList">
            <a :href="`/#/${microAppPrefix}/order/list`">【微应用】订单列表</a>
          </a-menu-item>
          <a-menu-item key="orderDetails">
            <a :href="`/#/${microAppPrefix}/order/details`">【微应用】订单详情</a>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <!-- 内容  -->
    <a-layout>
      <!--  头部    -->
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
        <span>全局 Counter: {{counter}}</span>
        <a-button type="primary" @click="$store.commit('increment')">+1</a-button>
        <a-button type="danger" @click="$store.commit('decrement')">-1</a-button>
      </a-layout-header>
      <!--  页面    -->
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <!--   子应用容器     -->
        <micro-app-container></micro-app-container>
        <!--   主应用路由     -->
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Layout, Menu, Icon, Button } from 'ant-design-vue';
import Container, { microAppPrefix } from "./components/Container";

const { Header, Content, Sider } = Layout;
const { Item: MenuItem, SubMenu } = Menu;

export default {
  name: 'App',
  data() {
    return {
      collapsed: false,
      microAppPrefix,
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  components: {
    'a-button': Button,
    'a-icon': Icon,
    'a-layout': Layout,
    'a-layout-sider': Sider,
    'a-layout-header': Header,
    'a-layout-content': Content,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-sub-menu': SubMenu,
    'micro-app-container': Container,
  },
}
</script>

<style lang="less">
.app {
  height: 100vh;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
