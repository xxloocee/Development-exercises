<template>
  <div class="calendar-container">
    <div class="year clearfix">
      <span class="year-step pull-left" @click="lastYear">«</span>
      <span class="year-step pull-left" @click="lastMonth">‹</span>
      <div class="year-now">{{ nowDate.year }}年{{ nowDate.month + 1 }}月</div>
      <span class="year-step pull-right" @click="nextYear">»</span>
      <span class="year-step pull-right" @click="nextMonth">›</span>
    </div>
    <ul class="date clearfix">
      <li class="date-day none-week pull-left" v-for="item in lastMonthDays" :key="item+50"></li>
      <li
        class="date-day pull-left"
        @click="clickEvent"
        v-for="(item, index) in nowMonthDays"
        :key="index"
      >
        {{ item }}
        <div class="label-wrap clearfix" v-for="(labelItem, index) in labelObj" :key="index">
          <div
            class="label pull-left"
            :class="{ 'label-business':labelItem.year===nowDate.year&&labelItem.month===(nowDate.month+1)&&labelItem.day===item&&labelItem.value.business }"
          ></div>
          <div
            class="label pull-left"
            :class="{ 'label-train':labelItem.year===nowDate.year&&labelItem.month===(nowDate.month+1)&&labelItem.day===item&&labelItem.value.train }"
          ></div>
          <div
            class="label pull-left"
            :class="{ 'label-other':labelItem.year===nowDate.year&&labelItem.month===(nowDate.month+1)&&labelItem.day===item&&labelItem.value.other }"
          ></div>
        </div>
      </li>
      <li
        class="date-day none-week pull-left"
        v-for="item in (42-lastMonthDays-nowMonthDays)"
        :key="item+100"
      ></li>
    </ul>
    <ul class="legend-wrap clearfix">
      <li class="legend pull-right clearfix">
        <div class="color blue pull-left"></div>
        <div class="pull-left">其他</div>
      </li>
      <li class="legend pull-right">
        <div class="color yellow pull-left"></div>
        <div class="pull-left">培训</div>
      </li>
      <li class="legend pull-right">
        <div class="color red pull-left"></div>
        <div class="pull-left">业务研究</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['labelObj'],
  data() {
    return {
      selectDate: [], //选择日期列表
      nowDate: this.getDate(new Date()) //当前设置时间 默认为当前系统时间
    };
  },
  computed: {
    lastMonthDays() {
      return this.startWeek();
    },
    lastMonthStartDay() {
      return (
        this.calcLastMonthDays(this.nowDate.year, this.nowDate.month) -
        (this.startWeek() - 1)
      );
    },
    nowMonthDays() {
      return this.calcDays(this.nowDate.year, this.nowDate.month);
    }
  },
  created() {
    if (this.setDate) {
      this.nowDate = this.getDate(this.setDate);
    }
  },
  methods: {
    getDate(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay(),
        date: date.getDate()
      };
    },
    //判断闰年
    isLeapYear(year) {
      return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    },
    //根据日子计算星期
    calcWeekend(year, month, day) {
      return new Date(year, month, day).getDay();
    },
    //计算某年某月的天数
    calcDays(year, month) {
      const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (this.isLeapYear(year) && month === 1) return 29;
      else return monthDay[month];
    },
    //计算上个月天数
    calcLastMonthDays(year, month) {
      if (month === 0) {
        return this.calcDays(year - 1, 11);
      } else {
        return this.calcDays(year, month - 1);
      }
    },
    //上月
    lastMonth() {
      if (this.nowDate.month === 0) {
        this.nowDate.month = 11;
        this.nowDate.year--;
      } else {
        this.nowDate.month--;
      }
    },
    //下月
    nextMonth() {
      if (this.nowDate.month === 11) {
        this.nowDate.month = 0;
        this.nowDate.year++;
      } else {
        this.nowDate.month++;
      }
    },
    //去年
    lastYear() {
      this.nowDate.year--;
    },
    //下一年
    nextYear() {
      this.nowDate.year++;
    },
    //计算当月开始星期
    startWeek() {
      return this.calcWeekend(this.nowDate.year, this.nowDate.month, 1);
    },
    //
    clickEvent(e) {
      let monthNo = this.nowDate.month;
      let month = monthNo <= 11 ? monthNo + 1 : 0;
      let date = {
        year: this.nowDate.year,
        month: month,
        week: new Date(
          this.nowDate.year,
          this.nowDate.month,
          e.target.innerText
        ).getDay(),
        day: Number(e.target.innerText)
      };
      this.$emit('click-event', date);
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../../assets/scss/common';

.calendar-container {
  .year {
    margin-bottom: 10px;
    color: $gray-tint;
    text-align: center;
  }

  .year-step {
    width: 10%;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
  }

  .year-now {
    display: inline-block;
    width: 50%;
    line-height: 2;
  }

  .date {
    padding: 0 10px;
  }

  .date-day {
    position: relative;
    margin-left: 4px;
    margin-bottom: 5px;
    width: calc((100% - 24px) / 7);
    height: 30px;
    line-height: 30px;
    font-size: $font-size-base;
    color: #888;
    text-align: center;
    background-color: #f7f7f7;
    border: 1px solid $disabled;
    cursor: pointer;

    &:nth-child(7n + 1) {
      margin-left: 0;
    }

    &:hover {
      background-color: $disabled-tint;
    }
  }

  .label-wrap {
    position: absolute;
    bottom: 0;

    .label {
      margin: 0 1px;
      width: 8px;
      height: 3px;
    }
  }

  .label-business {
    background-color: #f00;
  }

  .label-train {
    background-color: #df8900;
  }

  .label-other {
    background-color: #0133ff;
  }

  .legend-wrap {
    padding-top: 9px;
    padding-right: 10px;
    font-size: $font-size-base;
    color: $gray-tint;

    .legend {
      padding-left: 20px;
      line-height: 12px;
    }

    .color {
      margin-right: 3px;
      width: 12px;
      height: 12px;
      vertical-align: middle;
    }

    .red {
      background-color: #f00;
    }

    .yellow {
      background-color: #df8900;
    }

    .blue {
      background-color: #0133ff;
    }
  }
}
</style>

