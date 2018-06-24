const path = require('path')
const webpack = require('webpack')
const alias = require('../fileAlias')

console.log("process.env.NODE_ENV", process.env.NODE_ENV)
module.exports =  {
	mode: process.env.NODE_ENV,
	devtool: 'none',

	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: alias
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
}