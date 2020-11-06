---
title: 代码题
date: 2020-09-04 10:47:10
---

## 1、请写出下面如下代码的结果？

```js
function test(person) {
  //函数传参是传递对象指针的副本
  person.age = 26; //这一行代码修改的是传过来的person
  person = {
    //这一行是创建了一个新的对象的地址
    name: 'yyy',
    age: 30,
  };

  return person;
}
const p1 = {
  name: 'yck',
  age: 25,
};
const p2 = test(p1);
console.log(p1); // -> {name: "yck", age: 26}
console.log(p2); // -> {name: "yyy", age: 30}
```

## 2、请写出`[]==![]`的结果？

答案是`true`,为什么呢？

1. 因为`!`运算的优先级大于`==`,所以先执行`![]`,

`！`可将变量转换成`boolean`类型，`null`、`undefined`、`NaN`以及空字符串`('')`取反都为`true`，其余都为`false`

所以 `![]` 运算后的结果就是 `false`，也就是 `[] == ![]` 相当于 `[] == false`

2. 根据上面提到的规则（如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——`false`转换为`0`，而`true`转换为`1`），则需要把 `false` 转成 `0`，也就是 `[] == ![]` 相当于 `[] == false` 相当于 `[] == 0`

3. 根据上面提到的规则（如果一个操作数是对象，另一个操作数不是，则调用对象的`valueOf()`方法，用得到的基本类型值按照前面的规则进行比较，如果对象没有`valueOf()`方法，则调用 `toString()）`，也就是 `[] == 0` 相当于 `'' == 0`

4. 根据上面提到的规则（如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值）

`Number('')` -> 返回的是 0,相当于`0 == 0` 自然就返回 `true`了

**总结**

`[] == ![]` -> `[] == false` -> `[] == 0` -> `'' == 0` -> `0 == 0` -> true

那么对于 `{} == !{}` 也是同理的

关键在于 `{}.toString() -> NaN`(返回的是 NaN)

根据上面的规则（如果有一个操作数是 NaN，则相等操作符返回 false）

总结一下：

`{} == ! {}` -> `{} == false` -> `{} == 0` -> `NaN == 0` -> false

## 3、写出输出结果？

```js
var myObject = {
  foo: 'bar',
  func: function() {
    var self = this;
    console.log(this.foo); //bar
    console.log(self.foo)(
      //bar
      (function() {
        console.log(this.foo); //undefined
        console.log(self.foo); //bar
      })(),
    );
  },
};
myObject.func();
```

因为是`myObject.func()`所以`func`函数里面的`this`指向`myObject`,所以第一行`console.log(this.foo)`的 this 执行`myObject`，因为`self=this`，所以第二行的`console.log(self.foo)`里面的 self 指向的也是`myObject`，但是下面一行`console.log(this.foo)`是在一个闭包里面，所以这个`this`指向 window,`console.log(self.foo)`里面的`self`指向的是上面获取的`self`,所以指向的是`myObject`

## 4、写出下面代码结果？

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a.x); //undefined
```

根据 v8 引擎来解释，`a`是存储在`栈`里面,`{n:1}`是存储在`堆`里面，所以`b=a`导致`a`和`b`同时指向`{n:1}`