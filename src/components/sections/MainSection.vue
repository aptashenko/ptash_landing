<template>
  <div class="main">
    <div class="main__left">
      <h2 class="main__title title title-xl">
        Creating <span class="main__title--orange">tomorrow's</span> solutions <span class="main__title--orange">today</span>
      </h2>
      <p class="main__text text text-lg">
        We always put forth maximum effort to provide you with high-level technological solutions.
      </p>
      <base-button
          label="Call us"
          class="main__button text text-xl"
      />
    </div>
    <div class="main__right">
      <img src="@/assets/images/main/main.png" alt="two men" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
</script>

<style lang="scss">
.main {
  @include container;
  @include wrapper(30px);

  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    &--orange {
      color: $orange-100;
    }
  }

  &__text {
    color: $gray-100;
    margin-top: 20px;
  }

  &__button {
    margin-top: 30px;
  }

  &__left {
    flex: 1;
    width: 100%;
  }

  &__right {
    flex: 1;
    max-width: 500px;

    & img {
      display: block;
      width: 100%;
    }
  }
}
</style>
