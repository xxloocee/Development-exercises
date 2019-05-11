<template>
  <div class="side-bar">
    <ul class="bar-box">
      <li class="box-list" v-for="(item, index) in sideBarlist" :key="index">
        <a class="bar-item" :class="{ active: index === 0}" href="javascript:;">
          <i :class="item.iconBar" class="bar-icon iconfont"></i>
          <div class="bar-tit">{{ item.tit }}</div>
        </a>
      </li>
    </ul>
    <div class="side-qrcode-box">
      <div class="side-qrcode" :style="{ backgroundImage: 'url(' + sideQrcodeBg.url + ')' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBarlist: [
        { iconBar: 'icononlinesubmission', tit: '网上投稿' },
        { iconBar: 'icontechnicalsupport', tit: '技术支持' },
        { iconBar: 'iconfeedback', tit: '意见反馈' },
        { iconBar: 'iconpagecorrection', tit: '页面纠错' }
      ],
      sideQrcodeBg: {
        url: require('../../assets/images/main-side.jpg')
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common';
.side-bar {
  .bar-box {
    margin-bottom: 20px;
    width: 100px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(102, 102, 102, 0.2);
    background-color: $white;
  }

  .box-list {
    position: relative;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      content: '';
      background-color: #f3f6fb;
    }

    &:first-child .bar-item {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child .bar-item {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:last-child::after {
      height: 0;
    }
  }
  .bar-item {
    display: block;
    padding-top: 10px;
    padding-bottom: 14px;
    text-align: center;

    &:hover,
    &.active {
      background-color: $brand;
    }

    &:hover .bar-icon,
    &.active .bar-icon,
    &:hover .bar-tit,
    &.active .bar-tit {
      color: $white;
    }
  }

  .bar-icon {
    font-size: 32px;
    color: $brand;
  }

  .bar-tit {
    padding-top: 4px;
    font-size: $font-size-lg;
    color: $gray-dark;
  }

  .side-qrcode-box {
    padding: 11px;
    width: 100px;
    height: 100px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(102, 102, 102, 0.2);
    background-color: $white;
  }

  .side-qrcode {
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>

