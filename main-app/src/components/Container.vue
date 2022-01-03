<template>
<div class="container" :style="{ height: visible ? '100%' : 0 }">
  <a-spin v-if="loading"></a-spin>
  <div id="micro-app-container"></div>
  <!--   测试 Drawer 和 Modal     -->
  <div>
    <div>
      <a-button type="primary" @click="drawerVisible = true">
        【主应用】测试 Drawer 组件
      </a-button>
      <a-drawer
          title="Basic Drawer"
          placement="right"
          :closable="false"
          :visible="drawerVisible"
          @close="drawerVisible = false"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-drawer>
    </div>
    <div>
      <a-button type="primary" @click="modalVisible = true">
        【主应用】测试 Modal 组件
      </a-button>
      <a-modal
          title="Basic Modal"
          :closable="false"
          :visible="modalVisible"
          @cancel="modalVisible = false"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
  </div>
</div>
</template>

<script>
import {initGlobalState, registerMicroApps, start} from 'qiankun'
// 测试
import { Button, Drawer, Modal, Spin } from 'ant-design-vue'

export const microAppPrefix = 'micro-react-app';

const globalActions = initGlobalState({
  state: {},
  commit: null,
  dispatch: null,
});

export default {
  name: "Container",
  props: {
    visible: {
      type: Boolean,
      defaultValue: false,
    }
  },
  data() {
    return {
      loading: false,
      drawerVisible: false,
      modalVisible: false,
    }
  },
  mounted() {
    const { dispatch, commit, state } = this.$store;
    registerMicroApps([
      {
        name: 'microReactApp',
        entry: '//localhost:3000',
        container: '#micro-app-container',
        activeRule: '/#/micro-react-app',
        props: {
          state,
          dispatch,
          commit,
        },
        loader: (loading) => {
          this.loading = loading
        }
      },
    ])
    start()

    this.$store.watch((state) => {
      console.log('state', state);
      globalActions.setGlobalState({
        state,
        commit,
        dispatch
      });
    })
  },
  components: {
    'a-spin': Spin,
    'a-button': Button,
    'a-drawer': Drawer,
    'a-modal': Modal,
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;

  #micro-app-container {
    flex: 1;
  }
}
</style>
