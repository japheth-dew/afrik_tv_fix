import React from 'react'
import './style.css'
import { Checkbox } from '@mui/material'
import { Button } from '../../components/ui'
import { initializePayStack } from '../../features/billing/api/initializePayment'
import { Helmet } from 'react-helmet'
import { Head } from '../../components/common'

const billing = () => {
	const [checked, setChecked] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	// const handlePayment = async () => {
	// 	// Open payment window
	// 	try {
	// 		setLoading(true);
	// 		const { response } = await initializePayStack();
	// 		console.log(response)
	// 		const { access_code, authorization_url, reference } = response.data;
			
	// 		const paymentWindow = window.open(authorization_url, '_blank', 'width=500,height=600');
			
	// 		const handlePaymentStatus = (response) => {
	// 			if (response.status === 'success') {
	// 				// Payment successful, update backend with payment details
	// 				fetch('/api/payments/verify', {
	// 					method: 'POST',
	// 					body: JSON.stringify({ reference }),
	// 					headers: {
	// 						'Content-Type': 'application/json'
	// 					}
	// 				})
	// 					.then(() => {
	// 						// Payment successful, update app UI
	// 						alert('Payment successful!');
	// 					})
	// 					.catch((err) => {
	// 						// Error updating payment status
	// 						alert('Error updating payment status');
	// 					});
	// 			} else if (response.status === 'error') {
	// 				// Payment failed, update app UI
	// 				alert('Payment failed!');
	// 			} else if (response.status === 'cancelled') {
	// 				// Payment cancelled, update app UI
	// 				alert('Payment cancelled!');
	// 			}
	// 		};

	// 		// Generate payment form in new child window
	// 		const newWindow = window.open('', '_blank');
	// 		window.Paystack.inlinePay({
	// 			access_code,
	// 			callback: handlePaymentStatus,
	// 			onClose: () => {
	// 				// Child window closed, update app UI
	// 				alert('Payment window closed');
	// 			}
	// 		}, newWindow);
	// 		setPaymentWindow(newWindow);
	// 	} catch (err) {
	// 		console.log(err)
	// 		setLoading(false);
	// 	}
	// }

	const handlePayment = async () => {
		// Open payment window
		try {
			setLoading(true);
			const { response } = await initializePayStack();
			console.log(response)
			const { access_code, authorization_url, reference } = response.data;
			
			// const paymentWindow = window.open(authorization_url, '_blank', 'width=500,height=600');
			
			const handlePaymentStatus = (response) => {
				if (response.status === 'success') {
					// Payment successful, update backend with payment details
					fetch('/api/payments/verify', {
						method: 'POST',
						body: JSON.stringify({ reference }),
						headers: {
							'Content-Type': 'application/json'
						}
					})
						.then(() => {
							// Payment successful, update app UI
							alert('Payment successful!');
						})
						.catch((err) => {
							// Error updating payment status
							alert('Error updating payment status');
						});
				} else if (response.status === 'error') {
					// Payment failed, update app UI
					alert('Payment failed!');
				} else if (response.status === 'cancelled') {
					// Payment cancelled, update app UI
					alert('Payment cancelled!');
				}
			};

			// Generate payment form in new child window
			// const newWindow = window.open('', '_blank');
			// window.Paystack.inlinePay({
			// 	access_code,
			// 	callback: handlePaymentStatus,
			// 	onClose: () => {
			// 		// Child window closed, update app UI
			// 		alert('Payment window closed');
			// 	}
			// }, newWindow);
			const paystack = new window.PaystackPop()
			// resumeTransation has the following parameters
			// 1. access_code
			// 2. callback function
			// 3. reference
			paystack.resumeTransaction(access_code, handlePaymentStatus, console.log)
		} catch (err) {
			console.log(err)
			setLoading(false);
		}
	}

	return (
		<section className="bg-white">
			<Head title="Billing - AfrikTV">
				<script src="https://js.paystack.co/v2/inline.js"></script>
			</Head>
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section className="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
					<div className="hidden lg:relative lg:block lg:p-12 contain-in">
						<a className="block text-white" href="/">
							<span className="sr-only">Home</span>
							<img
								src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1678180300/credit-card_1f4b3_f5rsbk.png"
								width="10%"
							/>
						</a>
						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Billing - AfrikTV</h2>
						<p className="mt-4 leading-relaxed text-white/90">
							End to end encryption process for payment. Input your credit card details to start your subscription with
							AfrikTV.
						</p>
						<img
							className="h-20 start-img max-w-lg rounded-lg"
							src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1678191574/Untitled_design__3_-removebg-preview_be3dol.png"
							alt="image description"
						/>
					</div>
				</section>
				<main
					aria-label="Main"
					className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 contain-all"
				>
					<div className="max-w-xl lg:max-w-3xl">
						<div className="relative -mt-16">
							<a
								className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
								href="/"
							>
								<span className="sr-only">Home</span>
								<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1678178688/money-mouth-face_1f911_szaj0g.png" />
							</a>

							<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								Set Up your Credit or Debit Card - AfrikTV
							</h1>

							<p className="mt-4 leading-relaxed text-gray-500">
								<img
									className="h-20 start-img max-w-lg rounded-lg"
									src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1678191574/Untitled_design__3_-removebg-preview_be3dol.png"
									alt="image description"
								/>{' '}
							</p>
						</div>

						<div
							id="toast-interactive"
							className="w-full  p-4 text-white-500 bg-white rounded-lg dark:bg-white-800 dark:text-black-400"
							role="alert"
						></div>
						<label htmlFor="MarketingAccept" className="flex gap-4">
							<Checkbox id="MarketingAccept" name="marketing_accept" className="self-start" checked={checked} onChange={(e) => setChecked(e.target.checked)} />

							<span className="text-sm text-gray-700">
								By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over
								13. AfrikTV will automatically continue your membership and charge the membership fee (currently
								$5.99/month) to your payment method until you cancel. You may cancel at any time to avoid future
								charges.
							</span>
						</label>

						<br />
						<Button className="login-btn inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring" disabled={!checked} onClick={handlePayment} loading={loading}>
							Pay Now
						</Button>
					</div>
				</main>
			</div>
		</section>
	)
}

export default billing
