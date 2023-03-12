import React from 'react'
import './style.css'

const resetpassword = () => {
	return (
		<section class="bg-white">
			<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section class="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
					<div class="hidden lg:relative lg:block lg:p-12 contain-in">
						<a class="block text-white" href="/">
							<span class="sr-only">Home</span>
							<img
								src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677597898/confused-face_1f615_ze6k7l.png"
								width="10%"
							/>
						</a>

						<h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							Reset Password - AfrikTV
						</h2>

						<p class="mt-4 leading-relaxed text-white/90">
							Now, you can reset your password with the form.
						</p>
					</div>
				</section>

				<main
					aria-label="Main"
					class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
				>
					<div class="max-w-xl lg:max-w-3xl">
						<div class="relative -mt-16">
							<a
								class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
								href="/"
							>
								<span class="sr-only">Home</span>
								<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677599882/cloud-with-lightning-and-rain_26c8-fe0f_rnk5sp.png" />
							</a>

							<h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								Reset your AfrikTV password
							</h1>
						</div>
						<br />
						<form action="#">
							<div class="relative z-0 w-full mb-6 group">
								<input
									type="password"
									name="floating_pwd"
									id="pwd"
									class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_pwd"
									class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									New Password
								</label>
							</div>

							<div class="relative z-0 w-full mb-6 group">
								<input
									type="password"
									name="floating_repwd"
									id="repwd"
									class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_repwd"
									class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Confirm Password
								</label>
							</div>

							<div class="col-span-6 sm:flex sm:items-center sm:gap-4">
								<button class="inline-block shrink-0 login-btn rounded-md border  px-12 py-3 text-sm font-medium text-white transition focus:outline-none ">
									Reset Password
								</button>
							</div>
						</form>
					</div>
				</main>
			</div>
		</section>
	)
}

export default resetpassword
