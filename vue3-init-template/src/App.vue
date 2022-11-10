<script setup lang="ts">
import { ref } from 'vue';
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const locale = ref(zhCn) // en

</script>
<template>
  <ElConfigProvider :locale="locale">
    <router-view></router-view>
  </ElConfigProvider>
</template>
<style>

</style>