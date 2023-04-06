import { Helmet } from 'react-helmet-async'

export default function App() {
	return (
		<div className="App">
			<div class="relative overflow-hidden">
				<div class="bg-white lg:overflow-hidden">
					<div class="mx-auto max-w-5xl lg:px-8">
						<div class="lg:grid lg:grid-cols-1">
							<div class="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
								<div class="lg:py-24">
									<h1 class="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
										<span class="block">Join </span>
										<span class="block text-indigo-500">AfrikTV's</span> Waitlist 🥳
									</h1>
									<p class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
										Explore the best African movies from all over Africa. Instantly stream movies to your device,
										wherever you are in the world. Type your email to join the waitlist.
									</p>
									<div class="mt-10 sm:mt-12">
										<div class="launchlist-widget" data-key-id="031wad" data-height="180px"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Helmet>
				<title>AfrikTV - Join the Waitlist</title>
				<script src="https://getlaunchlist.com/js/widget.js" type="text/javascript" defer />
			</Helmet>

			{/* Widget End */}
		</div>
	)
}
