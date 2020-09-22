<template>
  <div class="login-form">
    <form class="col s12" @submit.prevent="sumbitHandler">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" v-model="email" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" v-model="password" />
          <label for="password">Password</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <button class="btn waves-effect waves-light" type="submit">
            Войти
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async sumbitHandler() {
			// Сохраняем данные в локальной дате и делаем dispatch куда передаем данные
      const data = {
        email: this.email,
        password: this.password,
      };
      try {
				const auth = await this.$store.dispatch("login", data);
			// Как тестовый кейс просто записываю ответ от сервера в локалСтор. 
			// В auth проверка пользователя на регистрацию 
        localStorage.isAuthorized = auth;
        this.$router.push("/");
      } catch (e) {}
    },
  },
};
</script>
<style lang="sass" scoped>
.login-form
	width: 500px
	background-color: #ffffff
	display: flex
	justify-content: center
	align-items: center
	form
		width: 80%
</style>