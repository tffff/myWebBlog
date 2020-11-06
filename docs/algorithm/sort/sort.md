---
title: 排序的集中算法汇总
date: 2020-07-25 16:18:38
---

## 冒泡排序

他是最慢的排序算法之一，数据值会像气泡一样从数组的一端漂浮到另一端

### 原理

比较相邻的元素，如果第一个比第二个大就交换他们两个，元素向上移动至正确的顺序，就好像气泡升到表面一样，**时间复杂度 O(n^2)**

### 代码实现

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 3, 6, 2, 8, 9]));
```

## 选择排序

### 原理

从数组的开头开始，将第一个元素和其他元素比较，最小的元素会被放到数组的第一个位置，再从第二个位置继续,**时间复杂度 O(n^2)**

### 代码实现

```js
function selectSort(arr) {
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log('选择', selectSort([1, 3, 6, 2, 8, 9]));
```

## 插入排序

### 原理

类似于人们按数字或字母顺序对数据进行排序后面的要为前面腾位置

### 代码实现

```js
function insertSort(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    let j = i;
    console.log(j);
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
console.log('插入', insertSort([1, 3, 6, 2, 8, 9]));
```

## 快速排序

### 原理

在列表中选择一个元素作为基准值，排序围绕这个基准值进行，将列表中小于基准值发放入数组底部，大于放顶部，**时间复杂度是 O(nlog(n))**

### 代码实现

```js
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let privotIndex = Math.floor(arr.length / 2);
  let privot = arr.splice(privotIndex, 1)[0];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([privot], quickSort(right));
}
console.log('快排', quickSort([1, 3, 6, 2, 8, 9]));
```

## 归并排序

### 原理

把一系列排好序的子序列合并成一个大的完整有序序列，主要是分治思想，**时间复杂度是 O(nlog(n))**

![分治思想](/datasrouce/归并排序.png)

### 代码实现

```js
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
console.log('归并', mergeSort([1, 3, 6, 2, 8, 9]));
```

<!-- ## 堆排序


## 桶排序

## 基数排序 -->
