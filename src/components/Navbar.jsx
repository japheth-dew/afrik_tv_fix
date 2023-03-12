import React from 'react'

function Navbar() {
	return (
		<nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 bg-white/95">
			<div className="max-w-8xl mx-auto">
				<div className="py-6 lg:px-8 mx-4 lg:mx-0">
					<img
						src="/src/assets/afrik.png"
						className=""
						height="40px"
						width=""
						alt="AfrikTV Logo"
					/>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
