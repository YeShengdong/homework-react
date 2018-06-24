const clientConfig = require('./webpack.config.client')
const serverConfig = require('./webpack.config.server')

module.exports = [serverConfig, clientConfig]
