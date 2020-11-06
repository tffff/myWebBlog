---
title: git命令汇总
date: 2020-07-15 8:50:34
---

## 从 github 下载项目

```bash
git clone git地址
```

## git 提交到服务器

```js
// 查看项目文件状态
git status

//
git add .

//添加更新说明
git commit -m 'first'

//上面两步合成一步
git commit -a -m 'first'

//添加到某个分支 或者主干
git push origin master

//git 更新版本
git pull origin master
```
