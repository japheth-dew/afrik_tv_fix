import React from 'react'
import "./styles.css"
// import woman from '../assets/woman-touch.png'

// function Moviecard({ title, shows }) {
// 	return (
// 		<div>
// 			<div className="w-full px-4 lg:px-8 mb-8">
// 				<h2 className="mb-3">{title} </h2>
// 				<div className="flex">
// 					{Array(shows)
// 						.fill()
// 						.map((no, index) => (
// 							<img
// 								src={woman}
// 								className="w-[190px] h-[120px] bg-[red] mr-3"
// 								alt="Movie image"
// 							/>
// 						))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

function Moviecard({title}) {
	return(
		<div className='ml-5 mt-12'>
		<h2 className='text-4xl font-semibold'>{title}</h2>
		<div className='flex overflow-y-hidden overflow-x-scroll p-5 card__posters transition-transform '>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100 bg-[yellow]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100 bg-[black]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[red]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[purple]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[orange]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[gold]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[purple]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[brown]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[gray]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[yellow]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[orange]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[pink]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[red]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[purple]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[red]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[black]'></div>
			<div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[orange]'></div>
		</div>

		</div>
	)
}

export default Moviecard
