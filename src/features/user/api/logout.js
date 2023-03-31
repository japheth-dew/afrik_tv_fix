import axios from '../../../lib/axios'

export const logout = async ({ email, password }) => {
	return axios.post('/api/logout', { email, password })
}
