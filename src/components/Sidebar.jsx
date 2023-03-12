import React from 'react'
import cn from 'clsx'
import Icon from './Icon'
import { NavLink, useLocation } from 'react-router-dom'

const LINKS = {
	home: { icon: 'home', url: '/in' },
	billing: { icon: 'billing', url: '/in/billing' },
	activities: { icon: 'activities', url: '/in/activities' },
	settings: { icon: 'cog', url: '/in/settings' },
}

function Sidebar() {
	const location = useLocation()
	return (
		<div className="overflow-y-auto">
			<ul className="my-16 flex flex-col gap-4">
				{Object.entries(LINKS).map(([name, { icon, url }], index) => {
					const className = ({ isActive, isPending }) =>
						cn(
							'flex gap-4 items-center hover:bg-[#060825]/[0.03] px-7 py-3 rounded-xl cursor-pointer transition duration-500',
							'fill-[#757984] color-[#757984]',
							{ 'bg-[#060825]/[0.03]': isActive || isPending }
						)
					return (
						<li key={index}>
							<NavLink end to={url} className={className}>
								{({ isActive, isPending }) => {
									const iconClassName = cn('fill-[#757984]', {
										'fill-[#07092C]': isActive || isPending,
									})
									const textClassName = cn('text-[#757984] capitalize', {
										'text-[#07092C]': isActive || isPending,
									})
									return (
										<>
											<Icon name={icon} fill="red" className={iconClassName} />
											<span className={textClassName}>{name}</span>
										</>
									)
								}}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Sidebar
