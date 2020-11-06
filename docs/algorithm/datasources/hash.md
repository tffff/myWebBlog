---
title: 散列(哈希)
date: 2020-09-01 16:37:10
---

## 散列的概念

- 散列后的数据可以快速插入取用
- 在散列表上插入、删除和取用数据非常快，**查找数据却效率低下**，比如查找一组数据中的最大值和最小值
- javascript 散列表基于数组设计，理想情况散列函数会将每个键值映射为唯一的数组索引，数组长度有限制，更现实的策略是将键均匀分布
- 可以用于查找快递

## 代码实现

```js
function HashTable() {
  this.table = new Array(137); //避免碰撞的第一个质数
  this.simpleHash = simpleHash; //计算散列值的方法 碰撞概率比较大
  this.betterHash = betterHash; //霍纳算法
  this.put = put;
  this.get = get;
  this.showDis = showDis;
  this.buildChians = buildChians;
}

//一维数组变成二维数组
function buildChians() {
  for (var i = 0; i < data.length; i++) {
    this.table[i] = new Array();
  }
}

//除留余数法
function simpleHash(data) {
  var total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

// 更好的分配键值
function betterHash(data) {
  var H = 31;
  var total = 0;
  for (let i = 0; i < data.length; i++) {
    total += H * total + data.charCodeAt(i);
  }
  if (total < 0) {
    total += this.table.length - 1;
  }
  return total % this.table.length;
}

//插入  线性探测法
function put(data) {
  var pos = this.simpleHash(data);
  if (this.table[pos] == undefined) {
    this.table[pos] = data;
  } else {
    while (this.table[pos] != undefined) {
      pos++;
    }
    this.table[pos] = data;
  }
  // this.table[pos]=data
}

// 获取
function get(key) {
  var hash = this.simpleHash(data);
  console.log(hash);
  for (let i = hash; i < this.table.length; i++) {
    if (this.table[i] == key) {
      return i;
    }
  }
  return undefined;
}

//显示
function showDis() {
  var n = 0;
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log('键值是->' + i + ' 值是' + this.table[i]);
    }
  }
}

var hTable = new HashTable();
hTable.put('china');
hTable.put('Japan');
hTable.put('America');
hTable.put('nicha');
console.log(hTable);
hTable.showDis();
```
