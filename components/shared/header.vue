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
            <strong>Add Item</strong><br>
            <p>Please drag and drop.<button>or select</button></p>
            <input-field placeholder="please enter tag" />
            <div class="buttons">
              <button>Submit</button>
              <button @click="modalClose">
                Cancel
              </button>
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

export default {
  components: {
    ButtonDefault,
    ModalContent,
    InputField
  },
  data () {
    return {
      modalShow: false,
      addItemBtnText: '+ Add Item'
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
    }
  }
}
</script>
<style lang="scss" scoped>
.buttons{
  display: flex;
  justify-content: center;
  button{
    margin: 0 10px;
  }
}
</style>
