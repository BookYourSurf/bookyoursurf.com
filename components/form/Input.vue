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
defineProps({
  modelValue: {
    type: [String, Number],
    default: ""
  },
  errors: {
    type: Array<string>,
    default: []
  },
  label: {
    type: String,
    required: true
  },
  type: { type: String, default: "text" },
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
  autocomplete: {
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
.input {
  width: 100%;
}
label {
  background: white;
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
