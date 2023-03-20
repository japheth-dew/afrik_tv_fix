import { useState } from "react";
import Input from "../../components/Input"
import Modal from "../../containers/Modal"
import useForm from "../../hooks/useForm";

export const AccountSettings = () => {
  const [showModal, setShowModal] = useState(false);
  // Account Settings Form
  const [values, onChange] = useForm({
    firstName: 'Opemipo',
    lastName: 'Disu',
    email: 'opedisu@gmail.com',
    phone: '234 7888888888'
  });
  // Change Password Form
  const [values2, onChange2] = useForm();
  return (
    <>
      <div className="md:max-w-lg">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <div className="grid grid-cols-2 gap-4 mt-14">
          <Input label="First name" name="firstName" value={values.firstName} onChange={onChange} />
          <Input label="Last name" name="lastName" value={values.lastName} onChange={onChange} />
          <Input label="Email Address" name="email" value={values.email} onChange={onChange} className="col-span-2" />
          <Input label="Phone Number" name="phone" value={values.phone} onChange={onChange} className="col-span-2" />
        </div>
        <div className="mt-7">
          <span className="border-b-2 border-[#07092C] text-[#07092C] font-medium cursor-pointer" onClick={() => setShowModal(true)}>Change Password</span>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title="Change Password">
        <div className="mt-4">
          <p>
            You're required to share your old password for additional security. Forgotten your password?
          </p>
          <form className="mt-6 flex flex-col gap-4">
            <Input label="Old Password" name="old_password" onChange={onChange2} />
            <Input label="New Password" name="new_password" onChange={onChange2} />
            <Input label="Confirm Password" name="confirm_password" onChange={onChange2} />
            <div className="flex mt-10 justify-center">
              <button className="py-3 px-6 bg-[#060825] text-white rounded-xl">Save changes</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}