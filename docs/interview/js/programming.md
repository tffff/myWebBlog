---
title: 编程题（手写系列）
date: 2020-09-04 10:47:10
---

## 1、实现 lodash 的/.get()方法

```js
function sageGet(obj, target) {
  //原本是a[0].b.c[0]->a.0.b.c.0->[a,0,b,c,0]
  const paths = target.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = obj;
  for (let p of paths) {
    result = Object(result)[p];
    if (result === undefined) {
      return undefined;
    }
  }
  return result;
}
//得到如下功能：
let obj = {
  a: [
    {
      b: {
        c: ['c'],
      },
    },
  ],
};

sageGet(obj, 'a[0].b.c[0]'); //return "c"
safeGet(obj, 'a.b.c.c'); // return defined
```

## 2、请实现一个方法`function group(array,n)`,其中第一个参数是一个数组，第二个参数是一个整数，返回一个数组，该数组应该满足如下条件：

```js
var n = 2,
  arr = [1, 2, 3, 4, 5, 6];
var resultArr = group(arr, n);
//此时resultArr为[[1,2],[3,4],[5,6]],arr还是[1,2,3,4,5,6]
//n=3时，resultArr=[[1,2,3],[4,5,6]]
//n=4时，resultArr=[[1,2,3,4],[5,6]]
//n<0时，resultArr=[1,2,3,4,5,6]
//n>arr.length时，resultArr=[1,2,3,4,5,6]

//第一种 for循环实现  时间复杂度O(n)
function group(arr, n) {
  if (n < 0 || n > arr.length) return arr;
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}

console.log(group([1, 2, 3, 4, 5, 6], 4));

//第二种 while
function group1(arr, n) {
  let index = 0,
    result = [];
  while (index < arr.length) {
    result.push(arr.slice(index, (index += n)));
  }
  return result;
}
```

## 3、手写一个 new 操作符

首先看一下 new 操作符做了什么？

```js
function User() {
  this.name = 'xiaoming';
  this.age = 20;
}

const user = new User();
console.log(user); //{name:'xiaoming',age:20}
```

1. 首先创建一个空对象

```js
var obj = {};
//or
var obj = new Object();
```

2. 链接该对象到另一个对象上（将该对象的*proto*指向构造函数的的 prototype）

```js
obj._proto_ = User.prototype;
```

3. 把创建的`obj`作为`this`的上下文

4. 判断构造函数的返回值

综合代码验证：

```js
//手写new
function User(name, age) {
  this.name = name;
  this.age = age;
}
function myNew(o, ...args) {
  // 创建对象
  const obj = {};
  // 链接对象
  obj.__proto__ = o.prototype;
  // 绑定this
  let res = o.call(obj, ...args);
  return res instanceof Object ? res : obj;
}
const user = myNew(User, 'tf', 20);
console.log(user);
```

## 4、手写一个 JSON.stringify 和 JSON.parse

## 5、手写一个 call、apply、bind

## 6、手写 js 深拷贝（由浅入深多种解法）

## 7、手写一个 instanceOf 原理

## 8、手写 map 和 reduce

## 9、手写实现拖拽

## 10、使用 setTimeout 实现 setInterval

## 11、手写实现 Object.create 的基本原理

## 12、手写 Promise

## 13、实现数组转树

```js
let input = [
  { id: 1, val: '学校', parentId: null },
  { id: 2, val: '班级1', parentId: 1 },
  { id: 3, val: '班级2', parentId: 1 },
  { id: 4, val: '学生1', parentId: 2 },
  { id: 5, val: '学生2', parentId: 3 },
  { id: 6, val: '学生3', parentId: 3 },
];
function arrToTree(array) {
  let root = array[0];
  let tree = {
    id: root.id,
    val: root.val,
    children: array.length > 0 ? toTree(root.id, array) : [],
  };
  return tree;
}

function toTree(parentId, arr) {
  console.log(arr);
  let children = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].parentId === parentId) {
      children.push({
        id: arr[i].id,
        val: arr[i].val,
        children: toTree(arr[i].id, arr),
      });
    }
  }
  return children;
}

console.log(arrToTree(input));
//结果

let output = {
  id: 1,
  val: '学校',
  children: [
    {
      id: 2,
      val: '班级1',
      children: [
        {
          id: 4,
          val: '学生1',
          children: [],
        },
      ],
    },
  ],
};
```

## 14、装饰器：给一个函数添加装饰器，在不改变原函数的基础上添加逻辑

装饰器写法：

```js
function A() {
  console.log('A');
}

const myDecorator = (fn, execute, obj = window) => {
  let old = obj[fn];
  obj[fn] = function() {
    return execute(old.bind(obj));
  };
  console.log(obj[fn]);
};

myDecorator('A', fn => {
  fn();
  console.log('hello world');
});
A();
```

## 15、用 promise 实现请求并发个数限制？
