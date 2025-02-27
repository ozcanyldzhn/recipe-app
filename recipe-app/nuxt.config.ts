// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-25',
  srcDir: 'app/',
  dir: {
    public: '../public' // ✅ Public klasörünü Nuxt'a tanıtıyoruz
  },
  pages: true,
  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  unhead: {
      renderSSRHeadOptions: {
        omitLineBreaks: false
      }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon-tw',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      Montserrat: true,

    },
  },
})