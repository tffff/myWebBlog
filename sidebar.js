const menus = {
  '/myblog': [
    {
      title: '开发需要',
      children: [
        'myblog/devneeds/jquerymodule',
        'myblog/devneeds/svn',
        'myblog/devneeds/macinstall',
        'myblog/devneeds/ios',
        'myblog/devneeds/reactnativepit',
        'myblog/devneeds/iosinstall',
        'myblog/devneeds/regular',
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
        'myblog/css/clippath',
      ],
    },
    {
      title: 'JS',
      children: [
        'myblog/js/01',
        'myblog/js/02',
        'myblog/js/03',
        'myblog/js/04',
        'myblog/js/05',
      ],
    },
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
    {
      title: '微信小程序',
      children: ['myblog/wechat/index'],
    },
    // { title: 'Vue', collapsable: true, children: ['vue/vuesource.md'] },
    {
      title: 'Webpack',
      children: [
        'myblog/webpack/webpack',
        'myblog/webpack/optimize',
        'myblog/webpack/01.md',
        'myblog/webpack/02.md',
        'myblog/webpack/03.md',
      ],
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
      title: '基础',
      children: [
        'interview/htmlcss/html',
        'interview/htmlcss/css',
        'interview/js/jsbasics',
      ],
    },
    {
      title: '框架',
      children: [
        'interview/js/http.md',
        'interview/js/react',
        'interview/js/programming',
      ],
    },
  ],
};

export default menus;