---
title: webpack性能优化
date: 2020-08-13 09:31:31
---

## 性能分析

- 深度 treeshaking

  - webpack-deep-scope-plugin 深度范围分析的 webpack 插件
  - webpack-parallel-uglify-plugin 该插件可帮助具有多个入口点的项目加快其构建速度
  - purifycss-webpack 该插件使用 PurifyCSS 从 CSS 中删除未使用的选择器

- 开启多核压缩 happypack(比较慢，慎用) 多线程编译 webpack 不支持的情况下使用`thread-loader` ， JavaScript 的多核压缩可以开启`terser-webpack-plugin` (官方维护 多核压缩`uglifyjs-webpack-plugin` ,非官方维护`webpack-parallel-uglify-plugin`)

```js
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = {
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        cache: true, // 是否缓存
        parallel: true, // 是否并行打包
        sourceMap: true,
      }),
    ],
  },
};
```

CSS 的多核压缩: `optimize-css-assets-webpack-plugin`

- speed-measure-webpack-plugin 打包速度分析

- progress-bar-webpack-plugin 打包进度展示

- hard-source-webpack-plugin 对整个工程开启缓存

- webpack-dashboard 增强了 webpack 的输出，包含依赖的大小、进度和其他细节。

  webpack-bundle-analyzer 打包结果分析

  webpack --profile --json > stats.json

  14-1 http://alexkuz.github.io/webpack-chart/

  14-2 http://webpack.github.io/analyse/

- inline-manifest-webpack-plugin 把 runtime 放到 html 里

  html-inline-css-webpack-plugin 把一些核心的 CSS 放到⻚面内部

  html-webpack-inline-source-plugin 内部资源引入

- cache-loader loader 的缓存 => 'babel-loader?cacheDirectory=true'

  exclude: /node_modules/, // 排除不处理的目录

  include: path.resolve(\_\_dirname, 'src') // 精确指定要处理的目录

- hard-source-webpack-plugin 开启全局的编译缓存

- image-webpack-loader 压缩图片

- HtmlWebpackPlugins 压缩推荐选项

```js
new HtmlWebpackPlugin({
  inlineSource: '.css$',
  template: path.join(__dirname, `src/${pageName}/index.html`),
  filename: `${pageName}.html`,
  chunks: ['vendors', pageName],
  inject: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    preserveLineBreaks: false,
    minifyCSS: true,
    minifyJS: true,
    removeComments: false,
  },
});
```

- prepack-webpack-plugin 代码求值

- @babel/plugin-syntax-dynamic-import 动态引入

- Webpack5 不间断进程(continuous processes)和缓存

对于大型复杂项目应用，在开发阶段，开发者一般习惯使用 Webpack --watch 选项或者 webpack- dev-server 启动一个不间断的进程(continuous processes)以达到最佳的构建速度和效率。 Webpack --watch 选项和 webpack-dev-server 都会监听文件系统，进而在必要时，触发持续编译 构建动作。 原理其实就是轮询判断文件的最后编辑时间是否变化，某个文件发生了变化，并不会立刻告诉监听 者，而是先缓存起来，等待 aggregateTimeout(Webpack 的 --watch 选项内置的类似 batching 的 能力)

https://github.com/paulmillr/chokidar

## 工程优化与原理

- 构建配置设计成一个库，比如:hjs-webpack、Neutrino、webpack-blocks

- 抽成一个工具进行管理，比如:create-react-app, kyt, nwb

- 更多的快速构建工具:lerna 、brunch、 rome 、snowpack (过往 Browserify、Rollup.js、Gulp、 Parcel、Microbundle)

- 更友好的提示错误
  - friendly-errors-webpack-plugin
  - webpack-build-notifier
  - set-iterm2-badge && node-bash-title 标题和窗口内容修改

```js
function() {
  this.hooks.done.tap('done', (stats) => {
    if (stats.compilation.errors && stats.compilation.errors.length&& process.argv.indexOf('--watch') == -1)
        {
          console.log('build error');
          process.exit(1);
    }
    })
}
```

- splitchunks 公用库的代码拆分 去除打包 分离⻚面公用包 `html-webpack-externals-plugin`

- 使用动态 polyfill

它会根据你的浏览器 UA 头，判断你是否支持某些特性，从而返回给你一个合适的 polyfill。

- 集成到 CI 监控文件的大小 https://github.com/siddharthkp/bundlesize

- set-iterm2-badge && node-bash-title 标题和窗口内容修改

## 实战

对自己公司的项目打包进行优化的步骤，项目使用 react 脚手架初始化的构建的项目，但是打包时间是`257`秒,现在对打包速度进行优化

1. `terser-webpack-plugin` 默认在脚手架里面，所以只是配置了缓存和并行打包参数
2. 首先使用 `speed-measure-webpack-plugin`插件进行分析，看到底是哪块比较慢

```js
//安装
yarn add -D speed-measure-webpack-plugin

//使用
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const webpackConfig = smp.wrap({
  //webpack.config return对象
});
```

显示的结果如下：

<!-- ![webpack分析结果](/webpack/webpack分析.png) -->
<img src='../../assets/webpack/webpack分析.png'/>

3. 也可以使用`cache-loader`,但是要注意：这个使用多了会造成电脑卡顿

4. 因为打包速度太慢，为了提高打包的体验，我加了一个进度条`progress-bar-webpack-plugin`,这样可以知道打包的进度，给开发者一个明确的提示

```js
//安装
yarn add -D progress-bar-webpack-plugin

//使用
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
plugins: [
  new ProgressBarPlugin()
]
```

效果如下：

<!-- ![进度条效果](/webpack/progress.png) -->
<img src='../../assets/webpack/progress.png'/>