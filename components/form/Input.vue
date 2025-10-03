<template>
  <div class="input">
    <label v-if="label" :for="id ? id : name">{{ label }}</label>
    <input
      v-bind="$attrs"
      :id="id ? id : name"
      :type="type"
      :placeholder="placeholder && !label ? placeholder : undefined"
      :name="name"
      :value="modelValue"
      :autocomplete="autocomplete ? 'on' : 'off'"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <ValidationError :errors="errors" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number
  errors: string[]
  label: string
  type?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  name?: string
  id?: string
  autofocus?: boolean
  autocomplete?: boolean
  maxlength?: number
  minlength?: number
  pattern?: string
  step?: number
  title?: string
}

interface Emits {
  (e: "update:modelValue", value: string | number): void
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
  errors: () => [],
  type: "text",
  placeholder: "",
  disabled: false,
  required: false,
  readonly: false,
  name: "",
  id: "",
  autofocus: false,
  autocomplete: false,
  maxlength: 0,
  minlength: 0,
  pattern: "",
  step: 0,
  title: ""
})

defineEmits<Emits>()
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
}
label {
  background: $white;
  position: relative;
  bottom: -12px;
  left: 8px;
  padding: 2px 2px;
}
input {
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
