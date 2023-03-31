import React from 'react'
import './style.css'

const forgotpassword = () => {
	return (
		<section className="bg-white">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section className="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
					<div className="hidden lg:relative lg:block lg:p-12 contain-in">
						<a className="block text-white" href="/">
							<span className="sr-only">Home</span>
							<img
								src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677597898/confused-face_1f615_ze6k7l.png"
								width="10%"
							/>
						</a>

						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							Forgotten Password - AfrikTV
						</h2>

						<p className="mt-4 leading-relaxed text-white/90">
							Urgh, just input your email address in the input field - we're
							here to help you out!
						</p>
					</div>
				</section>

				<main
					aria-label="Main"
					className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
				>
					<div className="max-w-xl lg:max-w-3xl">
						<div className="relative -mt-16">
							<a
								className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
								href="/"
							>
								<span className="sr-only">Home</span>
								<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677599882/cloud-with-lightning-and-rain_26c8-fe0f_rnk5sp.png" />
							</a>

							<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								Forgot your AfrikTV password?
							</h1>

							<p className="mt-4 leading-relaxed text-gray-500">
								Don't worry - we're here to help. Fill in the form with your
								registered email address.
							</p>
						</div>
						<br />

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="email"
								name="floating_email"
								id="email"
								className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
							/>
							<label
								htmlFor="floating_email"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Email Address
							</label>
						</div>

						<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
							<a href="resetpassword">
								<button className="inline-block shrink-0 login-btn rounded-md border  px-12 py-3 text-sm font-medium text-white transition focus:outline-none ">
									Forgotten Password
								</button>
							</a>
						</div>
					</div>
				</main>
			</div>
		</section>
	)
}

export default forgotpassword
