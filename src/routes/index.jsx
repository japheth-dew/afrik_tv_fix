import { createBrowserRouter } from 'react-router-dom'
import Homepage from '../pages/Home/homepage'
import Nop from '../pages/404/error'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const router = createBrowserRouter([
	{ path: '/', element: <Homepage /> },
	...protectedRoutes,
	...publicRoutes,
	{ path: '*', element: <Nop /> },
])
