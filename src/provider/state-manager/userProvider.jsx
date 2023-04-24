import { useState, useReducer, useContext, createContext } from 'react'

const initialState = {
	token: '',
	profile: {},
}

const UserContext = createContext()

const UserReducer = (state, action) => {
	switch (action.type) {
		case 'set-properties':
			return { ...state, ...action.payload }

		case 'clear-properties':
			return { ...initialState }

		default:
			return state
	}
}

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(UserReducer, initialState)

	async function setProperties(key, value) {
		let val = typeof value === 'string' ? value : typeof value === 'number' ? String(value) : JSON.stringify(value)
		dispatch({ type: 'set-properties', payload: { key, value } })
		localStorage.setItem(key, val)
	}

	async function clearProperties() {
		dispatch({ type: 'clear-properties', payload: {} })
		localStorage.clear()
	}

	async function recoverUser() {
		for (let item of Object.keys(initialState)) {
			let retrievedData = localStorage.getItem(item)
			retrievedData = ['number', 'string'].includes(typeof state[item])
				? retrievedData
				: !['null', 'undefined'].includes(retrievedData)
				? JSON.parse(retrievedData)
				: state[item]
			await setProperties(item, retrievedData)
		}
	}

	const actions = {
		setProperties,
		clearProperties,
		recoverUser,
	}

	return <UserContext.Provider value={actions}>{children}</UserContext.Provider>
}

export default UserContext
