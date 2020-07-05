<!--
/user/parts/index.vue
-->

<template>
  <div id="Content">
    <h1 class="title">
      all
    </h1>
    <transition>
      <ul class="itemsWrapper">
        <magic-grid>
          <item
            v-for="item in itemsByUid"
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
import uuid from 'uuid'
import firebase from '~/plugins/firebase'
import Item from '~/components/Item.vue'

export default {
  layout: 'user',
  components: {
    Item
  },
  data () {
    return {
    }
  },
  computed: {
    getItems () {
      return this.$store.getters['items/items']
    },
    user () {
      return this.$store.getters.user
    },
    itemsByUid () {
      return this.getItems.filter(item => item.author === this.user.uid)
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
