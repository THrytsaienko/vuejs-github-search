<template>
  <div>
	  <header class="header">
		  <div class="header__info">
        <router-link to="/">
          <img src="../assets/logo.png" class="header__logo">
        </router-link>
		   		<p class="header__title">This simple Github API Mini Client was maid with Vue and Vue-router</p>
		  </div>
		   <div class="header__menu">
			   <ul class="header__list">
				   <a @click.prevent href="#" class="header__link"><li class="header__item js-uk">Uk</li></a>
				   <a @click.prevent href="#" class="header__link"><li class="header__item js-en">En</li></a>
				   <a @click.prevent href="#" class="header__link"><li class="header__item js-ge">Ge</li></a>
			   </ul>
		   </div>
	  </header>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header {
	height: 80px;
	background-color: red;
	display: flex;
	align-items: center;
	padding: 0 30px;
	justify-content: space-between;

	&__info {
		display: flex;
		align-items: center;
	}

	&__logo {
		width: 30px;
		height: 30px;
	}

	&__list {
		display: flex;
	}

	&__item {
		list-style: none;
	}

	&__link {
		margin-right: 25px;
		cursor: pointer;

		&:last-child {
			margin-right: 0;
		}

		&:link
		&:visited
		&:hover
		&:active {
			text-decoration none
		}
	}
}
</style>
