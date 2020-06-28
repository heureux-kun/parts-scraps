<template>
  <div id="Content">
    <h1>ユーザーのページ</h1>
    <ul class="itemsWrapper">
      <li v-for="item in getItmes" :key="item.id">
        <img v-bind:src="item.downloadUrl">
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  components: {
    // Item
  },
  data () {
    return {
    }
  },
  computed: {
    getItmes () {
      return this.$store.getters['items/userItems']
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
