import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{
		path: '/login',
		name: 'Login',
		meta: { layout: 'Empty' },
		component: () => import('../views/Login.vue')
	},
	{
		path: '/',
		name: 'Home',
		meta: { layout: 'Main', auth: true },
		component: () => import('../views/Home.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

// Проверка на вход пользователя в систему. И настройка redirect
router.beforeEach((to, from, next) => {
	const login = to.matched.some(login => login.meta.auth)
	const auth = localStorage.isAuthorized

	if (login && auth == "false" || auth == undefined && to.name !== "Login") {
		next("/login");
	} else {
		next();
	}

})
export default router
