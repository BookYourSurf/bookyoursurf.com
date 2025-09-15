<template>
    <div class="full-width map-container">
      <template v-if="google">
        <Map
          :google="google"
          :map-config="mapConfig"
          :center="{ lat: center.latitude, lng: center.longitude }"
        >
          <template #default="{ map }">
              <Marker
                v-for="location in surfLocations"
                :key="location.id"
                :map="map"
                :location="location"
                :google="google"
                :position="{
                  lat: location.latLng.lat,
                  lng: location.latLng.lng
                }"
                :title="location.address"
              />
          </template>
        </Map>
    </template>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { GeoPoint } from "@firebase/firestore"
  import type { SurfLocationDetails } from "~/types/types"
  
  const props = defineProps<{
    surfLocations: SurfLocationDetails[]
    center: GeoPoint
    zoom?: number
  }>()
  
  defineEmits<{
    (e: "locationSelected", latLng: GeoPoint): void
  }>()
  
  const { google } = useGoogleMaps()
  const config = useRuntimeConfig()
  const staticLocations = ref<SurfLocationDetails[]>([])
  const visibleLocations = ref<string[]>([])
  
  const mapConfig = {
    center: { lat: props.center.latitude, lng: props.center.longitude },
    mapId: config.public.GOOGLE_MAPS_MAP_ID,
    zoom: props.zoom || 7.65,
    clickableIcons: false,
    disableDefaultUI: true
  }
  
  // Watch for changes in locations to manage visibility
  watch(
    () => props.surfLocations,
    (newLocations) => {
      if (!staticLocations.value.length) {
        staticLocations.value = props.surfLocations
      }
      visibleLocations.value = newLocations.map((location) => location.id)
    },
    { deep: true }
  )
  </script>
  
  <style scoped lang="scss">
  .map-container {
    position: relative;
    height: calc(100vh - 80px);
  }
  </style>
  