<template>
  <div class="surf-business-list">
    <SurfBusinessListItem
      v-for="business in filteredBusinesss"
      :key="business.id"
      :surf-business="business"
    />
  </div>
</template>

<script setup lang="ts">
const { filteredBusinesss } = useSurfBusinesses()
</script>

<style lang="scss">
.surf-business-list {
  overflow-y: scroll;
  min-width: fit-content;
}
</style>
