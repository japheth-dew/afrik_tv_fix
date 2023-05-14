import React, { useContext, useEffect } from 'react'
import ApiContext from '../../../provider/call-service'

function getQueryParams(url) {
	const params = new URLSearchParams(new URL(url).search)
	const trxref = params.get('trxref')
	const reference = params.get('reference')
	return { trxref, reference }
}

const Verification = () => {
	const { useVerifyPayment } = useContext(ApiContext)

	const { mutate, isLoading, data, error } = useVerifyPayment()

	useEffect(() => {
		const url = window.location.href
		localStorage.setItem('url', url)
		const { reference } = getQueryParams(url)
		let cancelled = false

		mutate(reference)

		return () => {
			cancelled = true
		}
	}, [])

	return (
		<div className="w-full h-screen justify-center items-center">
			<p>
				Please wait while we verify your account. If you are not redirected in 5 seconds, click <a href="/">here</a>
			</p>
		</div>
	)
}

export default Verification

// https://www.afriktv.io/auth/billing/verification?trxref=AFRIKTV-14397e7e-f25a-4f7a-85ef-90dc136c3ee7&reference=AFRIKTV-14397e7e-f25a-4f7a-85ef-90dc136c3ee7
