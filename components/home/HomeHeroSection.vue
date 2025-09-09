<template>
  <div class="home-hero">
    <Image class="home-hero__image" :image="image" />
    <div class="home-hero__content">
      <h1 class="home-hero__heading pr-6-0" v-html="formattedHeading"></h1>
      <p
        class="home-hero__subheading mt-1-0 pr-6-0"
        v-html="formattedContent"
      ></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
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
  text-align: center;
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
