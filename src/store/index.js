import { createStore } from 'vuex'
import { $http_post, $http_get } from '@/helpers/index'
// Подключил AXIOS в папку helpers что бы использовать в нужные моменты
export default createStore({
	state: {
		auth: false
	},
	mutations: {

	},

	actions: {
		// Оттправка данных на сервер в разных ситуациях
		async getUser({ }, path) {
			try {
				return await $http_get(path)
			} catch (e) {
				console.log(e, "Ошибка запроса пользователя на сервер")
			}

		},
		async setUser({ }, data) {
			try {
				return await $http_post("http://localhost:4000/user", data)
			} catch (e) {
				console.log(e, "Ошибка изминения данных")
			}

		},
		async login({ }, data) {
			try {
				return await $http_post("http://localhost:4000/", data)

			} catch (e) {
				console.log(e, "Ошибка входа")
			}
		}
	},
})
