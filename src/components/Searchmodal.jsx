import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

export default function MyModal() {
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<>
			<div className="">
				<a href="#" className="gosearchbtn" onClick={openModal}>
					<img
						src="https://em-content.zobj.net/thumbs/320/apple/325/face-with-monocle_1f9d0.png"
						className="search-emoji"
					/>
				</a>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										Search Movie 🙈{' '}
									</Dialog.Title>
									<div className="mt-2">
											<label
												htmlFor="default-search"
												className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
											>
												Search
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<SearchIcon />
												</div>
												<input
													type="search"
													id="default-search"
													className="block w-full p-4 pl-10 text-sm text-black-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
													placeholder="Search African Movie here..."
												/>
												<a href="/movie/searchresults">
													<button
														type="submit"
														className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:focus:ring-blue-800"
													>
														Search
													</button>
												</a>
											</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
