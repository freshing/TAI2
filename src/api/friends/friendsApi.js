import http from '@/http/http'
import friendsApiHelper from './friendsApiHelper'
import { handleApiError } from '@/api/apiHelper'

function loadUsers() {
	return http.get('/users/list')
		.then(response => {
			return friendsApiHelper.parseUsersFromApi(response.data)
		})
		.catch(() => handleApiError("Wystąpił błąd podczas pobierania użytkowników. Skontaktuj się z Administratorem."));
}

function loadFriends() {
	return http.get('/users/friendsList')
		.then(response => {
			return friendsApiHelper.parseUsersFromApi(response.data)
		})
		.catch((response) =>
			handleApiError("Wystąpił błąd podczas pobierania znajomych. Skontaktuj się z Administratorem."));
}

function loadRequests() {
	return http.get('/users/unrejectedRequestList')
		.then(response => {
			return friendsApiHelper.parseUsersFromApi(response.data)
		})
		.catch((response) =>
			handleApiError("Wystąpił błąd podczas pobierania zaproszeń. Skontaktuj się z Administratorem."));
}

// function loadUpcomingEvents() {
// 	return http.get('/rest/event/load/week')
// 		.then(response => response.data.sort((a, b) => a.dateFrom - b.dateFrom))
// 		.catch(() => handleApiError("Wystąpił błąd podczas pobierania wydarzeń. Skontaktuj się z Administratorem."));
// }
//
// function createEvent(event) {
// 	return http.post('/rest/event/add', event)
// 		.catch(() => handleApiError("Nie można stworzyć wydarzenia. Skontaktuj się z Administratorem."));
// }

export default {
	loadUsers,
	loadFriends,
	loadRequests,
	// createEvent,
}
