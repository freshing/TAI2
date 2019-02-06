import http from '@/http/http'
import config from '@/http/httpConfig'
import friendsApiHelper from './friendsApiHelper'
import { handleApiError, handleApiInfo } from '@/api/apiHelper'

// localStorage.requestSend = [];

function loadUsers() {
	return http.get('/users/list')
		.then(response => {
			return friendsApiHelper.parseUsersFromApi(response.data)
		})
		.catch(() => handleApiError("Wystąpił błąd podczas pobierania użytkowników. Skontaktuj się z Administratorem."));
}

function addFriend(user) {
	return http.post('/users/send/', user, config.addCsrfHeader())
		.then(response => {
			handleApiInfo("Wysłano zaproszenie.")})
		.catch((response) => {
			handleApiError("Wystąpił błąd podczas dodawania znajomego. Skontaktuj się z Administratorem.");
	}	);
}

function acceptFriend(user) {
	return http.post('/users/acceptRequest/', user, config.addCsrfHeader())
		.then(response => {})
		.catch((response) => {
			handleApiError("Wystąpił błąd podczas dodawania znajomego. Skontaktuj się z Administratorem.");
	}	);
}

function rejectFriend(user) {
	return http.post('/users/rejectRequest/', user, config.addCsrfHeader())
		.then(response => {})
		.catch((response) => {
			handleApiError("Wystąpił błąd podczas dodawania znajomego. Skontaktuj się z Administratorem.");
	}	);
}

function loadFriends() {
	return http.get('/users/friendsList')
		.then(response => {
			return friendsApiHelper.parseUsersFromApi(response.data)
		})
		.catch((response) =>
			handleApiError("Wystąpił błąd podczas pobierania znajomych. Skontaktuj się z Administratorem."));
}

function loadRejected() {
	return http.get('/users/rejectedRequestList')
		.then(response => {
			return friendsApiHelper.parseRequestFromApi(response.data)
		})
		.catch((response) =>
			handleApiError("Wystąpił błąd podczas pobierania znajomych. Skontaktuj się z Administratorem."));
}

function loadRequests() {
	return http.get('/users/unrejectedRequestList')
		.then(response => {
			return friendsApiHelper.parseRequestFromApi(response.data)
		})
		.catch((response) =>
			handleApiError("Wystąpił błąd podczas pobierania zaproszeń. Skontaktuj się z Administratorem."));
}

function loadSent() {
	return http.get('/users/sentRequestList')
		.then(response => {
			return friendsApiHelper.parseSentFromApi(response.data)
		})
		.catch((response) =>
			handleApiError("Wystąpił błąd podczas pobierania zaproszeń. Skontaktuj się z Administratorem."));
}


export default {
	loadUsers,
	addFriend,
	acceptFriend,
	rejectFriend,
	loadFriends,
	loadRequests,
	loadRejected,
	loadSent,
}
