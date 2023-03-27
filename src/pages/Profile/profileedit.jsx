import React, { useState } from 'react'
import Modal from '../../components/Modal'

function ProfileEdit() {
	const languages = ['English', 'French', 'Spanish', 'Yoruba']
	const [isClicked, setIsClicked] = useState(false)
	const [userName, setUserName] = useState('')
	const [active, setActive] = useState('')

	return (
		<div>
			<div
				className={`flex flex-col justify-center items-center mx-4 md:mx-0 h-screen `}
			>
				<div
					className={`md:w-[451px] w-full mb-8 ${isClicked && 'opacity-60'}`}
				>
					<div className="mb-16 text-3xl font-black">Edit Profiles</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="w-28 h-28 bg-[#F39C11] flex justify-center items-center">
							🤡
						</div>
						<div className="flex flex-col justify-between">
							<input
								className="h-16 rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0]"
								type="text"
								value={userName}
								onChange={(e) => {
									setUserName(e.target.value)
								}}
							/>
							<p>Language:</p>
						</div>
						<button
							className="w-28 border outline-none border-[#E9E9E9] p-2 rounded"
							onClick={() => {
								setIsClicked(true)
							}}
						>
							Update Icon
						</button>
						<select className="w-42 h-10 border-2 border-[#E9E9E9] rounded outline-none">
							{languages.map((lang) => (
								<option>{lang}</option>
							))}
						</select>
					</div>
					<div className="mt-16 mb-5 text-3xl font-black">
						Maturity Settings
					</div>
					<div className="border w-full border-[#E9E9E9] mb-10"></div>
					<div className="grid grid-cols-2 gap-x-px  gap-y-6">
						<div className="">
							<input className="mr-3" type="checkbox" name="" id="" />
							<span>All Maturity Ratings</span>
						</div>
						<div className="justify-self-end">
							<input className="mr-3" type="checkbox" name="" id="" />
							<span>Autoplay Episodes</span>
						</div>
						<div className="">
							<input className="mr-3" type="checkbox" name="" id="" />
							<span>Autoplay Previews</span>
						</div>
						<div className="justify-self-end">
							<input className="mr-3" type="checkbox" name="" id="" />
							<span>All Maturity Rating</span>
						</div>
					</div>
				</div>
				<div
					className={`flex justify-between h-[40px] w-full md:w-[600px] ${
						isClicked && 'opacity-60'
					}`}
				>
					<button
						className={`text-sm flex justify-center items-center px-3 md:text-lg font-bold rounded-xl ${
							active === '1'
								? 'bg-[#060825] text-white'
								: 'bg-white text-[#060825] border-[#060825] border-2 rounded-xl'
						}`}
						id="1"
						onClick={(e) => {
							setActive(e.target.id)
						}}
					>
						Save Changes
					</button>
					<button
						className={`text-sm border-2  px-3 md:text-lg font-bold rounded-xl flex justify-center items-center  ${
							active === '2'
								? 'bg-[#060825] text-white'
								: 'bg-white text-[#060825] border-[#060825] border-2 rounded-xl'
						}`}
						id="2"
						onClick={(e) => {
							setActive(e.target.id)
						}}
					>
						Cancel
					</button>
					<button
						className={`text-sm border-2 bg-red-700 text-white  px-3 md:text-lg font-bold rounded-xl flex justify-center items-center  ${
							active === '3'
								? 'bg-[#b91c1c] text-white'
								: ''
						}`}
						id="3"
						onClick={(e) => {
							setActive(e.target.id)
						}}
					>
						Delete Profile
					</button>
				</div>
				{isClicked && (
					<Modal
						click={() => {
							setIsClicked(false)
						}}
					/>
				)}
			</div>
		</div>
	)
}

export default ProfileEdit
