<template>
  <button>{{ text }}</button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Hello Vue'
    }
  }
}
</script>
<style scoped>
  button {
    color: green;
    border-radius: 5px;
    font-size: 18px;
    line-height: 1.5;
    padding: 0 10px;
  }
</style>
