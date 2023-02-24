import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addServerHandler } from '@nuxt/kit'

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    basicAuth: {
      pairs?: Record<string, string>
    }
  }
}
export interface ModuleOptions {
  enabled?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'basic-auth',
    configKey: 'basicAuth',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    enabled: true,
  },
  setup (options, nuxt) {
    if (!options.enabled) {
      return
    }

    /*
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    */

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    addServerHandler({
      middleware: true,
      handler: resolve(runtimeDir, 'server/middleware/auth'),
    })
  }
})
