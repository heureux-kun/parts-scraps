<template>
  <aside>
    <nav id="Category">
      <ul>
        <li v-for="item in items" :key="item.id">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      items: [
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
