# 说明

------

学习的时候，尽量的打开官方的文档

Vue Router是Vue.js官方的路由管理器。它和Vue.js的核心深度集成， 让构建单页面应用变得易如反掌。包含的功能有：

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于Vue js过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的CSS class的链接
- HTML5 历史模式或hash模式， 在IE 9中自动降级
- 自定义的滚动行为

# 安装

**基于第一个vue-cli进行测试学习； 先查看node modules中是否存在vue-router**
vue-router是一个插件包， 所以我们还是需要用n pm/cn pm来进行安装的。打开命令行工具，进入你的项目目录，输入下面命令。

```shell
npm install vue-router --save-dev
```

如果在一个模块化工程中使用它，必须要通过Vue.use()明确地安装路由功能：

```shell
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
```

# 测试

1、先删除没有用的东西
2、`components` 目录下存放我们自己编写的组件
3、定义一个`Content.vue` 的组件

```html
<template>
	<div>
		<h1>内容页</h1>
	</div>
</template>

<script>
	export default {
		name:"Content"
	}
</script>
```

`Main.vue`组件

```html
<template>
	<div>
		<h1>首页</h1>
	</div>
</template>

<script>
	export default {
		name:"Main"
	}
</script>
```

4、安装路由，在src目录下，新建一个文件夹：`router`，专门存放路由，配置路由index.js，如下

```js
import Vue from'vue'
//导入路由插件
import Router from 'vue-router'
//导入上面定义的组件
import Content from '../components/Content'
import Main from '../components/Main'
//安装路由
Vue.use(Router) ;
//配置路由
export default new Router({
	routes:[
		{
			//路由路径
			path:'/content',
			//路由名称
			name:'content',
			//跳转到组件
			component:Content
			},
        {
			//路由路径
			path:'/main',
			//路由名称
			name:'main',
			//跳转到组件
			component:Mian
		}
	]
});
```

5、在`main.js`中配置路由

```js
import Vue from 'vue'
import App from './App'

//导入上面创建的路由配置目录
import router from './router'//自动扫描里面的路由配置

//来关闭生产模式下给出的提示
Vue.config.productionTip = false;

new Vue({
	el:"#app",
	//配置路由
	router,
	components:{App},
	template:'<App/>'
});
```

6、在`App.vue`中使用路由

```html
<template>
	<div id="app">
		<!--
			router-link：默认会被渲染成一个<a>标签，to属性为指定链接
			router-view：用于渲染路由匹配到的组件
		-->
		<router-link to="/">首页</router-link>
		<router-link to="/content">内容</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'App'
	}
</script>

<style></style>
```