<template>
  <div class="map">
    <SurfLocationList />
    <SurfLocationMap
      :center="center"
      :zoom="15"
    />
  </div>
</template>

<script setup lang="ts">
import { GeoPoint } from "@firebase/firestore"
import SurfLocationMap from "~/components/surflocation/SurfLocationMap.vue"

const center: GeoPoint = new GeoPoint(-8.8282633, 115.0879098)

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
