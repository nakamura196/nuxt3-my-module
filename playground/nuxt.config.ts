export default defineNuxtConfig({
  runtimeConfig: {
    nakamuraTest: {
      pairs: {
        admin: "admin",
      },
    },
    public: {
      bbb: {
        pairs: {
          admin: "admin",
        }
      }
    }
  },
  css: [
    // "vuetify/lib/styles/main.sass",
    // "mdi/css/materialdesignicons.min.css",
    "@/assets/styles/main.css",
  ],
  modules: [
    "../src/module", 
    "@nuxtjs/i18n"
  ],
  // MyModule: {},
  build: {
    transpile: ["vuetify"],
  },
  
  i18n: {
    locales: ["ja", "en"], // used in URL path prefix
    defaultLocale: "ja",
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: "ja",

      messages: {
        ja: {}, //: {},
        en: {}, //: {},
      },
    },
  }
  
});
