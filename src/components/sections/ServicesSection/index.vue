<template>
  <section-layout>
    <template #title>
      Our services
    </template>
    <template #body>
      <services-list />
    </template>
  </section-layout>
</template>

<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";
import ServicesList from "@/components/sections/ServicesSection/ServicesList.vue";

</script>

<style lang="scss">

</style>
