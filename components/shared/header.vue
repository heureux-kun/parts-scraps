<template>
  <header>
    <h1 id="Logo">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.png" alt="Parts Scraps">
      </nuxt-link>
    </h1>
    <nav>
      <div class="navButtons">
        <div v-if="!user">
          <button @click="signInButtonClick" class="signInButton">
            Sign In
          </button>
        </div>
        <div v-if="user" class="userBtn">
          <a href="/user/parts/">
            {{ user.displayName }}
          </a>
          <ul>
            <li>
              <nuxt-link :to="'/user/setting/'">
                setting
              </nuxt-link>
            </li>
            <button @click="signInButtonClick" class="signOutButton">
              Sign Out
            </button>
          </ul>
        </div>
      </div>
      <div v-if="$store.state.loggedIn" class="addItemBtn">
        <button-default :text="addItemBtnText" @from-child="addItem" class="action" />
        <transition>
          <modal-content v-if="modalShow" @from-child="modalClose">
            <p class="elementTitle">
              Add Item
            </p>
            <div class="imageDragArea">
              <p>
                Please drag and drop image.<br>
                or select
              </p>
              <label>
                Choose file
                <input id="FileUploadButton" @change="detectFiles" type="file">
              </label>
              <div id="FileName" class="fileName" />
            </div>

            <ul class="categoryButtons">
              <li v-for="category in categories" :key="category.id">
                <a @click="setCategory(category.id);selectedButton=category.id" :class="[ selectedButton === category.id ? 'selected' : '' ]" href="#">
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
        </transition>
      </div>
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
      // modalShow: true,
      addItemBtnText: '+ Add Item',
      orSelectBtnText: 'or select',
      submitText: 'Submit',
      cancelText: 'Cancel',
      // categoryInputContent: '',
      addItemCategoryId: '',
      file: '',
      fileName: '',
      imageUrl: '',
      selectedButton: ''
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
  mounted () {
    // ページコンポーネントのマウントプロセス中に、$loading プロパティにすぐにアクセスできない場合があるので、これを回避するためにローダーを起動
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  created () {
    if (!this.$store.items) {
      this.$store.dispatch('items/fetchItems')
    }
    this.$store.dispatch('items/getCategoryId', this.$route.params.id)
    // this.$store.dispatch('items/fetchItemsByUid', this.user)
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
      // ファイル名を取得して画面に出す
      const fileList = document.getElementById('FileUploadButton').files
      let list = ''
      for (let i = 0; i < fileList.length; i++) {
        list += fileList[i].name + '<br>'
      }
      document.getElementById('FileName').innerHTML = list
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
          // this.$store.dispatch('items/fetchItemsByUid')
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
.navButtons{
  a,
  button {
    color: $subColor;
  }
  .signInButton{
    border-color: $subColor;
    color: $subColor;
    padding: 4px 12px;
    border-radius: 3px;
    text-decoration: none;
    &:hover{
      cursor: pointer;
      background-color: $subColor;
      color: #FFF;
    }
  }
  .signOutButton{
    border: none;
    font-size: 80%;
    cursor: pointer;
  }
}

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
  border-radius: 5px;
  label{
    border: 1px solid $subColor;
    background-color:#FFF;
    border-radius: 3px;
    color: $subColor;
    padding: 5px 10px;
    &:hover{
      cursor: pointer;
      background-color: $subColor;
      color: #FFF;
    }
    input{
      display: none;
    }
  }
  .fileName{
    font-size: 80%;
    padding-top: 5px;
  }
}
.categoryButtons{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li{
    margin-right: 5px;
  }
  a{
    display: inline-block;
    border: 1px solid $keyColor;
    font-size: 85%;
    height: 2.4em;
    line-height: 2.2em;
    border-radius: 2.4em;
    padding: 0 10px;
    color: $keyColor;
    text-decoration: none;
    margin-bottom: 5px;
    &:hover,
    &.selected{
      background-color: $keyColor;
      color: #FFF;
    }
  }
}
</style>
