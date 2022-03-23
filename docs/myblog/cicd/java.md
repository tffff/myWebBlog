# java 环境安装

## yum 在线下载安装

```bash
# 查找java相关的列表
yum -y list java*
# 安装jdk
yum install java-1.8.0-openjdk.x86_64
# 安装完之后验证
java -version
# 通过yum安装的默认路径为：/usr/lib/jvm

# 将jdk的安装路径加入到JAVA_HOME
cat /etc/profile
# 编辑profile文件
vi /etc/profile
# 在profile文件里面加入下面的代码（路径根据自己设置的来）
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.322.b06-1.el7_9.x86_64/jre/bin/java
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

# 让profile文件生效
source /etc/profile

# 查看JAVA_HOME变量
echo $JAVA_HOME
```
