<template>
  <div id="Wrapper">
    <nuxt-link to="/">
      Home page
    </nuxt-link>
    <nuxt-link to="/about">
      about
    </nuxt-link>
    <nuxt-link to="/mypage/setting">
      setting
    </nuxt-link>
    about→<nuxt name="about" /><br>
    <button-wide>aaa</button-wide>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>
