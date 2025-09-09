<template>
  <div class="input">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :id="id"
      :type="type"
      :placeholder="placeholder && !label ? placeholder : undefined"
      :name="name"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number],
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  type: { type: String, default: "text" }, // Default input type is text
  placeholder: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  required: {
    type: Boolean,
    default: false
  },
  readonly: Boolean,
  name: {
    type: String,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: Number,
    default: 0
  },
  minlength: {
    type: Number,
    default: 0
  },
  pattern: {
    type: String,
    default: ""
  },
  step: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: ""
  }
})

defineEmits(["update:modelValue"])
</script>

<style lang="scss" scoped>
label {
  background: white;
  position: relative;
  bottom: -12px;
  left: 8px;
  padding: 2px 2px;
}
input {
  width: 100%;
  font-size: 1rem;
  line-height: 100%;
  padding: 8px 12px;
  outline: none;
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
