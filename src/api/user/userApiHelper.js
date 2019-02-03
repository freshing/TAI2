function parseUserFromApi(user) {
	return {
		username: user.username,
		email: user.email,
	};
}

function parseUsersFromApi(users) {
	return users.map(user => {
		return parseUserFromApi(user)
	});
}

function getEmptyUserForm() {
	return {
		username: "",
		email: "",
	};
}

function getEmptyUserPassword() {
	return {
		new_password1: "",
		new_password2: "",
		old_password: ""
	};
}

export default {
	parseUserFromApi,
	parseUsersFromApi,
	getEmptyUserForm,
	getEmptyUserPassword
}
