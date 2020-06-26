<template>
  <div id="Content">
    <h1 class="title">
      breadcrumb list
    </h1>
    <ul class="itemsWrapper">
      <li v-for="item in getItmes" :key="item.id">
        <img v-bind:src="item.downloadUrl">
      </li>
    </ul>
  </div>
</template>

<script>
const number = '03'
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
      return this.$store.getters['items/itemsCategory' + number]
    }
  },
  created () {
    this.$store.dispatch('items/fetchItemsCategory' + number)
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
