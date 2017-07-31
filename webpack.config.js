var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery',jQuery: 'jquery','window.jQuery':'jquery'});
// var loaderPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')//这是第三方库打包生成的文件
//我们做个小测试，让第二个入口文件也加载我们之前的 es6-module.js 。
//然后我们用webpack进行打包，就发现生成的 common.js 里是有相应代码的。
//我们需要手动在html上去加载 common.js ，并且是 必须要最先加载 

module.exports = {  // 入口文件设置 从index 的值（路径） 找到该文件  output的path则是 编译后文件输出的路径
					entry: {
							index : './src/js/index.js'},
					//public 是 图片被转换成base64 后的路径
						 	output: {
							path: __dirname + './static/dist/',
							publicPath:'http://localhost:8080/static/dist/',
							filename: 'index.js'},
							// 加载器 从顶层文件夹开始寻找 找到匹配的文件 用依赖模块进行加载
							module: {	loaders: [	
													// { test: /\.js$/, loader: 'jsx-loader?harmony' },
													{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},								
													// {test: require.resolve('./src/js/tool/jquery'), loader: 'exports-loader?jQuery'},
													{ test: /\.css$/, loader: 'style-loader!css-loader' },
													{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
													// { test: /\.(png|jpg)$/, loader: ['image?...','url?limit=1000&name=img/[hash:8].[name].[ext]']},
													{ test: /\.less$/, loader:'style-loader!css-loader!less-loader'}]
									},
							resolve: {
								extensions: ['.js','.json','.less', 'css']
							},
							plugins: [providePlugin] 
};
//resolve:定义了解析模块路径时的配置，常用的就是extensions;可以用来指定模块的后缀，这样在引入模块时就不需要写后缀，会自动补全。 
//plugins:定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取公用的部分，生成common.js; 
//module.loaders：是文件的加载器，比如我们之前react需要在页面中引入jsx的js源码到页面上来，然后使用该语法，
//但是通过webpack打包后就不需要再引入JSXTransformer.js；看到上面的加载器；
//比如jsx-loader加载器就是代表JSXTransformer.js的，还有style-loader和css-loader加载器；
//因此在使用之前我们需要通过命令把它引入到项目上来；因此需要如下命令生成下