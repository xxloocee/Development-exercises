$(function(){
  function tabar(btnName, panelName) {
    $(btnName).click(function () {
      let indexValu = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $(panelName).eq(indexValu).addClass('active').siblings().removeClass('active');
    });
  };
  tabar('.tabar-head', '.live-instro-panel');
  tabar('.live-details-tabar', '.live-details-panel');
  tabar('.refresh-tabar-head', '');
});
// 图片直播,点击弹出图片详情并轮播
function PicInfo(picId, itemName) {
  this.init(picId, itemName);
};
PicInfo.prototype.init = function (picId, itemName) {
  this.flag = true;
  this.flagCreat = true; // 作为是否创建轮播图节点的标志符
  var picWrap = document.getElementById(picId);
  this.picItem = picWrap.getElementsByClassName(itemName);
  this.picCopyId = document.getElementById('pic-copyid');
  this.slideWrap = picWrap.getElementsByClassName('slide-item');
  this.dotWrap = document.getElementById('dots');
  this.slides = picWrap.getElementsByClassName('slides');
  this.close = document.getElementById('close');
  this.getIndex = 0; // 获取图片直播每一项的index
  this.creatElements();
  this.even(); // 监听事件
  this.ulObjCopy = 0; // 获取轮播函数中的ulObj对象
  this.getDotleft = 0;
  this.pic = 0;
  var self = this;
  // 添加轮播
  function my$(id) {
    return document.getElementById(id);
  };
  var box = my$('bottom-carouse');
  this.inner = box.children[0];
  var ulObj = this.inner.children[0].children[0];
  var list = ulObj.children;
  var right = my$('right');
  this.slidWidth = 0; // 初始化轮播图盒子宽度
  var isCilck = true; // 防止连续点击，时间间隔为0.5s
  this.ulObjCopy = ulObj;
  for (let i = 0; i < list.length; i++) {
    this.dotsObj.children[i].setAttribute('index', i);
    ulObj.children[i].setAttribute('index', i);
    this.dotsObj.children[i].addEventListener('click', function () {
      self.pic = this.getAttribute('index');
      if (self.pic > 1) {
        $('#dots').animate({ left: - self.pic * 125 + 250 });
      } else if (self.pic = 1) {
        $('#dots').animate({ left: 0 });
      }
      self.pic = this.getAttribute('index');
      for (let i = 0; i < list.length - 1; i++) {
        self.dotsObj.children[i].setAttribute('class', 'dot');
      }
      self.dotsObj.children[this.getAttribute('index')].className += ' active';
      self.myAnimate(ulObj, -this.getAttribute('index') * self.slidWidth, 0.1, 10);
    }, false);
  }
  ulObj.appendChild(ulObj.children[0].cloneNode(true));
  right.onclick = onmouseclickHandle;
  function onmouseclickHandle() {
    if (isCilck && self.pic < list.length - 2) {
      isCilck = false;
      for (let i = 0; i < list.length - 1; i++) {
        self.dotsObj.children[i].setAttribute('class', 'dot')
      }
      if (self.pic === list.length - 2) {
        self.pic = 0;
        ulObj.style.left = 0 + 'px';
      }
      self.pic++;
      if (self.pic > 1) {
        $('#dots').animate({ left: - self.pic * 125 + 250 });
      } else if (self.pic = 1) {
        $('#dots').animate({ left: 0 });
      }
      self.dotsObj.children[self.pic].className += ' active';
      self.myAnimate(ulObj, -self.pic * self.slidWidth, 0.1, 10);
      setTimeout(function () {
        isCilck = true;
      }, 500);
    }
  };
  left.onclick = function () {
    if (isCilck && self.pic > 0) {
      isCilck = false;
      for (let i = 0; i < list.length - 1; i++) {
        self.dotsObj.children[i].setAttribute('class', 'dot')
      }
      if (self.pic === 0) {
        self.pic = list.length - 2;
        ulObj.style.left = -self.pic * imgWidth + 'px';
      }
      self.pic--;
      if (self.pic > 1) {
        $('#dots').animate({ left: - self.pic * 125 + 250 });
      }
      self.dotsObj.children[self.pic].className += ' active';
      self.myAnimate(ulObj, -self.pic * imgWidth, 0.1, 10);
      setTimeout(function () {
        isCilck = true;
      }, 500);
    }
  };
  PicInfo.prototype.myAnimate = function (element, target, n, j) { // 写到原型方法里面去，因为PicInfo.prototype.even要调用,n为轮播快慢,j为步长
    if (element.timeId) {
      clearInterval(element.timeId);
    }
    element.timeId = setInterval(function () {
      var current = element.offsetLeft;
      var step = j;
      step = current < target ? step : -step;
      current += step;
      if (Math.abs(current - target) > Math.abs(step)) {
        element.style.left = current + 'px';
      } else {
        clearInterval(element.timeId);
        element.style.left = target + 'px';
      }
    }, n);
  };
  // end
};
PicInfo.prototype.even = function () {
  var self = this;
  if (self.flag) {
    for (let i = 0; i < this.picItem.length; i++) {
      this.picItem[i].addEventListener('click', function () {
        self.picItem[i].setAttribute('index', i);
        self.slides[0].style.display = 'block';
        self.slides[0].parentNode.classList.add('active');
        self.slidWidth = self.inner.offsetWidth; // 获取轮播图盒子的宽度
        self.getIndex = this.getAttribute('index');
        if (self.getIndex > 2) { //初始化
          $('#dots').animate({ left: - self.getIndex * 125 + 250 });
        } else if (self.getIndex <= 2) {
          $('#dots').animate({ left: 0 });
        }
        self.dotsObj.children[self.getIndex].className += ' active';
        self.myAnimate(self.ulObjCopy, - self.getIndex * 625, 0.01, 1000); // 初始化图片位置
        self.pic = self.getIndex;
      }, true);
    }
    self.flag = !this.flag;
  }
  if (!self.flag) {
    self.close.addEventListener('click', function (e) {
      self.slides[0].style.display = 'none';
      self.slides[0].parentNode.classList.remove('active');
      self.flag = !this.flag;
    }, true);
  }
};
// 创建图片直播的点击弹出内容
PicInfo.prototype.creatElements = function () {
  var picData = [
    { bacImg: 'url(./images/content-top.jpg)' },
    { bacImg: 'url(./images/32465.jpg)' },
    { bacImg: 'url(./images/content-top.jpg)' },
    { bacImg: 'url(./images/32465.jpg)' },
    { bacImg: 'url(./images/content-top.jpg)' },
    { bacImg: 'url(./images/32465.jpg)' },
    { bacImg: 'url(./images/content-top.jpg)' },
    { bacImg: 'url(./images/32465.jpg)' },
    { bacImg: 'url(./images/content-top.jpg)' }
  ];
  if (this.flagCreat) { //判断当前是否已创建弹框
    this.picItemCopy = this.picCopyId.cloneNode(true);
    this.ulObj = this.slideWrap[0].appendChild(this.picItemCopy);
    this.ulObj.children[0].className += ' bac-image-c';
    this.ulObj.setAttribute('id', 'slide-item-ul');
    this.liObj = this.ulObj.children;
    for (let i = 0; i < this.liObj.length; i++) {
      this.liObj[i].setAttribute('class', 'slide');
      this.dotObj = document.createElement('li');
      this.dotsObj = document.getElementById('dots');
      this.divObj = document.createElement('div');
      this.divObj.setAttribute('class', 'bac-image');
      this.dotsObj.appendChild(this.dotObj).setAttribute('class', 'dot');
      this.dotsObj.appendChild(this.dotObj).appendChild(this.divObj).style.backgroundImage = picData[i].bacImg;
    }
    this.flagCreat = false;
  }
};
// 实例化图片直播点击图片查看详情
var picInfo = new PicInfo('live-details-panel3', 'item');

