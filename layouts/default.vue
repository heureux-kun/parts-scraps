<template>
  <div id="Wrapper">
    <my-header />
    <my-navigation />
    <main>
      <nuxt />
    </main>
    <my-footer />
  </div>
</template>

<script>
import myHeader from '~/components/shared/header'
import myNavigation from '~/components/shared/navigation'
import myFooter from '~/components/shared/footer'

export default {
  components: {
    myHeader,
    myNavigation,
    myFooter
  }
}
</script>
