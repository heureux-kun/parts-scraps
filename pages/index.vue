<template>
  <div id="Content">
    index
    <button-wide />
    <counter />
    <logo />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ButtonWide from '~/components/common/ButtonWide.vue'
import Counter from '~/components/common/Counter.vue'

export default {
  components: {
    Logo,
    ButtonWide,
    Counter
  }
}
</script>
</script>
