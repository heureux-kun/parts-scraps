<template>
  <div @click="clickEvent" class="modalAddItem">
    <div @click="stopEvent" class="modalContent">
      <a @click="clickEvent" href="#" class="closeButton">
        x
      </a>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickEvent () {
      this.$emit('from-child')
    },
    stopEvent () {
      event.stopPropagation()
    }
  }
}
</script>

<style lang="scss" scoped>
.modalAddItem{
  /* 要素を重ねた時の順番 */
  z-index:1;

  /* 画面全体を覆う設定 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}
.modalContent{
  position: relative;
  z-index: 2;
  width: 50%;
  padding: 20px;
  background:#fff;
  p{
    margin-bottom: 10px;
  }
}
.closeButton{
  position: absolute;
  right: 0;
  top: 0;
}
</style>
