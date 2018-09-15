<template>
    <div class="user">
      <div class="user__container">
        <p>Welcome to my Github page! My name is <strong>{{this.username}}</strong>.</p>
        <div class="user__data">
          <div class="user__avatar">
            <img class="user__image" :src=userData.avatar_url alt="">
          </div>
          <div class="user__bio">Bio: {{userData.bio}}</div>
          <div class="user__company">Company: {{userData.company}}</div>
          <div class="user__created_at">Created: {{userData.created_at}}</div>
          <div class="user__email">Email: {{userData.email}}</div>
          <div class="user__followers">Followers: {{userData.followers}}</div>
          <div class="user__following">Following: {{userData.following}}</div>
          <div class="user__location">Location: {{userData.location}}</div>
          <div class="user__login">Following: {{userData.following}}</div>
          <div class="name">Name: {{userData.name}}</div>
          <div class="user__public_gists">Public gists: {{userData.public_gists}}</div>
          <div class="user__public_repos">Public repos: {{userData.public_repos}}</div>
          <div class="user__repos_url">Repos url repos: <a :href=userData.repos_url>{{userData.repos_url}}</a></div>
          <div class="user__type">Type: {{userData.type}}</div>
          <div class="user__updated_at">Updated at: {{userData.updated_at}}</div>
          <div class="user__url">Url: <a :href=userData.url>{{userData.url}}</a></div>
        </div>
        <button class="user__button" @click="viewRepos">View all repos</button>
        <div class="cards">
        </div>
      </div>
    </div>
</template>

<script>
    module.exports = {
      name: 'user',
      props: ['username'],
      computed: {
        userData(){
          return this.$store.state.user;
        }
      },
      mounted(){
        console.log("this.username >>>", this.username);
        console.log('login from store >>>', this.userData);
      },
      methods: {
        viewRepos(){
          const api = `https://api.github.com/users/${this.username}/repos`;
          this.$http.get(api).then(response => {
            console.log("response.data 1 >>>", response.data);
            console.log("user component this.userData >>>", this.userData.login);
            this.$store.commit('updateRepos', response.data);
            this.$router.push({path: `/${this.userData.login}/repos`, params: { username: this.userData.login}});
          });
        }
      }
    };
</script>

<style scoped lang="stylus">
  .user {
    &__container {
      width 100%
      max-width 1000px
      padding 30px
      margin 0 auto
      background-color lightyellow
    }
    &__image {
      width 100%
      max-width 100px
    }
  }
</style>
