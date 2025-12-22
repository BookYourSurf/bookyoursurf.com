<template>
  <div class="home-hero  ">
    <div class="home-hero__content flex justify-center align-center column">
      <h1 class="home-hero__heading" v-html="formattedHeading"></h1>
      <p v-if="subheading" class="home-hero__subheading mt-1-0">
        {{ subheading }}
      </p>
      <Search class="mt-2-0" variant="hero"></Search>
      <NuxtLink v-if="exploreLinkText" :to="exploreLinkTo" class="home-hero__explore-link">
        <span v-html="formattedExploreText"></span>
      </NuxtLink>

    </div>
  </div>
</template>

<script setup lang="ts">
interface AnimationOptions {
  typingSpeed?: number
  pauseDuration?: number
  deleteSpeed?: number
  initialDelay?: number
  deleteDelay?: number
}

const props = withDefaults(
  defineProps<{
    baseText: string
    words: string[]
    animationOptions?: AnimationOptions
    exploreLinkText?: string
    exploreLinkTo?: string
    subheading?: string
  }>(),
  {
    animationOptions: () => ({
      typingSpeed: 100,
      pauseDuration: 2000,
      deleteSpeed: 50,
      initialDelay: 500,
      deleteDelay: 100
    }),
    exploreLinkText: 'Or _explore_ places around you',
    exploreLinkTo: '/explore',
    subheading: 'Join our mailing list to get fresh updates, insider news, and special invites straight to your inbox. No spam, just the good stuff.'
  }
)

const { formatTextWithUnderscores, useWordRotation } = useTextFormatter()

const { fullText } = useWordRotation(props.baseText, props.words, props.animationOptions)

const formattedHeading = computed(() => {
  return formatTextWithUnderscores(fullText.value)
})

const formattedExploreText = computed(() => {
  if (!props.exploreLinkText) return ''
  return formatTextWithUnderscores(props.exploreLinkText)
})
</script>

<style lang="scss" scoped>
.home-hero__heading,
.home-hero__subheading {
  text-align: center;
  max-width: 400px;

}

.home-hero__content {
  width: 100%;
  max-width: 500px;
  margin: auto;
  margin-top: 4rem;
}

.home-hero__explore-link {
  text-align: center;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline
  }
}

</style>