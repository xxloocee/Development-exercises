<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
    <appFooter></appFooter>
  </div>
</template>

<script>
import api from './api/index';
import appHeader from './components/common/header.vue';
import appFooter from './components/common/footer.vue';

export default {
  name: 'app',
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>

