<template>
    <div class="surf-location-list-item__container" ref="listItemRef">
      <div 
        class="surf-location-list-item flex-row" 
        :class="{selected: isSelected}"
        @click="handleItemClick"
      >
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
    </div>
</template>

<script setup lang="ts">
import type { SurfLocation } from "~/types/types"

const props = defineProps<{
  surfLocation: SurfLocation
}>()

const { getLocationTypeLabel } = useLocationTypeFormatter()
const { selectedLocation, selectLocation } = useSurfLocations()

const listItemRef = ref<HTMLElement>()

const isSelected = computed(() => {
  return selectedLocation.value?.id === props.surfLocation.id
})

const handleItemClick = () => {
  selectLocation(props.surfLocation)
}
</script>

<style lang="scss" scoped>
.surf-location-list-item__container {
  padding: $padding-item $padding-item 0 $padding-item;
  border-radius: $border-radius;
  border: 1px solid transparent;
  max-width: 420px;


  &:hover {
    background-color: rgba($primary-orange, 0.05);
    border-left: 4px solid $primary-orange;
    // padding-left: calc($padding-item - 4px);
  }
}
.surf-location-list-item {
  align-items: center;
  min-width: 420px;
  width: 100%;
  border-bottom: 1px solid $light-grey;
  padding: 0 0 $padding-item 0;
  cursor: pointer;

  &.selected {
    border-bottom: 0px;
  }
}
.surf-location-list-item__image {
  max-width: 100px;
}
.surf-location-list-item__type {
  color: $grey;
  text-transform: uppercase;
}
</style>