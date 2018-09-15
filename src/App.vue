<template>
	<div id="app" class="app">
		<page-header>
		</page-header>
		<div class="app__container">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
  name: "App",
  components: {
    "page-header": require("./components/pageHeader.vue").default
  }
};
</script>

<style lang="stylus">
*, *:before, *:after {
	margin: 0;
	padding: 0;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	color: #2c3e50;
  overflow hidden
  box-sizing border-box
}

.app {
	&__container {
		padding: 0 30px;
	}
}
</style>
