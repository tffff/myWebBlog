import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Tffff Site',
  mode: 'site',
  favicon: '/assets/favicon.ico',
  // dynamicImport:true,
  // exportStatic: { htmlSuffix: true },
  menus: {
    '/myblog': [
      {
        title: '开发需要',
        children: [
          'myblog/devneeds/jquerymodule',
          'myblog/devneeds/svn',
          'myblog/devneeds/git',
          'myblog/devneeds/macinstall',
          'myblog/devneeds/ios',
        ],
      },
      {
        title: 'CSS',
        children: [
          'myblog/css/css',
          'myblog/css/csslayout',
          'myblog/css/cssgraph',
          'myblog/css/csslayered',
          'myblog/css/cssworkflow',
          'myblog/css/csshoudini',
          'myblog/css/cssmatrix',
        ],
      },
      { title: 'JS', children: ['myblog/js/01', 'myblog/js/02'] },
      {
        title: 'React',
        children: [
          'myblog/react/virtualdom',
          'myblog/react/hooks',
          'myblog/react/redux',
          'myblog/react/ssr',
          'myblog/react/reactcode',
          'myblog/react/reacthooks.md',
        ],
      },
      // { title: 'Vue', collapsable: true, children: ['vue/vuesource.md'] },
      {
        title: 'Webpack',
        children: ['myblog/webpack/webpack', 'myblog/webpack/optimize'],
      },
      {
        title: 'Linux',
        children: [
          'myblog/linux/linuxcommand',
          'myblog/linux/linux',
          'myblog/linux/loginserver',
        ],
      },
      { title: 'Node', children: ['myblog/node/node'] },
      { title: 'http', children: ['myblog/http/http'] },
      {
        title: '前端工程化',
        children: [
          'myblog/engineering/continuous',
          'myblog/engineering/sonar',
          'myblog/engineering/writecli',
          'myblog/engineering/jenkins',
        ],
      },
      {
        title: '性能优化',
        children: [
          'myblog/optimization/performance',
          'myblog/optimization/fp',
          'myblog/optimization/chromebrower',
          'myblog/optimization/nodeperformance',
        ],
      },
      { title: '关于测试', children: ['myblog/testcode/test'] },
      {
        title: '图形学',
        children: ['myblog/webgl/webgl', 'myblog/webgl/threejs'],
      },
    ],
    '/algorithm': [
      {
        title: '数据结构',
        children: [
          'algorithm/datasources/queue',
          'algorithm/datasources/stack',
          'algorithm/datasources/linklist',
          'algorithm/datasources/dictionary',
          'algorithm/datasources/hash',
          'algorithm/datasources/aggregate',
          'algorithm/datasources/chart',
          'algorithm/datasources/binarytree',
        ],
      },
      {
        title: '排序算法',
        children: [
          'algorithm/sort/sort',
          'algorithm/sort/search',
          'algorithm/sort/recursion',
          'algorithm/sort/dynamic',
          'algorithm/sort/greedy',
        ],
      },
    ],
    '/interview': [
      {
        title: 'HTML和CSS相关',
        children: ['interview/htmlcss/html', 'interview/htmlcss/css'],
      },
      {
        title: 'JS相关',
        children: [
          'interview/js/jsbasics',
          'interview/js/http.md',
          'interview/js/react',
          'interview/js/code',
          'interview/js/programming',
        ],
      },
    ],
  },
  navs: [
    {
      title: '博客',
      path: '/myblog',
    },
    {
      title: '算法',
      path: '/algorithm',
    },
    {
      title: '面试',
      path: '/interview',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
  theme: {
    // '@c-primary': '#ff652f',
    '@s-menu-width': ' 260px',
    '@s-site-menu-width': '280px',
  },
  // more config: https://d.umijs.org/config
});
