import axios from '../../api/axios'

export async function initializePaymentFunction() {
	const extraheaders = localStorage.getItem('token')

	const response = await axios.post(
		`/billing/paystack/init`,
		{},
		{
			headers: {
				'ysu-afriktv-auth-token': extraheaders,
			},
		}
	)

	window.location.href = response.data.response.data.authorization_url

	// console.log(response.data.response)
	return response.data
}

export async function verifyPaymentFunction(reference) {
	const extraheaders = localStorage.getItem('token')

	const response = await axios.post(
		`/billing/paystack/verify?reference=${reference}`,
		{},
		{
			headers: {
				'ysu-afriktv-auth-token': extraheaders,
			},
		}
	)

	console.log(response.data)
	return response.data
}

export async function makePlanFnc(plan) {
	if (!plan) return alert('no plan selected')
	const extraheaders = localStorage.getItem('token')
	console.log(plan)

	const response = await axios.post(
		`/subscribe/paystack/${plan}`,
		{},
		{
			headers: {
				'ysu-afriktv-auth-token': extraheaders,
			},
		}
	)
	console.log(response.data)
	return response.data
}
