import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import config from "./httpConfig";

const configuredAxios = axios.create({
	baseURL: config.API_URL,
	headers: {
		'Content-Type': 'application/json',
		'X-CSRFTOKEN': localStorage.csrftoken,
	}
})

configuredAxios.interceptors.request.use(config.onRequestListener);
configuredAxios.interceptors.response.use(config.onResponseListener, config.onResponseErrorListener);
configuredAxios.defaults.withCredentials = true;

Vue.use(VueAxios, configuredAxios)

export default configuredAxios
