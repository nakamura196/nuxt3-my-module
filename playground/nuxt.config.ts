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
  modules: ["../src/module"],
  // MyModule: {},
  build: {
    transpile: ["vuetify"],
  },
});
