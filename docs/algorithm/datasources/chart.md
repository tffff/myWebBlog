---
title: 图
date: 2020-09-02 16:37:10
---

## 图的概念

- 图由边的集合及顶点的集合组成，每一个城市就是一个顶点，每一个道路就是一个边

- 顶点也有权重，也称为成本，如果一个图的顶点对是有序的，则称之为**有向图**，在对有向图中的顶点排序后，便可以在顶点之间绘制一个箭头，有向图表明了顶点的流向，流程图就是一个有向图的例子
- 如果图是无序的，就称为**无序图**或**无向图**
- 从一个节点走到另一个节点的这一组边称为**路径**，路径中所有的顶点都由边连接，路径的长度用路径中的第一个顶点到最后一个顶点之间边的数量表示，指向自身的顶点组成的路径称为**环**，环的长度为 0
- 圈是至少有一条边的路径，且路径的第一个顶点和最后一个顶点相同，无论有向图还是无向图只要是没有重复的顶点的圈就是一个**简单圈**，除了第一个和最后一个顶点外，路径的其他顶点有重复的圈成为**平凡圈**
- 如果两个顶点之间有路径，那么这两个顶点之间就是强连通的，如果有向图的所有顶点都是**强连通**的，那么这个有向图也是强连通的。

## 代码实现

```js
function Graph(v) {
  this.vertices = v;
  this.edges = 0; //表示边
  this.adj = []; //链接的边
  this.marked = []; //表示是否访问过
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.marked[i] = false;
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs; //深度优先搜索
  this.bfs = bfs; //广度优先搜索
  this.edgeTo = [];
  this.hasPathTo = hasPathTo;
  this.pathTo = pathTo;
}
//添加点
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}
//显示图
function showGraph() {
  for (var i = 0; i < this.vertices; i++) {
    var edges = '';
    for (j = 0; j < this.vertices; j++) {
      if (this.adj[i][j]) {
        edges += this.adj[i][j] + ' ';
      }
    }
    console.log(i + '-> ' + edges);
  }
}

//深度优先搜索
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log(v + '已经被访问了');
  }
  for (var w in this.adj[v]) {
    var current = this.adj[v][w];
    if (!this.marked[current]) {
      this.dfs(current);
    }
  }
}
//广度优先搜索
function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    var v = queue.shift();
    if (v != undefined) {
      console.log('bfs ' + v + '已经被访问');
    }

    for (var w in this.adj[v]) {
      var current = this.adj[v][w];
      if (!this.marked[current]) {
        this.marked[current] = true;
        this.edgeTo[current] = v;
        queue.push(current);
      }
    }
  }
}

function hasPathTo(v) {
  return this.marked[v];
}
//最短路径
function pathTo(v) {
  var source = 0;
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  var path = [];
  for (var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(source);
  return path;
}

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

// g.dfs(0)
g.bfs(0);
var paths = g.pathTo(4);
var str = '';
while (paths.length > 0) {
  if (paths.length > 1) {
    str += paths.pop() + '->';
  } else {
    str += paths.pop();
  }
}
console.log(str);
```
