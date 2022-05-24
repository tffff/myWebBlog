---
title: 字典
date: 2022-01-01 14:37:10
---

## 字典的概念和用途

- 字典是一种键-值队形式存储的
- 字典就像我们的电话号码簿一样，要找一个电话时，名字找到了电话号码也就找到了
- `javascript`的`object`类就是以字典的形式设计的，我们要实现一个`Dictionary`类,这样会比 Object 方便比如显示字典中的所有元素，对属性进行排序等

## 代码实现

```js
/**
 * 字典
 */
function Dictonary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.count = count;
  this.clear = clear;
  this.remove = remove;
  this.showAll = showAll;
}
function add(key, value) {
  this.dataStore[key] = value;
}
function find(key) {
  return this.dataStore[key];
}
function remove(key) {
  delete this.dataStore[key];
}
function showAll() {
  var dataKeys = Object.keys(this.dataStore);
  for (var keys in dataKeys) {
    console.log(dataKeys[keys] + '----' + this.dataStore[dataKeys[keys]]);
  }
}

function count() {
  return Object.keys(this.dataStore).length;
}

function clear() {
  var dataKeys = Object.keys(this.dataStore);
  for (var keys in dataKeys) {
    delete this.dataKeys[dataKeys[keys]];
  }
}

var pbook = new Dictonary();
pbook.add('addadis', 200);
pbook.add('niki', 999);
pbook.add('NB', 645);
console.log(pbook.find('niki'));
console.log(pbook.showAll());
console.log('--------');
pbook.remove('niki');
console.log(pbook.showAll());
```
