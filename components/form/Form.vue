<template>
  <form novalidate @submit.prevent="onSubmit">
    <slot />
    <slot name="actions">
      <Button type="submit" class="button--primary button--fullwidth mt-0-50">{{
        submitText
      }}</Button>
    </slot>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "submit", values: Record<string, unknown>): void
}>()

defineProps<{
  submitText: string
}>()

function onSubmit(event: Event) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  const values = Object.fromEntries(formData.entries())
  emit("submit", values)
}
</script>

<style lang="scss"></style>
