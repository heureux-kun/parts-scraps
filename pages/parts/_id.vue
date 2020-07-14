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
            :categoryId="item.categoryId"
          />
        </magic-grid>
      </ul>
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
