<!--
/user/parts/_id.vue
-->

<template>
  <div id="Content">
    <h1 class="title">
      {{ this.getCategoryNameByparamsId }}
    </h1>
    <transition>
      <magic-grid>
        <item
          v-for="item in itemsByUid"
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
  layout: 'user',
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
    user () {
      return this.$store.getters.user
    },
    getItems () {
      // return this.$store.getters['items/itemsByCategory'](this.$route.params.id)
      // return this.$route.params.id && this.$store.getters['items/itemsByCategory']
      return this.$store.getters['items/itemsByCategory' + this.$route.params.id]
    },
    itemsByUid () {
      return this.getItems.filter(item => item.author === this.user.uid)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
