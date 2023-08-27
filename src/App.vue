<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <header>
    <PageHeader />
  </header>

  <RouterView />

  <footer>
    <PageFooter />
  </footer>
</template>
