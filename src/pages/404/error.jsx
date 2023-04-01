import React from 'react'
import './style.css'

const Nop = () => {
	return (
		<div>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<a href="/" className="flex items-center logo">
						<img src="assets/afriklogo.png" className="" height="40px" width="" alt="AfrikTV Logo" />
					</a>
				</div>
			</nav>

			<section className="bg-white dark:bg-white-900">
				<div className="py-8 px-4 error-card mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
							404
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Aww, you're lost 😅</p>
						<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
							This is a wrong page to visit. Please, head on back to the home page.{' '}
						</p>
						<a
							href="#"
							className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
						>
							Back to Homepage
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Nop
