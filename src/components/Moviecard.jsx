import React from 'react'
import woman from '../assets/woman-touch.png'

function Moviecard({ title, shows }) {
	return (
		<div>
			<div className="w-full px-4 lg:px-8 mb-8">
				<p className="mb-3">{title} </p>
				<div className="flex">
					{Array(shows)
						.fill()
						.map((no, index) => (
							<img
								src={woman}
								className="w-[190px] h-[120px] bg-[red] mr-3"
								alt="Movie image"
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default Moviecard
