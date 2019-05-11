require('framework7/dist/js/framework7');
var $$ = Dom7;
var myApp;
var framework = {
  init: function (e) {
    if (myApp) {
      return myApp;
    } else {
      return new Framework7(e);
    }
  }
};
var set = {
  init: function () {
    myApp = framework.init({
      pushState: true,
    });
    // Add view
    var mainView = myApp.addView('.view-main', {
      // Because we use fixed-through navbar we can enable dynamic navbar
      dynamicNavbar: true,
      animatePages: true,
      swipeBackPageAnimateOpacity: false
    });
    myApp.onPageInit('homepage', function (page) {
      var mySwiper1 = myApp.swiper('.banner-swiper', {
        loop: true,
        pagination: '.banner-swiper .swiper-pagination',
        speed: 1000,
        autoplay: true,
        autoplayDisableOnInteraction: false,
      });
    });
    myApp.onPageInit('course', function (page) {
      // Tab
      $$('.topbar-btn').click(function () {
        let indexValu = $$(this).index();
        $$(this).addClass('active').siblings().removeClass('active');
        $$('.course-htm-panel').eq(indexValu).addClass('active').siblings().removeClass('active');
      });
    });
  }
};

exports.set = set;
exports.framework = framework;