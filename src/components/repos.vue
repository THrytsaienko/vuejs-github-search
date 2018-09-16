<template>
    <div class="cards">
      <div class="cards__container">
        <div class="card" v-for="(repo, idx) in repos">
          <div class="card__title">Repo name: {{repo.name}}</div>
          <div class="card__description">Description: {{repo.description}}</div>
          <div class="card__created">Created at: {{createdDate(idx)}}</div>
          <div class="card__forks">Forks: {{repo.forks}}</div>
          <div class="card__id">Repo ID: {{repo.id}}</div>
          <div class="card__language"> Languages: {{repo.language}}</div>
          <div class="card__issues">Open issues: {{repo['open_issues']}}</div>
          <div class="card__size">Size of repo: {{repo.size}}</div>
          <div class="card__updated">Updated at: {{updatedDate(idx)}}</div>
          <a :href="repo.svn_url" target="_blank" class="card__url">Link to repo</a>
          <div class="card__watchers">Watchers: {{repo.watchers}}</div>
        </div>
      </div>
    </div>
</template>

<!--archive_url:"https://api.github.com/repos/kottans/algorithm_club/{archive_format}{/ref}"-->
<!--archived:false-->
<!--assignees_url:"https://api.github.com/repos/kottans/algorithm_club/assignees{/user}"-->
<!--blobs_url:"https://api.github.com/repos/kottans/algorithm_club/git/blobs{/sha}"-->
<!--branches_url:"https://api.github.com/repos/kottans/algorithm_club/branches{/branch}"-->
<!--clone_url:"https://github.com/kottans/algorithm_club.git"-->
<!--collaborators_url:"https://api.github.com/repos/kottans/algorithm_club/collaborators{/collaborator}"-->
<!--comments_url:"https://api.github.com/repos/kottans/algorithm_club/comments{/number}"-->
<!--commits_url:"https://api.github.com/repos/kottans/algorithm_club/commits{/sha}"-->
<!--compare_url:"https://api.github.com/repos/kottans/algorithm_club/compare/{base}...{head}"-->
<!--contents_url:"https://api.github.com/repos/kottans/algorithm_club/contents/{+path}"-->
<!--contributors_url:"https://api.github.com/repos/kottans/algorithm_club/contributors"-->
<!--created_at:"2017-12-15T16:11:36Z"-->
<!--default_branch:"master"-->
<!--deployments_url:"https://api.github.com/repos/kottans/algorithm_club/deployments"-->
<!--description:"Repo for participating in cooperative survival MOOC"-->
<!--downloads_url:"https://api.github.com/repos/kottans/algorithm_club/downloads"-->
<!--events_url:"https://api.github.com/repos/kottans/algorithm_club/events"-->
<!--fork:false-->
<!--forks:14-->
<!--forks_count:14-->
<!--forks_url:"https://api.github.com/repos/kottans/algorithm_club/forks"-->
<!--full_name:"kottans/algorithm_club"-->
<!--git_commits_url:"https://api.github.com/repos/kottans/algorithm_club/git/commits{/sha}"-->
<!--git_refs_url:"https://api.github.com/repos/kottans/algorithm_club/git/refs{/sha}"-->
<!--git_tags_url:"https://api.github.com/repos/kottans/algorithm_club/git/tags{/sha}"-->
<!--git_url:"git://github.com/kottans/algorithm_club.git"-->
<!--has_downloads:true-->
<!--has_issues:true-->
<!--has_pages:false-->
<!--has_projects:true-->
<!--has_wiki:true-->
<!--homepage:"https://lagunita.stanford.edu/courses/course-v1:Engineering+Algorithms1+SelfPaced"-->
<!--hooks_url:"https://api.github.com/repos/kottans/algorithm_club/hooks"-->
<!--html_url:"https://github.com/kottans/algorithm_club"-->
<!--id:114388834-->
<!--issue_comment_url:"https://api.github.com/repos/kottans/algorithm_club/issues/comments{/number}"-->
<!--issue_events_url:"https://api.github.com/repos/kottans/algorithm_club/issues/events{/number}"-->
<!--issues_url:"https://api.github.com/repos/kottans/algorithm_club/issues{/number}"-->
<!--keys_url:"https://api.github.com/repos/kottans/algorithm_club/keys{/key_id}"-->
<!--labels_url:"https://api.github.com/repos/kottans/algorithm_club/labels{/name}"-->
<!--language:"JavaScript"-->
<!--languages_url:"https://api.github.com/repos/kottans/algorithm_club/languages"-->
<!--license:Object-->
<!--merges_url:"https://api.github.com/repos/kottans/algorithm_club/merges"-->
<!--milestones_url:"https://api.github.com/repos/kottans/algorithm_club/milestones{/number}"-->
<!--mirror_url:null-->
<!--name:"algorithm_club"-->
<!--node_id:"MDEwOlJlcG9zaXRvcnkxMTQzODg4MzQ="-->
<!--notifications_url:"https://api.github.com/repos/kottans/algorithm_club/notifications{?since,all,participating}"-->
<!--open_issues:30-->
<!--open_issues_count:30-->
<!--owner:Object-->
<!--private:false-->
<!--pulls_url:"https://api.github.com/repos/kottans/algorithm_club/pulls{/number}"-->
<!--pushed_at:"2018-05-14T21:22:13Z"-->
<!--releases_url:"https://api.github.com/repos/kottans/algorithm_club/releases{/id}"-->
<!--size:1383-->
<!--ssh_url:"git@github.com:kottans/algorithm_club.git"-->
<!--stargazers_count:11-->
<!--stargazers_url:"https://api.github.com/repos/kottans/algorithm_club/stargazers"-->
<!--statuses_url:"https://api.github.com/repos/kottans/algorithm_club/statuses/{sha}"-->
<!--subscribers_url:"https://api.github.com/repos/kottans/algorithm_club/subscribers"-->
<!--subscription_url:"https://api.github.com/repos/kottans/algorithm_club/subscription"-->
<!--svn_url:"https://github.com/kottans/algorithm_club"-->
<!--tags_url:"https://api.github.com/repos/kottans/algorithm_club/tags"-->
<!--teams_url:"https://api.github.com/repos/kottans/algorithm_club/teams"-->
<!--trees_url:"https://api.github.com/repos/kottans/algorithm_club/git/trees{/sha}"-->
<!--updated_at:"2018-06-16T14:44:56Z"-->
<!--url:"https://api.github.com/repos/kottans/algorithm_club"-->
<!--watchers:11-->
<!--watchers_count:11-->



<script>
  import moment from 'moment';
    export default {
      name: 'repos',
      props: ['username'],
      computed: {
        repos(){
          return this.$store.state.repos;
        },
      },
      methods: {
        createdDate(idx){
          return moment(this.repos[idx]['created_at']).format('MMMM Do YYYY');
        },
        updatedDate(idx){
          return moment(this.repos[idx]['updated_at']).format('MMMM Do YYYY');
        }
      }
    };
</script>

<style lang="stylus">
  .cards {
    &__container {
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-around
      margin-top 30px
      margin-bottom 30px
    }
  }

  .card {
    width 100%
    max-width 300px
    padding 20px
    border 1px solid #f8f8f8
    border-radius 5px
    font-size 14px
    margin-bottom 20px

    &:hover {
      background-color #f8f8f8
      border-color darkgrey
    }
  }
</style>
