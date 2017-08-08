//柱状图
require('../less/ComponentBar.less');
var ComponentBaseFactory = require('./ComponentBase.js');

var ComponentBarFactory = function (config) {
	var Component = ComponentBaseFactory(config);
	Component.addClass('ComponentBar');
	var data = config.data;

	// [[], [], []]
	data.map(function (item, index) {
		var row = $('<div class="row"/>');
		var name = $('<div class="name" />');
		var rate = $('<div class="rate" />');        //进度条两层，父层，100%
		var loadBlock = $('<div class="loadBlock">');//进度条两层，子层，100%
		loadBlock.appendTo(rate).css('background', item[2]);
		var per = $('<div class="per">');
		name.text(item[0]);
		rate.css('width', item[1] *200);  //给父级进度条一个固定宽度
		per.text(item[1] * 100 + '%');    //百分比
		row
			.append(name)
			.append(rate)
			.append(per)
			.appendTo(Component);
	});
	return Component;
}
module.exports = ComponentBarFactory;