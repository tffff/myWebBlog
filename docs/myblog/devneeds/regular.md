# js 常用正则表达式汇总

```js
// 匹配 16 进制颜色
var reges = /#([0-9a-fA-f]{6}|[0-9a-fA-f]{3})/g;

//匹配 qq 号
var reges = /^[1-9][0-9]{4,10}$/g;

//手机号码
var reges = /^1[3-9]\d{9}/g;

//用户名
var reges = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}/g;

//获取 URL 中 ？后的携带参数
let params = {};
location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (params[k] = v));
console.log(params);
```
