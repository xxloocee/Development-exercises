<template>
  <div class="app-footer">
    <div class="footer-wrap wrapper clearfix">
      <div class="footer-nav-wrap pull-left">
        <ul class="clearfix">
          <li class="footer-nav-list pull-left" v-for="(item, index) in footerNvalist" :key="index">
            <div class="footer-nav-title">{{ item.title }}</div>
            <ul class="footer-subnav">
              <li v-for="(subitem, index) in item.sublist" :key="index">
                <a class="footer-subnav-tit" href="javascript:;">{{ subitem.tit }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="footer-qrcode-wrap pull-right">
        <a
          class="footer-credit"
          :style="{ backgroundImage: 'url(' + creditBg.url + ')' }"
          href="javascript:;"
        ></a>
        <a class="footer-qrcode" :style="{ backgroundImage: 'url(' + qrcodeBg.url + ')' }"></a>
      </div>
    </div>
    <div class="copyright">
      <div>[版权声明]&nbsp;新ICP备17030485号-1&nbsp;&nbsp;技术服务：上海同道信息技术有限公司</div>
      <div>新疆生产建设兵团律师协会版权所有&nbsp;©2000-2019</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creditBg: {
        url: require('../../assets/images/credit.png')
      },
      qrcodeBg: {
        url: require('../../assets/images/qrcode.jpg')
      },
      footerNvalist: [
        {
          title: '快速链接',
          sublist: [
            { tit: '新疆检察院' },
            { tit: '新疆各区县公证处' },
            { tit: '新疆哥法院通讯录' },
            { tit: '新疆哥看守所通讯录' },
            { tit: '新疆国际仲裁中心' }
          ]
        },
        {
          title: '常用工具',
          sublist: [
            { tit: '城市地图查询' },
            { tit: '城市天气查询' },
            { tit: '统计局数据公布' },
            { tit: '万年历查询' },
            { tit: 'OpenLaw仲裁文书' }
          ]
        },
        {
          title: '网站导航',
          sublist: [
            { tit: '律师协会网站' },
            { tit: '国务院部门网站' },
            { tit: '专业法律网站' },
            { tit: '地方政府网站' },
            { tit: '新闻媒体网站' }
          ]
        },
        {
          title: '关于我们',
          sublist: [
            { tit: '会长信箱' },
            { tit: '监事长信箱' },
            { tit: '律师代表信箱' },
            { tit: '联系我们' },
            { tit: '意见建议' }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common';
.app-footer {
  padding: 0;
  background-color: #f3f6fb;

  .footer-wrap {
    padding-top: 41px;
    padding-bottom: 36px;
  }

  .footer-nav-wrap {
    width: calc(100% - 260px);
  }

  .footer-nav-list {
    width: 25%;
  }

  .footer-nav-title {
    font-size: $font-size-lg;
    color: #0054ce;
  }

  .footer-subnav {
    padding-top: 18px;
  }

  .footer-subnav-tit {
    line-height: 26px;
    font-size: $font-size-base;
    color: $input-color-placeholder;

    &:hover {
      color: #0054ce;
    }
  }

  .footer-qrcode-wrap {
    padding-right: 50px;
  }

  .footer-credit {
    display: block;
    margin-bottom: 18px;
    width: 102px;
    height: 45px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .footer-qrcode {
    display: block;
    margin: auto;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .copyright {
    position: relative;
    padding-top: 29px;
    padding-bottom: 29px;
    text-align: center;
    background-color: $white;

    &:after {
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 10px;
      background-color: #0054ce;
      content: '';
    }
  }
}
</style>

