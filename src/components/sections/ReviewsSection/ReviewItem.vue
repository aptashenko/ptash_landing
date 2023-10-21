<template>
  <div class="review">
    <div class="review__avatar">
      <base-image :src="{name: review.ava, dir: 'avatars'}" />
    </div>
    <div class="review__body">
      <h2 class="review__name">
        {{review.name}}
      </h2>
      <p class="review__text">
        {{review.text}}
      </p>
    </div>
  </div>
</template>

<script setup>
import BaseImage from "@/components/BaseComponents/BaseImage.vue";
const props = defineProps({
  avatar: {
    type: String,
    default: ''
  },
  review: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss">
.review {
  display: flex;
  gap: 30px;
  box-shadow: -1px 1px 20px 0px rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &__avatar {
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__name {
    color: $black-100;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.4px;
  }

  &__text {
    color: $black-100;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: 0.28px;
  }
}
</style>
