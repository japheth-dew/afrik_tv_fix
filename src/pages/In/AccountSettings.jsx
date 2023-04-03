import { useState } from 'react'
import useForm from '../../hooks/useForm'
import { Input, Modal } from '../../components/ui'

export const AccountSettings = () => {
	const [values, onChange] = useForm({
		fullname: 'Disu',
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
					<Input label="Full name" name="fullname" className="col-span-2" onChange={onChange} value={values.fullname} />
					<Input label="Email Address" name="email" className="col-span-2" onChange={onChange} value={values.email} />
				</div>
				<div className="mt-7">
					<a href="/auth/resetpassword">
						<span className="border-b-2 border-[#07092C] text-[#07092C] font-medium cursor-pointer">
							Change Password
						</span>
					</a>
				</div>
			</div>
		</>
	)
}
