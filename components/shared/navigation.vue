<template>
  <aside>
    <nav id="Category">
      <ul>
        <li>
          <nuxt-link :to="/parts/">
            all
          </nuxt-link>
        </li>
        <li v-for="category in categories" :key="category.sort">
          <nuxt-link :to="'/parts/'+category.id">
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  }
}
</script>
