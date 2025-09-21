<template>
  <div class="map">
    <SurfLocationFilter />
    <div class="map__content">
      <SurfLocationList />
      <SurfLocationMap :center="center" :zoom="15" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GeoPoint } from "@firebase/firestore"
import SurfLocationMap from "~/components/surflocation/SurfLocationMap.vue"

const center: GeoPoint = new GeoPoint(-8.8282633, 115.0879098)
</script>

<style lang="scss" scoped>
.map__content {
  height: calc(100vh - 2 * $navigation-height);
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
</style>
