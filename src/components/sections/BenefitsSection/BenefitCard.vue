<template>
  <div class="benefit-card">
    <div class="benefit-card__content">
      <div class="benefit-card__icon">
        <base-image :src="{name: icon, dir: 'benefits'}" />
      </div>
      <h2 class="benefit-card__subtitle subtitle subtitle-lg">
        <slot name="title" />
      </h2>

      <p class="benefit-card__text text text-lg">
        <slot name="text" />
      </p>
    </div>
  </div>
</template>

<script setup>
import BaseImage from "@/components/shared/BaseImage.vue";

const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.benefit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 20px) / 3);

  padding: 10px;

  &__content {
    width: 50%;
    min-width: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5px;

    &:hover .benefit-card__icon {
      transform: translateY(-20px);
    }
  }

  @media (max-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  &__icon {
    width: 80px;
    height: 80px;
    transition: transform .25s ease;
    cursor: pointer;
  }

  &__subtitle {
    color: $black-100;
  }

  &__text {
    text-align: center;
    color: $black-100;
  }

}
</style>
