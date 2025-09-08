<template>
  <div class="home-hero">
    <Image class="home-hero__image" :image="image" />
    <div class="home-hero__content">
      <h1 class="home-hero__heading pr-6-0">
        {{ headingParts.restOfText }}
        <span class="last-word">{{ headingParts.last }}</span>
      </h1>
      <p class="home-hero__subheading mt-1-0 pr-6-0">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  heading: string
  content: string
}>()

const headingParts = computed(() => {
  const words = props.heading.split(" ")
  const lastWord = words.pop() || ""
  const restOfText = words.join(" ")
  return { restOfText, last: lastWord }
})
</script>

<style lang="scss" scoped>
.last-word {
  color: $primary-orange;
  text-decoration: underline;
}
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
