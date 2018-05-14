import Config from 'Config'
import axios from 'axios'

class API {
	request(params) {
		let options = {}

		options.method = params.method || 'get'
		options.url = Config.api.root+ params.url
		options.data = params.data || null

		console.log('API request:', options)

		return new Promise((resolve, reject) => {
			axios(options).then(doc => {
				//	todo...
				resolve(doc)
			}).catch(e => {
				//	todo...
				reject(e)
			})
		})
	}
}

export default new API()
