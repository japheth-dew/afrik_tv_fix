import React from 'react'
import CloseIcon from '@mui/icons-material/Close'


function Modal({ click, header, desc, button }) {
	return (
				<div className="fixed top-[35%] left-[35%] w-[30em] h-[18em] flex flex-col justify-center items-center border border-[gray] rounded-[20px] bg-white">
					<div>
						<button onClick={click}>
							<CloseIcon
								className="absolute top-3 right-3"
								style={{ color: '#060825' }}
							/>
						</button>
						<p className="font-bold mb-4">{header}</p>
						<p>{desc}</p>
						<label
							htmlFor="file-input"
							className=" overflow-hidden relative inline-block cursor-pointer"
						>
							<span className="w-[300px] py-5 px-3 mt-9 bg-[#060825] text-white flex justify-center items-center  text-lg font-bold rounded-xl">
								{button}
							</span>
							<input
								className="absolute top-0 right-0 m-0 p-0 cursor-pointer opacity-0 "
								id="file-input"
								type="file"
								accept="image/*"
								aria-label="Upload a Photo"
							/>
						</label>
					</div>
				</div>
	)
}

export default Modal
