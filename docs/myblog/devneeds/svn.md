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

### 1、初始化本地 git 存储库

```bash
git init
```

### 2、创建远程存储库的本地副本

```bash
git clone [git服务地址]
```

### 3、检查状态

```bash
git status
```

### 4、将文件添加到暂存区

```bash
git add [file-name.txt]
```

### 5、将所有新文件和更改过的文件添加到登台区域

```bash
git add -A
```

### 6、提交更改

```bash
git commit -m "[commit message]"
```

### 7、删除文件

```bash
git rm -r [file-name.txt]
```

### 8、列出分支

```bash
git branch
```

### 9、创建一个新分支

```bash
git branch [branch name]
```

### 10、删除分支

```bash
git branch -d [branch name]
```

### 11、创建一个新分支并切换到该分支

```bash
git checkout -b [branch name]
```

### 12、克隆一个远程分支并切换到该分支

```bash
git checkout -b [branch name] origin/[branch name]
```

### 13、重命名本地分支

```bash
git branch -m [old branch name] [new branch name]
```

### 14、切换到分支

```bash
git checkout [branch name]
```

### 15、将一个分支合并到活动分支中

```bash
git merge [branch name]
```

### 16、将一个分支合并到一个目标分支

```bash
git merge [source branch] [target branch]
```

### 17、将更改存储在不合适的工作目录中

```bash
git stash
```

### 18、删除所有隐藏的条目

```bash
git stash clear
```

### 19、将分支推送到你的远程存储库

```bash
git push origin [branch name]
```

### 20、将更改推送到远程存储库

```bash
git push
```

### 21、将本地存储库更新为最新的提交

```bash
git pull
```

### 22、从远程存储库中提取更改

```bash
git pull origin [branch name]
```

### 23、添加一个远程存储库

```bash
git remote add origin ssh://git@github.com/[username]/[repository-name].git
```

### 24、查看更改

```bash
git log
```

### 24、合并前预览更改

```bash
git diff [source branch] [target branch]
```

<!-- ```bash
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

//创建分支
//git chechout -b aaa
``` -->

## nrm 切换源

1. 下载 nrm `npm install -g nrm`
2. 添加源 `nrm add 名字 私有npm地址`
3. 使用某个源地址 `nrm use 名字`
4. 查看 nrm 地址列表 `nrm ls`
5. 删除源地址 `nrm del 名字`
