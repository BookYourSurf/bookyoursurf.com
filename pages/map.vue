<template>
  <div class="map">
    <SurfLocationList :surf-locations="surfLocations" />
    <SurfLocationMap
      :surf-locations="surfLocations"
      :center="center"
      :zoom="15"
      @marker-click="handleMarkerClick"
      @location-selected="handleLocationSelected"
    />
  </div>
</template>

<script setup lang="ts">
import type { SurfLocation } from "~/types/types"
import { GeoPoint } from "@firebase/firestore"
import { mockLocations } from "~/mocks/mock-locations"
import SurfLocationMap from "~/components/surflocation/SurfLocationMap.vue"

// Mock data
const surfLocations = ref<SurfLocation[]>(mockLocations)

// Center the map on Bali
const center: GeoPoint = new GeoPoint(-8.8282633, 115.0879098)

const handleMarkerClick = (location: SurfLocation) => {
  console.log("Marker clicked:", location)
  // Handle marker click - could show details, navigate, etc.
}

const handleLocationSelected = (latLng: GeoPoint) => {
  console.log("Location selected:", latLng)
  // Handle location selection
}
</script>

<style lang="scss" scoped>
.map {
  height: calc(100vh - $navigation-height);
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
</style>
