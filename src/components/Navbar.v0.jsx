import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import useMenu from '../hooks/useMenu'
import Icon from './Icon'

const ITEM_HEIGHT = 80;
const PAPER_PROPS = {
	style: {
		maxHeight: ITEM_HEIGHT * 4.5,
	},
	elevation: 0,
	sx: {
		boxShadow: '0px 4px 34px 0px rgba(117, 121, 132, 0.19)',
		mt: 1.5,
		'& .MuiAvatar-root': {
			width: 32,
			height: 32,
			ml: -0.5,
			mr: 1,
		},
		'&:before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			right: 14,
			width: 10,
			height: 10,
			bgcolor: 'background.paper',
			transform: 'translateY(-50%) rotate(45deg)',
			zIndex: 0,
		},
	},
}

function Navbar() {
	const [openBell, bellMenu, handleBellClick, handleBellClose] = useMenu();
	const [openUser, userMenu, handleUserClick, handleUserClose] = useMenu();

	return (
		<nav className="sticky top-0 z-10 bg-white border-gray-200 px-2 sm:px-4 py-2.5">
			<div className="max-w-8xl flex flex-wrap items-center justify-between mx-auto">
				<span className="flex items-center logo cursor-pointer">
					<img
						src="/src/assets/afriklogo.png"
						className=""
						height="40px"
						width=""
						alt="AfrikTV Logo"
					/>
				</span>


				<div class="flex md:order-2">





					<div>






						<button
							id="basic-button"
							className="p-0"
							aria-controls={openBell ? 'basic-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={openBell ? 'true' : undefined}
							onClick={handleBellClick}
						>
							<Icon name="bell" />
						</button>
						<Menu
							id="basic-menu"
							anchorEl={bellMenu}
							open={openBell}
							onClose={handleBellClose}
							MenuListProps={{ 'aria-labelledby': 'basic-button' }}
							className="shadow px-5 py-4"
							PaperProps={PAPER_PROPS}
						>
							<div className="flex flex-col gap-4">
								{new Array(5).fill(0).map((_, i) => (
									<div className="flex px-5 py-2 gap-4 cursor-pointer hover:bg-[#f5f5f5]" key={i}>
										<img src="/src/assets/venge.png" className="w-20 h-20 rounded-xl" />
										<div className="flex flex-col">
											<h2 className="font-light">Reminder: new arrival</h2>
											<h2>Venge</h2>
											<small className="mt-auto font-light">2 hrs ago</small>
										</div>
									</div>
								))}
							</div>
						</Menu>
					</div>
					<div>
						<button
							id="basic-button"
							aria-controls={openUser ? 'basic-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={openUser ? 'true' : undefined}
							onClick={handleUserClick}
						>
							<img className="w-8 h-8 rounded-lg" src="/src/assets/profile.png" />
						</button>
						<Menu
							id="basic-menu"
							anchorEl={userMenu}
							open={openUser}
							onClose={handleUserClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
							PaperProps={PAPER_PROPS}
						>
							<MenuItem onClick={handleUserClose} className="flex gap-4 hover:bg-transparent">
								<img src="/src/assets/clown.png" className="w-8 h-8 rounded-lg" />
								<h2 className="font-light">Anna</h2>
							</MenuItem>
							<MenuItem onClick={handleUserClose} className="flex gap-4">
								<img src="/src/assets/clown.png" className="w-8 h-8 rounded-lg" />
								<h2 className="font-light">Immanuel</h2>
							</MenuItem>
							<MenuItem onClick={handleUserClose} className="flex gap-4">
								<img src="/src/assets/clown.png" className="w-8 h-8 rounded-lg" />
								<h2 className="font-light">Opemipo</h2>
							</MenuItem>
							<MenuItem onClick={handleUserClose}>My account</MenuItem>
							<MenuItem onClick={handleUserClose}>Explore Movies</MenuItem>
							<MenuItem onClick={handleUserClose}>Logout</MenuItem>
						</Menu>
					</div>
				</div>


			</div>
		</nav>
	)
}

export default Navbar
