---
title: 搜索算法
date: 2020-09-02 16:18:38
---

## 顺序搜索

### 原理

顺序搜索是最基本的搜索算法，他的机制是将数据结构中的每一个元素和我们要找的元素作比较，顺序搜索是最低效的一种搜索算法
**时间复杂度为 O(n)**

### 代码实现

```js
function sequentialSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }
  return -1;
}
console.log('顺序搜索', sequentialSearch([1, 3, 6, 2, 8, 9], 0));
```

## 二分查找

这个算法的原理和猜数字的游戏原理很相似，选中一个数字，别人说是高了还是低了，高了就往小区域走，低了就往大区域走

这个算法要求查找的数组**已经排好序,时间复杂度是 O(log(n))**

### 递归法

```js
function binarySearch2(arr, value, start, end) {
  let left = start || 0,
    right = end || arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  if (value === arr[mid]) {
    return mid;
  } else if (value > arr[mid]) {
    return binarySearch2(arr, value, mid + 1, right);
  } else if (value < arr[mid]) {
    return binarySearch2(arr, value, 0, mid - 1);
  }
}
console.log('二分递归：', binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));
```

### 非递归法

使用双指针

```js
function binarySearch(arr, value) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor(right + 1 / 2);
    if (arr[mid] > value) {
      right = mid - 1;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return false;
}
console.log('二分非递归：', binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));
```

## 内插搜索

### 原理

将二分查找的点改进为 mid=low+(key-a[low])/(a[high]-a[low])\*(high-low)

基本思想：基于二分查找算法，将查找点的选择改进为自适应选择，可以提高查找效率。当然，差值查找也属于有序查找。

注：对于表长较大，而关键字分布又比较均匀的查找表来说，插值查找算法的平均性能比折半查找要好的多。反之，数组中如果分布非常不均匀，那么插值查找未必是很合适的选择。

复杂度分析：查找成功或者失败的时间复杂度均为 O(log2(log2n))。

### 代码实现

```js
function InsertionSearch(arr, val, start, end) {
  var end = end || data.length - 1;
  var start = start || 0;

  var mid =
    start + ((val - arr[low]) / (arr[end] - arr[start])) * (end - start);
  if (arr[mid] == val) {
    return mid;
  }

  if (arr[mid] > val) {
    return InsertionSearch(arr, val, start, mid - 1);
  } else {
    return InsertionSearch(arr, val, mid + 1, end);
  }
}
```
