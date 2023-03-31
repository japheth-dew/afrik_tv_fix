import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import Icon from '../../components/Icon'
import { Disclosure, Transition } from '@headlessui/react'
import profileImage from '../../assets/profile.png'

export const ParentalControl = () => {
	return (
		<div className="md:max-w-lg">
			<h1 className="text-2xl font-bold">Parental Controls</h1>
			<div className="mt-5">
				{[0, 1].map((item) => (
					<Disclosure>
						<Disclosure.Button className="py-2 w-full">
							<div className="flex flex-row gap-5 items-start gap-2 cursor-pointer">
								<img
									className="w-16 h-16 rounded-lg cover"
									src={profileImage}
								/>
								<div className="flex flex-col items-start gap-px grow">
									<h2 className="font-bold text-lg">Opemipo Disu</h2>
									<div className="text-[#757984]">All maturity ratings</div>
								</div>
								<span className="self-center transform rotate-90 ui-open:-rotate-90">
									<Icon name="chevronRight" />
								</span>
							</div>
						</Disclosure.Button>
						<Transition
							enter="transition duration-100 ease-out"
							enterFrom="transform opacity-0 -translate-y-1"
							enterTo="transform opacity-100 translate-y-0"
							leave="transition duration-75 ease-out"
							leaveFrom="transform opacity-100 -translate-y-0"
							leaveTo="transform opacity-0 translate-y-1"
						>
							<Disclosure.Panel className="text-gray-500">
								<div className="my-4 xl:pl-[84px]">
									<div className="flex justify-between">
										<div className="flex flex-col gap-px">
											<div>Language used</div>
											<div className="text-[#757984] text-sm">English</div>
										</div>
										<button className="border border-[#E9E9E9] py-2 px-7 rounded-md">
											Change
										</button>
									</div>
									<div className="grid grid-cols-2 gap-2 mt-6">
										<div className="flex items-center gap-3">
											{/* Check box */}
											<Checkbox defaultChecked />
											<div className="text-[#07092C]">View Restriction</div>
										</div>
										<div className="flex items-center gap-3">
											{/* Check box */}
											<Checkbox defaultChecked />
											<div className="text-[#07092C]">Autoplay Episodes</div>
										</div>
										<div className="flex items-center gap-3">
											{/* Check box */}
											<Checkbox defaultChecked />
											<div className="text-[#07092C]">Lock Profile</div>
										</div>
										<div className="flex items-center gap-3">
											{/* Check box */}
											<Checkbox defaultChecked />
											<div className="text-[#07092C]">All Maturing Rating</div>
										</div>
									</div>
								</div>
							</Disclosure.Panel>
						</Transition>
					</Disclosure>
				))}
			</div>
		</div>
	)
}
