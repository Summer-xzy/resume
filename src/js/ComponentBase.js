//组件管理
//基础组件
require('../less/ComponentBase.less');

var ComponentFactory = function (config) {
	var id = (Math.random() + '').replace('.', '_');//每个组件都有一个ID
	var Component = $('<div id="' + id + '" class="ComponentBase"/>');//生成组件

//给组件添加类名、文字、css样式和事件
	config.name && Component.addClass(config.name);    //如果config有name这个属性，就给组件添加一个类名config.name
	config.text && Component.text(config.text);
	config.width && Component.css('width', config.width / 2);
	config.height && Component.css('height', config.height / 2);
	if (config.center) {  //如果有水平居中这个属性
		Component.css({
			marginLeft: -1 * (config.width / 4),//水平居中
			left: '50%'
		});
	}
	if (config.onClick) {
		Component.on('click', config.onClick);
	}
	config.css && Component.css(config.css);   //如果有css，就给组件一个css

//生成组件时就有cpleave和cpLoad事件
	Component.on('cpLeave', function () {
		var self = this; //离开时当前页的所有组件
		window.setTimeout(function () {
			$(self).addClass('cpLeave');
			$(self).removeClass('cpLoad');
			config.animateOut && $(self).animate(config.animateOut);
		}, config.delay || 0)
	});

	Component.on('cpLoad', function () {
		var self = this;
		window.setTimeout(function () { //延迟出现 
			$(self).addClass('cpLoad');
			$(self).removeClass('cpLeave');
			//判断有没有入场效果
			config.animateIn && $(self).animate(config.animateIn);
		}, config.delay || 0)
	});
	return Component;
};

module.exports = ComponentFactory;