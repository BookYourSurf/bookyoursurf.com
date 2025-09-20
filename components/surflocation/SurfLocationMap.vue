<template>
  <div class="map-container">
    <template v-if="google">
      <Map
        :google="google"
        :map-config="mapConfig"
        :center="{ lat: center.latitude, lng: center.longitude }"
      >
        <template #default="{ map }">
          <SurfLocationMarker
            v-for="location in filteredLocations"
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

const props = defineProps<{
  center: GeoPoint
  zoom?: number
}>()

defineEmits<{
  (e: "locationSelected", latLng: GeoPoint): void
}>()

const { google } = useGoogleMaps()
const config = useRuntimeConfig()
const { filteredLocations } = useSurfLocations()

const mapConfig = {
  center: { lat: props.center.latitude, lng: props.center.longitude },
  mapId: config.public.GOOGLE_MAPS_MAP_ID,
  zoom: props.zoom || 7.65,
  clickableIcons: false,
  disableDefaultUI: true
}
</script>

<style scoped lang="scss">
.map-container {
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
}
</style>
