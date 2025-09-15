<template>
  <div class="input-group">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;

  // TODO: ADD RIGHT VARIABLES
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.25rem;
  }
}
</style>
