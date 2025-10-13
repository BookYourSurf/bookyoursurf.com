<template>
  <div class="home-hero">
    <div class="home-hero__content">
      <h1 class="home-hero__heading" v-html="formattedHeading"></h1>
      <p class="home-hero__subheading" v-html="formattedContent"></p>
    </div>
    <BusinessSignupForm
      heading="Ready to grow your business?"
      content="Fill out the form below to see what Bookyoursurf can do for your company."
      submit-text="Get started!"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  heading: string
  content: string
}>()

const { formatTextWithUnderscores } = useTextFormatter()

const formattedHeading = computed(() =>
  formatTextWithUnderscores(props.heading)
)
const formattedContent = computed(() =>
  formatTextWithUnderscores(props.content)
)
</script>

<style lang="scss" scoped>
.home-hero {
  display: flex;
  flex-direction: row;
}

.home-hero__heading,
.home-hero__subheading {
  text-align: left;
}

.home-hero__content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 520px;
  margin: auto;
  margin-top: 4rem;
}

.home-hero__image {
  max-width: 700px;
  border-radius: 0 $border-radius-container $border-radius-container 0;
}
</style>
