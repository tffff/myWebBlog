---
title: React探索
date: 2020-08-07 15:35:20
---

## 虚拟 DOM

不是真实的 DOM,结果是一个 javascript 对象。

**优点：**

- 虚拟 DOM 主要有批处理和 diff 算法，
- 减少 DOM 操作，提高渲染效率

### DOM 操作

操作成本高，大量的计算导致不停的重绘和重排，导致性能变低

### 非 DOM 属性以及如何使用

- dangerousSetInnerHtml 可能会导致安全问题
- ref 通过 ref 监视 DOM 元素，不能在函数组件使用，只能在 class 组件使用，拿到子组件的属性
- key 提高渲染性能，帮助 diff 算法识别哪些元素改变了，不要使用 index 作为 key 值

## setState 会立马更新数据吗？

不会，因为 setState 是异步的，批量延迟更新，多个 setState 调用会合并执行一次，因为 setState 的执行顺序是放在一个队列里面的，在一定的时间内会统一处理

异步的主要是在：onClick,onChange,生命周期中不会同步更新

```js
//基于当前state计算，这样调用能保证拿到的state是最新的
//对象的调用方式不能保持最新，只能在setState的第二个参数里面执行函数
this.setState(state => {
  count: state.count++;
});
```

同步更新主要是在：原生 js 绑定事件，setTimeout

## 生命周期

**- 挂载阶段**

- construcror

  初始化操作 state this 绑定

- UNSAFE_componentWillMount

  组件即将被挂载，render 之前调用，只会调用一次，很少使用，setState 不会引起重新渲染，使用同步的 setState 不会触发额外的 render 处理，可能会产生副作用，订阅

- render

  唯一必要方法，返回一个 react 元素(state,props),不负责组件的实际渲染工作，只是返回一个 UI 的描述
  ::: warning 注意
  必须是一个纯函数，在这里不能改变 state、setState，不能执行任何有副作用的操作
  :::
  作用：

  - 计算 props/state 返回对应的结果
  - React.createElement jsx 转化为 vDOM 对象模型

- componentDidMount

  1. 组件挂载到 dom 后触发，只会调用一次，获取到真实的 dom,
  2. 可以在这个生命周期里面向服务端发送请求，
     - 可以报销获取到数据时，组件已经处于挂在状态，直接操作 dom,初始化第三方库
     - 只会调用一次，不会发送多余的数据
  3. setState 引起组建重新渲染

**- 更新阶段**

- componentWillReceiveProps(nextProps)

  只在 props 改变才会引起组件的更新,只要父组件的 render 函数被调用，无论父组件的传给子组件的 props 有没有改变，都会触发 shouldComponentUpdate

- shouldComponentUpdate

  通知组件是否更新，有权利阻止更新，尽量遵循默认行为，状态改变组件就会被重新渲染，要求必须有返回结果，true 就是渲染，false 就是不渲染，**减少组件不必要的渲染，提高性能**

- componentWillUpdate(nextProps,nextState)

  可以作为组件更新发生前的执行某些工作的地方,一般很少用，不能调用 setState

- conponentDidUpdate(preProps,preState)

  更新完成调用，有机会来操作 dom,判断是否发送网络请求，很容易造成死循环

**- 卸载阶段**

- componentWillUnmount

  取消网络请求，卸载定时器，移除事件监听等

**- 错误处理阶段(v16.8)**

- componentDidCatch(err,info)
