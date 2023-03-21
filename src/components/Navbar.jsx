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
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
