require('dotenv').config()

const API_KEY = process.env.API_KEY

export default {
  mode: 'spa',
  router: {
    middleware: ['index']
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/vue-highcharts.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/style-resources'],
  axios: {
    proxy: true,
    browserBaseURL: 'https://opendata.resas-portal.go.jp/api',
    // credentials: true,
    init: axios => {
      axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'
    }
  },
  proxy: {
    '/api/': { target: 'http:localhost:3000', pathRewrite: { '^/api/': '/' } }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    API_KEY
  }
}
