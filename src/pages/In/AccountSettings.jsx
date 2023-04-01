import { useState } from 'react'
import useForm from '../../hooks/useForm'
import { Input, Modal } from '../../components/ui'

export const AccountSettings = () => {
	const [values, onChange] = useForm({
		firstName: 'Opemipo',
		lastName: 'Disu',
		email: 'opemipodisu@gmail.com',
		phone: '08123456789',
	})
	const [values2, onChange2] = useForm()
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<div className="md:max-w-lg">
				<h1 className="text-2xl font-bold">Account Settings</h1>
				<div className="grid grid-cols-2 gap-4 mt-14">
					<Input label="First name" name="firstName" onChange={onChange} value={values.firstName} />
					<Input label="Last name" name="lastName" onChange={onChange} value={values.lastName} />
					<Input label="Email Address" name="email" className="col-span-2" onChange={onChange} value={values.email} />
					<Input label="Phone Number" name="phone" className="col-span-2" onChange={onChange} value={values.phone} />
				</div>
				<div className="mt-7">
					<span
						onClick={() => setShowModal(true)}
						className="border-b-2 border-[#07092C] text-[#07092C] font-medium cursor-pointer"
					>
						Change Password
					</span>
				</div>
			</div>
			{/* Change Password Modal */}
			<Modal isOpen={showModal} closeModal={() => setShowModal(false)} title="Change Password">
				<div className="mt-4">
					<p>You're required to share your old password for additional security. Forgotten your password?</p>
					<form className="mt-8 flex flex-col gap-6">
						<Input label="Current Password" name="currentPassword" type="password" onChange={onChange2} />
						<Input label="New Password" name="newPassword" type="password" onChange={onChange2} />
						<Input label="Confirm New Password" name="confirmNewPassword" type="password" onChange={onChange2} />
					</form>
					<div className="mt-8 flex justify-center">
						<button
							onClick={() => setShowModal(false)}
							className="bg-[#060825] text-white text-medium px-5 py-3 rounded-lg"
						>
							Save changes
						</button>
					</div>
				</div>
			</Modal>
		</>
	)
}
