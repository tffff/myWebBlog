---
title: 集合
date: 2022-01-01 17:37:10
---

## 集合的概念和用途

- 集合是一种包含不同元素数据结构

- 当想要创建一个数据结构，用来保存一端独一无二的文字的时候集合就非常有用
- 集合的成员是无序的
- 集合不允许相同成员存在

## 集合关键概念

- 集合是一组无序但彼此之间又有一定相关性的成员构成的，集合中的元素称为成员

- 不包含任何成员的集合称为**空集**，**全集**则包含一切可能成员的集合
- 如果两个集合的成员完全相同，则称为两个集合**相等**
- 如果一个集合中的所有成员都属于另外一个集合，则前一个集合称为后一个集合的子集
- **并集**：将两个集合的成员进行合并，得到一个新的集合
- **交集**：两个集合共同存在的成员组成一个新的集合
- **补集**：属于一个集合不属于另外一个集合的成员组成的集合

## 代码实现

```js
function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.show = show;
  this.union = union;
  this.intersect = intersect;
  this.difference = difference;
  this.contains = contains;
  this.size = size;
  this.subset = subset;
}
//新增
function add(data) {
  if (this.dataStore.indexOf(data) === -1) {
    this.dataStore.push(data);
  } else {
    return false;
  }
}

//删除
function remove(data) {
  var index = this.dataStore.indexOf(data);
  if (index > -1) {
    this.dataStore.splice(index, 1);
  } else {
    return false;
  }
}

//显示
function show() {
  return this.dataStore;
}

//并集
function union(set) {
  var tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    tempSet.add(this.dataStore[i]);
  }
  for (let i = 0; i < set.dataStore.length; i++) {
    if (tempSet.contains(set.dataStore[i])) {
      tempSet.add(set.dataStore[i]);
    }
  }
  return tempSet;
}
function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}
//交集
function intersect(set) {
  var tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}
//补集
function difference(set) {
  var tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

//判断是不是子集
function size() {
  return this.dataStore.length;
}

function subset(set) {
  if (set.size() > this.size()) {
    return false;
  } else {
    for (let i = 0; i < set.dataStore.length; i++) {
      if (!this.contains(set.dataStore[i])) {
        return false;
      }
    }
    return true;
  }
}

var names = new Set();
names.add('小红');
names.add('小里');
names.add('小蓝');
names.add('小张');
names.add('小李');

var cis = new Set();
cis.add('小张');
cis.add('小李');
// console.log(cis)

// var newArr=new Set();
console.log('并集：', names.union(cis).show()); //"小红", "小里", "小蓝", "小张", "小李"]
console.log('交集：', names.intersect(cis).show()); //"小张", "小李"
console.log('bu集：', names.difference(cis).show()); //"小红", "小里", "小蓝"
console.log('cis是不是names的子集', names.subset(cis)); //true
```
