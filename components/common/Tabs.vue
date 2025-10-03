<template>
  <div class="filter-dropdown" :class="{ 'filter-dropdown--open': isOpen }">
    <div class="filter-dropdown__container">
      <Button
        :id="dropdownId"
        ref="filterDropdownTrigger"
        class="filter-dropdown__trigger button--light-greybutton--light-grey"
        :aria-expanded="isOpen"
        :aria-haspopup="true"
        @click="toggleDropdown"
      >
        <span class="filter-dropdown__trigger-text weight-400">
          {{ selectedOption?.label || placeholder }}
        </span>
        <Icon
          icon="chevron"
          class="filter-dropdown__trigger-icon"
          :class="{ 'filter-dropdown__trigger-icon--open': isOpen }"
          aria-hidden="true"
        />
      </Button>

      <Transition name="dropdown">
        <div
          v-if="isOpen"
          ref="dropdownMenu"
          class="filter-dropdown__menu"
          role="listbox"
          :aria-labelledby="dropdownId"
        >
          <Button
            v-if="allowClear"
            type="Button"
            class="filter-dropdown__option weight-400 filter-dropdown__option--clear"
            :class="{ 'filter-dropdown__option--selected': !selectedValue }"
            @click="selectOption(null)"
          >
            {{ placeholder }}
          </Button>

          <Button
            v-for="option in options"
            :key="option.value"
            type="Button"
            class="filter-dropdown__option weight-400"
            :class="{
              'filter-dropdown__option--selected':
                selectedValue === option.value
            }"
            :aria-selected="selectedValue === option.value"
            @click="selectOption(option.value)"
          >
            {{ option.label }}
          </Button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue"

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

// Generate unique ID for accessibility
const dropdownId = `filter-dropdown-${useId()}`

// Reactive state
const isOpen = ref(false)
const filterDropdownTrigger = ref<InstanceType<typeof Button>>()
const dropdownMenu = ref<HTMLDivElement>()

// Computed properties
const selectedValue = computed(() => props.modelValue)
const selectedOption = computed(() =>
  props.options.find((option) => option.value === props.modelValue)
)

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      // Focus first option when opening
      const firstOption = dropdownMenu.value?.querySelector(
        "Button"
      ) as HTMLButtonElement
      firstOption?.focus()
    })
  }
}

const selectOption = (value: string | null) => {
  emit("update:modelValue", value)
  isOpen.value = false
  filterDropdownTrigger.value?.$el?.focus()
}

const handleClickOutside = (event: Event) => {
  if (
    (isOpen.value && !event.target) ||
    (!filterDropdownTrigger.value?.$el?.contains(event.target as Node) &&
      !dropdownMenu.value?.contains(event.target as Node))
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>

<style lang="scss" scoped>
.filter-dropdown {
  position: relative;
  width: fit-content;
}

.filter-dropdown__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $padding-button;
  border-radius: $border-radius-pill;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.filter-dropdown__trigger-icon {
  margin-left: 0.5rem;
  transform-origin: center;
  height: 18px;
  width: 18px;

  &--open {
    transform: rotate(180deg);
  }
}

.filter-dropdown__menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
  margin-top: 0.25rem;
  background-color: $white;
  border-radius: 0.375rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 200px;
  min-width: 200px;
  overflow-y: auto;
}

.filter-dropdown__option {
  width: 100%;
  display: block;
  padding: $padding-button;
  text-align: left;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: $grey-hover;
  }

  &:focus {
    outline: none;
  }

  &--selected {
    background-color: $primary-orange-hover;
  }
}

// Transition animations
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.15s ease-in-out,
    transform 0.15s ease-in-out;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-0.5rem);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
