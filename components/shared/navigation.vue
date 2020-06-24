<template>
  <aside>
    <nav id="Category">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <nuxt-link :to="'/parts/'+category.link">
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
      categories: [
        { id: 1, name: 'header', link: 'header' },
        { id: 2, name: 'global navigation', link: 'global-navigation' },
        { id: 3, name: 'breadcrumb list', link: 'breadcrumb-list' },
        { id: 4, name: 'pagetop', link: 'pagetop' },
        { id: 5, name: 'card', link: 'card' },
        { id: 6, name: 'form', link: 'form' },
        { id: 7, name: 'footer', link: 'footer' }
      ]
    }
  }
}
</script>
