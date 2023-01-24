export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Foodi:e',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/header/nav-logo.png'},
      {rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'}
    ],
    script: [
      {
        src: 'https://developers.kakao.com/sdk/js/kakao.js'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui',
    {src: '@/plugins/kakao-login', mode: 'client'},
    {src: '@/plugins/persisted-state', mode: 'client'},
    '@/plugins/vue-chat-scroll',
  ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    //   , {
    //   activeSection: 0,
    //   mouseWheelSensitivity: 120,
    //   showIndicators: false
    // }]
    // '@nuxtjs/auth-next',
    // '@nuxtjs/proxy'
  ],

  server: {
    host: '0.0.0.0',
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.API_URL
  //   }
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    credentials: true,
    // proxy: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  // proxy: {
  //   '/api': {
  //     // target: process.env.API_URL,
  //     target: 'http://localhost:9090',
  //     changeOrigin: true,
  //   },
  // },
}
