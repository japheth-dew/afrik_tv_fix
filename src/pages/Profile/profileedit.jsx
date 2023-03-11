import React from 'react'

function ProfileEdit() {
	const languages = ['English', 'French', 'Spanish', 'Yoruba']
	return (
		<div>
			<div className="flex flex-col justify-center items-center h-screen">
				<div className="w-[451px] mb-8">
					<div className="mb-16 text-3xl font-black">Edit Profiles</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="w-28 h-28 bg-[#F39C11] flex justify-center items-center">
							🤡
						</div>
						<div className="flex flex-col justify-between">
							<input
								className="h-16 rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0]"
								type="text"
								value={'Opemipo'}
							/>
							<p>Language:</p>
						</div>
						<button className="w-28 border outline-none border-[#E9E9E9] p-2 rounded">
							Update Icon
						</button>
						<select className="w-44 h-10 border-2 border-[#E9E9E9] rounded outline-none">
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
				<div className="w-[600px]">
					<div className="flex justify-between">
						<button className="bg-[#060825] text-white py-2 px-4 text-lg font-bold rounded-xl">
							Save Changes
						</button>
						<button className="bg-inherit text-[#060825] border-[#060825] border-2 py-3 px-6 text-lg font-bold rounded-xl">
							Cancel
						</button>
						<button className="bg-inherit text-[#060825] border-[#060825] border-2 py-3 px-6 text-lg font-bold rounded-xl">
							Delete Profile
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileEdit
