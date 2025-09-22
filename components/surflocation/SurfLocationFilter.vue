<template>
  <div class="surf-location-filter padding--item">
    <FilterDropdown
      v-model="selectedType"
      label="Filter by Type"
      placeholder="All Types"
      :options="typeOptions"
      @update:model-value="handleTypeChange"
    />
  </div>
</template>

<script setup lang="ts">
import { SurfLocationType } from "~/types/types"

const { setFilterType, clearFilters } = useSurfLocations()
const { getLocationTypeLabel } = useLocationTypeFormatter()

const selectedType = ref<string | null>(null)

const typeOptions = computed(() => [
  {
    value: SurfLocationType.SURF_SPOT,
    label: getLocationTypeLabel(SurfLocationType.SURF_SPOT)
  },
  {
    value: SurfLocationType.SURF_SHOP,
    label: getLocationTypeLabel(SurfLocationType.SURF_SHOP)
  },
  {
    value: SurfLocationType.SURF_GUIDE,
    label: getLocationTypeLabel(SurfLocationType.SURF_GUIDE)
  },
  {
    value: SurfLocationType.SURF_COACHING,
    label: getLocationTypeLabel(SurfLocationType.SURF_COACHING)
  },
  {
    value: SurfLocationType.PHOTOGRAPHY,
    label: getLocationTypeLabel(SurfLocationType.PHOTOGRAPHY)
  }
])

const handleTypeChange = (value: string | null) => {
  if (value) {
    setFilterType(value as SurfLocationType)
  } else {
    clearFilters()
  }
}
</script>

<style lang="scss" scoped>
.surf-location-filter {
  z-index: 3;
  position: relative;
  background: $white;
  box-shadow: $box-shadow;
  border-top: 1px solid $light-grey;
}
</style>
