// https://nuxt.com/docs/api/configuration/nuxt-config 
export default defineNuxtConfig({
  googleFonts: {
    families: {
      'Public Sans': true,
      'Montserrat' : true
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-12-07',
  css: [
     'bootstrap/dist/css/bootstrap.min.css'
  ],
  modules: [
    '@nuxtjs/google-fonts',
  ],
  app:{
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', 
          type: 'text/javascript'},
      ],
    },
  },
});