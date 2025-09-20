<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-if="icon" class="icon" v-html="icon" />
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()

// Auto-load icons
const icons = Object.fromEntries(
  Object.entries(import.meta.glob("~/assets/icons/*.svg", { as: "raw" })).map(
    ([key, value]) => {
      const filename = key.split("/").pop()!.split(".").shift()
      return [filename, value]
    }
  )
)

// Lazily load the icon
const icon = props.icon && (await icons?.[props.icon]?.())
</script>

<style lang="scss" scoped>
.w-fit-content {
  width: fit-content;
}
.color-primary-orange {
  :deep(svg) {
    color: $primary-orange;
  }
}

.color-grey {
  :deep(svg) {
    color: $grey;
  }
}

.color-white {
  :deep(svg) {
    color: $white;
  }
}
.icon--15x15 {
  width: 15px;
  height: 15px;
  :deep(svg) {
    width: 15px;
    height: 15px;
  }
}
</style>
