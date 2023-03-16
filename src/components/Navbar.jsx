import React from 'react'


function Navbar() {
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
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
	
							{' '}
					
<button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
    <span class="sr-only">Open user menu</span>
    <img class="w-8 h-8 rounded-full" src="./src/assets/stassss" alt="userphoto"/>
</button>


<div id="dropdownAvatar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Username</div>
      <div class="font-medium truncate">Other information</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Link</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Link</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Link</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Link</a>
    </div>
</div>

					
					</div>
				</div>
			</nav>
	)
}

export default Navbar
