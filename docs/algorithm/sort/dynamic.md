---
title: 动态规划
date: 2020-09-21 16:19:10
---

## 动态规划概念

动态规划是与递归相反的一种技术。递归懂顶部开始分解出多个小问题，合并成一个解决方案，动态规划是从底部分解成很多小问题解决掉，组成解决方案

```js
//斐波那契数列 黄金分割数列0、1、1、2、3、5、8、13...
//实现原理 f(0)=0,f(1)=1,f(n)=f(n-1)+f(n-2) (n>2)
function recurFib(n) {
  if (n < 2) {
    return n;
  } else {
    return recurFib(n - 1) + recurFib(n - 2);
  }
}

//动态规划  用数组存的方法 时间复杂度O(n)
function dynFib(n) {
  let value = [];
  value[0] = 0;
  value[1] = 1;
  for (let i = 2; i <= n; i++) {
    value[i] = value[i - 1] + value[i - 2];
  }
  return value[n];
}
console.log('动态规划', dynFib(10));

//动态规划 不用数组 用常量
function iterFib(n) {
  if (n > 0) {
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for (let i = 2; i < n; i++) {
      result = last + nextLast;
      nextLast = last;
      last = result;
    }
    return result;
  } else {
    return 0;
  }
}
console.log('动态规划非数组', iterFib(10));
```
