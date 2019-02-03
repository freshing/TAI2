import http from "@/http/http";
import helper from './userApiHelper'
import { handleApiError } from "@/api/apiHelper";

function loadActiveUsers() {
	return http.get('/rest/person/list/active')
		.then(response => helper.parseUsersFromApi(response.data))
		.catch(() => handleApiError("Wystąpił błąd podczas pobierania danych użytkowników. Skontaktuj się z Administratorem."));
}

function loadUserDictionary() {
	return http.get('/rest/person/list/active')
		.then(response => helper.parseUsersToDictionary(response.data))
		.catch(() => handleApiError("Wystąpił błąd podczas pobierania danych użytkowników. Skontaktuj się z Administratorem."));
}

export default {
	loadActiveUsers,
	loadUserDictionary,
}
