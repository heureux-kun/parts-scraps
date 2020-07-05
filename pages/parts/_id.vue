<!--
/parts/_id.vue
-->

<template>
  <div id="Content">
    <h1 class="title">
      {{ $store.state.categories[$route.params.id].name }}
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
import firebase from '~/plugins/firebase'
import Item from '~/components/Item.vue'

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
    getItems () {
      // return this.$store.getters['items/itemsCategory' + this.$route.params.id]
      // console.log('route：' + this.$route.params.id)
      // return this.$store.getters['items/itemsByCategory'](this.$route.params.id)
      return this.$route.params.id && this.$store.getters['items/itemsByCategory'](this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