// 顶部轮播图
function my$(id) {
  return document.getElementById(id);
}
var box = my$('live-instro-carouse');
var inner = box.children[0];
var ulObj = inner.children[0];
var list = ulObj.children;
var olObj = inner.children[1];
var imgWidth = inner.offsetWidth;
var arr = my$('arrs');
var next = my$('next');
var pic = 0;
var isCilck = true; // 防止连续点击，时间间隔为0.5s
for (let i = 0; i < list.length; i++) {
  var liObj = document.createElement('li');
  liObj.setAttribute('class', 'spot')
  olObj.appendChild(liObj);
  liObj.setAttribute('index', i);
  liObj.onclick = function () {
    for (let j = 0; j < olObj.children.length; j++) {
      olObj.children[j].setAttribute('class', 'spot');
    }
    this.className += ' current';
    pic = this.getAttribute('index');
    myAnimate(ulObj, -pic * imgWidth, 0.01);
  };
}
ulObj.appendChild(ulObj.children[0].cloneNode(true));
olObj.children[0].className += ' current';
var timeId = setInterval(onmouseclickHandle, 2000);
box.onmouseover = function () {
  clearInterval(timeId);
};
box.onmouseout = function () {
  timeId = setInterval(onmouseclickHandle, 2000);
};
next.onclick = onmouseclickHandle;
function onmouseclickHandle() {
  if (isCilck) {
    isCilck = false;
    if (pic === list.length - 1) {
      pic = 0;
      ulObj.style.left = 0 + 'px';
    }
    pic++;
    myAnimate(ulObj, -pic * imgWidth, 10);
    if (pic === list.length - 1) {
      olObj.children[olObj.children.length - 1].setAttribute('class', 'spot');
      olObj.children[0].className += ' current';
    } else {
      for (let i = 0; i < olObj.children.length; i++) {
        olObj.children[i].setAttribute('class', 'spot');
      }
      olObj.children[pic].className += ' current';
    }
    setTimeout(function () {
      isCilck = true;
    }, 500);
  }
};
prev.onclick = function () {
  if (isCilck) {
    isCilck = false;
    if (pic === 0) {
      pic = list.length - 1;
      ulObj.style.left = -pic * imgWidth + 'px';
    }
    pic--;
    myAnimate(ulObj, -pic * imgWidth, 10);
    for (let i = 0; i < olObj.children.length; i++) {
      olObj.children[i].setAttribute('class', 'spot');
    }
    olObj.children[pic].className += ' current';
    setTimeout(function () {
      isCilck = true;
    }, 500);
  }
};
function myAnimate(element, target, n) {
  clearInterval(element.timeId);
  element.timeId = setInterval(function () {
    var current = element.offsetLeft;
    var step = 10;
    step = current < target ? step : -step;
    current += step;
    if (Math.abs(current - target) > Math.abs(step)) {
      element.style.left = current + 'px';
    } else {
      clearInterval(element.timeId);
      element.style.left = target + 'px';
    }
  }, n);
};
// end

// 文字直播滚动时，给head添加阴影
var topValue = 0; // 初始化滚动条到顶部的距离 
var interval = null;
var liveDetailsPanel1 = document.getElementById('live-details-panel1-scroll');
liveDetailsPanel1.addEventListener('scroll', function (e) {
  if (interval === null) // 滑动时添加active类名
    interval = setInterval('stopScroll()', 100);
  topValue = liveDetailsPanel1.scrollTop;
  $('.live-details-panel1-header').addClass('active');
});
function stopScroll() {
  // 判断此刻到顶部的距离是否和0.1秒前的距离相等 
  if (liveDetailsPanel1.scrollTop === topValue) {
    $('.live-details-panel1-header').removeClass('active');
    clearInterval(interval);
    interval = null;
  }
};

