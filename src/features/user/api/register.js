import axios from '../../../lib/axios'

export const registerWithEmailAndPassword = async ({
	fullname,
	email,
	password,
}) => {
	return axios.post('/auth/register', { email, password, fullname })
}

export const verifyOTP = async ({ email, otp }) => {
	return axios.post('/auth/verify', { email, otp })
}
