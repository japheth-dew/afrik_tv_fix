export const AccountSettings = () => {
  return (
    <div className="md:max-w-lg">
      <h1 className="text-2xl font-bold">Account Settings</h1>
      <div className="grid grid-cols-2 gap-4 mt-14">
        <div>
          <label className="block text-sm font-light text-gray-700 mb-3">
            First name
          </label>
          <input placeholder="" value="Opemipo" onChange={() => {}} className="p-3 border border-[#E3E0E0] bg-[#FAFAFA] text-semibold focus:outline-none rounded-lg w-full" /> 
        </div>
        <div>
          <label className="block text-sm font-light text-gray-700 mb-3">
            First name
          </label>
          <input placeholder="" value="Disu" onChange={() => {}} className="p-3 border border-[#E3E0E0] bg-[#FAFAFA] text-semibold focus:outline-none rounded-lg w-full" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-light text-gray-700 mb-3">
            Email Address
          </label>
          <input placeholder="" value="opedisu@gmail.com" onChange={() => {}} className="p-3 border border-[#E3E0E0] bg-[#FAFAFA] text-semibold focus:outline-none rounded-lg w-full" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-light text-gray-700 mb-3">
            Phone Number
          </label>
          <input placeholder="" value="234 7888888888" onChange={() => {}} className="p-3 border border-[#E3E0E0] bg-[#FAFAFA] text-semibold focus:outline-none rounded-lg w-full" />
        </div>
      </div>
      <div className="mt-7">
        <span className="border-b-2 border-[#07092C] text-[#07092C] font-medium cursor-pointer">Change Password</span>
      </div>
    </div>
  )
}