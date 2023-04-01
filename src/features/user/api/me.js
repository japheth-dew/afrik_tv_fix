import axios from '../../../lib/axios'

export const me = async () => {
	return axios.get('/auth/user')
}
