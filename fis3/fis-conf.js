// 设置项目属性
fis.set('project.name', 'one');
fis.set('project.static', '/static');
fis.set('project.files', ['*.html', 'map.json', '/test/*']);

// ESLINT 配置
// var eslintConf = {
//   ignoreFiles: ['/lib/**.js', 'node_modules/**.js', 'modules/js/**js'],
//   envs: ['browser', 'node'],
//   globals: ['$','jQuery'],
//   rules: {
//     "no-extra-semi": 2,
//     "quotes": [1, "single"],
//     "no-extra-parens": 1,
//     "no-undef": 2,
//     "no-use-before-define": 1,
//     "no-unused-vars": 1,
//     "no-eval": 1,
//     "camelcase": 2,
//     "no-multiple-empty-lines": [1, {"max": 2}]
//   }
// };

// 引入模块化开发插件，设置规范为 commonJs 规范。
fis.hook('commonjs', {
  baseUrl: './src',
  extList: ['.js', '.es']
});

// 开启同名依赖
fis.match('/{node_modules, src}/**', {
  isMod: true,
  useSameNameRequire: false
});

// 允许在 js 中直接 require css和file
fis.match('*.{js,es}', {
  preprocessor: [
    fis.plugin('js-require-file'),
    fis.plugin('js-require-css', {
      mode: 'dependency'
    })
  ]
});

// 路径增强
fis.match('*.html', {
  parser: fis.plugin('html-uri')
});

// Eslint JS代码检查
// fis.match('**.js', {
//   lint: fis.plugin('eslint', eslintConf)
// });

// 开启图片压缩
fis.match('**.png', {
  optimizer: fis.plugin('png-compressor', {
    type: 'pngquant'
  })
});

fis.match('/lib/**.js', {
  release: '${project.static}/$&'
});

// node_modules 目录处理
fis.match('/node_modules/**', {
  release: '${project.static}/$&'
});
fis.match('/node_modules/**.css', {
  isMod: true,
  release: '${project.static}/$&'
});
fis.match('/node_modules/**.js', {
  // isMod: true,
  release: '${project.static}/$&'
});

// modules 目录处理
fis.match('/src/(**)', {
  release: '${project.static}/$1'
});

// Scss 文件编译
fis.match(/^\/src\/(.*\.scss)$/i, {
  parser: fis.plugin('node-sass-qt', {
    include_paths: ['src/assets/scss', 'node_modules'] // 加入文件查找目录
  })
});

// 使用 autoprefixer 为编译后的 css 文件添加浏览器前缀
fis.match(/^\/src\/(.*\.(scss|css))$/i, {
  rExt: '.css',
  isMod: true,
  release: '${project.static}/$1',
  postprocessor: fis.plugin('autoprefixer')
});

// 处理图片
fis.match(/^\/src\/(.*\.(?:png|jpg|gif))$/i, {
  release: '${project.static}/$1'
});

// 处理 js
fis.match(/^\/src\/(.*\.js)$/i, {
  isMod: true,
  release: '${project.static}/$1'
});

// 通过 loader 解决资源依赖
fis.match('::package', { 
  postpackager: fis.plugin('loader', {
    resourceType: 'commonJs',
    useInlineMap: true // 资源映射表内嵌
  })
});

// 使用 node_modules 替代components
fis.unhook('components');
fis.hook('node_modules');

// debug 后缀 不会压缩
var map = {
    'prod': {
        host: '',
        path: '/prototype/${project.name}'
    },
    'prod-debug': {
        host: '',
        path: '/prototype/${project.name}'
    }
};

// 通用 1.替换url前缀 2.添加mr5码 3.打包 4.合图 5.重新定义资源路径
Object.keys(map).forEach(function(v) {
  var o = map[v];
  var domain = o.host + o.path;

  fis.media(v)
    .match('**.{es,js}', {
      useHash: false,
      domain: domain
    })
    .match('**.{scss,css}', {
      useSprite: true,
      useHash: false,
      domain: domain
    })
    .match('::image', {
      useHash: false,
      domain: domain
    })
    .match('**/(*_{x,y,z}.png)', {
      release: '/pkg/$1'
    })
    // 启用打包插件，必须匹配 ::package
    .match('::package', {
      spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        // scale: 0.5, // 移动端二倍图用
        margin: '10'
      }),
      postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        allInOne: true,
        useInlineMap: true // 资源映射表内嵌
      })
    })
    .match('/node_modules/**.css', {
      packTo: '/pkg/modules.css'
    })
    .match('/node_modules/**.js', {
      packTo: '/pkg/modules.js'
    })
    .match('/src/{pages,components}/**.{scss,css}', {
      packTo: '/pkg/components.css'
    })
    .match('/src/assets/scss/**.{scss,css}', {
      packTo: ''
    })
    .match('/src/assets/scss/common.scss', {
      packTo: '/pkg/common.css'
    })
    .match('/src/assets/**.{es,js}', {
      packTo: '/pkg/components.js'
    })
});

// 压缩css js html
Object.keys(map)
.filter(function(v) {
  return v.indexOf('debug') < 0
})
.forEach(function(v) {
  fis.media(v)
  .match('**.{es,js}', {
    optimizer: fis.plugin('uglify-js')
  })
  .match('*.min.js', {
    optimizer: null
  })
  .match('min.js',{
    optimizer: null
  })
  .match('::image', {
    useHash: false
  })
  .match('**.{scss,less,css}', {
    optimizer: fis.plugin('clean-css', {
      'keepBreaks': true //保持一个规则一个换行
    })
  });
});

fis.media('prod')
.match('**', {
  deploy: [
    fis.plugin('skip-packed', {
      // 默认被打包了 js 和 css 以及被 css sprite 合并了的图片都会在这过滤掉，
      // 但是如果这些文件满足下面的规则，则依然不过滤
      ignore: []
    }),

    fis.plugin('local-deliver', {
      to: 'one'
    })
  ]
});