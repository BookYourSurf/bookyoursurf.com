<template>
  <nav class="navigation">
    <div class="navigation__content">
      <NuxtLink to="/">
        <Icon icon="logo" class="navigation__logo color-primary-orange"></Icon>
      </NuxtLink>
      <Search v-if="search"></Search>
      <ul class="navigation__items">
        <li class="navigation__item">
          <NuxtLink to="/list-business"> How it works </NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/list-business"> List your business </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/explore">
            <Button class="button--primary"> Book your surf! </Button>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  search?: boolean
}

withDefaults(defineProps<Props>(), {
  search: true
})
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 0px;
  width: 100%;
  height: $navigation-height;
  display: flex;
  justify-content: center;
  z-index: 2;
  background-color: $white;
  box-shadow: $box-shadow;
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
  align-items: center;
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
