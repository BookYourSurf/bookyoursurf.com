<template>
  <div class="home-email-signup">
    <h2 class="home-email-signup__heading">
      {{ heading }}
    </h2>
    <p class="home-email-signup__subheading mt-0-50">
      {{ content }}
    </p>
    <Form
      class="home-email-signup__form mt-1-0"
      :submit-text="submitText"
      @submit="onEmailSubmit"
    >
      <Input
        v-model="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
        class="home-email-signup__input"
      />
    </Form>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  heading: string
  content: string
  submitText: string
}>()

const emit = defineEmits<{
  (e: "email-submit", email: string): void
}>()

const email = ref("")

function onEmailSubmit(values: Record<string, unknown>) {
  const emailValue = values.email as string
  if (emailValue) {
    emit("email-submit", emailValue)
    email.value = "" // Reset form after submission
  }
}
</script>

<style lang="scss" scoped>
.home-email-signup {
  padding: 1.25rem 2rem;
  background-color: $white;
  text-align: left;
  max-width: 500px;
  margin: auto;
  border-radius: $border-radius-container;
}

.home-email-signup__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: left;
}
</style>
