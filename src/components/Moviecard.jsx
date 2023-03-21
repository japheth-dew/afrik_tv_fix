import React, { useState } from 'react'
import "./styles.css"
import Modal from "./Modal"

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
	const [showModal, setShowModal] = useState(false)
	showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
	return(
		<div className='ml-5 mt-12 overflowhidden'>
		<h2 className='text-4xl font-semibold'>{title}</h2>
		<div className='flex overflow-y-hidden overflow-x-scroll p-5 card__posters transition-transform '>
		{Array(15).fill().map((_, i) => (<img className='h-[150px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100 object-contain' onClick={() => setShowModal(!showModal)} src="https://i.pinimg.com/474x/9a/b3/b5/9ab3b59541a9e257306d53170968f5f4.jpg" alt="Movie Image" />))}
			{/* <div className='h-[150px] min-w-[250px] mr-2.5 duration-500 hover:scale-105 hover:opacity-100  bg-[orange]'></div> */}
			
		{showModal && <Modal click={() => setShowModal(!showModal)} header={"MOVIE NAME"} desc={"WATCH NOW"} button={"PLAY"}/>}
		</div>
			

		</div>
	)
}

export default Moviecard
