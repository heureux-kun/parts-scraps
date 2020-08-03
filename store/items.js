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
  categoryId: () => {
    return state.setCategoryId
  },
  itemsByCategory: (state, categoryId) => {
    console.log('categoryId：' + categoryId)
    return state.items.filter(item => item.categoryId === categoryId)
  },
  itemsByCategory1: (state) => {
    return state.items.filter(item => item.categoryId === 1)
  },
  itemsByCategory2: (state) => {
    return state.items.filter(item => item.categoryId === 2)
  },
  itemsByCategory3: (state) => {
    return state.items.filter(item => item.categoryId === 3)
  },
  itemsByCategory4: (state) => {
    return state.items.filter(item => item.categoryId === 4)
  },
  itemsByCategory5: (state) => {
    return state.items.filter(item => item.categoryId === 5)
  },
  itemsByCategory6: (state) => {
    return state.items.filter(item => item.categoryId === 6)
  },
  itemsByCategory7: (state) => {
    return state.items.filter(item => item.categoryId === 7)
  },
  itemsByCategory8: (state) => {
    return state.items.filter(item => item.categoryId === 8)
  },
  itemsByCategory9: (state) => {
    return state.items.filter(item => item.categoryId === 9)
  }
}

/* ======================
 state
======================= */
export const state = () => ({
  items: [],
  categoryId: ''
})

/* ======================
 mutations
======================= */
export const mutations = {
  setItems(state, payload) {
    state.items = payload
  },
  setCategoryId(state, payload) {
    // console.log('payload：' + payload)
    state.categoryId = payload
  }
}

/* ======================
 actions
======================= */
export const actions = {
  // categoryの取得
  getCategoryId({ commit }, paramsId) {
    commit('setCategoryId', paramsId)
  },
  // itemの取得 ========================
  fetchItems({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const itemArray = []
    firestore.collection('item')
      .get()
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
