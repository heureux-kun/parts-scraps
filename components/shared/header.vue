<template>
  <header>
    <h1 id="Logo">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.png" alt="Parts Scraps">
      </nuxt-link>
    </h1>
    <nav>
      <ul>
        <li v-if="$store.state.loggedIn">
          <button-default :text="addItemBtnText" @from-child="addItem" />
          <modal-content v-if="modalShow" @from-child="modalClose">
            <p class="elementTitle">
              Add Item
            </p>
            <div class="imageDragArea">
              <p>Please drag and drop image.</p>
              or select
              <input @change="detectFiles" type="file">
            </div>
            <input-field v-model="categoryInputContent" placeholder="please enter category..." class="withFull" />
            <div class="buttons">
              <button-default :text="submitText" @from-child="itemRegister(); modalClose();" />
              <button-default :text="cancelText" @from-child="modalClose" />
            </div>
          </modal-content>
        </li>
        <li v-if="$store.state.user">
          <nuxt-link to="/users/">
            {{ $store.state.user.displayName }}
          </nuxt-link>
        </li>
        <li>
          <button-default :text="btnText" @from-child="signInButtonClick" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import uuid from 'uuid'
import firebase from '~/plugins/firebase'

import ButtonDefault from '~/components/common/ButtonDefault.vue'
import ModalContent from '~/components/common/ModalContent.vue'
import InputField from '~/components/common/InputField.vue'

const db = firebase.firestore()

db.collection('item').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // console.log('item：' + doc.id)
    // console.log('item：' + doc.data().category)
  })
})
// db.collection('users').add({
//   name: 'Harry Bosch',
//   age: 16
// })
//   .then(function (docRef) {
//     console.log('Document written with ID: ', docRef.id)
//   })
//   .catch(function (error) {
//     console.error('Error adding document: ', error)
//   })

export default {
  components: {
    ButtonDefault,
    ModalContent,
    InputField
  },
  // async fileChanged (e) {
  //   const file = (e.target.files || e.dataTransfer.file)[0]
  //   if (file) {
  //     const fileName = uuid()
  //     try {
  //       const uploadTask = await this.$store.dispatch('../database/uploadFile', {
  //         fileName,
  //         file
  //       })
  //     } catch (error) {
  //       console.error('file upload', error)
  //     }
  //   }
  // }
  data () {
    return {
      modalShow: false,
      addItemBtnText: '+ Add Item',
      orSelectBtnText: 'or select',
      submitText: 'Submit',
      cancelText: 'Cancel',
      categoryInputContent: ''
    }
  },
  computed: {
    btnText () {
      return this.$store.state.loggedIn ? 'Sign Out' : 'Sign In'
    }
  },
  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        // 必要なし => this.$store.dispatch('signIn', result.user)
        // 成功した時点でpluignsファイルのonAuthStateChanged()メソッドが呼ばれる。どうやらfirebaseの仕様？っぽい
        // なので再度Vuexのuserをセットするはない
        alert(`${result.user.displayName}でログインしました`)
      })
    },
    signOut () {
      firebase.auth().signOut().then((res) => {
        this.$store.dispatch('signOut')
        alert('ログアウトしました')
      })
    },
    signInButtonClick () {
      return this.$store.state.loggedIn ? this.signOut() : this.signIn()
      // alert('signInButtonClick!')
    },
    addItem () {
      this.modalShow = true
    },
    modalClose () {
      this.modalShow = false
    },
    itemRegister () {
      db.collection('item').add({
        image: '',
        category: this.categoryInputContent
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      this.categoryInputContent = ''
    },
    detectFiles (e) {
      // アップロード対象は1件のみとする
      const file = (e.target.files || e.dataTransfer.files)[0]
      if (file) {
        const fileName = uuid()

        this.$store.dispatch('users/uploadImage', {
          name: fileName,
          file
        })
          .then((url) => {
          // アップロード完了処理（ローカルメンバに保存したり）
            this.fileName = fileName
            this.imageUrl = url
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons{
  display: flex;
  justify-content: center;
  margin-top: 15px;
  button{
    margin: 0 10px;
  }
}
.imageDragArea{
  text-align: center;
  background-color: #eeeeee;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
}
</style>
