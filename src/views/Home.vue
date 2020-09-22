<template>
  <div class="user">
    <div class="user__info">
      <!--Для вывода данных использовал просто импуты, но есть и другие способы-->
      <input
        class="user__item"
        id="name"
        v-model="user.name"
        type="text"
        :disabled="disabled"
        :style="style"
      />
      <input
        class="user__item"
        v-model="user.secondName"
        type="text"
        :disabled="disabled"
        :style="style"
      />
      <input class="user__item" v-model="user.age" type="text" :disabled="disabled" :style="style" />
      <input
        class="user__item"
        v-model="user.profession"
        type="text"
        :disabled="disabled"
        :style="style"
      />
    </div>

    <button class="btn waves-effect waves-light" type="submit" @click="edit">
      Редактировать
      <i class="material-icons right">send</i>
    </button>
    <button class="btn waves-effect waves-light" type="submit" @click="save">
      Сохранить
      <i class="material-icons right">send</i>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {},
    disabled: true,
    style: {
      "font-size": 18 + "px",
      "font-weight": "bold",
    },
  }),
  name: "Home",
  async mounted() {
    // Запрос в dispatch данных пользователя
    const [response] = await this.$store.dispatch(
      "getUser",
      "http://localhost:4000/"
    );
    this.user = response;
  },
  methods: {
    // Метод определяет состояние редактирования
    edit() {
      this.disabled = false;
    },
    // Метод определяет отправляет измененные данные на сервер
    save() {
      this.disabled = true;
      this.$store.dispatch("setUser", this.user);
    },
  },
};
</script>

<style lang="sass" scoped>
.user
	width: 500px
	margin-top: 100px
	&__info
		margin: 10px
	&__item
		padding: 20px
		display: flex
		font-size: 18px
		font-weight: bold
	.btn:last-child
		margin-left: 10px
</style>
