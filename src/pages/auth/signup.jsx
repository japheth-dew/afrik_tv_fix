import React from 'react'
import './style.css'

const SignUp = () => {
	return (
		<section className="bg-white">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section className="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
					<div className="hidden lg:relative lg:block lg:p-12 contain-in">
						<a className="block text-white" href="/">
							<span className="sr-only">Home</span>
							<img
								src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677231750/face-with-spiral-eyes_1f635-200d-1f4ab_lqjdgp.png"
								width="10%"
							/>
						</a>

						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							Create your AfrikTV account
						</h2>

						<p className="mt-4 leading-relaxed text-white/90">
							You can now create your AfrikTV account, shhhhh... your secret is
							safe 😅
						</p>
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
								<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677231936/rocket_1f680_l8dux0.png" />
							</a>

							<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								Let's create a new AfrikTV account
							</h1>

							<p className="mt-4 leading-relaxed text-gray-500">
								Now, fill in the required credentials to get started with
								AfrikTV
							</p>
						</div>

						<form action="#" className="mt-8 grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="FirstName"
									className="block text-sm font-medium text-gray-700"
								>
									First Name
								</label>

								<input
									type="text"
									id="FirstName"
									name="first_name"
									className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div className="col-span-6">
								<label
									htmlFor="LastName"
									className="block text-sm font-medium text-gray-700"
								>
									Last Name
								</label>

								<input
									type="text"
									id="LastName"
									name="last_name"
									className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div className="col-span-6">
								<label
									htmlFor="Email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>

								<input
									type="email"
									id="Email"
									name="email"
									className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div className="col-span-6">
								<label
									htmlFor="Password"
									className="block text-sm font-medium text-gray-700"
								>
									Password
								</label>

								<input
									type="password"
									id="Password"
									name="password"
									className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div className="col-span-6">
								<label
									htmlFor="PasswordConfirmation"
									className="block text-sm font-medium text-gray-700"
								>
									Password Confirmation
								</label>

								<input
									type="password"
									id="PasswordConfirmation"
									name="password_confirmation"
									className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div className="col-span-6">
								<label htmlFor="MarketingAccept" className="flex gap-4">
									<input
										type="checkbox"
										id="MarketingAccept"
										name="marketing_accept"
										className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
									/>

									<span className="text-sm text-gray-700">
										By creating an account, you agree to our{' '}
										<a href="#" className="text-gray-700 underline">
											terms and conditions
										</a>{' '}
										and{' '}
										<a href="#" className="text-gray-700 underline">
											privacy policy
										</a>
										.
									</span>
								</label>
								<br />
								<p className="text-sm text-gray-700">
									Already have an account?{' '}
									<a href="#" className="text-gray-700 underline">
										Log in
									</a>
									.
								</p>
							</div>

							<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
								<button className="login-btn inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring">
									Create an account
								</button>
							</div>
						</form>
					</div>
				</main>
			</div>
		</section>
	)
}

export default SignUp
