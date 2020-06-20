require('dotenv').config()

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'blue',
    height: '5px'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/app.scss',
    'modern-css-reset'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/firebase',
    'plugins/userAuthStateChanged'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com/'
  },
  env: {
    FIRE_API_KEY: process.env.FIRE_API_KEY,
    FIRE_AUTH_DOMAIN: process.env.FIRE_AUTH_DOMAIN,
    FIRE_DATABASE_URL: process.env.FIRE_DATABASE_URL,
    FIRE_PROJECT_ID: process.env.FIRE_PROJECT_ID,
    FIRE_STORAGE_BUCKET: process.env.FIRE_STORAGE_BUCKET,
    FIRE_MSG_SENDER_ID: process.env.FIRE_MSG_SENDER_ID,
    FIRE_APP_ID: process.env.FIRE_APP_ID
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
