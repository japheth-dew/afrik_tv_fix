import { createBrowserRouter } from 'react-router-dom'
import Homepage from '../pages/Home/homepage'
import Nop from '../pages/404/error'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
import Waitlist from '../pages/Waitlist/wait'

export const router = createBrowserRouter([
	{ path: '/', element: <Waitlist /> },
	{ path: '/home/homepage', element: <Homepage /> },
	...protectedRoutes,
	...publicRoutes,
	{ path: '*', element: <Nop /> },
])
