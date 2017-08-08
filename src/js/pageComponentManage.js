//初始化组件
require('../less/PageComponentManage.less');
var ComponentBaseFactory = require('./ComponentBase.js');
var ComponentBarFactory = require('./ComponentBar.js');
var ComponentPolylineFactory = require('./ComponentPolyline.js');
var ComponentPieFactory = require('./ComponentPie.js');

var pageComponentManageObj = {
	//创建一个container容器
	init: function (name) {
		this.oContainer = $('<div class="' + name + '"/>');
		this.oContainer.hide();  //初始隐藏
		$('body').append(this.oContainer);
		this.oPageArray = [];   //pageComponentManageObj下的全局数组
		return this;  //用来实现链式调用
	},
	//添加页
	addPage: function (name, text) {
		var oPage = $('<div class="page section"/>'); //创建一个标签
		name && oPage.addClass(name);          //给标签添加个名字
		text && oPage.text(text);

		this.oPageArray.push(oPage);          //1 2 3 4 5 6  把每一页添加到数组中
		this.oContainer.append(oPage);        //把每页添加到容器中

		oPage.append(this.autoAddComponent());
		return this;
	},
	//根据类型选择组件  config是从index里addComponent里拿出的内容
	addComponent: function (config) {
		switch(config.type) {
			case 'base':
					var Component = ComponentBaseFactory(config);  //如果是base类型，就使用基础组件
				break;
			case 'bar':
					var Component = ComponentBarFactory(config);
				break;
			case 'polyline':
					var Component = ComponentPolylineFactory(config);
				break;
			case 'pie':
					var Component = ComponentPieFactory(config);
			default:
		}
		this.oPageArray[this.oPageArray.length - 1].append(Component);	//把组件添加到页面的最后
		return this;
	},
	//上下翻页时触发cpLeave，cpLoad事件
	load: function () {
		this.oContainer.show();   //容器显示

		this.oContainer.fullpage({  //容器调用fullpage插件
			onLeave: function (index, nextIndex, direction) {
				$('.container').find('.page').eq(index -1).trigger('pageLeave');  //离开时给每一页添加pageLeave事件
			},
			afterLoad: function (achorLink, index) {
				$('.container').find('.page').eq(index -1).trigger('pageLoad');   //进入时给每一页添加pageLeave事件
			}
		});

		$('.page').on('pageLeave', function () {
			$(this).find('.ComponentBase').trigger('cpLeave');  //页触发pageLeave事件，给每个组件添加cpLeave事件
		});

		$('.page').on('pageLoad', function () {
			$(this).find('.ComponentBase').trigger('cpLoad');
		});

		$('.page').eq(0).find('.ComponentBase').trigger('cpLoad');
	},
	moveTo: function () {
		this.oContainer.fullpage.moveTo(1);
	},
	//下标签网址  每页都有
	autoAddComponent: function () {
		return ComponentBaseFactory({
			type: 'base',
			name: 'bottom',
			width: '100%',
			height: 60,
			text: 'www.leoxzy.com',
			css: {
				opacity: 0,
				bottom: -20,
				left: 0,
				right: 0,
				zIndex: 999,
				color: '#fff',
				textAlign: 'center',
				lineHeight: '20px',
				backgroundImage: "url(./src/img/bottom.png)"
			},
			animateIn: {
				opacity: 1,
				bottom: 0
			},
			animateOut: {
				opacity: 0,
				bottom: -20
			}
		});
	}	
}

module.exports = pageComponentManageObj;