import firebase from '~/plugins/firebase'

/* ======================
 state
======================= */
export const state = () => ({
  user: null,
  loggedIn: false,
  categories: [
    { id: 1, name: 'header', slug: 'header' },
    { id: 2, name: 'global navigation', slug: 'global-navigation' },
    { id: 3, name: 'breadcrumb list', slug: 'breadcrumb-list' },
    { id: 4, name: 'pagetop', slug: 'pagetop' },
    { id: 5, name: 'card', slug: 'card' },
    { id: 6, name: 'form', slug: 'form' },
    { id: 7, name: 'footer', slug: 'footer' },
    { id: 8, name: 'title', slug: 'title' }
  ]
})

/* ======================
 getters
======================= */
export const getters = {

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
  }
}
