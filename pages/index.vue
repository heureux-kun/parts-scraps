<template>
  <div id="Content">
    {{ items }}
    <!-- <div v-for="item in items" :key="item.id">
      {{ item.category }}
    </div> -->
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
// import Item from '~/components/Item.vue'

// 画像の取得テスト
const storage = firebase.storage()
const storageRef = storage.ref()
const image = storageRef.child('images/images01.jpg')
console.log('downRef：' + image)

export default {
  components: {
    // Item
  },
  data () {
    return {
      items: []
    }
  },
  // computed: {
  //   // dispatchで「nuxtServerInit」のactionを呼び出す
  //   getItmes () {
  //     console.log('computed')
  //     return this.$store.dispatch('nuxtServerInit')
  //   }
  // },
  created () {
    this.fetchItems()
    console.log('created')
  },
  mounted () {
    // getter経由でitemを取得する
    this.items = this.$store.getters.items
    console.log('mounted')
  },
  methods: {
    fetchItems () {
      this.$store.dispatch('nuxtServerInit')
    }
    // getData () {
    //   const db = firebase.firestore()
    //   const itemArray = []
    //   db.collection('item').get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       itemArray.push(doc.data())
    //     })
    //     this.item = itemArray
    //   })
    // }
  }
}
</script>
