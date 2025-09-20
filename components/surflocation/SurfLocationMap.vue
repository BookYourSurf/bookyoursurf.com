<template>
  <div class="surf-location-map">
    <div ref="mapContainer" class="map" id="map"/>
    <template v-if="map">
      <SurfLocationMarker
        v-for="location in filteredLocations"
        :key="location.id"
        :map="map"
        :location="location"
        :position="{
          lat: location.latLng.lat,
          lng: location.latLng.lng
        }"
        :title="location.address"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { GeoPoint } from "@firebase/firestore"

const props = defineProps<{
  center: GeoPoint
  zoom?: number
}>()

const { google } = useGoogleMaps()
const config = useRuntimeConfig()
const { filteredLocations, selectedLocation } = useSurfLocations()

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<google.maps.Map | null>(null)

const mapConfig = {
  center: { lat: props.center.latitude, lng: props.center.longitude },
  mapId: config.public.GOOGLE_MAPS_MAP_ID,
  zoom: props.zoom || 7.65,
  clickableIcons: false,
  disableDefaultUI: true
}

// Watch for Google Maps to be loaded
watch([google, mapContainer], async ([googleValue, container]) => {
  if (googleValue && container && !map.value) {
    try {
      map.value = new googleValue.maps.Map(container, mapConfig)
    } catch (error) {
      console.error("Error loading map: ", error)
    }
  }
}, { immediate: true })

// Watch for selected location changes and pan to it
watch(selectedLocation, (newSelectedLocation) => {
  if (map.value && newSelectedLocation) {    
    map.value.panTo(newSelectedLocation.latLng)
  }
})
</script>

<style scoped lang="scss">
.surf-location-map {
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
}

.map {
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
}
</style>