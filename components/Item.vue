<template>
  <div>
    <p>aaa</p>
    <p>{{ item.image }}</p>
    <p>{{ item.category }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>
