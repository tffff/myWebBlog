# vue3 api 记录

## 优点

- 速度更快
  - 虚拟 DOM 重写(virtual DOM Rewrite)
  - 优化插槽生成(OPtimized Slots Generation)
  - 静态树提升
  - 静态属性提升
  - 基于`Proxy`的观察者机制
- 体积更小
  新运行时压缩后大概 10kb
- 更容易维护
  - 从 `flow` 转向 `type`
  - 解耦，使内容更加模块化
  - 编译器重写
- 更容易面向原生
  - 运行时与平台无关
- 更容易开发使用

## vue3 环境搭建

```bash
# 电脑安装最新的vue版本
npm init vue@latest
```

## 使用工具

```js
<script setup lang="ts"> + VSCode + Volar
```
