export default {
  install(Vue, options = {
    time: 500 // 长按触发时间默认为500ms
  }) {
    Vue.directive('longpress', {
      bind: function (el, binding, vNode) {
        let pressTimer = null;
        // 开始长按时间的计时器，并运行handler
        let start = (e) => {
          e.stopPropagation();
          if (pressTimer === null) {
            pressTimer = setTimeout(() => {
              handler();
            }, options.time)
          }
        }
        // 清除计时器
        let cancel = (e) => {
          e.stopPropagation();
          if (pressTimer !== null) {
            clearTimeout(pressTimer);
            pressTimer = null;
          }
        }
        // 调用指令传递过来的函数
        const handler = (e) => {
          binding.value(e)
        };
        // 事件监听
        el.addEventListener("mousedown", start);
        el.addEventListener("touchstart", start);
        el.addEventListener("click", cancel);
        el.addEventListener("mouseout", cancel);
        el.addEventListener("touchend", cancel);
        el.addEventListener("touchcancel", cancel);
      }
    })
  }
}
