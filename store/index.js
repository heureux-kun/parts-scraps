import firebase from '~/plugins/firebase'

/* ======================
 state
======================= */
export const state = () => ({
  user: null,
  loggedIn: false,
  items: []
})

/* ======================
 getters
======================= */
export const getters = {
  items: (state) => {
    return state.items
  }
}

/* ======================
 mutations
======================= */
export const mutations = {
  setUser(state, payload) {
    state.user = payload
    // console.log(state.user)
  },
  setloggedIn(state, payload) {
    state.loggedIn = payload
  },
  setItems(state, payload) {
    state.items = payload
  }
}

/* ======================
 actions
======================= */
export const actions = {
  // mutations内で直接userを代入すると無限ループに陥る(NG! state.user = firebaseUser)
  // 参考 => http://kuntalog.hatenablog.jp/entry/2019/01/07/Firebase_Authentication%E3%81%A8Vuex%E3%81%AE%E5%90%88%E3%82%8F%E3%81%9B%E6%8A%80%E3%83%90%E3%82%B0%E3%81%A7%E3%83%8F%E3%83%9E%E3%81%A3%E3%81%9F
  // コピーするkeyを確認するには↓
  // for (const key in firebaseUser) {
  //   console.log(key)
  // }
  signIn({ state, commit }, firebaseUser) {
    const user = {}
    const keys = ['refreshToken', 'uid', 'displayName', 'photoURL', 'email']
    for (const key of keys) {
      user[key] = firebaseUser[key]
    }
    commit('setUser', user)
    commit('setloggedIn', true)
  },
  signOut({ commit }) {
    commit('setUser', null)
    commit('setloggedIn', false)
  },
  fetchItems({ commit }) {
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .get()
      // .then((snapshot) => {
      //   snapshot.forEach(doc => commit('setItems', doc.data()))
      // })
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          itemArray.push({
            id: doc.id,
            ...doc.data()
          })
        })
        commit('setItems', { itemArray })
      })
  }
}
