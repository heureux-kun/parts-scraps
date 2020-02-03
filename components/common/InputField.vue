<template>
  <input :placeholder="[placeholderText]" type="text" name="tag" value="">
</template>

<script>
export default {
  props: {
    placeholderText: {
      type: String,
      default: '...'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
