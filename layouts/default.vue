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
          <li v-if="isAuth">
            <a @click="signOut" href="#">sign out</a>
          </li>
          <li v-else>
            <a @click="signIn" href="#">sign in</a>
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
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  asyncData () {
    return {
      isAuth: false
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => this.isAuth = !!user)
  },
  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken
        // The signed-in user info.
        const user = result.user
        // ...
      }).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential
      })
    },
    signOut () {
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
      }).catch(function (error) {
        // An error happened.
      })
    }
  }
}
</script>
