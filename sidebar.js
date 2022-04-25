const menus = {
  '/myblog': [
    {
      title: '开发基础',
      children: [
        'myblog/devneeds/jquerymodule',
        'myblog/devneeds/svn',
        'myblog/devneeds/macinstall',
        'myblog/devneeds/ios',
        'myblog/devneeds/reactnativepit',
        'myblog/devneeds/iosinstall',
        'myblog/devneeds/regular',
        'myblog/devneeds/vscode',
        'myblog/devneeds/gitlab',
        'myblog/devneeds/docker',
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
        'myblog/js/00',
        'myblog/js/01',
        'myblog/js/02',
        'myblog/js/03',
        'myblog/js/04',
        'myblog/js/05',
        'myblog/js/06',
        'myblog/js/07',
      ],
    },
    {
      title: '前端框架类',
      children: [
        'myblog/frame/react探索',
        'myblog/frame/react_redux初探',
        'myblog/frame/react源码解析',
        'myblog/frame/reacthook探索',
        'myblog/frame/reacthook源码解析',
        'myblog/frame/react_ssr',
        'myblog/frame/vue_00',
        'myblog/frame/vue_01',
        'myblog/frame/vue_02',
        'myblog/frame/applet_01',
        'myblog/frame/ts_00',
      ],
    },
    {
      title: '前端工程化',
      children: [
        'myblog/engineering/01_webpack',
        'myblog/engineering/02_webpack',
        'myblog/engineering/parcel',
        'myblog/engineering/rollup',
        'myblog/engineering/03_continuous',
        'myblog/engineering/04_jenkins',
        'myblog/engineering/05_sonar',
        'myblog/engineering/06_writecli',
      ],
    },
    {
      title: '性能优化',
      children: [
        'myblog/performance/performance',
        'myblog/performance/fp',
        'myblog/performance/chromebrower',
        'myblog/performance/nodeperformance',
      ],
    },
    {
      title: '服务器知识',
      children: [
        'myblog/server/linux',
        'myblog/server/http',
        'myblog/server/node',
      ],
    },
    {
      title: '其他',
      children: [
        'myblog/other/test',
        'myblog/other/webgl',
        'myblog/other/threejs',
      ],
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
    {
      title: '算法题',
      children: [
        'algorithm/算法题/00.md',
        'algorithm/算法题/01.md',
        'algorithm/算法题/02.md',
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
    {
      title: '安全',
      children: ['interview/safe/00.md'],
    },
  ],
};

export default menus;
