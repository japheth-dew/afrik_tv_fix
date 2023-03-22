import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

function Moviemodal({ click }) {
	return (
				<div className="fixed top-[25%] left-[15%] sm:left-[25%] w-3/4 sm:w-3/5 p-4 flex flex-col justify-center items-center border border-[gray]  bg-white z-10">
					<button onClick={click}>
						<CloseIcon
							className="absolute top-3 right-3"
							style={{ color: '#060825' }}
						/>
					</button>
					<div className='w-full mt-8 h-52 bg-yellow-100 flex justify-center items-center'>MOVIE TRAILER</div>

					<h1 className='w-full my-2 text-2xl sm:text-3xl font-medium'>Red Notice</h1>
					<p className='text-base sm:text-lg'>After his parents were brutally murdered, David tries to find a way to exert revenge on those responsible for their deaths</p>
					<div className='mt-2'>
						<button className=' py-2.5 px-24 bg-[#060825] text-white flex justify-center items-center  text-lg font-bold rounded-xl'>Play</button>
					</div>
				</div>
	)
}

export default Moviemodal
