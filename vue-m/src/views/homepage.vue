<template>
  <div class="home-container">
    <div class="home-head clearfix">
      <a class="head-letter" href="javascript:;">
        <i class="iconfont icon-letter"></i>
        <div class="letter-msg">{{ msg }}</div>
      </a>
      <div class="home-search-wrap clearfix">
        <i class="iconfont icon-search pull-left"></i>
        <input class="search pull-left" type="text" placeholder="请输入关键字">
        <a class="head-scancode pull-right" href="javascript:;">
          <i class="iconfont icon-scancode"></i>
        </a>
      </div>
      <a class="home-logoin pull-right" v-show="isLogoin" @click="logoin" href="javascript:;">登录</a>
      <a class="head-self" href="javascript:;" v-show="!isLogoin">
        <i class="iconfont icon-men"></i>
      </a>
    </div>
    <div class="home-banner">
      <swiper height="3rem" :interval="2000" dots-position="center" auto loop>
        <swiper-item
          class="banner-slider"
          v-for="(item, index) in bannerBg"
          :key="index"
          :style="{ backgroundImage: 'url(' + item.url + ')' }"
        ></swiper-item>
      </swiper>
    </div>
    <div class="home-notice clearfix">
      <div
        class="notice-img pull-left"
        :style="{ backgroundImage: 'url(' + noticeImgBg.url + ')' }"
      ></div>
      <marquee class="pull-left" :interval="2000" style="height: .74rem;">
        <marquee-item v-for="i in 5" :key="i">
          <a class="notice-title" href="javascript:;">
            <div class="notice-tit">关于填写律师服务民营企业状况调查问...</div>
            <div class="notice-cont">关于填写律师服务民营企业状况调查问...</div>
          </a>
        </marquee-item>
      </marquee>
      <a class="notice-more pull-right" href="javascript:;">更多</a>
    </div>
    <div class="home-nav">
      <ul class="nav-item-wrap clearfix">
        <li class="nav-item-li pull-left" v-for="(item, index) in navImglist" :key="index">
          <a class="nav-item" href="javascript:;">
            <div class="item-img" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
            <div class="item-title">{{ item.title }}</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="home-news">
      <div class="news-title-wrap border-bottom">
        <div class="clearfix">
          <i class="iconfont icon-news pull-left"></i>
          <div class="news-title pull-left">协会资讯</div>
        </div>
      </div>
      <ul class="news-item-wrap">
        <li class="news-item-li border-bottom" v-for="(item, index) in newslist" :key="index">
          <a class="news-item clearfix" href="javascript:;">
            <div class="item-num pull-left">{{ item.num }}</div>
            <div class="item-cont pull-left">
              {{ item.cont }}
              <span class="item-time">{{ item.time }}</span>
            </div>
          </a>
        </li>
      </ul>
      <a class="news-more clearfix" href="javascript:;">
        <span class="pull-left">查看更多</span>
        <i class="iconfont icon-right pull-right"></i>
      </a>
    </div>
    <a class="home-ad" :style="{ backgroundImage: 'url(' + adBg.url + ')' }" v-if="adValue" href="javascript:;">
      <i class="iconfont icon-fork1" @click="hideAd"></i>
    </a>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Marquee, MarqueeItem } from 'vux';
