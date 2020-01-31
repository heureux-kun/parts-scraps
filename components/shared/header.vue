<template>
  <header>
    <h1 id="Logo">
      <nuxt-link to="/">
        <img src="~assets/images/logo.png" alt="Parts Scraps">
      </nuxt-link>
    </h1>
    <nav>
      <ul>
        <li v-if="$store.state.user">
          {{ $store.state.user.displayName }}でログイン中...
        </li>
        <li>
          <button-default :text="btnText" @click="signInButtonClick" />
          <button @click="signInButtonClick">
            ぼたん
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import firebase from '~/plugins/firebase'
import ButtonDefault from '~/components/common/ButtonDefault.vue'

export default {
  components: {
    ButtonDefault
  },
  computed: {
    btnText () {
      return this.$store.state.loggedIn ? 'Sign Out' : 'Sign In'
    }
  },
  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        // 必要なし => this.$store.dispatch('signIn', result.user)
        // 成功した時点でpluignsファイルのonAuthStateChanged()メソッドが呼ばれる。どうやらfirebaseの仕様？っぽい
        // なので再度Vuexのuserをセットするはない
        alert(`${result.user.displayName}でログインしました`)
      })
    },
    signOut () {
      firebase.auth().signOut().then((res) => {
        this.$store.dispatch('signOut')
        alert('ログアウトしました')
      })
    },
    signInButtonClick () {
      // return this.$store.state.loggedIn ? this.signOut() : this.signIn()
      alert('signInButtonClick!')
    }
  }
}
</script>
