import http from "@/http/http";
import config from "@/http/httpConfig";
import router from "@/router/router";
import { handleApiError } from "@/api/apiHelper";

function login(loginData) {
	return http.post('/rest-auth/login/', loginData)
		.then(response => router.push('/dashboard'))
		.catch(() => handleApiError("Wystąpił błąd podczas logowania. Skontaktuj się z Administratorem"));
}

function logout() {
	return http.post('/rest-auth/logout/', null, config.addCsrfHeader())
		.then(() => router.push('/login'))
		.catch(() => handleApiError("Wystąpił błąd podczas wylogowania. Skontaktuj się z Administratorem"));
}

export default {
	login,
	logout,
}
