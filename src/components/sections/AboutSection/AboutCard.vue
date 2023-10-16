<template>
  <li class="about-us-card">
    <p class="about-us-card__text text text-lg">
      <slot name="text" />
    </p>
  </li>
</template>

<script setup></script>

<style lang="scss">
.about-us-card {
  flex: 1;
  border-radius: 20px;
  padding: 20px;
  background: #FFF;
  box-shadow: -1px 1px 20px 0px rgba(128, 128, 128, 0.10);

  display: flex;
  flex-direction: column;

  transition: all .25s ease;

  &:hover {
    background: #F9FAFF;
    box-shadow: 0px 12px 30px 0px rgba(71, 71, 71, 0.15);
    transform: translateY(-10px);
  }

  &__text {
    color: $gray-100;
  }
}
</style>
