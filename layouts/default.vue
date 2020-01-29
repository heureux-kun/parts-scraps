<template>
  <div id="Wrapper">
    <header>
      <h1 id="Logo">
        <nuxt-link to="/">
          <img src="~assets/images/logo.png" alt="Parts Scraps">
        </nuxt-link>
      </h1>
      <nav>
        <ul>
          <li>
            <button @click="clickEvent">
              {{ btnText }}
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <aside>
      <nav id="Category">
        <ul>
          <li><a href="#">header</a></li>
          <li><a href="#">global navigation</a></li>
          <li><a href="#">breadcrumb list</a></li>
          <li><a href="#">button</a></li>
          <li><a href="#">page top</a></li>
          <li><a href="#">card</a></li>
          <li><a href="#">form</a></li>
          <li><a href="#">footer</a></li>
        </ul>
      </nav>
    </aside>
    <main>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">
              index
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              about
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/mypage">
              mypage > index
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/mypage/setting">
              mypage > setting
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt />
    </main>
    <footer>© 2020 parts scraps.</footer>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data: () => ({
    user: null
  }),
  computed: {
    btnText () {
      return this.user ? 'Sign Out' : 'Sign In'
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) { this.user = user }
    })
  },
  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.user = result.user
        alert(`${this.user.displayName}でログインしました`)
      })
    },
    signOut () {
      firebase.auth().signOut().then((res) => {
        this.user = null
        alert('ログアウトしました')
      })
    },
    clickEvent () {
      return this.user ? this.signOut() : this.signIn()
    }
  }
}
</script>
