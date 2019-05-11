<template>
  <div class="app-footer">
    <tabbar slot="bottom" style="position: fixed">
      <tabbar-item
        :selected="0 === index"
        :link="item.link"
        v-for="(item, index) in tabbarlist"
        :key="index"
      >
        <span slot="icon" class="iconfont" :class="item.icon"></span>
        <span slot="icon-active" class="iconfont" :class="item.icon"></span>
        <span slot="label">{{ item.label }}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem } from 'vux';

export default {
  data() {
    return {
      tabbarlist: [
        { label: '首页', link: '/home', icon: 'icon-home' },
        { label: '服务', link: '', icon: 'icon-service' },
        { label: '培训', link: '', icon: 'icon-training' },
        { label: '助手', link: '', icon: 'icon-assistant' },
        { label: '商城', link: '/shopping', icon: 'icon-store' }
      ]
    };
  },
  components: {
    ViewBox,
    Tabbar,
    TabbarItem
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common.scss';
.app-footer {
  height: auto;
  user-select: none;

  .weui-tabbar {
    height: .96rem;
    background-color: $white;

    &::before {
      height: 0;
    }
  }

  .weui-tabbar__item {
    padding-top: 0;
  }

  .iconfont {
    font-size: .44rem;
  }
}
</style>

<style lang="scss">
@import '../../assets/scss/common.scss';
.app-footer {
  
  .weui-tabbar__icon {
    width: auto;
    height: .54rem;
    color: $modal-content-fallback-border-color;
  }

  .weui-tabbar__label {
    height: .42rem;
    font-size: .22rem;
    color: $modal-content-fallback-border-color;
  }
}
</style>



