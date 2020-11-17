---
title: 编程题（手写系列）
date: 2020-09-04 10:47:10
---

## 1、代码题

请实现以下函数

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

## 4、手写一个 JSON.stringify 和 JSON.parse

## 5、手写一个 call、apply、bind

## 6、手写防抖(debouncing)和节流(throttling)

## 7、手写 js 深拷贝（由浅入深多种解法）

## 8、手写一个 instanceOf 原理

## 9、手写 map 和 reduce

## 10、手写实现拖拽

## 11、使用 setTimeout 实现 setInterval

## 12、手写实现 Object.create 的基本原理

## 13、手写 Promise

## 14、实现数组转树

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
