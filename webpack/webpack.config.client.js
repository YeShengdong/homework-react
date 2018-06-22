const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const alias = require('../fileAlias')

module.exports = (env, options) => {
	const isProduction = env && env.prod ? true : false

	const config = {
		entry: './src/client/index',
		mode: isProduction ? 'production' : 'development',
		devtool: isProduction ? 'none' : 'source-map',

		output: {
			filename: 'bundle.js',
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
		            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
		            loader: 'url-loader',
		            options: {
						name: '[path][name].[ext]?[hash]'
					}
		        },
				{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
		      	{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader',
								options: {
		                            minimize: isProduction
		                        }
							},
							{
								loader: 'sass-loader',
								options: {
		                            minimize: isProduction
		                        }
							}
						]
					})
				}
			]
		},

		plugins: [
			new ExtractTextPlugin('[name].css'),
		]
	}

	// if (isProduction) {
	// 	config.optimization = {
	// 		splitChunks: {
	// 			cacheGroups: {
	// 				commons: {
 //            			name: 'commons',
	// 					chunks: 'all',
	// 					minSize: 0,
	// 					minChunks: 2
	// 				}
	// 			}
	// 		}
	// 	}
	// } else {
	// 	config.plugins.push(new webpack.HotModuleReplacementPlugin())
	// 	config.devServer = {
	// 		open: true,
	// 		hot: true,
	//         inline: true,
	//         contentBase: './dist/',
	//         historyApiFallback: true
	// 	}
	// }

	return config
}