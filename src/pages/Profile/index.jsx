import { Route, Routes } from 'react-router-dom'
import Chooseprofile from './chooseprofile'
import Manageprofile from './manageprofile'
import Newprofile from './newprofile'
import ProfileEdit from './profileedit'

export const Profile = () => (
	<Routes>
		<Route path="/" element={<Manageprofile />} />
		<Route path="/edit" element={<ProfileEdit />} />
		<Route path="/new" element={<Newprofile />} />
		<Route path="/choose" element={<Chooseprofile />} />
	</Routes>
)
