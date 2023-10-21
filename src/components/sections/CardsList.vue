<template>
  <ul class="cards-list">
    <slot />
  </ul>
</template>
<script setup>

</script>

<style lang="scss">
.cards-list {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin: 0 auto;

  padding: 0;

  gap: 10px;

  list-style: none;
}
</style>
