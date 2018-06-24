const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const common = require('./webpack.config.common')

module.exports = merge(common, {
	name: 'server',
	target: 'node',
	entry: './src/client/serverRenderer',
	externals: [nodeExternals()],
	output: {
		filename: 'serverRenderer.js',
		libraryTarget: 'commonjs2'
	}
})
