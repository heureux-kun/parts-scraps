<template>
  <aside>
    <nav id="Category">
      <ul>
        <li>
          <nuxt-link :to="'/user/parts/'">
            all
          </nuxt-link>
        </li>
        <li v-for="category in categories" :key="category.sort">
          <nuxt-link :to="'/user/parts/'+category.id">
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
