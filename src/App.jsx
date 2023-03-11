import React from 'react'
import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
} from 'react-router-dom'
import Homepage from './pages/Home/homepage'
import SignIn from './pages/auth/signin'
import SignUp from './pages/auth/signup'
import Otp from './pages/auth/otp'
import Forgotpassword from './pages/auth/forgotpassword'

import Manageprofile from './pages/Profile/manageprofile'
import ProfileEdit from './pages/Profile/profileedit'

import Dashboard from './pages/userdashboard/billing'
import Planform from './pages/auth/planform'
import Billing from './pages/auth/billing'
import { Root as In, Dashboard as InDashboard, Billing as InBilling, Settings, Activities, WatchLater } from './pages/In'
import Nop from './pages/404/error'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Homepage />} />
			<Route path="/auth/signin" element={<SignIn />} />
			<Route path="/auth/signup" element={<SignUp />} />
			<Route path="/auth/otp" element={<Otp />} />
			<Route path="/auth/forgotpassword" element={<Forgotpassword />} />
			<Route path="/profile/manageprofile" element={<Manageprofile />} />
			<Route path="/profile/profileedit" element={<ProfileEdit />} />
			<Route path="/userdashboard/billing" element={<Dashboard />} />
			<Route path="/auth/planform" element={<Planform />} />
			<Route path="/auth/billing" element={<Billing />} />
			<Route path="in" element={<In />}>
				<Route path="" element={<InDashboard />} />
				<Route path="billing" element={<InBilling />} />
				<Route path="activities" element={<Activities />} />
				<Route path="settings" element={<Settings />} />
				<Route path="watch-later" element={<WatchLater />} />
			</Route>
			<Route path="*" element={<Nop />} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
