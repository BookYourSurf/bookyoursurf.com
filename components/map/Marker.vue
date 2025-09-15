<template>
    <div v-if="map" class="marker" ref="markerContent" :class="{ 'marker--active': isActive }">
      <Icon :icon="markerIcon" class="icon--15x15" :class="isActive ? 'color-white' : 'color-primary-orange'" />
    </div>
  </template>
  
  <script setup lang="ts">
  import type { SurfLocationDetails } from "~/types/types"
  import { SurfLocationType } from "~/types/types"
  
  const props = defineProps<{
    map: google.maps.Map
    position: google.maps.LatLngLiteral
    location: SurfLocationDetails
  }>()

  const emit = defineEmits<{
    click: [location: SurfLocationDetails]
  }>()
  
  const markerContent = ref<HTMLElement>()
  let marker: google.maps.marker.AdvancedMarkerElement
  const isActive = ref(false)
  
  // Map location types to icon names
  const iconMap: Record<SurfLocationType, string> = {
    [SurfLocationType.SURF_SPOT]: 'surf-spot',
    [SurfLocationType.SURF_SHOP]: 'surf-shop',
    [SurfLocationType.SURF_GUIDE]: 'surf-guide',
    [SurfLocationType.SURF_COACHING]: 'surf-coaching',
    [SurfLocationType.PHOTOGRAPHY]: 'photography'
  }
  
  const markerIcon = computed(() => {
    return iconMap[props.location.type] || 'surf-spot'
  })
  
  onMounted(() => {
    if (markerContent.value) {
      marker = new google.maps.marker.AdvancedMarkerElement({
        map: toRaw(props.map),
        position: { lat: props.position.lat, lng: props.position.lng },
        content: toRaw(markerContent.value)
      })
      marker.addListener("gmp-click", () => {
        isActive.value = !isActive.value
        emit('click', props.location)
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
  