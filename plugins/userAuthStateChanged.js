import firebase from '~/plugins/firebase'

export default ({ store }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('signIn', user)
    }
  })
}
