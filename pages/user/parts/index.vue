<template>
  <div id="Content">
    <h1>ユーザーのページ</h1>
    <ul class="itemsWrapper">
      <li v-for="item in getItems" :key="item.id">
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
