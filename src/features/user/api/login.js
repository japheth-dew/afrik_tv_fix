import axios from '../../../lib/axios'

export const loginWithEmailAndPassword = async ({ email, password }) => {
	return axios.post('/auth/login', { email, password })
}
