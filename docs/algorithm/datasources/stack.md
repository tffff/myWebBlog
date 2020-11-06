---
title: 栈
date: 2020-09-01 11:37:10
---

## 栈的概念和用途

- 栈是一种特殊的列表
- 栈是一种高效的数据结构，因为数据只能在栈顶删除或增加，操作很快
- 栈的使用遍布程序语言实现方方面面，从表达值到处理函数调用
- 解决括号匹配检查、回文
- 浏览器的后退或编辑器的 undo 功能

## 栈的关键概念

- 栈内元素只能通过列表的一端访问，这一端称为栈顶(反之栈底)
- 栈被称为一种**后入先出**的数据结构
- 插入新元素又称做进栈、入栈和压栈，删除栈元素叫出栈或退栈

比如一个洗盘子和拿盘子的操作就是一个入栈和出栈的例子(LIFO)

## 栈的代码实现

```js
function Stack() {
  this.dataStore = []; //保存栈内元素
  this.top = 0; //标记可以插入新元素的位置，入栈该元素变大，出栈该元素变小
  this.push = push; //入栈操作
  this.pop = pop; //出栈操作
  this.peek = peek; //返回栈顶元素
  this.clear = clear; //清空栈
  this.length = length; //栈的长度
}

//向栈中加元素，同时让指针top+1 一定注意
function push(element) {
  this.dataStore[this.top++] = element;
  console.log(this.dataStore);
}

//出栈操作 指针top-1
function pop() {
  return this.dataStore[--this.top];
}

//返回栈顶元素  top值减1返回不删除
function peek() {
  return this.dataStore[this.top - 1];
}
//返回栈内元素的元素个数
function length() {
  return this.top;
}

//清空栈
function clear() {
  this.top = 0;
}

var stack = new Stack();
stack.push('小红');
stack.push('小红1');
stack.push('小红2');
stack.push('小红3');
console.log('栈的长度', stack.length());
console.log('栈顶', stack.peek());
```

## 栈的使用

1. 回文字符串

```js
function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  var rword = '';
  console.log(s);
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (rword === word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('racecar')); //true
```
