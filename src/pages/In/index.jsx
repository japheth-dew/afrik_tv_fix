import { Route, Routes } from 'react-router-dom'
import { Activities } from './Activities'
import { Billing } from './Billing'
import { Dashboard } from './Dashboard'
import { ParentalControl } from './ParentalControl'
import { Settings } from './Settings'
import { AccountSettings } from './AccountSettings'
import { WatchLater } from './WatchLater'
import { RecentlyWatched } from './RecentlyWatched'

export const In = () => (
	<Routes>
		<Route path="" element={<Dashboard />} />
		<Route path="billing" element={<Billing />} />
		<Route path="activities" element={<Activities />} />
		<Route path="settings" element={<Settings />}>
			<Route path="" element={<AccountSettings />} />
			<Route path="parental" element={<ParentalControl />} />
		</Route>
		<Route path="watch-later" element={<WatchLater />} />
		<Route path="recently-watched" element={<RecentlyWatched />} />
	</Routes>
)
