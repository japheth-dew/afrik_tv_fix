import React, { useState } from 'react'
// import AddIcon from '@mui/icons-material/Add';
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
// import Select from "react-dropdown-select";

function Manageprofile() {
	const [hover, setHover] = useState(false)
	const [hover2, setHover2] = useState(false)
	return (
		<div>
			<Navbar />
			<div className="flex flex-col justify-center items-center mt-10">
				<div className="mb-16 text-3xl font-black">Manage Profile</div>
				<div className="flex gap-16 w-[80%] justify-center">
					<Link to={'/profile/profileedit'}>
						<div>
							<div
								className="w-52 h-48 flex justify-center items-center text-4xl"
								onMouseOver={() => {
									setHover2(true)
								}}
								onMouseOut={() => {
									setHover2(false)
								}}
							>
								<div className="w-full h-full bg-gray-900 hover:opacity-80"></div>
								<p className={`absolute ${hover2 && 'opacity-60'}`}>😊</p>
								{hover2 && (
									<EditIcon
										className="absolute"
										style={{ color: 'white', width: '60px' }}
									/>
								)}
							</div>
							<p className="text-3xl text-center font-bold mt-4">Obiabo</p>
						</div>
					</Link>
					<Link to={'/profile/profileedit'}>
						<div>
							<div
								className="w-52 h-48 flex justify-center items-center text-4xl "
								onMouseOver={() => {
									setHover(true)
								}}
								onMouseOut={() => {
									setHover(false)
								}}
							>
								<div className="w-full h-full bg-[#F39C11] hover:bg-[#6a4407] "></div>
								<p className={`absolute ${hover && 'opacity-60'}`}> 🤡</p>
								{hover && (
									<EditIcon
										className="absolute"
										style={{ color: 'white', width: '60px' }}
									/>
								)}
							</div>
							<p className="text-3xl text-center font-bold mt-4">Disu</p>
						</div>
					</Link>
					{/* <div className="w-52 h-48 bg-inherit flex justify-center items-center text-4xl">
						<Link to={'/profile/new'}>
							<div>
								<div className="text-center ">
									<AddIcon style={{ fontSize: 60 }} />
								</div>
								<p className="text-base text-center font-bold">Add user</p>
							</div>
						</Link>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Manageprofile
