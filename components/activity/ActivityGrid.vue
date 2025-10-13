<template>
  <div class="activity-grid grid-3-columns container">
    <ActivityCard
      v-for="activity in filteredActivities"
      :key="activity.id"
      :activity="activity"
    />
  </div>
</template>

<script setup lang="ts">
import type { ActivityType } from '~/types/activity'

const props = defineProps<{
  businessId?: string
  activityType?: ActivityType
}>()

const { filteredActivities, setFilterBusiness, setFilterType } = useActivities()

// Set business filter when businessId prop changes
watch(() => props.businessId, (newBusinessId) => {
  if (newBusinessId) {
    setFilterBusiness(newBusinessId)
  } else {
    setFilterBusiness(null)
  }
}, { immediate: true })

// Set activity type filter when activityType prop changes
watch(() => props.activityType, (newActivityType) => {
  if (newActivityType) {
    setFilterType(newActivityType)
  } else {
    setFilterType(null)
  }
}, { immediate: true })
</script>

<style lang="scss">
.activity-grid {
  overflow-y: scroll;
}
</style>
