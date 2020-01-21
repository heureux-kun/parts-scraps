<template>
  <div id="Wrapper">
    <header>
      <h1 id="Logo">
        <img src="~assets/images/logo.png" alt="Parts Scraps">
      </h1>
      <nav>
        <ul>
          <li><a href="#">sign in（With GitHub）</a></li>
        </ul>
      </nav>
    </header>
    <aside>
      <nav id="Category">
        <ul>
          <li><a href="#">header</a></li>
          <li><a href="#">global navigation</a></li>
          <li><a href="#">breadcrumb list</a></li>
          <li><a href="#">button</a></li>
          <li><a href="#">page top</a></li>
          <li><a href="#">card</a></li>
          <li><a href="#">form</a></li>
          <li><a href="#">footer</a></li>
        </ul>
      </nav>
    </aside>
    <main>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">
              index
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              about
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/mypage">
              mypage > index
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/mypage/setting">
              mypage > setting
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt />
    </main>
    <footer>© 2020 parts scraps.</footer>
  </div>
</template>

<script>
import 'modern-css-reset'
export default {

}
</script>
