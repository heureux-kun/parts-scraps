import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: process.env.FIRE_AUTH_DOMAIN,
  databaseURL: process.env.FIRE_DATABASE_URL,
  projectId: process.env.FIRE_PROJECT_ID,
  storageBucket: process.env.FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_MSG_SENDER_ID,
  appId: process.env.FIRE_APP_ID
}

try {
  firebase.initializeApp(config)
} catch (e) {
  console.log(e)
}

export default firebase
// export default (context, inject) => {
//   inject('firebase', firebase)
//   inject('firestore', firebase.firestore())
//   inject('auth', firebase.auth())
// }
