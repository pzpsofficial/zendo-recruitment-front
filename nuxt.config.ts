// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  css: ['~/assets/style/main.css'],
  runtimeConfig: {
    public: {
      apiUrl: '',
      apiSecret: '',
      pusherAppCluster: '',
      pusherAppKey: '',
    },
  },
  typescript: {
    typeCheck: true,
  },
});
