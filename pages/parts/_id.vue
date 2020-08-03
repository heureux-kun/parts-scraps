<!--
/parts/_id.vue
-->

<template>
  <div id="Content">
    <h1 class="title">
      {{ this.getCategoryNameByparamsId }}
    </h1>
    <transition>
      <ul v-show="itemsShow" class="itemsWrapper">
        <magic-grid>
          <item
            v-for="item in items"
            :key="item.id"
            :downloadUrl="item.downloadUrl"
            :id="item.id"
            :categoryId="item.categoryId"
            :showAddButton="addButtonShow"
            :showEditButton="showEditButton"
            v-on:add-click-event="addItem(item)"
          />
        </magic-grid>
      </ul>
    </transition>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import Item from '~/components/Item.vue'

const db = firebase.firestore()

export default {
  components: {
    Item
  },
  data () {
    return {
      // items: [],
      categoryId: parseInt(this.$route.params.id) - 1
    }
  },
  computed: {
    getCategoryNameByparamsId () {
      return this.$store.state.categories[this.categoryId].name
    },
    items () {
      // console.log('route：' + this.$route.params.id)
      // return this.$route.params.id && this.$store.getters['items/itemsByCategory'](this.$route.params.id)
      // return this.$store.getters['items/itemsByCategory']
      return this.$store.getters['items/itemsByCategory' + this.$route.params.id]
      // if (this.$route.params.id) {
      //   return this.$store.getters['items/itemsByCategory'](this.$route.params.id)
      // }
    },
    itemsShow () {
      return !!this.items || false
    },
    addButtonShow () {
      return !!this.$store.state.loggedIn
    }
  },
  methods: {
    // itemの登録===========================
    addItem (item) {
      db.collection('item').add({
        fileName: item.fileName,
        categoryId: item.categoryId,
        author: this.$store.state.user.uid
      })
        .then(function (docRef) {
          // console.log(downloadUrl)
          alert('自分のscrapsに保存しました')
        })
        .catch(function (error) {
          // console.error('Error adding document: ', error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
