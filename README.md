# “无微不至”的借阅助手-源代码项目

## 开发简介

> [项目线上地址 - 请关注该测试号并在微信客户端打开链接](https://wwwxinle.cn/Book/public/index.php/index/Index/auth)

![](./images/borrow-book-wechat-qrcode.jpg)

> [项目产品原型](https://wwwxinle.cn/borrow-book/prototype/)

> [借阅助手 - 线上接口文档](https://www.showdoc.cc/1633265?page_id=15011363)

### 前端开发简介

#### V1.0 初赛提交时的项目技能点

* Bower 做 JavaScript 的包依赖管理
* JQuery 封装 DOM 操作并进行跨域请求

#### V2.0 初赛作品提交后将尝试使用以下技术点重构项目

* NPM 做 Node.js 的包依赖管理(没用上)
* ESLint 做代码风格规范检测(未实现)
* Grunt 启动 Karma 统一项目管理(未实现)
* Istanbul 检查单元测试代码覆盖率(有问题)
* Jasmine 做单元测试(有问题)
* JSDoc 规范代码注释风格(未实现)
* Karma 自动化完成单元测试(有问题)
* Webpack 最终打包整个项目文件(未实现)
* Yeoman 最后封装成一个项目原型模板(未实现)

## 用户场景

* 首次登陆

> 场景.1: 用户被微信授权后跳转图书导航页。

> 场景.2: 管理员直接登录

* 借阅书籍

> 场景.1: 用户扫描至多两本书的二维码并生产借书码的来找管理员

> 场景.2: 管理员扫描用户借书二维码并进行借书确认

> 说明.1: 这就需要借书码内含有所借之书的信息、用户和借阅状态信息

* 还书提醒

> 场景.1: 公众号自动推送

* 还书

> 场景.1: 用户凭借自己的借书二维码和所借书籍找管理员

> 场景.2: 管理员在自己的“还书验收”页面扫码确认还书

## 真实系统演示视频及功能详解

> 链接：[中软杯初赛-真实系统演示视频及功能详解-CreatShare](https://v.qq.com/x/page/g05205t2545.html)

## 项目目录

> 说明：(.gi) 寓意为 (使用 .gitignore 忽略上传)

```
.
├── LICENSE # 开源许可证书
├── README.md # 项目说明文档
├── app # 移动端前端项目正式源码
│   ├── admin # 移动端管理 APP 源代码
│   └── user # 移动端用户借阅官网源代码
├── bower.json # Bower 前端库依赖关系
├── bower_components # Bower 前端依赖库(.gi)
│   └── 相关配置详见 [bower.json](./bower.json)
├── images # 公用图片库
├── intro # 项目总结报告(包含 ppt 与 word)
├── java_api # 服务端搜索引擎接口源码
├── karma.conf.js # Karma 自动化完成单元测试配置
├── node_modules # Node 安装模块(.gi)
│   └── 相关配置详见 [package.json](./package.json)
├── package.json # Node 配置
├── pc # 电脑端前端项目正式源代码
│   └── admin # 桌面端管理系统源代码
├── prototype # 原型图 HTML 版
├── unit-test # 前端单元测试
├── php_wechat # 微信端源代码
└── .gitignore # Git 版本管理忽略信息说明文件
```

## 前端页面及其命名约定

### user 用户移动端页面

```
app/user/book_detail.html # 书籍详情
app/user/books_navigation.html # 图书导航
app/user/borrow_cart.html # 借阅书车
app/user/call_us.html # 联系我们
app/user/categories_detail.html # 类别详情
app/user/change_information.html # 修改信息
app/user/first_register.html # 首次登陆
app/user/help_center.html
app/user/search_books.html # 书库搜书
app/user/user_borrow.html # 借阅历史
app/user/user_center.html # 个人中心
app/user/user_collection.html # 我的收藏
app/user/user_information.html # 个人信息
app/user/user_reserve.html # 我的预订
app/user/user_search.html # 搜索记录
```

### admin 管理员移动端页面

```
app/admin/admin_login # 登录界面
app/admin/admin_center.html # 操作界面
app/admin/call_us.html # 联系我们
```

### admin 管理员电脑端页面

```
admin_login.html # 登录界面
admin_center.html # 操作界面
```

## 使用指南

### 克隆项目至本地

> git clone http://42.123.127.93:10080/icorvoh/borrow-book.git

### 使用 bower 安装项目依赖的前端库

```
sudo npm install -g bower
bower install
```

### 使用 npm 构建环境(V1.0 初赛版本暂不需要此步骤)

```
sudo npm install
```

## 开发团队

* 韩亦乐 [@西安邮电大学 CreatShare 互联网实验室](https://creatshare.com/)
* 吴昊泽 [@西安邮电大学 CreatShare 互联网实验室](https://creatshare.com/)
* 张昕乐 [@西安邮电大学 CreatShare 互联网实验室](https://creatshare.com/)

![](./images/creatshare-logo-2017.png)

## 开源协议

本项目采用 [MIT](./LICENSE) 许可证进行许可。

