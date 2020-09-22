<template>
  <component :is="layout"></component>
	<!-- Создал 2 основых компонени на основе которых буде рендериться шаблон. -->
</template>


<script>
import Main from "@/layouts/Main";
import Empty from "@/layouts/Empty";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },

  components: {
    Main,
    Empty,
  },
};
</script>
<style lang="sass">
@import "~materialize-css/dist/css/materialize.min.css"
*
	box-sizing: border-box
	margin: 0
	padding: 0
#app
	font-family: Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50

#nav
	padding: 30px

	a
		font-weight: bold
		color: #2c3e50

		&.router-link-exact-active
			color: #42b983
</style>
