<template>
  <div @click="clickEvent" class="modalAddItem">
    <div @click="stopEvent" class="modalContent">
      <a @click="clickEvent" href="#" class="closeButton">
        <font-awesome-icon :icon="['far', 'times-circle']" class="normal" />
        <font-awesome-icon :icon="['fas', 'times-circle']" class="hover" />
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
  padding: 30px 25px;
  background:#fff;
  border-radius: 10px;
  p{
    margin-bottom: 10px;
  }
}
.closeButton{
  position: absolute;
  font-size: 120%;
  right: 10px;
  top: 10px;
  svg{
    position: absolute;
    right: 0px;
    top: 0px;
    color: $subColor;
    font-size: 120%;
  }
  .normal{
      display: block;
    }
    .hover{
      display: none;
    }
  &:hover{
    .normal{
      display: none;
    }
    .hover{
      display: block;
    }
  }
}
</style>