export default {
  data() {
    return {
      bannerBg: [
        {
          url: require('../assets/images/slider.jpg')
        },
        {
          url: require('../assets/images/slider.jpg')
        },
        {
          url: require('../assets/images/slider.jpg')
        },
        {
          url: require('../assets/images/slider.jpg')
        }
      ],
      noticeImgBg: {
        url: require('../assets/images/notice.jpg')
      },
      navImglist: [
        { title: '一键维权', url: require('../assets/images/nav1.jpg') },
        { title: '年度考核', url: require('../assets/images/nav2.jpg') },
        { title: '预约办事', url: require('../assets/images/nav3.jpg') },
        { title: '律师查询', url: require('../assets/images/nav4.jpg') },
        { title: '律所查询', url: require('../assets/images/nav5.jpg') },
        { title: '证明申请', url: require('../assets/images/nav6.jpg') },
        { title: '实习申请', url: require('../assets/images/nav7.jpg') },
        { title: '更多', url: require('../assets/images/nav8.jpg') }
      ],
      newslist: [
        {
          num: '01',
          cont:
            '市律协经刑委成功举办“经济刑案在侦查阶段辩护实务探讨”研讨沙龙市律协经刑委成功举办“经济刑案在侦查阶段辩护实务探讨”研讨沙龙',
          time: '2018-11-23'
        },
        {
          num: '02',
          cont: '第五十六期青年律师大讲堂之“媒体镜头下的律师”成功举行',
          time: '2018-11-23'
        },
        {
          num: '03',
          cont: '第五十六期青年律师大讲堂之“媒体镜头下的律师”成功举行',
          time: '2018-11-23'
        }
      ],
      adBg: {
        url: require('../assets/images/home-ad.jpg')
      },
      adValue: true,
      isLogoin: true,
      msg: 11
    };
  },
  methods: {
    hideAd() {
      this.adValue = false;
    },
    logoin() {
      this.isLogoin = false;
    }
  },
  components: {
    Swiper,
    SwiperItem,
    Marquee,
    MarqueeItem
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/common.scss';
.home-container {
  .home-head {
    position: relative;
    padding: 0 .36rem;
    height: .88rem;
    line-height: .88rem;
    background-color: #2e82ff;
    color: $white;

    .head-letter {
      position: absolute;
      top: 50%;
      display: block;
      height: .88rem;
      color: $white;
      transform: translateY(-50%);
    }

    .letter-msg {
      position: absolute;
      top: .1rem;
      right: -.15rem;
      width: .3rem;
      line-height: .3rem;
      font-size: .2rem;
      color: $white;
      text-align: center;
      background-color: #f54a39;
      border-radius: 50%;
    }

    .icon-letter {
      padding-left: .07rem;
      font-size: .44rem;

      &:active {
        color: $blue-light;
      }
    }

    .home-search-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      padding-left: .2rem;
      padding-right: .26rem;
      width: 5rem;
      height: .54rem;
      line-height: .54rem;
      background-color: $blue-light;
      border-radius: .27rem;
      transform: translate(-50%, -50%);
    }

    .icon-search {
      font-size: .26rem;
    }

    .search {
      padding: 0 .15rem;
      width: 80%;
      font-size: .24rem;
      color: $white;
      background-color: $blue-light;
      border: none;
      outline-style: none;

      &::placeholder {
        color: $white;
      }
    }

    .head-scancode {
      display: block;
      height: .54rem;
      color: $white;

      &:active {
        color: $brand;
      }
    }

    .icon-scancode {
      font-size: .32rem;
    }

    .home-logoin {
      display: block;
      font-size: .3rem;
      color: $white;
      user-select: none;

      &:active {
        color: $blue-light;
      }
    }

    .head-self {
      position: absolute;
      top: 50%;
      right: .36rem;
      display: block;
      height: .88rem;
      color: $white;
      transform: translateY(-50%);

      &:active {
        color: $blue-light;
      }
    }

    .icon-men {
      font-size: .44rem;
    }
  }

  .home-banner {
    margin-bottom: .1rem;

    .banner-slider {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  .home-notice {
    padding: .23rem .23rem .23rem .3rem;
    background-color: $white;

    .notice-img {
      margin-right: .3rem;
      width: .82rem;
      height: .78rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .vux-marquee {
      position: relative;
      width: calc(100% - 1.82rem);
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &::after {
        position: absolute;
        top: 50%;
        right: 0;
        width: .02rem;
        height: .74rem;
        background-color: #f7f7f7;
        content: '';
        transform: translateY(-50%);
      }
    }

    .notice-title {
      display: block;

      &:active {
        background-color: $btn-basic-border-color;
      }
    }

    .notice-tit {
      padding-bottom: .01rem;
      font-size: .28rem;
      color: $brand;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .notice-cont {
      font-size: .22rem;
      color: $modal-content-fallback-border-color;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .notice-more {
      line-height: .78rem;
      font-size: .24rem;
      color: $modal-content-fallback-border-color;
      user-select: none;

      &:active {
        color: $brand;
      }
    }
  }

  .home-nav {
    padding-top: .1rem;
    padding-bottom: .1rem;

    .nav-item-wrap {
      padding: .22rem .24rem .15rem .24rem;
      background-color: $white;
    }

    .nav-item-li {
      width: 25%;
    }

    .nav-item {
      display: block;
      padding-top: .11rem;
      padding-bottom: .11rem;
      text-align: center;

      &:active {
        background-color: #f7f7f7;
      }
    }

    .item-img {
      margin: auto;
      width: .9rem;
      height: .9rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 50%;
    }

    .item-title {
      padding-top: .11rem;
      font-size: .26rem;
      color: $input-color-placeholder;
      user-select: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .home-news {
    margin-bottom: .1rem;
    padding-left: .24rem;
    padding-right: .24rem;
    background-color: $white;

    .news-title-wrap {
      line-height: .9rem;
      color: $brand;

      &.border-bottom::after {
        height: 2px;
      }
    }

    .icon-news {
      font-size: .46rem;
    }

    .news-title {
      padding-left: .19rem;
      font-size: .34rem;
      font-weight: 600;
    }

    .news-item-li {
      padding: .2rem .06rem;
    }

    .news-item {
      display: block;

      &:active .item-cont {
        color: $brand;
      }
    }

    .item-num {
      position: relative;
      padding-right: .27rem;
      font-size: .36rem;
      color: $gray-dark;
      font-weight: 600;

      &::after {
        position: absolute;
        width: .2rem;
        height: .04rem;
        left: .01rem;
        bottom: .05rem;
        background: $brand;
        content: '';
        border-radius: .02rem;
      }
    }

    .item-cont {
      position: relative;
      display: -webkit-box;
      width: calc(100% - .73rem);
      height: 1.08rem;
      line-height: .54rem;
      font-size: .32rem;
      color: $gray-dark;
      overflow: hidden;
      text-overflow: ellipsis;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-align: justify;
    }

    .item-time {
      position: absolute;
      right: .04rem;
      bottom: 0;
      width: 3rem;
      height: .49rem;
      font-size: .24rem;
      color: $modal-content-fallback-border-color;
      text-align: right;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 20%,
        $white 30%
      );
    }

    .news-more {
      display: block;
      margin: auto;
      width: 1.44rem;
      line-height: .73rem;
      font-size: .24rem;
      color: $gray-dark;

      &:active {
        color: $brand;
      }
    }

    .icon-right {
      font-size: .28rem;
    }
  }

  .home-ad {
    position: relative;
    display: block;
    width: 100%;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .icon-fork1 {
      position: absolute;
      right: .29rem;
      top: 0;
      font-size: .33rem;
      color: $gray-dark;

      &:active {
        color: $brand;
      }
    }
  }
}
</style>

<style lang="scss">
// 覆盖轮播图样式
.home-banner {
  .vux-slider > .vux-indicator > a > .vux-icon-dot {
    width: .12rem;
    height: .12rem;
    background-color: #92b9f3;
    border-radius: .06rem;
  }

  .vux-slider > .vux-indicator > a > .vux-icon-dot.active {
    width: .3rem;
  }

  .vux-slider > .vux-indicator > a {
    margin-left: .12rem;
  }
}
</style>



