import React, { memo, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const useAuth = () => {
	let token = localStorage.getItem('token')
	let profile = localStorage.getItem('profile')

	//   if (!token || !profile) {
	//     return false
	//   } else {
	//     try {
	//       let profileData = JSON.parse(profile)
	//       if (Object.keys(profileData).length === 0) {
	//         return false
	//       } else {
	//         return true
	//       }
	//     } catch (error) {
	//       console.error(error)
	//       return false
	//     }
	//   }
	return true
}
const ProtectedRoutes = () => {
	const isAuth = useAuth()

	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) navigate('/auth/signin')
	}, [isAuth])

	return isAuth && <Outlet />
}

export default ProtectedRoutes
