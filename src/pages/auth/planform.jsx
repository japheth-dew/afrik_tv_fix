import React from 'react'
import './style.css'
import afrikLogo from '../../assets/afriklogo.png'

const planform = () => {
	return (
		<div>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<a href="javascript:void(0)" className="flex items-center logo">
						<img
							src={afrikLogo}
							className=""
							height="40px"
							width=""
							alt="AfrikTV Logo"
						/>
					</a>
					<div className="flex md:order-2">
			
					</div>
				</div>
			</nav>

			<div className="min-h-screen flex justify-center items-center">
				<div className="all-page">
					<div className="text-center font-semibold">
						<h1 className="text-3xl">
							<span>Choose your plan 🙈</span>
						</h1>
						<p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
							For all of these options, you can watch ad-free movies seamlessly.
							Pick any plan that works best for you.
						</p>
					</div>

					<div className="min-h-screen ">
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 p-5">
							<div className="p-8 bg-white rounded-3xl pr-16 shadow-xl">
								<h1 className="text-black font-semibold text-2xl">Basic</h1>
								<p className="pt-2 tracking-wide">
									<span className="text-black-400 align-top">$ </span>
									<span className="text-3xl font-semibold">3.99</span>
									<span className="text-black-400 font-medium">/mo</span>
								</p>
								<br />
								<div className="pt-8">
									<p className="font-semibold text-black-400 text-left">
										<span className="material-icons align-middle">
											Up to 2 devices
										</span>
									</p>
									<p className="font-semibold text-black-400 text-left pt-5">
										<span className="material-icons align-middle">
											480p resolution
										</span>
									</p>
									<p className="font-semibold text-black-400 text-left pt-5">
										<span className="material-icons align-middle">
											Download up to 5 movies in a month
										</span>
									</p>

									<a href="/profile/new" className="">
										<p className="w-full py-4 login-btn mt-8 rounded-xl text-white text-center">
											<span className="font-medium">Choose Plan</span>
										</p>
									</a>
								</div>
							</div>

							<div className="p-8 bg-gray-900 rounded-3xl text-white  ">
								<h1 className="text-white font-semibold text-2xl">Standard</h1>
								<p className="pt-2 tracking-wide">
									<span className="text-white-400 align-top">$ </span>
									<span className="text-3xl font-semibold">5.30</span>
									<span className="text-white-400 font-medium">/mo</span>
								</p>
								<div className="pt-8">
									<p className="font-semibold text-white-400 text-left pt-5">
										<span className="material-icons align-middle">
											Up to 8 devices
										</span>
									</p>

									<p className="font-semibold text-white-400 text-left pt-5">
										<span className="material-icons align-middle">
											720p video resolution
										</span>
									</p>

									<p className="font-semibold text-white-400 text-left pt-5">
										<span className="material-icons align-middle">
											Download up to 10 movies in a month
										</span>
									</p>
									
									<a href="/profile/new" className="">
										<p className="w-full py-4 border border-gray-800 mt-8 rounded-xl text-white text-center">
											<span className="font-medium">Choose Plan</span>
										</p>
									</a>
								</div>
							</div>

							<div className="p-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl text-white ">
								<h1 className="text-white font-semibold text-2xl">Premium</h1>
								<p className="pt-2 tracking-wide">
									<span className="text-white-400 align-top">$ </span>
									<span className="text-3xl font-semibold">7.99</span>
									<span className="text-white-400 font-medium">/mo</span>
								</p>

								<div className="pt-8">
									<p className="font-semibold text-white-400 text-left pt-5">
										<span className="material-icons align-middle">
											Up to 15 devices
										</span>
									</p>

									<p className="font-semibold text-white-400 text-left pt-5">
										<span className="material-icons align-middle">
											1080p video resolution
										</span>
									</p>

									<p className="font-semibold text-white-400 text-left pt-5">
										<span className="material-icons align-middle">
											Download up to 20 movies in a month
										</span>
									</p>

									<a href="/profile/new" className="">
										<p className="w-full py-4 login-btn mt-8 rounded-xl text-white text-center">
											<span className="font-medium">Choose Plan</span>
										</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
				<div className="container px-6 py-6">
					<div className="flex flex-col items-center justify-between md:flex-row">
						<a href="#">
							<img
								className="w-auto h-7"
								src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677147398/afriklogo_tbhtt5.png"
								alt=""
							/>
						</a>

						<div className="flex mt-4 md:m-0">
							<div className="-mx-4">
								<a
									href="#"
									className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
								>
									Twitter
								</a>
								<a
									href="#"
									className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
								>
									Instagram
								</a>
								<a
									href="#"
									className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
								>
									Partners
								</a>
								<a
									href="#"
									className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
								>
									Contact Us 📧
								</a>
								<a
									href="#"
									className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
								>
									We're hiring ✨
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default planform
