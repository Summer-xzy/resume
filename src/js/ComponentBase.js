require('../less/ComponentBase.less');
var ComponentFactory = function (config) {
	var id = (Math.random() + '').replace('.', '_');
	var Component = $('<div id="' + id + '" class="ComponentBase"/>');

	config.name && Component.addClass(config.name);
	config.text && Component.text(config.text);
	config.width && Component.css('width', config.width / 2);
	config.height && Component.css('height', config.height / 2);
	if (config.center) {
		Component.css({
			marginLeft: -1 * (config.width / 4),
			left: '50%'
		});
	}
	if (config.onClick) {
		Component.on('click', config.onClick);
	}
	config.css && Component.css(config.css);


	Component.on('cpLeave', function () {
		var self = this;
		window.setTimeout(function () {
			$(self).addClass('cpLeave');
			$(self).removeClass('cpLoad');
			config.animateOut && $(self).animate(config.animateOut);
		}, config.delay || 0)
	});

	Component.on('cpLoad', function () {
		var self = this;
		window.setTimeout(function () {
			$(self).addClass('cpLoad');
			$(self).removeClass('cpLeave');
			config.animateIn && $(self).animate(config.animateIn);
		}, config.delay || 0)
	});
	return Component;
};

module.exports = ComponentFactory;