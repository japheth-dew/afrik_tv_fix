import { NavLink, Outlet } from 'react-router-dom'
import Icon from '../../components/Icon'

const LINKS = [
	{
		label: 'Account Settings',
		desc: 'Personal Information',
		to: '',
		icon: 'person',
	},
	{
		label: 'Parental Controls',
		desc: 'Managed signed-in profiles',
		to: 'parental',
		icon: 'person',
	},
]

export const Settings = () => {
	return (
		<section className="flex flex-col gap-7 md:flex-row mb-8 ml-16 lg:ml-0">
			<div className="w-full md:w-[19.5rem] max-w-full">
				<header className="flex flex-gap items-center gap-6 justify-between">
					<div className="flex flex-gap items-center gap-6">
						<NavLink to="/in">
							<Icon name="back" />
						</NavLink>
						<h2 className="font-bold text-xl">Settings</h2>
					</div>
				</header>
				<div className="bg-[#07092C] px-6 py-5 mt-10 rounded-xl text-white">
					<h2 className="font-bold text-lg">Premium Subscription</h2>
					<p className="text-sm mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
					<button className="w-full font-medium mt-8 py-2 bg-white rounded-md text-[#07092C]">Change Plan</button>
				</div>
				<div className="mt-10">
					{LINKS.map(({ label, desc, to, icon }) => (
						<NavLink key={to} to={to} className="flex flex-row gap-6 items-start gap-2 py-5 border-b border-[#E9E9E9]">
							<span className="w-9 h-9 flex justify-center items-center rounded-lg bg-[#F2F2F2] text-white mt-2">
								<Icon name={icon} />
							</span>
							<div className="grow">
								<div className="text-lg">{label}</div>
								<p className="text-sm">{desc}</p>
							</div>
							<span className="self-center">
								<Icon name="chevronRight" />
							</span>
						</NavLink>
					))}
				</div>
			</div>
			<div className="md:w-px md:bg-[#E9E9E9]"></div>
			<div className="grow">
				<Outlet />
			</div>
		</section>
	)
}
