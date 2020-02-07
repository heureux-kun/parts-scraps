<template>
  <input
    :placeholder="[placeholderText]"
    :class="[width]"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    type="text"
    name="tag"
  >
</template>

<script>
export default {
  props: {
    placeholderText: {
      type: String,
      default: '...'
    },
    width: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
input{
  border-radius: 5px;
  border: 1px solid #CCC;
  padding: 4px 8px;
  margin: 10px 0;
  &::placeholder{
    color: #BBB;
  }
  &.withSmall{
    width: 200px;
  }
  &.withMiddle{
    width: 400px;
  }
  &.withFull{
    width: 100%;
  }
}
</style>
