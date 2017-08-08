# 说明
在投递简历时使用了大同小异的简历模板，感觉很low,就想要自己写一个移动端的个人简历，同时也锻炼一下自己
使用 H5+Css3+jquery的fullpage插件，做了一个6页的简历

![Image text](https://github.com/Summer-xzy/resume/blob/master/img-show/1.png)
![Image text](https://github.com/Summer-xzy/resume/blob/master/img-show/2.png)
![Image text](https://github.com/Summer-xzy/resume/blob/master/img-show/3.png)
![Image text](https://github.com/Summer-xzy/resume/blob/master/img-show/4.png)
![Image text](https://github.com/Summer-xzy/resume/blob/master/img-show/5.png)
![Image text](https://github.com/Summer-xzy/resume/blob/master/img-show/6.png)

##安装
// 安装前请先确保已安装node和npm
//安装依赖
npm install
//运行
webpack-dev-server
//打开
localhost:8080


开发中遇到的一些问题：
1.当打开页面，第一页出现时候不会触发任何事件，所以要把第一页单独处理
2.子级给class标签后添加css3属性后不生效，是因为权重问题
3.canvas宽度的问题，canvas只认自己默认的宽度，如果是style中设置的宽度，会把canvas拉伸到原来的2倍，所以这个canvas组件的宽度应该要除以2，才是真正的组件宽度，然后再给文字定位
4.饼状图的制作是仿照刮刮乐原理，用遮罩层覆盖底层

联系方式：
E-mail：526162228@qq.com
