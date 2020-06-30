<template>
  <div id="Content">
    <h1 class="title">
      {{ $store.state.categories[$route.params.id].name }}
    </h1>
    <ul class="itemsWrapper">
      <li v-for="item in getItems" :key="item.id">
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
      items: []
    }
  },
  computed: {
    getItems () {
      return this.$store.getters['items/itemsCategory(this.$route.params.id)']
    }
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
