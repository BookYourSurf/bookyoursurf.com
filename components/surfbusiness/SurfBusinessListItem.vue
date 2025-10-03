<template>
  <div class="surf-business-list-item__container" ref="listItemRef" :class="{selected: isSelected}">
    <div
      class="surf-business-list-item flex-row"
      :class="{ selected: isSelected }"
      @click="handleItemClick"
    >
      <Image
        class="surf-business-list-item__image ratio--15to16"
        :image="surfBusiness.image"
      />
      <div class="surf-business-list-item__content ml-1-0">
        <span class="surf-business-list-item__type weight-500">
          {{ getBusinessTypeLabel(surfBusiness.type) }}
        </span>
        <div class="surf-business-list-item__title-subtitle mt-0-25">
          <h3 class="surf-business-list-item__title">{{ surfBusiness.name }}</h3>
          <p class="surf-business-list-item__subtitle">{{ surfBusiness.address }}</p>
        </div>
        <Rating
          class="surf-business-list-item__rating"
          :rating="surfBusiness.aggregatedRating.rating"
          :review-count="surfBusiness.aggregatedRating.reviewCount"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SurfBusiness } from "~/types/types"

const props = defineProps<{
  surfBusiness: SurfBusiness
}>()

const { getBusinessTypeLabel } = useBusinessTypeFormatter()
const { selectedBusiness, selectBusiness } = useSurfBusinesses()

const listItemRef = ref<HTMLElement>()

const isSelected = computed(() => {
  return selectedBusiness.value?.id === props.surfBusiness.id

})

const handleItemClick = () => {
  selectBusiness(props.surfBusiness)
}

// Watch for when this item becomes selected and scroll into view
watch(isSelected, (newValue) => {
  if (newValue) {
    nextTick(() => {
      if (listItemRef.value) {
        listItemRef.value.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    })
  }
})
</script>

<style lang="scss" scoped>
.surf-business-list-item__container {
  padding: $padding-item $padding-item 0 $padding-item;
  border-radius: $border-radius;
  border: 1px solid transparent;
  max-width: 420px;

  &:hover:not(.as-card) {
    background-color: rgba($primary-orange, 0.05);
    border-left: 4px solid $primary-orange;
    // padding-left: calc($padding-item - 4px);
  }

  &.selected:not(.as-card) {
    background-color: rgba($primary-orange, 0.05);
    border-left: 4px solid $primary-orange;
    // padding-left: calc($padding-item - 4px);
  }

  &.as-card {
    background-color: $white;
    position: relative;
    margin: $padding-item;
  } 
}


.surf-business-list-item {
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
.surf-business-list-item__image {
  max-width: 100px;
}
.surf-business-list-item__type {
  color: $grey;
  text-transform: uppercase;
}
</style>
