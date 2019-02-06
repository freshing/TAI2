function parseUserFromApi(user) {
	return {
		username: user.username,
		email: user.email,
		id: user.pk,
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
		id: "",
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
