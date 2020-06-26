import firebase from '~/plugins/firebase'
const firestorage = firebase.storage()

/* ======================
 state
======================= */
export const state = () => ({
  items: [],
  itemsCategory01: [],
  itemsCategory02: [],
  itemsCategory03: [],
  itemsCategory04: [],
  itemsCategory05: [],
  itemsCategory06: [],
  itemsCategory07: [],
  itemsCategory08: []
})

/* ======================
 getters
======================= */
export const getters = {
  items: (state) => {
    return state.items
  },
  itemsCategory01: state => (category) => {
    return state.items.find(item => item.category === category)
  },
  itemsCategory02: (state) => {
    return state.itemsCategory02
  },
  itemsCategory03: (state) => {
    return state.itemsCategory03
  },
  itemsCategory04: (state) => {
    return state.itemsCategory04
  },
  itemsCategory05: (state) => {
    return state.itemsCategory05
  },
  itemsCategory06: (state) => {
    return state.itemsCategory06
  },
  itemsCategory07: (state) => {
    return state.itemsCategory07
  },
  itemsCategory08: (state) => {
    return state.itemsCategory08
  }
}

/* ======================
 mutations
======================= */
export const mutations = {
  setItems(state, payload) {
    state.items = payload
  },
  setItemsCategory01(state, payload) {
    state.itemsCategory01 = payload
  },
  setItemsCategory02(state, payload) {
    state.itemsCategory02 = payload
  },
  setItemsCategory03(state, payload) {
    state.itemsCategory03 = payload
  },
  setItemsCategory04(state, payload) {
    state.itemsCategory04 = payload
  },
  setItemsCategory05(state, payload) {
    state.itemsCategory05 = payload
  },
  setItemsCategory06(state, payload) {
    state.itemsCategory06 = payload
  },
  setItemsCategory07(state, payload) {
    state.itemsCategory07 = payload
  },
  setItemsCategory08(state, payload) {
    state.itemsCategory08 = payload
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
      })
  },
  // headerの取得 ========================
  fetchItemsCategory01({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .where('categoryId', '==', 1)
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
        commit('setItemsCategory01', itemArray)
      })
  },
  // global navigationの取得 ========================
  fetchItemsCategory02({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .where('categoryId', '==', 2)
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
        commit('setItemsCategory02', itemArray)
      })
  },
  // breadcrumb listの取得 ========================
  fetchItemsCategory03({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .where('categoryId', '==', 3)
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
        commit('setItemsCategory03', itemArray)
      })
  },
  // pagetopの取得 ========================
  fetchItemsCategory04({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .where('categoryId', '==', 4)
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
        commit('setItemsCategory04', itemArray)
      })
  },
  // cardの取得 ========================
  fetchItemsCategory05({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .where('categoryId', '==', 5)
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
        commit('setItemsCategory05', itemArray)
      })
  },
  // formの取得 ========================
  fetchItemsCategory06({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .where('categoryId', '==', 6)
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
        commit('setItemsCategory06', itemArray)
      })
  },
  // footerの取得 ========================
  fetchItemsCategory07({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .where('categoryId', '==', 7)
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
        commit('setItemsCategory07', itemArray)
      })
  },
  // titleの取得 ========================
  fetchItemsCategory08({ commit }) {
    const bucketName = 'parts-scraps.appspot.com'
    const db = firebase.firestore()
    const itemArray = []
    db.collection('item')
      .where('categoryId', '==', 8)
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
        commit('setItemsCategory08', itemArray)
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
