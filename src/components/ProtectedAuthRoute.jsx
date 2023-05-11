import React, { memo, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const useAuth = () => {
	let token = localStorage.getItem('token')
	let profile = localStorage.getItem('profile')
	if (
		!token ||
		(typeof profile === 'string' && profile !== undefined && Object.keys(JSON.parse(profile)).length === 0)
	) {
		return false
	} else {
		return true
	}
}

const ProtectedAuthRoutes = () => {
	// const isAuth = useAuth()

	const navigate = useNavigate()

	// useEffect(() => {
	// 	if (isAuth) navigate('/profile/chooseprofile')
	// }, [isAuth])

	// return isAuth && <Outlet />
	return <Outlet />
}

export default ProtectedAuthRoutes
