<!--
index.vue
-->

<template>
  <div id="Content">
    <transition>
      <magic-grid>
        <item
          v-for="item in getItems"
          :key="item.id"
          :downloadUrl="item.downloadUrl"
          :categoryId="item.categoryId"
        />
      </magic-grid>
    </transition>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import Item from '~/components/Item.vue'

// 画像の取得テスト
// const url = firebase.storage().ref().child('images/images01.jpg').getDownloadURL()
// console.log('url：' + url)

export default {
  components: {
    Item
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

</style>
