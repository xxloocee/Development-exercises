<template>
  <div class="main-content wrapper">
    <div class="main-online" :style="{ backgroundImage: 'url(' + onlineBg.url + ')' }"></div>
    <div class="main-slider-wrap clearfix">
      <div class="main-slider-container pull-left">
        <el-carousel trigger="click" height="400px" arrow="never">
          <el-carousel-item
            v-for="(item, index) in carouselImglist"
            :key="index"
            :style="{ backgroundImage: 'url(' + item.url + ')' }"
          ></el-carousel-item>
        </el-carousel>
      </div>
      <div class="main-slider-content pull-right">
        <div class="main-slider-card clearfix">
          <a class="card-title" href="javascript:;">张毅副会长参加全国律协第四期律协领导成员（省级律协会长、副会长）培训班</a>
          <div
            class="card-content"
          >2017年7月7月21日，为期一周的全国律协第四期律师协会领导成员（省级律师协会会长、副会长）培训班在国家行政学院落下帷幕，至此，由全国律协和国家</div>
          <a class="card-link pull-right" href="javascript:;">
            查看全文
            <i class="iconfont iconmore"></i>
          </a>
        </div>
        <div class="main-slider-card clearfix">
          <ul>
            <li class="clearfix" v-for="(item, index) in sliderContentlist" :key="index">
              <a class="card-content-list" href="javascript:;">{{ item.cont }}</a>
            </li>
          </ul>
          <a class="card-link link-dynamic pull-right" href="javascript:;">
            更多动态
            <i class="iconfont iconmore"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="main-content-wrap clearfix">
      <div class="content-notice pull-left">
        <mainContentHeader :cardInfoList="mainContentHeader.noticelist">
          <a class="head-more pull-right" href="javascript:;">更多></a>
        </mainContentHeader>
        <div class="card-content">
          <ul class="content-list-wrap clearfix">
            <li class="content-list clearfix" v-for="(item, index) in noticeInfolist" :key="index">
              <div class="list-time pull-left">{{ item.time }}</div>
              <a class="list-text" href="javascript:;">
                {{ item.text }}
                <!--
                -->
                <i class="iconfont iconnew" v-if="item.isNew"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-content-right pull-right">
        <div class="content-dynamic-lawyer clearfix">
          <div class="content-dynamic pull-left">
            <mainContentHeader :cardInfoList="mainContentHeader.dynamiclist">
              <a class="head-subtit pull-left" href="javascript:;">协会新闻</a>
              <a class="head-more pull-right" href="javascript:;">更多></a>
            </mainContentHeader>
            <div class="card-content">
              <ul class="content-list-wrap clearfix">
                <li
                  class="content-list clearfix"
                  v-for="(item, index) in dynamicInfolist"
                  :key="index"
                >
                  <a class="list-text" href="javascript:;">{{ item.text }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content-lawyer pull-right">
            <mainContentHeader :cardInfoList="mainContentHeader.traininglist">
              <div class="head-bar-container">
                <div class="head-bar pull-right" @click="arrangeTrainingType">安排表</div>
                <div class="head-bar pull-right" @click="calendarTrainingType">日历</div>
              </div>
            </mainContentHeader>
            <div class="card-content">
              <a class="training-title" href="javascript:;">
                <i class="iconfont iconcalendar"></i>
                <!--
                -->
                2019年上半年申请律师执业培>>
              </a>
              <div class="training-arrange" v-if="trainingType === 'arrange'">
                <div class="training-advise">
                  <div class="advise-title">培训通知</div>
                  <ul class="advise-ul">
                    <li v-for="(item, index) in adviseInfolist" :key="index">
                      <a class="advise-link" href="javascript:;">{{ item.text }}</a>
                    </li>
                  </ul>
                </div>
                <div class="training-enroll">
                  <div class="enroll-etime">2019-04-13</div>
                  <div class="clearfix">
                    <div class="enroll-label pull-left">报名</div>
                    <a class="enroll-text pull-left" href="javascript:;">建设工程律师实务培训班通知</a>
                  </div>
                </div>
              </div>
              <div class="training-calendar" v-else>
                <calendar @click-event="getNowTime" :labelObj="labelObj"></calendar>
              </div>
            </div>
          </div>
        </div>
        <div class="content-hall">
          <mainContentHeader :cardInfoList="mainContentHeader.halllist">
            <a class="head-more pull-right" href="javascript:;">办事大厅栏目板块></a>
          </mainContentHeader>
          <div class="card-content">
            <ul class="content-list-wrap clearfix">
              <li class="content-list clearfix" v-for="(item, index) in hallInfolist" :key="index">
                <a class="list-text-link clearfix">
                  <i :class="item.subIcon" class="pull-left"></i>
                  <div class="list-text pull-left">{{ item.text }}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main-online" :style="{ backgroundImage: 'url(' + onlineBg.url + ')' }"></div>
    <div class="main-somelink clearfix">
      <div class="somelink-left pull-left">
        <mainContentHeader :cardInfoList="mainContentHeader.downloadlist">
          <a class="head-subtit pull-left" href="javascript:;">律协规章</a>
          <a class="head-more pull-right" href="javascript:;">更多></a>
        </mainContentHeader>
        <div class="card-content">
          <ul class="content-list-wrap clearfix">
            <li
              class="content-list clearfix"
              v-for="(item, index) in downloadInfolist"
              :key="index"
            >
              <a class="list-text clearfix" href="javascript:;">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="somelink-right pull-right">
        <mainContentHeader :cardInfoList="mainContentHeader.recruitmentlist">
          <div>
            <a class="head-subtit pull-left" href="javascript:;">发布招聘信息</a>
            <a class="head-subtit pull-left" href="javascript:;">《声明》</a>
          </div>
          <a class="head-more pull-right" href="javascript:;">更多></a>
        </mainContentHeader>
        <div class="card-content">
          <ul class="content-list-wrap clearfix">
            <li
              class="content-list clearfix"
              v-for="(item, index) in recruitmentInfolist"
              :key="index"
            >
              <a class="list-text clearfix" href="javascript:;">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-side-bar">
      <sideBar></sideBar>
    </div>
  </div>
</template>

<script>
import sideBar from '@/components/subcomponents/sideBar.vue';
import mainContentHeader from '@/components/subcomponents/mainContentHeader.vue';
import calendar from '@/components/subcomponents/calendar.vue';

export default {
  data() {
    return {
      onlineBg: {
        url: require('../assets/images/online.jpg')
      },
      carouselImglist: [
        {
          url: require('../assets/images/carouse1.jpg')
        },
        {
          url: require('../assets/images/carouse1.jpg')
        },
        {
          url: require('../assets/images/carouse1.jpg')
        },
        {
          url: require('../assets/images/carouse1.jpg')
        }
      ],
      sliderContentlist: [
        {
          cont:
            '新疆函育律师事务所周丽律师参加全国律协新疆函育律师事务所周丽律师参加全国律协'
        },
        {
          cont:
            '鼎泽凯律师事务所走访慰问阿拉尔市喀依乡鼎泽凯律师事务所走访慰问阿拉尔市喀依乡'
        },
        {
          cont:
            '新疆函育律师事务所周丽律师参加全国律协新疆函育律师事务所周丽律师参加全国律协'
        },
        {
          cont:
            '鼎泽凯律师事务所走访慰问阿拉尔市喀依乡鼎泽凯律师事务所走访慰问阿拉尔市喀依乡'
        }
      ],
      mainContentHeader: {
        noticelist: { title: '通知公告', iconTit: 'iconnotice' },
        dynamiclist: { title: '党建动态', iconTit: 'icondynamic' },
        traininglist: { title: '律师培训', iconTit: 'icontraining1' },
        halllist: { title: '办事大厅', iconTit: 'iconbusinesslobby' },
        downloadlist: { title: '下载中心', iconTit: 'icondownload' },
        recruitmentlist: { title: '律所招聘', iconTit: 'iconrecruitment' }
      },
      noticeInfolist: [
        {
          time: '04-11',
          text: '关于唐明等25名申请公职（公司）律师执业人员考核结果的公示',
          isNew: true
        },
        {
          time: '04-10',
          text: '关于唐明等25名申请公职（公司）律师执业人员考核结果的公示',
          isNew: true
        },
        {
          time: '04-09',
          text: '关于开展2018年度律师事务所检查考核工作的通知',
          isNew: true
        },
        {
          time: '04-08',
          text: '关于对申请公职（公司）律师执业人员进行考核的通知',
          isNew: true
        },
        {
          time: '04-08',
          text: '关于举办2019年申请公职（公司）律师执业人员集中培训班的通知',
          isNew: true
        },
        { time: '04-05', text: '考核结果公示', isNew: false },
        {
          time: '04-04',
          text: '关于冯国力等17名申请公职（公司）律师执业人员考核结果的公示',
          isNew: false
        },
        {
          time: '04-01',
          text:
            '新疆生产建设兵团组织申请公职（公司）律师执业专职律师执业人员考核',
          isNew: false
        },
        {
          time: '03-28',
          text:
            '新疆生产建设兵团组织申请公职（公司）律师执业专职律师执业人员考核',
          isNew: false
        },
        {
          time: '03-27',
          text: '关于开展2018年度律师事务所检查考核工作的通知 拷贝',
          isNew: false
        },
        {
          time: '03-27',
          text: '关于开展2018年度律师事务所检查考核工作的通知 拷贝 2',
          isNew: false
        },
        {
          time: '03-23',
          text:
            '新疆生产建设兵团组织申请公职（公司）律师执业专职律师执业人员考核',
          isNew: false
        },
        {
          time: '03-20',
          text: '关于开展2018年度律师事务所检查考核工作的通知 拷贝 4',
          isNew: false
        },
        {
          time: '03-19',
          text: '关于唐明等25名申请公职（公司）律师执业人员考核结果的公示',
          isNew: false
        },
        {
          time: '03-18',
          text: '关于唐明等25名申请公职（公司）律师执业人员考核结果的公示',
          isNew: false
        },
        {
          time: '03-17',
          text: '关于唐明等25名申请公职（公司）律师执业人员考核结果的公示',
          isNew: false
        }
      ],
      dynamicInfolist: [
        { text: '兵团律师行业党委第三次会议' },
        { text: '傅政华：律师是学习宣传宪法带头人' },
        {
          text: '深圳律师行业党建工作再闯新路——成立全市首个律师行业区域党委'
        },
        { text: '律师行业3家党组织荣获“全国先进基层党组织”称号' },
        { text: '兵团律师行业党委第三次会议' },
        {
          text: '关于冯国力等17名申请公职（公司）律师执业人员考核结果的公示'
        },
        { text: '吴爱英：永葆忠诚政治本色 做合格共产党员' },
        { text: '律协党组学习贯彻全国律师工作会议精神' }
      ],
      adviseInfolist: [
        {
          text: '刑辩思维训练系列课程（一）——“检察官如何思维”律师实务培训班通知'
        },
        { text: '市律协律师学院4月课程预告' },
        { text: '建设工程律师实务培训班通知' }
      ],
      hallInfolist: [
        {
          subIcon: 'iconfont iconinternmanagement',
          text: '实习人员管理'
        },
        {
          subIcon: 'iconfont iconadministrativelicense',
          text: '行政许可'
        },
        { subIcon: 'iconfont iconsearch2', text: '法规检索' },
        { subIcon: 'iconfont iconcomplaintcenter', text: '投诉中心' },
        { subIcon: 'iconfont iconrightscenter', text: '维权中心' },
        { subIcon: 'iconfont iconplatform', text: '律师管理平台' },
        {
          subIcon: 'iconfont iconassessment',
          text: '律所（律师）年度考核'
        }
      ],
      downloadInfolist: [
        { text: '涉黑备案表下载' },
        { text: '实习人员实习协议' },
        { text: '全国律协申请律师执业人员实习考核规程' },
        { text: '实习人员领取实习证委托书模板' },
        { text: '新疆兵团律师协会特邀会员信息申报表（团体会员）' },
        { text: '业务资料电子版' },
        { text: '律师之家移动版正式发布' },
        { text: '新疆兵团律师协会特邀会员信息申报表（个人会员）' }
      ],
      recruitmentInfolist: [
        { text: '新疆兵团铭森律师事务所招聘助理' },
        { text: '新疆兵团海耀律师事务所招聘提成律师,实习生,专职律师' },
        { text: '新疆兵团天尚律师事务所招聘专职律师' },
        { text: '新疆兵团天尚律师事务所招聘专职律师' },
        { text: '新疆兵团天尚律师事务所招聘专职律师,其他' },
        { text: '新疆兵团海耀律师事务所招聘提成律师,实习生,提成律师' },
        { text: '新疆兵团海耀律师事务所招聘前台,提成律师' },
        { text: '新疆兵团海耀律师事务所招聘合伙人,专职律师,提成律师' }
      ],
      labelObj: [
        {
          year: 2019,
          month: 3,
          day: 5,
          value: {
            business: true,
            train: false,
            other: true
          }
        },
        {
          year: 2019,
          month: 3,
          day: 8,
          value: {
            business: false,
            train: true,
            other: false
          }
        },
        {
          year: 2019,
          month: 4,
          day: 3,
          value: {
            business: true,
            train: false,
            other: false
          }
        },
        {
          year: 2019,
          month: 10,
          day: 30,
          value: {
            business: false,
            train: false,
            other: true
          }
        },
        {
          year: 2019,
          month: 4,
          day: 20,
          value: {
            business: true,
            train: false,
            other: true
          }
        },
        {
          year: 2019,
          month: 4,
          day: 22,
          value: {
            business: true,
            train: true,
            other: false
          }
        },
        {
          year: 2019,
          month: 4,
          day: 30,
          value: {
            business: true,
            train: true,
            other: true
          }
        },
        {
          year: 2019,
          month: 5,
          day: 8,
          value: {
            business: false,
            train: true,
            other: true
          }
        }
      ],
      trainingType: 'arrange'
    };
  },
  methods: {
    calendarTrainingType() {
      this.trainingType = 'calendar';
    },
    arrangeTrainingType() {
      this.trainingType = 'arrange';
    },
    getNowTime(date) {
      let dayNow =
        date.year + '年' + '-' + date.month + '月' + '-' + date.day + '日';
      console.log(dayNow);
    }
  },
  components: {
    sideBar,
    mainContentHeader,
    calendar
  }
};
</script>

<style lang="scss" scoped rel="stylesheet/scss">
@import '../assets/scss/common';
.main-content {
  padding-top: 30px;

  .main-online {
    width: 990px;
    height: 72px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .main-slider-wrap {
    position: relative;
    padding-top: 30px;

    &:before {
      position: absolute;
      top: 30px;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 4px;
      background-color: $brand;
      content: '';
    }

    .el-carousel {
      width: 600px;
    }

    .el-carousel__item {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .main-slider-content {
      padding-left: 23px;
      padding-right: 23px;
      width: calc(100% - 600px);
      background-color: #f3f6fb;
    }

    .main-slider-card {
      padding-top: 23px;
      padding-bottom: 16px;

      &:first-child {
        border-bottom: 2px dotted $disabled-tint;
      }
    }

    .card-title {
      display: -webkit-box;
      font-size: $font-size-h4;
      color: $brand;
      overflow: hidden;
      text-overflow: ellipsis;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .card-content {
      display: -webkit-box;
      padding-top: 13.5px;
      line-height: 22px;
      font-size: $font-size-base;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    .card-link {
      padding-top: 9.75px;
      line-height: 19px;
      font-size: $font-size-base;
      color: $brand;
    }

    .iconmore {
      position: relative;
      top: -1px;
      font-size: 19px;
      vertical-align: middle;
    }

    .card-content-list {
      position: relative;
      display: block;
      padding-left: 16px;
      padding-bottom: 6px;
      line-height: 26px;
      font-size: $font-size-lg;
      color: $input-color-placeholder;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &::before {
        position: absolute;
        top: 11px;
        left: 2px;
        width: 4px;
        height: 4px;
        background-color: $brand;
        content: '';
        border-radius: 50%;
      }

      &:hover {
        color: $brand;
      }
    }

    .link-dynamic {
      padding-top: 9px;
    }
  }

  .main-content-wrap {
    padding-top: 40px;
  }

  // 通知公告
  .content-notice {
    width: 371px;

    .card-content {
      padding-top: 23px;
      padding-bottom: 30px;
    }
    .content-list-wrap {
      padding-right: 12px;
      height: 614px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: $disabled;
      }

      &::-webkit-scrollbar-track {
        background: $light;
      }
    }

    .content-list {
      padding-bottom: 10px;
    }

    .list-time {
      padding-left: 1px;
      width: 49px;
      line-height: 18px;
      font-size: $font-size-h4;
      color: #999;
    }

    .list-text {
      float: right;
      width: calc(100% - 70px);
      line-height: 17px;
      font-size: $font-size-base;
      color: $gray-tint;

      &:hover {
        color: $brand;
      }
    }

    .iconnew {
      position: relative;
      top: 3px;
      padding-left: 5px;
      font-size: 22px;
      color: #e95858;
    }
  }

  .main-content-right {
    width: calc(100% - 412px);
  }
  .content-dynamic-lawyer {
    padding-bottom: 27px;
  }
  // 党建动态
  .content-dynamic {
    width: 267px;

    .card-content {
      padding-top: 23px;
    }

    .content-list-wrap {
      padding-left: 13px;
      max-height: 325px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: $disabled;
      }

      &::-webkit-scrollbar-track {
        background: $light;
      }
    }

    .content-list {
      position: relative;
      padding-bottom: 15px;

      &::before {
        position: absolute;
        top: 6px;
        left: -12px;
        width: 5px;
        height: 5px;
        background-color: $brand;
        content: '';
        border-radius: 50%;
      }
    }

    .list-text {
      display: block;
      line-height: 17px;
      font-size: $font-size-base;
      color: $gray-tint;

      &:hover {
        color: $brand;
      }
    }
  }

  // 律师培训
  .content-lawyer {
    width: calc(100% - 307px);

    .card-content {
      padding-top: 16px;
    }

    .training-title {
      display: block;
      margin-bottom: 20px;
      padding-left: 16px;
      height: 40px;
      line-height: 40px;
      font-size: $font-size-base;
      color: $white;
      background-color: #4da9ec;
    }

    .training-arrange {
      max-height: 271px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: #ccc;
      }

      &::-webkit-scrollbar-track {
        background: #f4f4f4;
      }
    }

    .iconcalendar {
      padding-right: 13px;
      font-size: 22px;
      vertical-align: middle;
    }

    .training-advise {
      position: relative;
      margin-bottom: 20px;
      padding-left: 17px;
      padding-right: 11px;
      background-color: #f3f6fb;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        content: '';
        background-color: $brand;
      }
    }

    .advise-title {
      padding-top: 11px;
      padding-bottom: 6px;
      font-size: $font-size-h4;
      color: $brand;
      text-align: center;
    }

    .advise-link {
      display: block;
      padding-bottom: 15px;
      font-size: $font-size-base;
      color: $input-color-placeholder;

      &:hover {
        color: $brand;
      }
    }

    .training-enroll {
      padding-left: 18px;
      padding-right: 10px;
      padding-bottom: 14px;
      background-color: #f3f6fb;
    }

    .enroll-etime {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: $font-size-lg;
      color: $gray-tint;
    }

    .enroll-label {
      padding-left: 8px;
      padding-right: 8px;
      line-height: 20px;
      font-size: $font-size-base;
      color: $white;
      background-color: #f19149;
    }

    .enroll-text {
      padding-left: 12px;
      max-width: calc(100% - 44px);
      line-height: 20px;
      font-size: $font-size-base;
      color: $input-color-placeholder;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        color: $brand;
      }
    }
  }

  // 办事大厅
  .content-hall {
    .card-content {
      padding-top: 24px;
      padding-bottom: 30px;
    }

    .content-list-wrap {
      max-height: 200px;
      overflow-y: hidden;
    }

    .list-text-link {
      display: block;
    }

    .content-list {
      position: relative;
      float: left;
      margin-left: 19px;
      margin-bottom: 10px;
      padding-left: 24px;
      padding-right: 22px;
      width: 180px;
      line-height: 60px;
      background-color: #f3f6fb;
      cursor: pointer;

      &:nth-child(3n + 1) {
        margin-left: 0;
      }

      &:hover .list-text {
        color: $brand;
      }

      .iconfont {
        width: 27px;
        font-size: 27px;
        color: $brand;
      }
    }

    .list-text {
      position: absolute;
      top: 50%;
      right: 22px;
      display: -webkit-box;
      width: calc(100% - 83px);
      line-height: 17px;
      font-size: $font-size-lg;
      color: $gray-dark;
      transform: translateY(-53%);
      overflow: hidden;
      text-overflow: ellipsis;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  .main-somelink {
    padding-top: 31px;
  }

  .somelink-left {
    width: 427px;
  }

  .somelink-right {
    width: calc(100% - 467px);
  }

  // 下载中心&律所招聘
  .somelink-left,
  .somelink-right {
    .card-content {
      padding-top: 21.5px;
      padding-bottom: 52.5px;
    }

    .content-list-wrap {
      max-height: 325px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: $disabled;
      }

      &::-webkit-scrollbar-track {
        background: $light;
      }
    }

    .list-text {
      display: block;
      max-width: 100%;
      line-height: 32px;
      font-size: $font-size-base;
      color: $gray-tint;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        color: $brand;
      }
    }
  }

  .main-side-bar {
    position: fixed;
    top: 246px;
    margin-left: 1032px;
  }
}
</style>

<style lang="scss">
@import '../assets/scss/common';
.main-content {
  .el-carousel__button {
    width: 44px;
    height: 6px;
    opacity: 1;
  }

  .is-active .el-carousel__button {
    background-color: $brand;
  }
}
</style>
