<template>
  <ul class="services-list">
    <service-card v-for="item of 3" />
  </ul>
</template>
<script setup>
import ServiceCard from "@/components/sections/ServicesSection/ServiceCard.vue";
</script>

<style lang="scss">
.services-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  padding: 0;

  list-style: none;

  gap: 10px;
}
</style>
