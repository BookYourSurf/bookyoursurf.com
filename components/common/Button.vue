<template>
  <button class="button"><slot /></button>
</template>
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

  &.button--primary {
    background-color: $primary-orange;
    color: $white;
    &:hover {
      background-color: $primary-orange-hover;
    }
  }

  &.button--fullwidth {
    width: 100%;
  }
}
</style>
