function parseUsersFromApi(usersFromApi) {
	return usersFromApi.map(user => {
		return {
			data: {
				id: user.id,
				email: user.email,
				username: user.username
			},
		};
	});
}

export default {
	parseUsersFromApi,
}
