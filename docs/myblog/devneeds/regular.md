---
title: 正则表达式
date: 2020-11-19 16:14
---

# 正则表达式

### 匹配 16 进制颜色

```js
var reges = /#([0-9a-fA-f]{6}|[0-9a-fA-f]{3})/g;
```

### 匹配 qq 号

```js
var reges = /^[1-9][0-9]{4,10}$/g;
```

### 手机号码

```js
var reges = /^1[3-9]\d{9}/g;
```

### 用户名

```js
var reges = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}/g;
```

### 获取 URL 中 ？后的携带参数

```js
let params = {};
location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (params[k] = v));
console.log(params);
```
