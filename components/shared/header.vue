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

            <ul class="categoryButtons">
              <li v-for="category in categories" :key="category.id">
                <a @click="setCategory(category.id)" href="#">
                  {{ category.name }}
                </a>
              </li>
            </ul>

            <!-- <input-field v-model="categoryInputContent" placeholder="please enter category..." class="withFull" /> -->

            <div class="buttons">
              <button-default :text="submitText" @from-child="itemRegister(); modalClose();" />
              <button-default :text="cancelText" @from-child="modalClose" />
            </div>
          </modal-content>
        </li>
        <li v-if="user">
          <nuxt-link to="/user/parts/0">
            {{ user.displayName }}
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
      // categoryInputContent: '',
      addItemCategoryId: '',
      file: '',
      fileName: '',
      imageUrl: ''
    }
  },
  computed: {
    btnText () {
      return this.$store.state.loggedIn ? 'Sign Out' : 'Sign In'
    },
    categories () {
      return this.$store.getters.categories
    },
    user () {
      return this.$store.getters.user
    }
  },
  created () {
    if (!this.$store.items) {
      this.$store.dispatch('items/fetchItems')
    }
    // this.$store.dispatch('items/fetchItemsByUid', user)
  },
  mounted () {
    this.$store.dispatch('items/fetchItemsByUid', user)
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
    setCategory (id) {
      this.addItemCategoryId = id
    },
    // 画像を検出 （ファイル名を取得）====================
    detectFiles (e) {
      // imageUrlを空に
      this.imageUrl = ''

      // アップロード対象は1件のみとする
      this.file = (e.target.files || e.dataTransfer.files)[0]
      if (this.file) {
        this.fileName = uuid()
      }
    },
    // itemの登録===========================
    itemRegister () {
      // storageに画像のアップロード（items.jsのactionを呼び出し（intem.jsに入れなくてもできる？））-----
      this.$store.dispatch('items/uploadItemImage', {
        fileName: this.fileName,
        file: this.file
      })
        .then((url) => {
        // 画像のフルバスが取得できる
          this.imageUrl = url
          // 画像を取得（場所がおそらく別の方が良い。また、全部取得するのではなく、登録したパーツだけ追加で表示できるようにしたい）
          this.$store.dispatch('items/fetchItems')
          this.$store.dispatch('items/fetchItemsByUid')
        })

      // firestoreにfileNameとcategoryIdとauthorのアップロード ------------------------
      db.collection('item').add({
        fileName: this.fileName,
        categoryId: this.addItemCategoryId,
        author: this.$store.state.user.uid
      })
        .then(function (docRef) {
          // console.log(downloadUrl)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })

      this.addItemCategoryId = ''
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
