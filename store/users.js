import firebase from '~/plugins/firebase'
const firestorage = firebase.storage()

/* ======================
 state
======================= */
export const state = () => ({

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

}

/* ======================
 actions
======================= */
export const actions = {
  uploadImage: (context, payload) => {
    return new Promise((resolve, reject) => {
      // firestoreにファイルをアップロード
      const uploadTask = firestorage
        // .ref('users/' + this.id + '/images/' + file.name)
        .ref('images/' + payload.name)
        .put(payload.file)
        .then((snapshot) => {
          // アップロード完了処理。URLを取得し、呼び出し元へ返す。
          snapshot.ref.getDownloadURL().then((url) => {
            resolve(url)
          })
        })
    })
  }
}
