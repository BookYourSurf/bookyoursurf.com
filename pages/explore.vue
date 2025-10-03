<template>
  <div class="map">
    <SurfBusinessFilter class="map__filters" />
    <div class="map__content">
      <SurfBusinessList />
      <SurfBusinessMap :center="center" :zoom="15" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GeoPoint } from "@firebase/firestore"

const center: GeoPoint = new GeoPoint(-8.8282633, 115.0879098)
</script>

<style lang="scss" scoped>
.map__content {
  height: calc(100vh - $navigation-height - 64px);
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  top: 64px;
}

.map__filters {
width: 100%;
position: fixed;
}
</style>
