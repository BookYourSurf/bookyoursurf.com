<template>
  <NuxtLink :to="getLocationLink(surfLocation)">
    <div class="surf-location-list-item flex-row">
      <Image
        class="surf-location-list-item__image ratio--15to16"
        :image="surfLocation.image"
      />
      <div class="surf-location-list-item__content ml-1-0">
        <span class="surf-location-list-item__type weight-500">
          {{ getLocationTypeLabel(surfLocation.type) }}
        </span>
        <ItemTitleSubtitle
          :title="surfLocation.name"
          :subtitle="surfLocation.address"
          class="mt-0-25"
        />
        <ItemRating
          class="surf-location-list-item__rating"
          :rating="surfLocation.aggregatedRating.rating"
          :review-count="surfLocation.aggregatedRating.reviewCount"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { SurfLocation } from "~/types/types"

const props = defineProps<{
  surfLocation: SurfLocation
}>()

const { getLocationTypeLabel, getLocationLink } = useLocationTypeFormatter()
const { selectedLocation } = useSurfLocations()

const listItemRef = ref<HTMLElement>()

const isSelected = computed(() => {
  return selectedLocation.value?.id === props.surfLocation.id
})

// Watch for selection changes and scroll into view
watch(isSelected, (newIsSelected) => {
  if (newIsSelected && listItemRef.value) {
    // Use nextTick to ensure the DOM has updated (especially for the foldout)
    nextTick(() => {
      listItemRef.value?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      })
    })
  }
})
</script>

<style lang="scss" scoped>
.surf-location-list-item {
  align-items: center;
  min-width: 420px;
  width: 100%;
  border-bottom: 1px solid $light-grey;
  padding: $padding-item 0;
}
.surf-location-list-item__image {
  max-width: 100px;
}
.surf-location-list-item__type {
  color: $grey;
  text-transform: uppercase;
}
</style>
