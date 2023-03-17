import React from 'react'
import Navbar from '../../components/Navbar'
import Moviecard from '../../components/Moviecard'
import './moviestyle.css'

function Moviepage() {
	return (
		<div>
			<div>
				<Navbar />
				<div class="bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
					<div className=" my-80 mx-4 lg:mx-8 mb-8">
						<div>
							<p className="text-7xl font-bold ">Movie Title</p>
							<p className="my-2">No.1 on movies today</p>
							<p className="mb-4 movie_des">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
								repellendus soluta corrupti ducimus omnis, dolorem, quo
								repudiandae, sed delectus quisquam quod reprehenderit sunt modi
								facere.
							</p>
							<div className="flex ">
							<button type="button" class="text-white-900 bg-white border movie-btn focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Play</button>
							<button type="button" class="text-white-900 bg-white border movie-btn focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Watch Later</button>

							</div>
						</div>
						<div></div>
					</div>
				</div>
				<Moviecard title={'Top 10 movies in Africa Today'} shows={6} />
				<Moviecard title={'Continue Watching'} shows={2} />
				<Moviecard title={'Adult Animations'} shows={5} />
				<Moviecard title={'Anime'} shows={6} />
				<Moviecard title={'Crime and TV shows'} shows={4} />
			</div>
		</div>
	)
}

export default Moviepage
