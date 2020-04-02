# summary
用uniapp开发过程中使用的组件 方法的总结
# 公共组件

# 项目目录结构

> 每个页面一个文件夹  页面与页面之间不能存在依赖关系  要做到拿到既能用
  每个页面组件应有对应的 README.md 文件 该文件标明组件的功能 使用注意事项等组件作者需要让使用者知晓的信息


```
.
├── common                                    公共方法
    ├── styles                                           公共样式
    └── api                                              公共请求

├── components                                公共零件组件
├── src                                       页面
    ├── components                                       公共页面模块组件
    └── dev                                              开发预览

├── static                                    公共静态资源
├── .editconfig                               编辑器设置
├── .gitignore                                git忽略文件
└── pages.json                                页面配置
```

# index页面

![image](https://github.com/menglin1997/summary/blob/master/static/index.gif)

# css多行溢出显示...

````css
	overflow: hidden;
	display: -webkit-box;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2; /* 2 表示两行出现。。。 ，这个是行数*/
	-webkit-box-orient: vertical;

````

# scroll-view 注意事项

> 1.横向滑动时scroll-view标签要设置下边的CSS样式

````css
white-space: nowrap;
````

> 2.里面的元素要为行内块

````css
display: inline-block;
````

