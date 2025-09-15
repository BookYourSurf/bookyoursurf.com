<template>
    <div class="map-page">
      <MarkedMap 
        :surf-locations="surfLocations"
        :center="center"
        :zoom="10"
        @marker-click="handleMarkerClick"
        @location-selected="handleLocationSelected"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import type { SurfLocationDetails } from "~/types/types"
  import { GeoPoint } from "@firebase/firestore"
  import { mockLocations } from '~/mocks/mock-locations'
  

  // Mock data
  const surfLocations = ref<SurfLocationDetails[]>(mockLocations)
  
  // Center the map on Bali
  const center: GeoPoint = new GeoPoint(-8.6500, 115.1333)

  const handleMarkerClick = (location: SurfLocationDetails) => {
    console.log('Marker clicked:', location)
    // Handle marker click - could show details, navigate, etc.
  }
  
  const handleLocationSelected = (latLng: GeoPoint) => {
    console.log('Location selected:', latLng)
    // Handle location selection
  }
  </script>
  
  <style lang="scss" scoped>
  .map {
    height: 100vh;
    width: 100%;
  }
  </style>
  