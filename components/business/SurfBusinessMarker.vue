<template>
  <div
    v-if="map"
    class="marker"
    ref="markerContent"
    :class="{ 'marker--active': isActive }"
  >
    <Icon
      :icon="markerIcon"
      class="icon--15x15"
      :class="isActive ? 'color-white' : 'color-primary-orange'"
    />
  </div>
</template>

<script setup lang="ts">
import type { SurfBusiness } from "~/types/types"
import { SurfBusinessType } from "~/types/types"

const props = defineProps<{
  map: google.maps.Map
  position: google.maps.LatLngLiteral
  business: SurfBusiness
}>()

const markerContent = ref<HTMLElement>()
let marker: google.maps.marker.AdvancedMarkerElement
const { selectedBusiness, selectBusiness } = useSurfBusinesses()

// Map business types to icon names
const iconMap: Record<SurfBusinessType, string> = {
  [SurfBusinessType.SURF_SPOT]: "surf-spot",
  [SurfBusinessType.SURF_SHOP]: "surf-shop",
  [SurfBusinessType.SURF_GUIDE]: "surf-guide",
  [SurfBusinessType.SURF_COACHING]: "surf-coaching",
  [SurfBusinessType.PHOTOGRAPHY]: "photography"
}

const markerIcon = computed(() => {
  return iconMap[props.business.type] || "surf-spot"
})

const isActive = computed(() => {
  return selectedBusiness.value?.id === props.business.id
})

onMounted(() => {
  if (markerContent.value) {
    marker = new google.maps.marker.AdvancedMarkerElement({
      map: toRaw(props.map),
      position: { lat: props.position.lat, lng: props.position.lng },
      content: toRaw(markerContent.value)
    })
    marker.addListener("gmp-click", () => {
      selectBusiness(props.business)
    })
  }
})

onUnmounted(() => {
  if (marker) {
    marker.map = null
  }
})
</script>

<style lang="scss" scoped>
.marker {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $white;
  position: relative;
  pointer-events: auto;
  border-radius: 100%;
  padding: 0.25rem 0.25rem;

  &.marker--active {
    background-color: $primary-orange;
  }
}
</style>
