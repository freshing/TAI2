function parseUsersFromApi(usersFromApi) {
	return usersFromApi.map(user => {
		return {
				id: user.id,
				email: user.email,
				username: user.username
		};
	});
}

function parseRequestFromApi(requestFromApi) {
	return requestFromApi.map(user => {
		return {
				id: user.from_user,
		};
	});
}

function parseSentFromApi(sent) {
	return sent.map(user => {
		return {
				id: user.to_user,
		};
	});
}

export default {
	parseUsersFromApi,
	parseRequestFromApi,
	parseSentFromApi,
}
