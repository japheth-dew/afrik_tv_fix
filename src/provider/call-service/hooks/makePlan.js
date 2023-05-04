import { useMutation } from '@tanstack/react-query'
import axios from '../../api/axios'
import NotificationContext from '../../NotificationProvider'

async function makePlanFnc(plan) {
	if (!plan) return alert('no plan selected')
	const extraheaders = localStorage.getItem('token')
	console.log(plan)

	const response = await axios.get(`/subscribe/paystack/${plan}`, {
		headers: {
			'ysu-afriktv-auth-token': extraheaders,
		},
	})
	console.log(response.data)
	return response.data
}

const useMakePlan = () =>
	useMutation(makePlanFnc, {
		onSuccess: () => {
			// Handle success here
		},
		onError: (error) => {
			// Handle error here
		},
	})

export default useMakePlan
