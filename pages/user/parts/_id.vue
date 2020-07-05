<!--
/user/parts/_id.vue
-->

<template>
  <div id="Content">
    <h1 class="title">
      {{ $store.state.categories[$route.params.id].name }}
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
      // return this.$store.getters['items/itemsByCategory'](this.$route.params.id)
      return this.$route.params.id && this.$store.getters['items/itemsByCategory'](this.$route.params.id)
    },
    itemsByUid () {
      return this.getItems.filter(item => item.author === this.user.uid)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
