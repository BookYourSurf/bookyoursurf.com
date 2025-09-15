<template>
  <ul>
    <li class="error__message" v-for="error in errors" :key='error'>
      {{ error }}
    </li>
  </ul>
</template>

<script setup lang="ts">

defineProps<{
    errors: Array<string>
}>()
</script>

<style lang="scss" scoped>
ul {
  list-style: none;

}
.error__message {
  color: #ef4444;
  font-size: 0.875rem;
}

</style>
