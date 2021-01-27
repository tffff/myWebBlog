---
title: Svn和Git安装和使用
date: 2020-07-29 15:10:11
---

## svn 命令行

### 首先在 CentOS 或者 MacOs 上下载 svn

```bash
yum install svn
```

[mac 安装教程](/devneeds/macinstall.html#安装svn命令行)

创建版本库可以参考[菜鸟教程](https://www.runoob.com/svn/svn-create-repo.html)

### svn 命令汇总(如果有漏掉的，会不定期更新~~)

```bash
# 同时装了客户端和服务器端
# 创建版本库
svnadmin create /opt/svn/runoob

#新创建项目
svn mkdir 线上svn地址 -m “mkdir”
#或者本地操作
svn mkdir file:///data/repos/ -m “mkdir”


# 下载项目
svn checkout svn地址 --username=用户名 --password=密码

#查看文件或者目录状态
svn status

# 添加单个文件
# 例如 svn add /src/pages/Loading
svn add file

# 添加多个文件
svn add *

#删除文件
#例如 svn delete /src/pages/Loading
svn delete file

# 提交
svn commit -m '更新说明'

# 忽略文件不加入到版本控制
# 例如 svn propedit svn:ignore node_modules
svn propedit svn:ignore 目录名称

svn branch 分支名(add/commit)。
svn merge 主干svn地址 分支svn地址。
Beyond Compare -> svn resolved。
svn copy 主干SVN地址 /tags/2017
```

## git 命令行

mac 电脑默认安装 git，windows 需要下载对应的插件安装

### 从 github 下载项目

```bash
git clone git地址
```

### git 提交到服务器

```bash
// 查看项目文件状态
git status

//
git add .

//添加更新说明
git commit -m 'first'

//上面两步合成一步
git commit -a -m 'first'

//提交忽略eslint检测
git commit --no-verify -m "commit"

//添加到某个分支 或者主干
git push origin master

//git 更新版本
git pull origin master
```
