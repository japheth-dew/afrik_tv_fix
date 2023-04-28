import axios from '../provider/api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
	const { setAuth } = useAuth()

	const refresh = async () => {
		const response = await axios.get('/user', {
			withCredentials: true,
		})
		setAuth((prev) => {
			console.log(JSON.stringify(prev))
			console.log(response.data.accessToken)
			return { ...prev, accessToken: response.data.accessToken }
		})
		return response.data.user?.accessToken
	}
	return refresh
}

export default useRefreshToken
