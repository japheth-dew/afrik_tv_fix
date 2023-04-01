import React, { useState } from 'react'
import Icon from '../../components/Icon'
import { NavLink } from 'react-router-dom'
import Card from '../../components/Card'
import { Modal } from '../../components/ui'

const pricing = [
	{ type: 'normal', price: 2500, per: 'month' },
	{ type: 'kids', price: 1500, per: 'month' },
	{ type: 'premium', price: 3500, per: 'month' },
]

export const Billing = () => {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<section className="max-w-4xl ml-16 lg:ml-0">
				<header className="flex flex-gap items-center gap-6 justify-between">
					<div className="flex flex-gap items-center gap-6">
						<NavLink to="/in">
							<Icon name="back" />
						</NavLink>
						<h2 className="font-bold text-xl">Billings</h2>
					</div>
					<button onClick={() => setShowModal(true)} className="border border-[#E9E9E9] py-2 px-7 rounded-md">
						Add Card
					</button>
				</header>
				<div className="mt-8">
					<span>Active card</span>
					<div className="flex flex-wrap gap-8 mt-4">
						<Card className="bg-[#07092C] text-white flex flex-col justify-between">
							<span>Opemipo Disu</span>
							<h2 className="text-xl font-bold tracking-widest">12345*****67890</h2>
							<span className="text-sm">12/24</span>
						</Card>
					</div>
				</div>
				<div className="mt-20">
					<span>Pricing</span>
					<div className="flex flex-wrap gap-8 mt-4">
						{pricing.map((plan) => (
							<div className="px-16 py-8 rounded-2xl afr-shadow cursor-pointer" key={plan.type}>
								<h2 className="text-xl font-bold capitalize text-center">{plan.type}</h2>
								<div className="capitalize text-center mt-4">
									N{plan.price}
									<br />
									Per <span className="capitalize">{plan.per}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Modal isOpen={showModal} closeModal={() => setShowModal(false)} title="Add Card">
				<div className="mt-4">
					<form className="mt-8 flex flex-col gap-6">
						<input type="text" placeholder="Card Number" className="border border-[#E9E9E9] px-4 py-3 rounded-lg" />
						<div className="flex flex-wrap gap-4">
							<input type="text" placeholder="MM/YY" className="border border-[#E9E9E9] px-4 py-3 rounded-lg" />
							<input type="text" placeholder="CVV" className="border border-[#E9E9E9] px-4 py-3 rounded-lg" />
						</div>
						<input type="text" placeholder="Name on Card" className="border border-[#E9E9E9] px-4 py-3 rounded-lg" />
						<button className="bg-[#07092C] text-white py-3 rounded-lg">Add Card</button>
					</form>
				</div>
			</Modal>
		</>
	)
}
