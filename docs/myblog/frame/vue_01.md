---
title: vue2源码解析1
date: 2022-01-11 10:32:20
---

看源码先看测试用例，反推功能是怎么实现的。

## 整体架构

```
vue-dev
│ -- benchmarks
│ -- dist        打包出来的东西
│ -- examples    测试的例子
│ -- flow        语法的规范
│ -- packages    周边打包的东西
│ -- scripts     编译出来的东西
│ -- src
│  │-- compiler
│  └───
│ -- test        测试用例
└─── types       TS规则校验
```

.vue 结尾的文件通过打包编译，里面进行了词法分析、语法分析、构建 AST、转移 js

## 双向数据绑定的原理

## vue 的整体流程

## vue 运行时的优化
