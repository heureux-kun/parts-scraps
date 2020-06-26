import firebase from '~/plugins/firebase'
const firestorage = firebase.storage()

/* ======================
 state
======================= */
export const state = () => ({
  items: [],
  itemsCategory1: [],
  itemsCategory2: [],
  itemsCategory3: [],
  itemsCategory4: [],
  itemsCategory5: [],
  itemsCategory6: [],
  itemsCategory7: [],
  itemsCategory8: [],
  itemsCategory9: []
})

/* ======================
 getters
======================= */
export const getters = {
  items: (state) => {
    return state.items
  },
  // itemsCategory8: (state) => {
  //   return state.items
  // }
  itemsCategory1: (state) => {
    return state.items.filter(item => item.categoryId === 1)
  },
  itemsCategory2: (state) => {
    return state.items.filter(item => item.categoryId === 2)
  },
  itemsCategory3: (state) => {
    return state.items.filter(item => item.categoryId === 3)
  },
  itemsCategory4: (state) => {
    return state.items.filter(item => item.categoryId === 4)
  },
  itemsCategory5: (state) => {
    return state.items.filter(item => item.categoryId === 5)
  },
  itemsCategory6: (state) => {
    return state.items.filter(item => item.categoryId === 6)
  },
  itemsCategory7: (state) => {
    return state.items.filter(item => item.categoryId === 7)
  },
  itemsCategory8: (state) => {
    return state.items.filter(item => item.categoryId === 8)
  },
  itemsCategory9: (state) => {
    return state.items.filter(item => item.categoryId === 9)
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
  // itemの取得 ========================
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
            downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/' + bucketName + '/o/' + encodeURIComponent('images/parts/' + doc.data().fileName) + '?alt=media&token=',
            // downloadUrl: doc.data().fileName,
            // downloadUrl: doc.id,
            ...doc.data()
          })
        })
        commit('setItems', itemArray)
        console.log('データを取得しました')
      })
  },

  // storageに画像のアップロード（vuex上ではなくvueファイルのmethodでできる？） ====================
  uploadImage: (context, payload) => {
    return new Promise((resolve, reject) => {
      // firestoreにファイルをアップロード
      const uploadTask = firestorage
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
