import { configureAuth } from 'react-query-auth'
import {
	loginWithEmailAndPassword,
	logout,
	me,
	registerWithEmailAndPassword,
	verifyOTP,
} from '../features/user'
import { removeToken, saveToken } from './storage'

const handleAuthResponse = async (response) => {
	const { user, token } = response
	saveToken(token)
	return user
}

const loginFn = async (credentials) => {
	const response = await loginWithEmailAndPassword(credentials)
	return handleAuthResponse(response)
}

const registerFn = async (credentials) => {
	const response = await verifyOTP(credentials)
	saveToken(response.token)
	const data = await me()
	return data
}

const logoutFn = async () => {
	await logout()
  removeToken()
}

const userFn = async () => {
	const response = await me()
	return response
}

export const { useLogin, useRegister, useUser, useLogout, AuthLoader } =
	configureAuth({
		loginFn,
		logoutFn,
		registerFn,
		userFn,
	})
