<!--
/parts/_id.vue
-->

<template>
  <div id="Content">
    <h1 class="title">
      {{ this.getCategoryNameByparamsId }}
    </h1>
    <transition>
      <magic-grid>
        <item
          v-for="item in getItems"
          :key="item.id"
          :downloadUrl="item.downloadUrl"
          :categoryId="item.categoryId"
        />
      </magic-grid>
    </transition>
  </div>
</template>

<script>
import Item from '~/components/Item.vue'

export default {
  components: {
    Item
  },
  data () {
    return {
      items: [],
      categoryId: parseInt(this.$route.params.id) - 1
    }
  },
  computed: {
    getCategoryNameByparamsId () {
      return this.$store.state.categories[this.categoryId].name
    },
    getItems () {
      // console.log('route：' + this.$route.params.id)
      // return this.$route.params.id && this.$store.getters['items/itemsByCategory'](this.$route.params.id)
      // return this.$store.getters['items/itemsByCategory']
      return this.$store.getters['items/itemsByCategory' + this.$route.params.id]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
