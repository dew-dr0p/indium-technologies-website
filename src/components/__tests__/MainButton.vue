<template>
    <button class="rounded-[2rem] p-6 py-[0.625rem] bg-gradient-to-b from-gradientOne-a to-gradientOne-b shadow-[10px_10px_20px_0px_rgba(170,_170,_204,_0.50),_5px_5px_10px_0px_rgba(170,_170,_204,_0.25)] hover:rounded-[2.5rem] hover:bg-primary hover:shadow-[-1px_-1px_2px_0px_#FFF_inset,_1px_1px_2px_0px_rgba(170,_170,_204,_0.50)_inset]">{{ text }}</button>
</template>

<script setup lang="ts">
defineProps<{
    text: String
}>()
</script>