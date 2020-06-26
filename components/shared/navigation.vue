<template>
  <aside>
    <nav id="Category">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <nuxt-link :to="'/parts/'+category.slug">
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
      categories: this.$store.state.categories
    }
  }
}
</script>
