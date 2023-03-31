import Axios from 'axios'
import { getToken } from './storage'

const axios = Axios.create({
	baseURL: 'https://afriktv-backend.onrender.com/afriktv/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
})

axios.interceptors.request.use((config) => {
	const token = getToken()
	if (token) {
		config.headers.set('ysu-afriktv-auth-token', token)
	}

	return config
})

async function interceptResponse() {
	axios.interceptors.response.use(
		(response) => response.data,
		(error) => {
			if (error.response?.status === 401) {
				// Handle 401 error
				return Promise.reject(error)
			}
			return Promise.reject(error)
		}
	)
}

interceptResponse()

export default axios
