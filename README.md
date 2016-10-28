# vue-blog
新手用vue2.0 写的demo 
现在将菜鸟的心得分享给大家   

vue功能（看了文档的一点总结，望大神能补充）

1.vue最突出的功能便是数据的双向绑定，让数据与DOM状态的同步变得非常容易。再也不需要写一堆函数来操作DOM了。
开发者在html模板中使用特殊的语法，vue框架会创建dom和数据的绑定。当数据修改时，dom会自动更新；同时操作dom会直接修改数据。

2.组件是vue的另一重要概念。我们可以把可以复用的模块抽象出来构建一些大型的应用。撸码者，都会考虑抽象、复用。

构建开发流程

1.首先安装node环境。

2.安装vue-cli，vue-cli可以命令行构建脚手架。很简单
npm install vue-cli -g

3.用vue-cli命令构建项目。
vue init <template-name><project-name>
目前可以使用的官方的模板包括webpack、webpack-simple、browserify、browserify-simple、simple。也可以使用自己的。
我使用的webpack
vue-cli init webpack vue-cnode

4.构建组件
Topics主键，Topics数据通过用http-proxy-middleware代理到cnode获取的。

5.app.vue中导入topics组件。

6.vue-router使用
在main.js中注册vue-router,底部导航菜单加上router-link。实现了单页路由。

待完善的功能

群聊天，个人中心，技术分享

> a vue blog

## Build Setup

``` bash
# 安装项目依赖包
npm install

# 启动本地开发服务
npm run dev

# 生产环境构建命令
npm run build

# 单元测试命令
npm run unit

# 全流程测试
npm test
```



