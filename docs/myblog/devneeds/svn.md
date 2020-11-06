---
title: svn安装和使用
date: 2020-07-29 15:10:11
---

## 首先在 CentOS 或者 MacOs 上下载 svn

```
yum install svn
```

[mac 安装教程](/devneeds/macinstall.html#安装svn命令行)

创建版本库可以参考[菜鸟教程](https://www.runoob.com/svn/svn-create-repo.html)

下面是 svn 命令汇总(如果有漏掉的，会不定期更新~~)

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

# 添加文件
# 例如 svn add /src/pages/Loading
svn add file

#删除文件
#例如 svn delete /src/pages/Loading
svn delete file

# 提交
svn commit -m '更新说明'

# 忽略文件不加入到版本控制
svn propedit svn:ignore 目录名称

svn branch 分支名(add/commit)。
svn merge 主干svn地址 分支svn地址。
Beyond Compare -> svn resolved。
svn copy 主干SVN地址 /tags/2017
```
