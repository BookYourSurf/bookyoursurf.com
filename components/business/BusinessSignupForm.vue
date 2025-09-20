<template>
  <div class="business-signup-form">
    <h2 class="business-signup-form__heading">
      {{ heading }}
    </h2>
    <p class="business-signup-form__content">
      {{ content }}
    </p>
    <Form :submit-text="submitText" @submit="handleSubmit">
      <Input
        v-model="r$.$value.email"
        :errors="r$.email.$errors"
        class="home-email-signup__input"
        placeholder="Enter your email address"
        type="email"
        label="Email"
        name="email"
        @blur="r$.email.$touch()"
      />

      <InputGroup>
        <Input
          v-model="r$.$value.firstName"
          :errors="r$.firstName.$errors"
          label="First name"
          name="first_name"
          @blur="r$.firstName.$touch()"
        />
        <Input
          v-model="r$.$value.lastName"
          :errors="r$.lastName.$errors"
          label="Last name"
          name="last_name"
          @blur="r$.lastName.$touch()"
        />
      </InputGroup>

      <InputGroup>
        <Input
          v-model="r$.$value.businessName"
          :errors="r$.businessName.$errors"
          label="Business name"
          name="business_name"
        />
        <Input
          v-model="r$.$value.websiteUrl"
          :errors="r$.websiteUrl.$errors"
          label="Website url"
          name="website_url"
        />
      </InputGroup>
      <Select
        label="Business type"
        name="business_type"
        :v-model="r$.$value.businessType"
        :errors="r$.businessType.$errors"
        :options="businessTypes"
        placeholder="Select most applicable"
        required
      />
      <Input
        v-model="r$.$value.location"
        :errors="r$.location.$errors"
        label="Location"
        name="location"
      />
    </Form>
  </div>
</template>

<script setup lang="ts">
import { required, email, url } from "@regle/rules"

defineProps<{
  heading: string
  content: string
  submitText: string
}>()

const emit = defineEmits<{
  (e: "submit", values: Record<string, unknown>): void
}>()

const { r$ } = useRegle(
  {
    email: "",
    firstName: "",
    lastName: "",
    businessName: "",
    businessType: "",
    websiteUrl: "",
    location: ""
  },
  {
    email: { email, required },
    firstName: { required },
    lastName: { required },
    businessName: { required },
    businessType: { required },
    websiteUrl: { required, url },
    location: { required }
  },
  {
    silent: true,
    lazy: true,
    rewardEarly: true
  }
)

const businessTypes = [
  { value: "surf-school", label: "Surf school" },
  { value: "surf-coaching", label: "Surf coaching" },
  { value: "photography", label: "Photography" },
  { value: "surf-guiding", label: "Surf guiding" }
]

function handleSubmit(values: Record<string, unknown>) {
  r$.$validate()
  emit("submit", values)
}
</script>

<style lang="scss" scoped>
.business-signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: $white;
  border-radius: $border-radius-container;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: auto;
}
</style>
