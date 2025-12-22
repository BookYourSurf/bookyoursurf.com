<template>
  <div class="index">
    <HomeHeroSection
      class="mt-6-0"
      base-text="One app for all things "
      :words="['guiding', 'coaching', 'lessons', 'surfing']"
      :animation-options="{
        typingSpeed: 100,
        pauseDuration: 2000,
        deleteSpeed: 50,
        initialDelay: 500,
        deleteDelay: 100
      }"
    ></HomeHeroSection>
    <!-- <HomeImageBanner
    class="mt-12-0"
      :images="[
        '/images/surf_lesson_bali.png',
        'images/activities/surf-photography/canggu-lifestyle-3.jpg',
        '/images/places/bells-beach.jpg',
        '/images/places/pipeline.jpg',
        '/images/surf-photography/sayulita-photography.jpg',
        '/images/surf-photography/sayulita-photography.jpg'
      ]"
    ></HomeImageBanner> -->
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.index {
  background-image: url(/images/background.png);
  background-size: cover;
  width: 100%;
  position: absolute;
  height: 80%;
  overflow: hidden;
}
</style>