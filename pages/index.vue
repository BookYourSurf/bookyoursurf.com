<template>
  <div class="index">
    <HomeHeroSection
      class="mt-2-0"
      image="./images/surf_lesson_bali.png"
      heading="One app for all&nbsp;things surfing"
      content="Discover trusted coaches, breathtaking surf photography, unforgettable lessons, local guides, and the gear that keeps you moving—all in one seamless app for every surfer."
    ></HomeHeroSection>
    <HomeEmailSignup
      class="index__home-email-signup"
      heading="Join the journey"
      content="We’re building the all-in-one surf app—and you can watch it unfold. Get behind-the-scenes updates and be ready when it launches."
      submit-text="Notify me!"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.index {
  background-image: url(/images/background.png);
  background-size: cover;
  width: 100%;
  position: absolute;
}
.index__home-email-signup {
  position: relative;
  top: -120px;
}
</style>
