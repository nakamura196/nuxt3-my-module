import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  build: {
    transpile: ["vuetify"],
  },
})
