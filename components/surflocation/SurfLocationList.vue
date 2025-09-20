<template>
  <div class="surf-location-list">
    <SurfLocationListItem
      v-for="location in filteredLocations"
      :key="location.id"
      :surf-location="location"
    />
  </div>
</template>

<script setup lang="ts">
const { filteredLocations } = useSurfLocations()
</script>

<style lang="scss">
.surf-location-list {
  overflow-y: scroll;
  min-width: fit-content;
}
</style>
