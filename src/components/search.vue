<template>
	<div class="search">
		<input type="text" placeholder="Enter Username or Organization" v-model="user">
		<button @click="getUser()" type="submit" class="button">Search</button>
	</div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      user: ""
    };
  },
  methods: {
    getUser() {
      const api = `https://api.github.com/users/${this.user}`;
      this.$http.get(api).then(response => {
        console.log("response.data >>>", response.data);
        this.$store.commit('updateUser', response.data);
        this.$router.push({path: `/${response.data['login']}`, params: { username: response.data['login']}});
      });
    }
  }
};
</script>

<style lang="stylus">
.search {
	width: 100%;
	max-width: 300px;
	display: flex;
	justify-content: space-between;
}

.button {
	padding: 10px 20px;
}
</style>
