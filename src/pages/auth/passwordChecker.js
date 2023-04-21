// function to check if password and confirm password match
export function check(event) {
	if (event.target.value !== values.password) {
		event.target.setCustomValidity('Passwords must match') // Set an error message
	} else {
		event.target.setCustomValidity('') // Reset the error message
	}
}
