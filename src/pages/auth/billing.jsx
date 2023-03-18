import React from 'react'
import './style.css'

const billing = () => {
	return (
		<section className="bg-white">
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

						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							Billing - AfrikTV
						</h2>

						<p className="mt-4 leading-relaxed text-white/90">
							End to end encryption process for payment. Inout your credit card
							details to start your subscription with AfrikTV.
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

						<form action="#" className="">
							<div className="relative z-0 w-full mb-6 group">
								<input
									type="card_number"
									name="floating_cardnum"
									id="card-number"
									className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
						
								/>
								<label
									htmlFor="floating_cardnum"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Card Number
								</label>
							</div>

							<div className="relative z-0 w-full mb-6 group">
								<input
									type="text"
									name="floating_expirydate"
									maxLength="4"
									pattern="[0-9]*"
									id="expirydate"
									className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
							
								/>
								<label
									htmlFor="floating_expirydate"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Expiration Date (MM)/(YY)
								</label>
							</div>

							<div className="relative z-0 w-full mb-6 group">
								<input
									type="text"
									name="floating_expirydate"
									maxLength="3"
									pattern="[0-9]"
									id="expirydate"
									className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
						
								/>
								<label
									htmlFor="floating_expirydate"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									CVV Code (3 digits behind your card)
								</label>
							</div>

							<div
								id="toast-interactive"
								className="w-full  p-4 text-white-500 bg-white rounded-lg dark:bg-white-800 dark:text-black-400"
								role="alert"
							>
								<div className="flex">
									<div className="ml-3 text-sm font-normal">
										<span className="mb-1 text-sm font-semibold text-black-900 dark:text-black">
											$5.99/mo
										</span>
										<div className="mb-2 text-sm font-normal">Basic Plan</div>
										<div className="grid grid-cols-2 gap-2">
											<div>
												<a
													href="#"
													className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white login-btn rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none"
												>
													Change
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<label htmlFor="MarketingAccept" className="flex gap-4">
								<input
									type="checkbox"
									id="MarketingAccept"
									name="marketing_accept"
									className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
								/>

								<span className="text-sm text-gray-700">
									By checking the checkbox below, you agree to our Terms of Use,
									Privacy Statement, and that you are over 13. AfrikTV will
									automatically continue your membership and charge the
									membership fee (currently $5.99/month) to your payment method
									until you cancel. You may cancel at any time to avoid future
									charges.
								</span>
							</label>

							<br />
							<a href="/profile/new">
							<button className="login-btn inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring">
								Pay Now
							</button>
							</a>
						</form>
					</div>
				</main>
			</div>
		</section>
	)
}

export default billing
