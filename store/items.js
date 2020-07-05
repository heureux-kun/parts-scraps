import firebase from '~/plugins/firebase'
const firestore = firebase.firestore()
const storage = firebase.storage()

/* ======================
 getters
======================= */
export const getters = {
  /* items */
  items: (state) => {
    return state.items
  },
  itemsByCategory: (state, categoryId) => {
    // console.log('categoryId：' + categoryId)
    return state.items.filter(item => item.categoryId === categoryId)
  }
}

/* ======================
 state
======================= */
export const state = () => ({
  items: []
})

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
  // itemの取得 ========================
  fetchItems({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const itemArray = []
    firestore.collection('item')
      .get()
      // .then((snapshot) => {
      //   snapshot.forEach(doc => commit('setItems', doc.data()))
      // })
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          itemArray.push({
            id: doc.id,
            downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/' + bucketName + '/o/' + encodeURIComponent('images/parts/' + doc.data().fileName) + '?alt=media&token=',
            // downloadUrl: doc.data().fileName,
            // downloadUrl: doc.id,
            ...doc.data()
          })
        })
        commit('setItems', itemArray)
        console.log('fetchItemsでデータを取得しました')
      })
  },

  // userのitemの取得 ========================
  // fetchItemsByUid({ commit }, user) {
  //   console.log('user：' + user)
  //   const bucketName = 'parts-scraps.appspot.com'
  //   const itemArray = []
  //   firestore.collection('item')
  //     // .where('author', '==', user.uid)
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         itemArray.push({
  //           id: doc.id,
  //           downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/' + bucketName + '/o/' + encodeURIComponent('images/parts/' + doc.data().fileName) + '?alt=media&token=',
  //           ...doc.data()
  //         })
  //       })
  //       commit('setItemsByUid', itemArray)
  //       console.log('fetchItemsByUidでデータを取得しました')
  //     })
  // },

  // storageに画像のアップロード（vuex上ではなくvueファイルのmethodでできる？） ====================
  uploadItemImage: (context, payload) => {
    return new Promise((resolve, reject) => {
      // cloud storageに画像をアップロード
      const uploadTask = storage
        .ref('images/parts/' + payload.fileName)
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
