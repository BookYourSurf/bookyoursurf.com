<template>
  <div class="activity-card">
    <div class="activity-card__title-subtitle mt-0-25"> 
        <h3 class="activity-card__title">{{ activity.name }}</h3>
        <p class="activity-card__subtitle">{{ activity.description }}</p>
    </div>
    <h3 class="activity-card__title">{{ activity.name }}</h3>
    <p class="activity-card__description">{{ activity.description }}</p>
    
    <Rating
      class="activity-card__rating"
      :rating="activity.rating.rating"
      :review-count="activity.rating.reviewCount"
    />
    
    <!-- Activity Price -->
    <div class="activity-card__price">
      {{ formatPrice(activity.price) }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Activity {
  id: string
  name: string
  description: string
  rating: {
    rating: number
    reviewCount: number
  }
  price: number
}

const props = defineProps<{
  activity: Activity
}>()

const { formatPrice } = useTextFormatter()
</script>

<style lang="scss" scoped>
// No CSS as requested
</style>
