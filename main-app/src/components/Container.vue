<template>
<div class="container" :style="{ height: visible ? '100%' : 0 }">
  <div id="micro-app-container"></div>
</div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun'

export const microAppPrefix = 'micro-react-app';

export default {
  name: "Container",
  props: {
    visible: {
      type: Boolean,
      defaultValue: false,
    }
  },
  mounted() {
    registerMicroApps([
      {
        name: 'microReactApp',
        entry: '//localhost:3000',
        container: '#micro-app-container',
        activeRule: '/#/micro-react-app',
      },
    ])
    start()
  }
}
</script>

<style lang="less" scoped>
.container {
  #micro-app-container {
    height: 100%;
  }
}
</style>