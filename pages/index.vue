<template>
  <div id="Content">
    <div v-for="item in getItmes" :key="item.id">
      {{ item.image }} {{ item.category }}
    </div>
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
  computed: {
    getItmes () {
      return this.$store.getters.items
    }
  },
  created () {
    this.$store.dispatch('fetchItems')
  },
  methods: {
  }
}
</script>
