<template>
  <div class="nav-panel">
    <ul class="nav-card1-wrap clearfix">
      <li class="pull-left panel-link-list" v-for="(item, index) in panelLink" :key="index">
        <a class="panel-link" href="javascript:;">{{ item }}</a>
      </li>
    </ul>
    <ul class="nav-card2-wrap clearfix">
      <li class="nav-card pull-left">
        <dir class="head-title">协会简介</dir>
        <div class="card-content">
          <div class="card-info">
            依据《中华人民共和国律师法》和《中华全国律师协会章程》规定，律师代表大会是律师协会的权力机构，3-5年召开- -次会议;理事会是律师代表大会的常设机构，每年召开-次会议;常务理事会为理事会的常设机构，在理事会闭会期间行使理事会职权。理事、常务理事、会长、副会长均由律师代表大会在执业律师中选举产生。秘书长由司法局党委推荐，提交律师代表大会聘任。依据《中华人民共和国律师法》和《中华全国律师协会章程》规定，律师代表大会是律师协会的权力机构，3-5年召开- 次会议;理事会是律师代表大会的常设机构，每年召开一次会议;理事、常务理事、会长、副会长均由律师代表大会在执业律师中选举产生。秘书长由司法局党委推荐，提交律师代表大会聘任秘书长由司法局党委推荐,表大会聘任秘长由司法局党委推荐
            <div class="card-info-more pull-right">[详情]</div>
          </div>
        </div>
      </li>
      <li class="nav-card pull-left">
        <dir class="head-title">理事会</dir>
        <div class="card-content">
          <div class="card-names">
            <div class="card-name clearfix" v-for="(item, index) in namelist" :key="index">
              <div class="name-label pull-left">{{ item.duties }}</div>
              {{ item.name }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panelLink: [
        '协会简介',
        '协会章程',
        '律协规章',
        '律师行业党委',
        '常务理事会',
        '理事会',
        '监事会',
        '专门委员会',
        '专业委员会',
        '执业机构',
        '光荣榜',
        '历史回顾',
        '工作动态'
      ],
      namelist: [
        { duties: '会长：', name: '赵乃民' },
        {
          duties: '副会长：',
          name: '赵德林、张  毅、梁正辉、江  华、郁新林、苏会斌 '
        },
        {
          duties: '常务理事：',
          name:
            '袁世东、郁新林、朱国勋、陈新、梁正辉、苏会斌孙新丽、李连军、张忠、王中、赵乃民、赵德林、张毅、江华、马道建、朱越、胡小清、于峰、王晓岚'
        },
        {
          duties: '理事：',
          name:
            '路绪华、袁世东、魏勇.郁新林、李刚、朱国勋、梁正辉、蔺志江、苏会斌、朱长平、孙新丽、李大成、王东盛、李连军、赵勇、朱越、于峰、童晓兵、陈新、杨湘、肖东红、王绍利、石新生、张忠、华晏、王中、冶桂萍、石遥、赵乃民、张毅、胡小清、韩全民、赵德林、马道建、江华、刘世成、王晓岚'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common';

.nav-panel {
  padding-top: 26px;
  padding-left: 45px;
  padding-right: 72px;
  background-color: $white;
  box-shadow: 0 0 5px 2px rgba(102, 102, 102, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: auto;

  .nav-card1-wrap {
    padding-right: 0;
  }

  .panel-link-list {
    width: calc(100% / 7);
  }

  .panel-link {
    line-height: 36px;
    font-size: $font-size-lg;
    color: $gray-dark;

    &:hover {
      color: $brand;
      text-decoration: underline;
    }
  }

  .nav-card2-wrap {
    padding-top: 44px;
    padding-bottom: 37px;
  }

  .nav-card {
    &:first-child {
      width: 384px;
      margin-right: 61px;
    }

    &:nth-child(2) {
      width: calc(100% - 445px);

      .head-title::after {
        width: 342px;
        left: 87px;
      }
    }
  }

  .head-title {
    position: relative;
    padding-left: 22px;
    line-height: 20px;
    font-size: $font-size-lg;
    color: $brand;
    font-weight: 600;

    &::before {
      position: absolute;
      left: 0;
      width: 6px;
      height: 100%;
      content: '';
      background-color: $brand;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 105px;
      width: 279px;
      height: 1px;
      content: '';
      transform: translateY(-50%);
      background-color: #d9e4f6;
    }
  }

  .card-content {
    padding-top: 24px;
    padding-left: 24px;
  }

  .card-info {
    position: relative;
    max-height: 312px;
    line-height: 24px;
    font-size: $font-size-base;
    color: $gray-tint;
    text-indent: 2em;
    overflow: hidden;
  }

  .card-info-more {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    width: 100px;
    color: $brand;
    text-align: right;
    cursor: pointer;
    background: linear-gradient(to right, transparent, $white, $white);
  }

  .card-names {
    max-height: 312px;
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

  .card-name {
    padding-top: 24px;
    line-height: 24px;
    font-size: $font-size-base;
    color: $input-color-placeholder;

    &:first-child {
      padding-top: 0;
    }
  }

  .name-label {
    font-size: $font-size-lg;
    color: $gray-tint;
    font-weight: 600;
  }
}
</style>

