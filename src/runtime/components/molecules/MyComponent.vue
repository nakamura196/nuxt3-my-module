<script lang="ts" setup>

const {search} = useFuse();

const res = search()

</script>

<template>
  <div>
    はじめてのコンポーネント
    <v-btn
      color="primary"
      flat
    >
      あああ
    </v-btn>

    {{ res }}
  </div>
</template>