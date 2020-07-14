<template>
  <button :class="[kind]" @click="clickEvent">
    {{ text }}
  </button>
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
  },
  methods: {
    clickEvent () {
      this.$emit('from-child')
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  border-color: #333;
  color: #333;
  padding: 4px 12px;
  border-radius: 3px;
  text-decoration: none;
  &.small{
    font-size: 70%;
    padding: 6px 10px;
  }
  &:hover{
    cursor: pointer;
    background-color: #333;
    color: #FFF;
    filter: alpha(opacity=70);
    -moz-opacity: 0.7;
    opacity: 0.7;
  }
  &.action{
    background-color: #1BD3A1;
    border: 1px solid #1BD3A1;
    color: #FFF;
  }
}
</style>
