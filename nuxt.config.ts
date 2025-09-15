// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || "Unauthorized",
      GOOGLE_MAPS_MAP_ID: process.env.GOOGLE_MAPS_MAP_ID || ""
    }
  },
  components: [
    "~/components/navigation",
    "~/components/common",
    "~/components/home",
    "~/components/form",
    "~/components/business",
    "~/components/map"
  ],
  css: ["/assets/styles/index.scss"],
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/leaflet",
    "@nuxtjs/google-fonts",
    "@regle/nuxt"
  ],
  googleFonts: {
    families: {
      Jost: [200, 300, 400, 500, 600, 700]
    },
    display: "swap"
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/assets/styles/variables/index.scss" as *;'
        }
      }
    }
  }
})
