<template>
  <div class="surf-business-map">
    <div id="map" ref="mapContainer" class="map" />
    <template v-if="map">
      <SurfBusinessMarker
        v-for="business in allBusinesss"
        :key="business.id"
        :map="map"
        :business="business"
        :position="{
          lat: business.latLng.lat,
          lng: business.latLng.lng
        }"
        :title="business.address"
        :class="{ hidden: !filteredBusinessIds.has(business.id) }"
      />
    </template>
    <NuxtLink         
    v-if="selectedBusiness"
    :to="getBusinessLink(selectedBusiness)">
    <!-- <SurfBusinessListItem
        class="as-card"
        :surf-business="selectedBusiness"
      /> -->
  </NuxtLink>
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
const { filteredBusinessIds, selectedBusiness, allBusinesss  } = useSurfBusinesses()
const { getBusinessLink  } = useBusinessTypeFormatter()

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<google.maps.Map | null>(null)

const mapConfig = {
  center: { lat: props.center.latitude, lng: props.center.longitude },
  mapId: config.public.GOOGLE_MAPS_MAP_ID,
  zoom: props.zoom || 7.65,
  clickableIcons: false,
  disableDefaultUI: true,

}

// Watch for Google Maps to be loaded
watch(
  [google, mapContainer],
  async ([googleValue, container]) => {
    if (googleValue && container && !map.value) {
      try {
        map.value = new googleValue.maps.Map(container, mapConfig)
      } catch (error) {
        console.error("Error loading map: ", error)
      }
    }
  },
  { immediate: true }
)

// Watch for selected business changes and pan to it
watch(selectedBusiness, (newSelectedBusiness) => {
  if (map.value && newSelectedBusiness) {
    // Smooth pan to the selected business with consistent zoom
    map.value.panTo({
      lat: newSelectedBusiness.latLng.lat,
      lng: newSelectedBusiness.latLng.lng
    })
    
    // Ensure zoom level stays consistent
    map.value.setZoom(mapConfig.zoom)
  }
})
</script>

<style scoped lang="scss">
.surf-business-map {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.map {
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
}

.hidden {
  display: none;
}
</style>
