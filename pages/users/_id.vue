<template>
  <div>
    名前：{{ user.name }}
  </div>
</template>

<script>
export default {
  // asyncData () {
  //   return axios.get('https://jsonplaceholder.typicode.com/posts/')
  //     .then((response) => {
  //       return {
  //         posts: response.data
  //       }
  //     })
  // }
  // async asynData () {
  //   // const responsePost = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  //   // const responseUser = await axios.get('https://jsonplaceholder.typicode.com/users/')
  //   // return { posts: responsePost.data, users: responseUser.data }
  // }
  // async asyncData ({ params }) {
  //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id)
  //   return { user: data }
  // },
  async asyncData ({ $axios, params }) {
    const user = await $axios.$get('/users/' + params.id)
    return { user }
  },

  head () {
    return {
      // title: this.user.name + "'s parts scraps"
    }
  }
  // data () {
  //   return {
  //     user: {}
  //   }
  // },
  // mounted () {
  //   axios.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
  //     .then(response => this.user = response.data)
  // }
}
</script>
