<template>
  <div class="select">
    <label v-if="label" :for="id ? id : name">{{ label }}</label>
    <select
      v-bind="$attrs"
      :id="id ? id : name"
      :multiple="multiple"
      :disabled="disabled"
      :required="required"
      :name="name"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :value="modelValue"
      @change="
        $emit(
          'update:modelValue',
          multiple
            ? [...($event.target as HTMLSelectElement).selectedOptions].map(
                (o) => o.value
              )
            : ($event.target as HTMLSelectElement).value
        )
      "
    >
      <option v-if="placeholder" value="" disabled selected hidden>
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        class="select__option"
      >
        {{ option.label }}
      </option>
    </select>
    <ValidationError :errors="errors" />
  </div>
</template>

<script setup lang="ts">
interface SelectOption {
  value: string | number
  label: string
}

interface Props {
  modelValue: string | number | Array<string | number>
  errors: string[]
  label: string
  options: SelectOption[]
  multiple?: boolean
  placeholder?: string
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
  class?: string
  autocomplete?: boolean
}

interface Emits {
  (e: "update:modelValue", value: string | number | Array<string | number>): void
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
  errors: () => [],
  multiple: false,
  placeholder: "",
  disabled: false,
  required: false,
  name: "",
  id: "",
  class: "",
  autocomplete: false
})

defineEmits<Emits>()
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
}
label {
  background: $white;
  position: relative;
  bottom: -12px;
  left: 8px;
  padding: 2px 2px;
}
select {
  width: 100%;
  padding: 8px 12px;
  outline: none;
  border: 1px solid $grey;
  border-radius: $border-radius;
  &:focus {
    border: 2px solid $primary-orange--300;
  }
}
</style>
