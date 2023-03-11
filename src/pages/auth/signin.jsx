import React from 'react'
import './style.css'

const SignIn = () => {
	return (
		<section className="bg-white">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section className="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
					<div className="hidden lg:relative lg:block lg:p-12 contain-in">
						<a className="block text-white" href="/">
							<span className="sr-only">Home</span>
							<img
								src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677147437/closed-mouth_nne5ys.png"
								width="10%"
							/>
						</a>

						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							Sign In to your AfrikTV account
						</h2>

						<p className="mt-4 leading-relaxed text-white/90">
							We're excited to see you here again...
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
								<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677147401/star_struck_b88r2l.gif" />
							</a>

							<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								Connect with African Movies 😅🍿
							</h1>

							<p className="mt-4 leading-relaxed text-gray-500">
								Now, sign in to your AfrikTV account to watch the best African
								Blockbuster movies...
							</p>
						</div>

						<form action="#" className="mt-8 grid grid-cols-6 gap-6">
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

							<div className="col-span-6 sm:col-span-3">
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
								<p className="mt-4 text-sm text-gray-500 sm:mt-0">
									<a href="#" className="text-gray-700 underline">
										Forgotten Password?
									</a>
								</p>
							</div>

							<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
								<button className="inline-block shrink-0 login-btn rounded-md border  px-12 py-3 text-sm font-medium text-white transition focus:outline-none ">
									Sign In
								</button>
							</div>
						</form>
					</div>
				</main>
			</div>
		</section>
	)
}

export default SignIn
