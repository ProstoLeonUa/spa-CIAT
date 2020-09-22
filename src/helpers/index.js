import axios from 'axios';
// Описал GET/POST
export const $http_post = async function (url, payload) {
	const response = await axios.post(url, payload);
	return response.data;
}
export const $http_get = async function (url) {
	const response = await axios.get(url);
	return response.data;
}
