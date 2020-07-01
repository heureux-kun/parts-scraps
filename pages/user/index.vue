<template>
  <div id="Content">
    <h1>ユーザーのページ</h1>
    <ul class="itemsWrapper">
      <li v-for="item in ItemsByUid" :key="item.id">
        <img :src="item.downloadUrl">
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  layout: 'user',
  components: {
    // Item
  },
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    getItems () {
      return this.$store.getters['items/items']
    },
    ItemsByUid () {
      return this.getItems.filter(item => item.author === this.user.uid)
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
