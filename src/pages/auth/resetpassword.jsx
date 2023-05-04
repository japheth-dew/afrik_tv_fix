import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import './style.css'

// providers
import AppContext from '../../provider'
import ApiContext from '../../provider/call-service'
import UserContext from '../../provider/state-manager/userProvider'

// ui
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'

// helpers
import { check } from './passwordChecker'
import { CircularProgress } from '@mui/material'

const resetpassword = () => {
	const email = localStorage.getItem('email')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [type, setType] = useState('password')
	const [values, onChange, reset] = useForm()
	const navigate = useNavigate()

	const { resetPassword } = useContext(ApiContext)
	const { loading } = useContext(AppContext)
	const { setProperties } = useContext(UserContext)

	const handleSubmit = async (e) => {
		e.preventDefault()
		// check if password and confirm password match

		const res = await resetPassword(email, values.password)

		if (res) {
			navigate('/auth/signin')
			localStorage.removeItem('email')
			reset()
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
								src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677597898/confused-face_1f615_ze6k7l.png"
								width="10%"
							/>
						</a>

						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Reset Password - AfrikTV</h2>

						<p className="mt-4 leading-relaxed text-white/90">Now, you can reset your password with the form.</p>
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
								Reset your AfrikTV password
							</h1>
						</div>
						<br />

						<div className="relative z-0 w-full mb-6 group">
							<input
								type={showPassword ? 'text' : 'password'}
								name="password"
								id="password"
								autoComplete="off"
								pattern=".{8,}"
								required
								value={values.password}
								className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								onChange={onChange}
							/>

							<div className="absolute top-2 right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
							</div>

							<label
								htmlFor="password"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Password
							</label>
						</div>

						<div className="relative z-0 w-full mb-6 group">
							<input
								type={showConfirmPassword ? 'text' : 'password'}
								name="confirmPassword"
								id="confirmPassword"
								autoComplete="off"
								className="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								pattern=".{8,}"
								// pattern="[a-zA-Z]+"
								required
								value={values.confirmPassword}
								onChange={onChange}
								onInput={check}
							/>

							<div className="absolute top-2 right-2 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
								{showConfirmPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
							</div>

							<label
								htmlFor="rePassword"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Confirm Password
							</label>
						</div>
						<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
							<button
								disabled={loading}
								onClick={handleSubmit}
								className="inline-block shrink-0 login-btn rounded-md border  px-12 py-3 text-sm font-medium text-white transition focus:outline-none "
							>
								{loading ? <CircularProgress size={20} color="inherit" /> : 'Reset Password'}
							</button>
						</div>
					</div>
				</main>
			</div>
		</section>
	)
}

export default resetpassword
