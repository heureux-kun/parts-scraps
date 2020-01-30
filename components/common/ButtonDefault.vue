<template>
  <div>
    <button :class="[kind]">
      {{ text }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button Default'
    },
    kind: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  font-size: 12px;
  border-color: #000;
  color: #000;
  padding: 8px 20px;
  border-radius: 5px;
  text-decoration: none;
  &.primary{
    color: #FFF;
    background-color: red;
  }
}
</style>
