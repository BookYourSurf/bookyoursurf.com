<template>
  <div class="activity-grid">
    <ActivityCard
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activities: SurfActivity[]
}>()
</script>

<style lang="scss">
.activity-grid {
  overflow-y: scroll;
  min-width: fit-content;
}
</style>
