import React, { useContext, useState } from 'react'
import useForm from '../../hooks/useForm'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui'

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import UserContext from '../../provider/state-manager/userProvider'
import ApiContext from "../../provider/call-service/index"
import AppContext from '../../provider'


const SignIn = () => {
	const [values, onChange, reset] = useForm()
	const [showPassword, setShowPassword] = useState(false)
	const [type, setType] = useState('password')

	const { signin } = useContext(ApiContext)
	const { loading } = useContext(AppContext)

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const res = await signin("obadimuoluwafemi1@gmail.com", "1234567890");

		if (res) {
			navigate('/in')
		}
	}

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

						<p className="mt-4 leading-relaxed text-white/90">We're excited to see you here again...</p>
					</div>
				</section>

				<main
					aria-label="Main"
					className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
				>
					<form className="max-w-xl lg:max-w-3xl" onSubmit={handleSubmit}>
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
								Now, sign in to your AfrikTV account to watch the best African Blockbuster movies...
							</p>
						</div>
						<br />

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="email"
								name="email"
								// value={values.email}
								value="obadimuoluwafemi1@gmail.com"
								className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter your email"
								autoComplete='off'
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
								type={showPassword ? 'text' : 'password'}
								name="password"
								autoComplete='off'
								// value={values.password}
								value="1234567890"
								className="block py-3 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter your passsword"
								onChange={onChange}
							/>

							<div className='absolute top-2 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
								{showPassword ?
									<VisibilityOutlinedIcon /> :
									<VisibilityOffOutlinedIcon />
								}
							</div>

							<label
								htmlFor="floating_pwd"
								className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Password
							</label>
						</div>

						<div className="col-span-6">
							<p className="mt-4 text-sm text-gray-500 sm:mt-0">
								<a href="/auth/forgotpassword" className="text-gray-500">
									Forgotten Password?
								</a>
							</p>

							<p className="mt-4 text-sm text-gray-500 sm:mt-0">
								{' '}
								New to AfrikTV{' '}
								<a href="/auth/signup" className="text-gray-500 font-bold hover:underline">
									Sign Up now
								</a>
							</p>
						</div>
						<br />

						<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
							<Button
								className="login-btn inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring"
								type="submit"
								loading={loading}
								disabled={loading}
							>
								Sign In
							</Button>
						</div>
					</form>
				</main>
			</div>
		</section>
	)
}

export default SignIn
