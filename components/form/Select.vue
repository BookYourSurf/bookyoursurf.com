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
            ? [...($event.target as HTMLSelectElement).selectedOptions].map((o) => o.value)
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
    <ValidationError :errors="errors"/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number, Array],
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
  options: {
    type: Object,
    required: true
  },
  multiple: { type: Boolean, default: false },
  placeholder: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  required: Boolean,
  name: {
    type: String,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  class: {
    type: String,
    default: ""
  },
  autocomplete: {
    type: Boolean,
    default: false
  }
})

defineEmits(["update:modelValue"]) // Emits update event for v-model
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
}
label {
  background: white;
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
