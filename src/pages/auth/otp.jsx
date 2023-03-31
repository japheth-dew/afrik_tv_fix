import React from 'react'
import './style.css'

const otp = () => {
	return (
		<section className="bg-white">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section className="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
					<div className="hidden lg:relative lg:block lg:p-12 contain-in">
						<a className="block text-white" href="/">
							<span className="sr-only">Home</span>
							<img
								src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677522097/Screenshot_2023-02-27_at_19.19_Background_Removed.10_fatgvx.png"
								width="22%"
							/>
						</a>

						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							OTP Veriffication - AfrikTV
						</h2>

						<p className="mt-4 leading-relaxed text-white/90">
							Now, let's verify your OTP code sent in your email address.
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
								<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677522265/Screenshot_2023-02-27_at_19.23_Background_Removed.56_jxr9z5.png" />
							</a>

							<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								OTP Verification{' '}
							</h1>
							<br />
							<div className="flex flex-row text-sm font-medium text-gray-400">
								<p>We have sent a code to your email emai***@gmail.com.</p>
							</div>

							<div className="mx-auto flex w-full max-w-md flex-col space-y-16">
								<div className="flex flex-col items-center justify-center text-center space-y-2"></div>

								<div>
									<div className="flex flex-col space-y-16">
										<div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
											<div className="w-16 h-16 ">
												<input
													className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
													type="text"
													name=""
													id=""
												required />
											</div>
											<div className="w-16 h-16 ">
												<input
													className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
													type="text"
													name=""
													id=""
												required />
											</div>
											<div className="w-16 h-16 ">
												<input
													className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
													type="text"
													name=""
													id=""
												required />
											</div>
											<div className="w-16 h-16 ">
												<input
													className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
													type="text"
													name=""
													id=""
												required />
											</div>
										</div>

										<div className="flex flex-col space-y-5">
											<div>
												<a href="/auth/billing">
												<button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 login-btn border-none text-white text-sm shadow-sm ">
													Verify Account
												</button>
												</a>
											</div>
										</div>

										<div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
											<p>Didn't recieve code?</p>{' '}
											<a
												className="flex flex-row items-center text-blue-600"
												href="http://"
												target="_blank"
												rel="noopener noreferrer"
											>
												Resend
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</section>
	)
}

export default otp
