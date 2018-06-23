import Config from 'Config'
import axios from 'axios'

class API {
	constructor() {
		this.root = Config.api.root
	}

	request(params) {
		let url = this.root + params.url
		const method = params.method || 'get'
		const data = params.data || null

		if (method.toLowerCase() === 'get' && data) {
			url += '?'

			for (let key in data) {
				url += `${key}=${data[key]}&`
			}

			url = url.substring(0, url.length - 1)
		}

		const options = {method, url, data}
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
