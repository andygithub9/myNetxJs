## 使用 useSWR Hook 客户端数据取得

```bash
npm i swr
```

## Deployment 部署 - Node.js 服务器部署方式

---

### 安装 Node.js 服务器 @EC2

```bash
#################################################
# Git
$ sudo yum install git -y
$ git version

#################################################
# Node.js
$ curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -
$ sudo yum install -y gcc-c++ make
$ sudo yum install -y nodejs
$ node -v
```

### 编译运行 WEB 工程

```bash
$ cd nextweb
$ npm install
$ npm run build
$ npm start
```

> http://public-ip:3000/
