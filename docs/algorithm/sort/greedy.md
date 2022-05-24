---
title: 贪心算法
date: 2022-01-21 16:19:10
---

## 贪心算法概念

是一种寻找**最优解**为手段达成整体解决方案的算法，这些优质的解决方案称为**局部最优解**，将有希望得到正确答案的最终解决方案称为**全局最优解**，**贪心**会用那些进户无法找到完整解决方案的问题，次优解也是可以接受的

```js
//贪心算法找零问题：50块、10块、5块、1块
function mackChange(orginRmb, coins) {
  var remainRmb = 0;
  if (orginRmb % 50 < orginRmb) {
    coins[3] = parseInt(orginRmb % 50, 10);
    remainRmb = orginRmb % 50;
    orginRmb = remainRmb;
  }
  if (orginRmb % 10 < orginRmb) {
    coins[2] = parseInt(orginRmb % 10, 10);
    remainRmb = orginRmb % 10;
    orginRmb = remainRmb;
  }
  if (orginRmb % 5 < orginRmb) {
    coins[1] = parseInt(orginRmb % 5, 10);
    remainRmb = orginRmb % 5;
    orginRmb = remainRmb;
  }
  coins[0] = orginRmb % 1;
  return coins;
}
console.log(mackChange(63, []));
```
