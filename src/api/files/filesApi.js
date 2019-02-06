import http from '@/http/http'
import config from '@/http/httpConfig'
import router from "@/router/router";
import { handleApiError } from '@/api/apiHelper'

function uploadFile(file, path) {
	return http.post('/files/' + path + '/', file, config.addCsrfHeader())
		.then(response => {
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function addDirectory(name) {
	return http.post('/files/' + name + '/', null, config.addCsrfHeader())
		.then(response => {
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function shareItem(props) {
	return http.post('/share/', props, config.addCsrfHeader())
		.then(response => {
		})
		.catch(() => handleApiError("Wystąpił błąd podczas udostępniania pliku. Skontaktuj się z Administratorem."));
}

function unshare(path) {
	return http.delete('/share/' + path, config.addCsrfHeader())
		.then(response => {
		})
		.catch(() => handleApiError("Wystąpił błąd podczas udostępniania pliku. Skontaktuj się z Administratorem."));
}

function deleteItem(name) {
	return http.delete('/files/' + name + '/', config.addCsrfHeader())
		.then(response => {
		})
		.catch(() => handleApiError("Wystąpił błąd podczas usuwania pliku. Skontaktuj się z Administratorem."));
}

function getFiles(path) {
	return http.get('/files/' + path)
		.then(response => {
			return response.data;
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function getReceivedFiles() {
	return http.get('/share/')
		.then(response => {
			return response.data;
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function getSharedFiles() {
	return http.get('/share/my/')
		.then(response => {
			return response.data;
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function getStats(path) {
	return http.get('/users/stats/?dir=' + path)
		.then(response => {
			return response.data;
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function download(path) {
	let splitPath = path.split('/');
	let fileName = splitPath[splitPath.length - 1];
	return http.get('/files/' + path, config.getConfigWithFile())
		.then(response => {
			console.log('response', response.data);
			const url = window.URL.createObjectURL(new Blob([response.data]));
		  const link = document.createElement('a');
		  link.href = url;
		  link.setAttribute('download', fileName);
		  document.body.appendChild(link);
		  link.click();
		})
		.catch(() => handleApiError("Wystąpił błąd podczas pobierania pliku. Skontaktuj się z Administratorem."));
}

function downloadShared(path, filename) {
	// let splitPath = path.split('/');
	// let fileName = splitPath[splitPath.length - 1];
	return http.get('/share/' + path, config.getConfigWithFile())
		.then(response => {
			// console.log('response', filename);
			const url = window.URL.createObjectURL(new Blob([response.data]));
		  const link = document.createElement('a');
		  link.href = url;
		  link.setAttribute('download', filename);
		  document.body.appendChild(link);
		  link.click();
		})
		.catch(() => handleApiError("Wystąpił błąd podczas pobierania pliku. Skontaktuj się z Administratorem."));
}

function encrypt(path, props) {
	return http.post('/encrypt' + path, props, config.addCsrfHeader())
		.then(response => {
			return response.data;
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

export default {
	uploadFile,
	addDirectory,
	getFiles,
	getSharedFiles,
	getReceivedFiles,
	download,
	downloadShared,
	deleteItem,
	shareItem,
	unshare,
	encrypt,
	getStats,
}
