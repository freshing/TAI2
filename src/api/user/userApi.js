import router from "@/router/router";
import http from "@/http/http";
import config from "@/http/httpConfig";
import helper from './userApiHelper'
import { handleApiError } from "@/api/apiHelper";

function loadCurrentUserInfo() {
	return http.get('/rest-auth/user/')
		.then((result) => helper.parseUserFromApi(result.data))
		.catch(() => handleApiError("Wystąpił błąd podczas pobierania danych użytkownika. Skontaktuj się z Administratorem."));
}

function addUser(user) {
	return http.post('/rest-auth/registration/', user)
		// .then(() => router.push('/login'))
		// .catch(() => handleApiError("Wystąpił błąd podczas tworzenia użytkownika. Skontaktuj się z Administratorem."));
}

function changePassword(password) {
	return http.post('/rest-auth/password/change/', password, config.addCsrfHeader())
		.then(() => router.push('/user/show/'))
		.catch(() => handleApiError("Wystąpił błąd podczas zmiany hasła. Skontaktuj się z Administratorem."));
}

export default {
	loadCurrentUserInfo,
	addUser,
	changePassword,
}
