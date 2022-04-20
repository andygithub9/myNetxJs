# EC2 设置开发环境

## 操作步骤 @ Amazon Linux 2

```bash
#################################################
# 系统更新
$ sudo yum update -y
#################################################
# Git
$ sudo yum install git -y
$ git version
# 可选安装 nmap
$ sudo yum install -y nmap
#################################################
# Node.js
$ curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
$ sudo yum install -y gcc-c++ make
$ sudo yum install -y nodejs
$ node -v
#################################################
# Docker
# 使用 amazon-linux 扩展包安装 docker
$ sudo amazon-linux-extras list
$ sudo amazon-linux-extras install -y docker
# 修改 docker 附加组给 ec2-user
$ sudo usermod -a -G docker ec2-user
$ docker version
# 启动 docker 服务
$ sudo systemctl start docker
# 确认 docker 运行
$ ps aux|grep docker
# 注册 docker 服务
$ sudo systemctl enable docker
# 安装 docker-compose
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/bin/docker-compose
$ sudo chmod +x /usr/bin/docker-compose
$ docker-compose version
# 测试 docker 
# $ exit # 退出再login
$ docker run -it --rm busybox
> / # ls
> bin   dev   etc   home  proc  root  sys   tmp   usr   var
> / # exit
```

# Docker 部署 Next.js Web 应用

### 编写 Dockerfile

```Dockerfile
FROM node:14-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
```

### 编写 docker-compose.yml

```yml
version: '3' 

services:
  nextweb:
    build: .
    container_name: nextweb
    hostname: nextweb
    ports:
      - 3000:3000
    environment:
      - NODE_ENV=production
      - TZ=Asia/Tokyo
      - PORT=3000
    image: nextweb
    restart: always
```

### 打包应用

```bash
# 打包编译 Next.js 应用
$ npm run build
# 编译服务
$ sudo docker-compose build
# 容器启动(精灵线程)
$ sudo docker-compose up -d
#########################################################
# 容器代码更新，重新编译容器后再启动
$ sudo docker-compose stop
$ sudo docker-compose up -d --build
#########################################################
# 查询容器状态
$ sudo docker-compose ps
$ nmap 127.0.0.1
# 查看网络状态
$ docker network inspect docker.internal
# 执行容器内的命令
$ docker exec -it nextweb sh
# 查看容器输出日志
$ docker-compose logs -f
$ docker logs -f nextweb
# 容器停止
$ sudo docker-compose stop
# 容器停止+消除(容器+网络)
$ sudo docker-compose down
# 容器停止+消除(容器+网络+镜像)
$ sudo docker-compose down --rmi all
```

### 动作确认

http://EC2的公有IP:3000/

## `記得 EC2 的 Security groups 的 Inbound rules 要開 3000 PORT`