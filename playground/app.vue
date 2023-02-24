<script setup lang="ts">
// import { useRuntimeConfig } from '#imports'
// import {useComposable} from "#imports";
const {foo2, foo3} = useMinimalArchive();

const main = () => {
  foo2.value = "あいう"
}


const rc = useRuntimeConfig();
// console.log(rc.bbb);
</script>

<template>
  <div>
    Nuxt module playground!

    <br>

    {{ rc.siteName || "あああ" }}

    <br>

    {{ foo2 }}

    <br>

    {{ foo3 }}

    <br>

    <!-- <MyAwesomeComponent /> -->

    <MyComponent />

    <br>

    <button @click="main()">
      あああ
    </button>

    <br>

    bbb
  </div>
</template>


