<template>
  <div id="Content">
    <ul v-for="item in getItmes" :key="item.id">
      <li>
        <img
          v-bind:src="item.downloadUrl"
          {{
          item.category
          }}
          {{
          item.imageUrl
          }}
          <
          li
        >
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
