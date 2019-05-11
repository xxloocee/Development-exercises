<template>
  <div class="app-header">
    <div class="logo-wrap" :style="{ backgroundImage: 'url(' + logoWrapBg.url + ')' }">
      <div class="wrapper clearfix">
        <a class="logo pull-left" href="#" :style="{ backgroundImage: 'url(' + logoBg.url + ')' }"></a>
        <div class="sign-in-wrap clearfix">
          <a class="sign-in pull-left" href="javascript:;">登录</a>
          <a class="header-internship pull-left" href="javascript:;">申请实习证</a>
        </div>
        <div class="serach-wrap clearfix">
          <input class="search-input pull-left" type="text" placeholder="请输入关键字">
          <div class="search pull-left" :style="{ backgroundImage: 'url(' + searchBg.url + ')' }">
            <i class="iconfont iconsearch1"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav-wrap">
      <ul class="header-nav wrapper">
        <li
          class="header-nav-item-wrap"
          v-for="(item, index) in headNav"
          :key="index"
          @mouseover="showNavPanel(index)"
          @mouseout="hiddenNavPanel"
        >
          <div class="header-nav-item">{{ item }}</div>
          <div class="nav-panel-wrap" v-show="panelIndex === index + 1">
            <navpanel></navpanel>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navpanel from '../subcomponents/navPanel.vue';

export default {
  data() {
    return {
      logoWrapBg: {
        url: require('../../assets/images/header.jpg')
      },
      logoBg: {
        url: require('../../assets/images/logo.png')
      },
      searchBg: {
        url: require('../../assets/images/search.jpg')
      },
      headNav: ['协会介绍', '行业党建', '行业要闻', '律师文化', '会员服务'],
      panelIndex: 0
    };
  },
  methods: {
    showNavPanel(index) {
      switch (index) {
        case 0:
          this.panelIndex = 1;
          break;
        case 1:
          this.panelIndex = 2;
          break;
        case 2:
          this.panelIndex = 3;
          break;
        case 3:
          this.panelIndex = 4;
          break;
        case 4:
          this.panelIndex = 5;
          break;
      }
    },
    hiddenNavPanel() {
      this.panelIndex = 0;
    }
  },
  components: {
    navpanel
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common';

.app-header {
  padding: 0;

  .logo-wrap {
    padding-top: 31px;
    padding-bottom: 31px;
    min-width: 990px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .logo {
    width: 332px;
    height: 74px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .sign-in-wrap {
    position: absolute;
    top: 50%;
    left: 462px;
    transform: translateY(-50%);
    font-size: $font-size-lg;
  }

  .sign-in {
    position: relative;
    padding-right: 20px;
    line-height: 1;
    color: $brand;
  }

  .sign-in::after {
    position: absolute;
    right: 0;
    width: 1px;
    height: 100%;
    content: '';
    background-color: $brand;
  }

  .header-internship {
    padding-left: 20px;
    line-height: 1;
    color: $brand;
  }

  .serach-wrap {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .search-input {
    padding-left: 30px;
    padding-right: 30px;
    width: 260px;
    line-height: 48px;
    font-size: $font-size-base;
    border: none;
    outline-style: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    &::placeholder {
      color: #bbb;
    }
  }

  .search {
    width: 70px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .iconsearch1 {
    font-size: $font-size-h3;
    color: $white;
  }

  .header-nav-wrap {
    min-width: 990px;
    background-color: $brand;
  }

  .header-nav {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .header-nav-item-wrap {
    cursor: pointer;

    &:hover,
    &.active {
      background-color: $white;
      .header-nav-item {
        color: $brand;
      }
    }
  }

  .header-nav-item {
    padding: 0 63px;
    line-height: 80px;
    font-size: $font-size-h4;
    color: $white;
  }

  .nav-panel-wrap {
    position: absolute;
    top: 80px;
    left: -5px;
    z-index: 4;
    padding: 0 5px 5px 5px; // 遮挡上部盒子阴影
    width: calc(100% + 10px);
    overflow: hidden;
  }
}
</style>

