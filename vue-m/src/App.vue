<template>
  <div id="app">
    <view-box body-padding-bottom=".96rem">
      <router-view/>
      <appTabbar></appTabbar>
    </view-box>
  </div>
</template>

<script>
import { ViewBox } from 'vux';
import appTabbar from '@/components/common/tabbar.vue';

export default {
  components: {
    ViewBox,
    appTabbar
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '~vux/src/styles/reset.less';
</style>

<style lang="scss">
@import 'assets/scss/common';
html {
  height: 100%;

  body {
    background-color: #f7f7f7;
  }

  #app {
    height: 100%;
  }

  ul {
    list-style: none;
  }
}
</style>
