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
  },
  mounted () {
    console.log(process.env.FIRE_API_KEY)
    console.log(process.env.FIRE_AUTH_DOMAIN)
    console.log(process.env.FIRE_DATABASE_URL)
    console.log(process.env.FIRE_PROJECT_ID)
    console.log(process.env.FIRE_STORAGE_BUCKET)
    console.log(process.env.FIRE_MSG_SENDER_ID)
  },
}
</script>
