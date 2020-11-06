---
title: 传输文件到服务器
date: 2020-07-12 20:20:31
---

## scp 传输方式

```bash
#复制一个文件
scp 本地文件路径  root@IP:/路径

#复制多个文件
scp ./*.zip root@IP:/路径

#从服务器下载文件
scp root@IP:/路径  本地文件路径

#从一个服务器到另一个服务器
scp [[user@]host1:]file1  [[user@]host2:]file2

```

## ftp 传输方式

```bash
# 登录服务器
ftp user@xxx.com port
```

## sftp 传输方式

```bash
#sftp登录
[root@localhost]# sftp 用户名@IP

#将本地的文件上传到服务器
[root@localhost]# put [本地文件的地址] [服务器上文件存储的位置]
例如： [root@localhost]# put /root/java/sonarqube-8.4.0.35506.zip /opt

#将服务器的文件下载到本地
[root@localhost]# get [服务器上文件存储的位置] [本地要存储的位置]

#退出
[root@localhost]# exit或quit
```
