import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
} from "@nuxt/kit";

import { resolve } from "path";
import { fileURLToPath } from "url";
import { 
  // addServerHandler, 
  addComponent, 
  // addImports 
} from "@nuxt/kit";

/*
declare module "@nuxt/schema" {
  interface RuntimeConfig {
    nakamuraTest: {
      pairs?: Record<string, string>;
    };
  }
}
*/

export interface ModuleOptions {
  enabled?: boolean;
  // siteName?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-minimal-archive",
    configKey: "minimalArchive",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    enabled: true,
    // siteName: "My Site",
  },
  setup(options, nuxt) {
    if (!options.enabled) {
      return;
    }

    // css
    // nuxt.options.css.push('font-awesome/css/font-awesome.css')

    // const resolver = createResolver(import.meta.url)

    const resolver = createResolver(import.meta.url)

    /*
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    */

    addPlugin(resolver.resolve('./runtime/plugins/vuetify'))

    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    /*
    addServerHandler({
      middleware: true,
      handler: resolve(runtimeDir, 'server/middleware/auth'),
    })
    */

    /*
    addServerHandler({
      // middleware: true,
      handler: resolve(runtimeDir, 'server/api/test'),
    })
    */

    addComponent({
      name: "MyComponent", // name of the component to be used in vue templates
      export: "default", // (optional) if the component is a default export
      // export: 'MyAwesomeComponent', // (optional) if the component is a named (rather than default) export
      // filePath should be package name or resolved path
      // if the component is created locally, preferably in `runtime` dir
      filePath: resolve(runtimeDir, "components", "molecules", "MyComponent.vue"),
      // '@vue/awesome-components' //
    });

    /*
    addImports({
      name: 'useComposable', // name of the composable to be used
      // as: 'useComposable', 
      as: 'useComposable', // (optional) if the composable is a named (rather than default) export
      from: resolver.resolve('runtime/composables/useComposable') // path of composable 
    })
    */
    addImportsDir(resolve(runtimeDir, "composables"));
  },
});
