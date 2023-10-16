<template>
  <ul class="about-us-list">
    <slot />
  </ul>
</template>

<script setup>

</script>

<style lang="scss">
.about-us-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
}
</style>
