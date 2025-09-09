<template>
  <nav class="navigation">
    <div class="navigation__content">
      <NuxtLink to="/">
        <Icon icon="logo" class="navigation__logo color-primary-orange"></Icon>
      </NuxtLink>
      <ul class="navigation__items">
        <li class="navigation__item">
          <NuxtLink to="/list-business"> How it works </NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/list-business"> List your business </NuxtLink>
        </li>
        <li>
          <Button class="button--primary">Stay informed</Button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Component logic will go here
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 0px;
  width: 100%;
  height: $navigation-height;
  display: flex;
  justify-content: center;
  z-index: 1000;
  background-color: $white;
}
.navigation__logo {
  display: flex;
  align-items: center;
  :deep(svg) {
    max-width: 180px;
  }
}
.navigation__content {
  display: flex;
  justify-content: space-between;
  max-width: $content-max-width;
  width: 100%;
  padding: 1rem 1.5rem;
}
.navigation__items {
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 12px;
}
.navigation__item {
  padding: 1rem 1rem;
  :hover {
    color: $primary-orange;
  }
}
</style>
