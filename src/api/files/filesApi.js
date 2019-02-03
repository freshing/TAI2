import http from '@/http/http'
import config from '@/http/httpConfig'
import router from "@/router/router";
import { handleApiError } from '@/api/apiHelper'

function uploadFile(file) {
	return http.post('/files/katalog1/', file, config.addCsrfHeader())
		.then(response => {
			router.push('/files');
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function getFiles() {
	return http.get('/files/')
		.then(response => {
			return response.data;
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

export default {
	uploadFile,
	getFiles,
}
