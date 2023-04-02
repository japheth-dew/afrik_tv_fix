import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '../lib/auth'
import { In } from '../pages/In'
import { Profile } from '../pages/Profile'
import { Movies } from '../pages/Movies'
import Layout from '../containers/Layout'

const Protected = ({ children }) => {
	const user = useUser()

	if (user.isLoading) {
		return (
			<div className="h-screen w-full flex items-center justify-center">
				<div className="flex flex-col items-center space-y-4">
					<div className="w-12 h-12 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
					<div className="text-gray-500">Loading...</div>
				</div>
			</div>
		)
	}

	if (!user.data) {
		return <Navigate to="/auth/login" />
	}

	return children
}

const Wrapper = () => <Outlet />

export const protectedRoutes = [
	{
		path: '/',
		element: (
			<Protected>
				<Wrapper />
			</Protected>
		),
		children: [
			{
				path: 'in/*',
				element: (
					<Layout>
						<In />
					</Layout>
				),
			},
			{ path: 'profile/*', element: <Profile /> },
			{ path: 'movies/*', element: <Movies /> },
			/**
			 * Didn't add this route. Is it necessary?
			 * <Route path="/userdashboard/billing" element={<Dashboard />} />
			 */
		],
	},
]
