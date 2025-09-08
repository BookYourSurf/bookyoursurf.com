<template>
    <button class="button">{{ buttonText }}</button>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    buttonText: string
  }>()
  </script>

<style lang="scss">

// Reset
.button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
.button {
    border-radius: $border-radius;
    padding: 0.75rem 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    font-weight: 600;

    &.primary {
        background-color: $primary-orange;
        color: $white;
        &:hover {
            background-color: $primary-orange-hover;
        }
    }
}



</style>
  