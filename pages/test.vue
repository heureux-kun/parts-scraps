<template>
  <div id="Content">
    index
    <button-default :text="text" />
    <button-default :text="text2" :kind="kind" />
    <logo />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ButtonDefault from '~/components/common/ButtonDefault.vue'

export default {
  components: {
    Logo,
    ButtonDefault
  },
  data: () => ({
    text: 'ボタンだよ',
    text2: 'primaryボタンだよ',
    kind: 'primary'
  })
}
</script>
