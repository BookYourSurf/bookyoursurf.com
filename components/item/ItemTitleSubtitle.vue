<template>
  <div class="item-title-subtitle">
    <h3 class="item-title-subtitle__title">{{ title }}</h3>
    <p class="item-title-subtitle__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
