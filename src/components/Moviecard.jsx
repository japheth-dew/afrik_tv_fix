import React, { useState } from 'react'
import Moviemodal from './Moviemodal'
import './styles.css'

function MovieCard({ title }) {
	const [showModal, setShowModal] = useState(false)
	showModal ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
	return (
		<div className="ml-5 mt-12">
			<p className="text-2xl md:text-4xl font-semibold">{title}</p>
			<div className="flex overflow-y-hidden overflow-x-scroll p-5 card__posters transition-transform ">
				{Array(7)
					.fill()
					.map(() => (
						<img
							className="h-[90px] md:h-[150px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100 object-contain w-[800px] lg:max-w-[250px] inline-block"
							src="https://i.pinimg.com/564x/9a/b3/b5/9ab3b59541a9e257306d53170968f5f4.jpg"
							alt="Movie Name"
							onClick={() => setShowModal(true)}
						/>
					))}
			</div>
			{showModal && <Moviemodal click={() => setShowModal(false)} />}
		</div>
	)
}

export default MovieCard
