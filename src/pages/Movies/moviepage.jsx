import React from 'react'
import Navbar from '../../components/Navbar'
import Moviecard from '../../components/Moviecard'
import './moviestyle.css'

function Moviepage() {
	return (
		<div>
			<div>
				<Navbar />

				<div
  class="bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
				<div className=" my-60 mx-4 lg:mx-8 mb-8">
					<div>
						<p className="text-5xl font-bold ">Movie Title</p>
						<p className="my-2">No.1 on movies today</p>
						<p className="mb-4 movie_des">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
							repellendus soluta corrupti ducimus omnis, dolorem, quo
							repudiandae, sed delectus quisquam quod reprehenderit sunt modi
							facere.
						</p>
						<div className="w-40 flex justify-between">
							<button className="bg-white text-black p-2 border border-black rounded">
								Play
							</button>
							<button className="bg-white text-black p-2 border border-black rounded">
								More Info
							</button>
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
