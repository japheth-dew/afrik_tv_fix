import React from 'react'
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
// import Select from "react-dropdown-select";

function Manageprofile() {
	return (
		<div>
			<div className="flex flex-col justify-center items-center h-screen">
				<div className="mb-16 text-3xl font-black">Choose Profile</div>
				<div className="grid md:grid-cols-3 grid-cols-2 gap-16 w-[80%] justify-items-center">
					<Link to={'/'}>
						<div>
							<div className="w-52 h-48 bg-gray-900 flex justify-center items-center text-4xl">
								😊
							</div>
							<p className="text-3xl text-center font-bold mt-4">Obiabo</p>
						</div>
					</Link>
					<Link to={'/'}>
						<div>
							<div className="w-52 h-48 bg-[#F39C11] hover:bg-[#6a4407] flex justify-center items-center text-4xl ">
								🤡
							</div>
							<p className="text-3xl text-center font-bold mt-4">Disu</p>
						</div>
					</Link>
					<div className="w-52 h-48 bg-inherit flex justify-center items-center text-4xl">
						<Link to={'/profile/new'}>
							<div>
								<div className="text-center ">
									<AddIcon style={{ fontSize: 60 }} />
								</div>
								<p className="text-base text-center font-bold">Add user</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Manageprofile
