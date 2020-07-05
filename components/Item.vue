<template>
  <li>
    <a href="#">
      <img :src="downloadUrl">
    </a>
    <p class="operation">
      <a href="#" class="addButton">+ add</a>
      <a href="#" class="editButton">edit</a>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    downloadUrl: {
      type: String,
      default: ''
    },
    categoryId: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
li a{
  display: block;
  &:hover img{
    filter: alpha(opacity=80);
    -moz-opacity: 0.8;
    opacity: 0.8;
  }
}
.operation{
  // border-top: 1px solid #ccc;
  margin-top: 10px;
  // padding-top: 10px;
  a{
    color: $keyColor;
    filter: alpha(opacity=60);
    -moz-opacity: 0.6;
    opacity: 0.6;
    display: inline-block;
    margin-right: 10px;
    &:hover{
      filter: alpha(opacity=100);
      -moz-opacity: 1.0;
      opacity: 1.0;
    }
  }
}
</style>
