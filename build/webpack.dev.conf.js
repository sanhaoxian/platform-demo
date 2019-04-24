const path = require('path');
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require("webpack-merge");
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigDev = {
	mode: 'development', // 通过 mode 声明开发环境
	output: {
		// publicPath:  '/',//必须加publicPath
		path: path.resolve(__dirname, '../dist'),
		// 打包多出口文件
		// 生成 a.bundle.[hash].js  b.bundle.[hash].js
		filename: 'js/[name].bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, '../src'),
		host: "127.0.0.1",
		port: "8080",
		// publicPath: '/build/',
		// historyApiFallback: true,
		watchContentBase: true,
		hot: true, // 开启热更新
		hotOnly:true
		// overlay: true // 浏览器页面上显示错误
		// open: true, // 开启浏览器
		// stats: "errors-only", //stats: "errors-only"表示只打印错误：
	},
	plugins: [
		new CleanWebpackPlugin(['dist'],{
			root: path.resolve(__dirname, '../src'),   //根目录
       		verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
		}),
		new webpack.NamedModulesPlugin(),
		//热更新
		new webpack.HotModuleReplacementPlugin(),
	],
	// devtool: "source-map",  // 开启调试模式
	module: {
		rules: []
	},
}
module.exports = merge(webpackConfigBase, webpackConfigDev);