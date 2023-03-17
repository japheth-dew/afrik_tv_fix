import React, { useState } from 'react'

function Navbar() {
	const [toggle, setToggle] = useState(false)
	return (
		<nav className="sticky top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<a href="javascript:void(0)" className="flex items-center logo">
					<img
						src="/src/assets/afriklogo.png"
						className=""
						height="40px"
						width=""
						alt="AfrikTV Logo"
					/>
				</a>
				<div className="flex md:order-2">

        <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button"> 
<img src="/src/assets/icons/notification.png" class="w-6 h-6" aria-hidden="true" />
<div class="relative flex">
</div>
</button>

<div id="dropdownNotification" class="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton">
  <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
      Notifications
  </div>
  <div class="divide-y divide-gray-100 dark:divide-gray-700">
    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div class="flex-shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
        <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
          <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
        </div>
      </div>
      <div class="w-full pl-3">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New movie from <span class="font-semibold text-gray-900 dark:text-white">AfrikTV</span>: Bla bla bla</div>
          <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
      </div>
    </a>
    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div class="flex-shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-2.jpg" alt="Joseph image" />
        <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
          <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
        </div>
      </div>
      <div class="w-full pl-3">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Opemipo</span> bla bla <span class="font-medium text-gray-900 dark:text-white">moviee</span> just dropped</div>
          <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
      </div>
    </a>
    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div class="flex-shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
        <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
          <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
      <div class="w-full pl-3">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Watch later</span> hdwnsqejwiwfi <span class="font-medium text-gray-900 dark:text-white">hsjqdhdhhn</span> lgededjdiqdiqj</div>
          <div class="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
      </div>
    </a>
    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div class="flex-shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-4.jpg" alt="Leslie image" />
        <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800">
          <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
      <div class="w-full pl-3">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Recently added</span> movies bla bla</div>
          <div class="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
      </div>
    </a>
    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div class="flex-shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-5.jpg" alt="Robert image" />
        <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
          <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
        </div>
      </div>
      <div class="w-full pl-3">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Opemipo</span> added movie</div>
          <div class="text-xs text-blue-600 dark:text-blue-500">3 hours ago</div>
      </div>
    </a>
  </div>
  <a href="#" class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
    <div class="inline-flex items-center ">
      <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
        View all
    </div>
  </a>
</div>



					<button
						id="dropdownUserAvatarButton"
						data-dropdown-toggle="dropdownAvatar"
						class="flex bg-white mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
						type="button"
						onClick={() => {
							setToggle(!toggle)
						}}
					>
						<span class="sr-only">Open user menu</span>
						<img
							class="w-8 h-8 rounded-full"
							src="./src/assets/stassss"
						/>
					</button>
					<div
						id="dropdownAvatar"
						class={`z-10 absolute right-5 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600 dark:divide-gray-600 ${
							!toggle ? 'block' : 'hidden'
						}`}
					>
						<div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
							<div>Username</div>
							<div class="font-medium truncate">Other information</div>
						</div>
						<ul
							class="py-2 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownUserAvatarButton"
						>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Link
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Link
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Link
								</a>
							</li>
						</ul>
						<div class="py-2">
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Link
							</a>
						</div>
					</div>
			



</div>
			</div>
		</nav>
	)
}

export default Navbar
