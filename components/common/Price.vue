<template>
  <div class="item-price flex-row">
    <span class="item-price__currency">$</span>
    <span class="item-price__amount bolder">{{
      formatPrice(amount)
    }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  amount: number
}>()
const formatPrice = (price: number): string => {
    return price.toString();
}
</script>

<style lang="scss" scoped></style>
