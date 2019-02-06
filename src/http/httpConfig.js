import router from "@/router/router";

const API_URL = 'http://localhost:8000/api/v1/';

function onRequestListener(request) {
	if (localStorage.token) {
		request.headers['Authorization'] = localStorage.token;
	}

	return request;
}

function onResponseListener(response) {
	return response;
}

function onResponseErrorListener(error) {
	if (error.response.status === 401) {
		delete localStorage.token;
		router.push('/login');
	}

	return Promise.reject(error);
}

function getCsrftoken() {
    var b = document.cookie.match('(^|;)\\s*' + 'csrftoken' + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function addCsrfHeader() {
	var config = {
		headers: {
    	'X-CSRFTOKEN': getCsrftoken(),
  	}
	}
	return config;
}

function getConfigWithoutCredentials() {
	var config = {
		withCredentials: false,
	}
	return config;
}

function getConfigWithFile() {
	var config = {
		responseType: 'blob',
	}
	return config;
}

export default {
	API_URL,
	onRequestListener,
	onResponseListener,
	onResponseErrorListener,
	addCsrfHeader,
	getConfigWithoutCredentials,
	getConfigWithFile,
	getCsrftoken,
}
