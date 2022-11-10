<script setup lang="ts">
import useStore from '@/store';
import { storeToRefs } from 'pinia'
const { val } = storeToRefs(useStore().test)

</script>
<template>
  pageA
  {{val}}
</template>