// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src',
  components: ['@/components', '@/components/parts', '@/components/blocks', '@/components/forms'],
  modules: [],
  // css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css', '@/assets/styles/style.scss'],
  // build: {
  //   transpile: ['vuetify'],
  // },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
