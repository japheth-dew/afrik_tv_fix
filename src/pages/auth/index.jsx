import SignIn from './signin'
import SignUp from './signup'
import Otp from './otp'
import ForgotPassword from './forgotpassword'
import ResetPassword from './resetpassword'
import { Route, Routes } from 'react-router-dom'

export const Auth = () => (
	<Routes>
		<Route path="login" element={<SignIn />} />
		<Route path="signup" element={<SignUp />} />
		<Route path="otp" element={<Otp />} />
		<Route path="reset" element={<ResetPassword />} />
		<Route path="forgot" element={<ForgotPassword />} />
	</Routes>
)
