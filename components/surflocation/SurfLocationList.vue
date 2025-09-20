<template>
  <div class="surf-location-list padding--item">
    <SurfLocationListItem
      v-for="location in surfLocations"
      :key="location.id"
      :surf-location="location"
    />
  </div>
</template>

<script setup lang="ts">
import type { SurfLocation } from "~/types/types"

defineProps<{
  surfLocations: SurfLocation[]
}>()
</script>

<style lang="scss">
.surf-location-list {
  overflow-y: scroll;
  min-width: fit-content;
}
</style>
