<template>
  <div class="item-rating flex-row">
    <Icon
      class="item-rating__star icon--15x15"
      :class="rating > 3.5 ? 'color-primary-orange' : 'color-grey'"
      icon="rating-star-full"
    />
    <span class="item-rating__value ml-0-25 bolder">{{
      rating.toFixed(1)
    }}</span>
    <span class="item-rating__count ml-0-25"
      >({{ formatReviewCount(reviewCount) }})</span
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  rating: number
  reviewCount: number
}>()

const formatReviewCount = (count: number): string => {
  if (count === 0) return "0"
  if (count < 10) return count.toString()
  if (count < 100) return `${count}+`
  if (count < 1000) return `${Math.floor(count / 10) * 10}+`
  if (count < 10000) return `${Math.floor(count / 100) * 100}+`
  if (count < 100000) return `${Math.floor(count / 1000)}k+`
  return `${Math.floor(count / 10000)}0k+`
}
</script>

<style lang="scss" scoped></style>
