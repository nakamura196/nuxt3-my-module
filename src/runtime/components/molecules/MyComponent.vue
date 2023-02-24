<script lang="ts" setup>

import { useFuse } from '#imports';

const {search} = useFuse();

const res = ref(search())



</script>

<template>
  <div>
    はじめてのコンポーネント
    <v-btn
      color="primary"
      flat
      @click="res.total = 10"
    >
      あああ
    </v-btn>

    {{ res }}
  </div>
</template>