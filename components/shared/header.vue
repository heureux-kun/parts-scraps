<template>
  <header>
    <h1 id="Logo">
      <nuxt-link to="/">
        <img src="~assets/images/logo.png" alt="Parts Scraps">
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
              <input type="file" class="small">
            </div>
            <input-field v-model="tagInputContent" placeholder="please enter tag..." class="withFull" />
            <div class="buttons">
              <button-default :text="submitText" @from-child="itemRegister(); modalClose();" />
              <button-default :text="cancelText" @from-child="modalClose" />
            </div>
          </modal-content>
        </li>
        <li v-if="$store.state.user">
          <nuxt-link to="/mypage">
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
import firebase from '~/plugins/firebase'
import ButtonDefault from '~/components/common/ButtonDefault.vue'
import ModalContent from '~/components/common/ModalContent.vue'
import InputField from '~/components/common/InputField.vue'

const db = firebase.firestore()

db.collection('users').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // console.log('user：' + doc.id)
    console.log('user：' + doc.data().name)
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
  data () {
    return {
      modalShow: false,
      addItemBtnText: '+ Add Item',
      orSelectBtnText: 'or select',
      submitText: 'Submit',
      cancelText: 'Cancel',
      tagInputContent: ''
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
      db.collection('items').add({
        image: '',
        tag: this.tagInputContent
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      this.tagInputContent = ''
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
