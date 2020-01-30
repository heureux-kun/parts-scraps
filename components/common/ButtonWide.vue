<template>
  <div>
    <button>
      {{ text }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button Wide'
    }
  }
}
</script>
<style scoped>
button {
  font-size: 18px;
  background-color: #000;
  color: #fff;
  padding: 8px 20px;
  border-radius: 5px;
  text-decoration: none;
}
</style>
