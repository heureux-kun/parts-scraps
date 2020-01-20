<template>
  <div>
    <header>
      <div id="Logo">
        Parts Scraps
      </div>
      <nav>
        <ul>
          <li><a href="#">sign in</a></li>
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
        <button-wide>aaa</button-wide>
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
      <div class="themeToggleButton">
        <a href="#">ThemeToggleButton</a>
      </div>
    </aside>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import 'modern-css-reset'
</script>
