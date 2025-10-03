<template>
  <div class="surf-business-filter padding--item">
    
    <FilterTabs
      v-model="selectedType"
      label="Filter by Type"
      placeholder="All Types"
      :allow-clear="false"
      :options="typeOptions"
      @update:model-value="handleTypeChange"
    />
  </div>
</template>

<script setup lang="ts">
import { SurfBusinessType } from "~/types/types"

const { setFilterType, clearFilters } = useSurfBusinesses()
const { getBusinessTypeLabel } = useBusinessTypeFormatter()

const selectedType = ref<string | null>(null)

const typeOptions = computed(() => [
  {
    value: SurfBusinessType.SURF_SPOT,
    label: getBusinessTypeLabel(SurfBusinessType.SURF_SPOT)
  },
  {
    value: SurfBusinessType.SURF_SHOP,
    label: getBusinessTypeLabel(SurfBusinessType.SURF_SHOP)
  },
  {
    value: SurfBusinessType.SURF_GUIDE,
    label: getBusinessTypeLabel(SurfBusinessType.SURF_GUIDE)
  },
  {
    value: SurfBusinessType.SURF_COACHING,
    label: getBusinessTypeLabel(SurfBusinessType.SURF_COACHING)
  },
  {
    value: SurfBusinessType.PHOTOGRAPHY,
    label: getBusinessTypeLabel(SurfBusinessType.PHOTOGRAPHY)
  }
])

const handleTypeChange = (value: string | null) => {
  if (value) {
    setFilterType(value as SurfBusinessType)
  } else {
    clearFilters()
  }
}
</script>

<style lang="scss" scoped>
.surf-business-filter {
  z-index: 3;
  position: relative;
  background: $white;
  box-shadow: $box-shadow;
  border-top: 1px solid $light-grey;
}
</style>
