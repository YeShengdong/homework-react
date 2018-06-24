const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { ReactLoadablePlugin } = require('react-loadable/webpack')
const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
	name: 'client',
	target: 'web',
	entry: './src/client/client',
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	},

	module: {
		rules: [
			{
	            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
	            loader: 'url-loader',
	            options: {
					name: '[path][name].[ext]?[hash]'
				}
	        },
	      	{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
	                            minimize: !isDevMod
	                        }
						},
						{
							loader: 'sass-loader',
							options: {
	                            minimize: !isDevMod
	                        }
						}
					]
				})
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('[name].css'),
		new ReactLoadablePlugin({
			filename: './dist/react-loadable.json',
		})
	]
})
