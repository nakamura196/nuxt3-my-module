<script lang="ts" setup>
import { useHead, useRuntimeConfig } from "#imports";

const config = useRuntimeConfig();

const siteName = config.public.title || "サイトの名前"; //

useHead({
  titleTemplate: (titleChunk) => {
    return siteName !== titleChunk ? `${titleChunk} - ${siteName}` : siteName;
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="#E64A19"
      :height="5"
    />
    <NuxtPage />
  </NuxtLayout>
</template>
