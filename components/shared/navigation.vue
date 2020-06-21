<template>
  <aside>
    <nav id="Category">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <a :href="category.link">{{ category.name }}</a>
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
        { name: 'header', link: '#' },
        { name: 'global navigation', link: '#' },
        { name: 'breadcrumb list', link: '#' },
        { name: 'page top', link: '#' },
        { name: 'card', link: '#' },
        { name: 'form', link: '#' },
        { name: 'footer', link: '#' }
      ]
    }
  }
}
</script>
