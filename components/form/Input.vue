<template>
  <div class="input">
    <label v-if="label" :for="id ? id : name">{{ label }}</label>
    <div class="input__wrapper flex row align-center center">
      <Icon v-if="icon" :icon="icon" class="input__icon w-fit-content icon--15x15" />
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
    </div>
    <ValidationError :errors="errors" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number
  errors: string[]
  label?: string
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
  icon?: string
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
  title: "",
  label: undefined,
  icon: undefined
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
  padding: $padding-input;
  outline: none;
  border: 1px solid $grey;
  border-radius: $border-radius;
  &:focus {
    border: 1px solid $primary-orange--300;
  }
}
.input__wrapper--with-icon {
  input {
    padding-left: 40px;
  }
}
</style>
