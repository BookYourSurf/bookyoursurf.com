<template>
  <div class="filter-tabs">
    <div class="filter-tabs__container">
        <Button
            v-if="allowClear && !selectedValue"
            type="button"
            class="filter-tabs__tab weight-400 button--light-grey"
            @click="selectOption(null)"
        >
            {{ placeholder }}
        </Button>
      <Button
        v-for="option in visibleOptions"
        :key="option.value"
        type="button"
        class="filter-tabs__tab weight-400"
        :class="{
          'button--primary': selectedValue === option.value,
          'button--light-grey': selectedValue !== option.value
        }"
        @click="selectOption(option.value)"
      >
        <span class="filter-tabs__tab-content">
          {{ option.label }}
          <Icon
            v-if="selectedValue === option.value"
            icon="cross"
            class="filter-tabs__close-icon icon--13x13 color-white"
          />
        </span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FilterOption {
  value: string
  label: string
}

interface Props {
  modelValue: string | null
  label: string
  placeholder: string
  options: FilterOption[]
  allowClear?: boolean
}

interface Emits {
  (e: "update:modelValue", value: string | null): void
}

const props = withDefaults(defineProps<Props>(), {
  allowClear: true
})

const emit = defineEmits<Emits>()

// Computed properties
const selectedValue = computed(() => props.modelValue)

const visibleOptions = computed(() => {
  if (selectedValue.value) {
    // Only show the selected option when something is selected
    return props.options.filter(option => option.value === selectedValue.value)
  }
  // Show all options when nothing is selected
  return props.options
})

const selectOption = (value: string | null) => {
  if (selectedValue.value === value) {
    emit("update:modelValue", null)
  } else {
    emit("update:modelValue", value)
  }
}
</script>

<style lang="scss" scoped>
.filter-tabs {
  width: fit-content;
}

.filter-tabs__container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  transition: gap 0.3s ease;
}

.filter-tabs__tab {
  white-space: nowrap;
  border-radius: $border-radius-pill;
}

.filter-tabs__tab-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-tabs__close-icon {
  transition: opacity 0.2s ease;
}
</style>
