require('../less/PageComponentManage.less');
var ComponentBaseFactory = require('./ComponentBase.js');
var ComponentBarFactory = require('./ComponentBar.js');
var ComponentPolylineFactory = require('./ComponentPolyline.js');
var ComponentPieFactory = require('./ComponentPie.js');
var pageComponentManageObj = {
	init: function (name) {
		this.oContainer = $('<div class="' + name + '"/>');
		this.oContainer.hide();
		$('body').append(this.oContainer);

		this.oPageArray = [];
		return this;
	},
	addPage: function (name, text) {
		var oPage = $('<div class="page section"/>');
		name && oPage.addClass(name);
		text && oPage.text(text);
		this.oPageArray.push(oPage);
		this.oContainer.append(oPage);

		oPage.append(this.autoAddComponent());
		return this;
	},
	addComponent: function (config) {
		switch(config.type) {
			case 'base':
					var Component = ComponentBaseFactory(config);
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
		this.oPageArray[this.oPageArray.length - 1].append(Component);
		return this;
	},
	load: function () {
		this.oContainer.show();

		this.oContainer.fullpage({
			sectionsColor: ['red', 'green', 'blue', 'orange', 'deeppink', 'yellow'],
			onLeave: function (index, nextIndex, direction) {
				$('.container').find('.page').eq(index -1).trigger('pageLeave');
			},
			afterLoad: function (achorLink, index) {
				$('.container').find('.page').eq(index -1).trigger('pageLoad');
			}
		});

		$('.page').on('pageLeave', function () {
			$(this).find('.ComponentBase').trigger('cpLeave');
		});

		$('.page').on('pageLoad', function () {
			$(this).find('.ComponentBase').trigger('cpLoad');
		});

		$('.page').eq(0).find('.ComponentBase').trigger('cpLoad');
	},
	moveTo: function () {
		console.log('moveTo')
		this.oContainer.fullpage.moveTo(1);
	},
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