<template>
  <div>
    <a @click="add">（+）{{ counter }}</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    add () {
      this.counter++
    }
  }
}
</script>
