import { useQuery } from '@tanstack/react-query'
import axios from '../../api/axios'

async function getProfilesFunction() {
	const extraheaders = localStorage.getItem('token')

	const response = await axios.get('/profile/user', {
		// 'ysu-afriktv-auth-token': extraheaders,
		headers: {
			'ysu-afriktv-auth-token': extraheaders,
		},
	})
	console.log(response.data)
	return response.data
}

const getProfiles = () => useQuery({ queryKey: ['getProfile'], queryFn: () => getProfilesFunction() })

export default getProfiles
