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
import Chooseprofile from './pages/Profile/chooseprofile'
import Newprofile from './pages/Profile/newprofile'

import Moviepage from './pages/Movies/moviepage'

import Dashboard from './pages/userdashboard/billing'
import Planform from './pages/auth/planform'
import Billing from './pages/auth/billing'
import {
	Root as In,
	Dashboard as InDashboard,
	Billing as InBilling,
	Settings,
	Activities,
	WatchLater,
	RecentlyWatched,
	AccountSettings,
	ParentalControl,
} from './pages/In'
import Nop from './pages/404/error'

// import ResetPassword from './pages/auth/resetpassword'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Homepage />} />
			<Route path="/auth/signin" element={<SignIn />} />
			<Route path="/auth/signup" element={<SignUp />} />
			<Route path="/auth/otp" element={<Otp />} />
			<Route path="/auth/forgotpassword" element={<Forgotpassword />} />
			<Route path="/profile/manageprofile" element={<Manageprofile />} />
			<Route path="/profile/chooseprofile" element={<Chooseprofile />} />
			<Route path="/profile/profileedit" element={<ProfileEdit />} />
			<Route path="/profile/new" element={<Newprofile />} />
			<Route path="/userdashboard/billing" element={<Dashboard />} />
			<Route path="/auth/planform" element={<Planform />} />
			<Route path="/auth/billing" element={<Billing />} />
			<Route path="/movie/moviepage" element={<Moviepage />} />
			<Route path="in" element={<In />}>
				<Route path="" element={<InDashboard />} />
				<Route path="billing" element={<InBilling />} />
				<Route path="activities" element={<Activities />} />
				<Route path="settings" element={<Settings />}>
					<Route path="" element={<AccountSettings />} />
					<Route path="parental" element={<ParentalControl />} />
				</Route>
				<Route path="watch-later" element={<WatchLater />} />
				<Route path="recently-watched" element={<RecentlyWatched />} />
			</Route>
			<Route path="*" element={<Nop />} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
