import { Popover, Transition, Menu } from '@headlessui/react'
import React, { Fragment } from 'react'
import Icon from './Icon'
import logoImage from '../assets/afriklogo.png'
import profileImage from '../assets/profile.png'
import clownImage from '../assets/clown.png'
import vengeImage from '../assets/venge.png'
import { useLogout } from '../lib/auth'

function Navbar() {
	const logout = useLogout();

	return (
		<nav className="sticky top-0 z-10 bg-white border-gray-200 px-2 sm:px-4 py-2.5">
			<div className="max-w-8xl flex flex-wrap items-center justify-between mx-auto">
				<span className="flex items-center logo cursor-pointer">
					<img src={logoImage} height="40px" alt="AfrikTV Logo" />
				</span>
				<div className="flex md:order-2 gap-6">
					{/* Notifications */}
					{/* <Popover className="relative">
						<>
							<Popover.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
								<Icon name="bell" className="h-8 w-8" />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute -right-6 z-10 mt-3 w-screen max-w-[calc(100vw-4rem)] transform px-4 sm:px-0 lg:max-w-lg">
									<div className="bg-white overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
										{new Array(5).fill(0).map((_, i) => (
											<div className="flex px-5 py-2 gap-4 cursor-pointer hover:bg-[#f5f5f5]" key={i}>
												<img src="assets/venge.png" className="w-20 h-20 rounded-xl" />
												<div className="flex flex-col">
													<h2 className="font-light">Reminder: new arrival</h2>
													<h2>Venge</h2>
													<small className="mt-auto font-light">2 hrs ago</small>
												</div>
											</div>
										))}
									</div>
								</Popover.Panel>
							</Transition>
						</>
					</Popover> */}
					<Menu as="div" className="relative inline-block text-left">
						<Menu.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
							<Icon name="bell" className="h-8 w-8" />
						</Menu.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute -right-6 z-10 mt-3 w-[450px] max-w-[calc(100vw-4rem)] overflow-y-auto max-h-[450px] px-4 sm:px-0 lg:max-w-lg rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								{new Array(5).fill(0).map((_, i) => (
									<Menu.Item key={i}>
										{({ active }) => (
											<div
												role="button"
												className={`${
													active ? 'bg-[#f5f5f5]' : ''
												} flex px-5 py-2 gap-4 cursor-pointer hover:bg-[#f5f5f5] w-full`}
											>
												<img
													src={vengeImage}
													className="w-20 h-20 rounded-xl"
												/>
												<div className="flex flex-col">
													<h2 className="font-light">Reminder: new arrival</h2>
													<h2>Venge</h2>
													<small className="mt-auto font-light">
														2 hrs ago
													</small>
												</div>
											</div>
										)}
									</Menu.Item>
								))}
							</Menu.Items>
						</Transition>
					</Menu>
					{/* Account */}
					<Menu as="div" className="relative inline-block text-left">
						<Menu.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
							<img className="w-8 h-8 rounded-lg" src={profileImage} />
						</Menu.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="px-1 py-1 ">
									{['Ope', 'Immanuel'].map((name) => (
										<Menu.Item key={name}>
											{({ active }) => (
												<button
													className={`${
														active ? 'bg-[#f5f5f5]' : ''
													} group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
												>
													<img
														src={clownImage}
														className="w-8 h-7 rounded-lg"
													/>
													<h2 className="font-base">{name}</h2>
												</button>
											)}
										</Menu.Item>
									))}

									<Menu.Item>
										{({ active }) => (
											<a href="/in">
												<button
													className={`${
														active ? 'bg-[#f5f5f5]' : ''
													} w-full rounded-md px-2 py-2 text-sm font-medium`}
												>
													Dashboard
												</button>
											</a>
										)}
									</Menu.Item>

									<Menu.Item>
										{({ active }) => (
											<a href="/profile/manage">
												<button
													className={`${
														active ? 'bg-[#f5f5f5]' : ''
													} w-full rounded-md px-2 py-2 text-sm font-medium`}
												>
													Manage profiles
												</button>
											</a>
										)}
									</Menu.Item>

									<Menu.Item>
										{({ active }) => (
											<a href="/movies">
												<button
													className={`${
														active ? 'bg-[#f5f5f5]' : ''
													} w-full rounded-md px-2 py-2 text-sm font-medium`}
												>
													Explore Movies
												</button>
											</a>
										)}
									</Menu.Item>
								</div>
								<div className="px-1 py-1">
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? 'bg-[#dc2626]' : ''
												} bg-red-700 text-white w-full rounded-md px-2 py-2 text-sm font-medium`}
												onClick={logout.mutate}
											>
												{logout.isLoading ? 'Logging out...' : 'Sign out'}
											</button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
