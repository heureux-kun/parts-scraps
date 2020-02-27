// database/uploadFile
// const storage = firebase.storage()
const auth = firebase.auth()
const db = firebase.firestore()

async uploadFile({ commit }, payload) {
  try {
    if (!payload) throw new Error('payload is required')

    const currentUser = await auth.currentUser
    if (!currentUser) throw new Error('user is not logged in')

    const file = payload.file
    const ref = 'public/'

    const uploadTask = await storage.ref(ref).put(file)
    return uploadTask
  } catch (error) {
    return Promise.reject(error)
  }
}