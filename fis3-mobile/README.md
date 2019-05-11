
## court-attendance-mobile

### project base on fis

[![build status](https://git.homolo.org/fed/court-attendance-mobile/badges/master/build.svg)](https://git.homolo.org/fed/court-attendance-mobile/commits/master)

**该项目用于快速构建网站类项目的脚手架。**

- **使用方法**

  ``` bash
  # 安装依赖组件
  npm install

  # 启动 node 本地服务并实时监听
  npm run dev

  # 打包发布项目
  npm run build
  ```


- **技术架构**

  [fis3](http://fis.baidu.com/) 作为前端工程构建工具;

  [Sass](http://sass-lang.com/) 作为 CSS 中间语言;

  [Mod.js](https://github.com/fex-team/mod) 作为前端模块加载器。

  解决并完善前端开发中自动化工具、性能优化、模块化框架、开发规范、代码部署、开发流程等问题。

  &emsp;
  
- **目录结构**

  fis-template/

  ├─ dist/ 打包输出

  ├─ node_modules/  项目依赖组件目录

  ├─ lib/  依赖类库目录

  │&emsp;&emsp;└─ mod.js

  ├─ src/  项目目录  
  
  │&emsp;&emsp;├─ assets/  公用资源库

  │&emsp;&emsp;&emsp;&emsp;├─ fonts/  字体图标文件

  │&emsp;&emsp;&emsp;&emsp;├─ images/  公用图片库

  │&emsp;&emsp;&emsp;&emsp;├─ scss/  公用样式库

  │&emsp;&emsp;├─ components/  公用组件

  │&emsp;&emsp;├─ pages/  项目页面

  │&emsp;&emsp;├─ utils/  工具库

  │&emsp;&emsp;├─ mian.js  模块入口

  ├─ editorconfig  编辑器配置

  ├─ .gitignore 忽略设置文件

  ├─ .gitlab-ci.yml 自动发布构建脚本

  ├─ fis-conf.js  FIS配置文件
    
  ├─ package.json  依赖组件配置文件

  ├─ index.html  项目首页

  ├─ nofound.html  错误页面

  ├─ update.html  浏览器升级页面

  └─ README.md 项目说明文件

  &emsp;

- **默认内置组件介绍**
  
  1. jQuery;
  
  2. Bootstrap - 只推荐使用Bootstrap的JS组件，可单独使用;
  
  3. [SuperSlide](http://www.superslide2.com/) - 轮播图、文字、图片切换通用组件;
  
  4. [share](https://github.com/overtrue/share.js) - 社会化分享组件;

  &emsp;
  
- **后续完善功能**

  1. Mock数据模拟;

  2. 支持ES6;