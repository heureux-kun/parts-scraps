import firebase from '~/plugins/firebase'
const firestorage = firebase.storage()

/* ======================
 state
======================= */
export const state = () => ({
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
  setItems(state, payload) {
    state.items = payload
  }
}

/* ======================
 actions
======================= */
export const actions = {
  // 最初のitemの取得 ========================
  fetchItems({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
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
            downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/' + bucketName + '/o/' + encodeURIComponent('images/parts/' + doc.data().image) + '?alt=media&token=',
            // downloadUrl: doc.data().image,
            // downloadUrl: doc.id,
            ...doc.data()
          })
        })
        commit('setItems', itemArray)
      })
  },
  // storageに画像のアップロード（vuex上ではなくvueファイルのmethodでできる？） ====================
  uploadImage: (context, payload) => {
    return new Promise((resolve, reject) => {
      // firestoreにファイルをアップロード
      const uploadTask = firestorage
        .ref('images/parts/' + payload.name)
        .put(payload.file)
        .then((snapshot) => {
          // アップロード完了処理。URLを取得し、呼び出し元へ返す。
          snapshot.ref.getDownloadURL().then((url) => {
            resolve(url)
            console.log(url)
          })
        })
    })
  }
}
