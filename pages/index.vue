<template>
  <div id="Content">
    <ul class="itemsWrapper">
      <li v-for="item in getItems" :key="item.id">
        <img :src="item.downloadUrl">
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
// import Item from '~/components/Item.vue'

// 画像の取得テスト
// const url = firebase.storage().ref().child('images/images01.jpg').getDownloadURL()
// console.log('url：' + url)

export default {
  components: {
    // Item
  },
  data () {
    return {
      categories: this.$store.state.categories,
      items: []
    }
  },
  computed: {
    getItems () {
      return this.$store.getters['items/items']
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.itemsWrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    flex-basis: 300px;
    margin-bottom: 20px;
  }
}
</style>
