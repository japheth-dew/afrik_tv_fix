export const storage = window.localStorage

export const saveToken = (token) => {
	storage.setItem('token', token)
}

export const getToken = () => {
	return storage.getItem('token')
}

export const removeToken = () => {
	storage.removeItem('token')
}
