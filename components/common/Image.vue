<template>
  <img class="image" :src="image" />
</template>

<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: $border-radius;
}
</style>
