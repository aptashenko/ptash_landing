<template>
  <li class="service-card">
    <h2 class="service-card__title subtitle subtitle-lg">
<!--      <slot name="title" />-->
      IT consulting
    </h2>
    <p class="service-card__description text text-lg">
<!--      <slot name="description" />-->
      Our expert team is ready to provide consultations on IT strategies and business process optimization. We will help you develop innovative solutions and choose the right technologies to achieve your goals.
    </p>
    <base-button
        label="Call us"
        class="service-card__button"
    />
  </li>
</template>
<script setup>
import BaseButton from "@/components/BaseButton.vue";
</script>

<style lang="scss">
.service-card {
  flex: 1;

  &__title {
    color: $black-100;
  }

  &__description {
    margin-top: 10px;
    color: $gray-100;
  }

  &__button {
    margin-top: 30px;
  }
}
</style>
