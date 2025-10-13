<template>
  <div class="activity-card">
    <Image :image="activity.images[0]" class="activity-card__image"/>
    <div class="activity-card__title-subtitle mt-0-25"> 
        <h3 class="activity-card__title">{{ activity.name }}</h3>
        <p class="activity-card__subtitle">{{ activity.description }}</p>
    </div>
    <div class ="activity-card__footer">
      <Rating
        class="activity-card__rating"
        :rating="activity.rating.rating"
        :review-count="activity.rating.reviewCount"
      />
      <div class="activity-card__price">
        {{ formatPrice(activity.price) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Activity } from '~/types/types';

defineProps<{
  activity: Activity
}>()

const { formatPrice } = useTextFormatter()
</script>

<style lang="scss" scoped>
.activity-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
}

.activity-card__image {
  flex: 0 0 50%;
  width: 100%;
  object-fit: cover;
  height: 0;
  border-radius: $border-radius;
}

.activity-card__title-subtitle {
  flex: 1;
}

.activity-card__footer {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
