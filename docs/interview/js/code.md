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

## 3、代码判断题?

```js
//1、多了括号，所以是表达式
console.log({}+[]) //[object Object]

//2、前面是代码块 所以直接执行+[]
{}+[]   // 0

//3、因为[]会被强制转换为"", 然后+运算符 链接一个{ }, { }强制转换为字符串就是"[object Object]"
[]+{}   //[object Object]

//4、不同浏览器不同，默认按谷歌,同等类型求值
{}+{}  //[object Object][object Object]

//5、[]=='0' -> 0=='0' -> 0==false
console.log([]==false) //true

//6、没有可比性 {}肯定是有值的
console.log({}==false) //false

//7、数组是真实存在的，所以进入if
if([]){
  console.log([]==false) //true
}

//8、+'a'强制转number
('b'+'a'+ +'a'+'a').toLocaleLowerCase() //banana

//9、直接拿原始值比
0=='0' //true

//10、Boolean('0')是有真实的字符串，所以是true
Boolean(0)==Boolean('0')  //false

//11、NaN与任何值都不相等
NaN==0   //false
NaN<=0  //false

//12、Number(0,10)==0  null 尝试转为number
null<=0 //true

```

## 4、写出输出结果？

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

## 5、写出下面代码结果？

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a); //{n:2}
console.log(b); //{n:1,x:{n:2}}
```

根据 v8 引擎来解释，`a`是存储在`栈`里面,`{n:1}`是存储在`堆`里面，所以`b=a`导致`a`和`b`同时指向`{n:1}`,因为点的运算优先等于的运算，所以`a.x`先执行即现在 a 和 b 都是`{n:1,x:undefined}`,又因为等于运算是从右到左执行的，所以`a={n:2}`

再执行`a.x=a`,这里要注意，因为`a.x`之前已经先执行了,所以`a.x`已经是`{n:1,x:undefined}`这个地址了，但是里面的 x 指向了新的地址,所以最终`a.x`可以看成是`{n:1,x:undefined}.x={n:2}`

## 6、写出下面代码的执行结果，并说明为什么？

```js
function out() {
  console.log(1);
}
(function() {
  if (false) {
    function out() {
      console.log(2);
    }
  }
  console.log(typeof out); //undefined
  out(); //out is not a function
})();
```

直接在函数体内定义的函数声明，整个都会提前，但是在块中定义的函数声明，只会提升其声明部分，不分配实际的内存空间,所以`out`被提升的只有函数变量名称，并未实际赋值

- 变量提升
  - 全局作用域中的声明的变量会提升到至全局最顶层
  - 函数内声明的变量只会提升到函数作用域顶层
- 函数提升

  - 函数表达式不会声明提升
  - 函数声明会覆盖变量声明，如果存在函数名和变量名是相同的，都会被提升，但是函数的优先级更高，所以变量的值会被覆盖掉

  ```js
  //赋值的情况
  var company = '123';
  function company() {
    console.log('456');
  }
  console.log(typeof company); //string

  //未赋值的情况
  var company;
  function company() {
    console.log('456');
  }
  console.log(typeof company); //function
  ```

## 7、请写出下面代码的结果？

```js
function fn() {
  console.log(this.length);
}
var yideng = {
  length: 5,
  method: function() {
    'use strict';
    fn();
    arguments[0]();
  },
};
const result = yideng.method.bind(null);
result(fn, 1);
```

结果是`0 2`,`fn()`执行的时候不依赖任何对象，所以`fn()`中的`this`指向的是`window`,`arguments[0]()`函数执行里面的`this`指向的`argument`对象,所以`arguments[0]()`的结果是 2

## 8、请写出下面代码的结果？

```js
function bar() {
  console.log(myName);
}
function foo() {
  var myName = '内部变量';
  bar();
}
var myName = '外部变量';
foo(); //外部变量
```

为什么不是`内部变量`呢？，因为函数在定义的时候里面的变量已经存在了

## 9、请问变量 a 会被 GC 回收吗，为什么？

```js
function test() {
  var a = 'yideng';
  return function() {
    eval('');
  };
}
test()();
```

变量 a 不会被回收，因为里面有`eval()`，`eval()`函数可计算某个字符串，并执行其中的的 `JavaScript` 代码，所以 js 引擎不知道`eval`里面会执行什么程序会不会用到这个变量 a，所以变量`a`不会被回收

## 10、原型和原型链代码面试题，输出下面代码的值？

```js
Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function Person(){};
var yideng = new Person();

console.log(Person.a);
console.log(yideng.a);
console.log(1..a)
console.log(1.a)
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor)
```

## 11、写出下面代码的结果（关于运行机制）?

```js
async function async1() {
  console.log(1);
  await async2();
  console.log(3);
}
async function async2() {
  console.log(2);
}
async1();
console.log(4);
```

最终结果是`1243`，`async1`先执行所以是`12`,因为里面有`await`,`await`相当于`Promise.then()`属于微任务，所以 3 先不执行，然后继续，执行宏任务`4`,在执行微任务`3`,所以最终就是`1243`
