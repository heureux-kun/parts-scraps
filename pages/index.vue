<template>
  <div id="Content">
    <ul class="itemsWrapper">
      <li v-for="item in getItmes" :key="item.id">
        <img v-bind:src="item.downloadUrl">
        <span class="categoryName">{{ this.categories[2].name }}{{ item.category }}</span>
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
      categories: [
        { id: 1, name: 'header', link: 'header' },
        { id: 2, name: 'global navigation', link: 'global-navigation' },
        { id: 3, name: 'breadcrumb list', link: 'breadcrumb-list' },
        { id: 4, name: 'pagetop', link: 'pagetop' },
        { id: 5, name: 'card', link: 'card' },
        { id: 6, name: 'form', link: 'form' },
        { id: 7, name: 'footer', link: 'footer' }
      ],
      items: []
    }
  },
  computed: {
    getItmes () {
      return this.$store.getters['items/items']
    },
    limitCount () {
      return this.members
    }
  },
  created () {
    this.$store.dispatch('items/fetchItems')
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
