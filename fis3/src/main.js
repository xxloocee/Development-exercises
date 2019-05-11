var jQuery, $;
jQuery = $ = require('jquery')
window.jQuery = jQuery;

// require('src/utils/jquery.SuperSlide.2.1.3.js');
// Share
var Share = {
  start: function (e, op) {
    require(['jquery', 'utils/jquery.share.min'], function ($, share) {
      $(e).share(op)
    })
  }
}

// navPanel
var navPanel = {
  init: function () {
    require(['jquery', 'utils/panel'], function ($, panel) {

      var $window = $(window),
        $body = $('body');

      $(
        '<div id="navButton">' +
        '<a href="#navPanel" class="toggle"><i class="iconfont icon-list"></i></a>' +
        '</div>'
      ).appendTo($body);

      $.fn.navList = function () {
        var $this = $(this);
        $a = $this.find('a'),
          b = [];

        $a.each(function () {

          var $this = $(this),
            indent = Math.max(0, $this.parents('li').length - 1),
            href = $this.attr('href'),
            target = $this.attr('target');

          b.push(
            '<a ' +
            'class="link depth-' + indent + '"' +
            ((typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
            ((typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
            '>' +
            '<span class="indent-' + indent + '"></span>' +
            $this.text() +
            '</a>'
          );

        });

        return b.join('');

      };

      $(
        '<div id="navPanel">' +
        '<nav>' +
        // '<a href="index.html" class="link depth-0">网站首页</a>' +
        $('#nav').navList() +
        '</nav>' +
        '</div>'
      ).appendTo($('body'))
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'left',
          target: $('body'),
          visibleClass: 'navPanel-visible'
        });

    });
  }
}

// Tab
var tab = {
  init: function () {
    $('.tab').click(function () {
      let indexValu = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.course-panel').eq(indexValu).addClass('active').siblings().removeClass('active');
    });
  }
}

// 手风琴
var accordion = {
  init: function () {
    $('.classroom-series').find('.info').hover(function () {
      let indexValu = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.classroom-series').find('.info-item').removeClass('active');
      $('.classroom-series').find('.info-panel').removeClass('active');
      $('.classroom-series').find('.info-item').eq(indexValu).addClass('active');
      $('.classroom-series').find('.info-panel').eq(indexValu).addClass('active').siblings().removeClass('active');
    })
  }
}

// 轮播
var Slide = {
  init: function (e, op) {
    require(['jquery', 'utils/jquery.SuperSlide.2.1.3'], function ($, slide) {
      $(e).slide(op);
    })
  }
}

// 课程select
var select = {
  init: function () {
    $('.header-select').click(function () {
      $(this).find('.option').toggle();
    })
  }
}

// 星星评分
var Star = {
  init: function () {
    var score = [],
      starWidth = [];
    for (let i = 0; i < $('.score').length; i++) {
      score[i] = parseFloat($('.score').eq(i).text());
      starWidth[i] = 19 * score[i];
      $('.score-star-wrap').eq(i).css('width', starWidth[i] - 1);
    }
  }
}

exports.Share = Share
exports.navPanel = navPanel
exports.tab = tab
exports.accordion = accordion
exports.Slide = Slide
exports.select = select
exports.Star = Star

