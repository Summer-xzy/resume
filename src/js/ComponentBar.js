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
		var rate = $('<div class="rate" />');
		var loadBlock = $('<div class="loadBlock">');
		loadBlock.appendTo(rate).css('background', item[2]);
		var per = $('<div class="per">');
		name.text(item[0]);
		rate.css('width', item[1] *200);
		per.text(item[1] * 100 + '%');
		row
			.append(name)
			.append(rate)
			.append(per)
			.appendTo(Component);
	});
	return Component;
}
module.exports = ComponentBarFactory;