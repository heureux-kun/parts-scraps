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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400&display=swap', rel: 'stylesheet' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#1BD3A1',
    height: '5px'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss',
    'modern-css-reset'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variable.scss',
      '@/assets/scss/_mixin.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/firebase',
    'plugins/userAuthStateChanged',
    'plugins/magic-grid'
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
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }
    ]
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
