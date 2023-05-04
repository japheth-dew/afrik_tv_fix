import { useQuery } from '@tanstack/react-query'
import axios from '../../api/axios'

async function makePlanFnc(plan) {
	if (!plan) return alert('no plan selected')
	const extraheaders = localStorage.getItem('token')
	console.log(plan)

	// const response = await axios.get(`/subscribe/paystack/${plan}`, {
	// 	headers: {
	// 		'ysu-afriktv-auth-token': extraheaders,
	// 	},
	// })
	// console.log(response.data)
	// return response.data
}

const makePlan = (plan) =>
	useQuery({
		queryKey: ['makePlan', plan], // include plan in the queryKey
		queryFn: () => makePlanFnc(plan), // use a closure to capture the plan variable
	})

export default makePlan

1522293282
