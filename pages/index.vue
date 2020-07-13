<!--
index.vue
-->

<template>
  <div id="Content">
    <transition>
      <ul v-if="itemsShow" class="itemsWrapper">
        <magic-grid>
          <item
            v-for="item in items"
            :key="item.id"
            :downloadUrl="item.downloadUrl"
            :categoryId="item.categoryId"
            :addButtonShow="addButtonShow"
            :editButtonShow="editButtonShow"
            v-on:childs-event="handleClickParent"
          />
        </magic-grid>
      </ul>
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
      addButtonShow: true,
      editButtonShow: false
    }
  },
  computed: {
    items () {
      return this.$store.getters['items/items']
    },
    itemsShow () {
      return !!this.items || false
    }
  },
  methods: {
    handleClickParent () {
      alert('addクリックされました')
      console.log('addくりっく')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
