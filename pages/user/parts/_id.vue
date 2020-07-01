<template>
  <div id="Content">
    <h1 class="title">
      {{ $store.state.categories[$route.params.id].name }}
    </h1>
    <ul class="itemsWrapper">
      <li v-for="item in ItemsByUid" :key="item.id">
        <img :src="item.downloadUrl">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'user',
  components: {
    // Item
  },
  data () {
    return {
      items: [],
      paramsId: this.$route.params.id
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    getItems () {
      return this.$store.getters['items/itemsByCategory'](this.$route.params.id)
    },
    ItemsByUid () {
      return this.getItems.filter(item => item.author === this.user.uid)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
