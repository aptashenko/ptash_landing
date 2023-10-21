<template>
  <li class="service-card">
    <div class="service-card__image">
      <img :src="imageUrl" />
    </div>
    <h2 class="service-card__title subtitle subtitle-lg">
      <slot name="title" />
    </h2>
    <p class="service-card__description text text-lg">
      <slot name="description" />
    </p>
    <base-button
        label="Call us"
        class="service-card__button"
    />
  </li>
</template>
<script setup>
import BaseButton from "@/components/BaseButton.vue";
import {computed} from "vue";
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})


const imageUrl = computed(() => new URL(`../../../assets/images/services/${props.icon}`, import.meta.url).href)

</script>

<style lang="scss">
.service-card {
  flex: 1;
  min-width: 300px;
  padding: 20px;

  border-radius: 20px;
  background: #FFF;
  box-shadow: -1px 1px 20px 0px rgba(128, 128, 128, 0.10);

  transition: all .25s ease;

  &:hover {
    background: #F9FAFF;
    box-shadow: 0px 12px 30px 0px rgba(71, 71, 71, 0.15);
    transform: translateY(-10px);
  }

  &__image {
    border-radius: 25px;
    overflow: hidden;
    & img {
      display: block;
      width: 100%;
    }
  }

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
