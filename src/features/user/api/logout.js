import axios from '../../../lib/axios'

export const logout = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	// return axios.post('/api/logout', { email, password })
}
