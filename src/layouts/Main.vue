<template>
  <div class="wrapper">
    <router-view />
  </div>
	<!-- Освовной шаблон. Тут так же можно подключить sidebar, menu, footer и дт.. Описывать их в components -->
</template>

<style lang="sass" >
.wrapper
	height: 100vh
	width: 100%
	display: flex
	justify-content: center
	align-items: center
</style>