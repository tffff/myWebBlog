---
title: 递归
date: 2020-09-02 16:18:38
---

## 理解递归

递归是一种解决问题的方法，他从解决问题的各个小部分开始，直到解决最初的大问题，递归通常涉及到调用自身

## 为什么要用递归？

因为在某些场景下，使用递归更容易理解，而且代码量很少，但是递归不代表速度快

## 计算一个数的阶乘

例如 5!,就是 5*4*3*2*1

**代码实现**

```js
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log('递归阶乘', factorial(10));
```

## 斐波那契数列

```js
function fibonacci(n) {
  if (n < 1) return 0;
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log('斐波那契数', fibonacci(9));
```

## 尾递归

函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

上面阶乘的代码可以改成**尾递归**

```js
const newFact = n => {
  return fact(n, 1);
};
const fact = (n, product) => {
  if (n == 1) {
    return product;
  } else {
    return fact(n - 1, n * product);
  }
};
console.log('尾递归', newFact(10));
```

上面的斐波那契数列可以改成**记忆化递归法**：

在递归法的基础上，新建一个长度为 nn 的数组，用于在递归时存储 f(0)f(0) 至 f(n)f(n) 的数字值，重复遇到某数字则直接从数组取用，避免了重复的递归计算

```js
//记忆化递归法
var fib = function(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1000000007;
  }
  return fibonacci[n];
};
```

## 动态递归

以斐波那契数列性质 f(n + 1) = f(n) + f(n - 1)f(n+1)=f(n)+f(n−1) 为转移方程

![斐波那契数列](/datasrouce/斐波那契数列.png)

**动态规划解析：**

- 状态定义： 设 dpdp 为一维数组，其中 dp[i]dp[i] 的值代表 斐波那契数列第 ii 个数字 。
- 转移方程： dp[i + 1] = dp[i] + dp[i - 1]dp[i+1]=dp[i]+dp[i−1] ，即对应数列定义 f(n + 1) = f(n) + f(n - 1)f(n+1)=f(n)+f(n−1) ；
- 初始状态： dp[0] = 0dp[0]=0, dp[1] = 1dp[1]=1 ，即初始化前两个数字；
- 返回值： dp[n]dp[n] ，即斐波那契数列的第 nn 个数字。

```js
var fib = function(n) {
  let dp = [0, 1];
  function f(n) {
    if (dp[n] != undefined) {
      return dp[n];
    }
    dp[n] = f(n - 1) + f(n - 2);
    return dp[n] % 1000000007;
  }
  return f(n);
};
```
