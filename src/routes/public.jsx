import { Outlet } from 'react-router-dom'
import { Auth } from '../pages/Auth'

const Public = ({ children }) => {
	return children
}

const Wrapper = () => <Outlet />

export const publicRoutes = [
	{
		path: '/',
		element: (
			<Public>
				<Wrapper />
			</Public>
		),
		children: [{ path: 'auth/*', element: <Auth /> }],
	},
]
