<template>
  <div class="activity-grid">
    <ActivityCard
      v-for="activity in surfActivities"
      :key="activity.id"
      :activity="activity"
    />
  </div>
</template>

<script setup lang="ts">
import type { SurfActivity } from '~/types/types';

defineProps<{
  surfActivities: SurfActivity[]
}>()
</script>

<style lang="scss">
.activity-grid {
  overflow-y: scroll;
  min-width: fit-content;
}
</style>
