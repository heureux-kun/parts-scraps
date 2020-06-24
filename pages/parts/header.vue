<template>
  <div id="Content">
    <h1 class="title">
      header
    </h1>
    <ul class="itemsWrapper">
      <li v-for="item in getItmesHeader" :key="item.id">
        <img v-bind:src="item.downloadUrl">
      </li>
    </ul>
  </div>
</template>

<script>
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
    getItmesHeader () {
      return this.$store.getters['items/itemsHeader']
    }
  },
  created () {
    this.$store.dispatch('items/fetchItemsHeader')
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
