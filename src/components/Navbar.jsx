import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Icon from './Icon'

const ITEM_HEIGHT = 80;

function Navbar() {
	return (
		<nav className="sticky top-0 z-10 bg-white border-gray-200 px-2 sm:px-4 py-2.5">
			<div className="max-w-8xl flex flex-wrap items-center justify-between mx-auto">
				<span className="flex items-center logo cursor-pointer">
					<img src="/src/assets/afriklogo.png" height="40px" alt="AfrikTV Logo" />
				</span>
<<<<<<< HEAD
				<div className="flex gap-4 ml-auto">

					
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies..." required />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


					<div className='flex items-center'>
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
					<div className='flex items-center'>
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
=======
				<div className="flex md:order-2 gap-6">
					{/* Notifications */}
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button className={`${open ? '' : 'text-opacity-90'}`}>
									<Icon name="bell" />
								</Popover.Button>
								{/* <Popover.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute right-0 z-10 mt-3 w-80 max-w-sm transform px-2 sm:px-0 lg:max-w-md">
										<div className="max-h-[450px] afr-scrollbar overflow-y-auto rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="relative flex flex-col gap-2 bg-white py-4">
												{new Array(5).fill(0).map((_, i) => (
													<div className="flex px-5 py-2 gap-4 cursor-pointer hover:bg-[#f5f5f5] rounded" key={i}>
														<img src="/src/assets/venge.png" className="w-20 h-20 rounded-xl" />
														<div className="flex flex-col">
															<h2 className="font-light">Reminder: new arrival</h2>
															<h2>Venge</h2>
															<small className="mt-auto font-light">2 hrs ago</small>
														</div>
													</div>
												))}
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
					{/* Profile Popover */}
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button className={`${open ? '' : 'text-opacity-90'}`}>
									<img className="w-8 h-8 rounded-lg" src="/src/assets/profile.png" />
								</Popover.Button>
								{/* <Popover.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute right-0 z-50 mt-3 w-56 max-w-sm transform sm:px-0 lg:max-w-md">
										<div className="max-h-[450px] afr-scrollbar overflow-y-auto rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="relative flex flex-col gap-px bg-white py-4">
												{['Anna', 'Opemipo'].map((name, i) => (
													<div className='flex px-5 py-2 gap-4 cursor-pointer hover:bg-[#f5f5f5]' key={i}>
														<img src="/src/assets/clown.png" className="w-8 h-8 rounded-lg" />
														<h2 className="font-medium">{name}</h2>
													</div>
												))}
												<div className='flex px-5 py-2 gap-4 cursor-pointer hover:bg-[#f5f5f5]'>
													<h2 className="font-base">My Account</h2>
												</div>
												<div className='flex px-5 py-2 gap-4 cursor-pointer hover:bg-[#f5f5f5]'>
													<h2 className="font-base">Logout</h2>
												</div>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
>>>>>>> 0424d92be520485d60046ce094a34e39ffbfaf79
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
