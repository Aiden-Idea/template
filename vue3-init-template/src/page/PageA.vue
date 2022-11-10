<script setup lang="ts">
import useStore from '@/store';
import { storeToRefs } from 'pinia'
const { val } = storeToRefs(useStore().test)

</script>
<template>
  pageA
  {{val}}
  <svg-icon icon-class="yonghu"></svg-icon>
  <svg-icon icon-class="kaiguan"></svg-icon>
  <svg-icon icon-class="mima"></svg-icon>
  <svg-icon icon-class="kehuguanli"></svg-icon>
  <svg-icon icon-class="kaiguan"></svg-icon>
</template>