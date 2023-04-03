import React, { useState } from 'react'
import './style.css'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui'

const SignUp = () => {
	const [loading, setLoading] = useState(false)
	const [values, onChange, reset] = useForm()
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		navigate('/auth/otp')
	}

	const getValues = () => {
		// get email, fullname, password from values and validated
		const { email, fullname, password, rePassword } = values
		if (!email) {
			return {
				error: 'Email is required',
			}
		}
		if (!fullname) {
			return {
				error: 'Fullname is required',
			}
		}
		if (password !== rePassword) {
			return {
				error: 'Password does not match',
			}
		}
		return { email, fullname, password }
	}

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

						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Create your AfrikTV account</h2>

						<p className="mt-4 leading-relaxed text-white/90">
							You can now create your AfrikTV account, shhhhh... your secret is safe 😅
						</p>
					</div>
				</section>

				<main
					aria-label="Main"
					className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 contain-all"
				>
					<form className="max-w-xl lg:max-w-3xl" onSubmit={handleSubmit}>
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
								Now, fill in the required credentials to get started with AfrikTV
							</p>
						</div>
						<br />

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="fullname"
								id="fullname"
								className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								onChange={onChange}
							/>
							<label
								htmlFor="fullname"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Full Name
							</label>
						</div>

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="email"
								name="email"
								id="email"
								className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								onChange={onChange}
							/>
							<label
								htmlFor="email"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Email Address
							</label>
						</div>

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="password"
								name="password"
								id="password"
								className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								onChange={onChange}
							/>
							<label
								htmlFor="password"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Password
							</label>
						</div>

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="password"
								name="rePassword"
								id="rePassword"
								className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								onChange={onChange}
							/>
							<label
								htmlFor="rePassword"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Confirm Password
							</label>
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
									<a href="#" className="text-gray-700">
										terms and conditions
									</a>{' '}
									and{' '}
									<a href="#" className="text-gray-700">
										privacy policy
									</a>
									.
								</span>
							</label>
							<br />
							<p className="text-sm text-gray-700">
								Already have an account?{' '}
								<a href="signin" className="text-gray-700">
									Log in
								</a>
								.
							</p>
						</div>
						<br />

						<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
							<Button
								className="login-btn inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring"
								type="submit"
								loading={loading}
							>
								Create an account
							</Button>
						</div>
					</form>
				</main>
			</div>
		</section>
	)
}

export default SignUp
