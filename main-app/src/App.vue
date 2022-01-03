<template>
  <a-layout class="app">
    <!-- 侧边栏  -->
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['home']">
        <a-menu-item key="home">
          <router-link to="/">
            <span>首页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="about">
          <router-link to="/about">
            <span>关于</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="staff">
          <span slot="title">
            <span>员工</span>
          </span>
          <a-menu-item key="staffList">
            <router-link to="/staff/list">员工列表</router-link>
          </a-menu-item>
          <a-menu-item key="staffClients">
            <router-link to="/staff/clients">顾客列表</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="order">
          <span slot="title">
            <span>订单</span>
          </span>
          <a-menu-item key="orderList">
            <router-link to="/order/list">订单列表</router-link>
          </a-menu-item>
          <a-menu-item key="orderDetails">
            <router-link to="/order/details">订单详情</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <!-- 内容  -->
    <a-layout>
      <!--  头部    -->
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <!--  页面    -->
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Layout, Menu, Icon } from 'ant-design-vue';

const { Header, Content, Sider } = Layout;
const { Item: MenuItem, SubMenu } = Menu;

export default {
  name: 'App',
  components: {
    'a-icon': Icon,
    'a-layout': Layout,
    'a-layout-sider': Sider,
    'a-layout-header': Header,
    'a-layout-content': Content,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-sub-menu': SubMenu
  },
  data() {
    return {
      collapsed: false,
    };
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
