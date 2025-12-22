<template>
  <div class="home-image-banner flex row gap-48">
    <Image 
      v-for="(image, index) in images" 
      :key="index"
      class="home-image-banner__image ratio--4to3" 
      :class="{ 'mt-3-0': index % 2 === 1 }"
      :image="image" 
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  images: string[]
}

withDefaults(defineProps<Props>(), {
  images: () => []
})
</script>
<style lang="scss">
.home-image-banner {
    overflow: hidden;
}
.home-image-banner__image {
    max-width: 288px;
    border-radius: $border-radius-container;
}

</style>
