---
title: webGl初探
date: 2020-09-23 15:32:20
---

## 3D 图形学入门

- 3D 坐标系

  新增了一个坐标轴 z 轴表示深度

- 网格、多边形和顶点

  网格是有一个或者多个多边形组成的物体，各个顶点的坐标(x,y,z)定义了多边形在 3D 空间中的位置

- 材质、纹理和光源

  - 网格表面可以由一个或者多个位图来决定，这就是通常所说的纹理映射简称**纹理**
  - 大多数的图形系统中，网格表面的特性被统称为**材质**，材质通常依赖一个或者多个**光源**来呈现外观效果

- 变换与矩阵

  - 3D 网格的形状是由顶点位置确定
  - 变换包含对渲染模型的**缩放、旋转、位移**等操作
  - 变换通常是由矩阵来操作的

- 相机、透视、视口和投影

  - **相机**来定义用户和场景的相对朝向
  - 视野尺寸决定了**透视**关系
  - **视口**是由浏览器或 canvas 元素决定的
  - **投影**矩阵是将相机空间的 3D 坐标转换为视口中的 2D 绘制空间的坐标

- 着色器
  - 为了在最终的图像中渲染模型，精确定义顶点、变换、材质、光源和相机之间的关系和交互，这就用到了着色器
  - 着色器通常由高等级的类 c 语言编写，编译并运行在图形处理单元(GPU)中，当我们编写 webGL 程序的时候，必须定义着色器，否则图形不会显示在屏幕上

## webGl 是什么？

- 网页上绘制和渲染 3D 图形的技术
- 内嵌在浏览器
- 多平台运行
- "web 版的 openGl"

## 第一个 webGL 程序

1. 使用`attribute`、`unifrom`变量

- 使用`attribute`绘制一个点
- `attribute`变量传输的是与顶点相关的数据