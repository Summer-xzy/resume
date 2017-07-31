require('./jqUI.js');
require('./jqFp.js');
var pageComponentManageObj = require('./pageComponentManage.js');
pageComponentManageObj
					.init('container')
					.addPage('firstPage index')
						.addComponent({
							type: 'base',
							name: 'logo',
							center: true,
							width: 428,
							height: 50,
							text:"My curriculum vitae",
							css: {
								opacity: 0,
								top: -20,
								textAlign: 'center',
								fontSize:20,
							},
							animateIn: {
								opacity: 1,
								top: 80,
							},
							animateOut: {
								opacity: 0,
								top: -20
							}
						})
						.addComponent({
							type: 'base',
							name: 'head',
							center: true,
							width: 369,
							height: 350,
							css: {
								opacity: 0,
								top: 130,
								left: 0,
								backgroundImage: "url(./src/img/15.png)"
							},
							animateIn: {
								opacity: 1,
								left: '50%'
							},
							animateOut: {
								opacity: 0,
								left: 0,
							},
							delay: 500,		
						})
						.addComponent({
							type: 'base',
							name: 'slogan rock',
							center: true,
							width: 150,
							height: 80,
							text:"夏志尧",
							css: {
								opacity: 0,
								top: 330,
								left: 0,
								fontSize:25,

							},
							animateIn: {
								opacity: 1,
								left: '50%'
							},
							animateOut: {
								opacity: 0,
								left: 0,
							},
							delay: 500,		
						})
						.addComponent({
							type: 'base',
							name: 'left-bottom',
							width: 345,
							height: 493,
							css: {
								opacity: 0,
								bottom: 0,
								left: -50,
								backgroundImage: "url(./src/img/left.png)"
							},
							animateIn: {
								opacity: 1,
								left: 0
							},
							animateOut: {
								opacity: 0,
								left: -50,
							},
							delay: 1000,		
						})
						.addComponent({
							type: 'base',
							name: 'right-bottom',
							width: 324,
							height: 449,
							css: {
								opacity: 0,
								bottom: 0,
								right: -50,
								backgroundImage: "url(./src/img/right.png)"
							},
							animateIn: {
								opacity: 1,
								right: 0
							},
							animateOut: {
								opacity: 0,
								right: -50
							},
							delay: 1500,		
						})
					.addPage('secondPage')
						.addComponent({
							type: 'base',
							name: 'caption',
							width: 500,
							height: 300,
							css: {
								opacity: 0,
								top: 0,
								backgroundImage: 'url("./src/img/19.png")'
							},
							animateIn: {
								opacity: 1,
								top: 30
							},
							animateOut: {
								opacity: 0,
								top: 0
							}
						})
						.addComponent({
							type: 'base',
							name: 'des',
							width: 500,
							height: 60,
							text: 'Personalized Signature',
							center: true,
							css: {
								opacity: 0,
								color: 'red',
								fontSize: 25,
								fontWeight: 900,
								lineHeight: '30px',
								textAlign: 'center'
							},
							animateIn: {
								opacity: 1,
								top: 170
							},
							animateOut: {
								opacity: 0,
								top: 0
							},
							delay: 500		
						})
						.addComponent({
							type: 'base',
							name: 'des',
							width: 521,
							height: 360,
							center: true,
							css: {
								opacity: 0,
								bottom: 50,
								backgroundImage: 'url("./src/img/16.png")'
							},
							animateIn: {
								opacity: 1,
								bottom: 180
							},
							animateOut: {
								opacity: 0,
								bottom: 50
							},
							delay: 1500		
						})
						.addComponent({
							type: 'base',
							name: 'des',
							width: 521,
							height: 336,
							center: true,
							css: {
								opacity: 0,
								bottom: -40,
								backgroundImage: 'url("./src/img/17.png")'
							},
							animateIn: {
								opacity: 1,
								bottom: 40
							},
							animateOut: {
								opacity: 0,
								bottom: -40
							},
							delay: 1000		
						})
					.addPage('thirdPage')
						.addComponent({
							type: 'base',
							name: 'caption',
							width: 500,
							height: 300,
							css: {
								opacity: 0,
								left: 0,
								top: 0,
								backgroundImage: 'url("./src/img/19.png")'
							},
							animateIn: {
								opacity: 1,
								top: 30
							},
							animateOut: {
								opacity: 0,
								top: 0
							}
						})
						.addComponent({
							type: 'base',
							name: 'des',
							width: 500,
							height: 60,
							text: '职业技能',
							center: true,
							css: {
								opacity: 0,
								top: 0,
								color: 'red',
								fontSize: 25,
								fontWeight: 500,
								lineHeight: '30px',
								textAlign: 'center'
							},
							animateIn: {
								opacity: 1,
								top: 155
							},
							animateOut: {
								opacity: 0,
								top: 0
							},
							delay: 500		
						})
						.addComponent({
							type: 'bar',
							name: 'block',
							width: 650,
							height: 600,
							center: true,
							css: {
								opacity: 0,
								top: 0,
							},
							animateIn: {
								opacity: 1,
								top: 240
							},
							animateOut: {
								opacity: 0,
								top: -20
							},
							data: [
								['Html+Css', 0.8, 'rgb(255, 118, 118)'],
								['JavaScript', 0.8, 'rgb(156, 157, 200)'],
								['jQuery', 0.75, 'rgb(78, 79, 144)'],
								['H5+Css3', 0.7, 'rgb(11, 89, 222)'],
								['Vue', 0.4, 'rgb(220, 166, 177)'],
								['React', 0.4, 'rgb(118, 238, 198)']
							],
							delay: 1000	
						})
					.addPage('forthPage')
						.addComponent({
							type: 'base',
							name: 'caption',
							width: 500,
							height: 300,
							css: {
								opacity: 0,
								left: 0,
								top: 0,
								backgroundImage: 'url("./src/img/19.png")'
							},
							animateIn: {
								opacity: 1,
								top: 30
							},
							animateOut: {
								opacity: 0,
								top: 0
							}
						})
						.addComponent({
							type: 'base',
							name: 'des',
							width: 500,
							height: 60,
							text: '个人爱好',
							center: true,
							css: {
								opacity: 0,
								top: 0,
								color: 'red',
								fontSize: 25,
								fontWeight: 500,
								lineHeight: '30px',
								textAlign: 'center'
							},
							animateIn: {
								opacity: 1,
								top: 145
							},
							animateOut: {
								opacity: 0,
								top: 0
							},
							delay: 500		
						})
						.addComponent({
							type: 'polyline',
							name: 'block',
							width: 504,
							height: 604,
							center: true,
							css: {
								opacity: 0,
								bottom: -20,
							},
							animateIn: {
								opacity: 1,
								bottom: 120
							},
							animateOut: {
								opacity: 0,
								bottom: -20
							},
							data: [
								['羽毛球', 0.4, 'rgb(255, 118, 118)'],
								['阅读', 0.2, 'rgb(156, 157, 200)'],
								['看电影', 0.2, 'rgb(78, 79, 144)'],
								['听音乐', 0.1, 'rgb(11, 89, 222)'],
								['骑行', 0.1, 'rgb(123 104 238)']

							]
						})
					.addPage('fivePage')
						.addComponent({
							type: 'base',
							name: 'caption',
							width: 500,
							height: 300,
							css: {
								opacity: 0,
								left: 0,
								top: 0,
								backgroundImage: 'url("./src/img/19.png")'
							},
							animateIn: {
								opacity: 1,
								top: 30
							},
							animateOut: {
								opacity: 0,
								top: 0
							}
						})	
						.addComponent({
								type: 'pie',
								name: 'block',
								width: 600,
								height: 600,
								center: true,
								css: {
									opacity: 0,
									bottom: -20,
								},
								animateIn: {
									opacity: 1,
									bottom: 100
								},
								animateOut: {
									opacity: 0,
									bottom: -20
								},
								data: [
									['学识渊博', 0.16, 'rgb(255, 118, 118)'],
									['经验丰富', 0.16, 'rgb(156, 157, 200)'],
									['代码风骚', 0.17, 'rgb(78, 79, 144)'],
									['效率恐怖', 0.17, 'rgb(11, 89, 222)'],
									['身体强壮', 0.17, 'rgb(220, 166, 177)'],
									['健步如飞', 0.17, 'rgb(255, 250, 205)']

								]
						})
					.addPage('lastPage')
						.addComponent({
							type: 'base',
							name: 'logo rock',
							center: true,
							width: 428,
							height: 500,
							css: {
								opacity: 0,
								top: -20,
								backgroundImage: "url(./src/img/18.png)"
							},
							animateIn: {
								opacity: 1,
								top: 200,
							},
							animateOut: {
								opacity: 0,
								top: -20
							}
						})
						.addComponent({
							type: 'base',
							name: 'slogan upDown',
							center: true,
							width: 96,
							height: 52,
							css: {
								opacity: 0,
								top: 0,
								backgroundImage: "url(./src/img/back.png)"
							},
							animateIn: {
								opacity: 1,
								// top: 50
							},
							animateOut: {
								opacity: 0,
								// top: 0,
							},
							delay: 1000,
							onClick: function () {
								pageComponentManageObj.moveTo();
							}		
						})
					.load();


						
