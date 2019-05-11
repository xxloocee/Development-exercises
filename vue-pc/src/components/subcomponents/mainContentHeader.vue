<template>
  <div class="main-content-header">
    <div class="card-head clearfix">
      <i :class="cardInfoList.iconTit" class="head-icon iconfont pull-left"></i>
      <div class="head-title pull-left">{{ cardInfoList.title }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardInfoList']
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common';

.main-content-header {
  .card-head {
    position: relative;
    box-sizing: content-box;
    padding-bottom: 5px;
    height: 28px;
    line-height: 28px;
    border-bottom: 6px solid #d9e4f6;

    &:after {
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 120px;
      height: 6px;
      content: '';
      background-color: $brand;
    }
  }

  .head-icon {
    padding-left: 1px;
    font-size: 26px;
    color: $brand;
  }

  .head-title {
    padding-left: 15px;
    font-size: $font-size-h4;
    color: $gray-dark;
    font-weight: 600;
  }

  .head-more {
    font-size: $font-size-base;
    color: $input-color-placeholder;

    &:hover {
      color: $brand;
    }
  }

  .card-content {
    padding-bottom: 27px;
  }

  // 党建动态
  .head-subtit {
    padding-left: 24px;
    font-size: $font-size-lg;
    color: $brand;
    font-weight: 500;

    &:nth-child(2) {
      padding-left: 0;
    }
  }

  // 律师培训
  .head-bar {
    position: relative;
    padding-left: 12px;
    font-size: $font-size-base;
    color: $input-color-placeholder;
    cursor: pointer;

    &:after {
      position: absolute;
      top: 7px;
      right: -6px;
      width: 1px;
      height: 50%;
      content: '';
      background-color: $input-color-placeholder;
    }

    &:nth-child(1):after {
      width: 0;
    }

    &:hover {
      color: $brand;
    }
  }
}
</style>

