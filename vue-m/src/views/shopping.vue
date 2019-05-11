<template>
  <div class="shopping-container" @click.stop="hideOperation">
    <div class="shopping-application">
      <div class="application-title border-bottom">我的应用</div>
      <ul class="application-container clearfix">
        <li class="application-list pull-left" v-for="(item, index) in applist" :key="index">
          <a class="application-item" href="javascript:;" v-longpress="showOperation">
            <div class="item-img-box" :class="{ active: operationValue }">
              <div class="item-img" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
              <i
                class="item-operation iconfont icon-minus"
                v-show="operationValue"
                @click.stop="removeApp(item, index)"
              ></i>
            </div>
            <div class="item-tit">{{ item.tit }}</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="shopping-classify">
      <div class="classify-title border-bottom">
        <tab
          :line-width="0"
          :custom-bar-width="getBarWidth"
          v-model="index"
        >
          <tab-item
            v-for="(item, index) in classifyContentlist"
            :key="index"
          >{{ item.name }}</tab-item>
        </tab>
      </div>
      <div class="classify-content">
        <swiper v-model="index" height="5.4rem" :show-dots="false">
          <swiper-item v-model="index" v-for="(item, i) in classifyContentlist" :key="i">
            <ul class="classify-container clearfix">
              <li class="classify-list pull-left" v-for="subitem in item.datalist" :key="subitem.id">
                <a class="classify-item" href="javascript:;" v-longpress="showOperation">
                  <div class="item-img-box" :class="{ active: operationValue }">
                    <div class="item-img" :style="{ backgroundImage: 'url(' + subitem.url + ')' }"></div>
                    <i
                      class="item-operation iconfont icon-minus"
                      v-show="operationValue"
                      v-if="subitem.isHave"
                      @click.stop="subRemoveApp(subitem)"
                    ></i>
                    <i
                      class="item-operation iconfont icon-plus"
                      v-show="operationValue"
                      v-else
                      @click.stop="addApp(subitem)"
                    ></i>
                  </div>
                  <div class="item-tit">{{ subitem.tit }}</div>
                </a>
              </li>
            </ul>
          </swiper-item>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Tab, TabItem, Swiper, SwiperItem } from 'vux';

export default {
  data() {
    return {
      index: 0,
      operationValue: false
    };
  },
  mounted() {
    this.initAppOper();
  },
  computed: {
    ...mapGetters(['applist', 'classifyContentlist']),
    getBarWidth: function(index) {
      return 1.26 + 'rem';
    }
  },
  methods: {
    ...mapActions(['initAppOper', 'addApps', 'removeApps', 'subRemoveApps', 'synAppOper']),
    showOperation(event) {
      // 渲染加减号图标
      if (!this.operationValue) {
        this.operationValue = true;
      }
    },
    hideOperation(event) {
      // 隐藏加减号图标
      var op = document.getElementsByClassName('item-operation');
      if (op) {
        for (let i = 0; i < op.length; i++) {
          if (!op[i].contains(event.target)) {
            this.operationValue = false;
          }
        }
      }
    },
    removeApp(item, index) {
      this.removeApps(index);
      this.synAppOper({itemValue: item, flagValue: false});
    },
    addApp(item) {
      this.addApps(item);
      this.synAppOper({itemValue: item, flagValue: true});
    },
    subRemoveApp(item) {
      this.subRemoveApps(item);
      this.synAppOper({itemValue: item, flagValue: false});
    }
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/common.scss';
.shopping-container {

  .shopping-application {
    .application-title {
      padding: 0 .36rem;
      line-height: .88rem;
      font-size: .34rem;
      color: $gray-dark;
      background-color: $white;
      user-select: none;

      &.border-bottom::after {
        height: 2px;
      }
    }

    .application-container {
      margin-bottom: .1rem;
      padding: .16rem .3rem .31rem .3rem;
      background-color: $white;
    }

    .application-list {
      padding-top: .14rem;
      padding-bottom: .17rem;
      width: 25%;
    }

    .application-item {
      display: block;
      text-align: center;
      user-select: none;

      &:active .item-tit {
        color: $brand;
      }
    }

    .item-img-box {
      position: relative;
      margin: auto;
      padding: .1rem 0;
      width: 1.38rem;
    }

    .item-img {
      margin: auto;
      width: .9rem;
      height: .9rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: .23rem;
    }

    .item-tit {
      padding-top: .12rem;
      font-size: .26rem;
      color: $input-color-placeholder;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .shopping-classify {
    padding-bottom: .5rem;

    .classify-title {
      position: relative;
      background-color: $white;

      &.border-bottom::after {
        height: 2px;
      }
    }

    .vux-tab-item {
      position: relative;
      line-height: .88rem;
      font-size: .32rem;
      flex: 0 0 33.333333%;
      background: none;
      user-select: none;
    }

    .classify-content {
      height: 100%;
      background-color: $white;
    }

    .classify-container {
      padding: .16rem .3rem .31rem .3rem;
      background-color: $white;
    }

    .classify-list {
      padding-top: .14rem;
      padding-bottom: .17rem;
      width: 25%;
    }

    .classify-item {
      display: block;
      text-align: center;
      user-select: none;

      &:active .item-tit {
        color: $brand;
      }
    }

    .item-img-box {
      position: relative;
      margin: auto;
      padding: .1rem 0;
      width: 1.38rem;
    }

    .item-img {
      margin: auto;
      width: .9rem;
      height: .9rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: .23rem;
    }

    .item-tit {
      padding-top: .12rem;
      font-size: .26rem;
      color: $input-color-placeholder;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  // app图标相关操作
  .item-operation {
    position: absolute;
    top: .04rem;
    right: .04rem;
    font-size: .3rem;
  }

  .item-img-box.active {
    background-color: $btn-basic-border-color;
  }

  .icon-minus {
    color: #fe6357;
  }

  .icon-plus {
    color: $brand;
  }
}
</style>

<style lang="scss">
.shopping-classify {
  .vux-tab-container {
    height: .88rem;
    line-height: .88rem;
  }

  .vux-tab-wrap {
    padding-top: .88rem;
  }

  .scrollable {
    padding-bottom: 0;
  }

  .scrollable .vux-tab-ink-bar {
    bottom: .08rem;
  }

  .vux-tab {
    height: .88rem;
    line-height: .88rem;
  }

  .vux-tab-bar-inner {
    position: relative;
    z-index: 100;
    height: .06rem;
    border-radius: .03rem;
  }
}
</style>


