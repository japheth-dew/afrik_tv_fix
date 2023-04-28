import React, { memo } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedAuthRoute = ({ isAuthenticated, children }) => {
	if (!isAuthenticated) {
		return <Navigate to="/in" replace />
	}

	return children
}

export default ProtectedAuthRoute
